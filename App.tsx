
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, BarChart3, Database, Info, TrendingDown, Users, Globe, Building2, ChevronRight, MessageSquare, AlertCircle, Calendar, ArrowUpRight, ArrowDownRight, Target, X, Check, FileText, Sparkles, ClipboardList, Trophy } from 'lucide-react';
import { RetentionData, RankingType } from './types';
import { DATA_NACIONAL, DATA_UNIVERSIDADES, DATA_U_REF, DATA_U_ACREDITADAS } from './data';
import { GoogleGenAI } from "@google/genai";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'rankings' | 'chat'>('dashboard');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [activeRanking, setActiveRanking] = useState<RankingType>(RankingType.UNIVERSIDADES);
  
  const [selectedIES, setSelectedIES] = useState<string>('1711'); // La Sabana
  const [iesSearch, setIesSearch] = useState('');
  const [isIesListOpen, setIsIesListOpen] = useState(false);
  const iesSelectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (iesSelectorRef.current && !iesSelectorRef.current.contains(event.target as Node)) {
        setIsIesListOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const iesList = useMemo(() => {
    const uniqueMap = new Map<string, string>();
    [...DATA_UNIVERSIDADES, ...DATA_NACIONAL, ...DATA_U_REF, ...DATA_U_ACREDITADAS].forEach(d => {
      if (!uniqueMap.has(d.IES)) {
        uniqueMap.set(d.IES, d.NombreInstitucion);
      }
    });
    return Array.from(uniqueMap.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredIesList = useMemo(() => {
    const searchLower = iesSearch.toLowerCase();
    return iesList.filter(ies => 
      ies.name.toLowerCase().includes(searchLower) || 
      ies.id.includes(searchLower)
    );
  }, [iesList, iesSearch]);

  const selectedIesName = useMemo(() => {
    return iesList.find(i => i.id === selectedIES)?.name || 'Seleccionar Institución';
  }, [iesList, selectedIES]);

  const allPeriods = useMemo(() => {
    const periods = new Set<string>();
    DATA_UNIVERSIDADES.forEach(item => periods.add(item.Periodo));
    return Array.from(periods).sort((a, b) => b.localeCompare(a));
  }, []);

  const [selectedPeriod, setSelectedPeriod] = useState<string>(allPeriods[0]);

  const rankingDataMap = useMemo(() => ({
    [RankingType.NACIONAL]: DATA_NACIONAL,
    [RankingType.UNIVERSIDADES]: DATA_UNIVERSIDADES,
    [RankingType.U_REF]: DATA_U_REF,
    [RankingType.U_ACREDITADAS]: DATA_U_ACREDITADAS,
  }), []);

  const currentIESData = useMemo(() => {
    return DATA_UNIVERSIDADES.filter(d => d.IES === selectedIES).sort((a, b) => a.Periodo.localeCompare(b.Periodo));
  }, [selectedIES]);

  const latestDataForIES = useMemo(() => {
    return currentIESData.find(d => d.Periodo === selectedPeriod) || currentIESData[currentIESData.length - 1];
  }, [currentIESData, selectedPeriod]);

  const sectorAverage = useMemo(() => {
    const periodData = DATA_UNIVERSIDADES.filter(d => d.Periodo === selectedPeriod);
    if (periodData.length === 0) return 0;
    return periodData.reduce((acc, curr) => acc + curr.Desercion, 0) / periodData.length;
  }, [selectedPeriod]);

  const variationStats = useMemo(() => {
    if (!latestDataForIES) return { val: '---', label: 'Sin registros', trend: 'neutral' as const, description: '' };
    const sortedHistory = [...currentIESData].sort((a, b) => a.Periodo.localeCompare(b.Periodo));
    const currentIndex = sortedHistory.findIndex(d => d.Periodo === latestDataForIES.Periodo);
    if (currentIndex <= 0) return { val: '---', label: 'Dato Inicial', trend: 'neutral' as const, description: '' };
    const previousData = sortedHistory[currentIndex - 1];
    const diff = latestDataForIES.Desercion - previousData.Desercion;
    const rawVariation = (diff / previousData.Desercion) * 100;
    if (rawVariation < 0) return { val: `${rawVariation.toFixed(1)}%`, label: `Mejora vs ${previousData.Periodo}`, trend: 'good' as const, description: `Reducción de deserción del ${Math.abs(rawVariation).toFixed(1)}%.` };
    if (rawVariation > 0) return { val: `+${rawVariation.toFixed(1)}%`, label: `Aumento vs ${previousData.Periodo}`, trend: 'bad' as const, description: `Incremento de deserción del ${rawVariation.toFixed(1)}%.` };
    return { val: '0%', label: 'Estable', trend: 'neutral' as const, description: 'Sin cambios semestrales.' };
  }, [latestDataForIES, currentIESData]);

  const handleAnalysis = async (e?: React.FormEvent, directQuery?: string) => {
    if (e) e.preventDefault();
    const finalQuery = directQuery || query;
    if (!finalQuery.trim()) return;

    setQuery(finalQuery);
    setLoading(true);
    setChatResponse(null);
    setActiveTab('chat');

    try {
      const queryLower = finalQuery.toLowerCase();
      // Refined extraction logic
      const mentionedIES = DATA_UNIVERSIDADES.find(ies => 
        (queryLower.includes(ies.NombreInstitucion.toLowerCase()) && ies.NombreInstitucion.length > 5) || 
        queryLower.includes(` ${ies.IES} `) ||
        (queryLower.includes("rosario") && ies.NombreInstitucion.toLowerCase().includes("rosario")) ||
        (queryLower.includes("andes") && ies.NombreInstitucion.toLowerCase().includes("andes")) ||
        (queryLower.includes("sabana") && ies.NombreInstitucion.toLowerCase().includes("sabana"))
      );

      const subjectIESID = mentionedIES ? mentionedIES.IES : selectedIES;
      const subjectData = DATA_UNIVERSIDADES.filter(d => d.IES === subjectIESID).sort((a, b) => a.Periodo.localeCompare(b.Periodo));
      const subjectName = subjectData[0]?.NombreInstitucion || 'Institución Desconocida';

      // Benchmark logic: If subject is Sabana, compare against the leader (Rank 1) or Los Andes
      const isSabanaSubject = subjectIESID === '1711';
      const benchmarkIESID = isSabanaSubject ? '1813' : '1711'; // Compare vs Andes (1813) if Sabana, else vs Sabana (1711)
      const benchmarkData = DATA_UNIVERSIDADES.filter(d => d.IES === benchmarkIESID).sort((a, b) => a.Periodo.localeCompare(b.Periodo));
      const benchmarkName = isSabanaSubject ? "U. de los Andes (Referente Top)" : "U. de La Sabana (Benchmark)";

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Eres un Analista Experto Senior en Educación Superior en Colombia. 
        Analiza a la institución: ${subjectName}.
        
        DATOS DE LA IES ANALIZADA:
        ${JSON.stringify(subjectData)}
        
        DATOS DEL BENCHMARK (${benchmarkName}):
        ${JSON.stringify(benchmarkData)}
        
        INSTRUCCIONES DE REPORTE:
        1. Identificación: El usuario pregunta por ${subjectName}. NUNCA lo compares consigo mismo.
        2. Si el usuario pregunta por La Sabana, compárala contra Los Andes para ver quién tiene mejor retención.
        3. ESTRUCTURA:
           # INFORME ESTRATÉGICO: ${subjectName}
           ## 📊 Resumen de Desempeño
           (Tasa actual y ranking sectorial).
           ## 📈 Análisis Semestral
           (Menciona si la variación fue MEJORA o ALERTA).
           ## ⚖️ Benchmarking vs ${benchmarkName}
           Genera una TABLA Markdown con columnas: Periodo | Tasa ${subjectName} | Tasa ${benchmarkName} | Diferencia (p.p.).
           (Recuerda: Diferencia = Tasa Sujeto - Tasa Benchmark).
           ## 💡 Conclusión Analítica
           (Párrafo ejecutivo de 3 líneas).
        
        Consulta: ${finalQuery}
      `;

      const response = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: prompt });
      setChatResponse(response.text || 'Error generando reporte.');
    } catch (error) {
      setChatResponse('Error de comunicación con el motor de IA.');
    } finally {
      setLoading(false);
    }
  };

  const renderMarkdown = (text: string) => {
    let output = [];
    let inTable = false;
    let tableRows = [];

    const processedText = text
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-black mb-8 pb-4 border-b-4 border-indigo-600 text-slate-900 tracking-tight">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-12 mb-6 text-indigo-700 uppercase tracking-widest flex items-center gap-3"><span class="w-2 h-8 bg-indigo-600 rounded-full"></span> $1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-slate-900 bg-indigo-50 px-1.5 rounded">$1</strong>');

    const lines = processedText.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('|')) {
        inTable = true;
        if (line.includes('---')) continue;
        const cells = line.split('|').filter(c => c.trim() !== '').map(c => c.trim());
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        output.push(generateHtmlTable(tableRows));
        tableRows = [];
        inTable = false;
      }

      if (line !== '') {
        if (!line.startsWith('<h')) {
          output.push(`<p class="mb-5 text-slate-600 leading-relaxed text-lg font-medium">${line}</p>`);
        } else {
          output.push(line);
        }
      } else {
        output.push('<div class="h-2"></div>');
      }
    }

    if (inTable && tableRows.length > 0) output.push(generateHtmlTable(tableRows));
    return output.join('');
  };

  const generateHtmlTable = (rows: string[][]) => {
    if (rows.length === 0) return '';
    const headers = rows[0];
    const body = rows.slice(1);

    return `
      <div class="my-10 overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl bg-white ring-1 ring-slate-200/50">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-900 text-white">
                ${headers.map(h => `<th class="px-8 py-5 text-[11px] font-black uppercase tracking-[0.2em] opacity-80">${h}</th>`).join('')}
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${body.map(row => `
                <tr class="hover:bg-slate-50 transition-colors group">
                  ${row.map((cell, idx) => `
                    <td class="px-8 py-5 text-sm font-bold ${idx === 0 ? 'text-indigo-600' : 'text-slate-700'}">
                      ${cell}
                    </td>
                  `).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 bg-white border-r border-slate-200 flex flex-col shrink-0 z-40 shadow-sm">
        <div className="p-4 md:p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-100">
            <TrendingDown size={22} />
          </div>
          <h1 className="font-bold text-slate-800 hidden md:block leading-tight text-sm uppercase tracking-tighter">
            Analítica de <br/>Retención IES
          </h1>
        </div>
        <nav className="flex-1 p-2 md:p-4 space-y-1">
          {[
            { id: 'dashboard', label: 'Panel Estratégico', icon: <BarChart3 size={20} /> },
            { id: 'rankings', label: 'Rankings y Datos', icon: <Database size={20} /> },
            { id: 'chat', label: 'Consultoría IA', icon: <MessageSquare size={20} /> }
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id as any)} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-100 font-bold' : 'text-slate-500 hover:bg-slate-50'}`}>
              {item.icon}
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-100 hidden md:block">
          <div className="bg-slate-900 rounded-2xl p-4 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-[10px] text-indigo-400 font-black uppercase mb-1">Referente Nacional</div>
              <div className="font-bold text-sm leading-tight mb-2 truncate">U. de La Sabana</div>
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-slate-400">Tasa:</span>
                <span className="text-green-400 font-bold">2.64%</span>
              </div>
            </div>
            <div className="absolute -right-2 -bottom-2 opacity-10"><Target size={60} /></div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-30">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={18} />
              <input type="text" placeholder="Consultar IES: 'Dame el análisis de la U Rosario'" className="w-full bg-slate-100 border-transparent rounded-full py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all outline-none" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAnalysis()} />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
              <Calendar size={14} className="text-indigo-600" />
              <select className="bg-transparent border-none text-xs font-black text-slate-700 outline-none cursor-pointer" value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                {allPeriods.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 pb-24">
          {activeTab === 'dashboard' && (
            <>
              {/* Institutional Selector */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Panel Estratégico</h2>
                  <p className="text-slate-500 font-medium">Indicadores de gestión y competitividad de retención</p>
                </div>
                <div className="w-full md:w-[480px] relative" ref={iesSelectorRef}>
                  <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Institución Activa</label>
                  <button onClick={() => setIsIesListOpen(!isIesListOpen)} className={`w-full flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 hover:bg-white hover:border-indigo-500 transition-all shadow-sm ${isIesListOpen ? 'ring-4 ring-indigo-500/10 border-indigo-500 bg-white' : ''}`}>
                    <div className="flex items-center gap-3 overflow-hidden">
                      <Building2 size={20} className="text-indigo-600 shrink-0" />
                      <span className="font-bold text-slate-700 truncate">{selectedIesName}</span>
                    </div>
                    <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${isIesListOpen ? 'rotate-90' : ''}`} />
                  </button>
                  {isIesListOpen && (
                    <div className="absolute top-full left-0 w-full mt-3 bg-white border border-slate-200 rounded-3xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                      <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                          <input autoFocus type="text" placeholder="Buscar institución..." className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none font-medium" value={iesSearch} onChange={(e) => setIesSearch(e.target.value)} />
                        </div>
                      </div>
                      <div className="max-h-[320px] overflow-y-auto p-2 space-y-1">
                        {filteredIesList.length > 0 ? filteredIesList.map(ies => (
                          <button key={ies.id} onClick={() => { setSelectedIES(ies.id); setIsIesListOpen(false); setIesSearch(''); }} className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between group ${selectedIES === ies.id ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-50 text-slate-700'}`}>
                            <div className="flex flex-col overflow-hidden">
                              <span className="font-bold truncate">{ies.name}</span>
                              <span className={`text-[10px] ${selectedIES === ies.id ? 'text-indigo-200' : 'text-slate-400'}`}>ID: {ies.id}</span>
                            </div>
                            {selectedIES === ies.id && <Check size={16} />}
                          </button>
                        )) : <div className="p-8 text-center text-slate-400 italic text-sm">Sin coincidencias</div>}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard label="Tasa de Deserción" value={`${(latestDataForIES?.Desercion * 100 || 0).toFixed(2)}%`} subtitle={`Periodo ${selectedPeriod}`} icon={<Target className="text-indigo-600" />} color="indigo" />
                <StatCard label="Variación Semestral" value={variationStats.val} subtitle={variationStats.label} icon={variationStats.trend === 'good' ? <ArrowDownRight className="text-green-600" /> : <ArrowUpRight className="text-red-600" />} trend={variationStats.trend} color={variationStats.trend === 'good' ? 'green' : 'red'} tooltip={variationStats.description} />
                <StatCard label="Brecha vs Media" value={`${((latestDataForIES?.Desercion || 0) - sectorAverage > 0 ? '+' : '')}${(((latestDataForIES?.Desercion || 0) - sectorAverage) * 100).toFixed(2)}%`} subtitle={`Media: ${(sectorAverage * 100).toFixed(2)}%`} icon={<Globe className="text-blue-600" />} color="blue" trend={(latestDataForIES?.Desercion || 0) < sectorAverage ? 'good' : 'bad'} />
                <StatCard label="Ranking Sectorial" value={`#${latestDataForIES?.Ranking || '---'}`} subtitle="Ranking Universidades" icon={<Database className="text-amber-600" />} color="amber" />
              </div>

              {/* Charts & Context */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Tendencia Histórica</h3>
                      <p className="text-slate-500 text-sm">Comportamiento de la deserción en el tiempo</p>
                    </div>
                  </div>
                  <div className="h-[380px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={currentIESData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="Periodo" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} tickFormatter={(v) => `${(v*100).toFixed(1)}%`} dx={-10} />
                        <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} formatter={(v: any) => [`${(v*100).toFixed(2)}%`, 'Deserción']} />
                        <Line type="monotone" dataKey="Desercion" stroke="#4f46e5" strokeWidth={5} dot={{ r: 6, fill: '#fff', strokeWidth: 3, stroke: '#4f46e5' }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-800">Benchmarking Local</h3>
                    <p className="text-slate-500 text-sm">Top 5 en {latestDataForIES?.Departamento || 'Colombia'}</p>
                  </div>
                  <div className="flex-1 space-y-4">
                    {DATA_UNIVERSIDADES.filter(d => d.Periodo === selectedPeriod && d.Departamento === latestDataForIES?.Departamento).sort((a, b) => a.Desercion - b.Desercion).slice(0, 5).map((inst, idx) => (
                      <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${inst.IES === selectedIES ? 'bg-indigo-600 text-white shadow-xl' : 'bg-slate-50'}`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${inst.IES === selectedIES ? 'bg-white/20' : 'bg-white text-slate-400 shadow-sm'}`}>{idx + 1}</div>
                        <div className="flex-1 overflow-hidden">
                          <div className="font-bold truncate text-sm">{inst.NombreInstitucion}</div>
                          <div className={`text-[10px] uppercase font-black opacity-60 mt-0.5 tracking-tighter`}>Tasa: {(inst.Desercion * 100).toFixed(2)}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setActiveTab('rankings')} className="mt-8 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm shadow-xl shadow-slate-200">Ver Rankings Completos <ChevronRight size={18} /></button>
                </div>
              </div>
            </>
          )}

          {activeTab === 'rankings' && (
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
              <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Explorador de Datos</h3>
                  <p className="text-slate-500 text-sm">Visualización granular por categorías de análisis</p>
                </div>
                <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl shadow-inner">
                  {[{ type: RankingType.NACIONAL, label: 'Nacional' }, { type: RankingType.UNIVERSIDADES, label: 'Universidades' }, { type: RankingType.U_REF, label: 'Referencia' }, { type: RankingType.U_ACREDITADAS, label: 'Acreditadas' }].map(tab => (
                    <button key={tab.type} onClick={() => setActiveRanking(tab.type)} className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${activeRanking === tab.type ? 'bg-white text-indigo-700 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}>{tab.label}</button>
                  ))}
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50/80 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-slate-200">
                    <tr><th className="px-8 py-6">Rank</th><th className="px-8 py-6">Institución</th><th className="px-8 py-6 text-right">Tasa Deserción</th><th className="px-8 py-6 text-right">Matrícula</th><th className="px-8 py-6">Ubicación</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rankingDataMap[activeRanking].filter(d => d.Periodo === selectedPeriod).map((item, idx) => (
                      <tr key={idx} className={`group hover:bg-slate-50/50 transition-all ${item.IES === selectedIES ? 'bg-indigo-50/40' : ''}`}>
                        <td className="px-8 py-6"><div className={`w-8 h-8 flex items-center justify-center rounded-lg font-black text-xs ${item.Ranking <= 3 ? 'bg-amber-100 text-amber-700 shadow-sm' : 'bg-slate-100 text-slate-500'}`}>{item.Ranking}</div></td>
                        <td className="px-8 py-6"><div className="font-bold text-slate-800 flex items-center gap-2 group-hover:text-indigo-600">{item.NombreInstitucion}{item.IES === '1711' && <span className="text-[9px] bg-green-500 text-white px-2 py-0.5 rounded-full font-black tracking-widest shadow-sm">SABANA</span>}</div><div className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">IES {item.IES}</div></td>
                        <td className="px-8 py-6 text-right"><span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 shadow-sm">{(item.Desercion * 100).toFixed(2)}%</span></td>
                        <td className="px-8 py-6 text-right font-bold text-slate-600">{item.Matriculados.toLocaleString()}</td>
                        <td className="px-8 py-6"><div className="text-xs font-black text-slate-700">{item.Departamento}</div><div className="text-[10px] text-slate-400 italic font-bold tracking-tighter">{item.Municipio}</div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-700">
              {/* AI Consultant Hero */}
              <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden ring-4 ring-white/10">
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-2xl rounded-[2rem] flex items-center justify-center text-white border border-white/30 shadow-xl shrink-0"><Trophy size={40} /></div>
                    <div><h2 className="text-4xl font-black tracking-tight">Consultoría Experta</h2><p className="text-indigo-100 text-xl font-medium opacity-80 mt-1">Análisis Comparativo e Inteligencia de Datos</p></div>
                  </div>
                  <p className="text-2xl leading-relaxed text-indigo-50 font-medium max-w-3xl">Genera reportes detallados, comparativas dinámicas contra líderes del sector y análisis de brechas territoriales.</p>
                </div>
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute left-1/2 top-10 opacity-10 animate-pulse"><Sparkles size={120} /></div>
              </div>

              {loading ? (
                <div className="bg-white rounded-[3rem] p-24 border border-slate-200 shadow-xl flex flex-col items-center justify-center gap-8">
                  <div className="w-20 h-20 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-slate-400 font-black text-sm tracking-[0.2em] uppercase">Generando Informe Ejecutivo...</div>
                </div>
              ) : chatResponse ? (
                <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl p-12 md:p-16 relative group animate-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-start gap-10">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-100 border-4 border-indigo-100"><ClipboardList size={32} /></div>
                    <div className="flex-1 overflow-hidden">
                      {/* Professional MD Rendering */}
                      <div className="chat-result-container prose prose-slate max-w-none prose-p:text-lg prose-strong:text-indigo-600" dangerouslySetInnerHTML={{ __html: renderMarkdown(chatResponse) }} />
                      
                      <div className="mt-16 pt-10 border-t border-slate-100">
                        <button onClick={() => { setChatResponse(null); setQuery(''); }} className="text-indigo-600 font-black hover:text-indigo-800 transition-all flex items-center gap-3 bg-indigo-50 px-12 py-5 rounded-[1.5rem] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 text-lg">
                          Iniciar Nuevo Análisis <Search size={22} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ExampleQuery icon={<TrendingDown />} title="Análisis del Rosario" text="Dame el análisis de la U Rosario comparado con La Sabana." onClick={(t) => handleAnalysis(undefined, t)} />
                  <ExampleQuery icon={<Trophy />} title="Benchmark Sabana" text="Análisis estratégico de la U. de La Sabana frente a sus líderes competidores." onClick={(t) => handleAnalysis(undefined, t)} />
                  <ExampleQuery icon={<Globe />} title="Liderazgo Territorial" text="¿Cuál es la universidad líder en deserción en el departamento de Antioquia?" onClick={(t) => handleAnalysis(undefined, t)} />
                  <ExampleQuery icon={<Users />} title="Análisis de Matrícula" text="Relación entre número de matriculados y tasa de deserción en acreditadas." onClick={(t) => handleAnalysis(undefined, t)} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Floating Input */}
        {activeTab !== 'chat' && (
          <div className="fixed bottom-12 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-50 hidden md:block">
            <div className="bg-slate-900/95 backdrop-blur-3xl border border-white/20 shadow-2xl rounded-[2rem] p-3 flex items-center gap-4 focus-within:ring-8 focus-within:ring-indigo-500/10 transition-all">
              <input type="text" placeholder="Consultoría IA: 'Compara a Los Andes con La Sabana'" className="flex-1 bg-transparent border-none px-6 py-4 outline-none text-white font-bold placeholder:text-slate-500 text-lg" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAnalysis()} />
              <button onClick={() => handleAnalysis()} className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl px-10 py-4 font-black shadow-2xl transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-widest">Analizar</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const StatCard: React.FC<{ label: string, value: string, subtitle: string, icon: React.ReactNode, color: string, trend?: 'good' | 'bad' | 'neutral', tooltip?: string }> = ({ label, value, subtitle, icon, color, trend, tooltip }) => {
  const status = trend === 'good' ? { text: 'Mejora', bg: 'bg-green-500/10', color: 'text-green-600' } : trend === 'bad' ? { text: 'Alerta', bg: 'bg-red-500/10', color: 'text-red-600' } : null;
  return (
    <div className="bg-white p-7 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center border border-${color}-100 group-hover:scale-110 transition-transform duration-500`}>{icon}</div>
        {status && <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-tighter ${status.bg} ${status.color} shadow-sm border border-current/5`}>{status.text}</span>}
      </div>
      <div className="space-y-1 relative z-10">
        <div className="flex items-center gap-1.5"><div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] leading-none">{label}</div>{tooltip && <div className="group/tooltip relative cursor-help"><Info size={11} className="text-slate-300" /><div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-slate-900 text-white text-[11px] rounded-2xl opacity-0 group-hover/tooltip:opacity-100 transition-all pointer-events-none z-50 shadow-2xl font-medium">{tooltip}</div></div>}</div>
        <div className="text-4xl font-black text-slate-900 tracking-tighter tabular-nums">{value}</div>
        <div className="text-[11px] text-slate-500 font-bold italic opacity-70">{subtitle}</div>
      </div>
      <div className={`absolute -right-4 -bottom-4 w-28 h-28 bg-${color}-50/40 rounded-full group-hover:scale-[3] transition-transform duration-700 pointer-events-none`}></div>
    </div>
  );
};

const ExampleQuery: React.FC<{ icon: React.ReactNode, title: string, text: string, onClick: (s: string) => void }> = ({ icon, title, text, onClick }) => (
  <button onClick={() => onClick(text)} className="flex flex-col gap-4 p-8 bg-white rounded-[2.5rem] border border-slate-200 hover:border-indigo-500 hover:shadow-2xl transition-all text-left group">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">{icon}</div>
      <span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest">{title}</span>
    </div>
    <span className="text-slate-600 font-bold group-hover:text-slate-900 text-lg leading-snug">{text}</span>
  </button>
);

export default App;
