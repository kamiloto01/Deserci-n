import { RetentionData, RankingType } from './types';

const parseRawData = (csvString: string, type: RankingType): RetentionData[] => {
  const lines = csvString.trim().split('\n');
  if (lines.length <= 1) return [];
  
  return lines.slice(1).map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') inQuotes = !inQuotes;
      else if (line[i] === ',' && !inQuotes) {
        values.push(current);
        current = '';
      } else current += line[i];
    }
    values.push(current);

    const data: any = {};

    if (type === RankingType.NACIONAL) {
      data.IES = values[0];
      data.Periodo = values[1];
      data.Desertores = parseInt(values[2]);
      data.Matriculados = parseInt(values[3]);
      data.Desercion = parseFloat(values[4]);
      data.Ranking = parseInt(values[5]);
      data.NombreInstitucion = values[6];
      data.Departamento = values[7];
      data.Municipio = values[8];
    } else if (type === RankingType.UNIVERSIDADES) {
      data.IES = values[0];
      data.CaracterAcademico = values[1];
      data.Periodo = values[2];
      data.Desertores = parseInt(values[3]);
      data.Matriculados = parseInt(values[4]);
      data.Desercion = parseFloat(values[5]);
      data.Ranking = parseInt(values[6]);
      data.NombreInstitucion = values[7];
      data.Departamento = values[8];
      data.Municipio = values[9];
    } else if (type === RankingType.U_REF) {
      data.IES = values[0];
      data.UReferencia = values[1];
      data.Periodo = values[2];
      data.Desertores = parseInt(values[3]);
      data.Matriculados = parseInt(values[4]);
      data.Desercion = parseFloat(values[5]);
      data.Ranking = parseInt(values[6]);
      data.NombreInstitucion = values[7];
      data.Departamento = values[8];
      data.Municipio = values[9];
    } else if (type === RankingType.U_ACREDITADAS) {
      data.IES = values[0];
      data.CaracterAcademico = values[1];
      data.Acreditada = values[2];
      data.Periodo = values[3];
      data.Desertores = parseInt(values[4]);
      data.Matriculados = parseInt(values[5]);
      data.Desercion = parseFloat(values[6]);
      data.Ranking = parseInt(values[7]);
      data.NombreInstitucion = values[8];
      data.Departamento = values[9];
      data.Municipio = values[10];
    }

    return data as RetentionData;
  });
};

export const RAW_CSV_NACIONAL = `IES,Periodo,Desertores,Matriculados,% Deserción,Ranking,NOMBRE_INSTITUCIÓN,DEPARTAMENTO_IES,MUNICIPIO_IES
2905,2024-2,2,150,0.01333333333333333,1,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
9921,2024-2,4,274,0.0145985401459854,2,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
9124,2024-2,2,112,0.01785714285714286,3,Tecnologico Coredi,Antioquia,Marinilla
2707,2024-2,37,1994,0.01855566700100301,4,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
2106,2024-2,424,18642,0.02274434073597253,5,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
3902,2024-2,41,1740,0.0235632183908046,6,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
9104,2024-2,37,1525,0.02426229508196721,7,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
1824,2024-2,112,4584,0.02443280977312391,8,Universidad Metropolitana,Atlántico,Barranquilla
1711,2024-2,237,8981,0.02638904353635453,9,Universidad De La Sabana,Cundinamarca,Chía
2901,2024-2,2,75,0.02666666666666667,10,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
2704,2024-2,34,1181,0.0287891617273497,11,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1813,2024-2,399,13156,0.03032836728488902,12,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1113,2024-2,456,13753,0.03315640223951138,13,Universidad De Cordoba,Córdoba,Montería
1107,2024-2,89,2684,0.03315946348733234,14,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1828,2024-2,173,5054,0.03423031262366442,15,Universidad Icesi,Valle del Cauca,Santiago de Cali
2746,2024-2,46,1251,0.03677058353317346,16,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
9934,2024-2,3,80,0.0375,17,Centro De Estudios Aeronáuticos - Cea,Cundinamarca,"Bogotá, D.C."
1217,2024-2,228,5974,0.0381653833277536,18,Universidad De Sucre,Sucre,Sincelejo
1108,2024-2,133,3290,0.04042553191489362,19,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1712,2024-2,315,7770,0.04054054054054054,20,Universidad Eafit-,Antioquia,Medellín
3114,2024-2,21,514,0.04085603112840467,21,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
2737,2024-2,185,4463,0.04145193815818956,22,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
2730,2024-2,42,991,0.04238143289606458,23,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
2813,2024-2,81,1906,0.04249737670514166,24,Universidad Eia,Antioquia,Envigado
1701,2024-2,688,16005,0.0429865666979069,25,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,2024-2,1193,27130,0.04397346111315886,26,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1713,2024-2,469,10623,0.04414948696225172,27,Universidad Del Norte,Atlántico,Barranquilla
9928,2024-2,10,226,0.04424778761061947,28,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
1702,2024-2,282,6361,0.04433265209872662,29,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
2825,2024-2,214,4571,0.04681688908335156,30,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
2702,2024-2,168,3538,0.04748445449406444,31,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1714,2024-2,380,7991,0.04755349768489551,32,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1210,2024-2,254,5298,0.04794261985654964,33,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1727,2024-2,174,3600,0.04833333333333333,34,Universidad Pontificia Bolivariana,Córdoba,Montería
4837,2024-2,38,781,0.04865556978233035,35,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
1110,2024-2,683,13893,0.04916144821132944,36,Universidad Del Cauca,Cauca,Popayán
1833,2024-2,441,8942,0.04931782598971148,37,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1206,2024-2,659,13272,0.0496534056660639,38,Universidad De Nariño,Nariño,Pasto
1829,2024-2,102,2043,0.04992657856093979,39,Universidad Santiago De Cali,Valle del Cauca,Palmira
2708,2024-2,226,4502,0.05019991115059973,40,Universidad Ces,Antioquia,Medellín
2301,2024-2,280,5406,0.05179430262671106,41,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
1215,2024-2,80,1539,0.05198180636777128,42,Universidad De Cundinamarca,Cundinamarca,Girardot
2114,2024-2,177,3343,0.0529464552796889,43,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
2805,2024-2,822,15411,0.05333852443060152,44,Universidad Simon Bolivar,Atlántico,Barranquilla
9933,2024-2,67,1239,0.05407586763518967,45,Universidad Nacional De Colombia,Cesar,La Paz
2811,2024-2,188,3457,0.05438241249638415,46,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1209,2024-2,787,14369,0.05477068689539982,47,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1212,2024-2,1168,21243,0.05498281786941581,48,Universidad De Pamplona,Norte de Santander,Pamplona
2709,2024-2,380,6876,0.05526468877254218,49,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1106,2024-2,1139,20512,0.05552847113884556,50,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1121,2024-2,363,6500,0.05584615384615384,51,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
2208,2024-2,30,531,0.05649717514124294,52,Conservatorio Del Tolima,Tolima,Ibagué
1104,2024-2,147,2593,0.05669109139992287,53,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1216,2024-2,32,557,0.05745062836624776,54,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1835,2024-2,269,4635,0.05803667745415318,55,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1715,2024-2,111,1869,0.0593900481540931,56,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1820,2024-2,218,3657,0.05961170358217118,57,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
2840,2024-2,95,1577,0.06024096385542169,58,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
2747,2024-2,167,2766,0.06037599421547361,59,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
1826,2024-2,766,12687,0.06037676361630015,60,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1119,2024-2,426,7016,0.06071835803876853,61,Universidad De Los Llanos,Meta,Villavicencio
1105,2024-2,498,8189,0.06081328611552082,62,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1827,2024-2,108,1771,0.06098249576510446,63,Universidad Catolica De Manizales,Caldas,Manizales
1109,2024-2,43,705,0.06099290780141844,64,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
2741,2024-2,37,596,0.06208053691275168,65,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
1720,2024-2,380,6103,0.06226446010158938,66,Universidad Mariana,Nariño,Pasto
1730,2024-2,23,369,0.06233062330623306,67,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1819,2024-2,26,417,0.06235011990407674,68,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2719,2024-2,785,12540,0.06259968102073366,69,Universidad Católica Luis Amigó,Antioquia,Medellín
2701,2024-2,103,1620,0.06358024691358025,70,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
1832,2024-2,309,4817,0.06414780984014946,71,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
2743,2024-2,174,2662,0.06536438767843726,72,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
2720,2024-2,165,2509,0.0657632522917497,73,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
3204,2024-2,737,11090,0.06645626690712353,74,Tecnologico De Antioquia,Antioquia,Medellín
3301,2024-2,856,12810,0.06682279469164715,75,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
1807,2024-2,288,4297,0.0670235047707703,76,Universidad Libre,Valle del Cauca,Santiago de Cali
3104,2024-2,170,2536,0.06703470031545741,77,Colegio Mayor Del Cauca,Cauca,Popayán
9930,2024-2,8,119,0.06722689075630252,78,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
1732,2024-2,246,3657,0.06726825266611977,79,Universidad Santo Tomas,Boyacá,Tunja
1707,2024-2,370,5498,0.0672971989814478,80,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1204,2024-2,1362,20229,0.06732908201097434,81,Universidad Industrial De Santander,Santander,Bucaramanga
1214,2024-2,647,9577,0.0675576902996763,82,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1816,2024-2,260,3832,0.06784968684759916,83,Universidad Cooperativa De Colombia,Antioquia,Medellín
1103,2024-2,313,4612,0.06786643538594969,84,Universidad Nacional De Colombia,Caldas,Manizales
2738,2024-2,60,877,0.06841505131128849,85,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
2838,2024-2,45,653,0.06891271056661562,86,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1817,2024-2,229,3314,0.06910078455039227,87,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1724,2024-2,269,3866,0.06958096223486808,88,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
2744,2024-2,392,5595,0.07006255585344057,89,Universidad Cesmag - Unicesmag,Nariño,Pasto
2712,2024-2,229,3267,0.07009488827670646,90,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1218,2024-2,1070,15099,0.07086562023975097,91,Universidad De La Guajira,La Guajira,Riohacha
2711,2024-2,160,2247,0.07120605251446373,92,Universidad Catolica De Pereira,Risaralda,Pereira
1709,2024-2,422,5922,0.0712597095575819,93,Universidad Central,Cundinamarca,"Bogotá, D.C."
1710,2024-2,631,8817,0.07156629238970172,94,Universidad Pontificia Bolivariana,Antioquia,Medellín
2832,2024-2,686,9565,0.07171981181390485,95,Universidad De Santander - Udes,Santander,Bucaramanga
1834,2024-2,402,5582,0.07201719813686851,96,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1723,2024-2,246,3414,0.07205623901581722,97,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1830,2024-2,464,6382,0.07270448135380758,98,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1118,2024-2,918,12612,0.07278782112274025,99,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2740,2024-2,9,123,0.07317073170731707,100,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
9122,2024-2,38,519,0.07321772639691715,101,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1207,2024-2,1660,22521,0.07370898272723236,102,Universidad Del Tolima,Tolima,Ibagué
3901,2024-2,21,283,0.07420494699646643,103,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
4835,2024-2,66,880,0.075,104,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
1112,2024-2,979,12897,0.075909126153369,105,Universidad De Caldas,Caldas,Manizales
1831,2024-2,328,4256,0.07706766917293233,106,Universidad De Ibague,Tolima,Ibagué
1729,2024-2,779,10020,0.07774451097804391,107,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
9929,2024-2,57,733,0.07776261937244201,108,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1809,2024-2,203,2610,0.07777777777777778,109,Universidad Libre,Risaralda,Pereira
1205,2024-2,1604,20525,0.07814859926918392,110,Universidad De Cartagena,Bolívar,Cartagena de Indias
1114,2024-2,1064,13555,0.07849502028771671,111,Universidad Surcolombiana,Huila,Neiva
1115,2024-2,593,7452,0.07957595276435857,112,Universidad De La Amazonia,Caquetá,Florencia
1805,2024-2,1425,17886,0.07967125125796712,113,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1213,2024-2,1917,23991,0.07990496436163562,114,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1203,2024-2,2420,30240,0.08002645502645503,115,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1734,2024-2,378,4717,0.08013567945728217,116,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
9116,2024-2,228,2843,0.08019697502638058,117,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
3831,2024-2,250,3084,0.08106355382619974,118,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
2206,2024-2,66,811,0.08138101109741061,119,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
1812,2024-2,457,5528,0.08267004341534008,120,Universidad De Medellin,Antioquia,Medellín
2104,2024-2,1025,12377,0.0828148986022461,121,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
4810,2024-2,56,674,0.0830860534124629,122,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
1733,2024-2,180,2165,0.08314087759815242,123,Universidad Sergio Arboleda,Magdalena,Santa Marta
3821,2024-2,207,2488,0.08319935691318328,124,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
3117,2024-2,431,5177,0.08325284914042883,125,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
1803,2024-2,606,7200,0.08416666666666667,126,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
2302,2024-2,403,4788,0.0841687552213868,127,Institucion Universitaria De Envigado,Antioquia,Envigado
9907,2024-2,162,1916,0.08455114822546973,128,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
1208,2024-2,1258,14827,0.0848452148108181,129,Universidad Del Quindio,Quindío,Armenia
2810,2024-2,960,11304,0.08492569002123142,130,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1818,2024-2,1743,20478,0.08511573395839438,131,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1223,2024-2,41,481,0.08523908523908524,132,Universidad De Antioquia,Antioquia,Turbo
1717,2024-2,244,2839,0.08594575554772807,133,Universidad De San Buenaventura,Antioquia,Medellín
1808,2024-2,414,4807,0.0861244019138756,134,Universidad Libre,Atlántico,Barranquilla
2820,2024-2,148,1718,0.08614668218859138,135,Corporacion Universitaria Lasallista,Antioquia,Caldas
3808,2024-2,21,243,0.08641975308641975,136,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
9105,2024-2,63,729,0.08641975308641975,137,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1202,2024-2,1683,19474,0.08642292287152101,138,Universidad Del Atlantico,Atlántico,Puerto Colombia
1111,2024-2,1233,14202,0.08681875792141952,139,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1117,2024-2,1384,15839,0.08737925374076647,140,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1728,2024-2,581,6642,0.08747365251430292,141,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
9936,2024-2,19,216,0.08796296296296297,142,Corporación Universitaria Autónoma Del Norte,Norte de Santander,San José de Cúcuta
2721,2024-2,273,3098,0.0881213686249193,143,Fundacion Universitaria Maria Cano,Antioquia,Medellín
3103,2024-2,319,3578,0.08915595304639463,144,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
1823,2024-2,660,7354,0.08974707642099537,145,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
2211,2024-2,130,1446,0.08990318118948824,146,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
1716,2024-2,347,3856,0.0899896265560166,147,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1718,2024-2,229,2535,0.0903353057199211,148,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1722,2024-2,446,4911,0.090816534310731,149,Universidad De Manizales,Caldas,Manizales
1706,2024-2,450,4951,0.09089072914562717,150,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1825,2024-2,277,3039,0.09114840408028956,151,Universidad Autonoma De Manizales,Caldas,Manizales
2715,2024-2,525,5752,0.09127260083449236,152,Fundacion Universitaria De Popayan,Cauca,Popayán
1822,2024-2,85,930,0.0913978494623656,153,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1102,2024-2,986,10735,0.09184909175593851,154,Universidad Nacional De Colombia,Antioquia,Medellín
1219,2024-2,29,314,0.09235668789808917,155,Universidad De Antioquia,Antioquia,El Carmen de Viboral
2736,2024-2,17,184,0.09239130434782608,156,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
2842,2024-2,269,2847,0.09448542325254654,157,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
2724,2024-2,220,2304,0.0954861111111111,158,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
1726,2024-2,366,3812,0.09601259181532004,159,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2710,2024-2,149,1537,0.09694209499024072,160,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
1815,2024-2,322,3318,0.0970464135021097,161,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1704,2024-2,1214,12492,0.09718219660582772,162,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
2815,2024-2,122,1236,0.09870550161812296,163,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
2731,2024-2,251,2531,0.099170288423548,164,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
1201,2024-2,3167,31870,0.09937245058048322,165,Universidad De Antioquia,Antioquia,Medellín
1120,2024-2,1219,12258,0.09944526023821178,166,Universidad Popular Del Cesar,Cesar,Valledupar
2849,2024-2,179,1797,0.09961046188091265,167,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
2823,2024-2,739,7408,0.09975701943844492,168,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
2728,2024-2,2727,27321,0.09981333040518282,169,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
4806,2024-2,6,60,0.1,170,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
1814,2024-2,258,2580,0.1,171,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
4108,2024-2,332,3319,0.1000301295570955,172,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
1705,2024-2,462,4544,0.1016725352112676,173,Universidad Santo Tomas,Santander,Bucaramanga
2209,2024-2,1029,10098,0.101901366607249,174,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
3702,2024-2,34,331,0.1027190332326284,175,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
2841,2024-2,248,2397,0.1034626616604089,176,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
3705,2024-2,883,8534,0.1034684790250762,177,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
2833,2024-2,1666,16100,0.1034782608695652,178,Corporacion Universitaria Remington,Antioquia,Medellín
1804,2024-2,561,5379,0.1042944785276074,179,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2818,2024-2,93,891,0.1043771043771044,180,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
2834,2024-2,548,5222,0.104940635771735,181,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
4110,2024-2,462,4392,0.1051912568306011,182,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
4825,2024-2,146,1376,0.1061046511627907,183,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
3803,2024-2,59,555,0.1063063063063063,184,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
2812,2024-2,900,8383,0.1073601336037218,185,Universidad Ean,Cundinamarca,"Bogotá, D.C."
2110,2024-2,493,4567,0.1079483249397854,186,Colegio Mayor De Antioquia,Antioquia,Medellín
1719,2024-2,622,5719,0.1087602727749607,187,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
3706,2024-2,141,1285,0.109727626459144,188,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
2847,2024-2,649,5897,0.1100559606579617,189,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2713,2024-2,637,5753,0.110724839214323,190,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
3107,2024-2,751,6774,0.1108650723354001,191,Institución Universitaria Pascual Bravo,Antioquia,Medellín
9905,2024-2,91,816,0.1115196078431373,192,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
1806,2024-2,737,6498,0.113419513696522,193,Universidad Libre,Cundinamarca,"Bogotá, D.C."
3703,2024-2,121,1064,0.1137218045112782,194,Institucion Universitaria Escolme,Antioquia,Medellín
1802,2024-2,219,1917,0.1142410015649452,195,Universidad La Gran Colombia,Quindío,Armenia
2732,2024-2,453,3946,0.1147997972630512,196,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
9131,2024-2,164,1427,0.1149264190609671,197,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
1122,2024-2,333,2870,0.1160278745644599,198,Universidad Del Pacifico,Valle del Cauca,Buenaventura
3817,2024-2,373,3191,0.1168912566593544,199,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
1801,2024-2,730,6203,0.1176849911333226,200,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
2829,2024-2,8768,74296,0.1180144287714009,201,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
9900,2024-2,84,697,0.1205164992826399,202,Corporacion Universitaria U De Colombia,Antioquia,Medellín
2723,2024-2,345,2837,0.1216073316884032,203,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
2207,2024-2,508,4169,0.1218517630127129,204,Instituto Universitario De La Paz,Santander,Barrancabermeja
3720,2024-2,180,1477,0.1218686526743399,205,Fundacion Universitaria Esumer,Antioquia,Medellín
9932,2024-2,5,41,0.1219512195121951,206,Fundación Universitaria San Pablo - Unisanpablo,Cundinamarca,"Bogotá, D.C."
2749,2024-2,261,2135,0.122248243559719,207,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
3806,2024-2,24,196,0.1224489795918367,208,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
3826,2024-2,135,1098,0.1229508196721311,209,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
1123,2024-2,314,2549,0.123185562965869,210,Universidad Popular Del Cesar,Cesar,Aguachica
5802,2024-2,2029,16106,0.1259778964361108,211,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1735,2024-2,791,6163,0.1283465844556223,212,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
3801,2024-2,57,444,0.1283783783783784,213,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
3201,2024-2,2758,21465,0.1284882366643373,214,Unidades Tecnologicas De Santander,Santander,Bucaramanga
2828,2024-2,332,2539,0.1307601417881055,215,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
9129,2024-2,218,1663,0.1310883944678292,216,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
2836,2024-2,44,335,0.1313432835820895,217,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
3713,2024-2,322,2449,0.1314822376480196,218,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
1811,2024-2,93,702,0.1324786324786325,219,Universidad Libre,Santander,Socorro
2102,2024-2,17971,135593,0.1325363403715531,220,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
9120,2024-2,78,584,0.1335616438356164,221,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
4101,2024-2,519,3882,0.133693972179289,222,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
4710,2024-2,286,2135,0.1339578454332553,223,Fundación Politécnico Minuto De Dios - Tec Md,Cundinamarca,"Bogotá, D.C."
9107,2024-2,77,565,0.136283185840708,224,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
3725,2024-2,27,197,0.1370558375634518,225,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
4811,2024-2,11,79,0.1392405063291139,226,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
1301,2024-2,2906,20725,0.1402171290711701,227,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
4709,2024-2,133,947,0.1404435058078141,228,Institucion Universitaria Eam,Quindío,Armenia
9121,2024-2,344,2449,0.1404654961208656,229,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
2837,2024-2,473,3364,0.1406064209274673,230,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
3303,2024-2,153,1084,0.1411439114391144,231,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
1810,2024-2,196,1384,0.1416184971098266,232,Universidad Libre,Norte de Santander,San José de Cúcuta
4817,2024-2,334,2332,0.1432246998284734,233,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
9126,2024-2,50,349,0.1432664756446991,234,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
5801,2024-2,70,487,0.1437371663244353,235,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
9906,2024-2,13,89,0.1460674157303371,236,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
2848,2024-2,305,2076,0.1469171483622351,237,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
3719,2024-2,54,364,0.1483516483516484,238,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
4112,2024-2,101,679,0.1487481590574374,239,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
2850,2024-2,677,4537,0.1492175446330174,240,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
2725,2024-2,6902,46204,0.1493810059735088,241,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
9127,2024-2,107,713,0.150070126227209,242,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
3820,2024-2,23,152,0.1513157894736842,243,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
2827,2024-2,338,2214,0.1526648599819332,244,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
4818,2024-2,671,4355,0.1540757749712973,245,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
3812,2024-2,153,992,0.1542338709677419,246,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
2830,2024-2,2434,15665,0.1553782317267794,247,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
9927,2024-2,1114,7162,0.1555431443730801,248,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
9903,2024-2,85,545,0.1559633027522936,249,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
2733,2024-2,24,153,0.1568627450980392,250,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
9119,2024-2,1981,12383,0.1599773883550028,251,Corporacion Universitaria Americana,Atlántico,Barranquilla
3718,2024-2,230,1431,0.1607267645003494,252,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
3302,2024-2,3496,21700,0.1611059907834101,253,Institucion Universitaria - Itm,Antioquia,Medellín
3115,2024-2,374,2276,0.164323374340949,254,Institución Universitaria Del Putumayo,Putumayo,Mocoa
2745,2024-2,1332,8067,0.1651171439196727,255,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
4111,2024-2,466,2791,0.1669652454317449,256,Institución Universitaria Del Caribe,Magdalena,Ciénaga
3809,2024-2,14,82,0.1707317073170732,257,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
4701,2024-2,258,1477,0.1746784021665538,258,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
9902,2024-2,51,287,0.1777003484320558,259,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
2831,2024-2,375,2101,0.1784864350309376,260,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
9117,2024-2,2,11,0.1818181818181818,261,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
9926,2024-2,617,3385,0.182274741506647,262,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
4109,2024-2,317,1718,0.1845168800931316,263,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
3102,2024-2,200,1077,0.1857010213556174,264,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
4721,2024-2,80,414,0.1932367149758454,265,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
4822,2024-2,194,1001,0.1938061938061938,266,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
4801,2024-2,40,201,0.1990049751243781,267,Corporacion Academia Superior De Artes,Antioquia,Medellín
9922,2024-2,235,1168,0.2011986301369863,268,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
4106,2024-2,51,253,0.2015810276679842,269,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
9128,2024-2,188,917,0.2050163576881134,270,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
2727,2024-2,838,4068,0.2059980334316618,271,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
3710,2024-2,600,2856,0.2100840336134454,272,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
2902,2024-2,14,66,0.2121212121212121,273,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
4726,2024-2,1137,5184,0.2193287037037037,274,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
9110,2024-2,82923,377536,0.2196426301067978,275,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
3716,2024-2,110,495,0.2222222222222222,276,Tecnologica Fitec,Santander,Bucaramanga
9913,2024-2,1030,4495,0.2291434927697442,277,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
2748,2024-2,60,255,0.2352941176470588,278,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
9914,2024-2,170,710,0.2394366197183098,279,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
4102,2024-2,184,765,0.2405228758169935,280,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
4832,2024-2,76,278,0.2733812949640288,281,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
4813,2024-2,12706,46285,0.2745165820460193,282,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
9915,2024-2,326,1176,0.2772108843537415,283,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
1703,2024-2,210,698,0.3008595988538682,284,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
4727,2024-2,1758,5175,0.3397101449275362,285,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
4107,2024-2,404,1161,0.3479758828596038,286,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
4714,2024-2,72,196,0.3673469387755102,287,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
3819,2024-2,358,964,0.3713692946058091,288,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
9924,2024-2,44,110,0.4,289,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
3830,2024-2,73,179,0.4078212290502793,290,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
2739,2024-2,125,293,0.4266211604095563,291,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
4803,2024-2,28,64,0.4375,292,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
4702,2024-2,4659,10134,0.4597394908229722,293,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
9904,2024-2,723,1507,0.4797611147976111,294,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
4829,2024-2,81,162,0.5,295,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
4719,2024-2,208,384,0.5416666666666666,296,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
4808,2024-2,99,156,0.6346153846153846,297,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
9899,2024-2,563,422,1.334123222748815,298,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
9923,2024-1,0,227,0.0,1,Corporacion Universitaria De Cataluña,Cundinamarca,"Bogotá, D.C."
9110,2024-1,142,291311,0.0004874515552107541,2,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
2106,2024-1,121,9536,0.01268875838926175,3,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
2707,2024-1,46,2025,0.02271604938271605,4,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
1824,2024-1,110,4639,0.02371200689803837,5,Universidad Metropolitana,Atlántico,Barranquilla
1813,2024-1,310,12665,0.02447690485590209,6,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1108,2024-1,92,3513,0.02618844292627384,7,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1828,2024-1,140,4973,0.02815202091292982,8,Universidad Icesi,Valle del Cauca,Santiago de Cali
9921,2024-1,7,241,0.02904564315352697,9,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
1711,2024-1,274,9280,0.02952586206896552,10,Universidad De La Sabana,Cundinamarca,Chía
4812,2024-1,1,33,0.0303030303030303,11,Corporacion De Educacion Superior Suramerica,Cundinamarca,"Bogotá, D.C."
1113,2024-1,441,14396,0.03063350930814115,12,Universidad De Cordoba,Córdoba,Montería
3902,2024-1,61,1966,0.03102746693794507,13,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
9124,2024-1,3,89,0.03370786516853932,14,Tecnologico Coredi,Antioquia,Marinilla
2813,2024-1,65,1873,0.03470368392952482,15,Universidad Eia,Antioquia,Envigado
1827,2024-1,63,1807,0.03486441615938018,16,Universidad Catolica De Manizales,Caldas,Manizales
2704,2024-1,39,1114,0.03500897666068223,17,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1107,2024-1,106,3015,0.0351575456053068,18,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
9104,2024-1,59,1629,0.03621853898096992,19,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
1713,2024-1,407,10924,0.03725741486634932,20,Universidad Del Norte,Atlántico,Barranquilla
2702,2024-1,130,3338,0.03894547633313361,21,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1109,2024-1,32,788,0.04060913705583756,22,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
9102,2024-1,23,558,0.04121863799283154,23,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
2730,2024-1,37,897,0.04124860646599777,24,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
1701,2024-1,672,16225,0.04141756548536209,25,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1217,2024-1,251,6014,0.04173594945128035,26,Universidad De Sucre,Sucre,Sincelejo
1835,2024-1,190,4455,0.04264870931537598,27,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1112,2024-1,528,12116,0.04357873885770881,28,Universidad De Caldas,Caldas,Manizales
1716,2024-1,171,3885,0.04401544401544401,29,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
9103,2024-1,25,555,0.04504504504504504,30,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
2746,2024-1,59,1273,0.04634721131186174,31,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
2825,2024-1,225,4733,0.04753855905345447,32,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
1727,2024-1,176,3686,0.04774823657080846,33,Universidad Pontificia Bolivariana,Córdoba,Montería
1210,2024-1,261,5447,0.04791628419313383,34,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1712,2024-1,397,8124,0.04886755292959134,35,Universidad Eafit-,Antioquia,Medellín
1206,2024-1,678,13849,0.04895660336486389,36,Universidad De Nariño,Nariño,Pasto
1720,2024-1,304,6133,0.04956791129952715,37,Universidad Mariana,Nariño,Pasto
2708,2024-1,232,4635,0.05005393743257821,38,Universidad Ces,Antioquia,Medellín
2840,2024-1,78,1551,0.05029013539651837,39,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
1829,2024-1,107,2127,0.05030559473436765,40,Universidad Santiago De Cali,Valle del Cauca,Palmira
1215,2024-1,81,1606,0.05043586550435866,41,Universidad De Cundinamarca,Cundinamarca,Girardot
1811,2024-1,37,732,0.05054644808743169,42,Universidad Libre,Santander,Socorro
3807,2024-1,4,79,0.05063291139240506,43,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
2114,2024-1,172,3391,0.05072250073724565,44,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
1702,2024-1,335,6339,0.05284745227953936,45,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1808,2024-1,261,4924,0.05300568643379366,46,Universidad Libre,Atlántico,Barranquilla
9933,2024-1,64,1202,0.05324459234608985,47,Universidad Nacional De Colombia,Cesar,La Paz
1101,2024-1,1485,27734,0.05354438595226076,48,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1106,2024-1,1147,21239,0.05400442582042469,49,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1213,2024-1,1295,23723,0.05458837415166716,50,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
2838,2024-1,37,677,0.05465288035450517,51,Corporacion Colegiatura Colombiana,Antioquia,Medellín
2805,2024-1,868,15880,0.05465994962216625,52,Universidad Simon Bolivar,Atlántico,Barranquilla
2832,2024-1,527,9604,0.05487296959600167,53,Universidad De Santander - Udes,Santander,Bucaramanga
1119,2024-1,376,6778,0.0554735910298023,54,Universidad De Los Llanos,Meta,Villavicencio
3104,2024-1,138,2475,0.05575757575757576,55,Colegio Mayor Del Cauca,Cauca,Popayán
3301,2024-1,696,12231,0.05690458670591121,56,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
1121,2024-1,372,6460,0.05758513931888545,57,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1724,2024-1,228,3940,0.05786802030456853,58,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1707,2024-1,313,5396,0.05800593031875463,59,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1730,2024-1,22,378,0.0582010582010582,60,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
2811,2024-1,208,3563,0.05837777154083637,61,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1110,2024-1,830,14138,0.05870703069741123,62,Universidad Del Cauca,Cauca,Popayán
2709,2024-1,395,6710,0.05886736214605067,63,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1832,2024-1,301,5089,0.05914718019257222,64,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1706,2024-1,298,5015,0.05942173479561316,65,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1826,2024-1,780,12969,0.06014341892204488,66,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2747,2024-1,179,2962,0.06043214044564484,67,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
2301,2024-1,317,5235,0.06055396370582617,68,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
1105,2024-1,517,8415,0.06143790849673202,69,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2712,2024-1,193,3137,0.06152374880459037,70,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1807,2024-1,271,4389,0.06174527227158806,71,Universidad Libre,Valle del Cauca,Santiago de Cali
2741,2024-1,40,638,0.06269592476489028,72,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
1714,2024-1,538,8530,0.0630715123094959,73,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1212,2024-1,1393,21776,0.0639695077149155,74,Universidad De Pamplona,Norte de Santander,Pamplona
4710,2024-1,92,1425,0.06456140350877193,75,Fundación Politécnico Minuto De Dios - Tec Md,Cundinamarca,"Bogotá, D.C."
1833,2024-1,586,9063,0.06465850159991172,76,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1214,2024-1,649,9925,0.0653904282115869,77,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1710,2024-1,604,9195,0.0656878738444807,78,Universidad Pontificia Bolivariana,Antioquia,Medellín
2719,2024-1,868,13090,0.06631016042780749,79,Universidad Católica Luis Amigó,Antioquia,Medellín
1104,2024-1,173,2595,0.06666666666666667,80,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1115,2024-1,537,8055,0.06666666666666667,81,Universidad De La Amazonia,Caquetá,Florencia
1203,2024-1,2078,30913,0.06722091029663896,82,Universidad Del Valle,Valle del Cauca,Santiago de Cali
4810,2024-1,48,712,0.06741573033707865,83,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
3901,2024-1,21,307,0.06840390879478828,84,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
2744,2024-1,394,5748,0.0685455810716771,85,Universidad Cesmag - Unicesmag,Nariño,Pasto
2711,2024-1,162,2355,0.06878980891719745,86,Universidad Catolica De Pereira,Risaralda,Pereira
1216,2024-1,40,580,0.06896551724137931,87,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1715,2024-1,143,2063,0.06931652932622395,88,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
3834,2024-1,3,43,0.06976744186046512,89,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
9907,2024-1,137,1953,0.0701484895033282,90,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
1722,2024-1,359,5105,0.0703232125367287,91,Universidad De Manizales,Caldas,Manizales
1723,2024-1,261,3705,0.07044534412955465,92,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1209,2024-1,1074,15125,0.07100826446280992,93,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1709,2024-1,456,6409,0.0711499453892963,94,Universidad Central,Cundinamarca,"Bogotá, D.C."
1223,2024-1,28,393,0.07124681933842239,95,Universidad De Antioquia,Antioquia,Turbo
1204,2024-1,1412,19787,0.0713599838277657,96,Universidad Industrial De Santander,Santander,Bucaramanga
1103,2024-1,338,4730,0.07145877378435518,97,Universidad Nacional De Colombia,Caldas,Manizales
1809,2024-1,199,2750,0.07236363636363637,98,Universidad Libre,Risaralda,Pereira
1831,2024-1,331,4552,0.07271528998242531,99,Universidad De Ibague,Tolima,Ibagué
1834,2024-1,411,5647,0.07278200814591819,100,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1805,2024-1,1297,17805,0.07284470654310587,101,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1817,2024-1,238,3267,0.07284970921334558,102,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1820,2024-1,277,3770,0.07347480106100795,103,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
2208,2024-1,41,558,0.07347670250896057,104,Conservatorio Del Tolima,Tolima,Ibagué
1207,2024-1,1661,22569,0.0735965262085161,105,Universidad Del Tolima,Tolima,Ibagué
9930,2024-1,9,122,0.07377049180327869,106,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
1120,2024-1,918,12360,0.07427184466019418,107,Universidad Popular Del Cesar,Cesar,Valledupar
3204,2024-1,871,11527,0.07556172464648217,108,Tecnologico De Antioquia,Antioquia,Medellín
1732,2024-1,294,3887,0.0756367378440957,109,Universidad Santo Tomas,Boyacá,Tunja
1729,2024-1,779,10256,0.07595553822152887,110,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
9122,2024-1,44,577,0.07625649913344887,111,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
2740,2024-1,9,118,0.07627118644067797,112,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
1114,2024-1,1043,13600,0.07669117647058823,113,Universidad Surcolombiana,Huila,Neiva
1218,2024-1,1163,15002,0.07752299693374216,114,Universidad De La Guajira,La Guajira,Riohacha
2720,2024-1,210,2702,0.07772020725388601,115,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
1816,2024-1,301,3871,0.07775768535262206,116,Universidad Cooperativa De Colombia,Antioquia,Medellín
2836,2024-1,27,344,0.07848837209302326,117,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
1705,2024-1,367,4675,0.07850267379679145,118,Universidad Santo Tomas,Santander,Bucaramanga
1825,2024-1,265,3363,0.07879869164436515,119,Universidad Autonoma De Manizales,Caldas,Manizales
1734,2024-1,379,4794,0.07905715477680433,120,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
9928,2024-1,18,226,0.07964601769911504,121,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
2818,2024-1,86,1069,0.08044901777362021,122,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
2736,2024-1,14,174,0.08045977011494253,123,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
1718,2024-1,187,2308,0.08102253032928942,124,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
2710,2024-1,117,1439,0.08130646282140375,125,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
9116,2024-1,250,3031,0.08248102936324646,126,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
1806,2024-1,522,6327,0.08250355618776671,127,Universidad Libre,Cundinamarca,"Bogotá, D.C."
3831,2024-1,254,3055,0.08314238952536825,128,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
1819,2024-1,37,444,0.08333333333333333,129,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1205,2024-1,1710,20494,0.08343905533326827,130,Universidad De Cartagena,Bolívar,Cartagena de Indias
2842,2024-1,244,2924,0.08344733242134063,131,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
1818,2024-1,1765,21117,0.08358194819339869,132,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
9107,2024-1,46,550,0.08363636363636363,133,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
1202,2024-1,1662,19859,0.08369001460295081,134,Universidad Del Atlantico,Atlántico,Puerto Colombia
3103,2024-1,273,3253,0.0839225330464187,135,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
1815,2024-1,291,3463,0.08403118683222639,136,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
3821,2024-1,216,2570,0.0840466926070039,137,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
2701,2024-1,137,1630,0.08404907975460123,138,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
2302,2024-1,402,4762,0.08441831163376733,139,Institucion Universitaria De Envigado,Antioquia,Envigado
1733,2024-1,192,2255,0.08514412416851441,140,Universidad Sergio Arboleda,Magdalena,Santa Marta
2738,2024-1,68,790,0.08607594936708861,141,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
1812,2024-1,519,6029,0.08608392768286614,142,Universidad De Medellin,Antioquia,Medellín
1219,2024-1,27,313,0.08626198083067092,143,Universidad De Antioquia,Antioquia,El Carmen de Viboral
3702,2024-1,26,301,0.08637873754152824,144,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
1726,2024-1,356,4092,0.08699902248289346,145,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
9105,2024-1,75,857,0.08751458576429405,146,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1728,2024-1,617,7050,0.0875177304964539,147,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1810,2024-1,125,1423,0.08784258608573436,148,Universidad Libre,Norte de Santander,San José de Cúcuta
2841,2024-1,209,2378,0.08788898233809925,149,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
1830,2024-1,567,6438,0.08807082945013979,150,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1803,2024-1,649,7345,0.08835942818243703,151,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1208,2024-1,1322,14913,0.08864748876818883,152,Universidad Del Quindio,Quindío,Armenia
2815,2024-1,114,1284,0.08878504672897196,153,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
2743,2024-1,226,2540,0.08897637795275591,154,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1118,2024-1,1227,13786,0.08900333671840999,155,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2715,2024-1,524,5885,0.08903993203058623,156,Fundacion Universitaria De Popayan,Cauca,Popayán
2737,2024-1,417,4621,0.09024020774724086,157,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
1111,2024-1,1282,14141,0.09065836928081464,158,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
4835,2024-1,80,880,0.09090909090909093,159,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
1719,2024-1,566,6205,0.0912167606768735,160,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1823,2024-1,696,7612,0.09143457698370994,161,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1822,2024-1,84,915,0.0918032786885246,162,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1717,2024-1,277,3017,0.09181305933046072,163,Universidad De San Buenaventura,Antioquia,Medellín
9922,2024-1,113,1230,0.091869918699187,164,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
3705,2024-1,793,8593,0.09228441754916791,165,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
2206,2024-1,68,735,0.09251700680272108,166,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
4837,2024-1,76,820,0.09268292682926828,167,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
1117,2024-1,1511,16233,0.0930819934700918,168,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
2905,2024-1,14,150,0.09333333333333334,169,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
2820,2024-1,170,1820,0.0934065934065934,170,Corporacion Universitaria Lasallista,Antioquia,Caldas
9121,2024-1,236,2514,0.09387430389817024,171,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
1122,2024-1,247,2597,0.09510974201001156,172,Universidad Del Pacifico,Valle del Cauca,Buenaventura
2723,2024-1,251,2631,0.09540098821740783,173,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
2211,2024-1,143,1483,0.0964261631827377,174,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
4110,2024-1,444,4441,0.09997748254897544,175,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
2823,2024-1,803,8001,0.1003624546931633,176,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
2828,2024-1,271,2693,0.1006312662458225,177,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
2104,2024-1,1462,14527,0.1006401872375576,178,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
1802,2024-1,198,1966,0.1007121057985758,179,Universidad La Gran Colombia,Quindío,Armenia
2721,2024-1,328,3230,0.1015479876160991,180,Fundacion Universitaria Maria Cano,Antioquia,Medellín
3720,2024-1,145,1423,0.1018973998594519,181,Fundacion Universitaria Esumer,Antioquia,Medellín
2739,2024-1,31,303,0.1023102310231023,182,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
3703,2024-1,109,1064,0.1024436090225564,183,Institucion Universitaria Escolme,Antioquia,Medellín
5802,2024-1,1702,16598,0.1025424749969876,184,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
2110,2024-1,478,4654,0.1027073485174044,185,Colegio Mayor De Antioquia,Antioquia,Medellín
4709,2024-1,105,1018,0.1031434184675835,186,Institucion Universitaria Eam,Quindío,Armenia
4108,2024-1,355,3423,0.1037101957347356,187,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
9905,2024-1,79,761,0.1038107752956636,188,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
1814,2024-1,292,2808,0.103988603988604,189,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2812,2024-1,879,8398,0.1046677780423911,190,Universidad Ean,Cundinamarca,"Bogotá, D.C."
2833,2024-1,1800,17191,0.1047059507882031,191,Corporacion Universitaria Remington,Antioquia,Medellín
1102,2024-1,1187,11297,0.1050721430468266,192,Universidad Nacional De Colombia,Antioquia,Medellín
2207,2024-1,437,4151,0.1052758371476753,193,Instituto Universitario De La Paz,Santander,Barrancabermeja
2713,2024-1,596,5655,0.1053934571175951,194,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
1123,2024-1,282,2663,0.105895606458881,195,Universidad Popular Del Cesar,Cesar,Aguachica
9128,2024-1,82,771,0.1063553826199741,196,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
1704,2024-1,1487,13656,0.1088898652606913,197,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
3808,2024-1,28,256,0.109375,198,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
3713,2024-1,280,2530,0.1106719367588933,199,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
9131,2024-1,164,1476,0.1111111111111111,200,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
2724,2024-1,272,2445,0.1112474437627812,201,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
2209,2024-1,1170,10498,0.1114497999618975,202,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
1801,2024-1,701,6260,0.1119808306709265,203,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
3801,2024-1,53,468,0.1132478632478632,204,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
1804,2024-1,656,5785,0.1133967156439067,205,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
3817,2024-1,385,3385,0.1137370753323486,206,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
1201,2024-1,3576,31302,0.114241901475944,207,Universidad De Antioquia,Antioquia,Medellín
3719,2024-1,51,444,0.1148648648648649,208,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
3117,2024-1,662,5656,0.117043847241867,209,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
9127,2024-1,91,776,0.1172680412371134,210,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
9120,2024-1,72,612,0.1176470588235294,211,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
2849,2024-1,218,1850,0.1178378378378378,212,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
2847,2024-1,744,6284,0.1183959261616805,213,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2850,2024-1,557,4693,0.1186874067760494,214,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
3809,2024-1,10,84,0.119047619047619,215,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
9936,2024-1,21,176,0.1193181818181818,216,Corporación Universitaria Autónoma Del Norte,Norte de Santander,San José de Cúcuta
1735,2024-1,754,6295,0.1197776012708499,217,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
3706,2024-1,165,1370,0.1204379562043796,218,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
2748,2024-1,28,232,0.1206896551724138,219,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
4817,2024-1,265,2193,0.1208390332877337,220,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
3803,2024-1,67,554,0.1209386281588448,221,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
4818,2024-1,571,4670,0.1222698072805139,222,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
2731,2024-1,365,2967,0.1230198854061341,223,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
2732,2024-1,501,4067,0.1231866240472092,224,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
3819,2024-1,119,958,0.1242171189979123,225,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
3114,2024-1,65,522,0.1245210727969349,226,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
2829,2024-1,9842,78886,0.124762315239713,227,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
4822,2024-1,140,1119,0.1251117068811439,228,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
4101,2024-1,497,3895,0.127599486521181,229,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
2725,2024-1,6005,46617,0.1288156681039106,230,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
9129,2024-1,205,1583,0.129500947567909,231,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
2749,2024-1,309,2369,0.1304347826086956,232,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
2834,2024-1,738,5624,0.1312233285917496,233,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
2745,2024-1,1070,8099,0.1321150759353006,234,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
9900,2024-1,91,677,0.1344165435745938,235,Corporacion Universitaria U De Colombia,Antioquia,Medellín
2727,2024-1,533,3932,0.1355544252288912,236,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
3102,2024-1,152,1117,0.1360787824529991,237,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
3718,2024-1,208,1528,0.1361256544502618,238,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
2102,2024-1,18072,131383,0.1375520425016935,239,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
3826,2024-1,158,1138,0.1388400702987698,240,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
3725,2024-1,27,194,0.1391752577319588,241,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
2810,2024-1,1707,12039,0.1417891851482681,242,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
9119,2024-1,1742,12239,0.1423318898602827,243,Corporacion Universitaria Americana,Atlántico,Barranquilla
2733,2024-1,22,154,0.1428571428571428,244,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
4825,2024-1,166,1153,0.1439722463139636,245,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
2837,2024-1,531,3685,0.1440976933514247,246,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
9927,2024-1,878,5849,0.1501111301077107,247,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
3806,2024-1,31,206,0.1504854368932039,248,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
4111,2024-1,416,2716,0.1531664212076583,249,Institución Universitaria Del Caribe,Magdalena,Ciénaga
3201,2024-1,3257,21261,0.1531912892149946,250,Unidades Tecnologicas De Santander,Santander,Bucaramanga
4701,2024-1,228,1486,0.1534320323014805,251,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
4112,2024-1,81,527,0.1537001897533207,252,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
3302,2024-1,3507,22738,0.154235200985135,253,Institucion Universitaria - Itm,Antioquia,Medellín
4106,2024-1,34,220,0.1545454545454545,254,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
1301,2024-1,3434,22066,0.1556240369799692,255,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
2902,2024-1,15,95,0.1578947368421053,256,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
2827,2024-1,372,2352,0.1581632653061225,257,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
3107,2024-1,1177,7309,0.1610343412231496,258,Institución Universitaria Pascual Bravo,Antioquia,Medellín
4811,2024-1,12,74,0.1621621621621622,259,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
3303,2024-1,179,1100,0.1627272727272727,260,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
3812,2024-1,175,1072,0.1632462686567164,261,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
3115,2024-1,402,2414,0.1665285832642916,262,Institución Universitaria Del Putumayo,Putumayo,Mocoa
9906,2024-1,22,131,0.1679389312977099,263,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
9903,2024-1,91,540,0.1685185185185185,264,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
2831,2024-1,385,2273,0.1693796744390673,265,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
4109,2024-1,292,1719,0.1698662012798138,266,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
3820,2024-1,28,163,0.1717791411042945,267,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
2728,2024-1,4699,27027,0.1738631738631739,268,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
3710,2024-1,502,2884,0.1740638002773925,269,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
4726,2024-1,991,5271,0.188009865300702,270,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
1703,2024-1,93,473,0.1966173361522199,271,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
4107,2024-1,211,1062,0.1986817325800377,272,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
4801,2024-1,46,230,0.2,273,Corporacion Academia Superior De Artes,Antioquia,Medellín
9126,2024-1,73,364,0.2005494505494506,274,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
9932,2024-1,7,34,0.2058823529411765,275,Fundación Universitaria San Pablo - Unisanpablo,Cundinamarca,"Bogotá, D.C."
2830,2024-1,3672,17802,0.2062689585439838,276,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
9904,2024-1,310,1487,0.2084734364492266,277,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
9926,2024-1,734,3507,0.2092956943256344,278,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
1725,2024-1,140,665,0.2105263157894737,279,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
9902,2024-1,65,298,0.2181208053691275,280,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
4102,2024-1,165,748,0.2205882352941176,281,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
4813,2024-1,10469,45439,0.2303967957041308,282,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
9929,2024-1,207,880,0.2352272727272727,283,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
9914,2024-1,153,640,0.2390625,284,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
4721,2024-1,146,606,0.2409240924092409,285,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
3716,2024-1,184,751,0.2450066577896138,286,Tecnologica Fitec,Santander,Bucaramanga
4803,2024-1,15,59,0.2542372881355932,287,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
9913,2024-1,1260,4947,0.2546998180715585,288,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
4806,2024-1,19,72,0.2638888888888889,289,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
5801,2024-1,142,538,0.2639405204460967,290,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
2901,2024-1,18,68,0.2647058823529412,291,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
9934,2024-1,26,96,0.2708333333333333,292,Centro De Estudios Aeronáuticos - Cea,Cundinamarca,"Bogotá, D.C."
9935,2024-1,32,111,0.2882882882882883,293,Unidad Tecnológica Del Magdalena Medio - Utem -,Santander,Barrancabermeja
4702,2024-1,1749,5810,0.3010327022375215,294,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
4832,2024-1,86,280,0.3071428571428572,295,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
9915,2024-1,363,1169,0.3105218135158255,296,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
4808,2024-1,30,93,0.3225806451612903,297,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
4727,2024-1,1873,5739,0.3263634779578324,298,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
4714,2024-1,61,177,0.3446327683615819,299,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
4829,2024-1,103,275,0.3745454545454546,300,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
9924,2024-1,53,125,0.424,301,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
9117,2024-1,3,7,0.4285714285714285,302,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
3830,2024-1,435,866,0.5023094688221709,303,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
4719,2024-1,306,459,0.6666666666666666,304,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
3715,2024-1,1,1,1.0,305,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
2739,2023-2,0,206,0.0,1,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
9929,2023-2,9,708,0.01271186440677966,2,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
3902,2023-2,41,2249,0.01823032458870609,3,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
2707,2023-2,42,1984,0.02116935483870968,4,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
1824,2023-2,123,4590,0.02679738562091503,5,Universidad Metropolitana,Atlántico,Barranquilla
2106,2023-2,191,6157,0.0310216014292675,6,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
9934,2023-2,2,63,0.03174603174603174,7,Centro De Estudios Aeronáuticos - Cea,Cundinamarca,"Bogotá, D.C."
1828,2023-2,166,5094,0.0325873576756969,8,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,2023-2,419,12767,0.03281898644943997,9,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,2023-2,318,9281,0.03426354918651008,10,Universidad De La Sabana,Cundinamarca,Chía
1713,2023-2,395,11171,0.03535941276519559,11,Universidad Del Norte,Atlántico,Barranquilla
1113,2023-2,545,15136,0.0360068710359408,12,Universidad De Cordoba,Córdoba,Montería
2746,2023-2,46,1270,0.03622047244094488,13,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
9921,2023-2,8,217,0.03686635944700461,14,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
9104,2023-2,64,1726,0.03707995365005794,15,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
1712,2023-2,296,7947,0.03724675978356613,16,Universidad Eafit-,Antioquia,Medellín
1107,2023-2,115,3009,0.03821867730142905,17,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1108,2023-2,142,3519,0.04035237283319125,18,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1720,2023-2,238,5848,0.04069767441860465,19,Universidad Mariana,Nariño,Pasto
1702,2023-2,259,6347,0.04080668032141169,20,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1730,2023-2,14,343,0.04081632653061224,21,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1215,2023-2,67,1637,0.04092852779474649,22,Universidad De Cundinamarca,Cundinamarca,Girardot
1714,2023-2,350,8468,0.0413320736891828,23,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
2730,2023-2,37,857,0.04317386231038507,24,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
2838,2023-2,27,623,0.04333868378812199,25,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1727,2023-2,144,3303,0.04359673024523161,26,Universidad Pontificia Bolivariana,Córdoba,Montería
1217,2023-2,264,5999,0.04400733455575929,27,Universidad De Sucre,Sucre,Sincelejo
1701,2023-2,714,16110,0.04432029795158287,28,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,2023-2,1243,27547,0.04512288089447127,29,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2704,2023-2,53,1136,0.04665492957746479,30,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
9930,2023-2,7,148,0.0472972972972973,31,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
1829,2023-2,100,2103,0.0475511174512601,32,Universidad Santiago De Cali,Valle del Cauca,Palmira
1106,2023-2,1017,21365,0.04760121694359935,33,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1210,2023-2,260,5355,0.04855275443510738,34,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
2702,2023-2,144,2960,0.04864864864864865,35,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
2825,2023-2,236,4737,0.04982056153683766,36,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
9124,2023-2,4,80,0.05,37,Tecnologico Coredi,Antioquia,Marinilla
1212,2023-2,1074,21384,0.05022446689113356,38,Universidad De Pamplona,Norte de Santander,Pamplona
2709,2023-2,319,6268,0.05089342693044033,39,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1206,2023-2,715,13979,0.05114815079762501,40,Universidad De Nariño,Nariño,Pasto
1833,2023-2,459,8904,0.05154986522911052,41,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1119,2023-2,338,6535,0.05172149961744453,42,Universidad De Los Llanos,Meta,Villavicencio
2114,2023-2,188,3541,0.05309234679469076,43,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
2813,2023-2,98,1844,0.05314533622559653,44,Universidad Eia,Antioquia,Envigado
2805,2023-2,820,15389,0.053284813828059,45,Universidad Simon Bolivar,Atlántico,Barranquilla
1110,2023-2,756,14063,0.05375808860129418,46,Universidad Del Cauca,Cauca,Popayán
3901,2023-2,17,312,0.05448717948717949,47,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
1832,2023-2,267,4887,0.05463474524248005,48,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1716,2023-2,211,3790,0.05567282321899736,49,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1835,2023-2,246,4411,0.05576966674223532,50,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1209,2023-2,832,14914,0.05578650932010192,51,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2741,2023-2,34,608,0.05592105263157895,52,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
3114,2023-2,28,497,0.05633802816901409,53,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
2301,2023-2,283,4976,0.05687299035369775,54,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
2708,2023-2,263,4585,0.05736095965103599,55,Universidad Ces,Antioquia,Medellín
1715,2023-2,118,2049,0.05758906783796974,56,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1214,2023-2,592,10197,0.05805629106599981,57,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1118,2023-2,779,13162,0.05918553411335663,58,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2811,2023-2,217,3660,0.0592896174863388,59,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
2747,2023-2,187,3110,0.06012861736334405,60,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
1114,2023-2,793,13188,0.06013042159538975,61,Universidad Surcolombiana,Huila,Neiva
1223,2023-2,19,315,0.06031746031746032,62,Universidad De Antioquia,Antioquia,Turbo
1105,2023-2,508,8403,0.06045459954778055,63,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
3104,2023-2,147,2394,0.06140350877192982,64,Colegio Mayor Del Cauca,Cauca,Popayán
9933,2023-2,70,1140,0.06140350877192982,65,Universidad Nacional De Colombia,Cesar,La Paz
2832,2023-2,585,9449,0.06191131336649381,66,Universidad De Santander - Udes,Santander,Bucaramanga
1203,2023-2,1854,29643,0.06254427689505111,67,Universidad Del Valle,Valle del Cauca,Santiago de Cali
2744,2023-2,357,5702,0.0626096106629253,68,Universidad Cesmag - Unicesmag,Nariño,Pasto
1121,2023-2,398,6349,0.06268703732871318,69,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1216,2023-2,36,571,0.06304728546409807,70,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
3301,2023-2,746,11680,0.06386986301369862,71,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
2208,2023-2,33,513,0.06432748538011696,72,Conservatorio Del Tolima,Tolima,Ibagué
1109,2023-2,51,786,0.0648854961832061,73,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
2701,2023-2,102,1554,0.06563706563706563,74,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
1115,2023-2,572,8711,0.06566410285845482,75,Universidad De La Amazonia,Caquetá,Florencia
1724,2023-2,259,3916,0.06613891726251277,76,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1204,2023-2,1319,19935,0.06616503636819664,77,Universidad Industrial De Santander,Santander,Bucaramanga
9907,2023-2,127,1907,0.06659674882013635,78,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
1834,2023-2,363,5442,0.06670341786108049,79,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1826,2023-2,870,13027,0.06678437092193137,80,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1817,2023-2,213,3178,0.0670232850849591,81,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1734,2023-2,309,4606,0.06708640903169778,82,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1219,2023-2,10,148,0.06756756756756757,83,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1709,2023-2,438,6474,0.06765523632993513,84,Universidad Central,Cundinamarca,"Bogotá, D.C."
1710,2023-2,637,9316,0.06837698583082868,85,Universidad Pontificia Bolivariana,Antioquia,Medellín
2712,2023-2,202,2950,0.06847457627118644,86,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1815,2023-2,237,3452,0.0686558516801854,87,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1805,2023-2,1178,16827,0.0700065371129732,88,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2836,2023-2,23,327,0.07033639143730887,89,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
1707,2023-2,373,5280,0.0706439393939394,90,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
3830,2023-2,61,860,0.07093023255813953,91,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
2720,2023-2,195,2743,0.07109004739336493,92,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
1120,2023-2,877,12293,0.07134141381273895,93,Universidad Popular Del Cesar,Cesar,Valledupar
1218,2023-2,1028,14344,0.07166759620747351,94,Universidad De La Guajira,La Guajira,Riohacha
2719,2023-2,962,13344,0.07209232613908872,95,Universidad Católica Luis Amigó,Antioquia,Medellín
1207,2023-2,1581,21889,0.07222805975604185,96,Universidad Del Tolima,Tolima,Ibagué
3204,2023-2,824,11384,0.07238229093464511,97,Tecnologico De Antioquia,Antioquia,Medellín
1205,2023-2,1472,20257,0.07266623883102137,98,Universidad De Cartagena,Bolívar,Cartagena de Indias
1103,2023-2,350,4809,0.07278020378457059,99,Universidad Nacional De Colombia,Caldas,Manizales
1827,2023-2,126,1721,0.07321324811156305,100,Universidad Catolica De Manizales,Caldas,Manizales
1112,2023-2,868,11833,0.07335417899095749,101,Universidad De Caldas,Caldas,Manizales
1820,2023-2,279,3799,0.07344037904711766,102,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1723,2023-2,261,3535,0.07383309759547384,103,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1104,2023-2,199,2693,0.07389528406981062,104,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1213,2023-2,1790,24206,0.07394860778319425,105,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1807,2023-2,326,4398,0.07412460209185993,106,Universidad Libre,Valle del Cauca,Santiago de Cali
1123,2023-2,194,2608,0.07438650306748466,107,Universidad Popular Del Cesar,Cesar,Aguachica
2810,2023-2,787,10457,0.07526059099168021,108,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
4110,2023-2,315,4181,0.07534082755321693,109,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
1729,2023-2,749,9922,0.07548881273936707,110,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
2711,2023-2,170,2237,0.07599463567277603,111,Universidad Catolica De Pereira,Risaralda,Pereira
2840,2023-2,111,1449,0.07660455486542443,112,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
3103,2023-2,244,3172,0.07692307692307693,113,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
1202,2023-2,1557,20222,0.0769953515972703,114,Universidad Del Atlantico,Atlántico,Puerto Colombia
2818,2023-2,74,961,0.07700312174817898,115,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
9116,2023-2,237,3077,0.07702307442313942,116,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
1816,2023-2,305,3896,0.07828542094455852,117,Universidad Cooperativa De Colombia,Antioquia,Medellín
2743,2023-2,198,2521,0.07854026180087267,118,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
4835,2023-2,59,738,0.07994579945799458,119,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
2815,2023-2,104,1297,0.08018504240555127,120,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
3117,2023-2,347,4266,0.08134083450539147,121,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
2211,2023-2,115,1410,0.08156028368794327,122,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
1812,2023-2,494,6026,0.08197809492200464,123,Universidad De Medellin,Antioquia,Medellín
1111,2023-2,1216,14776,0.08229561451001624,124,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
2842,2023-2,241,2904,0.08298898071625345,125,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
1122,2023-2,203,2439,0.08323083230832308,126,Universidad Del Pacifico,Valle del Cauca,Buenaventura
4810,2023-2,67,804,0.08333333333333333,127,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
1830,2023-2,550,6591,0.0834471248672432,128,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
2721,2023-2,285,3413,0.08350424846176384,129,Fundacion Universitaria Maria Cano,Antioquia,Medellín
1831,2023-2,375,4453,0.08421289018639119,130,Universidad De Ibague,Tolima,Ibagué
1825,2023-2,277,3275,0.08458015267175573,131,Universidad Autonoma De Manizales,Caldas,Manizales
1808,2023-2,418,4942,0.08458114123836503,132,Universidad Libre,Atlántico,Barranquilla
1201,2023-2,1577,18602,0.0847758305558542,133,Universidad De Antioquia,Antioquia,Medellín
4837,2023-2,68,801,0.08489388264669163,134,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
1803,2023-2,621,7297,0.08510346717829245,135,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1733,2023-2,187,2186,0.08554437328453797,136,Universidad Sergio Arboleda,Magdalena,Santa Marta
3705,2023-2,662,7699,0.08598519288219249,137,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
9122,2023-2,50,578,0.08650519031141868,138,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1208,2023-2,1294,14875,0.08699159663865547,139,Universidad Del Quindio,Quindío,Armenia
3821,2023-2,215,2469,0.08707978938841636,140,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
9105,2023-2,73,838,0.08711217183770883,141,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1818,2023-2,1899,21727,0.08740277074607632,142,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1722,2023-2,462,5276,0.08756633813495072,143,Universidad De Manizales,Caldas,Manizales
2715,2023-2,528,6019,0.08772221299219139,144,Fundacion Universitaria De Popayan,Cauca,Popayán
2737,2023-2,408,4644,0.08785529715762273,145,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
1706,2023-2,439,4964,0.08843674456083804,146,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
3806,2023-2,15,169,0.08875739644970414,147,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
1822,2023-2,81,912,0.08881578947368421,148,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1814,2023-2,258,2899,0.08899620558813384,149,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2206,2023-2,69,773,0.08926261319534282,150,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
2828,2023-2,242,2697,0.08972932888394512,151,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
1823,2023-2,688,7637,0.0900877307843394,152,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1726,2023-2,361,3973,0.0908633274603574,153,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1117,2023-2,1463,15856,0.09226791120080728,154,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
2710,2023-2,134,1442,0.0929264909847434,155,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
1718,2023-2,211,2260,0.09336283185840707,156,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
9935,2023-2,10,106,0.09433962264150944,157,Unidad Tecnológica Del Magdalena Medio - Utem -,Santander,Barrancabermeja
3808,2023-2,24,252,0.09523809523809525,158,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
2740,2023-2,12,126,0.09523809523809525,159,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
4101,2023-2,316,3315,0.09532428355957769,160,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
1719,2023-2,642,6569,0.0977317704369006,161,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1819,2023-2,46,467,0.09850107066381156,162,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
4108,2023-2,322,3260,0.09877300613496932,163,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
2302,2023-2,471,4768,0.09878355704697989,164,Institucion Universitaria De Envigado,Antioquia,Envigado
2820,2023-2,175,1771,0.09881422924901186,165,Corporacion Universitaria Lasallista,Antioquia,Caldas
1732,2023-2,375,3763,0.09965453095934096,166,Universidad Santo Tomas,Boyacá,Tunja
3831,2023-2,283,2830,0.1,167,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
4111,2023-2,253,2525,0.1001980198019802,168,Institución Universitaria Del Caribe,Magdalena,Ciénaga
2829,2023-2,7437,73847,0.1007082210516338,169,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
2823,2023-2,889,8812,0.10088515660463,170,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
4709,2023-2,94,922,0.1019522776572668,171,Institucion Universitaria Eam,Quindío,Armenia
1102,2023-2,1188,11570,0.1026793431287813,172,Universidad Nacional De Colombia,Antioquia,Medellín
1705,2023-2,483,4692,0.1029411764705882,173,Universidad Santo Tomas,Santander,Bucaramanga
1704,2023-2,1437,13841,0.1038219781807673,174,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
2209,2023-2,1119,10758,0.1040156162855549,175,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
2847,2023-2,631,6044,0.1044010589013898,176,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2833,2023-2,1833,17428,0.1051755795271976,177,Corporacion Universitaria Remington,Antioquia,Medellín
1809,2023-2,298,2828,0.1053748231966054,178,Universidad Libre,Risaralda,Pereira
1717,2023-2,330,3098,0.1065203357004519,179,Universidad De San Buenaventura,Antioquia,Medellín
9107,2023-2,60,558,0.1075268817204301,180,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
2724,2023-2,268,2488,0.1077170418006431,181,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
1728,2023-2,822,7600,0.1081578947368421,182,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
2713,2023-2,574,5294,0.1084246316584813,183,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
9922,2023-2,112,1032,0.1085271317829457,184,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
9121,2023-2,259,2378,0.1089150546677881,185,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
5802,2023-2,1798,16495,0.1090027280994241,186,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
9900,2023-2,65,596,0.1090604026845638,187,Corporacion Universitaria U De Colombia,Antioquia,Medellín
4818,2023-2,494,4513,0.1094615555063151,188,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
1735,2023-2,608,5532,0.1099060014461316,189,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2849,2023-2,207,1882,0.1099893730074389,190,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
1804,2023-2,602,5439,0.1106821106821107,191,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2850,2023-2,515,4617,0.1115442928308425,192,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
2110,2023-2,536,4779,0.1121573550952082,193,Colegio Mayor De Antioquia,Antioquia,Medellín
1802,2023-2,212,1882,0.1126461211477152,194,Universidad La Gran Colombia,Quindío,Armenia
2207,2023-2,442,3920,0.1127551020408163,195,Instituto Universitario De La Paz,Santander,Barrancabermeja
3703,2023-2,126,1105,0.114027149321267,196,Institucion Universitaria Escolme,Antioquia,Medellín
3719,2023-2,50,438,0.1141552511415525,197,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
3702,2023-2,35,305,0.1147540983606557,198,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
3803,2023-2,59,514,0.1147859922178988,199,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
2841,2023-2,252,2177,0.1157556270096463,200,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
2104,2023-2,1824,15672,0.116385911179173,201,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
3720,2023-2,169,1447,0.1167933655839668,202,Fundacion Universitaria Esumer,Antioquia,Medellín
2834,2023-2,662,5657,0.1170231571504331,203,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
3817,2023-2,420,3581,0.1172856743926278,204,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
4806,2023-2,8,68,0.1176470588235294,205,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
3102,2023-2,144,1208,0.119205298013245,206,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
3706,2023-2,182,1515,0.1201320132013201,207,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
3107,2023-2,824,6804,0.1211052322163433,208,Institución Universitaria Pascual Bravo,Antioquia,Medellín
4817,2023-2,273,2243,0.1217119928666964,209,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
2102,2023-2,14066,114846,0.1224770562318235,210,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
3801,2023-2,54,438,0.1232876712328767,211,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
1810,2023-2,180,1455,0.1237113402061856,212,Universidad Libre,Norte de Santander,San José de Cúcuta
3718,2023-2,178,1436,0.1239554317548747,213,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
2723,2023-2,333,2654,0.1254709871891485,214,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
2848,2023-2,313,2494,0.1255012028869286,215,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
3713,2023-2,329,2600,0.1265384615384615,216,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
2736,2023-2,23,181,0.1270718232044199,217,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
1811,2023-2,100,764,0.1308900523560209,218,Universidad Libre,Santander,Socorro
2745,2023-2,1033,7880,0.1310913705583756,219,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
1806,2023-2,828,6278,0.1318891366677286,220,Universidad Libre,Cundinamarca,"Bogotá, D.C."
2827,2023-2,309,2319,0.1332470892626132,221,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
2731,2023-2,423,3148,0.1343710292249047,222,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
9127,2023-2,111,820,0.1353658536585366,223,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
2725,2023-2,6219,45699,0.1360861287993173,224,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
9119,2023-2,1740,12703,0.1369755175942691,225,Corporacion Universitaria Americana,Atlántico,Barranquilla
2902,2023-2,14,102,0.1372549019607843,226,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
2749,2023-2,355,2582,0.1374903175832688,227,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
1801,2023-2,957,6875,0.1392,228,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
9120,2023-2,87,623,0.1396468699839486,229,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
3302,2023-2,3133,22305,0.1404617798699843,230,Institucion Universitaria - Itm,Antioquia,Medellín
2733,2023-2,19,134,0.1417910447761194,231,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
4822,2023-2,167,1173,0.1423699914748508,232,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
9903,2023-2,66,461,0.1431670281995662,233,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
3303,2023-2,140,971,0.1441812564366632,234,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
1301,2023-2,3478,24020,0.1447960033305579,235,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
3812,2023-2,152,1039,0.1462945139557267,236,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
2837,2023-2,574,3853,0.1489748248118349,237,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
9129,2023-2,217,1454,0.1492434662998625,238,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
2812,2023-2,1263,8417,0.150053463229179,239,Universidad Ean,Cundinamarca,"Bogotá, D.C."
2732,2023-2,582,3862,0.1506991196271362,240,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
2738,2023-2,105,692,0.1517341040462428,241,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
4801,2023-2,34,224,0.1517857142857143,242,Corporacion Academia Superior De Artes,Antioquia,Medellín
3115,2023-2,379,2477,0.153007670569237,243,Institución Universitaria Del Putumayo,Putumayo,Mocoa
3819,2023-2,131,853,0.1535756154747948,244,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
9117,2023-2,2,13,0.1538461538461539,245,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
2748,2023-2,39,252,0.1547619047619048,246,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
3201,2023-2,3308,21284,0.1554219131742154,247,Unidades Tecnologicas De Santander,Santander,Bucaramanga
4825,2023-2,162,1038,0.1560693641618497,248,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
9131,2023-2,214,1347,0.1588715664439495,249,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
9906,2023-2,22,138,0.1594202898550725,250,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
4112,2023-2,109,681,0.1600587371512482,251,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
2830,2023-2,2412,14522,0.1660928246797962,252,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
9126,2023-2,51,306,0.1666666666666667,253,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
3725,2023-2,27,161,0.1677018633540373,254,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
9936,2023-2,25,149,0.1677852348993289,255,Corporación Universitaria Autónoma Del Norte,Norte de Santander,San José de Cúcuta
9905,2023-2,126,748,0.1684491978609626,256,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
4726,2023-2,870,5157,0.1687027341477603,257,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
9913,2023-2,683,3908,0.1747697031729785,258,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
2728,2023-2,4633,26219,0.1767039170067508,259,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
2831,2023-2,412,2300,0.1791304347826087,260,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
9928,2023-2,39,217,0.1797235023041475,261,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
2727,2023-2,768,4265,0.1800703399765533,262,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
4701,2023-2,269,1490,0.1805369127516779,263,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
3826,2023-2,174,947,0.1837381203801478,264,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
5801,2023-2,107,572,0.1870629370629371,265,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
2901,2023-2,12,63,0.1904761904761905,266,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
9128,2023-2,169,883,0.1913929784824462,267,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
3809,2023-2,16,82,0.1951219512195122,268,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
3710,2023-2,505,2577,0.1959642995731471,269,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
4107,2023-2,180,916,0.1965065502183406,270,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
4721,2023-2,146,734,0.1989100817438692,271,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
4109,2023-2,333,1673,0.1990436341900777,272,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
9926,2023-2,632,3124,0.2023047375160051,273,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
3820,2023-2,33,161,0.2049689440993789,274,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
9904,2023-2,255,1154,0.2209705372616984,275,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
4106,2023-2,75,339,0.2212389380530974,276,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
9902,2023-2,65,293,0.2218430034129693,277,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
1725,2023-2,166,732,0.226775956284153,278,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
9914,2023-2,115,483,0.2380952380952381,279,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
9927,2023-2,1431,5994,0.2387387387387387,280,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
4813,2023-2,10082,42193,0.2389495887943498,281,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
3716,2023-2,161,653,0.2465543644716692,282,Tecnologica Fitec,Santander,Bucaramanga
9932,2023-2,5,20,0.25,283,Fundación Universitaria San Pablo - Unisanpablo,Cundinamarca,"Bogotá, D.C."
4719,2023-2,37,144,0.2569444444444444,284,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
4829,2023-2,90,347,0.2593659942363112,285,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
1703,2023-2,137,522,0.2624521072796935,286,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
4727,2023-2,1269,4789,0.2649822509918563,287,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
9110,2023-2,106381,400257,0.2657817352351114,288,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
9915,2023-2,216,797,0.2710163111668758,289,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
4102,2023-2,235,803,0.2926525529265255,290,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
4710,2023-2,240,819,0.2930402930402931,291,Fundación Politécnico Minuto De Dios - Tec Md,Cundinamarca,"Bogotá, D.C."
4714,2023-2,40,135,0.2962962962962963,292,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
4832,2023-2,101,285,0.3543859649122807,293,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
2905,2023-2,12,32,0.375,294,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
3715,2023-2,290,763,0.3800786369593709,295,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
4803,2023-2,27,68,0.3970588235294117,296,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
9924,2023-2,59,122,0.4836065573770492,297,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
9899,2023-2,1,2,0.5,298,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
4702,2023-2,3612,6436,0.5612181479179614,299,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
4808,2023-2,161,170,0.9470588235294116,300,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
9117,2023-1,0,14,0.0,1,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
4803,2023-1,0,19,0.0,2,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
9923,2023-1,0,115,0.0,3,Corporacion Universitaria De Cataluña,Cundinamarca,"Bogotá, D.C."
9110,2023-1,282,323111,0.0008727650869205938,4,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
4710,2023-1,3,682,0.004398826979472141,5,Fundación Politécnico Minuto De Dios - Tec Md,Cundinamarca,"Bogotá, D.C."
3114,2023-1,3,244,0.01229508196721311,6,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
1301,2023-1,296,21226,0.01394516159427118,7,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1824,2023-1,84,4479,0.01875418620227729,8,Universidad Metropolitana,Atlántico,Barranquilla
2707,2023-1,38,1940,0.01958762886597938,9,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
2106,2023-1,138,6740,0.02047477744807122,10,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
9921,2023-1,4,182,0.02197802197802198,11,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
1711,2023-1,246,9498,0.02590018951358181,12,Universidad De La Sabana,Cundinamarca,Chía
2704,2023-1,30,1053,0.02849002849002849,13,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
9124,2023-1,2,69,0.02898550724637681,14,Tecnologico Coredi,Antioquia,Marinilla
1828,2023-1,148,5087,0.02909376842932966,15,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,2023-1,376,12490,0.03010408326661329,16,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1222,2023-1,2,66,0.0303030303030303,17,Universidad De Antioquia,Antioquia,Puerto Berrío
1101,2023-1,840,27074,0.03102607667873236,18,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
9104,2023-1,56,1795,0.03119777158774373,19,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
3902,2023-1,85,2671,0.03182328715836765,20,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
1220,2023-1,7,213,0.03286384976525822,21,Universidad De Antioquia,Antioquia,Andes
1213,2023-1,822,23813,0.03451896023180616,22,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1113,2023-1,554,15667,0.03536094976702624,23,Universidad De Cordoba,Córdoba,Montería
2114,2023-1,126,3542,0.03557312252964427,24,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
1713,2023-1,426,11680,0.03647260273972603,25,Universidad Del Norte,Atlántico,Barranquilla
9933,2023-1,39,1010,0.03861386138613861,26,Universidad Nacional De Colombia,Cesar,La Paz
2702,2023-1,117,2969,0.03940720781407881,27,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1730,2023-1,13,323,0.04024767801857585,28,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1217,2023-1,245,5981,0.04096304965724795,29,Universidad De Sucre,Sucre,Sincelejo
2825,2023-1,196,4648,0.04216867469879518,30,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
1727,2023-1,140,3260,0.04294478527607362,31,Universidad Pontificia Bolivariana,Córdoba,Montería
1714,2023-1,369,8584,0.04298695246971109,32,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1701,2023-1,707,16386,0.04314658855120224,33,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1103,2023-1,209,4803,0.04351447012283989,34,Universidad Nacional De Colombia,Caldas,Manizales
1221,2023-1,8,181,0.04419889502762431,35,Universidad De Antioquia,Antioquia,Caucasia
1110,2023-1,607,13698,0.04431303839976639,36,Universidad Del Cauca,Cauca,Popayán
1212,2023-1,982,21874,0.04489348084483862,37,Universidad De Pamplona,Norte de Santander,Pamplona
2709,2023-1,260,5693,0.0456701212014755,38,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
2730,2023-1,39,829,0.04704463208685163,39,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
2840,2023-1,64,1357,0.04716285924834193,40,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
1827,2023-1,85,1795,0.04735376044568245,41,Universidad Catolica De Manizales,Caldas,Manizales
1702,2023-1,300,6326,0.04742333227948151,42,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1215,2023-1,78,1634,0.04773561811505508,43,Universidad De Cundinamarca,Cundinamarca,Girardot
1104,2023-1,128,2673,0.04788627010849233,44,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1832,2023-1,237,4924,0.04813160032493907,45,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
2805,2023-1,777,15747,0.04934273194894265,46,Universidad Simon Bolivar,Atlántico,Barranquilla
1210,2023-1,287,5721,0.05016605488550953,47,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
9103,2023-1,27,538,0.05018587360594796,48,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
1811,2023-1,40,791,0.05056890012642225,49,Universidad Libre,Santander,Socorro
1206,2023-1,720,13760,0.05232558139534884,50,Universidad De Nariño,Nariño,Pasto
1808,2023-1,260,4953,0.05249343832020997,51,Universidad Libre,Atlántico,Barranquilla
1107,2023-1,156,2962,0.05266711681296422,52,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2743,2023-1,127,2411,0.052675238490253,53,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1119,2023-1,340,6368,0.05339195979899498,54,Universidad De Los Llanos,Meta,Villavicencio
1820,2023-1,203,3802,0.0533929510783798,55,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1724,2023-1,208,3829,0.05432227735701228,56,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
2712,2023-1,164,2957,0.05546161650321271,57,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1829,2023-1,110,1961,0.05609382967873534,58,Universidad Santiago De Cali,Valle del Cauca,Palmira
1712,2023-1,457,8124,0.05625307730182176,59,Universidad Eafit-,Antioquia,Medellín
1833,2023-1,498,8800,0.05659090909090909,60,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
2746,2023-1,74,1296,0.05709876543209876,61,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
1112,2023-1,664,11330,0.05860547219770521,62,Universidad De Caldas,Caldas,Manizales
2832,2023-1,552,9418,0.05861117009980887,63,Universidad De Santander - Udes,Santander,Bucaramanga
9102,2023-1,35,597,0.05862646566164154,64,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
2708,2023-1,276,4699,0.0587359012555863,65,Universidad Ces,Antioquia,Medellín
1707,2023-1,316,5367,0.05887833053847587,66,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1118,2023-1,771,13015,0.05923933922397234,67,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1105,2023-1,498,8395,0.0593210244192972,68,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1835,2023-1,253,4264,0.05933395872420263,69,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1716,2023-1,229,3858,0.05935717988595127,70,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1732,2023-1,209,3497,0.05976551329711181,71,Universidad Santo Tomas,Boyacá,Tunja
1715,2023-1,134,2234,0.05998209489704566,72,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1121,2023-1,374,6212,0.06020605280103027,73,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1834,2023-1,321,5308,0.06047475508666164,74,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1102,2023-1,699,11533,0.06060868811237319,75,Universidad Nacional De Colombia,Antioquia,Medellín
2747,2023-1,194,3187,0.06087229369312833,76,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
9907,2023-1,120,1966,0.06103763987792472,77,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
3901,2023-1,18,291,0.06185567010309279,78,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
2208,2023-1,31,501,0.06187624750499002,79,Conservatorio Del Tolima,Tolima,Ibagué
1706,2023-1,324,5135,0.06309639727361246,80,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1108,2023-1,219,3463,0.0632399653479642,81,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1214,2023-1,661,10411,0.0634905388531361,82,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1204,2023-1,1264,19873,0.06360388466763951,83,Universidad Industrial De Santander,Santander,Bucaramanga
1115,2023-1,560,8728,0.06416131989000917,84,Universidad De La Amazonia,Caquetá,Florencia
1203,2023-1,1911,29617,0.06452375324982274,85,Universidad Del Valle,Valle del Cauca,Santiago de Cali
2701,2023-1,105,1604,0.06546134663341646,86,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
3301,2023-1,741,11266,0.06577312266998048,87,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
1709,2023-1,465,7052,0.06593874078275666,88,Universidad Central,Cundinamarca,"Bogotá, D.C."
1809,2023-1,186,2801,0.06640485540878258,89,Universidad Libre,Risaralda,Pereira
9932,2023-1,1,15,0.06666666666666667,90,Fundación Universitaria San Pablo - Unisanpablo,Cundinamarca,"Bogotá, D.C."
2719,2023-1,931,13818,0.0673758865248227,91,Universidad Católica Luis Amigó,Antioquia,Medellín
1720,2023-1,395,5815,0.06792777300085985,92,Universidad Mariana,Nariño,Pasto
9936,2023-1,6,88,0.06818181818181818,93,Corporación Universitaria Autónoma Del Norte,Norte de Santander,San José de Cúcuta
1723,2023-1,258,3783,0.06819984139571768,94,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1831,2023-1,325,4761,0.06826296996429322,95,Universidad De Ibague,Tolima,Ibagué
2813,2023-1,133,1942,0.06848609680741503,96,Universidad Eia,Antioquia,Envigado
1815,2023-1,244,3528,0.0691609977324263,97,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1722,2023-1,344,4968,0.06924315619967794,98,Universidad De Manizales,Caldas,Manizales
1805,2023-1,1151,16560,0.06950483091787439,99,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1816,2023-1,275,3949,0.06963788300835655,100,Universidad Cooperativa De Colombia,Antioquia,Medellín
2744,2023-1,394,5647,0.06977156012041792,101,Universidad Cesmag - Unicesmag,Nariño,Pasto
2301,2023-1,338,4828,0.0700082850041425,102,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
1106,2023-1,1463,20841,0.07019816707451658,103,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2811,2023-1,275,3912,0.07029652351738241,104,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1710,2023-1,703,9996,0.070328131252501,105,Universidad Pontificia Bolivariana,Antioquia,Medellín
2720,2023-1,209,2931,0.07130672125554419,106,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
2810,2023-1,784,10892,0.07197943444730077,107,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1209,2023-1,1219,16635,0.07327923053802224,108,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1807,2023-1,332,4520,0.07345132743362832,109,Universidad Libre,Valle del Cauca,Santiago de Cali
1826,2023-1,963,13009,0.0740256745330156,110,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2842,2023-1,211,2850,0.07403508771929825,111,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
3821,2023-1,176,2347,0.0749893481039625,112,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
1734,2023-1,342,4548,0.07519788918205805,113,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
2710,2023-1,107,1394,0.07675753228120516,114,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
3104,2023-1,182,2368,0.07685810810810811,115,Colegio Mayor Del Cauca,Cauca,Popayán
3705,2023-1,568,7388,0.0768814293448836,116,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
1111,2023-1,1151,14958,0.07694878994517984,117,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
4837,2023-1,59,766,0.07702349869451697,118,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
2838,2023-1,50,648,0.07716049382716049,119,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1114,2023-1,1057,13645,0.07746427262733602,120,Universidad Surcolombiana,Huila,Neiva
2815,2023-1,102,1313,0.07768469154607768,121,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
1806,2023-1,501,6385,0.07846515270164447,122,Universidad Libre,Cundinamarca,"Bogotá, D.C."
9900,2023-1,53,673,0.0787518573551263,123,Corporacion Universitaria U De Colombia,Antioquia,Medellín
1205,2023-1,1575,19986,0.07880516361453017,124,Universidad De Cartagena,Bolívar,Cartagena de Indias
1802,2023-1,145,1833,0.07910529187124932,125,Universidad La Gran Colombia,Quindío,Armenia
2206,2023-1,60,748,0.08021390374331551,126,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
2721,2023-1,285,3534,0.08064516129032258,127,Fundacion Universitaria Maria Cano,Antioquia,Medellín
1830,2023-1,545,6728,0.08100475624256837,128,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1733,2023-1,173,2135,0.08103044496487119,129,Universidad Sergio Arboleda,Magdalena,Santa Marta
1122,2023-1,200,2466,0.08110300081103,130,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1817,2023-1,260,3178,0.08181246066708622,131,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1822,2023-1,78,952,0.0819327731092437,132,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1729,2023-1,858,10451,0.08209740694670367,133,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1719,2023-1,571,6943,0.08224110615007922,134,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
3204,2023-1,964,11680,0.08253424657534246,135,Tecnologico De Antioquia,Antioquia,Medellín
1803,2023-1,628,7598,0.0826533298236378,136,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1218,2023-1,1148,13867,0.08278647147905098,137,Universidad De La Guajira,La Guajira,Riohacha
9934,2023-1,5,60,0.08333333333333333,138,Centro De Estudios Aeronáuticos - Cea,Cundinamarca,"Bogotá, D.C."
1705,2023-1,352,4214,0.083531086853346,139,Universidad Santo Tomas,Santander,Bucaramanga
1728,2023-1,628,7504,0.08368869936034115,140,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
2711,2023-1,191,2279,0.08380868802106187,141,Universidad Catolica De Pereira,Risaralda,Pereira
1825,2023-1,302,3590,0.08412256267409471,142,Universidad Autonoma De Manizales,Caldas,Manizales
1819,2023-1,42,498,0.08433734939759036,143,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1823,2023-1,663,7827,0.08470678420850901,144,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1216,2023-1,47,554,0.08483754512635379,145,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1223,2023-1,28,329,0.0851063829787234,146,Universidad De Antioquia,Antioquia,Turbo
2209,2023-1,932,10950,0.08511415525114155,147,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
2841,2023-1,182,2135,0.08524590163934426,148,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
2828,2023-1,241,2805,0.08591800356506239,149,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
9930,2023-1,13,151,0.08609271523178808,150,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
1812,2023-1,561,6498,0.08633425669436749,151,Universidad De Medellin,Antioquia,Medellín
1810,2023-1,123,1422,0.08649789029535865,152,Universidad Libre,Norte de Santander,San José de Cúcuta
9116,2023-1,280,3231,0.08666047663262148,153,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
4709,2023-1,87,1003,0.08673978065802593,154,Institucion Universitaria Eam,Quindío,Armenia
9929,2023-1,59,676,0.08727810650887574,155,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
4110,2023-1,365,4180,0.08732057416267942,156,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
2737,2023-1,410,4670,0.08779443254817987,157,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
1718,2023-1,196,2232,0.08781362007168458,158,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1818,2023-1,1987,22576,0.08801381998582565,159,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
4835,2023-1,60,669,0.08968609865470852,160,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
1726,2023-1,373,4137,0.09016195310611554,161,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2823,2023-1,801,8802,0.09100204498977506,162,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
1219,2023-1,26,283,0.09187279151943464,163,Universidad De Antioquia,Antioquia,El Carmen de Viboral
9922,2023-1,102,1108,0.092057761732852,164,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
2715,2023-1,573,6146,0.09323136999674583,165,Fundacion Universitaria De Popayan,Cauca,Popayán
1123,2023-1,250,2656,0.0941265060240964,166,Universidad Popular Del Cesar,Cesar,Aguachica
1117,2023-1,1492,15805,0.09440050616893388,167,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
2211,2023-1,133,1402,0.09486447931526391,168,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
9127,2023-1,82,853,0.09613130128956623,169,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
2818,2023-1,105,1090,0.0963302752293578,170,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
2736,2023-1,17,175,0.09714285714285714,171,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
1208,2023-1,1455,14881,0.09777568711780124,172,Universidad Del Quindio,Quindío,Armenia
3720,2023-1,144,1469,0.09802586793737236,173,Fundacion Universitaria Esumer,Antioquia,Medellín
1201,2023-1,3019,30765,0.09813099301153907,174,Universidad De Antioquia,Antioquia,Medellín
2741,2023-1,59,599,0.09849749582637728,175,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
9122,2023-1,61,619,0.098546042003231,176,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
2207,2023-1,379,3826,0.09905906952430736,177,Instituto Universitario De La Paz,Santander,Barrancabermeja
1735,2023-1,546,5498,0.09930883957802836,178,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1120,2023-1,1309,13128,0.09971054235222424,179,Universidad Popular Del Cesar,Cesar,Valledupar
3831,2023-1,267,2673,0.09988776655443322,180,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
1717,2023-1,330,3287,0.1003954974140554,181,Universidad De San Buenaventura,Antioquia,Medellín
2847,2023-1,614,6088,0.1008541392904074,182,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2829,2023-1,8121,80205,0.1012530390873387,183,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
2731,2023-1,331,3238,0.1022235948116121,184,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
3303,2023-1,99,961,0.1030176899063475,185,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
2724,2023-1,275,2652,0.1036953242835596,186,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
2110,2023-1,524,5032,0.1041335453100159,187,Colegio Mayor De Antioquia,Antioquia,Medellín
9105,2023-1,89,852,0.1044600938967136,188,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
2733,2023-1,18,172,0.1046511627906977,189,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
9121,2023-1,238,2262,0.1052166224580018,190,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
2302,2023-1,501,4737,0.1057631412286257,191,Institucion Universitaria De Envigado,Antioquia,Envigado
1704,2023-1,1549,14640,0.1058060109289617,192,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1801,2023-1,757,7145,0.1059482155353394,193,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
4806,2023-1,5,47,0.1063829787234043,194,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
2833,2023-1,1932,18088,0.1068111455108359,195,Corporacion Universitaria Remington,Antioquia,Medellín
3719,2023-1,51,477,0.1069182389937107,196,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
4810,2023-1,90,837,0.1075268817204301,197,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
2850,2023-1,504,4670,0.1079229122055674,198,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
9906,2023-1,17,156,0.108974358974359,199,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
2104,2023-1,1713,15657,0.1094079325541291,200,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
2820,2023-1,194,1769,0.1096664782362917,201,Corporacion Universitaria Lasallista,Antioquia,Caldas
4108,2023-1,343,3126,0.1097248880358285,202,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
1814,2023-1,352,3206,0.1097941359950094,203,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1109,2023-1,86,780,0.1102564102564103,204,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1202,2023-1,2297,20833,0.110257764124226,205,Universidad Del Atlantico,Atlántico,Puerto Colombia
2723,2023-1,294,2659,0.1105678826626551,206,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
3817,2023-1,420,3785,0.1109643328929987,207,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
2713,2023-1,597,5365,0.1112767940354147,208,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
3808,2023-1,29,258,0.1124031007751938,209,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
3103,2023-1,397,3492,0.11368843069874,210,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
9903,2023-1,54,471,0.1146496815286624,211,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
4822,2023-1,148,1289,0.1148176881303336,212,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
3801,2023-1,52,450,0.1155555555555556,213,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
1207,2023-1,2590,22407,0.1155888784754764,214,Universidad Del Tolima,Tolima,Ibagué
2812,2023-1,941,8100,0.1161728395061728,215,Universidad Ean,Cundinamarca,"Bogotá, D.C."
3703,2023-1,141,1199,0.1175979983319433,216,Institucion Universitaria Escolme,Antioquia,Medellín
2725,2023-1,5491,46641,0.1177290366844622,217,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
2848,2023-1,308,2616,0.117737003058104,218,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
9131,2023-1,150,1267,0.1183898973954223,219,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
2834,2023-1,698,5878,0.1187478734263355,220,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
3803,2023-1,67,564,0.1187943262411348,221,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
3713,2023-1,280,2353,0.1189970250743731,222,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
1804,2023-1,687,5766,0.1191467221644121,223,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
4111,2023-1,318,2666,0.1192798199549888,224,Institución Universitaria Del Caribe,Magdalena,Ciénaga
9905,2023-1,92,771,0.119325551232166,225,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
5802,2023-1,2023,16917,0.1195838505645209,226,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
2902,2023-1,14,117,0.1196581196581197,227,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
4818,2023-1,556,4595,0.1210010881392818,228,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
3809,2023-1,12,99,0.1212121212121212,229,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
2849,2023-1,235,1917,0.1225873761085029,230,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
2745,2023-1,955,7786,0.122656049319291,231,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
2740,2023-1,17,136,0.125,232,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
9128,2023-1,89,711,0.1251758087201125,233,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
3706,2023-1,222,1772,0.1252821670428894,234,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
3718,2023-1,160,1276,0.1253918495297806,235,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
3806,2023-1,23,182,0.1263736263736264,236,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
4817,2023-1,298,2321,0.1283929340801379,237,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
9928,2023-1,27,210,0.1285714285714286,238,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
2727,2023-1,552,4240,0.130188679245283,239,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
9129,2023-1,191,1453,0.131452167928424,240,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
3117,2023-1,667,5016,0.1329744816586922,241,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
9107,2023-1,79,587,0.1345826235093697,242,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
9120,2023-1,85,631,0.1347068145800317,243,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
9119,2023-1,1710,12633,0.1353597720256471,244,Corporacion Universitaria Americana,Atlántico,Barranquilla
2837,2023-1,568,4121,0.13783062363504,245,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
3302,2023-1,3250,23115,0.1406013411204845,246,Institucion Universitaria - Itm,Antioquia,Medellín
3115,2023-1,370,2620,0.1412213740458015,247,Institución Universitaria Del Putumayo,Putumayo,Mocoa
2827,2023-1,339,2392,0.1417224080267558,248,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
2102,2023-1,16102,113325,0.1420869181557468,249,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
2749,2023-1,380,2662,0.1427498121712998,250,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
3107,2023-1,975,6802,0.1433401940605704,251,Institución Universitaria Pascual Bravo,Antioquia,Medellín
2738,2023-1,110,766,0.1436031331592689,252,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
4701,2023-1,207,1439,0.1438498957609451,253,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
4101,2023-1,531,3687,0.1440195280716029,254,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
3715,2023-1,101,700,0.1442857142857143,255,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
5801,2023-1,80,550,0.1454545454545454,256,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
3201,2023-1,3117,21300,0.1463380281690141,257,Unidades Tecnologicas De Santander,Santander,Bucaramanga
2748,2023-1,38,258,0.1472868217054264,258,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
3702,2023-1,52,353,0.1473087818696884,259,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
3102,2023-1,206,1384,0.1488439306358381,260,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
2732,2023-1,626,4062,0.1541112752338749,261,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
4726,2023-1,768,4978,0.1542788268380876,262,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
3819,2023-1,138,886,0.1557562076749436,263,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
3834,2023-1,10,62,0.1612903225806452,264,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
4112,2023-1,108,653,0.1653905053598775,265,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
2831,2023-1,398,2403,0.1656263004577611,266,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
4825,2023-1,175,1040,0.1682692307692308,267,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
3710,2023-1,415,2437,0.1702913418137054,268,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
4721,2023-1,155,905,0.1712707182320442,269,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
2728,2023-1,4528,26032,0.173939766441303,270,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
1703,2023-1,97,554,0.1750902527075812,271,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9935,2023-1,17,97,0.1752577319587629,272,Unidad Tecnológica Del Magdalena Medio - Utem -,Santander,Barrancabermeja
4719,2023-1,25,142,0.176056338028169,273,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
4811,2023-1,9,50,0.18,274,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
3716,2023-1,59,319,0.1849529780564263,275,Tecnologica Fitec,Santander,Bucaramanga
3725,2023-1,39,210,0.1857142857142857,276,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
2830,2023-1,2891,15404,0.1876785250584264,277,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
9902,2023-1,55,290,0.1896551724137931,278,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
2901,2023-1,12,62,0.1935483870967742,279,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
3812,2023-1,190,977,0.1944728761514841,280,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
9126,2023-1,64,315,0.2031746031746032,281,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
2836,2023-1,84,405,0.2074074074074074,282,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
3826,2023-1,233,1098,0.2122040072859745,283,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
1725,2023-1,199,933,0.2132904608788853,284,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
9927,2023-1,1010,4582,0.2204277608031427,285,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
4106,2023-1,95,424,0.2240566037735849,286,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
4109,2023-1,401,1759,0.2279704377487209,287,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
4801,2023-1,60,260,0.2307692307692308,288,Corporacion Academia Superior De Artes,Antioquia,Medellín
3820,2023-1,43,186,0.2311827956989247,289,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
4808,2023-1,25,105,0.2380952380952381,290,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
4102,2023-1,211,865,0.2439306358381503,291,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
9914,2023-1,112,454,0.2466960352422908,292,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
4107,2023-1,135,547,0.246800731261426,293,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
9904,2023-1,310,1251,0.2478017585931255,294,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
9926,2023-1,719,2830,0.2540636042402827,295,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
4813,2023-1,11310,40857,0.2768191497173067,296,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
9913,2023-1,1546,5149,0.3002524762089726,297,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
4714,2023-1,37,123,0.3008130081300813,298,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
4727,2023-1,1846,5733,0.3219954648526077,299,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
9915,2023-1,281,845,0.3325443786982248,300,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
3830,2023-1,183,550,0.3327272727272727,301,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
4829,2023-1,146,418,0.3492822966507177,302,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
2739,2023-1,109,290,0.3758620689655172,303,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
4832,2023-1,214,488,0.4385245901639344,304,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
9924,2023-1,36,78,0.4615384615384616,305,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
4702,2023-1,2868,5749,0.498869368585841,306,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
3807,2023-1,14,28,0.5,307,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
2905,2023-1,149,294,0.5068027210884354,308,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
9899,2023-1,601,604,0.9950331125827816,309,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
1202,2022-2,0,1,0.0,1,Universidad Del Atlantico,Atlántico,Puerto Colombia
3830,2022-2,0,68,0.0,2,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
3828,2022-2,0,5,0.0,3,Corporación Tecnológica De Educación Superior Sapienza - Cte,Cundinamarca,"Bogotá, D.C."
9930,2022-2,2,155,0.01290322580645161,4,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
2707,2022-2,26,1917,0.01356285863328117,5,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
9923,2022-2,1,61,0.01639344262295082,6,Corporacion Universitaria De Cataluña,Cundinamarca,"Bogotá, D.C."
2106,2022-2,148,8933,0.01656778237993955,7,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
1824,2022-2,76,4271,0.01779442753453524,8,Universidad Metropolitana,Atlántico,Barranquilla
1828,2022-2,123,5153,0.02386959052978847,9,Universidad Icesi,Valle del Cauca,Santiago de Cali
2704,2022-2,30,1115,0.02690582959641256,10,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1222,2022-2,2,69,0.02898550724637681,11,Universidad De Antioquia,Antioquia,Puerto Berrío
3902,2022-2,65,2186,0.02973467520585544,12,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
1711,2022-2,303,9595,0.03157894736842105,13,Universidad De La Sabana,Cundinamarca,Chía
2730,2022-2,27,817,0.03304773561811505,14,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
1713,2022-2,392,11825,0.03315010570824525,15,Universidad Del Norte,Atlántico,Barranquilla
2702,2022-2,92,2753,0.03341808935706502,16,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
9104,2022-2,62,1834,0.03380588876772083,17,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
1712,2022-2,265,7837,0.03381395942324869,18,Universidad Eafit-,Antioquia,Medellín
1813,2022-2,439,12808,0.03427545284197377,19,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1724,2022-2,126,3581,0.03518570231778833,20,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
9921,2022-2,5,141,0.03546099290780142,21,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
1108,2022-2,130,3458,0.03759398496240601,22,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1101,2022-2,1037,27017,0.03838324018210756,23,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1701,2022-2,636,16178,0.03931264680430214,24,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1301,2022-2,778,19226,0.04046603557682305,25,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1113,2022-2,673,16059,0.0419079643813438,26,Universidad De Cordoba,Córdoba,Montería
2805,2022-2,624,14725,0.04237691001697793,27,Universidad Simon Bolivar,Atlántico,Barranquilla
2708,2022-2,199,4667,0.04263981144203986,28,Universidad Ces,Antioquia,Medellín
1217,2022-2,266,6011,0.04425220429213109,29,Universidad De Sucre,Sucre,Sincelejo
1110,2022-2,581,13083,0.0444087747458534,30,Universidad Del Cauca,Cauca,Popayán
1714,2022-2,393,8730,0.04501718213058419,31,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1213,2022-2,1051,23231,0.04524127243769101,32,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1210,2022-2,261,5763,0.04528891202498699,33,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
9934,2022-2,1,22,0.04545454545454546,34,Centro De Estudios Aeronáuticos - Cea,Cundinamarca,"Bogotá, D.C."
2838,2022-2,28,606,0.0462046204620462,35,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1107,2022-2,148,3014,0.0491041804910418,36,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2114,2022-2,176,3532,0.04983012457531144,37,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
1727,2022-2,152,3044,0.04993429697766097,38,Universidad Pontificia Bolivariana,Córdoba,Montería
1820,2022-2,186,3690,0.05040650406504065,39,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
9102,2022-2,31,605,0.0512396694214876,40,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
9933,2022-2,44,857,0.05134189031505251,41,Universidad Nacional De Colombia,Cesar,La Paz
2747,2022-2,175,3304,0.05296610169491525,42,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
1702,2022-2,337,6339,0.05316295945732766,43,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1106,2022-2,1099,20603,0.05334174634761928,44,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1204,2022-2,1075,20059,0.05359190388354355,45,Universidad Industrial De Santander,Santander,Bucaramanga
2701,2022-2,80,1483,0.05394470667565745,46,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
2746,2022-2,69,1277,0.05403288958496476,47,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
2709,2022-2,273,5044,0.05412371134020619,48,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1209,2022-2,950,17405,0.05458201666187877,49,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2811,2022-2,226,4115,0.05492102065613609,50,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1720,2022-2,317,5757,0.0550634010769498,51,Universidad Mariana,Nariño,Pasto
2840,2022-2,69,1249,0.05524419535628503,52,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
1832,2022-2,270,4842,0.05576208178438662,53,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1223,2022-2,14,251,0.05577689243027888,54,Universidad De Antioquia,Antioquia,Turbo
1835,2022-2,243,4301,0.05649848872355266,55,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
2743,2022-2,114,2008,0.05677290836653386,56,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
9103,2022-2,27,474,0.05696202531645569,57,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
2825,2022-2,268,4662,0.05748605748605749,58,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
1716,2022-2,203,3515,0.0577524893314367,59,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1121,2022-2,366,6140,0.05960912052117264,60,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1103,2022-2,284,4743,0.05987771452667089,61,Universidad Nacional De Colombia,Caldas,Manizales
9122,2022-2,34,567,0.05996472663139329,62,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
2712,2022-2,178,2938,0.0605854322668482,63,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1734,2022-2,264,4348,0.06071757129714812,64,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1708,2022-2,11,173,0.06358381502890173,65,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1833,2022-2,542,8479,0.06392263238589456,66,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1216,2022-2,36,562,0.06405693950177936,67,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1709,2022-2,464,7185,0.06457898399443285,68,Universidad Central,Cundinamarca,"Bogotá, D.C."
1715,2022-2,153,2301,0.06649282920469361,69,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1212,2022-2,1541,23090,0.06673884798614119,70,Universidad De Pamplona,Norte de Santander,Pamplona
1206,2022-2,947,14158,0.06688797852804068,71,Universidad De Nariño,Nariño,Pasto
1834,2022-2,339,5044,0.06720856463124504,72,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1829,2022-2,121,1798,0.06729699666295884,73,Universidad Santiago De Cali,Valle del Cauca,Palmira
4837,2022-2,47,693,0.06782106782106782,74,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
2719,2022-2,943,13741,0.06862673750090968,75,Universidad Católica Luis Amigó,Antioquia,Medellín
1826,2022-2,878,12714,0.06905773163441875,76,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
9900,2022-2,46,666,0.06906906906906907,77,Corporacion Universitaria U De Colombia,Antioquia,Medellín
1729,2022-2,723,10357,0.0698078594187506,78,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1102,2022-2,837,11964,0.06995987963891676,79,Universidad Nacional De Colombia,Antioquia,Medellín
1205,2022-2,609,8704,0.06996783088235294,80,Universidad De Cartagena,Bolívar,Cartagena de Indias
1214,2022-2,753,10758,0.06999442275515895,81,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
2720,2022-2,201,2865,0.07015706806282722,82,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
2721,2022-2,250,3556,0.0703037120359955,83,Fundacion Universitaria Maria Cano,Antioquia,Medellín
1805,2022-2,1083,15382,0.07040696918476141,84,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2813,2022-2,132,1852,0.07127429805615551,85,Universidad Eia,Antioquia,Envigado
1830,2022-2,493,6879,0.07166739351649949,86,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1815,2022-2,255,3558,0.07166947723440135,87,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
2832,2022-2,661,9208,0.07178540399652476,88,Universidad De Santander - Udes,Santander,Bucaramanga
1707,2022-2,391,5428,0.07203389830508475,89,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2812,2022-2,521,7186,0.0725020873921514,90,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1104,2022-2,200,2734,0.07315288953913679,91,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1119,2022-2,452,6141,0.07360364761439504,92,Universidad De Los Llanos,Meta,Villavicencio
1730,2022-2,24,326,0.0736196319018405,93,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1115,2022-2,630,8557,0.07362393362159636,94,Universidad De La Amazonia,Caquetá,Florencia
1215,2022-2,137,1850,0.07405405405405406,95,Universidad De Cundinamarca,Cundinamarca,Girardot
1117,2022-2,1145,15334,0.07467066649276119,96,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1105,2022-2,649,8589,0.07556176504831762,97,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
3104,2022-2,180,2346,0.07672634271099744,98,Colegio Mayor Del Cauca,Cauca,Popayán
3834,2022-2,3,39,0.07692307692307693,99,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
2301,2022-2,356,4628,0.07692307692307693,100,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
1807,2022-2,328,4263,0.07694112127609665,101,Universidad Libre,Valle del Cauca,Santiago de Cali
9906,2022-2,13,168,0.07738095238095238,102,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
2810,2022-2,824,10646,0.0773999624272027,103,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
2206,2022-2,59,759,0.077733860342556,104,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
1812,2022-2,518,6634,0.07808260476334036,105,Universidad De Medellin,Antioquia,Medellín
1831,2022-2,368,4656,0.07903780068728522,106,Universidad De Ibague,Tolima,Ibagué
4709,2022-2,76,957,0.0794148380355277,107,Institucion Universitaria Eam,Quindío,Armenia
1120,2022-2,1050,13200,0.07954545454545454,108,Universidad Popular Del Cesar,Cesar,Valledupar
1732,2022-2,265,3315,0.07993966817496229,109,Universidad Santo Tomas,Boyacá,Tunja
1114,2022-2,1032,12894,0.08003722661703118,110,Universidad Surcolombiana,Huila,Neiva
9928,2022-2,11,137,0.08029197080291971,111,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
2737,2022-2,359,4452,0.08063791554357592,112,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
1219,2022-2,19,235,0.08085106382978724,113,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1203,2022-2,2352,29075,0.08089423903697335,114,Universidad Del Valle,Valle del Cauca,Santiago de Cali
4835,2022-2,48,591,0.08121827411167512,115,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
1817,2022-2,253,3110,0.08135048231511254,116,Universidad Cooperativa De Colombia,Santander,Bucaramanga
2842,2022-2,208,2545,0.08172888015717092,117,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
3301,2022-2,914,11105,0.08230526789734353,118,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
1728,2022-2,590,7126,0.08279539713724389,119,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1726,2022-2,333,4019,0.08285643194824584,120,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2744,2022-2,469,5634,0.08324458643947462,121,Universidad Cesmag - Unicesmag,Nariño,Pasto
2741,2022-2,46,552,0.08333333333333333,122,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
2715,2022-2,502,5975,0.08401673640167363,123,Fundacion Universitaria De Popayan,Cauca,Popayán
2820,2022-2,135,1606,0.08405977584059776,124,Corporacion Universitaria Lasallista,Antioquia,Caldas
1208,2022-2,1228,14495,0.08471886857537082,125,Universidad Del Quindio,Quindío,Armenia
1808,2022-2,415,4880,0.08504098360655737,126,Universidad Libre,Atlántico,Barranquilla
2724,2022-2,228,2679,0.0851063829787234,127,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
1201,2022-2,2347,27524,0.08527103618660078,128,Universidad De Antioquia,Antioquia,Medellín
1706,2022-2,436,5110,0.0853228962818004,129,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
2815,2022-2,109,1269,0.08589440504334121,130,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
3103,2022-2,259,3009,0.08607510800930541,131,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
1109,2022-2,71,824,0.08616504854368932,132,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1718,2022-2,183,2121,0.08628005657708628,133,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
2829,2022-2,6812,78886,0.08635245797733439,134,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
3821,2022-2,193,2214,0.08717253839205058,135,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
2905,2022-2,26,296,0.08783783783783784,136,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
1823,2022-2,717,8137,0.08811601327270493,137,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
9107,2022-2,49,555,0.08828828828828829,138,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
2711,2022-2,196,2219,0.08832807570977919,139,Universidad Catolica De Pereira,Risaralda,Pereira
1723,2022-2,322,3642,0.08841295991213619,140,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1704,2022-2,1284,14467,0.08875371535218082,141,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1733,2022-2,177,1977,0.08952959028831563,142,Universidad Sergio Arboleda,Magdalena,Santa Marta
1816,2022-2,362,4038,0.08964834076275384,143,Universidad Cooperativa De Colombia,Antioquia,Medellín
1803,2022-2,701,7781,0.09009124791157948,144,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
3705,2022-2,596,6611,0.09015277567690214,145,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
1717,2022-2,298,3272,0.0910757946210269,146,Universidad De San Buenaventura,Antioquia,Medellín
1111,2022-2,1402,15216,0.09213985278654048,147,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
2209,2022-2,1080,11606,0.09305531621575049,148,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
3901,2022-2,26,278,0.09352517985611512,149,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
1825,2022-2,342,3654,0.09359605911330048,150,Universidad Autonoma De Manizales,Caldas,Manizales
2850,2022-2,430,4532,0.09488084730803176,151,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
9907,2022-2,205,2158,0.09499536607970342,152,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
1218,2022-2,1314,13823,0.09505895970483975,153,Universidad De La Guajira,La Guajira,Riohacha
1719,2022-2,680,7152,0.09507829977628636,154,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1814,2022-2,309,3249,0.0951061865189289,155,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2823,2022-2,841,8830,0.09524348810872028,156,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
2211,2022-2,132,1383,0.09544468546637744,157,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
1827,2022-2,174,1823,0.09544706527701592,158,Universidad Catolica De Manizales,Caldas,Manizales
3703,2022-2,117,1225,0.09551020408163265,159,Institucion Universitaria Escolme,Antioquia,Medellín
2833,2022-2,1647,17234,0.09556690263432747,160,Corporacion Universitaria Remington,Antioquia,Medellín
2302,2022-2,438,4522,0.09685979655019902,161,Institucion Universitaria De Envigado,Antioquia,Envigado
1722,2022-2,528,5434,0.097165991902834,162,Universidad De Manizales,Caldas,Manizales
9124,2022-2,7,72,0.09722222222222222,163,Tecnologico Coredi,Antioquia,Marinilla
1818,2022-2,2257,23007,0.09810057808493068,164,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
3117,2022-2,402,4082,0.0984811366976972,165,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
3718,2022-2,113,1142,0.0989492119089317,166,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
4810,2022-2,92,926,0.09935205183585312,167,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
9117,2022-2,2,20,0.1,168,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
2818,2022-2,105,1045,0.1004784688995215,169,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
5802,2022-2,1532,15185,0.100889035232137,170,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1804,2022-2,536,5257,0.1019592923720753,171,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1123,2022-2,262,2568,0.1020249221183801,172,Universidad Popular Del Cesar,Cesar,Aguachica
9127,2022-2,88,858,0.1025641025641026,173,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
3702,2022-2,32,310,0.1032258064516129,174,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
9116,2022-2,330,3193,0.1033510804885687,175,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
2713,2022-2,535,5172,0.1034416086620263,176,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
2745,2022-2,737,7116,0.1035694210230467,177,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
4110,2022-2,420,4040,0.103960396039604,178,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
2849,2022-2,199,1914,0.1039707419017764,179,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
2841,2022-2,215,2067,0.1040154813739719,180,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
2847,2022-2,604,5769,0.1046975212341827,181,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1809,2022-2,300,2836,0.1057827926657264,182,Universidad Libre,Risaralda,Pereira
9922,2022-2,115,1082,0.1062846580406654,183,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
2208,2022-2,48,451,0.106430155210643,184,Conservatorio Del Tolima,Tolima,Ibagué
1735,2022-2,565,5297,0.1066641495185954,185,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
3720,2022-2,145,1338,0.1083707025411061,186,Fundacion Universitaria Esumer,Antioquia,Medellín
2828,2022-2,311,2861,0.1087032506116742,187,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
1710,2022-2,1181,10814,0.1092102829665249,188,Universidad Pontificia Bolivariana,Antioquia,Medellín
1112,2022-2,1293,11751,0.1100331886647945,189,Universidad De Caldas,Caldas,Manizales
1822,2022-2,96,868,0.1105990783410138,190,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1122,2022-2,283,2532,0.1117693522906793,191,Universidad Del Pacifico,Valle del Cauca,Buenaventura
2110,2022-2,603,5392,0.1118323442136498,192,Colegio Mayor De Antioquia,Antioquia,Medellín
2725,2022-2,5107,45172,0.11305676082529,193,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
2834,2022-2,640,5653,0.1132142225367062,194,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
2710,2022-2,166,1465,0.1133105802047782,195,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
2102,2022-2,11466,101139,0.1133687301634384,196,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1802,2022-2,210,1835,0.114441416893733,197,Universidad La Gran Colombia,Quindío,Armenia
3204,2022-2,1506,13108,0.114891669209643,198,Tecnologico De Antioquia,Antioquia,Medellín
3302,2022-2,2729,23590,0.1156846121237813,199,Institucion Universitaria - Itm,Antioquia,Medellín
3725,2022-2,25,216,0.1157407407407407,200,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
9125,2022-2,8,69,0.1159420289855072,201,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
2748,2022-2,29,249,0.1164658634538153,202,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
3808,2022-2,26,223,0.1165919282511211,203,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
3817,2022-2,460,3937,0.1168402336804674,204,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
1801,2022-2,901,7646,0.1178393931467434,205,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
3706,2022-2,235,1994,0.1178535606820461,206,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
2736,2022-2,22,185,0.1189189189189189,207,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
9121,2022-2,258,2154,0.1197771587743733,208,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
2723,2022-2,323,2688,0.1201636904761905,209,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1221,2022-2,23,191,0.1204188481675393,210,Universidad De Antioquia,Antioquia,Caucasia
4108,2022-2,365,3017,0.1209811070599934,211,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
3801,2022-2,50,410,0.1219512195121951,212,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
3831,2022-2,298,2436,0.1223316912972085,213,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
1806,2022-2,771,6271,0.1229468984213044,214,Universidad Libre,Cundinamarca,"Bogotá, D.C."
4101,2022-2,382,3103,0.1231066709635836,215,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
2837,2022-2,525,4246,0.1236457842675459,216,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
2731,2022-2,420,3392,0.1238207547169811,217,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
1118,2022-2,1607,12884,0.1247283452343993,218,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1207,2022-2,2869,22755,0.1260821797407163,219,Universidad Del Tolima,Tolima,Ibagué
4822,2022-2,166,1303,0.1273983115886416,220,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
3201,2022-2,2766,21571,0.1282277131333735,221,Unidades Tecnologicas De Santander,Santander,Bucaramanga
2207,2022-2,502,3883,0.1292814833891321,222,Instituto Universitario De La Paz,Santander,Barrancabermeja
2848,2022-2,337,2584,0.1304179566563468,223,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
9131,2022-2,135,1033,0.1306873184898354,224,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
4818,2022-2,578,4367,0.1323563086787268,225,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
9129,2022-2,194,1461,0.1327857631759069,226,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
9120,2022-2,79,594,0.132996632996633,227,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
9119,2022-2,1497,11233,0.1332680494970177,228,Corporacion Universitaria Americana,Atlántico,Barranquilla
3107,2022-2,946,7076,0.1336913510457886,229,Institución Universitaria Pascual Bravo,Antioquia,Medellín
2827,2022-2,320,2374,0.134793597304128,230,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
1810,2022-2,193,1431,0.1348707197763802,231,Universidad Libre,Norte de Santander,San José de Cúcuta
2830,2022-2,1586,11745,0.1350361856108983,232,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
3115,2022-2,346,2547,0.1358460934432666,233,Institución Universitaria Del Putumayo,Putumayo,Mocoa
3713,2022-2,283,2069,0.1367810536491058,234,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
3803,2022-2,87,635,0.137007874015748,235,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
1220,2022-2,28,204,0.1372549019607843,236,Universidad De Antioquia,Antioquia,Andes
1705,2022-2,678,4936,0.1373581847649919,237,Universidad Santo Tomas,Santander,Bucaramanga
4825,2022-2,130,944,0.1377118644067797,238,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
2749,2022-2,375,2713,0.1382233689642462,239,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
9929,2022-2,101,730,0.1383561643835616,240,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
2732,2022-2,528,3764,0.1402763018065887,241,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
2738,2022-2,102,727,0.140302613480055,242,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
2727,2022-2,618,4281,0.1443587946741416,243,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
2733,2022-2,21,144,0.1458333333333333,244,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
2901,2022-2,13,89,0.1460674157303371,245,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
9935,2022-2,6,41,0.1463414634146341,246,Unidad Tecnológica Del Magdalena Medio - Utem -,Santander,Barrancabermeja
3806,2022-2,31,207,0.1497584541062802,247,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
4112,2022-2,89,590,0.1508474576271187,248,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
3303,2022-2,138,914,0.1509846827133479,249,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
3820,2022-2,20,130,0.1538461538461539,250,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
3811,2022-2,36,234,0.1538461538461539,251,Corporacion De Educacion Del Norte Del Tolima - Coreducacion,Tolima,Honda
1819,2022-2,85,546,0.1556776556776557,252,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2831,2022-2,376,2415,0.1556935817805383,253,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
2740,2022-2,22,141,0.1560283687943262,254,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
3812,2022-2,115,737,0.1560379918588874,255,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
4726,2022-2,699,4440,0.1574324324324324,256,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
9903,2022-2,61,387,0.1576227390180878,257,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
2104,2022-2,2708,17149,0.1579100822205377,258,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
3719,2022-2,74,468,0.1581196581196581,259,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
4721,2022-2,116,733,0.1582537517053206,260,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
1725,2022-2,200,1253,0.1596169193934557,261,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
3819,2022-2,126,782,0.1611253196930946,262,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
3809,2022-2,17,105,0.1619047619047619,263,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
2739,2022-2,47,287,0.1637630662020906,264,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
2836,2022-2,67,407,0.1646191646191646,265,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
1811,2022-2,147,878,0.1674259681093394,266,Universidad Libre,Santander,Socorro
9128,2022-2,126,742,0.169811320754717,267,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
4808,2022-2,8,47,0.1702127659574468,268,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
9902,2022-2,47,274,0.1715328467153285,269,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
3710,2022-2,337,1957,0.1722023505365355,270,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
2728,2022-2,4211,23737,0.1774023676117454,271,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
9905,2022-2,149,832,0.1790865384615385,272,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
4817,2022-2,166,924,0.1796536796536796,273,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
5801,2022-2,105,584,0.1797945205479452,274,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
4701,2022-2,258,1400,0.1842857142857143,275,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
3715,2022-2,143,752,0.1901595744680851,276,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
3102,2022-2,280,1471,0.1903467029231815,277,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
1703,2022-2,130,661,0.1966717095310136,278,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9936,2022-2,7,35,0.2,279,Corporación Universitaria Autónoma Del Norte,Norte de Santander,San José de Cúcuta
9105,2022-2,191,943,0.2025450689289502,280,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
2902,2022-2,27,133,0.2030075187969925,281,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
9110,2022-2,85783,400656,0.2141063655604808,282,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
9927,2022-2,1092,4941,0.2210078931390407,283,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
9126,2022-2,64,282,0.2269503546099291,284,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
4801,2022-2,58,252,0.2301587301587301,285,Corporacion Academia Superior De Artes,Antioquia,Medellín
4107,2022-2,131,561,0.2335115864527629,286,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
4806,2022-2,8,34,0.2352941176470588,287,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
9914,2022-2,77,327,0.2354740061162079,288,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
4111,2022-2,529,2198,0.240673339399454,289,Institución Universitaria Del Caribe,Magdalena,Ciénaga
9913,2022-2,997,4139,0.2408794394781348,290,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
9932,2022-2,1,4,0.25,291,Fundación Universitaria San Pablo - Unisanpablo,Cundinamarca,"Bogotá, D.C."
9904,2022-2,325,1255,0.2589641434262948,292,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
9926,2022-2,612,2350,0.2604255319148936,293,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
4727,2022-2,1215,4649,0.2613465261346526,294,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
4813,2022-2,9088,34363,0.2644705060675727,295,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
4719,2022-2,35,123,0.2845528455284553,296,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
3826,2022-2,306,1048,0.2919847328244275,297,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
4102,2022-2,303,890,0.3404494382022472,298,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
4803,2022-2,15,44,0.3409090909090909,299,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
4109,2022-2,625,1801,0.3470294280955025,300,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
2824,2022-2,24,69,0.3478260869565217,301,Corporacion Universitaria De Colombia Ideas,Cundinamarca,"Bogotá, D.C."
4829,2022-2,167,479,0.348643006263048,302,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
4106,2022-2,211,573,0.3682373472949389,303,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
3716,2022-2,139,358,0.388268156424581,304,Tecnologica Fitec,Santander,Bucaramanga
4714,2022-2,35,90,0.3888888888888889,305,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
4832,2022-2,79,195,0.4051282051282051,306,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
9924,2022-2,22,46,0.4782608695652174,307,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
4710,2022-2,1,2,0.5,308,Fundación Politécnico Minuto De Dios - Tec Md,Cundinamarca,"Bogotá, D.C."
3114,2022-2,138,254,0.5433070866141733,309,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
4702,2022-2,3258,3959,0.8229350846173276,310,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
3807,2022-2,76,76,1.0,311,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
9899,2022-2,1,1,1.0,312,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
4808,2022-1,0,13,0.0,1,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
4710,2022-1,0,2,0.0,2,Fundación Politécnico Minuto De Dios - Tec Md,Cundinamarca,"Bogotá, D.C."
9923,2022-1,0,29,0.0,3,Corporacion Universitaria De Cataluña,Cundinamarca,"Bogotá, D.C."
9110,2022-1,2887,328637,0.008784768604874071,4,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
3901,2022-1,4,309,0.01294498381877023,5,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
1824,2022-1,66,4158,0.01587301587301587,6,Universidad Metropolitana,Atlántico,Barranquilla
1711,2022-1,158,9703,0.01628362362156034,7,Universidad De La Sabana,Cundinamarca,Chía
2707,2022-1,32,1873,0.01708489054991991,8,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
2106,2022-1,190,10569,0.01797710284795156,9,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
2905,2022-1,5,273,0.01831501831501832,10,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
9103,2022-1,9,485,0.01855670103092784,11,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
2702,2022-1,57,2581,0.02208446338628439,12,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
9928,2022-1,2,77,0.02597402597402598,13,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
1713,2022-1,318,12215,0.02603356528857962,14,Universidad Del Norte,Atlántico,Barranquilla
9921,2022-1,4,150,0.02666666666666667,15,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
9104,2022-1,47,1753,0.02681118083285796,16,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
1813,2022-1,392,13055,0.03002680965147453,17,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,2022-1,161,5328,0.03021771771771772,18,Universidad Icesi,Valle del Cauca,Santiago de Cali
2708,2022-1,142,4667,0.0304263981144204,19,Universidad Ces,Antioquia,Medellín
1210,2022-1,184,5956,0.03089321692411014,20,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1730,2022-1,10,319,0.03134796238244514,21,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1209,2022-1,556,17176,0.03237074988355845,22,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1108,2022-1,114,3477,0.03278688524590164,23,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
3902,2022-1,77,2245,0.03429844097995546,24,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
1714,2022-1,310,8877,0.03492170778416132,25,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1727,2022-1,109,3066,0.03555120678408349,26,Universidad Pontificia Bolivariana,Córdoba,Montería
2704,2022-1,39,1078,0.03617810760667903,27,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
2730,2022-1,29,772,0.03756476683937824,28,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
9125,2022-1,2,52,0.03846153846153846,29,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1121,2022-1,219,5622,0.03895410885805763,30,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1701,2022-1,651,16702,0.03897736797988265,31,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1215,2022-1,73,1867,0.03910016068559186,32,Universidad De Cundinamarca,Cundinamarca,Girardot
1212,2022-1,981,23357,0.04200025688230509,33,Universidad De Pamplona,Norte de Santander,Pamplona
1712,2022-1,352,8331,0.04225183051254351,34,Universidad Eafit-,Antioquia,Medellín
1204,2022-1,852,19923,0.0427646438789339,35,Universidad Industrial De Santander,Santander,Bucaramanga
1101,2022-1,1161,27086,0.0428634719043048,36,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2811,2022-1,187,4316,0.04332715477293791,37,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
9933,2022-1,32,728,0.04395604395604396,38,Universidad Nacional De Colombia,Cesar,La Paz
2114,2022-1,153,3451,0.04433497536945813,39,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
2805,2022-1,679,15091,0.04499370485719965,40,Universidad Simon Bolivar,Atlántico,Barranquilla
1118,2022-1,551,12199,0.04516763669153209,41,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2746,2022-1,59,1288,0.04580745341614907,42,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
1702,2022-1,305,6525,0.04674329501915709,43,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
3104,2022-1,102,2182,0.04674610449129239,44,Colegio Mayor Del Cauca,Cauca,Popayán
1217,2022-1,282,5974,0.04720455306327419,45,Universidad De Sucre,Sucre,Sincelejo
1808,2022-1,233,4934,0.0472233481961897,46,Universidad Libre,Atlántico,Barranquilla
1113,2022-1,784,16541,0.04739737621667372,47,Universidad De Cordoba,Córdoba,Montería
2825,2022-1,228,4747,0.04803033494838846,48,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
2709,2022-1,219,4552,0.04811072056239016,49,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
2701,2022-1,76,1544,0.04922279792746114,50,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
1107,2022-1,149,3012,0.04946879150066401,51,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1724,2022-1,175,3529,0.04958911873051856,52,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
2736,2022-1,9,181,0.04972375690607735,53,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
9122,2022-1,31,615,0.05040650406504065,54,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1213,2022-1,1165,22782,0.05113686243525591,55,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
2840,2022-1,63,1229,0.05126118795768918,56,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
1827,2022-1,104,1939,0.05363589479112945,57,Universidad Catolica De Manizales,Caldas,Manizales
1715,2022-1,141,2600,0.05423076923076923,58,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
9907,2022-1,113,2075,0.05445783132530121,59,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
9105,2022-1,51,930,0.05483870967741936,60,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1104,2022-1,156,2812,0.05547652916073969,61,Universidad Nacional De Colombia,Valle del Cauca,Palmira
3103,2022-1,140,2517,0.05562177195073501,62,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
1206,2022-1,801,14335,0.05587722357865364,63,Universidad De Nariño,Nariño,Pasto
1222,2022-1,4,71,0.05633802816901409,64,Universidad De Antioquia,Antioquia,Puerto Berrío
1106,2022-1,1185,20924,0.05663353087363793,65,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2832,2022-1,525,9267,0.05665263839430236,66,Universidad De Santander - Udes,Santander,Bucaramanga
1214,2022-1,607,10542,0.05757920698159742,67,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1834,2022-1,280,4846,0.05777961205117623,68,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1710,2022-1,642,11081,0.05793700929518997,69,Universidad Pontificia Bolivariana,Antioquia,Medellín
2301,2022-1,246,4245,0.05795053003533569,70,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
1832,2022-1,301,5063,0.0594509184278096,71,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1722,2022-1,317,5177,0.06123237396175391,72,Universidad De Manizales,Caldas,Manizales
2813,2022-1,116,1889,0.0614081524616199,73,Universidad Eia,Antioquia,Envigado
1820,2022-1,228,3706,0.06152185644900162,74,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1734,2022-1,275,4450,0.06179775280898876,75,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1105,2022-1,524,8348,0.06276952563488261,76,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1709,2022-1,496,7896,0.06281661600810537,77,Universidad Central,Cundinamarca,"Bogotá, D.C."
1103,2022-1,308,4893,0.06294706723891273,78,Universidad Nacional De Colombia,Caldas,Manizales
2719,2022-1,888,14098,0.06298765782380479,79,Universidad Católica Luis Amigó,Antioquia,Medellín
9102,2022-1,43,681,0.0631424375917768,80,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
1707,2022-1,373,5894,0.06328469630132338,81,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2815,2022-1,84,1324,0.0634441087613293,82,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
2712,2022-1,192,3024,0.06349206349206349,83,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
3301,2022-1,595,9364,0.06354122170012814,84,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
1716,2022-1,235,3698,0.06354786371011358,85,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1729,2022-1,665,10457,0.06359376494214401,86,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1205,2022-1,1184,18501,0.06399654072752824,87,Universidad De Cartagena,Bolívar,Cartagena de Indias
2721,2022-1,232,3604,0.06437291897891231,88,Fundacion Universitaria Maria Cano,Antioquia,Medellín
1809,2022-1,187,2884,0.06484049930651872,89,Universidad Libre,Risaralda,Pereira
1805,2022-1,969,14828,0.06534933908821149,90,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2720,2022-1,194,2966,0.06540795684423466,91,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
1732,2022-1,214,3256,0.06572481572481573,92,Universidad Santo Tomas,Boyacá,Tunja
1706,2022-1,362,5444,0.06649522409992653,93,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
9900,2022-1,47,698,0.0673352435530086,94,Corporacion Universitaria U De Colombia,Antioquia,Medellín
1835,2022-1,292,4328,0.06746765249537892,95,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1203,2022-1,1465,21625,0.06774566473988439,96,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1833,2022-1,591,8581,0.06887309171425242,97,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1826,2022-1,888,12826,0.0692343676906284,98,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2208,2022-1,29,417,0.06954436450839328,99,Conservatorio Del Tolima,Tolima,Ibagué
1208,2022-1,979,14062,0.06962025316455696,100,Universidad Del Quindio,Quindío,Armenia
1110,2022-1,937,13416,0.06984197972570065,101,Universidad Del Cauca,Cauca,Popayán
1102,2022-1,856,12080,0.07086092715231788,102,Universidad Nacional De Colombia,Antioquia,Medellín
9934,2022-1,1,14,0.07142857142857142,103,Centro De Estudios Aeronáuticos - Cea,Cundinamarca,"Bogotá, D.C."
1117,2022-1,1093,15278,0.07154077758868962,104,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
4811,2022-1,12,167,0.0718562874251497,105,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
2838,2022-1,47,653,0.07197549770290965,106,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1723,2022-1,293,4036,0.07259663032705649,107,Universidad Pontificia Bolivariana,Santander,Bucaramanga
3204,2022-1,917,12625,0.07263366336633663,108,Tecnologico De Antioquia,Antioquia,Medellín
1216,2022-1,39,533,0.07317073170731707,109,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
2747,2022-1,258,3507,0.07356715141146279,110,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
2810,2022-1,823,11167,0.07369929255843109,111,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1720,2022-1,437,5927,0.0737303863674709,112,Universidad Mariana,Nariño,Pasto
1831,2022-1,376,5082,0.0739866194411649,113,Universidad De Ibague,Tolima,Ibagué
1822,2022-1,69,931,0.07411385606874328,114,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1119,2022-1,458,6167,0.07426625587806064,115,Universidad De Los Llanos,Meta,Villavicencio
1223,2022-1,19,251,0.07569721115537849,116,Universidad De Antioquia,Antioquia,Turbo
1114,2022-1,994,13116,0.07578530039646234,117,Universidad Surcolombiana,Huila,Neiva
1111,2022-1,1147,15091,0.07600556623152872,118,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1817,2022-1,242,3159,0.07660652105096549,119,Universidad Cooperativa De Colombia,Santander,Bucaramanga
2744,2022-1,445,5802,0.07669769045156842,120,Universidad Cesmag - Unicesmag,Nariño,Pasto
1812,2022-1,558,7273,0.07672212292039049,121,Universidad De Medellin,Antioquia,Medellín
1807,2022-1,335,4347,0.07706464228203358,122,Universidad Libre,Valle del Cauca,Santiago de Cali
1728,2022-1,565,7281,0.07759923087487983,123,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
2711,2022-1,187,2409,0.0776255707762557,124,Universidad Catolica De Pereira,Risaralda,Pereira
1220,2022-1,16,206,0.07766990291262135,125,Universidad De Antioquia,Antioquia,Andes
1825,2022-1,297,3818,0.07778941854374018,126,Universidad Autonoma De Manizales,Caldas,Manizales
2842,2022-1,201,2565,0.0783625730994152,127,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
1806,2022-1,504,6429,0.07839477368175456,128,Universidad Libre,Cundinamarca,"Bogotá, D.C."
4806,2022-1,2,25,0.08,129,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
1811,2022-1,73,911,0.0801317233809001,130,Universidad Libre,Santander,Socorro
1816,2022-1,337,4196,0.08031458531935176,131,Universidad Cooperativa De Colombia,Antioquia,Medellín
4835,2022-1,46,568,0.08098591549295775,132,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
2820,2022-1,135,1663,0.08117859290438965,133,Corporacion Universitaria Lasallista,Antioquia,Caldas
2715,2022-1,499,6133,0.081363117560737,134,Fundacion Universitaria De Popayan,Cauca,Popayán
1803,2022-1,669,8193,0.08165507140241669,135,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
3803,2022-1,55,671,0.08196721311475409,136,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
2724,2022-1,243,2946,0.0824847250509165,137,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
1718,2022-1,177,2135,0.08290398126463701,138,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1115,2022-1,721,8696,0.0829116835326587,139,Universidad De La Amazonia,Caquetá,Florencia
3821,2022-1,189,2268,0.08333333333333333,140,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
9930,2022-1,12,143,0.08391608391608392,141,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
1823,2022-1,726,8593,0.08448737344350052,142,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
9116,2022-1,281,3301,0.08512571947894577,143,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
2302,2022-1,357,4187,0.08526391210890853,144,Institucion Universitaria De Envigado,Antioquia,Envigado
1218,2022-1,1155,13415,0.08609765188222139,145,Universidad De La Guajira,La Guajira,Riohacha
1818,2022-1,2107,24040,0.08764559068219634,146,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
4837,2022-1,56,638,0.0877742946708464,147,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
1120,2022-1,1182,13465,0.08778314147790568,148,Universidad Popular Del Cesar,Cesar,Valledupar
2847,2022-1,515,5847,0.08807935693518043,149,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1830,2022-1,658,7447,0.08835772794413858,150,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1726,2022-1,375,4237,0.08850601840925183,151,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2812,2022-1,626,7060,0.0886685552407932,152,Universidad Ean,Cundinamarca,"Bogotá, D.C."
2206,2022-1,69,778,0.08868894601542417,153,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
1719,2022-1,672,7574,0.08872458410351201,154,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
2829,2022-1,7799,87630,0.08899920118680817,155,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
1815,2022-1,345,3874,0.08905524006195147,156,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
3703,2022-1,120,1311,0.09153318077803203,157,Institucion Universitaria Escolme,Antioquia,Medellín
1705,2022-1,461,5036,0.09154090548054011,158,Universidad Santo Tomas,Santander,Bucaramanga
2828,2022-1,278,3031,0.09171890465193006,159,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
3705,2022-1,616,6712,0.09177592371871277,160,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
2741,2022-1,55,594,0.0925925925925926,161,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
1735,2022-1,463,4982,0.09293456443195504,162,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
3834,2022-1,4,43,0.09302325581395347,163,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
9107,2022-1,56,594,0.09427609427609428,164,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
1708,2022-1,20,212,0.09433962264150944,165,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1801,2022-1,751,7919,0.0948352064654628,166,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1814,2022-1,330,3476,0.0949367088607595,167,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
3303,2022-1,72,758,0.0949868073878628,168,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
3201,2022-1,1845,19400,0.09510309278350516,169,Unidades Tecnologicas De Santander,Santander,Bucaramanga
1201,2022-1,2993,31433,0.09521840104348932,170,Universidad De Antioquia,Antioquia,Medellín
1829,2022-1,174,1805,0.096398891966759,171,Universidad Santiago De Cali,Valle del Cauca,Palmira
2743,2022-1,201,2073,0.09696092619392184,172,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
2745,2022-1,688,7091,0.0970243971231138,173,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
2710,2022-1,149,1532,0.09725848563968668,174,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
1717,2022-1,349,3581,0.09745881038815972,175,Universidad De San Buenaventura,Antioquia,Medellín
1123,2022-1,245,2512,0.09753184713375795,176,Universidad Popular Del Cesar,Cesar,Aguachica
1704,2022-1,1502,15341,0.09790756795515286,177,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1810,2022-1,144,1469,0.09802586793737236,178,Universidad Libre,Norte de Santander,San José de Cúcuta
2731,2022-1,313,3171,0.09870703248186692,179,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
2849,2022-1,202,2038,0.09911678115799805,180,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
2841,2022-1,216,2173,0.09940174873446848,181,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
2102,2022-1,9362,93637,0.09998184478357916,182,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
4709,2022-1,107,1067,0.1002811621368322,183,Institucion Universitaria Eam,Quindío,Armenia
4822,2022-1,140,1393,0.1005025125628141,184,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
4108,2022-1,282,2796,0.1008583690987124,185,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
2713,2022-1,555,5459,0.1016669719728888,186,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
1221,2022-1,26,255,0.1019607843137255,187,Universidad De Antioquia,Antioquia,Caucasia
9128,2022-1,57,548,0.104014598540146,188,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
2110,2022-1,576,5534,0.104083845319841,189,Colegio Mayor De Antioquia,Antioquia,Medellín
3718,2022-1,122,1170,0.1042735042735043,190,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
2211,2022-1,150,1434,0.104602510460251,191,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
3817,2022-1,455,4299,0.1058385671086299,192,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
1733,2022-1,217,2037,0.1065292096219931,193,Universidad Sergio Arboleda,Magdalena,Santa Marta
2207,2022-1,409,3837,0.1065936929893146,194,Instituto Universitario De La Paz,Santander,Barrancabermeja
2733,2022-1,20,187,0.106951871657754,195,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
1804,2022-1,638,5912,0.1079161028416779,196,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2823,2022-1,1003,9291,0.107953933914541,197,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
1112,2022-1,1321,12181,0.1084475823003038,198,Universidad De Caldas,Caldas,Manizales
9127,2022-1,103,940,0.1095744680851064,199,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
3831,2022-1,266,2422,0.1098265895953757,200,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
9121,2022-1,213,1929,0.1104199066874028,201,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
9922,2022-1,125,1131,0.1105216622458002,202,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
4110,2022-1,444,4014,0.1106128550074738,203,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
2727,2022-1,473,4264,0.1109287054409006,204,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
3706,2022-1,247,2213,0.1116131947582467,205,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
2833,2022-1,1986,17779,0.1117048202936048,206,Corporacion Universitaria Remington,Antioquia,Medellín
2837,2022-1,500,4468,0.1119068934646374,207,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
4810,2022-1,112,993,0.1127895266868077,208,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
2209,2022-1,1375,12148,0.1131873559433652,209,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
1207,2022-1,2454,21565,0.113795501970786,210,Universidad Del Tolima,Tolima,Ibagué
9905,2022-1,95,830,0.1144578313253012,211,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
9129,2022-1,176,1530,0.1150326797385621,212,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
2834,2022-1,686,5875,0.1167659574468085,213,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
3115,2022-1,311,2662,0.1168294515401953,214,Institución Universitaria Del Putumayo,Putumayo,Mocoa
2737,2022-1,546,4628,0.1179775280898876,215,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
5802,2022-1,1878,15900,0.1181132075471698,216,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
2725,2022-1,5718,48340,0.1182871328092677,217,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
9906,2022-1,21,177,0.1186440677966102,218,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
2738,2022-1,97,814,0.1191646191646192,219,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
3809,2022-1,15,125,0.12,220,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
4112,2022-1,76,630,0.1206349206349206,221,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
1802,2022-1,246,2039,0.1206473761647867,222,Universidad La Gran Colombia,Quindío,Armenia
3702,2022-1,32,263,0.1216730038022814,223,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
2749,2022-1,355,2854,0.1243868255080589,224,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
4818,2022-1,565,4521,0.1249723512497235,225,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
2818,2022-1,142,1135,0.1251101321585903,226,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
2848,2022-1,329,2620,0.1255725190839695,227,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
2850,2022-1,622,4927,0.1262431499898518,228,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
3302,2022-1,3013,23836,0.1264054371538849,229,Institucion Universitaria - Itm,Antioquia,Medellín
9131,2022-1,124,979,0.1266598569969357,230,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
9119,2022-1,1418,11070,0.1280939476061427,231,Corporacion Universitaria Americana,Atlántico,Barranquilla
2732,2022-1,475,3692,0.1286565547128928,232,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
1301,2022-1,2418,18755,0.1289256198347107,233,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
3720,2022-1,178,1376,0.1293604651162791,234,Fundacion Universitaria Esumer,Antioquia,Medellín
1202,2022-1,2571,19837,0.1296062912738822,235,Universidad Del Atlantico,Atlántico,Puerto Colombia
2827,2022-1,339,2612,0.1297856049004594,236,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
2902,2022-1,19,146,0.1301369863013699,237,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
9120,2022-1,81,617,0.1312803889789303,238,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
1219,2022-1,31,235,0.1319148936170213,239,Universidad De Antioquia,Antioquia,El Carmen de Viboral
5801,2022-1,82,620,0.132258064516129,240,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
2723,2022-1,385,2858,0.1347095871238628,241,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
3713,2022-1,258,1892,0.1363636363636364,242,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
3117,2022-1,633,4636,0.1365401207937877,243,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
3801,2022-1,60,436,0.1376146788990826,244,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
2740,2022-1,22,154,0.1428571428571428,245,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
2901,2022-1,17,119,0.1428571428571428,246,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
2104,2022-1,2419,16867,0.1434161380209877,247,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
2831,2022-1,352,2450,0.1436734693877551,248,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
2836,2022-1,66,455,0.1450549450549451,249,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
1725,2022-1,225,1537,0.1463890696161353,250,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
3806,2022-1,36,241,0.1493775933609958,251,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
4801,2022-1,40,264,0.1515151515151515,252,Corporacion Academia Superior De Artes,Antioquia,Medellín
2830,2022-1,1825,11901,0.1533484581127636,253,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
2739,2022-1,48,313,0.1533546325878594,254,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
3719,2022-1,80,518,0.1544401544401544,255,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
1819,2022-1,100,642,0.1557632398753894,256,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
3808,2022-1,41,260,0.1576923076923077,257,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
3102,2022-1,241,1514,0.1591809775429326,258,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
2748,2022-1,44,269,0.1635687732342007,259,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
3819,2022-1,134,814,0.1646191646191646,260,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
3811,2022-1,45,273,0.1648351648351648,261,Corporacion De Educacion Del Norte Del Tolima - Coreducacion,Tolima,Honda
4825,2022-1,172,1033,0.1665053242981607,262,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
9929,2022-1,95,567,0.1675485008818342,263,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
3107,2022-1,1238,7385,0.1676371022342586,264,Institución Universitaria Pascual Bravo,Antioquia,Medellín
1109,2022-1,164,967,0.1695966907962771,265,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
4109,2022-1,187,1098,0.1703096539162113,266,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
3820,2022-1,21,121,0.1735537190082645,267,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
4101,2022-1,587,3342,0.1756433273488929,268,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
1703,2022-1,136,756,0.1798941798941799,269,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
4111,2022-1,322,1788,0.180089485458613,270,Institución Universitaria Del Caribe,Magdalena,Ciénaga
3826,2022-1,169,936,0.1805555555555556,271,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
3725,2022-1,49,267,0.1835205992509363,272,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
1122,2022-1,528,2824,0.1869688385269122,273,Universidad Del Pacifico,Valle del Cauca,Buenaventura
2728,2022-1,5081,26216,0.1938129386634116,274,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
4701,2022-1,293,1501,0.1952031978680879,275,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
4721,2022-1,196,992,0.1975806451612903,276,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
9927,2022-1,731,3666,0.1993998908892526,277,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
9935,2022-1,6,30,0.2,278,Unidad Tecnológica Del Magdalena Medio - Utem -,Santander,Barrancabermeja
9902,2022-1,60,294,0.2040816326530612,279,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
4726,2022-1,933,4499,0.2073794176483663,280,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
4102,2022-1,203,939,0.2161874334398296,281,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
9126,2022-1,62,284,0.2183098591549296,282,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
4107,2022-1,130,594,0.2188552188552189,283,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
3710,2022-1,430,1944,0.2211934156378601,284,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
4719,2022-1,30,134,0.2238805970149254,285,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
3716,2022-1,74,330,0.2242424242424242,286,Tecnologica Fitec,Santander,Bucaramanga
3812,2022-1,174,756,0.2301587301587301,287,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
9914,2022-1,69,295,0.2338983050847458,288,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
4817,2022-1,117,497,0.2354124748490946,289,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
9903,2022-1,30,126,0.2380952380952381,290,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
4813,2022-1,7263,30272,0.2399246828752643,291,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
3715,2022-1,216,900,0.24,292,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
9124,2022-1,27,110,0.2454545454545455,293,Tecnologico Coredi,Antioquia,Marinilla
9904,2022-1,356,1448,0.2458563535911602,294,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
4803,2022-1,4,16,0.25,295,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
2824,2022-1,21,84,0.25,296,Corporacion Universitaria De Colombia Ideas,Cundinamarca,"Bogotá, D.C."
9926,2022-1,475,1845,0.2574525745257453,297,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
3828,2022-1,5,19,0.2631578947368421,298,Corporación Tecnológica De Educación Superior Sapienza - Cte,Cundinamarca,"Bogotá, D.C."
9915,2022-1,268,991,0.2704339051463169,299,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
4727,2022-1,1500,5301,0.2829654782116582,300,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
4826,2022-1,60,204,0.2941176470588235,301,Corporacion Universitaria Regional Del Caribe -Iafic-,Bolívar,Cartagena de Indias
9913,2022-1,1489,4879,0.3051854888296782,302,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
3830,2022-1,30,94,0.3191489361702128,303,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
4829,2022-1,197,555,0.3549549549549549,304,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
9924,2022-1,16,43,0.3720930232558139,305,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
4106,2022-1,354,892,0.3968609865470852,306,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
4832,2022-1,180,442,0.4072398190045249,307,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
9117,2022-1,8,19,0.4210526315789473,308,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
4714,2022-1,33,78,0.4230769230769231,309,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
9936,2022-1,3,7,0.4285714285714285,310,Corporación Universitaria Autónoma Del Norte,Norte de Santander,San José de Cúcuta
3114,2022-1,225,524,0.4293893129770993,311,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
3822,2022-1,19,34,0.5588235294117647,312,Politecnico Icaft,Cundinamarca,"Bogotá, D.C."
9932,2022-1,2,3,0.6666666666666666,313,Fundación Universitaria San Pablo - Unisanpablo,Cundinamarca,"Bogotá, D.C."
4702,2022-1,1349,1985,0.6795969773299748,314,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
9899,2022-1,943,1045,0.9023923444976076,315,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
9931,2022-1,34,34,1.0,316,Fundación Universitaria Patricio Symes,Cundinamarca,"Bogotá, D.C."
3807,2022-1,57,57,1.0,317,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
3828,2021-2,0,2,0.0,1,Corporación Tecnológica De Educación Superior Sapienza - Cte,Cundinamarca,"Bogotá, D.C."
9923,2021-2,0,9,0.0,2,Corporacion Universitaria De Cataluña,Cundinamarca,"Bogotá, D.C."
9104,2021-2,8,1565,0.005111821086261981,3,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
9102,2021-2,3,552,0.005434782608695652,4,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
3901,2021-2,2,344,0.005813953488372093,5,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
9103,2021-2,3,400,0.0075,6,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
3114,2021-2,5,399,0.012531328320802,7,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
1824,2021-2,53,3824,0.01385983263598326,8,Universidad Metropolitana,Atlántico,Barranquilla
3902,2021-2,33,2198,0.01501364877161055,9,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
2707,2021-2,34,1832,0.0185589519650655,10,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
4811,2021-2,3,152,0.01973684210526316,11,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
1101,2021-2,519,25295,0.02051788891085195,12,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2704,2021-2,23,1095,0.02100456621004566,13,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1210,2021-2,128,5883,0.02175760666326704,14,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
9930,2021-2,3,132,0.02272727272727273,15,Institución Universitaria Comando De Educación Y Doctrina - Cedoc Del Ejército Nacional,Cundinamarca,"Bogotá, D.C."
1828,2021-2,131,5493,0.02384853449845258,16,Universidad Icesi,Valle del Cauca,Santiago de Cali
2106,2021-2,95,3924,0.02420998980632008,17,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
1813,2021-2,317,12973,0.02443536575965467,18,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1209,2021-2,437,16891,0.02587176602924635,19,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2702,2021-2,62,2376,0.02609427609427609,20,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1103,2021-2,122,4671,0.02611860415328623,21,Universidad Nacional De Colombia,Caldas,Manizales
1222,2021-2,2,74,0.02702702702702703,22,Universidad De Antioquia,Antioquia,Puerto Berrío
2708,2021-2,126,4548,0.02770448548812665,23,Universidad Ces,Antioquia,Medellín
9933,2021-2,16,551,0.02903811252268602,24,Universidad Nacional De Colombia,Cesar,La Paz
1713,2021-2,356,11863,0.03000927252802832,25,Universidad Del Norte,Atlántico,Barranquilla
9921,2021-2,4,132,0.0303030303030303,26,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
1113,2021-2,500,16181,0.03090043878623076,27,Universidad De Cordoba,Córdoba,Montería
1711,2021-2,309,9783,0.03158540325053664,28,Universidad De La Sabana,Cundinamarca,Chía
2730,2021-2,21,663,0.03167420814479638,29,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
1206,2021-2,421,13269,0.03172808802471927,30,Universidad De Nariño,Nariño,Pasto
1213,2021-2,683,21062,0.03242806950906846,31,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1714,2021-2,281,8584,0.03273532152842498,32,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1204,2021-2,632,19069,0.03314279721013163,33,Universidad Industrial De Santander,Santander,Bucaramanga
1102,2021-2,378,11288,0.03348688873139617,34,Universidad Nacional De Colombia,Antioquia,Medellín
1215,2021-2,65,1933,0.03362648732540093,35,Universidad De Cundinamarca,Cundinamarca,Girardot
1220,2021-2,8,236,0.03389830508474576,36,Universidad De Antioquia,Antioquia,Andes
1217,2021-2,204,5960,0.03422818791946309,37,Universidad De Sucre,Sucre,Sincelejo
9125,2021-2,2,55,0.03636363636363636,38,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1712,2021-2,300,8189,0.03663450970814507,39,Universidad Eafit-,Antioquia,Medellín
2811,2021-2,162,4344,0.03729281767955801,40,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1108,2021-2,128,3397,0.03768030615248749,41,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1701,2021-2,620,16061,0.03860282672311811,42,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
2805,2021-2,521,13400,0.03888059701492538,43,Universidad Simon Bolivar,Atlántico,Barranquilla
9105,2021-2,38,954,0.03983228511530398,44,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
2741,2021-2,21,526,0.03992395437262358,45,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
1727,2021-2,111,2746,0.04042243262927895,46,Universidad Pontificia Bolivariana,Córdoba,Montería
2905,2021-2,10,247,0.04048582995951417,47,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
1702,2021-2,260,6396,0.04065040650406504,48,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,2021-2,113,2777,0.04069139359020526,49,Universidad Nacional De Colombia,Valle del Cauca,Palmira
9907,2021-2,83,2018,0.04112983151635283,50,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
2813,2021-2,74,1793,0.04127161182375906,51,Universidad Eia,Antioquia,Envigado
1221,2021-2,9,216,0.04166666666666666,52,Universidad De Antioquia,Antioquia,Caucasia
9899,2021-2,6,142,0.04225352112676056,53,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
1212,2021-2,1036,23918,0.04331465841625554,54,Universidad De Pamplona,Norte de Santander,Pamplona
1724,2021-2,132,3035,0.04349258649093905,55,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
2840,2021-2,50,1146,0.04363001745200698,56,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
2825,2021-2,184,4189,0.04392456433516352,57,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
2746,2021-2,57,1261,0.04520222045995242,58,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
4837,2021-2,21,462,0.04545454545454546,59,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
2114,2021-2,156,3402,0.04585537918871252,60,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
1734,2021-2,192,4163,0.04612058611578189,61,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1214,2021-2,496,10428,0.04756425009589567,62,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1710,2021-2,536,10963,0.04889172671713947,63,Universidad Pontificia Bolivariana,Antioquia,Medellín
1820,2021-2,172,3495,0.04921316165951359,64,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1121,2021-2,264,5343,0.04941044357102752,65,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
3103,2021-2,110,2210,0.04977375565610859,66,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
3301,2021-2,418,8370,0.04994026284348865,67,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
1715,2021-2,131,2617,0.05005731753916699,68,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1835,2021-2,187,3715,0.05033647375504711,69,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1223,2021-2,11,217,0.05069124423963134,70,Universidad De Antioquia,Antioquia,Turbo
2721,2021-2,171,3317,0.05155260777811276,71,Fundacion Universitaria Maria Cano,Antioquia,Medellín
1729,2021-2,522,10032,0.05203349282296651,72,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1707,2021-2,297,5707,0.05204135272472402,73,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1716,2021-2,185,3542,0.05223037831733484,74,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1107,2021-2,156,2970,0.05252525252525252,75,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2301,2021-2,208,3951,0.05264490002531005,76,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
1826,2021-2,679,12400,0.05475806451612903,77,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2711,2021-2,113,2050,0.0551219512195122,78,Universidad Catolica De Pereira,Risaralda,Pereira
1829,2021-2,92,1669,0.05512282804074296,79,Universidad Santiago De Cali,Valle del Cauca,Palmira
1216,2021-2,28,506,0.05533596837944664,80,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1832,2021-2,260,4690,0.05543710021321962,81,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1709,2021-2,427,7696,0.05548336798336798,82,Universidad Central,Cundinamarca,"Bogotá, D.C."
9900,2021-2,40,717,0.05578800557880056,83,Corporacion Universitaria U De Colombia,Antioquia,Medellín
2104,2021-2,772,13605,0.05674384417493569,84,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
2838,2021-2,35,606,0.05775577557755775,85,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1834,2021-2,239,4129,0.05788326471300557,86,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1831,2021-2,286,4925,0.05807106598984772,87,Universidad De Ibague,Tolima,Ibagué
1106,2021-2,1181,20319,0.05812293912101973,88,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1105,2021-2,489,8361,0.05848582705418012,89,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
3104,2021-2,127,2155,0.05893271461716938,90,Colegio Mayor Del Cauca,Cauca,Popayán
1805,2021-2,744,12451,0.05975423660750141,91,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1815,2021-2,224,3654,0.06130268199233716,92,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
2832,2021-2,523,8526,0.06134177809054656,93,Universidad De Santander - Udes,Santander,Bucaramanga
2701,2021-2,89,1444,0.06163434903047092,94,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
3821,2021-2,121,1958,0.06179775280898876,95,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
2211,2021-2,86,1391,0.06182602444284687,96,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
1723,2021-2,234,3783,0.06185567010309279,97,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1205,2021-2,1081,17441,0.06198039103262427,98,Universidad De Cartagena,Bolívar,Cartagena de Indias
2747,2021-2,215,3424,0.06279205607476636,99,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
1118,2021-2,659,10472,0.06292971734148205,100,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2719,2021-2,911,14310,0.0636617749825297,101,Universidad Católica Luis Amigó,Antioquia,Medellín
9122,2021-2,39,607,0.0642504118616145,102,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1720,2021-2,371,5753,0.0644880931687815,103,Universidad Mariana,Nariño,Pasto
1816,2021-2,262,4021,0.06515792091519522,104,Universidad Cooperativa De Colombia,Antioquia,Medellín
2901,2021-2,7,105,0.06666666666666667,105,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
2709,2021-2,260,3896,0.06673511293634497,106,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1817,2021-2,193,2892,0.06673582295988935,107,Universidad Cooperativa De Colombia,Santander,Bucaramanga
2712,2021-2,204,3028,0.06737120211360634,108,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1115,2021-2,571,8361,0.06829326635569907,109,Universidad De La Amazonia,Caquetá,Florencia
2829,2021-2,5637,82444,0.06837368395516957,110,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
3808,2021-2,13,190,0.06842105263157895,111,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
2828,2021-2,198,2875,0.06886956521739131,112,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
1201,2021-2,745,10683,0.06973696527192737,113,Universidad De Antioquia,Antioquia,Medellín
1117,2021-2,1032,14655,0.07041965199590583,114,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1207,2021-2,1437,20243,0.07098750185249222,115,Universidad Del Tolima,Tolima,Ibagué
1812,2021-2,530,7458,0.07106462858675248,116,Universidad De Medellin,Antioquia,Medellín
1728,2021-2,497,6987,0.0711321024760269,117,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1208,2021-2,973,13441,0.07239044713934975,118,Universidad Del Quindio,Quindío,Armenia
1109,2021-2,62,855,0.07251461988304093,119,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
2810,2021-2,751,10324,0.07274312282061217,120,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1706,2021-2,383,5205,0.07358309317963496,121,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1730,2021-2,24,324,0.07407407407407407,122,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
9922,2021-2,77,1026,0.07504873294346978,123,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
1732,2021-2,225,2986,0.0753516409912927,124,Universidad Santo Tomas,Boyacá,Tunja
1833,2021-2,601,7920,0.07588383838383839,125,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
9116,2021-2,221,2883,0.0766562608394034,126,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
1718,2021-2,165,2120,0.07783018867924528,127,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1722,2021-2,423,5430,0.07790055248618785,128,Universidad De Manizales,Caldas,Manizales
2740,2021-2,12,154,0.07792207792207792,129,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
1803,2021-2,671,8611,0.07792358611078852,130,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
2820,2021-2,110,1392,0.07902298850574713,131,Corporacion Universitaria Lasallista,Antioquia,Caldas
1804,2021-2,397,5019,0.07909942219565651,132,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
3803,2021-2,52,652,0.07975460122699386,133,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
1301,2021-2,1502,18828,0.07977480348417251,134,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1830,2021-2,619,7729,0.08008798033380773,135,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
2302,2021-2,305,3787,0.08053868497491418,136,Institucion Universitaria De Envigado,Antioquia,Envigado
2209,2021-2,969,12025,0.08058212058212058,137,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
3204,2021-2,952,11781,0.08080808080808081,138,Tecnologico De Antioquia,Antioquia,Medellín
1717,2021-2,287,3527,0.08137227105188545,139,Universidad De San Buenaventura,Antioquia,Medellín
2744,2021-2,462,5617,0.08225031155421043,140,Universidad Cesmag - Unicesmag,Nariño,Pasto
2736,2021-2,15,182,0.08241758241758242,141,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
1120,2021-2,1115,13524,0.08244602188701568,142,Universidad Popular Del Cesar,Cesar,Valledupar
2720,2021-2,227,2753,0.08245550308754086,143,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
3117,2021-2,261,3160,0.08259493670886076,144,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
1111,2021-2,1259,15210,0.08277449046679816,145,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
4835,2021-2,38,455,0.08351648351648351,146,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
2841,2021-2,168,2009,0.08362369337979095,147,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
1704,2021-2,1266,15130,0.08367481824190351,148,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1726,2021-2,345,4122,0.08369723435225619,149,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2850,2021-2,356,4243,0.08390289889229319,150,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
2842,2021-2,165,1962,0.08409785932721713,151,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
1823,2021-2,724,8606,0.08412735300952824,152,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1808,2021-2,397,4661,0.08517485518129157,153,Universidad Libre,Atlántico,Barranquilla
1818,2021-2,1983,23242,0.08531967988985457,154,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
2836,2021-2,28,325,0.08615384615384615,155,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
3201,2021-2,1457,16892,0.08625384797537296,156,Unidades Tecnologicas De Santander,Santander,Bucaramanga
1809,2021-2,250,2893,0.08641548565502938,157,Universidad Libre,Risaralda,Pereira
2724,2021-2,264,3043,0.08675649030561945,158,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
3801,2021-2,33,380,0.0868421052631579,159,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
2110,2021-2,478,5493,0.08701984343710177,160,Colegio Mayor De Antioquia,Antioquia,Medellín
2745,2021-2,591,6751,0.08754258628351355,161,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
1123,2021-2,212,2419,0.08763952046300125,162,Universidad Popular Del Cesar,Cesar,Aguachica
2713,2021-2,452,5154,0.08769887466045789,163,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
9906,2021-2,15,171,0.08771929824561403,164,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
2207,2021-2,320,3592,0.08908685968819599,165,Instituto Universitario De La Paz,Santander,Barrancabermeja
2737,2021-2,397,4445,0.08931383577052869,166,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
2833,2021-2,1421,15889,0.08943294102838442,167,Corporacion Universitaria Remington,Antioquia,Medellín
9121,2021-2,143,1593,0.08976773383553044,168,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
1203,2021-2,2597,28879,0.08992693652827315,169,Universidad Del Valle,Valle del Cauca,Santiago de Cali
4709,2021-2,96,1059,0.0906515580736544,170,Institucion Universitaria Eam,Quindío,Armenia
9107,2021-2,53,584,0.09075342465753423,171,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
9117,2021-2,1,11,0.09090909090909093,172,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
3303,2021-2,55,602,0.09136212624584718,173,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
1825,2021-2,347,3797,0.09138793784566764,174,Universidad Autonoma De Manizales,Caldas,Manizales
2847,2021-2,473,5158,0.09170221015897637,175,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2715,2021-2,545,5930,0.09190556492411468,176,Fundacion Universitaria De Popayan,Cauca,Popayán
3703,2021-2,123,1336,0.09206586826347306,177,Institucion Universitaria Escolme,Antioquia,Medellín
3706,2021-2,219,2368,0.09248310810810811,178,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
1719,2021-2,681,7345,0.09271613342409804,179,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1733,2021-2,171,1840,0.09293478260869566,180,Universidad Sergio Arboleda,Magdalena,Santa Marta
2812,2021-2,599,6443,0.0929691137668788,181,Universidad Ean,Cundinamarca,"Bogotá, D.C."
4110,2021-2,350,3757,0.09315943571998936,182,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
3817,2021-2,392,4179,0.09380234505862646,183,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
1822,2021-2,91,964,0.09439834024896264,184,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1802,2021-2,190,2006,0.094715852442672,185,Universidad La Gran Colombia,Quindío,Armenia
3705,2021-2,521,5490,0.09489981785063752,186,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
1122,2021-2,255,2687,0.09490137700037216,187,Universidad Del Pacifico,Valle del Cauca,Buenaventura
2710,2021-2,142,1496,0.09491978609625668,188,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
2206,2021-2,79,831,0.0950661853188929,189,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
2818,2021-2,97,1019,0.09519136408243375,190,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
4810,2021-2,98,1022,0.0958904109589041,191,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
1807,2021-2,438,4516,0.09698848538529672,192,Universidad Libre,Valle del Cauca,Santiago de Cali
1708,2021-2,24,247,0.097165991902834,193,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1814,2021-2,348,3544,0.0981941309255079,194,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2815,2021-2,127,1273,0.09976433621366848,195,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
2827,2021-2,239,2378,0.1005046257359125,196,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
1725,2021-2,174,1729,0.1006362058993638,197,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
3718,2021-2,99,982,0.1008146639511202,198,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
4822,2021-2,122,1208,0.1009933774834437,199,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
9127,2021-2,105,1028,0.1021400778210117,200,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
4108,2021-2,275,2678,0.10268857356236,201,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
2732,2021-2,332,3233,0.1026909990720693,202,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
9129,2021-2,147,1427,0.1030133146461107,203,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
9928,2021-2,3,29,0.103448275862069,204,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
5801,2021-2,62,598,0.1036789297658863,205,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
2749,2021-2,287,2750,0.1043636363636364,206,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
1114,2021-2,1342,12825,0.1046393762183236,207,Universidad Surcolombiana,Huila,Neiva
4106,2021-2,25,237,0.1054852320675106,208,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
9131,2021-2,69,654,0.1055045871559633,209,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
1801,2021-2,790,7483,0.1055726312976079,210,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
3302,2021-2,2404,22758,0.1056331839353195,211,Institucion Universitaria - Itm,Antioquia,Medellín
1705,2021-2,530,4981,0.1064043364786188,212,Universidad Santo Tomas,Santander,Bucaramanga
2823,2021-2,959,8952,0.1071268990169794,213,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
2834,2021-2,597,5512,0.1083091436865022,214,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
3713,2021-2,178,1632,0.1090686274509804,215,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
9905,2021-2,82,745,0.1100671140939597,216,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
3702,2021-2,25,227,0.1101321585903084,217,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
1202,2021-2,2018,18258,0.1105268923211743,218,Universidad Del Atlantico,Atlántico,Puerto Colombia
2208,2021-2,45,403,0.1116625310173697,219,Conservatorio Del Tolima,Tolima,Ibagué
1827,2021-2,239,2075,0.1151807228915663,220,Universidad Catolica De Manizales,Caldas,Manizales
9120,2021-2,67,581,0.1153184165232358,221,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
4818,2021-2,437,3769,0.1159458742371982,222,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
9119,2021-2,1161,9943,0.116765563713165,223,Corporacion Universitaria Americana,Atlántico,Barranquilla
1819,2021-2,81,682,0.1187683284457478,224,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2723,2021-2,326,2735,0.1191956124314442,225,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
9927,2021-2,325,2720,0.1194852941176471,226,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
2849,2021-2,257,2146,0.119757688723206,227,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
3806,2021-2,26,217,0.119815668202765,228,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
2743,2021-2,212,1746,0.1214203894616266,229,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
3115,2021-2,314,2551,0.1230889847118777,230,Institución Universitaria Del Putumayo,Putumayo,Mocoa
5802,2021-2,1766,14347,0.1230919355962919,231,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
3809,2021-2,14,113,0.1238938053097345,232,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
2738,2021-2,94,754,0.1246684350132626,233,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
1112,2021-2,443,3546,0.1249294980259447,234,Universidad De Caldas,Caldas,Manizales
1806,2021-2,805,6417,0.1254480286738351,235,Universidad Libre,Cundinamarca,"Bogotá, D.C."
2848,2021-2,276,2196,0.1256830601092896,236,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
4101,2021-2,303,2404,0.1260399334442596,237,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
2725,2021-2,5981,47021,0.127198485782948,238,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
3107,2021-2,902,7048,0.1279795686719637,239,Institución Universitaria Pascual Bravo,Antioquia,Medellín
3720,2021-2,179,1354,0.1322008862629247,240,Fundacion Universitaria Esumer,Antioquia,Medellín
2748,2021-2,39,287,0.1358885017421603,241,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
3831,2021-2,299,2194,0.1362807657247037,242,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
1735,2021-2,726,5310,0.1367231638418079,243,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2837,2021-2,651,4564,0.142638036809816,244,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
2739,2021-2,43,301,0.1428571428571428,245,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
2102,2021-2,11595,80234,0.1445147942268863,246,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
4112,2021-2,79,540,0.1462962962962963,247,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
3102,2021-2,214,1448,0.1477900552486188,248,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
3719,2021-2,68,456,0.1491228070175439,249,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
2831,2021-2,338,2255,0.1498891352549889,250,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
2727,2021-2,638,4254,0.1499764927127409,251,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
4721,2021-2,126,840,0.15,252,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
3820,2021-2,14,92,0.1521739130434783,253,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
2902,2021-2,20,131,0.1526717557251908,254,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
3819,2021-2,106,680,0.1558823529411765,255,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
9902,2021-2,48,296,0.1621621621621622,256,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
4801,2021-2,39,239,0.1631799163179916,257,Corporacion Academia Superior De Artes,Antioquia,Medellín
2728,2021-2,3889,23434,0.1659554493471025,258,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
2830,2021-2,1669,10041,0.1662185041330545,259,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
4825,2021-2,156,926,0.1684665226781857,260,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
2731,2021-2,599,3533,0.1695442966317577,261,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
4701,2021-2,208,1220,0.1704918032786885,262,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
1811,2021-2,162,948,0.1708860759493671,263,Universidad Libre,Santander,Socorro
3725,2021-2,38,221,0.1719457013574661,264,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
4726,2021-2,715,4151,0.1722476511683932,265,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
1810,2021-2,260,1502,0.1731025299600533,266,Universidad Libre,Norte de Santander,San José de Cúcuta
9128,2021-2,100,573,0.1745200698080279,267,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
3812,2021-2,96,546,0.1758241758241758,268,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
4109,2021-2,157,869,0.1806674338319908,269,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
4102,2021-2,110,607,0.1812191103789127,270,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
1219,2021-2,14,77,0.1818181818181818,271,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1703,2021-2,164,885,0.1853107344632768,272,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9110,2021-2,69185,371556,0.1862034255939885,273,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
3811,2021-2,48,256,0.1875,274,Corporacion De Educacion Del Norte Del Tolima - Coreducacion,Tolima,Honda
9929,2021-2,91,483,0.1884057971014493,275,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
2733,2021-2,31,164,0.1890243902439024,276,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
3710,2021-2,264,1352,0.1952662721893491,277,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
9914,2021-2,46,231,0.1991341991341991,278,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
9924,2021-2,2,10,0.2,279,Fundacion Universitaria Internacional De Colombia - Unincol,Cundinamarca,"Bogotá, D.C."
4111,2021-2,198,987,0.2006079027355623,280,Institución Universitaria Del Caribe,Magdalena,Ciénaga
4813,2021-2,5846,26790,0.2182157521463232,281,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
9904,2021-2,234,1052,0.2224334600760456,282,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
3822,2021-2,11,48,0.2291666666666667,283,Politecnico Icaft,Cundinamarca,"Bogotá, D.C."
4107,2021-2,149,617,0.2414910858995138,284,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
3826,2021-2,158,618,0.255663430420712,285,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
3715,2021-2,239,925,0.2583783783783784,286,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
4806,2021-2,5,19,0.2631578947368421,287,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
3716,2021-2,69,259,0.2664092664092664,288,Tecnologica Fitec,Santander,Bucaramanga
9126,2021-2,57,203,0.2807881773399015,289,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
4719,2021-2,55,193,0.2849740932642487,290,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
4727,2021-2,866,3033,0.2855258819650511,291,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
9124,2021-2,25,86,0.2906976744186047,292,Tecnologico Coredi,Antioquia,Marinilla
4714,2021-2,12,40,0.3,293,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
9913,2021-2,1630,5247,0.3106537068801219,294,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
9926,2021-2,343,1099,0.3121019108280255,295,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
4817,2021-2,75,235,0.3191489361702128,296,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
2824,2021-2,39,118,0.3305084745762712,297,Corporacion Universitaria De Colombia Ideas,Cundinamarca,"Bogotá, D.C."
4829,2021-2,138,405,0.3407407407407407,298,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
9903,2021-2,12,34,0.3529411764705883,299,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
3834,2021-2,31,86,0.3604651162790697,300,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
4803,2021-2,11,27,0.4074074074074074,301,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
4832,2021-2,105,253,0.4150197628458498,302,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
4702,2021-2,964,1841,0.5236284627919608,303,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
4812,2021-2,14,22,0.6363636363636364,304,Corporacion De Educacion Superior Suramerica,Cundinamarca,"Bogotá, D.C."
4808,2021-2,39,59,0.6610169491525424,305,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
9931,2021-2,29,29,1.0,306,Fundación Universitaria Patricio Symes,Cundinamarca,"Bogotá, D.C."
3807,2021-2,91,91,1.0,307,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
3830,2021-1,0,43,0.0,1,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
3902,2021-1,9,2143,0.004199720018665422,2,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
2106,2021-1,59,7996,0.007378689344672337,3,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
9921,2021-1,1,120,0.008333333333333333,4,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
1213,2021-1,216,19150,0.01127937336814621,5,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
2707,2021-1,26,1873,0.01388147357180993,6,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
9104,2021-1,30,1729,0.01735106998264893,7,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
2208,2021-1,6,327,0.01834862385321101,8,Conservatorio Del Tolima,Tolima,Ibagué
9102,2021-1,12,639,0.0187793427230047,9,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
1109,2021-1,17,843,0.02016607354685647,10,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
9933,2021-1,8,382,0.02094240837696335,11,Universidad Nacional De Colombia,Cesar,La Paz
2708,2021-1,96,4524,0.02122015915119363,12,Universidad Ces,Antioquia,Medellín
1108,2021-1,71,3344,0.02123205741626794,13,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1711,2021-1,226,10043,0.02250323608483521,14,Universidad De La Sabana,Cundinamarca,Chía
1828,2021-1,129,5598,0.02304394426580922,15,Universidad Icesi,Valle del Cauca,Santiago de Cali
2704,2021-1,23,995,0.02311557788944724,16,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1813,2021-1,311,13143,0.02366278627406224,17,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1209,2021-1,387,16091,0.02405071157790069,18,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1113,2021-1,371,15399,0.02409247353724268,19,Universidad De Cordoba,Córdoba,Montería
1210,2021-1,140,5630,0.02486678507992895,20,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1204,2021-1,461,18396,0.02505979560774081,21,Universidad Industrial De Santander,Santander,Bucaramanga
1217,2021-1,148,5789,0.02556572810502677,22,Universidad De Sucre,Sucre,Sincelejo
1215,2021-1,53,1959,0.02705461970393058,23,Universidad De Cundinamarca,Cundinamarca,Girardot
1104,2021-1,73,2664,0.0274024024024024,24,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1212,2021-1,685,23128,0.02961777931511588,25,Universidad De Pamplona,Norte de Santander,Pamplona
1101,2021-1,789,25139,0.03138549663868889,26,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
9105,2021-1,27,855,0.03157894736842105,27,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
2702,2021-1,77,2416,0.03187086092715232,28,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1713,2021-1,405,12694,0.03190483693083346,29,Universidad Del Norte,Atlántico,Barranquilla
1111,2021-1,469,14593,0.03213869663537312,30,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
2813,2021-1,61,1786,0.0341545352743561,31,Universidad Eia,Antioquia,Envigado
1712,2021-1,314,8706,0.03606708017459224,32,Universidad Eafit-,Antioquia,Medellín
1824,2021-1,160,4337,0.03689186073322573,33,Universidad Metropolitana,Atlántico,Barranquilla
1715,2021-1,101,2685,0.03761638733705773,34,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
9107,2021-1,21,554,0.03790613718411552,35,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
1107,2021-1,116,3045,0.0380952380952381,36,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1701,2021-1,655,16888,0.03878493604926575,37,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1730,2021-1,13,333,0.03903903903903904,38,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1121,2021-1,204,5167,0.03948132378556223,39,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1727,2021-1,113,2850,0.03964912280701754,40,Universidad Pontificia Bolivariana,Córdoba,Montería
1115,2021-1,315,7762,0.04058232414326204,41,Universidad De La Amazonia,Caquetá,Florencia
2701,2021-1,62,1516,0.04089709762532982,42,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
1205,2021-1,672,16271,0.04130047323458914,43,Universidad De Cartagena,Bolívar,Cartagena de Indias
2840,2021-1,48,1158,0.04145077720207254,44,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
1103,2021-1,195,4694,0.04154239454622923,45,Universidad Nacional De Colombia,Caldas,Manizales
2104,2021-1,512,12299,0.04162940076428978,46,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
2206,2021-1,31,740,0.04189189189189189,47,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
2811,2021-1,201,4784,0.04201505016722408,48,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1106,2021-1,869,20375,0.04265030674846626,49,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1214,2021-1,441,10308,0.04278230500582072,50,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
9110,2021-1,12174,284205,0.04283527735261519,51,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
1827,2021-1,93,2168,0.04289667896678967,52,Universidad Catolica De Manizales,Caldas,Manizales
1702,2021-1,283,6578,0.04302219519610824,53,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
9103,2021-1,18,417,0.04316546762589928,54,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
1105,2021-1,362,8255,0.04385221078134464,55,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2736,2021-1,7,157,0.04458598726114649,56,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
1206,2021-1,626,13336,0.04694061187762447,57,Universidad De Nariño,Nariño,Pasto
1714,2021-1,438,9238,0.04741285992639099,58,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1207,2021-1,862,17757,0.04854423607591372,59,Universidad Del Tolima,Tolima,Ibagué
3104,2021-1,103,2114,0.04872280037842952,60,Colegio Mayor Del Cauca,Cauca,Popayán
1710,2021-1,622,12075,0.05151138716356107,61,Universidad Pontificia Bolivariana,Antioquia,Medellín
1208,2021-1,687,13151,0.0522393734316782,62,Universidad Del Quindio,Quindío,Armenia
3103,2021-1,119,2221,0.05357946870778928,63,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
2746,2021-1,69,1269,0.05437352245862884,64,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
1118,2021-1,529,9605,0.05507548152004164,65,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2721,2021-1,191,3467,0.05509085664839919,66,Fundacion Universitaria Maria Cano,Antioquia,Medellín
2301,2021-1,215,3884,0.05535530381050464,67,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
2730,2021-1,40,720,0.05555555555555555,68,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
1808,2021-1,276,4962,0.05562273276904474,69,Universidad Libre,Atlántico,Barranquilla
1706,2021-1,302,5424,0.05567846607669617,70,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
2211,2021-1,77,1371,0.05616338439095551,71,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
1729,2021-1,622,10611,0.05861841485251154,72,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
4829,2021-1,22,373,0.05898123324396783,73,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
1123,2021-1,130,2197,0.05917159763313609,74,Universidad Popular Del Cesar,Cesar,Aguachica
9929,2021-1,25,419,0.05966587112171837,75,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1114,2021-1,737,12336,0.05974383916990921,76,Universidad Surcolombiana,Huila,Neiva
1216,2021-1,30,497,0.06036217303822938,77,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1829,2021-1,100,1655,0.06042296072507553,78,Universidad Santiago De Cali,Valle del Cauca,Palmira
1221,2021-1,14,225,0.06222222222222222,79,Universidad De Antioquia,Antioquia,Caucasia
2114,2021-1,213,3398,0.06268393172454385,80,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
1832,2021-1,337,5297,0.06362091750047197,81,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
2712,2021-1,204,3191,0.06392980256972736,82,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1809,2021-1,204,3091,0.06599805888062116,83,Universidad Libre,Risaralda,Pereira
1722,2021-1,364,5465,0.06660567246111619,84,Universidad De Manizales,Caldas,Manizales
1220,2021-1,18,266,0.06766917293233082,85,Universidad De Antioquia,Antioquia,Andes
1120,2021-1,889,13093,0.06789887726265943,86,Universidad Popular Del Cesar,Cesar,Valledupar
2719,2021-1,1064,15536,0.06848609680741503,87,Universidad Católica Luis Amigó,Antioquia,Medellín
2805,2021-1,1043,15137,0.06890401004161988,88,Universidad Simon Bolivar,Atlántico,Barranquilla
9125,2021-1,4,58,0.06896551724137931,89,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1110,2021-1,876,12609,0.06947418510587676,90,Universidad Del Cauca,Cauca,Popayán
1707,2021-1,491,6961,0.07053584255135756,91,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1826,2021-1,991,13992,0.07082618639222413,92,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1724,2021-1,244,3418,0.07138677589233469,93,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1723,2021-1,314,4330,0.07251732101616629,94,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1811,2021-1,73,1003,0.07278165503489531,95,Universidad Libre,Santander,Socorro
9124,2021-1,3,41,0.07317073170731707,96,Tecnologico Coredi,Antioquia,Marinilla
2110,2021-1,386,5256,0.07343987823439878,97,Colegio Mayor De Antioquia,Antioquia,Medellín
3302,2021-1,1553,20733,0.0749047412337819,98,Institucion Universitaria - Itm,Antioquia,Medellín
1718,2021-1,184,2456,0.0749185667752443,99,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1831,2021-1,411,5470,0.07513711151736746,100,Universidad De Ibague,Tolima,Ibagué
1201,2021-1,2317,30694,0.07548706587606699,101,Universidad De Antioquia,Antioquia,Medellín
1812,2021-1,601,7945,0.07564505978602895,102,Universidad De Medellin,Antioquia,Medellín
2815,2021-1,104,1371,0.07585703865791393,103,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
1816,2021-1,330,4293,0.07686932215234102,104,Universidad Cooperativa De Colombia,Antioquia,Medellín
1122,2021-1,204,2649,0.07701019252548132,105,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1728,2021-1,596,7725,0.07715210355987055,106,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
2820,2021-1,112,1449,0.07729468599033816,107,Corporacion Universitaria Lasallista,Antioquia,Caldas
1704,2021-1,1250,16151,0.07739458857036716,108,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1708,2021-1,24,309,0.07766990291262135,109,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1732,2021-1,258,3313,0.07787503773015395,110,Universidad Santo Tomas,Boyacá,Tunja
1117,2021-1,1204,15450,0.07792880258899676,111,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
2207,2021-1,280,3589,0.0780161604903873,112,Instituto Universitario De La Paz,Santander,Barrancabermeja
1203,2021-1,1148,14668,0.07826561221707118,113,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1720,2021-1,502,6347,0.07909248463841184,114,Universidad Mariana,Nariño,Pasto
1833,2021-1,672,8476,0.07928268050967438,115,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1726,2021-1,358,4500,0.07955555555555556,116,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
9914,2021-1,16,201,0.07960199004975124,117,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
1835,2021-1,347,4326,0.08021266759130836,118,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
2737,2021-1,374,4655,0.080343716433942,119,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
1803,2021-1,752,9295,0.08090371167294244,120,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1223,2021-1,20,247,0.08097165991902834,121,Universidad De Antioquia,Antioquia,Turbo
2711,2021-1,198,2439,0.08118081180811808,122,Universidad Catolica De Pereira,Risaralda,Pereira
2832,2021-1,786,9605,0.08183237896928683,123,Universidad De Santander - Udes,Santander,Bucaramanga
1705,2021-1,443,5396,0.08209785025945145,124,Universidad Santo Tomas,Santander,Bucaramanga
3301,2021-1,706,8582,0.08226520624563038,125,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
9116,2021-1,237,2872,0.08252089136490251,126,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
9900,2021-1,68,822,0.0827250608272506,127,Corporacion Universitaria U De Colombia,Antioquia,Medellín
1814,2021-1,314,3792,0.08280590717299578,128,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1716,2021-1,323,3888,0.0830761316872428,129,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1806,2021-1,586,7047,0.08315595288775365,130,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1820,2021-1,340,4025,0.084472049689441,131,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
3115,2021-1,200,2359,0.0847816871555744,132,Institución Universitaria Del Putumayo,Putumayo,Mocoa
1823,2021-1,794,9331,0.08509270174686528,133,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
2709,2021-1,321,3767,0.08521369790284046,134,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1709,2021-1,789,9140,0.0863238512035011,135,Universidad Central,Cundinamarca,"Bogotá, D.C."
3204,2021-1,1045,12085,0.08647083160943318,136,Tecnologico De Antioquia,Antioquia,Medellín
1807,2021-1,418,4822,0.0866860223973455,137,Universidad Libre,Valle del Cauca,Santiago de Cali
2812,2021-1,550,6315,0.08709422011084719,138,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1301,2021-1,1596,18107,0.08814270724029381,139,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1825,2021-1,382,4313,0.08856944122420589,140,Universidad Autonoma De Manizales,Caldas,Manizales
2905,2021-1,20,225,0.08888888888888889,141,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
1830,2021-1,770,8635,0.08917197452229299,142,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
9122,2021-1,61,679,0.0898379970544919,143,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
3102,2021-1,118,1311,0.09000762776506484,144,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
4112,2021-1,45,493,0.09127789046653144,145,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
1719,2021-1,764,8364,0.09134385461501672,146,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1102,2021-1,128,1400,0.09142857142857144,147,Universidad Nacional De Colombia,Antioquia,Medellín
1734,2021-1,448,4844,0.09248554913294796,148,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1815,2021-1,417,4445,0.0938132733408324,149,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1119,2021-1,547,5819,0.09400240591166868,150,Universidad De Los Llanos,Meta,Villavicencio
9907,2021-1,210,2225,0.09438202247191012,151,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
4837,2021-1,45,476,0.09453781512605042,152,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
9127,2021-1,105,1110,0.0945945945945946,153,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
2838,2021-1,67,699,0.09585121602288985,154,Corporacion Colegiatura Colombiana,Antioquia,Medellín
2732,2021-1,283,2948,0.09599728629579377,155,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
1733,2021-1,191,1988,0.0960764587525151,156,Universidad Sergio Arboleda,Magdalena,Santa Marta
1817,2021-1,329,3409,0.09650924024640656,157,Universidad Cooperativa De Colombia,Santander,Bucaramanga
4709,2021-1,122,1256,0.09713375796178345,158,Institucion Universitaria Eam,Quindío,Armenia
2747,2021-1,390,4005,0.09737827715355804,159,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
2740,2021-1,15,154,0.0974025974025974,160,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
1802,2021-1,213,2184,0.09752747252747251,161,Universidad La Gran Colombia,Quindío,Armenia
3809,2021-1,12,123,0.0975609756097561,162,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
9922,2021-1,106,1072,0.09888059701492535,163,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
1717,2021-1,414,4162,0.09947140797693416,164,Universidad De San Buenaventura,Antioquia,Medellín
1202,2021-1,1914,19166,0.09986434310758636,165,Universidad Del Atlantico,Atlántico,Puerto Colombia
2828,2021-1,343,3408,0.1006455399061033,166,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
2825,2021-1,522,5185,0.1006750241080039,167,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
2302,2021-1,395,3915,0.1008939974457216,168,Institucion Universitaria De Envigado,Antioquia,Envigado
2209,2021-1,1293,12717,0.1016749233309743,169,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
2829,2021-1,9938,96763,0.1027045461591724,170,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
2841,2021-1,247,2394,0.1031746031746032,171,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
2745,2021-1,747,7239,0.1031910484873601,172,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
2744,2021-1,656,6357,0.1031933301871952,173,Universidad Cesmag - Unicesmag,Nariño,Pasto
2741,2021-1,64,620,0.1032258064516129,174,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
1810,2021-1,166,1605,0.1034267912772586,175,Universidad Libre,Norte de Santander,San José de Cúcuta
1805,2021-1,1482,14302,0.1036218710669836,176,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
3901,2021-1,42,405,0.1037037037037037,177,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
9927,2021-1,136,1309,0.1038961038961039,178,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
2810,2021-1,1239,11890,0.1042052144659378,179,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
2724,2021-1,375,3560,0.1053370786516854,180,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
2902,2021-1,16,150,0.1066666666666667,181,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
2720,2021-1,361,3347,0.1078577830893337,182,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
1222,2021-1,9,83,0.108433734939759,183,Universidad De Antioquia,Antioquia,Puerto Berrío
1818,2021-1,3004,27425,0.109535095715588,184,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
2715,2021-1,730,6661,0.1095931541810539,185,Fundacion Universitaria De Popayan,Cauca,Popayán
1112,2021-1,1410,12687,0.1111373847245212,186,Universidad De Caldas,Caldas,Manizales
2710,2021-1,180,1611,0.111731843575419,187,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
3107,2021-1,768,6780,0.1132743362831858,188,Institución Universitaria Pascual Bravo,Antioquia,Medellín
3201,2021-1,2006,17646,0.1136801541425819,189,Unidades Tecnologicas De Santander,Santander,Bucaramanga
3811,2021-1,24,211,0.1137440758293839,190,Corporacion De Educacion Del Norte Del Tolima - Coreducacion,Tolima,Honda
3703,2021-1,182,1566,0.1162196679438059,191,Institucion Universitaria Escolme,Antioquia,Medellín
3114,2021-1,65,543,0.1197053406998158,192,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
4110,2021-1,478,3992,0.1197394789579158,193,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
2827,2021-1,311,2597,0.1197535618020793,194,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
4108,2021-1,315,2626,0.11995430312262,195,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
1834,2021-1,627,5181,0.1210191082802548,196,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
2833,2021-1,2056,16958,0.1212407123481543,197,Corporacion Universitaria Remington,Antioquia,Medellín
1218,2021-1,1643,13409,0.1225296442687747,198,Universidad De La Guajira,La Guajira,Riohacha
3821,2021-1,307,2494,0.1230954290296712,199,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
3817,2021-1,606,4895,0.1237997957099081,200,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
2834,2021-1,812,6422,0.126440361258175,201,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
9906,2021-1,21,166,0.1265060240963855,202,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
5801,2021-1,80,630,0.126984126984127,203,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
2723,2021-1,410,3215,0.1275272161741835,204,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
2713,2021-1,812,6363,0.1276127612761276,205,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
2818,2021-1,113,875,0.1291428571428571,206,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
1819,2021-1,115,870,0.132183908045977,207,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1822,2021-1,152,1147,0.1325196163905841,208,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
3720,2021-1,222,1674,0.1326164874551971,209,Fundacion Universitaria Esumer,Antioquia,Medellín
1735,2021-1,846,6333,0.1335859782093795,210,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
9129,2021-1,218,1629,0.1338244321669736,211,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
2837,2021-1,673,4938,0.1362899959497772,212,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
3803,2021-1,116,849,0.1366313309776207,213,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
2850,2021-1,704,5124,0.1373926619828259,214,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
9131,2021-1,81,585,0.1384615384615385,215,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
3808,2021-1,30,215,0.1395348837209302,216,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
1804,2021-1,915,6535,0.1400153022188217,217,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2733,2021-1,27,190,0.1421052631578947,218,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
3702,2021-1,38,265,0.1433962264150943,219,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
2823,2021-1,1493,10292,0.1450641274776525,220,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
2725,2021-1,7299,50235,0.1452971036130188,221,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
9905,2021-1,121,831,0.1456077015643803,222,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
4835,2021-1,73,500,0.146,223,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
2849,2021-1,367,2493,0.1472121941436021,224,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
9119,2021-1,1702,11479,0.1482707552922728,225,Corporacion Universitaria Americana,Atlántico,Barranquilla
2847,2021-1,988,6661,0.1483260771655908,226,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2842,2021-1,365,2436,0.1498357963875205,227,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
3812,2021-1,90,600,0.15,228,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
4101,2021-1,336,2240,0.15,229,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
2749,2021-1,487,3242,0.1502159161011721,230,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
2830,2021-1,1546,10279,0.1504037357719623,231,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
2739,2021-1,53,351,0.150997150997151,232,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
1703,2021-1,152,988,0.1538461538461539,233,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9928,2021-1,2,13,0.1538461538461539,234,Fundación Universitaria Salesiana,Cundinamarca,"Bogotá, D.C."
2102,2021-1,11116,71594,0.1552644076319245,235,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
5802,2021-1,2738,17548,0.1560291771142011,236,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
4803,2021-1,3,19,0.1578947368421053,237,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
2743,2021-1,323,2045,0.1579462102689486,238,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
2738,2021-1,146,919,0.1588683351468988,239,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
3713,2021-1,354,2221,0.1593876632147681,240,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
3831,2021-1,444,2682,0.1655480984340045,241,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
2727,2021-1,767,4623,0.1659095825221718,242,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
4822,2021-1,287,1724,0.1664733178654292,243,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
1801,2021-1,1563,9356,0.1670585720393331,244,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
9120,2021-1,119,692,0.1719653179190752,245,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
2731,2021-1,746,4325,0.172485549132948,246,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
4810,2021-1,235,1349,0.1742031134173462,247,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
3719,2021-1,94,532,0.1766917293233083,248,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
3706,2021-1,563,3157,0.1783338612606905,249,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
2848,2021-1,485,2704,0.1793639053254438,250,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
4825,2021-1,194,1074,0.180633147113594,251,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
3303,2021-1,140,759,0.1844532279314888,252,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
2831,2021-1,481,2600,0.185,253,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
4721,2021-1,173,932,0.1856223175965665,254,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
2728,2021-1,4676,25049,0.1866741187272945,255,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
3801,2021-1,87,465,0.1870967741935484,256,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
4106,2021-1,37,196,0.1887755102040816,257,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
9117,2021-1,4,21,0.1904761904761905,258,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
3117,2021-1,787,4130,0.1905569007263923,259,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
9902,2021-1,65,336,0.193452380952381,260,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
4801,2021-1,56,288,0.1944444444444444,261,Corporacion Academia Superior De Artes,Antioquia,Medellín
4813,2021-1,5452,27737,0.1965605508887046,262,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
3705,2021-1,1623,8135,0.1995082974800246,263,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
9931,2021-1,4,20,0.2,264,Fundación Universitaria Patricio Symes,Cundinamarca,"Bogotá, D.C."
4107,2021-1,119,591,0.2013536379018613,265,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
4818,2021-1,1018,5049,0.2016240839770252,266,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
9913,2021-1,1145,5649,0.202690741724199,267,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
4102,2021-1,144,701,0.2054208273894436,268,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
4111,2021-1,209,1016,0.2057086614173228,269,Institución Universitaria Del Caribe,Magdalena,Ciénaga
3718,2021-1,292,1417,0.2060691601976006,270,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
3806,2021-1,72,346,0.208092485549133,271,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
3715,2021-1,219,1051,0.2083729781160799,272,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
2836,2021-1,95,451,0.2106430155210643,273,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
9121,2021-1,480,2274,0.2110817941952507,274,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
2748,2021-1,66,311,0.2122186495176849,275,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
1725,2021-1,546,2456,0.2223127035830619,276,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
4702,2021-1,359,1588,0.2260705289672544,277,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
1219,2021-1,73,318,0.229559748427673,278,Universidad De Antioquia,Antioquia,El Carmen de Viboral
4726,2021-1,1169,5035,0.2321747765640516,279,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
3834,2021-1,19,81,0.2345679012345679,280,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
3820,2021-1,31,132,0.2348484848484849,281,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
3725,2021-1,74,314,0.2356687898089172,282,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
3819,2021-1,219,907,0.2414553472987872,283,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
9128,2021-1,184,704,0.2613636363636364,284,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
3826,2021-1,145,554,0.2617328519855596,285,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
2901,2021-1,30,114,0.2631578947368421,286,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
9915,2021-1,206,778,0.2647814910025707,287,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
4701,2021-1,505,1847,0.2734163508391987,288,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
4109,2021-1,268,913,0.2935377875136911,289,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
3716,2021-1,96,314,0.3057324840764331,290,Tecnologica Fitec,Santander,Bucaramanga
9904,2021-1,540,1733,0.311598384304674,291,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
4719,2021-1,81,259,0.3127413127413127,292,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
4811,2021-1,100,300,0.3333333333333333,293,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
3828,2021-1,5,15,0.3333333333333333,294,Corporación Tecnológica De Educación Superior Sapienza - Cte,Cundinamarca,"Bogotá, D.C."
9126,2021-1,115,318,0.3616352201257861,295,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
2824,2021-1,57,155,0.367741935483871,296,Corporacion Universitaria De Colombia Ideas,Cundinamarca,"Bogotá, D.C."
3710,2021-1,969,2572,0.3767496111975117,297,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
9926,2021-1,231,599,0.3856427378964942,298,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
3822,2021-1,18,44,0.4090909090909091,299,Politecnico Icaft,Cundinamarca,"Bogotá, D.C."
4832,2021-1,192,459,0.4183006535947713,300,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
4727,2021-1,2143,4950,0.4329292929292929,301,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
4806,2021-1,11,25,0.44,302,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
4817,2021-1,108,245,0.4408163265306123,303,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
4714,2021-1,42,79,0.5316455696202531,304,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
9899,2021-1,463,688,0.6729651162790697,305,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
3807,2021-1,159,236,0.673728813559322,306,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
4812,2021-1,61,83,0.7349397590361446,307,Corporacion De Educacion Superior Suramerica,Cundinamarca,"Bogotá, D.C."
4826,2021-1,184,250,0.736,308,Corporacion Universitaria Regional Del Caribe -Iafic-,Bolívar,Cartagena de Indias
4808,2021-1,187,241,0.7759336099585062,309,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
9903,2021-1,100,107,0.9345794392523364,310,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
3827,2020-2,0,91,0.0,1,Politecnico Santafe De Bogota,Cundinamarca,"Bogotá, D.C."
9102,2020-2,5,522,0.00957854406130268,2,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
2707,2020-2,26,1833,0.01418439716312057,3,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
3902,2020-2,58,2828,0.02050919377652051,4,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
1711,2020-2,233,9910,0.02351160443995964,5,Universidad De La Sabana,Cundinamarca,Chía
9124,2020-2,3,117,0.02564102564102564,6,Tecnologico Coredi,Antioquia,Marinilla
1813,2020-2,348,13169,0.02642569671197509,7,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1715,2020-2,82,2741,0.02991608901860635,8,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1824,2020-2,132,4386,0.03009575923392613,9,Universidad Metropolitana,Atlántico,Barranquilla
4829,2020-2,13,411,0.03163017031630171,10,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
2903,2020-2,5,157,0.03184713375796178,11,Escuela De Comunicaciones,Cundinamarca,Facatativá
1828,2020-2,185,5722,0.03233135267389025,12,Universidad Icesi,Valle del Cauca,Santiago de Cali
9104,2020-2,55,1687,0.03260225251926497,13,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
9105,2020-2,26,796,0.03266331658291458,14,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1222,2020-2,2,57,0.03508771929824561,15,Universidad De Antioquia,Antioquia,Puerto Berrío
2704,2020-2,36,1021,0.03525954946131244,16,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
2813,2020-2,59,1657,0.0356065178032589,17,Universidad Eia,Antioquia,Envigado
1213,2020-2,691,18605,0.03714055361461972,18,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1714,2020-2,345,9210,0.03745928338762215,19,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
9929,2020-2,7,183,0.03825136612021858,20,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
9103,2020-2,15,391,0.03836317135549872,21,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
1103,2020-2,179,4610,0.03882863340563991,22,Universidad Nacional De Colombia,Caldas,Manizales
1210,2020-2,230,5899,0.03898965926428208,23,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1713,2020-2,503,12858,0.03911961424793903,24,Universidad Del Norte,Atlántico,Barranquilla
1108,2020-2,137,3439,0.0398371619656877,25,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1217,2020-2,229,5718,0.04004896817068905,26,Universidad De Sucre,Sucre,Sincelejo
2702,2020-2,93,2293,0.04055822067160925,27,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1712,2020-2,356,8576,0.04151119402985075,28,Universidad Eafit-,Antioquia,Medellín
1113,2020-2,493,11845,0.0416209371042634,29,Universidad De Cordoba,Córdoba,Montería
1206,2020-2,548,13085,0.04188001528467711,30,Universidad De Nariño,Nariño,Pasto
1727,2020-2,105,2507,0.04188272836059035,31,Universidad Pontificia Bolivariana,Córdoba,Montería
1215,2020-2,87,2056,0.04231517509727627,32,Universidad De Cundinamarca,Cundinamarca,Girardot
1107,2020-2,131,3053,0.04290861447756305,33,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2708,2020-2,192,4429,0.04335064348611425,34,Universidad Ces,Antioquia,Medellín
1204,2020-2,805,18401,0.04374762241182544,35,Universidad Industrial De Santander,Santander,Bucaramanga
2104,2020-2,500,11360,0.04401408450704225,36,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
2106,2020-2,403,8739,0.04611511614601213,37,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
1701,2020-2,801,17194,0.04658601837850413,38,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,2020-2,1170,24927,0.04693705620411602,39,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2730,2020-2,33,703,0.04694167852062589,40,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
1702,2020-2,329,6590,0.04992412746585736,41,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1827,2020-2,110,2189,0.05025125628140704,42,Universidad Catolica De Manizales,Caldas,Manizales
1220,2020-2,12,238,0.05042016806722689,43,Universidad De Antioquia,Antioquia,Andes
1209,2020-2,825,16234,0.05081926820253788,44,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
9921,2020-2,5,98,0.05102040816326531,45,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
2746,2020-2,65,1274,0.05102040816326531,46,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
3834,2020-2,5,96,0.05208333333333334,47,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
1301,2020-2,859,16138,0.05322840500681621,48,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
2811,2020-2,256,4777,0.05359011932175006,49,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1104,2020-2,142,2638,0.05382865807429871,50,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1106,2020-2,1102,20454,0.05387699227534957,51,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2208,2020-2,16,294,0.05442176870748299,52,Conservatorio Del Tolima,Tolima,Ibagué
1109,2020-2,50,873,0.0572737686139748,53,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
2838,2020-2,40,689,0.05805515239477504,54,Corporacion Colegiatura Colombiana,Antioquia,Medellín
3901,2020-2,22,376,0.05851063829787234,55,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
1724,2020-2,185,3124,0.05921895006402049,56,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1212,2020-2,1398,23503,0.0594817682848998,57,Universidad De Pamplona,Norte de Santander,Pamplona
3103,2020-2,111,1843,0.06022788931090613,58,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
1121,2020-2,310,5116,0.06059421422986708,59,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
2701,2020-2,87,1428,0.06092436974789916,60,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
2840,2020-2,67,1098,0.0610200364298725,61,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
1723,2020-2,260,4198,0.06193425440686041,62,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1707,2020-2,460,7394,0.06221260481471463,63,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
5801,2020-2,34,545,0.06238532110091743,64,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
1710,2020-2,757,12100,0.06256198347107438,65,Universidad Pontificia Bolivariana,Antioquia,Medellín
2719,2020-2,962,15358,0.06263836437036073,66,Universidad Católica Luis Amigó,Antioquia,Medellín
1729,2020-2,667,10563,0.06314493988450251,67,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
9107,2020-2,34,533,0.06378986866791744,68,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
2721,2020-2,217,3386,0.06408741878322505,69,Fundacion Universitaria Maria Cano,Antioquia,Medellín
2832,2020-2,583,8985,0.06488592097941012,70,Universidad De Santander - Udes,Santander,Bucaramanga
9122,2020-2,44,678,0.06489675516224189,71,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1820,2020-2,254,3913,0.06491183235369281,72,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1111,2020-2,929,14285,0.06503325166258313,73,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1203,2020-2,1679,25624,0.0655245082734936,74,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1816,2020-2,273,4156,0.06568816169393647,75,Universidad Cooperativa De Colombia,Antioquia,Medellín
2805,2020-2,932,14132,0.06594961788848004,76,Universidad Simon Bolivar,Atlántico,Barranquilla
2206,2020-2,51,770,0.06623376623376623,77,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
2825,2020-2,337,5029,0.06701133426128456,78,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
2905,2020-2,15,222,0.06756756756756757,79,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
1219,2020-2,22,325,0.06769230769230769,80,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1720,2020-2,432,6368,0.0678391959798995,81,Universidad Mariana,Nariño,Pasto
1214,2020-2,718,10433,0.0688200900987252,82,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
4837,2020-2,32,461,0.06941431670281996,83,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
1716,2020-2,287,3972,0.07225579053373615,84,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1826,2020-2,1019,13980,0.0728898426323319,85,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1708,2020-2,21,288,0.07291666666666667,86,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
3809,2020-2,8,109,0.07339449541284404,87,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
2741,2020-2,38,517,0.0735009671179884,88,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
1835,2020-2,334,4534,0.07366563740626378,89,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
2715,2020-2,450,5946,0.07568113017154389,90,Fundacion Universitaria De Popayan,Cauca,Popayán
1722,2020-2,460,6054,0.07598282127518996,91,Universidad De Manizales,Caldas,Manizales
1114,2020-2,919,12025,0.07642411642411642,92,Universidad Surcolombiana,Huila,Neiva
1120,2020-2,954,12475,0.07647294589178356,93,Universidad Popular Del Cesar,Cesar,Valledupar
9127,2020-2,90,1176,0.07653061224489796,94,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
3104,2020-2,162,2113,0.07666824420255561,95,Colegio Mayor Del Cauca,Cauca,Popayán
1730,2020-2,28,365,0.07671232876712329,96,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
2747,2020-2,314,4037,0.07778053009660639,97,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
1123,2020-2,164,2105,0.07790973871733967,98,Universidad Popular Del Cesar,Cesar,Aguachica
1815,2020-2,354,4524,0.07824933687002653,99,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1817,2020-2,266,3395,0.07835051546391752,100,Universidad Cooperativa De Colombia,Santander,Bucaramanga
4709,2020-2,94,1191,0.07892527287993283,101,Institucion Universitaria Eam,Quindío,Armenia
1829,2020-2,122,1543,0.07906675307841866,102,Universidad Santiago De Cali,Valle del Cauca,Palmira
1709,2020-2,744,9389,0.0792416657791032,103,Universidad Central,Cundinamarca,"Bogotá, D.C."
2744,2020-2,500,6262,0.07984669434685404,104,Universidad Cesmag - Unicesmag,Nariño,Pasto
1216,2020-2,39,488,0.07991803278688525,105,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
2820,2020-2,106,1312,0.08079268292682927,106,Corporacion Universitaria Lasallista,Antioquia,Caldas
1831,2020-2,456,5619,0.0811532301121196,107,Universidad De Ibague,Tolima,Ibagué
2301,2020-2,305,3724,0.08190118152524167,108,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
2828,2020-2,291,3539,0.0822266176886126,109,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
2712,2020-2,265,3221,0.08227258615336852,110,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1728,2020-2,626,7577,0.08261845057410584,111,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
3114,2020-2,41,496,0.08266129032258064,112,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
1205,2020-2,1342,16208,0.08279861796643632,113,Universidad De Cartagena,Bolívar,Cartagena de Indias
4835,2020-2,33,395,0.08354430379746836,114,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
2114,2020-2,289,3451,0.08374384236453201,115,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
9116,2020-2,221,2636,0.0838391502276176,116,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
4110,2020-2,311,3704,0.083963282937365,117,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
1832,2020-2,436,5162,0.08446338628438589,118,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1812,2020-2,704,8299,0.08482949752982287,119,Universidad De Medellin,Antioquia,Medellín
1223,2020-2,23,271,0.08487084870848709,120,Universidad De Antioquia,Antioquia,Turbo
2829,2020-2,8189,96421,0.08492963151180759,121,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
1833,2020-2,696,8134,0.08556675682321122,122,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1717,2020-2,359,4183,0.08582357159933063,123,Universidad De San Buenaventura,Antioquia,Medellín
1719,2020-2,718,8307,0.08643312868664982,124,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1814,2020-2,323,3729,0.08661839635290963,125,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2737,2020-2,396,4568,0.08669001751313485,126,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
1726,2020-2,393,4467,0.08797850906648758,127,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1105,2020-2,760,8586,0.08851618914511997,128,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2810,2020-2,1006,11317,0.08889281611734559,129,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1803,2020-2,913,10251,0.08906448151399864,130,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1809,2020-2,263,2945,0.08930390492359933,131,Universidad Libre,Risaralda,Pereira
9900,2020-2,78,872,0.08944954128440367,132,Corporacion Universitaria U De Colombia,Antioquia,Medellín
3115,2020-2,194,2166,0.08956602031394276,133,Institución Universitaria Del Putumayo,Putumayo,Mocoa
2815,2020-2,119,1326,0.08974358974358974,134,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
2743,2020-2,148,1640,0.0902439024390244,135,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
2302,2020-2,327,3599,0.09085857182550708,136,Institucion Universitaria De Envigado,Antioquia,Envigado
1830,2020-2,810,8913,0.09087849209020532,137,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
2720,2020-2,292,3213,0.09088079676314972,138,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
1706,2020-2,484,5312,0.0911144578313253,139,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
2841,2020-2,221,2415,0.09151138716356108,140,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
3303,2020-2,54,587,0.09199318568994888,141,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
1207,2020-2,1527,16543,0.09230490237562716,142,Universidad Del Tolima,Tolima,Ibagué
1208,2020-2,1214,13122,0.09251638469745466,143,Universidad Del Quindio,Quindío,Armenia
1704,2020-2,1504,16248,0.09256523879862136,144,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1808,2020-2,451,4847,0.09304724571900144,145,Universidad Libre,Atlántico,Barranquilla
1718,2020-2,224,2389,0.09376308078694014,146,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1818,2020-2,2646,28196,0.09384309831181728,147,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1732,2020-2,301,3200,0.0940625,148,Universidad Santo Tomas,Boyacá,Tunja
2209,2020-2,1201,12722,0.09440339569250118,149,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
1117,2020-2,1435,15113,0.09495136637332098,150,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
9933,2020-2,19,200,0.095,151,Universidad Nacional De Colombia,Cesar,La Paz
2211,2020-2,125,1313,0.0952018278750952,152,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
3204,2020-2,1014,10637,0.09532762997085643,153,Tecnologico De Antioquia,Antioquia,Medellín
1202,2020-2,1669,17450,0.09564469914040116,154,Universidad Del Atlantico,Atlántico,Puerto Colombia
1115,2020-2,812,8475,0.09581120943952802,155,Universidad De La Amazonia,Caquetá,Florencia
1122,2020-2,257,2673,0.09614665170220726,156,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1823,2020-2,906,9318,0.09723116548615585,157,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1734,2020-2,467,4800,0.09729166666666668,158,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
3821,2020-2,231,2362,0.09779847586790856,159,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
2724,2020-2,358,3649,0.09810907097835024,160,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
9907,2020-2,216,2191,0.0985851209493382,161,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
1802,2020-2,209,2096,0.09971374045801527,162,Universidad La Gran Colombia,Quindío,Armenia
1834,2020-2,499,4915,0.1015259409969481,163,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
2745,2020-2,735,7236,0.101575456053068,164,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
4112,2020-2,30,295,0.1016949152542373,165,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
3301,2020-2,853,8335,0.1023395320935813,166,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
4810,2020-2,136,1327,0.1024868123587038,167,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
1825,2020-2,450,4375,0.1028571428571429,168,Universidad Autonoma De Manizales,Caldas,Manizales
2732,2020-2,304,2931,0.1037188672807915,169,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
3102,2020-2,114,1098,0.1038251366120219,170,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
2710,2020-2,168,1609,0.1044126786824114,171,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
3807,2020-2,27,256,0.10546875,172,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
2709,2020-2,358,3392,0.1055424528301887,173,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
9905,2020-2,80,751,0.1065246338215712,174,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
1733,2020-2,198,1857,0.1066235864297254,175,Universidad Sergio Arboleda,Magdalena,Santa Marta
2847,2020-2,686,6371,0.1076754041751687,176,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1822,2020-2,121,1123,0.1077471059661621,177,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
3720,2020-2,178,1648,0.1080097087378641,178,Fundacion Universitaria Esumer,Antioquia,Medellín
2812,2020-2,702,6475,0.1084169884169884,179,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1705,2020-2,585,5350,0.1093457943925234,180,Universidad Santo Tomas,Santander,Bucaramanga
2842,2020-2,193,1762,0.1095346197502838,181,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
2723,2020-2,355,3238,0.1096355775169858,182,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1805,2020-2,1563,14234,0.1098075031614444,183,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2711,2020-2,269,2449,0.1098407513270723,184,Universidad Catolica De Pereira,Risaralda,Pereira
1118,2020-2,1040,9385,0.1108151305274374,185,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1804,2020-2,749,6723,0.1114085973523724,186,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2713,2020-2,729,6531,0.1116214974735875,187,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
1201,2020-2,3252,29132,0.1116298228751888,188,Universidad De Antioquia,Antioquia,Medellín
1221,2020-2,21,187,0.1122994652406417,189,Universidad De Antioquia,Antioquia,Caucasia
1807,2020-2,551,4886,0.112771182971756,190,Universidad Libre,Valle del Cauca,Santiago de Cali
1819,2020-2,102,902,0.1130820399113082,191,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2827,2020-2,283,2481,0.1140669085046352,192,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
3703,2020-2,193,1682,0.1147443519619501,193,Institucion Universitaria Escolme,Antioquia,Medellín
2818,2020-2,101,874,0.1155606407322654,194,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
9922,2020-2,116,1002,0.1157684630738523,195,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
1735,2020-2,721,6209,0.1161217587373168,196,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1112,2020-2,1518,13022,0.1165719551528183,197,Universidad De Caldas,Caldas,Manizales
4108,2020-2,277,2373,0.1167298777918247,198,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
3817,2020-2,581,4922,0.1180414465664364,199,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
4811,2020-2,34,288,0.1180555555555556,200,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
2848,2020-2,316,2664,0.1186186186186186,201,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
2207,2020-2,418,3523,0.1186488787964803,202,Instituto Universitario De La Paz,Santander,Barrancabermeja
2902,2020-2,18,149,0.1208053691275168,203,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
2110,2020-2,673,5524,0.1218320057929037,204,Colegio Mayor De Antioquia,Antioquia,Medellín
2849,2020-2,322,2639,0.1220159151193634,205,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
3713,2020-2,272,2228,0.1220825852782765,206,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
3801,2020-2,62,487,0.1273100616016427,207,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
1102,2020-2,1367,10734,0.1273523383640768,208,Universidad Nacional De Colombia,Antioquia,Medellín
3831,2020-2,319,2494,0.1279069767441861,209,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
2834,2020-2,786,6060,0.1297029702970297,210,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
2736,2020-2,20,154,0.1298701298701299,211,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
3706,2020-2,446,3426,0.1301809690601284,212,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
4822,2020-2,235,1803,0.1303383250138658,213,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
3812,2020-2,64,490,0.1306122448979592,214,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
1725,2020-2,295,2246,0.1313446126447017,215,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
9120,2020-2,84,637,0.1318681318681319,216,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
2738,2020-2,127,960,0.1322916666666667,217,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
2833,2020-2,2251,17013,0.1323105860224534,218,Corporacion Universitaria Remington,Antioquia,Medellín
3702,2020-2,36,271,0.1328413284132841,219,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
9129,2020-2,208,1565,0.1329073482428115,220,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
3803,2020-2,118,887,0.133032694475761,221,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
2850,2020-2,625,4679,0.1335755503312674,222,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
1806,2020-2,965,7222,0.1336194959844918,223,Universidad Libre,Cundinamarca,"Bogotá, D.C."
4111,2020-2,85,634,0.1340694006309148,224,Institución Universitaria Del Caribe,Magdalena,Ciénaga
1703,2020-2,149,1106,0.1347197106690778,225,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9119,2020-2,1542,11306,0.1363877587121882,226,Corporacion Universitaria Americana,Atlántico,Barranquilla
3715,2020-2,145,1047,0.1384909264565425,227,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
2725,2020-2,6927,49455,0.1400667273278738,228,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
2749,2020-2,481,3429,0.1402741324001167,229,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
5802,2020-2,2496,17781,0.1403745571115235,230,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
3705,2020-2,1150,8011,0.143552615154163,231,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
2740,2020-2,22,153,0.1437908496732026,232,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
1801,2020-2,1373,9543,0.1438750916902442,233,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
3302,2020-2,2987,20715,0.1441950277576635,234,Institucion Universitaria - Itm,Antioquia,Medellín
2731,2020-2,692,4721,0.1465791145943656,235,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
9906,2020-2,24,162,0.1481481481481481,236,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
3117,2020-2,492,3284,0.1498172959805116,237,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
3107,2020-2,1029,6819,0.1509018917729872,238,Institución Universitaria Pascual Bravo,Antioquia,Medellín
2837,2020-2,730,4799,0.1521150239633257,239,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
3201,2020-2,2495,16238,0.1536519275772879,240,Unidades Tecnologicas De Santander,Santander,Bucaramanga
4101,2020-2,392,2538,0.1544523246650906,241,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
3719,2020-2,79,511,0.1545988258317025,242,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
2733,2020-2,27,171,0.1578947368421053,243,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
4818,2020-2,731,4574,0.159816353301268,244,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
3718,2020-2,214,1324,0.161631419939577,245,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
1810,2020-2,264,1630,0.1619631901840491,246,Universidad Libre,Norte de Santander,San José de Cúcuta
9902,2020-2,52,315,0.1650793650793651,247,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
9117,2020-2,3,18,0.1666666666666667,248,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
9914,2020-2,40,239,0.1673640167364017,249,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
3725,2020-2,49,292,0.1678082191780822,250,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
9121,2020-2,359,2138,0.1679139382600561,251,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
2739,2020-2,54,318,0.169811320754717,252,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
2823,2020-2,1705,10006,0.1703977613431941,253,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
2831,2020-2,440,2572,0.1710730948678071,254,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
2901,2020-2,16,93,0.1720430107526882,255,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
4721,2020-2,113,654,0.172782874617737,256,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
2728,2020-2,4054,23061,0.1757946316291575,257,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
1811,2020-2,189,1038,0.1820809248554913,258,Universidad Libre,Santander,Socorro
4801,2020-2,50,274,0.1824817518248175,259,Corporacion Academia Superior De Artes,Antioquia,Medellín
4726,2020-2,906,4920,0.1841463414634146,260,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
3808,2020-2,42,227,0.1850220264317181,261,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
3819,2020-2,164,875,0.1874285714285714,262,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
4701,2020-2,363,1918,0.189259645464025,263,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
2748,2020-2,69,363,0.1900826446280992,264,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
2727,2020-2,927,4767,0.1944619257394588,265,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
3826,2020-2,78,401,0.1945137157107232,266,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
4825,2020-2,114,586,0.1945392491467577,267,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
2830,2020-2,2003,10292,0.1946171783909833,268,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
2836,2020-2,85,434,0.195852534562212,269,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
9128,2020-2,181,889,0.203599550056243,270,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
9913,2020-2,1264,5976,0.2115127175368139,271,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
2102,2020-2,14334,67309,0.2129581482416913,272,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
9110,2020-2,79269,371002,0.2136619209599948,273,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
2824,2020-2,43,198,0.2171717171717172,274,Corporacion Universitaria De Colombia Ideas,Cundinamarca,"Bogotá, D.C."
9126,2020-2,68,303,0.2244224422442244,275,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
9904,2020-2,389,1725,0.2255072463768116,276,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
4803,2020-2,5,22,0.2272727272727273,277,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
3811,2020-2,65,284,0.2288732394366197,278,Corporacion De Educacion Del Norte Del Tolima - Coreducacion,Tolima,Honda
9131,2020-2,105,448,0.234375,279,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
4109,2020-2,207,874,0.2368421052631579,280,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
4106,2020-2,32,132,0.2424242424242424,281,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
3806,2020-2,86,350,0.2457142857142857,282,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
3820,2020-2,36,138,0.2608695652173913,283,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
9915,2020-2,176,665,0.2646616541353383,284,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
3716,2020-2,130,484,0.268595041322314,285,Tecnologica Fitec,Santander,Bucaramanga
4719,2020-2,90,321,0.2803738317757009,286,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
3710,2020-2,750,2611,0.2872462657985446,287,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
4714,2020-2,21,73,0.2876712328767123,288,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
4102,2020-2,144,500,0.288,289,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
4813,2020-2,8944,30215,0.2960119146119477,290,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
9125,2020-2,8,25,0.32,291,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
4702,2020-2,579,1705,0.3395894428152493,292,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
4832,2020-2,133,370,0.3594594594594595,293,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
4808,2020-2,150,404,0.3712871287128713,294,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
3828,2020-2,16,42,0.3809523809523809,295,Corporación Tecnológica De Educación Superior Sapienza - Cte,Cundinamarca,"Bogotá, D.C."
4727,2020-2,2121,5470,0.3877513711151737,296,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
9927,2020-2,285,697,0.4088952654232424,297,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
9926,2020-2,120,262,0.4580152671755725,298,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
3822,2020-2,8,17,0.4705882352941176,299,Politecnico Icaft,Cundinamarca,"Bogotá, D.C."
4817,2020-2,158,308,0.512987012987013,300,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
4107,2020-2,455,863,0.5272305909617613,301,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
4806,2020-2,9,16,0.5625,302,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
9899,2020-2,728,1118,0.6511627906976745,303,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
4812,2020-2,4,5,0.8,304,Corporacion De Educacion Superior Suramerica,Cundinamarca,"Bogotá, D.C."
9903,2020-2,142,144,0.9861111111111112,305,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
3901,2020-1,1,350,0.002857142857142857,1,Escuela De Formacion De Infanteria De Marina,Sucre,Coveñas
9110,2020-1,901,312143,0.002886497534783737,2,Servicio Nacional De Aprendizaje-Sena-,Cundinamarca,"Bogotá, D.C."
9124,2020-1,1,121,0.008264462809917356,3,Tecnologico Coredi,Antioquia,Marinilla
3902,2020-1,34,2705,0.01256931608133087,4,Escuela  Militar De Suboficiales Sargento Inocencio Chinca,Cundinamarca,Nilo
2707,2020-1,27,1800,0.015,5,Fundación Universitaria Juan N. Corpas,Cundinamarca,"Bogotá, D.C."
1824,2020-1,99,4338,0.02282157676348548,6,Universidad Metropolitana,Atlántico,Barranquilla
9102,2020-1,14,568,0.02464788732394366,7,Escuela De Suboficiales Fac -Capitán Andrés M. Díaz-,Cundinamarca,Madrid
1108,2020-1,85,3382,0.02513305736250739,8,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1813,2020-1,397,13475,0.02946196660482375,9,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
3809,2020-1,3,99,0.0303030303030303,10,Instituto Superior De Ciencias Sociales Y Economico Familiares-Icsef-,Cundinamarca,Fusagasugá
1711,2020-1,325,10000,0.0325,11,Universidad De La Sabana,Cundinamarca,Chía
9104,2020-1,53,1580,0.03354430379746835,12,Escuela Militar De Cadetes General Jose Maria Cordova,Cundinamarca,"Bogotá, D.C."
1828,2020-1,196,5765,0.03399826539462272,13,Universidad Icesi,Valle del Cauca,Santiago de Cali
1713,2020-1,444,12960,0.03425925925925926,14,Universidad Del Norte,Atlántico,Barranquilla
1107,2020-1,105,3001,0.03498833722092635,15,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
9921,2020-1,3,85,0.03529411764705882,16,Fundacion Universitaria Catolica Del Sur - Unicatolica Del Sur,Nariño,Pasto
2730,2020-1,25,700,0.03571428571428571,17,Fundación Universitaria Escuela Colombiana De Rehabilitación,Cundinamarca,"Bogotá, D.C."
2702,2020-1,84,2275,0.03692307692307693,18,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
2704,2020-1,39,1030,0.03786407766990291,19,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
9125,2020-1,1,26,0.03846153846153846,20,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1215,2020-1,79,1996,0.03957915831663326,21,Universidad De Cundinamarca,Cundinamarca,Girardot
1210,2020-1,239,5967,0.04005362828892241,22,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1715,2020-1,128,3081,0.041544952937358,23,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1217,2020-1,236,5676,0.04157857646229739,24,Universidad De Sucre,Sucre,Sincelejo
2903,2020-1,7,166,0.04216867469879518,25,Escuela De Comunicaciones,Cundinamarca,Facatativá
9105,2020-1,31,734,0.04223433242506812,26,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1701,2020-1,773,17695,0.04368465668267872,27,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1109,2020-1,38,855,0.04444444444444445,28,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1714,2020-1,430,9653,0.04454573707655651,29,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1101,2020-1,1106,24531,0.04508580979169215,30,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1110,2020-1,549,11788,0.04657278588394978,31,Universidad Del Cauca,Cauca,Popayán
1212,2020-1,1122,23834,0.04707560627674751,32,Universidad De Pamplona,Norte de Santander,Pamplona
1206,2020-1,609,12867,0.04733038004196782,33,Universidad De Nariño,Nariño,Pasto
1808,2020-1,232,4899,0.04735660338844662,34,Universidad Libre,Atlántico,Barranquilla
1204,2020-1,850,17939,0.0473827972573722,35,Universidad Industrial De Santander,Santander,Bucaramanga
1106,2020-1,974,20262,0.04807027934063764,36,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1702,2020-1,319,6618,0.04820187367784829,37,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,2020-1,126,2592,0.04861111111111111,38,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1213,2020-1,895,18304,0.04889641608391608,39,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1730,2020-1,17,345,0.04927536231884058,40,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1827,2020-1,115,2310,0.04978354978354978,41,Universidad Catolica De Manizales,Caldas,Manizales
9122,2020-1,35,696,0.05028735632183908,42,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1727,2020-1,130,2573,0.05052467936261174,43,Universidad Pontificia Bolivariana,Córdoba,Montería
2840,2020-1,56,1103,0.05077062556663645,44,Corporacion Universitaria Empresarial Alexander Von Humboldt - Cue,Quindío,Armenia
3114,2020-1,24,470,0.05106382978723404,45,Escuela Naval De Suboficiales Arc Barranquilla,Atlántico,Barranquilla
2708,2020-1,226,4410,0.05124716553287982,46,Universidad Ces,Antioquia,Medellín
1712,2020-1,468,9066,0.05162144275314361,47,Universidad Eafit-,Antioquia,Medellín
2746,2020-1,69,1301,0.05303612605687932,48,Fundacion Universitaria Sanitas,Cundinamarca,"Bogotá, D.C."
1103,2020-1,244,4587,0.05319380858949204,49,Universidad Nacional De Colombia,Caldas,Manizales
2701,2020-1,76,1407,0.05401563610518834,50,Institucion Universitaria Colegios De Colombia - Unicoc,Cundinamarca,"Bogotá, D.C."
1720,2020-1,378,6942,0.05445116681071737,51,Universidad Mariana,Nariño,Pasto
1112,2020-1,717,13135,0.05458698134754473,52,Universidad De Caldas,Caldas,Manizales
2811,2020-1,276,5015,0.05503489531405783,53,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1722,2020-1,341,6190,0.05508885298869143,54,Universidad De Manizales,Caldas,Manizales
1209,2020-1,904,16059,0.05629242169499969,55,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1115,2020-1,467,8142,0.0573569147629575,56,Universidad De La Amazonia,Caquetá,Florencia
2106,2020-1,431,7514,0.05735959542187916,57,Direccion De Educacion Policial,Cundinamarca,"Bogotá, D.C."
1724,2020-1,180,3131,0.05748961992973491,58,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1707,2020-1,467,7954,0.0587125974352527,59,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
3834,2020-1,5,85,0.05882352941176471,60,Corporacion Tecnologica Catolica De Occidente - Tecoc -,Antioquia,Santa Fé de Antioquia
2838,2020-1,43,728,0.05906593406593406,61,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1119,2020-1,332,5611,0.05916948850472287,62,Universidad De Los Llanos,Meta,Villavicencio
1710,2020-1,767,12809,0.05987977203528769,63,Universidad Pontificia Bolivariana,Antioquia,Medellín
2813,2020-1,104,1722,0.06039488966318235,64,Universidad Eia,Antioquia,Envigado
1809,2020-1,183,3018,0.06063618290258449,65,Universidad Libre,Risaralda,Pereira
2719,2020-1,960,15728,0.06103763987792472,66,Universidad Católica Luis Amigó,Antioquia,Medellín
2805,2020-1,887,14474,0.0612822992952881,67,Universidad Simon Bolivar,Atlántico,Barranquilla
1807,2020-1,316,5040,0.0626984126984127,68,Universidad Libre,Valle del Cauca,Santiago de Cali
1732,2020-1,205,3258,0.06292203806015961,69,Universidad Santo Tomas,Boyacá,Tunja
9907,2020-1,136,2152,0.06319702602230483,70,Fundacion Universitaria Navarra - Uninavarra,Huila,Neiva
3104,2020-1,135,2099,0.06431634111481659,71,Colegio Mayor Del Cauca,Cauca,Popayán
2828,2020-1,242,3759,0.06437882415536046,72,Corporacion Universitaria Del Huila-Corhuila-,Huila,Neiva
2208,2020-1,19,295,0.06440677966101695,73,Conservatorio Del Tolima,Tolima,Ibagué
2114,2020-1,220,3409,0.06453505426811382,74,Escuela Nacional Del Deporte,Valle del Cauca,Santiago de Cali
1820,2020-1,257,3980,0.06457286432160804,75,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
2744,2020-1,405,6271,0.0645830011162494,76,Universidad Cesmag - Unicesmag,Nariño,Pasto
1216,2020-1,30,463,0.06479481641468683,77,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
4813,2020-1,1843,28058,0.06568536602751443,78,Corporacion Unificada Nacional De Educacion Superior-Cun-,Cundinamarca,"Bogotá, D.C."
1729,2020-1,708,10752,0.06584821428571429,79,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1214,2020-1,677,10232,0.06616497263487099,80,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
2712,2020-1,219,3278,0.06680902989627822,81,Fundacion Universitaria Konrad Lorenz,Cundinamarca,"Bogotá, D.C."
1121,2020-1,346,5137,0.06735448705470119,82,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
2741,2020-1,35,516,0.06782945736434108,83,Fundacion De Estudios Superiores - Monseñor Abraham Escudero Montoya  - Fundes,Tolima,Espinal
2825,2020-1,352,5169,0.06809827819694332,84,Corporacion Universitaria Rafael Nuñez,Bolívar,Cartagena de Indias
1111,2020-1,985,14442,0.06820384988228777,85,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1815,2020-1,327,4788,0.06829573934837092,86,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1723,2020-1,318,4627,0.06872703695699157,87,Universidad Pontificia Bolivariana,Santander,Bucaramanga
2721,2020-1,231,3356,0.06883194278903457,88,Fundacion Universitaria Maria Cano,Antioquia,Medellín
1718,2020-1,175,2530,0.0691699604743083,89,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
2104,2020-1,814,11677,0.06970968570694527,90,Escuela Superior De Administracion Publica-Esap-,Cundinamarca,"Bogotá, D.C."
3103,2020-1,110,1562,0.07042253521126761,91,Institución Universitaria Mayor De Cartagena,Bolívar,Cartagena de Indias
2720,2020-1,222,3138,0.07074569789674952,92,Fundacion Universitaria Juan De Castellanos,Boyacá,Tunja
1105,2020-1,604,8520,0.07089201877934272,93,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
9905,2020-1,50,705,0.07092198581560284,94,Fundacion Escuela Tecnologica De Neiva - Jesus Oviedo Perez -Fet,Huila,Rivera
2832,2020-1,660,9282,0.07110536522301228,95,Universidad De Santander - Udes,Santander,Bucaramanga
1816,2020-1,298,4187,0.07117267733460712,96,Universidad Cooperativa De Colombia,Antioquia,Medellín
1114,2020-1,884,12217,0.07235818940820168,97,Universidad Surcolombiana,Huila,Neiva
1803,2020-1,795,10935,0.07270233196159122,98,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1716,2020-1,303,4144,0.07311776061776062,99,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1706,2020-1,402,5484,0.07330415754923414,100,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
9103,2020-1,31,422,0.07345971563981042,101,Escuela Militar De Aviacion Marco Fidel Suarez,Valle del Cauca,Santiago de Cali
1705,2020-1,376,5116,0.07349491790461297,102,Universidad Santo Tomas,Santander,Bucaramanga
1826,2020-1,1070,14533,0.07362554187022638,103,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1208,2020-1,947,12768,0.07416979949874687,104,Universidad Del Quindio,Quindío,Armenia
4837,2020-1,37,497,0.0744466800804829,105,"Corporacion Universitaria De Ciencias Empresariales, Educacion Y Salud -Unicorsalud-",Atlántico,Barranquilla
3102,2020-1,71,950,0.07473684210526316,106,Instituto Superior De Educacion Rural-Iser-,Norte de Santander,Pamplona
3817,2020-1,366,4731,0.07736207989854153,107,Corporacion Universitaria Autonoma De Nariño -Aunar-,Nariño,Pasto
1728,2020-1,593,7627,0.07775009833486299,108,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1835,2020-1,366,4697,0.07792207792207792,109,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1833,2020-1,634,8110,0.0781750924784217,110,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1708,2020-1,26,332,0.0783132530120482,111,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1717,2020-1,359,4563,0.07867630944554022,112,Universidad De San Buenaventura,Antioquia,Medellín
3204,2020-1,772,9804,0.07874337005303958,113,Tecnologico De Antioquia,Antioquia,Medellín
1709,2020-1,789,10014,0.07878969442780108,114,Universidad Central,Cundinamarca,"Bogotá, D.C."
1113,2020-1,1216,15409,0.07891491985203453,115,Universidad De Cordoba,Córdoba,Montería
1811,2020-1,90,1138,0.07908611599297012,116,Universidad Libre,Santander,Socorro
1207,2020-1,1209,15265,0.07920078611202096,117,Universidad Del Tolima,Tolima,Ibagué
1831,2020-1,483,6077,0.07948000658219516,118,Universidad De Ibague,Tolima,Ibagué
1806,2020-1,603,7583,0.07951997890017144,119,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1122,2020-1,212,2659,0.07972922151184655,120,Universidad Del Pacifico,Valle del Cauca,Buenaventura
2747,2020-1,340,4263,0.07975604034717335,121,Institución Universitaria Visión De Las Américas,Antioquia,Medellín
2829,2020-1,8224,102561,0.08018642563937559,122,Corporacion Universitaria Minuto De Dios -Uniminuto-,Cundinamarca,"Bogotá, D.C."
1203,2020-1,2094,26092,0.08025448413306761,123,Universidad Del Valle,Valle del Cauca,Santiago de Cali
2711,2020-1,216,2689,0.08032725920416511,124,Universidad Catolica De Pereira,Risaralda,Pereira
4110,2020-1,289,3561,0.08115697837686044,125,Instituto Tolimense De Formacion Tecnica Profesional,Tolima,Espinal
1805,2020-1,1099,13433,0.08181344450234497,126,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2733,2020-1,16,195,0.08205128205128205,127,Fundación Universitaria San Alfonso- Fusa-,Cundinamarca,"Bogotá, D.C."
1818,2020-1,2442,29416,0.08301604568942073,128,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1223,2020-1,22,264,0.08333333333333333,129,Universidad De Antioquia,Antioquia,Turbo
9116,2020-1,192,2297,0.08358728776665215,130,Fundacion Universitaria Claretiana - Uniclaretiana,Chocó,Quibdó
1120,2020-1,1063,12693,0.08374694713621682,131,Universidad Popular Del Cesar,Cesar,Valledupar
9127,2020-1,107,1277,0.08379013312451057,132,Corporacion Universitaria De Sabaneta - Unisabaneta,Antioquia,Sabaneta
2737,2020-1,392,4676,0.08383233532934131,133,Fundacion Universitaria Del Area Andina,Risaralda,Pereira
2713,2020-1,600,7142,0.08401008120974517,134,Fundacion Universitaria Los Libertadores,Cundinamarca,"Bogotá, D.C."
2709,2020-1,261,3105,0.08405797101449275,135,Fundacion Universitaria San Martin,Cundinamarca,"Bogotá, D.C."
1823,2020-1,814,9650,0.08435233160621762,136,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1205,2020-1,1377,16312,0.08441638057871506,137,Universidad De Cartagena,Bolívar,Cartagena de Indias
2815,2020-1,114,1350,0.08444444444444445,138,Corporacion Universitaria Adventista - Unac,Antioquia,Medellín
1834,2020-1,401,4742,0.0845634753268663,139,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1726,2020-1,405,4780,0.08472803347280335,140,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
3821,2020-1,207,2443,0.08473188702415063,141,Corporacion Universitaria Politecnico Costa Atlantica,Atlántico,Barranquilla
2841,2020-1,214,2505,0.08542914171656686,142,Corporacion Universitaria Minuto De Dios -Uniminuto-,Antioquia,Bello
1830,2020-1,807,9418,0.0856869823741771,143,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
2810,2020-1,1013,11816,0.08573121191604605,144,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1102,2020-1,895,10405,0.08601633829889477,145,Universidad Nacional De Colombia,Antioquia,Medellín
1814,2020-1,338,3925,0.08611464968152867,146,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1829,2020-1,116,1345,0.0862453531598513,147,Universidad Santiago De Cali,Valle del Cauca,Palmira
1817,2020-1,310,3592,0.08630289532293986,148,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1118,2020-1,819,9460,0.08657505285412262,149,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
4822,2020-1,169,1949,0.08671113391482811,150,Corporacion Escuela De Artes Y Letras,Cundinamarca,"Bogotá, D.C."
1810,2020-1,147,1689,0.08703374777975133,151,Universidad Libre,Norte de Santander,San José de Cúcuta
1704,2020-1,1499,17196,0.08717143521749245,152,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1734,2020-1,446,5054,0.08824693312227938,153,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
5801,2020-1,44,496,0.08870967741935484,154,Corporacion Escuela Tecnologica Del Oriente,Santander,Bucaramanga
1822,2020-1,107,1200,0.08916666666666667,155,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
2301,2020-1,341,3824,0.08917364016736401,156,Unidad Central Del Valle Del Cauca,Valle del Cauca,Tuluá
4811,2020-1,22,246,0.08943089430894309,157,Corporación Unificada Hispanoamericana De Educación Superior,Valle del Cauca,Santiago de Cali
3713,2020-1,194,2161,0.08977325312355391,158,Fundacion Universitaria Para El Desarrollo Humano - Uninpahu,Cundinamarca,"Bogotá, D.C."
4112,2020-1,30,333,0.09009009009009009,159,Colegio Integrado Nacional Oriente De Caldas - Ies Cinoc,Caldas,Pensilvania
2850,2020-1,399,4368,0.09134615384615384,160,Corporacion Universitaria Antonio Jose De Sucre - Corposucre,Sucre,Sincelejo
1719,2020-1,800,8723,0.0917115671214032,161,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1812,2020-1,827,8960,0.09229910714285716,162,Universidad De Medellin,Antioquia,Medellín
2724,2020-1,372,3950,0.09417721518987342,163,Fundacion Universitaria De San Gil - Unisangil -,Santander,San Gil
1733,2020-1,174,1845,0.0943089430894309,164,Universidad Sergio Arboleda,Magdalena,Santa Marta
2731,2020-1,441,4667,0.09449325048210842,165,Fundacion Universitaria Catolica Lumen Gentium - Unicatólica - Cali,Valle del Cauca,Santiago de Cali
9128,2020-1,73,772,0.09455958549222798,166,Lci - Fundacion Tecnologica,Cundinamarca,"Bogotá, D.C."
3703,2020-1,172,1816,0.0947136563876652,167,Institucion Universitaria Escolme,Antioquia,Medellín
2745,2020-1,687,7231,0.09500760614022956,168,Fundación Universitaria Compensar,Cundinamarca,"Bogotá, D.C."
9107,2020-1,53,547,0.09689213893967091,169,Escuela De Ingenieros Militares,Cundinamarca,"Bogotá, D.C."
2723,2020-1,325,3338,0.09736369083283404,170,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1222,2020-1,4,41,0.0975609756097561,171,Universidad De Antioquia,Antioquia,Puerto Berrío
2812,2020-1,631,6465,0.09760247486465584,172,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1819,2020-1,98,1004,0.09760956175298804,173,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2110,2020-1,500,5094,0.09815469179426776,174,Colegio Mayor De Antioquia,Antioquia,Medellín
3720,2020-1,166,1684,0.0985748218527316,175,Fundacion Universitaria Esumer,Antioquia,Medellín
3831,2020-1,247,2482,0.09951651893634166,176,Corporacion Universitaria Comfacauca - Unicomfacauca,Cauca,Popayán
1117,2020-1,1541,15463,0.09965724632994892,177,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
3301,2020-1,759,7610,0.09973718791064388,178,Institucion Universitaria Antonio Jose Camacho,Valle del Cauca,Santiago de Cali
9900,2020-1,90,900,0.1,179,Corporacion Universitaria U De Colombia,Antioquia,Medellín
2715,2020-1,632,6265,0.100877893056664,180,Fundacion Universitaria De Popayan,Cauca,Popayán
1832,2020-1,566,5597,0.101125603001608,181,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1201,2020-1,3058,30110,0.1015609432082365,182,Universidad De Antioquia,Antioquia,Medellín
1802,2020-1,226,2219,0.1018476791347454,183,Universidad La Gran Colombia,Quindío,Armenia
2209,2020-1,1361,13309,0.102261627470133,184,Politecnico Colombiano Jaime Isaza Cadavid,Antioquia,Medellín
3702,2020-1,31,303,0.1023102310231023,185,Fundacion Tecnologica Autonoma De Bogota-Faba-,Cundinamarca,"Bogotá, D.C."
3115,2020-1,223,2179,0.1023405231757687,186,Institución Universitaria Del Putumayo,Putumayo,Mocoa
4835,2020-1,35,339,0.1032448377581121,187,Corporacion Universitaria Taller Cinco Centro De Diseño,Cundinamarca,"Bogotá, D.C."
4108,2020-1,231,2232,0.103494623655914,188,Escuela Tecnologica Instituto Tecnico Central,Cundinamarca,"Bogotá, D.C."
2211,2020-1,132,1272,0.1037735849056604,189,Institucion Universitaria Bellas Artes Y Ciencias De Bolivar,Bolívar,Cartagena de Indias
2206,2020-1,82,788,0.1040609137055838,190,Instituto Departamental De Bellas Artes,Valle del Cauca,Santiago de Cali
2847,2020-1,710,6734,0.1054351054351054,191,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
2710,2020-1,176,1651,0.1066020593579649,192,Fundacion Universitaria Monserrate -Unimonserrate,Cundinamarca,"Bogotá, D.C."
2902,2020-1,16,150,0.1066666666666667,193,Escuela De Logistica,Cundinamarca,"Bogotá, D.C."
1123,2020-1,224,2096,0.1068702290076336,194,Universidad Popular Del Cesar,Cesar,Aguachica
9129,2020-1,163,1514,0.107661822985469,195,Fundacion Universitaria Cafam -Unicafam,Cundinamarca,"Bogotá, D.C."
2743,2020-1,189,1743,0.108433734939759,196,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1825,2020-1,511,4663,0.1095861033669312,197,Universidad Autonoma De Manizales,Caldas,Manizales
1301,2020-1,1792,16214,0.1105217713087455,198,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1804,2020-1,839,7526,0.1114802019665161,199,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2302,2020-1,421,3708,0.1135382955771305,200,Institucion Universitaria De Envigado,Antioquia,Envigado
2833,2020-1,2021,17627,0.1146536563226868,201,Corporacion Universitaria Remington,Antioquia,Medellín
2749,2020-1,403,3508,0.1148802736602052,202,Institucion Universitaria  Salazar Y Herrera,Antioquia,Medellín
9119,2020-1,1347,11680,0.1153253424657534,203,Corporacion Universitaria Americana,Atlántico,Barranquilla
2849,2020-1,308,2665,0.1155722326454034,204,Corporacion Universitaria Autonoma Del Cauca,Cauca,Popayán
1221,2020-1,17,146,0.1164383561643836,205,Universidad De Antioquia,Antioquia,Caucasia
4810,2020-1,165,1412,0.1168555240793201,206,Corporacion Universitaria Cenda,Cundinamarca,"Bogotá, D.C."
2740,2020-1,19,162,0.1172839506172839,207,Institucion Universitaria Colombo Americana - Unica,Cundinamarca,"Bogotá, D.C."
1220,2020-1,38,323,0.1176470588235294,208,Universidad De Antioquia,Antioquia,Andes
3706,2020-1,438,3707,0.1181548421904505,209,"Fundacion Centro Colombiano De Estudios Profesionales, -F.C.E.C.E.P.",Valle del Cauca,Santiago de Cali
2848,2020-1,339,2861,0.1184900384480951,210,Corporacion Universitaria  Unitec,Cundinamarca,"Bogotá, D.C."
3705,2020-1,1006,8468,0.1188001889466226,211,Fundacion Universitaria Tecnologico Comfenalco - Cartagena,Bolívar,Cartagena de Indias
3807,2020-1,30,250,0.12,212,Escuela De Tecnologias De Antioquia -Eta-,Antioquia,Medellín
2820,2020-1,166,1382,0.1201157742402316,213,Corporacion Universitaria Lasallista,Antioquia,Caldas
9906,2020-1,19,158,0.120253164556962,214,Corporación Universitaria Para El Desarrollo Empresarial Y Social - Misión Paz.,Valle del Cauca,Santiago de Cali
1202,2020-1,2393,19892,0.120299617936859,215,Universidad Del Atlantico,Atlántico,Puerto Colombia
5802,2020-1,2198,18080,0.121570796460177,216,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
2736,2020-1,18,148,0.1216216216216216,217,Fundacion Universitaria Seminario Biblico De Colombia - Fusbc,Antioquia,Medellín
4709,2020-1,165,1352,0.1220414201183432,218,Institucion Universitaria Eam,Quindío,Armenia
2905,2020-1,26,212,0.1226415094339623,219,Centro De Educacion Militar - Cemil,Cundinamarca,"Bogotá, D.C."
2827,2020-1,337,2724,0.1237151248164464,220,Corporacion Universitaria Del Meta - Unimeta,Meta,Villavicencio
4101,2020-1,324,2572,0.1259720062208398,221,Instituto De Educacion Tecnica Profesional De Roldanillo,Valle del Cauca,Roldanillo
2842,2020-1,202,1586,0.1273644388398487,222,Corporacion Universitaria Reformada - Cur -,Atlántico,Barranquilla
1735,2020-1,841,6586,0.1276951108411783,223,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
9922,2020-1,134,1047,0.1279847182425979,224,Fundacion Universitaria Comfamiliar Risaralda,Risaralda,Pereira
3303,2020-1,77,601,0.1281198003327787,225,Tecnológico De Artes Débora Arango Institución Redefinida,Antioquia,Envigado
2732,2020-1,388,2971,0.1305957590037025,226,Fundacion Universitaria Catolica Del Norte,Antioquia,Santa Rosa de Osos
2834,2020-1,834,6322,0.1319202783929136,227,Universitaria Agustiniana- Uniagustiniana,Cundinamarca,"Bogotá, D.C."
2818,2020-1,121,913,0.1325301204819277,228,Corporacion Universitaria De Santa Rosa De Cabal-Unisarc-,Risaralda,Santa Rosa de Cabal
2823,2020-1,1340,10026,0.1336525034909236,229,Corporacion Universitaria Del Caribe - Cecar,Sucre,Sincelejo
1801,2020-1,1295,9686,0.1336981209993806,230,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
2207,2020-1,497,3691,0.1346518558656191,231,Instituto Universitario De La Paz,Santander,Barrancabermeja
3718,2020-1,189,1391,0.1358734723220704,232,Fundacion De Estudios Superiores Comfanorte -F.E.S.C.-,Norte de Santander,San José de Cúcuta
3107,2020-1,871,6405,0.1359875097580016,233,Institución Universitaria Pascual Bravo,Antioquia,Medellín
4701,2020-1,270,1983,0.1361573373676248,234,Fundacion Academia De Dibujo Profesional,Valle del Cauca,Santiago de Cali
1218,2020-1,1897,13880,0.136671469740634,235,Universidad De La Guajira,La Guajira,Riohacha
2837,2020-1,670,4874,0.1374640951990152,236,Corporacion Universitaria Republicana,Cundinamarca,"Bogotá, D.C."
9902,2020-1,42,303,0.1386138613861386,237,Fundacion Universitaria Comfenalco Santander,Santander,Bucaramanga
3812,2020-1,67,482,0.1390041493775934,238,Institucion Universitaria Marco Fidel Suarez - Iumafis,Antioquia,Bello
3801,2020-1,67,481,0.1392931392931393,239,Corporacion De Estudios Tecnologicos Del Norte Del Valle,Valle del Cauca,Cartago
9120,2020-1,93,667,0.1394302848575712,240,Fundacion Universitaria Bellas Artes,Antioquia,Medellín
3811,2020-1,42,300,0.14,241,Corporacion De Educacion Del Norte Del Tolima - Coreducacion,Tolima,Honda
2824,2020-1,31,221,0.1402714932126697,242,Corporacion Universitaria De Colombia Ideas,Cundinamarca,"Bogotá, D.C."
2738,2020-1,158,1122,0.1408199643493761,243,Fundacion Universitaria Empresarial De La Camara De Comercio De Bogota- Uniempresarial,Cundinamarca,"Bogotá, D.C."
9913,2020-1,924,6374,0.1449639159083778,244,Corporacion Universitaria De Asturias,Cundinamarca,"Bogotá, D.C."
2725,2020-1,7427,50373,0.1474400968772954,245,Politecnico Grancolombiano,Cundinamarca,"Bogotá, D.C."
3715,2020-1,177,1196,0.1479933110367893,246,Fundacion Tecnologica Autonoma Del Pacifico,Valle del Cauca,Santiago de Cali
2748,2020-1,56,374,0.1497326203208556,247,Fundacion Universitaria Seminario Teologico Bautista Internacional,Valle del Cauca,Santiago de Cali
2831,2020-1,419,2793,0.1500179018976011,248,Corporacion Universitaria De Ciencia Y Desarrollo - Uniciencia,Cundinamarca,"Bogotá, D.C."
9121,2020-1,338,2226,0.1518418688230009,249,Fundacion Universitaria Colombo Internacional - Unicolombo,Bolívar,Cartagena de Indias
3302,2020-1,3264,21041,0.1551257069530916,250,Institucion Universitaria - Itm,Antioquia,Medellín
3201,2020-1,2453,15767,0.1555781061711169,251,Unidades Tecnologicas De Santander,Santander,Bucaramanga
4818,2020-1,743,4745,0.1565858798735511,252,Corporacion Universitaria Latinoamericana - Cul,Atlántico,Barranquilla
2728,2020-1,3371,21406,0.157479211436046,253,Fundacion Universitaria Del Area Andina,Cundinamarca,"Bogotá, D.C."
4721,2020-1,133,839,0.1585220500595947,254,Fundacion Universitaria Horizonte,Cundinamarca,"Bogotá, D.C."
2830,2020-1,1562,9824,0.1589983713355049,255,Corporacion Universitaria Iberoamericana,Cundinamarca,"Bogotá, D.C."
2727,2020-1,737,4616,0.1596620450606586,256,Fundacion Universitaria-Ceipa-,Antioquia,Sabaneta
3820,2020-1,24,144,0.1666666666666667,257,Corporacion Academia Tecnologica De Colombia -Atec-,Antioquia,Medellín
4726,2020-1,745,4440,0.1677927927927928,258,Fundacion Universitaria San Mateo - San Mateo Educacion Superior,Cundinamarca,"Bogotá, D.C."
3719,2020-1,87,515,0.1689320388349514,259,Institucion Universitaria Latina - Unilatina,Cundinamarca,"Bogotá, D.C."
1219,2020-1,63,372,0.1693548387096774,260,Universidad De Antioquia,Antioquia,El Carmen de Viboral
4111,2020-1,118,669,0.1763826606875934,261,Institución Universitaria Del Caribe,Magdalena,Ciénaga
2739,2020-1,56,317,0.1766561514195584,262,Fundacion De Estudios Superiores Universitarios De Uraba Antonio Roldan Betancur,Antioquia,Apartadó
4106,2020-1,19,106,0.1792452830188679,263,Instituto Nacional De Formacion Tecnica Profesional De San Andres Y Providencia - Infotep,"Archipiélago de San Andrés, Providencia y Santa Catalina",San Andrés
2102,2020-1,11794,65796,0.1792510182989847,264,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
9914,2020-1,45,251,0.1792828685258964,265,"Eseit - Escuela Superior De Empresa, Ingeniería Y Tecnología",Cundinamarca,"Bogotá, D.C."
3806,2020-1,63,351,0.1794871794871795,266,Corporacion Escuela Superior De Administracion Y Estudios Tecnologicos- Eae,Valle del Cauca,Santiago de Cali
2836,2020-1,88,484,0.1818181818181818,267,Corporacion Universitaria Empresarial De Salamanca,Atlántico,Barranquilla
4719,2020-1,59,318,0.1855345911949685,268,Fundacion De Educacion Superior Nueva America,Cundinamarca,"Bogotá, D.C."
3819,2020-1,172,897,0.1917502787068004,269,Corporacion Tecnologica Industrial Colombiana - Teinco,Cundinamarca,"Bogotá, D.C."
3826,2020-1,81,412,0.1966019417475728,270,Corporacion Internacional Para El Desarrollo Educativo -Cide-,Cundinamarca,"Bogotá, D.C."
4825,2020-1,116,588,0.1972789115646258,271,Corporacion Instituto De Administracion Y Finanzas - Ciaf,Risaralda,Pereira
4806,2020-1,2,10,0.2,272,Corporacion Centro De Estudios Artisticos Y Tecnicos-Ceart-,Cundinamarca,"Bogotá, D.C."
9904,2020-1,366,1773,0.2064297800338409,273,Fundacion Universitaria Colombo Germana,Cundinamarca,"Bogotá, D.C."
3828,2020-1,11,53,0.2075471698113208,274,Corporación Tecnológica De Educación Superior Sapienza - Cte,Cundinamarca,"Bogotá, D.C."
3710,2020-1,667,3153,0.2115445607358072,275,Fundacion Universitaria Antonio De Arevalo - Unitecnar,Bolívar,Cartagena de Indias
4702,2020-1,412,1902,0.2166140904311251,276,Fundacion De Educacion Superior San Jose -Fessanjose-,Cundinamarca,"Bogotá, D.C."
3810,2020-1,43,198,0.2171717171717172,277,Corporacion Educativa -Itae-,Santander,Bucaramanga
4102,2020-1,98,424,0.2311320754716981,278,Instituto Nacional De Formacion Tecnica Profesional De San Juan Del Cesar,La Guajira,San Juan del Cesar
3725,2020-1,76,326,0.2331288343558282,279,Fundacion De Educacion Superior Alberto Merani,Cundinamarca,"Bogotá, D.C."
3803,2020-1,235,999,0.2352352352352352,280,Corporacion Universitaria Centro Superior - Unicuces,Valle del Cauca,Santiago de Cali
3716,2020-1,134,566,0.2367491166077738,281,Tecnologica Fitec,Santander,Bucaramanga
9126,2020-1,75,315,0.2380952380952381,282,Corporacion Tecnologica Indoamerica,Atlántico,Barranquilla
4801,2020-1,65,272,0.2389705882352941,283,Corporacion Academia Superior De Artes,Antioquia,Medellín
9131,2020-1,74,306,0.2418300653594771,284,Fundación Universitaria Cervantes San Agustín - Unicervantes,Cundinamarca,"Bogotá, D.C."
4808,2020-1,93,380,0.2447368421052632,285,Corporacion Regional De Educacion Superior-Cres-De Cali,Valle del Cauca,Santiago de Cali
4826,2020-1,1,4,0.25,286,Corporacion Universitaria Regional Del Caribe -Iafic-,Bolívar,Cartagena de Indias
3808,2020-1,67,266,0.2518796992481203,287,Corporacion Tecnologica De Bogota - Ctb,Cundinamarca,"Bogotá, D.C."
4107,2020-1,253,1002,0.2524950099800399,288,Unidad Técnica Para El Desarrollo Profesional - Utedé,Valle del Cauca,Guadalajara de Buga
1725,2020-1,972,3779,0.2572109023551204,289,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
3117,2020-1,1197,4480,0.2671875,290,Institución Universitaria De Barranquilla - Iub,Atlántico,Barranquilla
4829,2020-1,12,44,0.2727272727272727,291,Corporacion Interamericana De Educacion Superior-Corpocides,Santander,Bucaramanga
4109,2020-1,279,979,0.2849846782431052,292,Instituto Tecnico Nacional De Comercio Simon Rodriguez - Intenalco,Valle del Cauca,Santiago de Cali
4727,2020-1,1899,6529,0.290856180119467,293,Politecnico Internacional Institucion De Educacion Superior,Cundinamarca,"Bogotá, D.C."
1703,2020-1,520,1648,0.3155339805825243,294,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
4832,2020-1,120,380,0.3157894736842105,295,Corporacion Instituto Superior De Educacion Social-Ises-,Cundinamarca,"Bogotá, D.C."
9927,2020-1,94,295,0.3186440677966101,296,Institucion Universitaria Digital De Antioquia -Iu. Digital,Antioquia,Medellín
4817,2020-1,130,399,0.3258145363408521,297,Corporacion De Educación Superior Del Litoral,Atlántico,Barranquilla
4803,2020-1,11,33,0.3333333333333333,298,Corporacion Politecnico Colombo Andino,Cundinamarca,"Bogotá, D.C."
4714,2020-1,26,72,0.3611111111111111,299,Fundacion Interamericana Tecnica-Fit-,Cundinamarca,"Bogotá, D.C."
2901,2020-1,28,73,0.3835616438356164,300,Escuela De Inteligencia Y Contrainteligencia Brigadier General Ricardo Charry Solano,Cundinamarca,"Bogotá, D.C."
9117,2020-1,9,22,0.4090909090909091,301,Escuela Internacional De Estudios Superiores - Inter,Cundinamarca,"Bogotá, D.C."
9915,2020-1,407,876,0.4646118721461187,302,Universitaria Virtual Internacional,Cundinamarca,"Bogotá, D.C."
9926,2020-1,76,136,0.5588235294117647,303,Fundacion Universitaria Internacional De La Rioja - Unir,Cundinamarca,"Bogotá, D.C."
3822,2020-1,14,23,0.6086956521739131,304,Politecnico Icaft,Cundinamarca,"Bogotá, D.C."
3827,2020-1,55,86,0.6395348837209303,305,Politecnico Santafe De Bogota,Cundinamarca,"Bogotá, D.C."
9929,2020-1,506,764,0.662303664921466,306,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
9899,2020-1,704,856,0.822429906542056,307,Institucion Universitaria De Colombia - Universitaria De Colombia,Cundinamarca,"Bogotá, D.C."
9903,2020-1,173,175,0.9885714285714284,308,Corporación Colsubsidio Educación Tecnológica - Cet,Cundinamarca,"Bogotá, D.C."
3830,2020-1,320,320,1.0,309,Corporacion Universal De Investigacion Y Tecnologia -Coruniversitec-,Cundinamarca,"Bogotá, D.C."
4812,2020-1,7,7,1.0,310,Corporacion De Educacion Superior Suramerica,Cundinamarca,"Bogotá, D.C."
`;

export const RAW_CSV_UNIVERSIDADES = `IES,CARÁCTER_ACADÉMICO,Periodo,Desertores,Matriculados,% Deserción,Ranking,NOMBRE_INSTITUCIÓN,DEPARTAMENTO_IES,MUNICIPIO_IES
1824,Universidad,2024-2,112,4584,0.02443280977312391,1,Universidad Metropolitana,Atlántico,Barranquilla
1711,Universidad,2024-2,237,8981,0.02638904353635453,2,Universidad De La Sabana,Cundinamarca,Chía
1813,Universidad,2024-2,399,13156,0.03032836728488902,3,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1113,Universidad,2024-2,456,13753,0.03315640223951138,4,Universidad De Cordoba,Córdoba,Montería
1107,Universidad,2024-2,89,2684,0.03315946348733234,5,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1828,Universidad,2024-2,173,5054,0.03423031262366442,6,Universidad Icesi,Valle del Cauca,Santiago de Cali
1217,Universidad,2024-2,228,5974,0.0381653833277536,7,Universidad De Sucre,Sucre,Sincelejo
1108,Universidad,2024-2,133,3290,0.04042553191489362,8,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1712,Universidad,2024-2,315,7770,0.04054054054054054,9,Universidad Eafit-,Antioquia,Medellín
2813,Universidad,2024-2,81,1906,0.04249737670514166,10,Universidad Eia,Antioquia,Envigado
1701,Universidad,2024-2,688,16005,0.0429865666979069,11,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Universidad,2024-2,1193,27130,0.04397346111315886,12,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1713,Universidad,2024-2,469,10623,0.04414948696225172,13,Universidad Del Norte,Atlántico,Barranquilla
1702,Universidad,2024-2,282,6361,0.04433265209872662,14,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1714,Universidad,2024-2,380,7991,0.04755349768489551,15,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1210,Universidad,2024-2,254,5298,0.04794261985654964,16,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1727,Universidad,2024-2,174,3600,0.04833333333333333,17,Universidad Pontificia Bolivariana,Córdoba,Montería
1110,Universidad,2024-2,683,13893,0.04916144821132944,18,Universidad Del Cauca,Cauca,Popayán
1833,Universidad,2024-2,441,8942,0.04931782598971148,19,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1206,Universidad,2024-2,659,13272,0.0496534056660639,20,Universidad De Nariño,Nariño,Pasto
1829,Universidad,2024-2,102,2043,0.04992657856093979,21,Universidad Santiago De Cali,Valle del Cauca,Palmira
2708,Universidad,2024-2,226,4502,0.05019991115059973,22,Universidad Ces,Antioquia,Medellín
1215,Universidad,2024-2,80,1539,0.05198180636777128,23,Universidad De Cundinamarca,Cundinamarca,Girardot
2805,Universidad,2024-2,822,15411,0.05333852443060152,24,Universidad Simon Bolivar,Atlántico,Barranquilla
9933,Universidad,2024-2,67,1239,0.05407586763518967,25,Universidad Nacional De Colombia,Cesar,La Paz
2811,Universidad,2024-2,188,3457,0.05438241249638415,26,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1209,Universidad,2024-2,787,14369,0.05477068689539982,27,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1212,Universidad,2024-2,1168,21243,0.05498281786941581,28,Universidad De Pamplona,Norte de Santander,Pamplona
1106,Universidad,2024-2,1139,20512,0.05552847113884556,29,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1121,Universidad,2024-2,363,6500,0.05584615384615384,30,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1104,Universidad,2024-2,147,2593,0.05669109139992287,31,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1216,Universidad,2024-2,32,557,0.05745062836624776,32,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1835,Universidad,2024-2,269,4635,0.05803667745415318,33,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1715,Universidad,2024-2,111,1869,0.0593900481540931,34,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1820,Universidad,2024-2,218,3657,0.05961170358217118,35,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1826,Universidad,2024-2,766,12687,0.06037676361630015,36,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1119,Universidad,2024-2,426,7016,0.06071835803876853,37,Universidad De Los Llanos,Meta,Villavicencio
1105,Universidad,2024-2,498,8189,0.06081328611552082,38,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1827,Universidad,2024-2,108,1771,0.06098249576510446,39,Universidad Catolica De Manizales,Caldas,Manizales
1109,Universidad,2024-2,43,705,0.06099290780141844,40,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1720,Universidad,2024-2,380,6103,0.06226446010158938,41,Universidad Mariana,Nariño,Pasto
1730,Universidad,2024-2,23,369,0.06233062330623306,42,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1819,Universidad,2024-2,26,417,0.06235011990407674,43,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2719,Universidad,2024-2,785,12540,0.06259968102073366,44,Universidad Católica Luis Amigó,Antioquia,Medellín
1832,Universidad,2024-2,309,4817,0.06414780984014946,45,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
2743,Universidad,2024-2,174,2662,0.06536438767843726,46,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1807,Universidad,2024-2,288,4297,0.0670235047707703,47,Universidad Libre,Valle del Cauca,Santiago de Cali
1732,Universidad,2024-2,246,3657,0.06726825266611977,48,Universidad Santo Tomas,Boyacá,Tunja
1707,Universidad,2024-2,370,5498,0.0672971989814478,49,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1204,Universidad,2024-2,1362,20229,0.06732908201097434,50,Universidad Industrial De Santander,Santander,Bucaramanga
1214,Universidad,2024-2,647,9577,0.0675576902996763,51,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1816,Universidad,2024-2,260,3832,0.06784968684759916,52,Universidad Cooperativa De Colombia,Antioquia,Medellín
1103,Universidad,2024-2,313,4612,0.06786643538594969,53,Universidad Nacional De Colombia,Caldas,Manizales
1817,Universidad,2024-2,229,3314,0.06910078455039227,54,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1724,Universidad,2024-2,269,3866,0.06958096223486808,55,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
2744,Universidad,2024-2,392,5595,0.07006255585344057,56,Universidad Cesmag - Unicesmag,Nariño,Pasto
1218,Universidad,2024-2,1070,15099,0.07086562023975097,57,Universidad De La Guajira,La Guajira,Riohacha
2711,Universidad,2024-2,160,2247,0.07120605251446373,58,Universidad Catolica De Pereira,Risaralda,Pereira
1709,Universidad,2024-2,422,5922,0.0712597095575819,59,Universidad Central,Cundinamarca,"Bogotá, D.C."
1710,Universidad,2024-2,631,8817,0.07156629238970172,60,Universidad Pontificia Bolivariana,Antioquia,Medellín
2832,Universidad,2024-2,686,9565,0.07171981181390485,61,Universidad De Santander - Udes,Santander,Bucaramanga
1834,Universidad,2024-2,402,5582,0.07201719813686851,62,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1723,Universidad,2024-2,246,3414,0.07205623901581722,63,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1830,Universidad,2024-2,464,6382,0.07270448135380758,64,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1118,Universidad,2024-2,918,12612,0.07278782112274025,65,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
9122,Universidad,2024-2,38,519,0.07321772639691715,66,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1207,Universidad,2024-2,1660,22521,0.07370898272723236,67,Universidad Del Tolima,Tolima,Ibagué
1112,Universidad,2024-2,979,12897,0.075909126153369,68,Universidad De Caldas,Caldas,Manizales
1831,Universidad,2024-2,328,4256,0.07706766917293233,69,Universidad De Ibague,Tolima,Ibagué
1729,Universidad,2024-2,779,10020,0.07774451097804391,70,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
9929,Universidad,2024-2,57,733,0.07776261937244201,71,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1809,Universidad,2024-2,203,2610,0.07777777777777778,72,Universidad Libre,Risaralda,Pereira
1205,Universidad,2024-2,1604,20525,0.07814859926918392,73,Universidad De Cartagena,Bolívar,Cartagena de Indias
1114,Universidad,2024-2,1064,13555,0.07849502028771671,74,Universidad Surcolombiana,Huila,Neiva
1115,Universidad,2024-2,593,7452,0.07957595276435857,75,Universidad De La Amazonia,Caquetá,Florencia
1805,Universidad,2024-2,1425,17886,0.07967125125796712,76,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1213,Universidad,2024-2,1917,23991,0.07990496436163562,77,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1203,Universidad,2024-2,2420,30240,0.08002645502645503,78,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1734,Universidad,2024-2,378,4717,0.08013567945728217,79,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1812,Universidad,2024-2,457,5528,0.08267004341534008,80,Universidad De Medellin,Antioquia,Medellín
1733,Universidad,2024-2,180,2165,0.08314087759815242,81,Universidad Sergio Arboleda,Magdalena,Santa Marta
1803,Universidad,2024-2,606,7200,0.08416666666666667,82,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1208,Universidad,2024-2,1258,14827,0.0848452148108181,83,Universidad Del Quindio,Quindío,Armenia
2810,Universidad,2024-2,960,11304,0.08492569002123142,84,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1818,Universidad,2024-2,1743,20478,0.08511573395839438,85,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1223,Universidad,2024-2,41,481,0.08523908523908524,86,Universidad De Antioquia,Antioquia,Turbo
1717,Universidad,2024-2,244,2839,0.08594575554772807,87,Universidad De San Buenaventura,Antioquia,Medellín
1808,Universidad,2024-2,414,4807,0.0861244019138756,88,Universidad Libre,Atlántico,Barranquilla
9105,Universidad,2024-2,63,729,0.08641975308641975,89,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1202,Universidad,2024-2,1683,19474,0.08642292287152101,90,Universidad Del Atlantico,Atlántico,Puerto Colombia
1111,Universidad,2024-2,1233,14202,0.08681875792141952,91,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1117,Universidad,2024-2,1384,15839,0.08737925374076647,92,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1728,Universidad,2024-2,581,6642,0.08747365251430292,93,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1823,Universidad,2024-2,660,7354,0.08974707642099537,94,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1716,Universidad,2024-2,347,3856,0.0899896265560166,95,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1718,Universidad,2024-2,229,2535,0.0903353057199211,96,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2024-2,446,4911,0.090816534310731,97,Universidad De Manizales,Caldas,Manizales
1706,Universidad,2024-2,450,4951,0.09089072914562717,98,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1825,Universidad,2024-2,277,3039,0.09114840408028956,99,Universidad Autonoma De Manizales,Caldas,Manizales
1822,Universidad,2024-2,85,930,0.0913978494623656,100,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1102,Universidad,2024-2,986,10735,0.09184909175593851,101,Universidad Nacional De Colombia,Antioquia,Medellín
1219,Universidad,2024-2,29,314,0.09235668789808917,102,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1726,Universidad,2024-2,366,3812,0.09601259181532004,103,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1815,Universidad,2024-2,322,3318,0.0970464135021097,104,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1704,Universidad,2024-2,1214,12492,0.09718219660582772,105,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1201,Universidad,2024-2,3167,31870,0.09937245058048322,106,Universidad De Antioquia,Antioquia,Medellín
1120,Universidad,2024-2,1219,12258,0.09944526023821178,107,Universidad Popular Del Cesar,Cesar,Valledupar
1814,Universidad,2024-2,258,2580,0.1,108,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1705,Universidad,2024-2,462,4544,0.1016725352112676,109,Universidad Santo Tomas,Santander,Bucaramanga
1804,Universidad,2024-2,561,5379,0.1042944785276074,110,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2812,Universidad,2024-2,900,8383,0.1073601336037218,111,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1719,Universidad,2024-2,622,5719,0.1087602727749607,112,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
2847,Universidad,2024-2,649,5897,0.1100559606579617,113,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1806,Universidad,2024-2,737,6498,0.113419513696522,114,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1802,Universidad,2024-2,219,1917,0.1142410015649452,115,Universidad La Gran Colombia,Quindío,Armenia
1122,Universidad,2024-2,333,2870,0.1160278745644599,116,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1801,Universidad,2024-2,730,6203,0.1176849911333226,117,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1123,Universidad,2024-2,314,2549,0.123185562965869,118,Universidad Popular Del Cesar,Cesar,Aguachica
5802,Universidad,2024-2,2029,16106,0.1259778964361108,119,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1735,Universidad,2024-2,791,6163,0.1283465844556223,120,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1811,Universidad,2024-2,93,702,0.1324786324786325,121,Universidad Libre,Santander,Socorro
2102,Universidad,2024-2,17971,135593,0.1325363403715531,122,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1301,Universidad,2024-2,2906,20725,0.1402171290711701,123,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1810,Universidad,2024-2,196,1384,0.1416184971098266,124,Universidad Libre,Norte de Santander,San José de Cúcuta
1703,Universidad,2024-2,210,698,0.3008595988538682,125,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
1824,Universidad,2024-1,110,4639,0.02371200689803837,1,Universidad Metropolitana,Atlántico,Barranquilla
1813,Universidad,2024-1,310,12665,0.02447690485590209,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1108,Universidad,2024-1,92,3513,0.02618844292627384,3,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1828,Universidad,2024-1,140,4973,0.02815202091292982,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
1711,Universidad,2024-1,274,9280,0.02952586206896552,5,Universidad De La Sabana,Cundinamarca,Chía
1113,Universidad,2024-1,441,14396,0.03063350930814115,6,Universidad De Cordoba,Córdoba,Montería
2813,Universidad,2024-1,65,1873,0.03470368392952482,7,Universidad Eia,Antioquia,Envigado
1827,Universidad,2024-1,63,1807,0.03486441615938018,8,Universidad Catolica De Manizales,Caldas,Manizales
1107,Universidad,2024-1,106,3015,0.0351575456053068,9,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1713,Universidad,2024-1,407,10924,0.03725741486634932,10,Universidad Del Norte,Atlántico,Barranquilla
1109,Universidad,2024-1,32,788,0.04060913705583756,11,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1701,Universidad,2024-1,672,16225,0.04141756548536209,12,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1217,Universidad,2024-1,251,6014,0.04173594945128035,13,Universidad De Sucre,Sucre,Sincelejo
1835,Universidad,2024-1,190,4455,0.04264870931537598,14,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1112,Universidad,2024-1,528,12116,0.04357873885770881,15,Universidad De Caldas,Caldas,Manizales
1716,Universidad,2024-1,171,3885,0.04401544401544401,16,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1727,Universidad,2024-1,176,3686,0.04774823657080846,17,Universidad Pontificia Bolivariana,Córdoba,Montería
1210,Universidad,2024-1,261,5447,0.04791628419313383,18,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1712,Universidad,2024-1,397,8124,0.04886755292959134,19,Universidad Eafit-,Antioquia,Medellín
1206,Universidad,2024-1,678,13849,0.04895660336486389,20,Universidad De Nariño,Nariño,Pasto
1720,Universidad,2024-1,304,6133,0.04956791129952715,21,Universidad Mariana,Nariño,Pasto
2708,Universidad,2024-1,232,4635,0.05005393743257821,22,Universidad Ces,Antioquia,Medellín
1829,Universidad,2024-1,107,2127,0.05030559473436765,23,Universidad Santiago De Cali,Valle del Cauca,Palmira
1215,Universidad,2024-1,81,1606,0.05043586550435866,24,Universidad De Cundinamarca,Cundinamarca,Girardot
1811,Universidad,2024-1,37,732,0.05054644808743169,25,Universidad Libre,Santander,Socorro
1702,Universidad,2024-1,335,6339,0.05284745227953936,26,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1808,Universidad,2024-1,261,4924,0.05300568643379366,27,Universidad Libre,Atlántico,Barranquilla
9933,Universidad,2024-1,64,1202,0.05324459234608985,28,Universidad Nacional De Colombia,Cesar,La Paz
1101,Universidad,2024-1,1485,27734,0.05354438595226076,29,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1106,Universidad,2024-1,1147,21239,0.05400442582042469,30,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1213,Universidad,2024-1,1295,23723,0.05458837415166716,31,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
2805,Universidad,2024-1,868,15880,0.05465994962216625,32,Universidad Simon Bolivar,Atlántico,Barranquilla
2832,Universidad,2024-1,527,9604,0.05487296959600167,33,Universidad De Santander - Udes,Santander,Bucaramanga
1119,Universidad,2024-1,376,6778,0.0554735910298023,34,Universidad De Los Llanos,Meta,Villavicencio
1121,Universidad,2024-1,372,6460,0.05758513931888545,35,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1724,Universidad,2024-1,228,3940,0.05786802030456853,36,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1707,Universidad,2024-1,313,5396,0.05800593031875463,37,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1730,Universidad,2024-1,22,378,0.0582010582010582,38,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
2811,Universidad,2024-1,208,3563,0.05837777154083637,39,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1110,Universidad,2024-1,830,14138,0.05870703069741123,40,Universidad Del Cauca,Cauca,Popayán
1832,Universidad,2024-1,301,5089,0.05914718019257222,41,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1706,Universidad,2024-1,298,5015,0.05942173479561316,42,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1826,Universidad,2024-1,780,12969,0.06014341892204488,43,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1105,Universidad,2024-1,517,8415,0.06143790849673202,44,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1807,Universidad,2024-1,271,4389,0.06174527227158806,45,Universidad Libre,Valle del Cauca,Santiago de Cali
1714,Universidad,2024-1,538,8530,0.0630715123094959,46,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1212,Universidad,2024-1,1393,21776,0.0639695077149155,47,Universidad De Pamplona,Norte de Santander,Pamplona
1833,Universidad,2024-1,586,9063,0.06465850159991172,48,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1214,Universidad,2024-1,649,9925,0.0653904282115869,49,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1710,Universidad,2024-1,604,9195,0.0656878738444807,50,Universidad Pontificia Bolivariana,Antioquia,Medellín
2719,Universidad,2024-1,868,13090,0.06631016042780749,51,Universidad Católica Luis Amigó,Antioquia,Medellín
1115,Universidad,2024-1,537,8055,0.06666666666666667,52,Universidad De La Amazonia,Caquetá,Florencia
1104,Universidad,2024-1,173,2595,0.06666666666666667,53,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1203,Universidad,2024-1,2078,30913,0.06722091029663896,54,Universidad Del Valle,Valle del Cauca,Santiago de Cali
2744,Universidad,2024-1,394,5748,0.0685455810716771,55,Universidad Cesmag - Unicesmag,Nariño,Pasto
2711,Universidad,2024-1,162,2355,0.06878980891719745,56,Universidad Catolica De Pereira,Risaralda,Pereira
1216,Universidad,2024-1,40,580,0.06896551724137931,57,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1715,Universidad,2024-1,143,2063,0.06931652932622395,58,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2024-1,359,5105,0.0703232125367287,59,Universidad De Manizales,Caldas,Manizales
1723,Universidad,2024-1,261,3705,0.07044534412955465,60,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1209,Universidad,2024-1,1074,15125,0.07100826446280992,61,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1709,Universidad,2024-1,456,6409,0.0711499453892963,62,Universidad Central,Cundinamarca,"Bogotá, D.C."
1223,Universidad,2024-1,28,393,0.07124681933842239,63,Universidad De Antioquia,Antioquia,Turbo
1204,Universidad,2024-1,1412,19787,0.0713599838277657,64,Universidad Industrial De Santander,Santander,Bucaramanga
1103,Universidad,2024-1,338,4730,0.07145877378435518,65,Universidad Nacional De Colombia,Caldas,Manizales
1809,Universidad,2024-1,199,2750,0.07236363636363637,66,Universidad Libre,Risaralda,Pereira
1831,Universidad,2024-1,331,4552,0.07271528998242531,67,Universidad De Ibague,Tolima,Ibagué
1834,Universidad,2024-1,411,5647,0.07278200814591819,68,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1805,Universidad,2024-1,1297,17805,0.07284470654310587,69,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1817,Universidad,2024-1,238,3267,0.07284970921334558,70,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1820,Universidad,2024-1,277,3770,0.07347480106100795,71,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1207,Universidad,2024-1,1661,22569,0.0735965262085161,72,Universidad Del Tolima,Tolima,Ibagué
1120,Universidad,2024-1,918,12360,0.07427184466019418,73,Universidad Popular Del Cesar,Cesar,Valledupar
1732,Universidad,2024-1,294,3887,0.0756367378440957,74,Universidad Santo Tomas,Boyacá,Tunja
1729,Universidad,2024-1,779,10256,0.07595553822152887,75,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
9122,Universidad,2024-1,44,577,0.07625649913344887,76,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1114,Universidad,2024-1,1043,13600,0.07669117647058823,77,Universidad Surcolombiana,Huila,Neiva
1218,Universidad,2024-1,1163,15002,0.07752299693374216,78,Universidad De La Guajira,La Guajira,Riohacha
1816,Universidad,2024-1,301,3871,0.07775768535262206,79,Universidad Cooperativa De Colombia,Antioquia,Medellín
1705,Universidad,2024-1,367,4675,0.07850267379679145,80,Universidad Santo Tomas,Santander,Bucaramanga
1825,Universidad,2024-1,265,3363,0.07879869164436515,81,Universidad Autonoma De Manizales,Caldas,Manizales
1734,Universidad,2024-1,379,4794,0.07905715477680433,82,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1718,Universidad,2024-1,187,2308,0.08102253032928942,83,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1806,Universidad,2024-1,522,6327,0.08250355618776671,84,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1819,Universidad,2024-1,37,444,0.08333333333333333,85,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1205,Universidad,2024-1,1710,20494,0.08343905533326827,86,Universidad De Cartagena,Bolívar,Cartagena de Indias
1818,Universidad,2024-1,1765,21117,0.08358194819339869,87,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1202,Universidad,2024-1,1662,19859,0.08369001460295081,88,Universidad Del Atlantico,Atlántico,Puerto Colombia
1815,Universidad,2024-1,291,3463,0.08403118683222639,89,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1733,Universidad,2024-1,192,2255,0.08514412416851441,90,Universidad Sergio Arboleda,Magdalena,Santa Marta
1812,Universidad,2024-1,519,6029,0.08608392768286614,91,Universidad De Medellin,Antioquia,Medellín
1219,Universidad,2024-1,27,313,0.08626198083067092,92,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1726,Universidad,2024-1,356,4092,0.08699902248289346,93,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
9105,Universidad,2024-1,75,857,0.08751458576429405,94,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1728,Universidad,2024-1,617,7050,0.0875177304964539,95,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1810,Universidad,2024-1,125,1423,0.08784258608573436,96,Universidad Libre,Norte de Santander,San José de Cúcuta
1830,Universidad,2024-1,567,6438,0.08807082945013979,97,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1803,Universidad,2024-1,649,7345,0.08835942818243703,98,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1208,Universidad,2024-1,1322,14913,0.08864748876818883,99,Universidad Del Quindio,Quindío,Armenia
2743,Universidad,2024-1,226,2540,0.08897637795275591,100,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1118,Universidad,2024-1,1227,13786,0.08900333671840999,101,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1111,Universidad,2024-1,1282,14141,0.09065836928081464,102,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1719,Universidad,2024-1,566,6205,0.0912167606768735,103,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1823,Universidad,2024-1,696,7612,0.09143457698370994,104,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1822,Universidad,2024-1,84,915,0.0918032786885246,105,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1717,Universidad,2024-1,277,3017,0.09181305933046072,106,Universidad De San Buenaventura,Antioquia,Medellín
1117,Universidad,2024-1,1511,16233,0.0930819934700918,107,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1122,Universidad,2024-1,247,2597,0.09510974201001156,108,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1802,Universidad,2024-1,198,1966,0.1007121057985758,109,Universidad La Gran Colombia,Quindío,Armenia
5802,Universidad,2024-1,1702,16598,0.1025424749969876,110,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1814,Universidad,2024-1,292,2808,0.103988603988604,111,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2812,Universidad,2024-1,879,8398,0.1046677780423911,112,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1102,Universidad,2024-1,1187,11297,0.1050721430468266,113,Universidad Nacional De Colombia,Antioquia,Medellín
1123,Universidad,2024-1,282,2663,0.105895606458881,114,Universidad Popular Del Cesar,Cesar,Aguachica
1704,Universidad,2024-1,1487,13656,0.1088898652606913,115,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1801,Universidad,2024-1,701,6260,0.1119808306709265,116,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2024-1,656,5785,0.1133967156439067,117,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1201,Universidad,2024-1,3576,31302,0.114241901475944,118,Universidad De Antioquia,Antioquia,Medellín
2847,Universidad,2024-1,744,6284,0.1183959261616805,119,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1735,Universidad,2024-1,754,6295,0.1197776012708499,120,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2102,Universidad,2024-1,18072,131383,0.1375520425016935,121,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
2810,Universidad,2024-1,1707,12039,0.1417891851482681,122,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1301,Universidad,2024-1,3434,22066,0.1556240369799692,123,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1703,Universidad,2024-1,93,473,0.1966173361522199,124,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
1725,Universidad,2024-1,140,665,0.2105263157894737,125,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
9929,Universidad,2024-1,207,880,0.2352272727272727,126,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
9929,Universidad,2023-2,9,708,0.01271186440677966,1,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1824,Universidad,2023-2,123,4590,0.02679738562091503,2,Universidad Metropolitana,Atlántico,Barranquilla
1828,Universidad,2023-2,166,5094,0.0325873576756969,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,2023-2,419,12767,0.03281898644943997,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,Universidad,2023-2,318,9281,0.03426354918651008,5,Universidad De La Sabana,Cundinamarca,Chía
1713,Universidad,2023-2,395,11171,0.03535941276519559,6,Universidad Del Norte,Atlántico,Barranquilla
1113,Universidad,2023-2,545,15136,0.0360068710359408,7,Universidad De Cordoba,Córdoba,Montería
1712,Universidad,2023-2,296,7947,0.03724675978356613,8,Universidad Eafit-,Antioquia,Medellín
1107,Universidad,2023-2,115,3009,0.03821867730142905,9,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1108,Universidad,2023-2,142,3519,0.04035237283319125,10,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1720,Universidad,2023-2,238,5848,0.04069767441860465,11,Universidad Mariana,Nariño,Pasto
1702,Universidad,2023-2,259,6347,0.04080668032141169,12,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1730,Universidad,2023-2,14,343,0.04081632653061224,13,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1215,Universidad,2023-2,67,1637,0.04092852779474649,14,Universidad De Cundinamarca,Cundinamarca,Girardot
1714,Universidad,2023-2,350,8468,0.0413320736891828,15,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1727,Universidad,2023-2,144,3303,0.04359673024523161,16,Universidad Pontificia Bolivariana,Córdoba,Montería
1217,Universidad,2023-2,264,5999,0.04400733455575929,17,Universidad De Sucre,Sucre,Sincelejo
1701,Universidad,2023-2,714,16110,0.04432029795158287,18,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Universidad,2023-2,1243,27547,0.04512288089447127,19,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1829,Universidad,2023-2,100,2103,0.0475511174512601,20,Universidad Santiago De Cali,Valle del Cauca,Palmira
1106,Universidad,2023-2,1017,21365,0.04760121694359935,21,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1210,Universidad,2023-2,260,5355,0.04855275443510738,22,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1212,Universidad,2023-2,1074,21384,0.05022446689113356,23,Universidad De Pamplona,Norte de Santander,Pamplona
1206,Universidad,2023-2,715,13979,0.05114815079762501,24,Universidad De Nariño,Nariño,Pasto
1833,Universidad,2023-2,459,8904,0.05154986522911052,25,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1119,Universidad,2023-2,338,6535,0.05172149961744453,26,Universidad De Los Llanos,Meta,Villavicencio
2813,Universidad,2023-2,98,1844,0.05314533622559653,27,Universidad Eia,Antioquia,Envigado
2805,Universidad,2023-2,820,15389,0.053284813828059,28,Universidad Simon Bolivar,Atlántico,Barranquilla
1110,Universidad,2023-2,756,14063,0.05375808860129418,29,Universidad Del Cauca,Cauca,Popayán
1832,Universidad,2023-2,267,4887,0.05463474524248005,30,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1716,Universidad,2023-2,211,3790,0.05567282321899736,31,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1835,Universidad,2023-2,246,4411,0.05576966674223532,32,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1209,Universidad,2023-2,832,14914,0.05578650932010192,33,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2708,Universidad,2023-2,263,4585,0.05736095965103599,34,Universidad Ces,Antioquia,Medellín
1715,Universidad,2023-2,118,2049,0.05758906783796974,35,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1214,Universidad,2023-2,592,10197,0.05805629106599981,36,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1118,Universidad,2023-2,779,13162,0.05918553411335663,37,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2811,Universidad,2023-2,217,3660,0.0592896174863388,38,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1114,Universidad,2023-2,793,13188,0.06013042159538975,39,Universidad Surcolombiana,Huila,Neiva
1223,Universidad,2023-2,19,315,0.06031746031746032,40,Universidad De Antioquia,Antioquia,Turbo
1105,Universidad,2023-2,508,8403,0.06045459954778055,41,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
9933,Universidad,2023-2,70,1140,0.06140350877192982,42,Universidad Nacional De Colombia,Cesar,La Paz
2832,Universidad,2023-2,585,9449,0.06191131336649381,43,Universidad De Santander - Udes,Santander,Bucaramanga
1203,Universidad,2023-2,1854,29643,0.06254427689505111,44,Universidad Del Valle,Valle del Cauca,Santiago de Cali
2744,Universidad,2023-2,357,5702,0.0626096106629253,45,Universidad Cesmag - Unicesmag,Nariño,Pasto
1121,Universidad,2023-2,398,6349,0.06268703732871318,46,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1216,Universidad,2023-2,36,571,0.06304728546409807,47,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1109,Universidad,2023-2,51,786,0.0648854961832061,48,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1115,Universidad,2023-2,572,8711,0.06566410285845482,49,Universidad De La Amazonia,Caquetá,Florencia
1724,Universidad,2023-2,259,3916,0.06613891726251277,50,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1204,Universidad,2023-2,1319,19935,0.06616503636819664,51,Universidad Industrial De Santander,Santander,Bucaramanga
1834,Universidad,2023-2,363,5442,0.06670341786108049,52,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1826,Universidad,2023-2,870,13027,0.06678437092193137,53,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1817,Universidad,2023-2,213,3178,0.0670232850849591,54,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1734,Universidad,2023-2,309,4606,0.06708640903169778,55,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1219,Universidad,2023-2,10,148,0.06756756756756757,56,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1709,Universidad,2023-2,438,6474,0.06765523632993513,57,Universidad Central,Cundinamarca,"Bogotá, D.C."
1710,Universidad,2023-2,637,9316,0.06837698583082868,58,Universidad Pontificia Bolivariana,Antioquia,Medellín
1815,Universidad,2023-2,237,3452,0.0686558516801854,59,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1805,Universidad,2023-2,1178,16827,0.0700065371129732,60,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1707,Universidad,2023-2,373,5280,0.0706439393939394,61,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1120,Universidad,2023-2,877,12293,0.07134141381273895,62,Universidad Popular Del Cesar,Cesar,Valledupar
1218,Universidad,2023-2,1028,14344,0.07166759620747351,63,Universidad De La Guajira,La Guajira,Riohacha
2719,Universidad,2023-2,962,13344,0.07209232613908872,64,Universidad Católica Luis Amigó,Antioquia,Medellín
1207,Universidad,2023-2,1581,21889,0.07222805975604185,65,Universidad Del Tolima,Tolima,Ibagué
1205,Universidad,2023-2,1472,20257,0.07266623883102137,66,Universidad De Cartagena,Bolívar,Cartagena de Indias
1103,Universidad,2023-2,350,4809,0.07278020378457059,67,Universidad Nacional De Colombia,Caldas,Manizales
1827,Universidad,2023-2,126,1721,0.07321324811156305,68,Universidad Catolica De Manizales,Caldas,Manizales
1112,Universidad,2023-2,868,11833,0.07335417899095749,69,Universidad De Caldas,Caldas,Manizales
1820,Universidad,2023-2,279,3799,0.07344037904711766,70,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1723,Universidad,2023-2,261,3535,0.07383309759547384,71,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1104,Universidad,2023-2,199,2693,0.07389528406981062,72,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1213,Universidad,2023-2,1790,24206,0.07394860778319425,73,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1807,Universidad,2023-2,326,4398,0.07412460209185993,74,Universidad Libre,Valle del Cauca,Santiago de Cali
1123,Universidad,2023-2,194,2608,0.07438650306748466,75,Universidad Popular Del Cesar,Cesar,Aguachica
2810,Universidad,2023-2,787,10457,0.07526059099168021,76,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1729,Universidad,2023-2,749,9922,0.07548881273936707,77,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
2711,Universidad,2023-2,170,2237,0.07599463567277603,78,Universidad Catolica De Pereira,Risaralda,Pereira
1202,Universidad,2023-2,1557,20222,0.0769953515972703,79,Universidad Del Atlantico,Atlántico,Puerto Colombia
1816,Universidad,2023-2,305,3896,0.07828542094455852,80,Universidad Cooperativa De Colombia,Antioquia,Medellín
2743,Universidad,2023-2,198,2521,0.07854026180087267,81,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1812,Universidad,2023-2,494,6026,0.08197809492200464,82,Universidad De Medellin,Antioquia,Medellín
1111,Universidad,2023-2,1216,14776,0.08229561451001624,83,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1122,Universidad,2023-2,203,2439,0.08323083230832308,84,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1830,Universidad,2023-2,550,6591,0.0834471248672432,85,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1831,Universidad,2023-2,375,4453,0.08421289018639119,86,Universidad De Ibague,Tolima,Ibagué
1825,Universidad,2023-2,277,3275,0.08458015267175573,87,Universidad Autonoma De Manizales,Caldas,Manizales
1808,Universidad,2023-2,418,4942,0.08458114123836503,88,Universidad Libre,Atlántico,Barranquilla
1201,Universidad,2023-2,1577,18602,0.0847758305558542,89,Universidad De Antioquia,Antioquia,Medellín
1803,Universidad,2023-2,621,7297,0.08510346717829245,90,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1733,Universidad,2023-2,187,2186,0.08554437328453797,91,Universidad Sergio Arboleda,Magdalena,Santa Marta
9122,Universidad,2023-2,50,578,0.08650519031141868,92,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1208,Universidad,2023-2,1294,14875,0.08699159663865547,93,Universidad Del Quindio,Quindío,Armenia
9105,Universidad,2023-2,73,838,0.08711217183770883,94,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1818,Universidad,2023-2,1899,21727,0.08740277074607632,95,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2023-2,462,5276,0.08756633813495072,96,Universidad De Manizales,Caldas,Manizales
1706,Universidad,2023-2,439,4964,0.08843674456083804,97,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1822,Universidad,2023-2,81,912,0.08881578947368421,98,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1814,Universidad,2023-2,258,2899,0.08899620558813384,99,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1823,Universidad,2023-2,688,7637,0.0900877307843394,100,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1726,Universidad,2023-2,361,3973,0.0908633274603574,101,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1117,Universidad,2023-2,1463,15856,0.09226791120080728,102,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1718,Universidad,2023-2,211,2260,0.09336283185840707,103,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1719,Universidad,2023-2,642,6569,0.0977317704369006,104,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1819,Universidad,2023-2,46,467,0.09850107066381156,105,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1732,Universidad,2023-2,375,3763,0.09965453095934096,106,Universidad Santo Tomas,Boyacá,Tunja
1102,Universidad,2023-2,1188,11570,0.1026793431287813,107,Universidad Nacional De Colombia,Antioquia,Medellín
1705,Universidad,2023-2,483,4692,0.1029411764705882,108,Universidad Santo Tomas,Santander,Bucaramanga
1704,Universidad,2023-2,1437,13841,0.1038219781807673,109,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
2847,Universidad,2023-2,631,6044,0.1044010589013898,110,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1809,Universidad,2023-2,298,2828,0.1053748231966054,111,Universidad Libre,Risaralda,Pereira
1717,Universidad,2023-2,330,3098,0.1065203357004519,112,Universidad De San Buenaventura,Antioquia,Medellín
1728,Universidad,2023-2,822,7600,0.1081578947368421,113,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
5802,Universidad,2023-2,1798,16495,0.1090027280994241,114,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1735,Universidad,2023-2,608,5532,0.1099060014461316,115,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2023-2,602,5439,0.1106821106821107,116,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1802,Universidad,2023-2,212,1882,0.1126461211477152,117,Universidad La Gran Colombia,Quindío,Armenia
2102,Universidad,2023-2,14066,114846,0.1224770562318235,118,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1810,Universidad,2023-2,180,1455,0.1237113402061856,119,Universidad Libre,Norte de Santander,San José de Cúcuta
1811,Universidad,2023-2,100,764,0.1308900523560209,120,Universidad Libre,Santander,Socorro
1806,Universidad,2023-2,828,6278,0.1318891366677286,121,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1801,Universidad,2023-2,957,6875,0.1392,122,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1301,Universidad,2023-2,3478,24020,0.1447960033305579,123,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
2812,Universidad,2023-2,1263,8417,0.150053463229179,124,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1725,Universidad,2023-2,166,732,0.226775956284153,125,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1703,Universidad,2023-2,137,522,0.2624521072796935,126,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
1301,Universidad,2023-1,296,21226,0.01394516159427118,1,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1824,Universidad,2023-1,84,4479,0.01875418620227729,2,Universidad Metropolitana,Atlántico,Barranquilla
1711,Universidad,2023-1,246,9498,0.02590018951358181,3,Universidad De La Sabana,Cundinamarca,Chía
1828,Universidad,2023-1,148,5087,0.02909376842932966,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,2023-1,376,12490,0.03010408326661329,5,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1222,Universidad,2023-1,2,66,0.0303030303030303,6,Universidad De Antioquia,Antioquia,Puerto Berrío
1101,Universidad,2023-1,840,27074,0.03102607667873236,7,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1220,Universidad,2023-1,7,213,0.03286384976525822,8,Universidad De Antioquia,Antioquia,Andes
1213,Universidad,2023-1,822,23813,0.03451896023180616,9,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1113,Universidad,2023-1,554,15667,0.03536094976702624,10,Universidad De Cordoba,Córdoba,Montería
1713,Universidad,2023-1,426,11680,0.03647260273972603,11,Universidad Del Norte,Atlántico,Barranquilla
9933,Universidad,2023-1,39,1010,0.03861386138613861,12,Universidad Nacional De Colombia,Cesar,La Paz
1730,Universidad,2023-1,13,323,0.04024767801857585,13,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1217,Universidad,2023-1,245,5981,0.04096304965724795,14,Universidad De Sucre,Sucre,Sincelejo
1727,Universidad,2023-1,140,3260,0.04294478527607362,15,Universidad Pontificia Bolivariana,Córdoba,Montería
1714,Universidad,2023-1,369,8584,0.04298695246971109,16,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1701,Universidad,2023-1,707,16386,0.04314658855120224,17,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1103,Universidad,2023-1,209,4803,0.04351447012283989,18,Universidad Nacional De Colombia,Caldas,Manizales
1221,Universidad,2023-1,8,181,0.04419889502762431,19,Universidad De Antioquia,Antioquia,Caucasia
1110,Universidad,2023-1,607,13698,0.04431303839976639,20,Universidad Del Cauca,Cauca,Popayán
1212,Universidad,2023-1,982,21874,0.04489348084483862,21,Universidad De Pamplona,Norte de Santander,Pamplona
1827,Universidad,2023-1,85,1795,0.04735376044568245,22,Universidad Catolica De Manizales,Caldas,Manizales
1702,Universidad,2023-1,300,6326,0.04742333227948151,23,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1215,Universidad,2023-1,78,1634,0.04773561811505508,24,Universidad De Cundinamarca,Cundinamarca,Girardot
1104,Universidad,2023-1,128,2673,0.04788627010849233,25,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1832,Universidad,2023-1,237,4924,0.04813160032493907,26,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
2805,Universidad,2023-1,777,15747,0.04934273194894265,27,Universidad Simon Bolivar,Atlántico,Barranquilla
1210,Universidad,2023-1,287,5721,0.05016605488550953,28,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1811,Universidad,2023-1,40,791,0.05056890012642225,29,Universidad Libre,Santander,Socorro
1206,Universidad,2023-1,720,13760,0.05232558139534884,30,Universidad De Nariño,Nariño,Pasto
1808,Universidad,2023-1,260,4953,0.05249343832020997,31,Universidad Libre,Atlántico,Barranquilla
1107,Universidad,2023-1,156,2962,0.05266711681296422,32,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2743,Universidad,2023-1,127,2411,0.052675238490253,33,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1119,Universidad,2023-1,340,6368,0.05339195979899498,34,Universidad De Los Llanos,Meta,Villavicencio
1820,Universidad,2023-1,203,3802,0.0533929510783798,35,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1724,Universidad,2023-1,208,3829,0.05432227735701228,36,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1829,Universidad,2023-1,110,1961,0.05609382967873534,37,Universidad Santiago De Cali,Valle del Cauca,Palmira
1712,Universidad,2023-1,457,8124,0.05625307730182176,38,Universidad Eafit-,Antioquia,Medellín
1833,Universidad,2023-1,498,8800,0.05659090909090909,39,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1112,Universidad,2023-1,664,11330,0.05860547219770521,40,Universidad De Caldas,Caldas,Manizales
2832,Universidad,2023-1,552,9418,0.05861117009980887,41,Universidad De Santander - Udes,Santander,Bucaramanga
2708,Universidad,2023-1,276,4699,0.0587359012555863,42,Universidad Ces,Antioquia,Medellín
1707,Universidad,2023-1,316,5367,0.05887833053847587,43,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1118,Universidad,2023-1,771,13015,0.05923933922397234,44,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1105,Universidad,2023-1,498,8395,0.0593210244192972,45,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1835,Universidad,2023-1,253,4264,0.05933395872420263,46,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1716,Universidad,2023-1,229,3858,0.05935717988595127,47,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1732,Universidad,2023-1,209,3497,0.05976551329711181,48,Universidad Santo Tomas,Boyacá,Tunja
1715,Universidad,2023-1,134,2234,0.05998209489704566,49,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1121,Universidad,2023-1,374,6212,0.06020605280103027,50,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1834,Universidad,2023-1,321,5308,0.06047475508666164,51,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1102,Universidad,2023-1,699,11533,0.06060868811237319,52,Universidad Nacional De Colombia,Antioquia,Medellín
1706,Universidad,2023-1,324,5135,0.06309639727361246,53,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1108,Universidad,2023-1,219,3463,0.0632399653479642,54,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1214,Universidad,2023-1,661,10411,0.0634905388531361,55,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1204,Universidad,2023-1,1264,19873,0.06360388466763951,56,Universidad Industrial De Santander,Santander,Bucaramanga
1115,Universidad,2023-1,560,8728,0.06416131989000917,57,Universidad De La Amazonia,Caquetá,Florencia
1203,Universidad,2023-1,1911,29617,0.06452375324982274,58,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1709,Universidad,2023-1,465,7052,0.06593874078275666,59,Universidad Central,Cundinamarca,"Bogotá, D.C."
1809,Universidad,2023-1,186,2801,0.06640485540878258,60,Universidad Libre,Risaralda,Pereira
2719,Universidad,2023-1,931,13818,0.0673758865248227,61,Universidad Católica Luis Amigó,Antioquia,Medellín
1720,Universidad,2023-1,395,5815,0.06792777300085985,62,Universidad Mariana,Nariño,Pasto
1723,Universidad,2023-1,258,3783,0.06819984139571768,63,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1831,Universidad,2023-1,325,4761,0.06826296996429322,64,Universidad De Ibague,Tolima,Ibagué
2813,Universidad,2023-1,133,1942,0.06848609680741503,65,Universidad Eia,Antioquia,Envigado
1815,Universidad,2023-1,244,3528,0.0691609977324263,66,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2023-1,344,4968,0.06924315619967794,67,Universidad De Manizales,Caldas,Manizales
1805,Universidad,2023-1,1151,16560,0.06950483091787439,68,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1816,Universidad,2023-1,275,3949,0.06963788300835655,69,Universidad Cooperativa De Colombia,Antioquia,Medellín
2744,Universidad,2023-1,394,5647,0.06977156012041792,70,Universidad Cesmag - Unicesmag,Nariño,Pasto
1106,Universidad,2023-1,1463,20841,0.07019816707451658,71,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2811,Universidad,2023-1,275,3912,0.07029652351738241,72,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1710,Universidad,2023-1,703,9996,0.070328131252501,73,Universidad Pontificia Bolivariana,Antioquia,Medellín
2810,Universidad,2023-1,784,10892,0.07197943444730077,74,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1209,Universidad,2023-1,1219,16635,0.07327923053802224,75,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1807,Universidad,2023-1,332,4520,0.07345132743362832,76,Universidad Libre,Valle del Cauca,Santiago de Cali
1826,Universidad,2023-1,963,13009,0.0740256745330156,77,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1734,Universidad,2023-1,342,4548,0.07519788918205805,78,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1111,Universidad,2023-1,1151,14958,0.07694878994517984,79,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1114,Universidad,2023-1,1057,13645,0.07746427262733602,80,Universidad Surcolombiana,Huila,Neiva
1806,Universidad,2023-1,501,6385,0.07846515270164447,81,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1205,Universidad,2023-1,1575,19986,0.07880516361453017,82,Universidad De Cartagena,Bolívar,Cartagena de Indias
1802,Universidad,2023-1,145,1833,0.07910529187124932,83,Universidad La Gran Colombia,Quindío,Armenia
1830,Universidad,2023-1,545,6728,0.08100475624256837,84,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1733,Universidad,2023-1,173,2135,0.08103044496487119,85,Universidad Sergio Arboleda,Magdalena,Santa Marta
1122,Universidad,2023-1,200,2466,0.08110300081103,86,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1817,Universidad,2023-1,260,3178,0.08181246066708622,87,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1822,Universidad,2023-1,78,952,0.0819327731092437,88,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1729,Universidad,2023-1,858,10451,0.08209740694670367,89,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1719,Universidad,2023-1,571,6943,0.08224110615007922,90,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1803,Universidad,2023-1,628,7598,0.0826533298236378,91,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1218,Universidad,2023-1,1148,13867,0.08278647147905098,92,Universidad De La Guajira,La Guajira,Riohacha
1705,Universidad,2023-1,352,4214,0.083531086853346,93,Universidad Santo Tomas,Santander,Bucaramanga
1728,Universidad,2023-1,628,7504,0.08368869936034115,94,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
2711,Universidad,2023-1,191,2279,0.08380868802106187,95,Universidad Catolica De Pereira,Risaralda,Pereira
1825,Universidad,2023-1,302,3590,0.08412256267409471,96,Universidad Autonoma De Manizales,Caldas,Manizales
1819,Universidad,2023-1,42,498,0.08433734939759036,97,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1823,Universidad,2023-1,663,7827,0.08470678420850901,98,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1216,Universidad,2023-1,47,554,0.08483754512635379,99,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1223,Universidad,2023-1,28,329,0.0851063829787234,100,Universidad De Antioquia,Antioquia,Turbo
1812,Universidad,2023-1,561,6498,0.08633425669436749,101,Universidad De Medellin,Antioquia,Medellín
1810,Universidad,2023-1,123,1422,0.08649789029535865,102,Universidad Libre,Norte de Santander,San José de Cúcuta
9929,Universidad,2023-1,59,676,0.08727810650887574,103,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1718,Universidad,2023-1,196,2232,0.08781362007168458,104,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1818,Universidad,2023-1,1987,22576,0.08801381998582565,105,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1726,Universidad,2023-1,373,4137,0.09016195310611554,106,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1219,Universidad,2023-1,26,283,0.09187279151943464,107,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1123,Universidad,2023-1,250,2656,0.0941265060240964,108,Universidad Popular Del Cesar,Cesar,Aguachica
1117,Universidad,2023-1,1492,15805,0.09440050616893388,109,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1208,Universidad,2023-1,1455,14881,0.09777568711780124,110,Universidad Del Quindio,Quindío,Armenia
1201,Universidad,2023-1,3019,30765,0.09813099301153907,111,Universidad De Antioquia,Antioquia,Medellín
9122,Universidad,2023-1,61,619,0.098546042003231,112,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1735,Universidad,2023-1,546,5498,0.09930883957802836,113,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1120,Universidad,2023-1,1309,13128,0.09971054235222424,114,Universidad Popular Del Cesar,Cesar,Valledupar
1717,Universidad,2023-1,330,3287,0.1003954974140554,115,Universidad De San Buenaventura,Antioquia,Medellín
2847,Universidad,2023-1,614,6088,0.1008541392904074,116,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
9105,Universidad,2023-1,89,852,0.1044600938967136,117,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1704,Universidad,2023-1,1549,14640,0.1058060109289617,118,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1801,Universidad,2023-1,757,7145,0.1059482155353394,119,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,2023-1,352,3206,0.1097941359950094,120,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1109,Universidad,2023-1,86,780,0.1102564102564103,121,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1202,Universidad,2023-1,2297,20833,0.110257764124226,122,Universidad Del Atlantico,Atlántico,Puerto Colombia
1207,Universidad,2023-1,2590,22407,0.1155888784754764,123,Universidad Del Tolima,Tolima,Ibagué
2812,Universidad,2023-1,941,8100,0.1161728395061728,124,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2023-1,687,5766,0.1191467221644121,125,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
5802,Universidad,2023-1,2023,16917,0.1195838505645209,126,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
2102,Universidad,2023-1,16102,113325,0.1420869181557468,127,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1703,Universidad,2023-1,97,554,0.1750902527075812,128,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
1725,Universidad,2023-1,199,933,0.2132904608788853,129,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1202,Universidad,2022-2,0,1,0.0,1,Universidad Del Atlantico,Atlántico,Puerto Colombia
1824,Universidad,2022-2,76,4271,0.01779442753453524,2,Universidad Metropolitana,Atlántico,Barranquilla
1828,Universidad,2022-2,123,5153,0.02386959052978847,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1222,Universidad,2022-2,2,69,0.02898550724637681,4,Universidad De Antioquia,Antioquia,Puerto Berrío
1711,Universidad,2022-2,303,9595,0.03157894736842105,5,Universidad De La Sabana,Cundinamarca,Chía
1713,Universidad,2022-2,392,11825,0.03315010570824525,6,Universidad Del Norte,Atlántico,Barranquilla
1712,Universidad,2022-2,265,7837,0.03381395942324869,7,Universidad Eafit-,Antioquia,Medellín
1813,Universidad,2022-2,439,12808,0.03427545284197377,8,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1724,Universidad,2022-2,126,3581,0.03518570231778833,9,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1108,Universidad,2022-2,130,3458,0.03759398496240601,10,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1101,Universidad,2022-2,1037,27017,0.03838324018210756,11,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1701,Universidad,2022-2,636,16178,0.03931264680430214,12,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1301,Universidad,2022-2,778,19226,0.04046603557682305,13,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1113,Universidad,2022-2,673,16059,0.0419079643813438,14,Universidad De Cordoba,Córdoba,Montería
2805,Universidad,2022-2,624,14725,0.04237691001697793,15,Universidad Simon Bolivar,Atlántico,Barranquilla
2708,Universidad,2022-2,199,4667,0.04263981144203986,16,Universidad Ces,Antioquia,Medellín
1217,Universidad,2022-2,266,6011,0.04425220429213109,17,Universidad De Sucre,Sucre,Sincelejo
1110,Universidad,2022-2,581,13083,0.0444087747458534,18,Universidad Del Cauca,Cauca,Popayán
1714,Universidad,2022-2,393,8730,0.04501718213058419,19,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1213,Universidad,2022-2,1051,23231,0.04524127243769101,20,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1210,Universidad,2022-2,261,5763,0.04528891202498699,21,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1107,Universidad,2022-2,148,3014,0.0491041804910418,22,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1727,Universidad,2022-2,152,3044,0.04993429697766097,23,Universidad Pontificia Bolivariana,Córdoba,Montería
1820,Universidad,2022-2,186,3690,0.05040650406504065,24,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
9933,Universidad,2022-2,44,857,0.05134189031505251,25,Universidad Nacional De Colombia,Cesar,La Paz
1702,Universidad,2022-2,337,6339,0.05316295945732766,26,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1106,Universidad,2022-2,1099,20603,0.05334174634761928,27,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1204,Universidad,2022-2,1075,20059,0.05359190388354355,28,Universidad Industrial De Santander,Santander,Bucaramanga
1209,Universidad,2022-2,950,17405,0.05458201666187877,29,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2811,Universidad,2022-2,226,4115,0.05492102065613609,30,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1720,Universidad,2022-2,317,5757,0.0550634010769498,31,Universidad Mariana,Nariño,Pasto
1832,Universidad,2022-2,270,4842,0.05576208178438662,32,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1223,Universidad,2022-2,14,251,0.05577689243027888,33,Universidad De Antioquia,Antioquia,Turbo
1835,Universidad,2022-2,243,4301,0.05649848872355266,34,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
2743,Universidad,2022-2,114,2008,0.05677290836653386,35,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1716,Universidad,2022-2,203,3515,0.0577524893314367,36,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1121,Universidad,2022-2,366,6140,0.05960912052117264,37,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1103,Universidad,2022-2,284,4743,0.05987771452667089,38,Universidad Nacional De Colombia,Caldas,Manizales
9122,Universidad,2022-2,34,567,0.05996472663139329,39,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1734,Universidad,2022-2,264,4348,0.06071757129714812,40,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1708,Universidad,2022-2,11,173,0.06358381502890173,41,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1833,Universidad,2022-2,542,8479,0.06392263238589456,42,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1216,Universidad,2022-2,36,562,0.06405693950177936,43,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1709,Universidad,2022-2,464,7185,0.06457898399443285,44,Universidad Central,Cundinamarca,"Bogotá, D.C."
1715,Universidad,2022-2,153,2301,0.06649282920469361,45,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1212,Universidad,2022-2,1541,23090,0.06673884798614119,46,Universidad De Pamplona,Norte de Santander,Pamplona
1206,Universidad,2022-2,947,14158,0.06688797852804068,47,Universidad De Nariño,Nariño,Pasto
1834,Universidad,2022-2,339,5044,0.06720856463124504,48,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1829,Universidad,2022-2,121,1798,0.06729699666295884,49,Universidad Santiago De Cali,Valle del Cauca,Palmira
2719,Universidad,2022-2,943,13741,0.06862673750090968,50,Universidad Católica Luis Amigó,Antioquia,Medellín
1826,Universidad,2022-2,878,12714,0.06905773163441875,51,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1729,Universidad,2022-2,723,10357,0.0698078594187506,52,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1102,Universidad,2022-2,837,11964,0.06995987963891676,53,Universidad Nacional De Colombia,Antioquia,Medellín
1205,Universidad,2022-2,609,8704,0.06996783088235294,54,Universidad De Cartagena,Bolívar,Cartagena de Indias
1214,Universidad,2022-2,753,10758,0.06999442275515895,55,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1805,Universidad,2022-2,1083,15382,0.07040696918476141,56,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2813,Universidad,2022-2,132,1852,0.07127429805615551,57,Universidad Eia,Antioquia,Envigado
1830,Universidad,2022-2,493,6879,0.07166739351649949,58,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1815,Universidad,2022-2,255,3558,0.07166947723440135,59,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
2832,Universidad,2022-2,661,9208,0.07178540399652476,60,Universidad De Santander - Udes,Santander,Bucaramanga
1707,Universidad,2022-2,391,5428,0.07203389830508475,61,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2812,Universidad,2022-2,521,7186,0.0725020873921514,62,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1104,Universidad,2022-2,200,2734,0.07315288953913679,63,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1119,Universidad,2022-2,452,6141,0.07360364761439504,64,Universidad De Los Llanos,Meta,Villavicencio
1730,Universidad,2022-2,24,326,0.0736196319018405,65,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1115,Universidad,2022-2,630,8557,0.07362393362159636,66,Universidad De La Amazonia,Caquetá,Florencia
1215,Universidad,2022-2,137,1850,0.07405405405405406,67,Universidad De Cundinamarca,Cundinamarca,Girardot
1117,Universidad,2022-2,1145,15334,0.07467066649276119,68,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1105,Universidad,2022-2,649,8589,0.07556176504831762,69,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1807,Universidad,2022-2,328,4263,0.07694112127609665,70,Universidad Libre,Valle del Cauca,Santiago de Cali
2810,Universidad,2022-2,824,10646,0.0773999624272027,71,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1812,Universidad,2022-2,518,6634,0.07808260476334036,72,Universidad De Medellin,Antioquia,Medellín
1831,Universidad,2022-2,368,4656,0.07903780068728522,73,Universidad De Ibague,Tolima,Ibagué
1120,Universidad,2022-2,1050,13200,0.07954545454545454,74,Universidad Popular Del Cesar,Cesar,Valledupar
1732,Universidad,2022-2,265,3315,0.07993966817496229,75,Universidad Santo Tomas,Boyacá,Tunja
1114,Universidad,2022-2,1032,12894,0.08003722661703118,76,Universidad Surcolombiana,Huila,Neiva
1219,Universidad,2022-2,19,235,0.08085106382978724,77,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1203,Universidad,2022-2,2352,29075,0.08089423903697335,78,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1817,Universidad,2022-2,253,3110,0.08135048231511254,79,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1728,Universidad,2022-2,590,7126,0.08279539713724389,80,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1726,Universidad,2022-2,333,4019,0.08285643194824584,81,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2744,Universidad,2022-2,469,5634,0.08324458643947462,82,Universidad Cesmag - Unicesmag,Nariño,Pasto
1208,Universidad,2022-2,1228,14495,0.08471886857537082,83,Universidad Del Quindio,Quindío,Armenia
1808,Universidad,2022-2,415,4880,0.08504098360655737,84,Universidad Libre,Atlántico,Barranquilla
1201,Universidad,2022-2,2347,27524,0.08527103618660078,85,Universidad De Antioquia,Antioquia,Medellín
1706,Universidad,2022-2,436,5110,0.0853228962818004,86,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1109,Universidad,2022-2,71,824,0.08616504854368932,87,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1718,Universidad,2022-2,183,2121,0.08628005657708628,88,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1823,Universidad,2022-2,717,8137,0.08811601327270493,89,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
2711,Universidad,2022-2,196,2219,0.08832807570977919,90,Universidad Catolica De Pereira,Risaralda,Pereira
1723,Universidad,2022-2,322,3642,0.08841295991213619,91,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1704,Universidad,2022-2,1284,14467,0.08875371535218082,92,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1733,Universidad,2022-2,177,1977,0.08952959028831563,93,Universidad Sergio Arboleda,Magdalena,Santa Marta
1816,Universidad,2022-2,362,4038,0.08964834076275384,94,Universidad Cooperativa De Colombia,Antioquia,Medellín
1803,Universidad,2022-2,701,7781,0.09009124791157948,95,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1717,Universidad,2022-2,298,3272,0.0910757946210269,96,Universidad De San Buenaventura,Antioquia,Medellín
1111,Universidad,2022-2,1402,15216,0.09213985278654048,97,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1825,Universidad,2022-2,342,3654,0.09359605911330048,98,Universidad Autonoma De Manizales,Caldas,Manizales
1218,Universidad,2022-2,1314,13823,0.09505895970483975,99,Universidad De La Guajira,La Guajira,Riohacha
1719,Universidad,2022-2,680,7152,0.09507829977628636,100,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,2022-2,309,3249,0.0951061865189289,101,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1827,Universidad,2022-2,174,1823,0.09544706527701592,102,Universidad Catolica De Manizales,Caldas,Manizales
1722,Universidad,2022-2,528,5434,0.097165991902834,103,Universidad De Manizales,Caldas,Manizales
1818,Universidad,2022-2,2257,23007,0.09810057808493068,104,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
5802,Universidad,2022-2,1532,15185,0.100889035232137,105,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2022-2,536,5257,0.1019592923720753,106,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1123,Universidad,2022-2,262,2568,0.1020249221183801,107,Universidad Popular Del Cesar,Cesar,Aguachica
2847,Universidad,2022-2,604,5769,0.1046975212341827,108,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1809,Universidad,2022-2,300,2836,0.1057827926657264,109,Universidad Libre,Risaralda,Pereira
1735,Universidad,2022-2,565,5297,0.1066641495185954,110,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1710,Universidad,2022-2,1181,10814,0.1092102829665249,111,Universidad Pontificia Bolivariana,Antioquia,Medellín
1112,Universidad,2022-2,1293,11751,0.1100331886647945,112,Universidad De Caldas,Caldas,Manizales
1822,Universidad,2022-2,96,868,0.1105990783410138,113,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1122,Universidad,2022-2,283,2532,0.1117693522906793,114,Universidad Del Pacifico,Valle del Cauca,Buenaventura
2102,Universidad,2022-2,11466,101139,0.1133687301634384,115,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1802,Universidad,2022-2,210,1835,0.114441416893733,116,Universidad La Gran Colombia,Quindío,Armenia
9125,Universidad,2022-2,8,69,0.1159420289855072,117,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1801,Universidad,2022-2,901,7646,0.1178393931467434,118,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1221,Universidad,2022-2,23,191,0.1204188481675393,119,Universidad De Antioquia,Antioquia,Caucasia
1806,Universidad,2022-2,771,6271,0.1229468984213044,120,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1118,Universidad,2022-2,1607,12884,0.1247283452343993,121,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1207,Universidad,2022-2,2869,22755,0.1260821797407163,122,Universidad Del Tolima,Tolima,Ibagué
1810,Universidad,2022-2,193,1431,0.1348707197763802,123,Universidad Libre,Norte de Santander,San José de Cúcuta
1220,Universidad,2022-2,28,204,0.1372549019607843,124,Universidad De Antioquia,Antioquia,Andes
1705,Universidad,2022-2,678,4936,0.1373581847649919,125,Universidad Santo Tomas,Santander,Bucaramanga
9929,Universidad,2022-2,101,730,0.1383561643835616,126,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1819,Universidad,2022-2,85,546,0.1556776556776557,127,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1725,Universidad,2022-2,200,1253,0.1596169193934557,128,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1811,Universidad,2022-2,147,878,0.1674259681093394,129,Universidad Libre,Santander,Socorro
1703,Universidad,2022-2,130,661,0.1966717095310136,130,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9105,Universidad,2022-2,191,943,0.2025450689289502,131,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1824,Universidad,2022-1,66,4158,0.01587301587301587,1,Universidad Metropolitana,Atlántico,Barranquilla
1711,Universidad,2022-1,158,9703,0.01628362362156034,2,Universidad De La Sabana,Cundinamarca,Chía
1713,Universidad,2022-1,318,12215,0.02603356528857962,3,Universidad Del Norte,Atlántico,Barranquilla
1813,Universidad,2022-1,392,13055,0.03002680965147453,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,Universidad,2022-1,161,5328,0.03021771771771772,5,Universidad Icesi,Valle del Cauca,Santiago de Cali
2708,Universidad,2022-1,142,4667,0.0304263981144204,6,Universidad Ces,Antioquia,Medellín
1210,Universidad,2022-1,184,5956,0.03089321692411014,7,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1730,Universidad,2022-1,10,319,0.03134796238244514,8,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1209,Universidad,2022-1,556,17176,0.03237074988355845,9,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1108,Universidad,2022-1,114,3477,0.03278688524590164,10,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1714,Universidad,2022-1,310,8877,0.03492170778416132,11,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1727,Universidad,2022-1,109,3066,0.03555120678408349,12,Universidad Pontificia Bolivariana,Córdoba,Montería
9125,Universidad,2022-1,2,52,0.03846153846153846,13,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1121,Universidad,2022-1,219,5622,0.03895410885805763,14,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1701,Universidad,2022-1,651,16702,0.03897736797988265,15,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1215,Universidad,2022-1,73,1867,0.03910016068559186,16,Universidad De Cundinamarca,Cundinamarca,Girardot
1212,Universidad,2022-1,981,23357,0.04200025688230509,17,Universidad De Pamplona,Norte de Santander,Pamplona
1712,Universidad,2022-1,352,8331,0.04225183051254351,18,Universidad Eafit-,Antioquia,Medellín
1204,Universidad,2022-1,852,19923,0.0427646438789339,19,Universidad Industrial De Santander,Santander,Bucaramanga
1101,Universidad,2022-1,1161,27086,0.0428634719043048,20,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2811,Universidad,2022-1,187,4316,0.04332715477293791,21,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
9933,Universidad,2022-1,32,728,0.04395604395604396,22,Universidad Nacional De Colombia,Cesar,La Paz
2805,Universidad,2022-1,679,15091,0.04499370485719965,23,Universidad Simon Bolivar,Atlántico,Barranquilla
1118,Universidad,2022-1,551,12199,0.04516763669153209,24,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1702,Universidad,2022-1,305,6525,0.04674329501915709,25,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1217,Universidad,2022-1,282,5974,0.04720455306327419,26,Universidad De Sucre,Sucre,Sincelejo
1808,Universidad,2022-1,233,4934,0.0472233481961897,27,Universidad Libre,Atlántico,Barranquilla
1113,Universidad,2022-1,784,16541,0.04739737621667372,28,Universidad De Cordoba,Córdoba,Montería
1107,Universidad,2022-1,149,3012,0.04946879150066401,29,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1724,Universidad,2022-1,175,3529,0.04958911873051856,30,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
9122,Universidad,2022-1,31,615,0.05040650406504065,31,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1213,Universidad,2022-1,1165,22782,0.05113686243525591,32,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1827,Universidad,2022-1,104,1939,0.05363589479112945,33,Universidad Catolica De Manizales,Caldas,Manizales
1715,Universidad,2022-1,141,2600,0.05423076923076923,34,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
9105,Universidad,2022-1,51,930,0.05483870967741936,35,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1104,Universidad,2022-1,156,2812,0.05547652916073969,36,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1206,Universidad,2022-1,801,14335,0.05587722357865364,37,Universidad De Nariño,Nariño,Pasto
1222,Universidad,2022-1,4,71,0.05633802816901409,38,Universidad De Antioquia,Antioquia,Puerto Berrío
1106,Universidad,2022-1,1185,20924,0.05663353087363793,39,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2832,Universidad,2022-1,525,9267,0.05665263839430236,40,Universidad De Santander - Udes,Santander,Bucaramanga
1214,Universidad,2022-1,607,10542,0.05757920698159742,41,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1834,Universidad,2022-1,280,4846,0.05777961205117623,42,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1710,Universidad,2022-1,642,11081,0.05793700929518997,43,Universidad Pontificia Bolivariana,Antioquia,Medellín
1832,Universidad,2022-1,301,5063,0.0594509184278096,44,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1722,Universidad,2022-1,317,5177,0.06123237396175391,45,Universidad De Manizales,Caldas,Manizales
2813,Universidad,2022-1,116,1889,0.0614081524616199,46,Universidad Eia,Antioquia,Envigado
1820,Universidad,2022-1,228,3706,0.06152185644900162,47,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1734,Universidad,2022-1,275,4450,0.06179775280898876,48,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1105,Universidad,2022-1,524,8348,0.06276952563488261,49,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1709,Universidad,2022-1,496,7896,0.06281661600810537,50,Universidad Central,Cundinamarca,"Bogotá, D.C."
1103,Universidad,2022-1,308,4893,0.06294706723891273,51,Universidad Nacional De Colombia,Caldas,Manizales
2719,Universidad,2022-1,888,14098,0.06298765782380479,52,Universidad Católica Luis Amigó,Antioquia,Medellín
1707,Universidad,2022-1,373,5894,0.06328469630132338,53,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1716,Universidad,2022-1,235,3698,0.06354786371011358,54,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1729,Universidad,2022-1,665,10457,0.06359376494214401,55,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1205,Universidad,2022-1,1184,18501,0.06399654072752824,56,Universidad De Cartagena,Bolívar,Cartagena de Indias
1809,Universidad,2022-1,187,2884,0.06484049930651872,57,Universidad Libre,Risaralda,Pereira
1805,Universidad,2022-1,969,14828,0.06534933908821149,58,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1732,Universidad,2022-1,214,3256,0.06572481572481573,59,Universidad Santo Tomas,Boyacá,Tunja
1706,Universidad,2022-1,362,5444,0.06649522409992653,60,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1835,Universidad,2022-1,292,4328,0.06746765249537892,61,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1203,Universidad,2022-1,1465,21625,0.06774566473988439,62,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1833,Universidad,2022-1,591,8581,0.06887309171425242,63,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1826,Universidad,2022-1,888,12826,0.0692343676906284,64,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1208,Universidad,2022-1,979,14062,0.06962025316455696,65,Universidad Del Quindio,Quindío,Armenia
1110,Universidad,2022-1,937,13416,0.06984197972570065,66,Universidad Del Cauca,Cauca,Popayán
1102,Universidad,2022-1,856,12080,0.07086092715231788,67,Universidad Nacional De Colombia,Antioquia,Medellín
1117,Universidad,2022-1,1093,15278,0.07154077758868962,68,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1723,Universidad,2022-1,293,4036,0.07259663032705649,69,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1216,Universidad,2022-1,39,533,0.07317073170731707,70,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
2810,Universidad,2022-1,823,11167,0.07369929255843109,71,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1720,Universidad,2022-1,437,5927,0.0737303863674709,72,Universidad Mariana,Nariño,Pasto
1831,Universidad,2022-1,376,5082,0.0739866194411649,73,Universidad De Ibague,Tolima,Ibagué
1822,Universidad,2022-1,69,931,0.07411385606874328,74,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1119,Universidad,2022-1,458,6167,0.07426625587806064,75,Universidad De Los Llanos,Meta,Villavicencio
1223,Universidad,2022-1,19,251,0.07569721115537849,76,Universidad De Antioquia,Antioquia,Turbo
1114,Universidad,2022-1,994,13116,0.07578530039646234,77,Universidad Surcolombiana,Huila,Neiva
1111,Universidad,2022-1,1147,15091,0.07600556623152872,78,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1817,Universidad,2022-1,242,3159,0.07660652105096549,79,Universidad Cooperativa De Colombia,Santander,Bucaramanga
2744,Universidad,2022-1,445,5802,0.07669769045156842,80,Universidad Cesmag - Unicesmag,Nariño,Pasto
1812,Universidad,2022-1,558,7273,0.07672212292039049,81,Universidad De Medellin,Antioquia,Medellín
1807,Universidad,2022-1,335,4347,0.07706464228203358,82,Universidad Libre,Valle del Cauca,Santiago de Cali
1728,Universidad,2022-1,565,7281,0.07759923087487983,83,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
2711,Universidad,2022-1,187,2409,0.0776255707762557,84,Universidad Catolica De Pereira,Risaralda,Pereira
1220,Universidad,2022-1,16,206,0.07766990291262135,85,Universidad De Antioquia,Antioquia,Andes
1825,Universidad,2022-1,297,3818,0.07778941854374018,86,Universidad Autonoma De Manizales,Caldas,Manizales
1806,Universidad,2022-1,504,6429,0.07839477368175456,87,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1811,Universidad,2022-1,73,911,0.0801317233809001,88,Universidad Libre,Santander,Socorro
1816,Universidad,2022-1,337,4196,0.08031458531935176,89,Universidad Cooperativa De Colombia,Antioquia,Medellín
1803,Universidad,2022-1,669,8193,0.08165507140241669,90,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1718,Universidad,2022-1,177,2135,0.08290398126463701,91,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1115,Universidad,2022-1,721,8696,0.0829116835326587,92,Universidad De La Amazonia,Caquetá,Florencia
1823,Universidad,2022-1,726,8593,0.08448737344350052,93,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1218,Universidad,2022-1,1155,13415,0.08609765188222139,94,Universidad De La Guajira,La Guajira,Riohacha
1818,Universidad,2022-1,2107,24040,0.08764559068219634,95,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1120,Universidad,2022-1,1182,13465,0.08778314147790568,96,Universidad Popular Del Cesar,Cesar,Valledupar
2847,Universidad,2022-1,515,5847,0.08807935693518043,97,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1830,Universidad,2022-1,658,7447,0.08835772794413858,98,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1726,Universidad,2022-1,375,4237,0.08850601840925183,99,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2812,Universidad,2022-1,626,7060,0.0886685552407932,100,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1719,Universidad,2022-1,672,7574,0.08872458410351201,101,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1815,Universidad,2022-1,345,3874,0.08905524006195147,102,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1705,Universidad,2022-1,461,5036,0.09154090548054011,103,Universidad Santo Tomas,Santander,Bucaramanga
1735,Universidad,2022-1,463,4982,0.09293456443195504,104,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1708,Universidad,2022-1,20,212,0.09433962264150944,105,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1801,Universidad,2022-1,751,7919,0.0948352064654628,106,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,2022-1,330,3476,0.0949367088607595,107,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1201,Universidad,2022-1,2993,31433,0.09521840104348932,108,Universidad De Antioquia,Antioquia,Medellín
1829,Universidad,2022-1,174,1805,0.096398891966759,109,Universidad Santiago De Cali,Valle del Cauca,Palmira
2743,Universidad,2022-1,201,2073,0.09696092619392184,110,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1717,Universidad,2022-1,349,3581,0.09745881038815972,111,Universidad De San Buenaventura,Antioquia,Medellín
1123,Universidad,2022-1,245,2512,0.09753184713375795,112,Universidad Popular Del Cesar,Cesar,Aguachica
1704,Universidad,2022-1,1502,15341,0.09790756795515286,113,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1810,Universidad,2022-1,144,1469,0.09802586793737236,114,Universidad Libre,Norte de Santander,San José de Cúcuta
2102,Universidad,2022-1,9362,93637,0.09998184478357916,115,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1221,Universidad,2022-1,26,255,0.1019607843137255,116,Universidad De Antioquia,Antioquia,Caucasia
1733,Universidad,2022-1,217,2037,0.1065292096219931,117,Universidad Sergio Arboleda,Magdalena,Santa Marta
1804,Universidad,2022-1,638,5912,0.1079161028416779,118,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1112,Universidad,2022-1,1321,12181,0.1084475823003038,119,Universidad De Caldas,Caldas,Manizales
1207,Universidad,2022-1,2454,21565,0.113795501970786,120,Universidad Del Tolima,Tolima,Ibagué
5802,Universidad,2022-1,1878,15900,0.1181132075471698,121,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1802,Universidad,2022-1,246,2039,0.1206473761647867,122,Universidad La Gran Colombia,Quindío,Armenia
1301,Universidad,2022-1,2418,18755,0.1289256198347107,123,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1202,Universidad,2022-1,2571,19837,0.1296062912738822,124,Universidad Del Atlantico,Atlántico,Puerto Colombia
1219,Universidad,2022-1,31,235,0.1319148936170213,125,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1725,Universidad,2022-1,225,1537,0.1463890696161353,126,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1819,Universidad,2022-1,100,642,0.1557632398753894,127,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
9929,Universidad,2022-1,95,567,0.1675485008818342,128,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1109,Universidad,2022-1,164,967,0.1695966907962771,129,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1703,Universidad,2022-1,136,756,0.1798941798941799,130,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
1122,Universidad,2022-1,528,2824,0.1869688385269122,131,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1824,Universidad,2021-2,53,3824,0.01385983263598326,1,Universidad Metropolitana,Atlántico,Barranquilla
1101,Universidad,2021-2,519,25295,0.02051788891085195,2,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1210,Universidad,2021-2,128,5883,0.02175760666326704,3,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1828,Universidad,2021-2,131,5493,0.02384853449845258,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,2021-2,317,12973,0.02443536575965467,5,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1209,Universidad,2021-2,437,16891,0.02587176602924635,6,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1103,Universidad,2021-2,122,4671,0.02611860415328623,7,Universidad Nacional De Colombia,Caldas,Manizales
1222,Universidad,2021-2,2,74,0.02702702702702703,8,Universidad De Antioquia,Antioquia,Puerto Berrío
2708,Universidad,2021-2,126,4548,0.02770448548812665,9,Universidad Ces,Antioquia,Medellín
9933,Universidad,2021-2,16,551,0.02903811252268602,10,Universidad Nacional De Colombia,Cesar,La Paz
1713,Universidad,2021-2,356,11863,0.03000927252802832,11,Universidad Del Norte,Atlántico,Barranquilla
1113,Universidad,2021-2,500,16181,0.03090043878623076,12,Universidad De Cordoba,Córdoba,Montería
1711,Universidad,2021-2,309,9783,0.03158540325053664,13,Universidad De La Sabana,Cundinamarca,Chía
1206,Universidad,2021-2,421,13269,0.03172808802471927,14,Universidad De Nariño,Nariño,Pasto
1213,Universidad,2021-2,683,21062,0.03242806950906846,15,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1714,Universidad,2021-2,281,8584,0.03273532152842498,16,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1204,Universidad,2021-2,632,19069,0.03314279721013163,17,Universidad Industrial De Santander,Santander,Bucaramanga
1102,Universidad,2021-2,378,11288,0.03348688873139617,18,Universidad Nacional De Colombia,Antioquia,Medellín
1215,Universidad,2021-2,65,1933,0.03362648732540093,19,Universidad De Cundinamarca,Cundinamarca,Girardot
1220,Universidad,2021-2,8,236,0.03389830508474576,20,Universidad De Antioquia,Antioquia,Andes
1217,Universidad,2021-2,204,5960,0.03422818791946309,21,Universidad De Sucre,Sucre,Sincelejo
9125,Universidad,2021-2,2,55,0.03636363636363636,22,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1712,Universidad,2021-2,300,8189,0.03663450970814507,23,Universidad Eafit-,Antioquia,Medellín
2811,Universidad,2021-2,162,4344,0.03729281767955801,24,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1108,Universidad,2021-2,128,3397,0.03768030615248749,25,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1701,Universidad,2021-2,620,16061,0.03860282672311811,26,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
2805,Universidad,2021-2,521,13400,0.03888059701492538,27,Universidad Simon Bolivar,Atlántico,Barranquilla
9105,Universidad,2021-2,38,954,0.03983228511530398,28,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1727,Universidad,2021-2,111,2746,0.04042243262927895,29,Universidad Pontificia Bolivariana,Córdoba,Montería
1702,Universidad,2021-2,260,6396,0.04065040650406504,30,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,Universidad,2021-2,113,2777,0.04069139359020526,31,Universidad Nacional De Colombia,Valle del Cauca,Palmira
2813,Universidad,2021-2,74,1793,0.04127161182375906,32,Universidad Eia,Antioquia,Envigado
1221,Universidad,2021-2,9,216,0.04166666666666666,33,Universidad De Antioquia,Antioquia,Caucasia
1212,Universidad,2021-2,1036,23918,0.04331465841625554,34,Universidad De Pamplona,Norte de Santander,Pamplona
1724,Universidad,2021-2,132,3035,0.04349258649093905,35,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1734,Universidad,2021-2,192,4163,0.04612058611578189,36,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1214,Universidad,2021-2,496,10428,0.04756425009589567,37,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1710,Universidad,2021-2,536,10963,0.04889172671713947,38,Universidad Pontificia Bolivariana,Antioquia,Medellín
1820,Universidad,2021-2,172,3495,0.04921316165951359,39,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1121,Universidad,2021-2,264,5343,0.04941044357102752,40,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1715,Universidad,2021-2,131,2617,0.05005731753916699,41,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1835,Universidad,2021-2,187,3715,0.05033647375504711,42,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1223,Universidad,2021-2,11,217,0.05069124423963134,43,Universidad De Antioquia,Antioquia,Turbo
1729,Universidad,2021-2,522,10032,0.05203349282296651,44,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1707,Universidad,2021-2,297,5707,0.05204135272472402,45,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1716,Universidad,2021-2,185,3542,0.05223037831733484,46,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1107,Universidad,2021-2,156,2970,0.05252525252525252,47,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1826,Universidad,2021-2,679,12400,0.05475806451612903,48,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2711,Universidad,2021-2,113,2050,0.0551219512195122,49,Universidad Catolica De Pereira,Risaralda,Pereira
1829,Universidad,2021-2,92,1669,0.05512282804074296,50,Universidad Santiago De Cali,Valle del Cauca,Palmira
1216,Universidad,2021-2,28,506,0.05533596837944664,51,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1832,Universidad,2021-2,260,4690,0.05543710021321962,52,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1709,Universidad,2021-2,427,7696,0.05548336798336798,53,Universidad Central,Cundinamarca,"Bogotá, D.C."
1834,Universidad,2021-2,239,4129,0.05788326471300557,54,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1831,Universidad,2021-2,286,4925,0.05807106598984772,55,Universidad De Ibague,Tolima,Ibagué
1106,Universidad,2021-2,1181,20319,0.05812293912101973,56,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1105,Universidad,2021-2,489,8361,0.05848582705418012,57,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1805,Universidad,2021-2,744,12451,0.05975423660750141,58,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1815,Universidad,2021-2,224,3654,0.06130268199233716,59,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
2832,Universidad,2021-2,523,8526,0.06134177809054656,60,Universidad De Santander - Udes,Santander,Bucaramanga
1723,Universidad,2021-2,234,3783,0.06185567010309279,61,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1205,Universidad,2021-2,1081,17441,0.06198039103262427,62,Universidad De Cartagena,Bolívar,Cartagena de Indias
1118,Universidad,2021-2,659,10472,0.06292971734148205,63,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
2719,Universidad,2021-2,911,14310,0.0636617749825297,64,Universidad Católica Luis Amigó,Antioquia,Medellín
9122,Universidad,2021-2,39,607,0.0642504118616145,65,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1720,Universidad,2021-2,371,5753,0.0644880931687815,66,Universidad Mariana,Nariño,Pasto
1816,Universidad,2021-2,262,4021,0.06515792091519522,67,Universidad Cooperativa De Colombia,Antioquia,Medellín
1817,Universidad,2021-2,193,2892,0.06673582295988935,68,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1115,Universidad,2021-2,571,8361,0.06829326635569907,69,Universidad De La Amazonia,Caquetá,Florencia
1201,Universidad,2021-2,745,10683,0.06973696527192737,70,Universidad De Antioquia,Antioquia,Medellín
1117,Universidad,2021-2,1032,14655,0.07041965199590583,71,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1207,Universidad,2021-2,1437,20243,0.07098750185249222,72,Universidad Del Tolima,Tolima,Ibagué
1812,Universidad,2021-2,530,7458,0.07106462858675248,73,Universidad De Medellin,Antioquia,Medellín
1728,Universidad,2021-2,497,6987,0.0711321024760269,74,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1208,Universidad,2021-2,973,13441,0.07239044713934975,75,Universidad Del Quindio,Quindío,Armenia
1109,Universidad,2021-2,62,855,0.07251461988304093,76,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
2810,Universidad,2021-2,751,10324,0.07274312282061217,77,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1706,Universidad,2021-2,383,5205,0.07358309317963496,78,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1730,Universidad,2021-2,24,324,0.07407407407407407,79,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1732,Universidad,2021-2,225,2986,0.0753516409912927,80,Universidad Santo Tomas,Boyacá,Tunja
1833,Universidad,2021-2,601,7920,0.07588383838383839,81,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1718,Universidad,2021-2,165,2120,0.07783018867924528,82,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2021-2,423,5430,0.07790055248618785,83,Universidad De Manizales,Caldas,Manizales
1803,Universidad,2021-2,671,8611,0.07792358611078852,84,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2021-2,397,5019,0.07909942219565651,85,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1301,Universidad,2021-2,1502,18828,0.07977480348417251,86,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1830,Universidad,2021-2,619,7729,0.08008798033380773,87,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1717,Universidad,2021-2,287,3527,0.08137227105188545,88,Universidad De San Buenaventura,Antioquia,Medellín
2744,Universidad,2021-2,462,5617,0.08225031155421043,89,Universidad Cesmag - Unicesmag,Nariño,Pasto
1120,Universidad,2021-2,1115,13524,0.08244602188701568,90,Universidad Popular Del Cesar,Cesar,Valledupar
1111,Universidad,2021-2,1259,15210,0.08277449046679816,91,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1704,Universidad,2021-2,1266,15130,0.08367481824190351,92,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1726,Universidad,2021-2,345,4122,0.08369723435225619,93,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1823,Universidad,2021-2,724,8606,0.08412735300952824,94,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1808,Universidad,2021-2,397,4661,0.08517485518129157,95,Universidad Libre,Atlántico,Barranquilla
1818,Universidad,2021-2,1983,23242,0.08531967988985457,96,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1809,Universidad,2021-2,250,2893,0.08641548565502938,97,Universidad Libre,Risaralda,Pereira
1123,Universidad,2021-2,212,2419,0.08763952046300125,98,Universidad Popular Del Cesar,Cesar,Aguachica
1203,Universidad,2021-2,2597,28879,0.08992693652827315,99,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1825,Universidad,2021-2,347,3797,0.09138793784566764,100,Universidad Autonoma De Manizales,Caldas,Manizales
2847,Universidad,2021-2,473,5158,0.09170221015897637,101,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1719,Universidad,2021-2,681,7345,0.09271613342409804,102,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1733,Universidad,2021-2,171,1840,0.09293478260869566,103,Universidad Sergio Arboleda,Magdalena,Santa Marta
2812,Universidad,2021-2,599,6443,0.0929691137668788,104,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1822,Universidad,2021-2,91,964,0.09439834024896264,105,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1802,Universidad,2021-2,190,2006,0.094715852442672,106,Universidad La Gran Colombia,Quindío,Armenia
1122,Universidad,2021-2,255,2687,0.09490137700037216,107,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1807,Universidad,2021-2,438,4516,0.09698848538529672,108,Universidad Libre,Valle del Cauca,Santiago de Cali
1708,Universidad,2021-2,24,247,0.097165991902834,109,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1814,Universidad,2021-2,348,3544,0.0981941309255079,110,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1725,Universidad,2021-2,174,1729,0.1006362058993638,111,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1114,Universidad,2021-2,1342,12825,0.1046393762183236,112,Universidad Surcolombiana,Huila,Neiva
1801,Universidad,2021-2,790,7483,0.1055726312976079,113,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1705,Universidad,2021-2,530,4981,0.1064043364786188,114,Universidad Santo Tomas,Santander,Bucaramanga
1202,Universidad,2021-2,2018,18258,0.1105268923211743,115,Universidad Del Atlantico,Atlántico,Puerto Colombia
1827,Universidad,2021-2,239,2075,0.1151807228915663,116,Universidad Catolica De Manizales,Caldas,Manizales
1819,Universidad,2021-2,81,682,0.1187683284457478,117,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
2743,Universidad,2021-2,212,1746,0.1214203894616266,118,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
5802,Universidad,2021-2,1766,14347,0.1230919355962919,119,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1112,Universidad,2021-2,443,3546,0.1249294980259447,120,Universidad De Caldas,Caldas,Manizales
1806,Universidad,2021-2,805,6417,0.1254480286738351,121,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1735,Universidad,2021-2,726,5310,0.1367231638418079,122,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2102,Universidad,2021-2,11595,80234,0.1445147942268863,123,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1811,Universidad,2021-2,162,948,0.1708860759493671,124,Universidad Libre,Santander,Socorro
1810,Universidad,2021-2,260,1502,0.1731025299600533,125,Universidad Libre,Norte de Santander,San José de Cúcuta
1219,Universidad,2021-2,14,77,0.1818181818181818,126,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1703,Universidad,2021-2,164,885,0.1853107344632768,127,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9929,Universidad,2021-2,91,483,0.1884057971014493,128,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1213,Universidad,2021-1,216,19150,0.01127937336814621,1,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1109,Universidad,2021-1,17,843,0.02016607354685647,2,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
9933,Universidad,2021-1,8,382,0.02094240837696335,3,Universidad Nacional De Colombia,Cesar,La Paz
2708,Universidad,2021-1,96,4524,0.02122015915119363,4,Universidad Ces,Antioquia,Medellín
1108,Universidad,2021-1,71,3344,0.02123205741626794,5,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1711,Universidad,2021-1,226,10043,0.02250323608483521,6,Universidad De La Sabana,Cundinamarca,Chía
1828,Universidad,2021-1,129,5598,0.02304394426580922,7,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,2021-1,311,13143,0.02366278627406224,8,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1209,Universidad,2021-1,387,16091,0.02405071157790069,9,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1113,Universidad,2021-1,371,15399,0.02409247353724268,10,Universidad De Cordoba,Córdoba,Montería
1210,Universidad,2021-1,140,5630,0.02486678507992895,11,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1204,Universidad,2021-1,461,18396,0.02505979560774081,12,Universidad Industrial De Santander,Santander,Bucaramanga
1217,Universidad,2021-1,148,5789,0.02556572810502677,13,Universidad De Sucre,Sucre,Sincelejo
1215,Universidad,2021-1,53,1959,0.02705461970393058,14,Universidad De Cundinamarca,Cundinamarca,Girardot
1104,Universidad,2021-1,73,2664,0.0274024024024024,15,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1212,Universidad,2021-1,685,23128,0.02961777931511588,16,Universidad De Pamplona,Norte de Santander,Pamplona
1101,Universidad,2021-1,789,25139,0.03138549663868889,17,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
9105,Universidad,2021-1,27,855,0.03157894736842105,18,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1713,Universidad,2021-1,405,12694,0.03190483693083346,19,Universidad Del Norte,Atlántico,Barranquilla
1111,Universidad,2021-1,469,14593,0.03213869663537312,20,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
2813,Universidad,2021-1,61,1786,0.0341545352743561,21,Universidad Eia,Antioquia,Envigado
1712,Universidad,2021-1,314,8706,0.03606708017459224,22,Universidad Eafit-,Antioquia,Medellín
1824,Universidad,2021-1,160,4337,0.03689186073322573,23,Universidad Metropolitana,Atlántico,Barranquilla
1715,Universidad,2021-1,101,2685,0.03761638733705773,24,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1107,Universidad,2021-1,116,3045,0.0380952380952381,25,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1701,Universidad,2021-1,655,16888,0.03878493604926575,26,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1730,Universidad,2021-1,13,333,0.03903903903903904,27,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1121,Universidad,2021-1,204,5167,0.03948132378556223,28,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1727,Universidad,2021-1,113,2850,0.03964912280701754,29,Universidad Pontificia Bolivariana,Córdoba,Montería
1115,Universidad,2021-1,315,7762,0.04058232414326204,30,Universidad De La Amazonia,Caquetá,Florencia
1205,Universidad,2021-1,672,16271,0.04130047323458914,31,Universidad De Cartagena,Bolívar,Cartagena de Indias
1103,Universidad,2021-1,195,4694,0.04154239454622923,32,Universidad Nacional De Colombia,Caldas,Manizales
2811,Universidad,2021-1,201,4784,0.04201505016722408,33,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1106,Universidad,2021-1,869,20375,0.04265030674846626,34,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1214,Universidad,2021-1,441,10308,0.04278230500582072,35,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1827,Universidad,2021-1,93,2168,0.04289667896678967,36,Universidad Catolica De Manizales,Caldas,Manizales
1702,Universidad,2021-1,283,6578,0.04302219519610824,37,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1105,Universidad,2021-1,362,8255,0.04385221078134464,38,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1206,Universidad,2021-1,626,13336,0.04694061187762447,39,Universidad De Nariño,Nariño,Pasto
1714,Universidad,2021-1,438,9238,0.04741285992639099,40,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1207,Universidad,2021-1,862,17757,0.04854423607591372,41,Universidad Del Tolima,Tolima,Ibagué
1710,Universidad,2021-1,622,12075,0.05151138716356107,42,Universidad Pontificia Bolivariana,Antioquia,Medellín
1208,Universidad,2021-1,687,13151,0.0522393734316782,43,Universidad Del Quindio,Quindío,Armenia
1118,Universidad,2021-1,529,9605,0.05507548152004164,44,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1808,Universidad,2021-1,276,4962,0.05562273276904474,45,Universidad Libre,Atlántico,Barranquilla
1706,Universidad,2021-1,302,5424,0.05567846607669617,46,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1729,Universidad,2021-1,622,10611,0.05861841485251154,47,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1123,Universidad,2021-1,130,2197,0.05917159763313609,48,Universidad Popular Del Cesar,Cesar,Aguachica
9929,Universidad,2021-1,25,419,0.05966587112171837,49,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1114,Universidad,2021-1,737,12336,0.05974383916990921,50,Universidad Surcolombiana,Huila,Neiva
1216,Universidad,2021-1,30,497,0.06036217303822938,51,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1829,Universidad,2021-1,100,1655,0.06042296072507553,52,Universidad Santiago De Cali,Valle del Cauca,Palmira
1221,Universidad,2021-1,14,225,0.06222222222222222,53,Universidad De Antioquia,Antioquia,Caucasia
1832,Universidad,2021-1,337,5297,0.06362091750047197,54,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1809,Universidad,2021-1,204,3091,0.06599805888062116,55,Universidad Libre,Risaralda,Pereira
1722,Universidad,2021-1,364,5465,0.06660567246111619,56,Universidad De Manizales,Caldas,Manizales
1220,Universidad,2021-1,18,266,0.06766917293233082,57,Universidad De Antioquia,Antioquia,Andes
1120,Universidad,2021-1,889,13093,0.06789887726265943,58,Universidad Popular Del Cesar,Cesar,Valledupar
2719,Universidad,2021-1,1064,15536,0.06848609680741503,59,Universidad Católica Luis Amigó,Antioquia,Medellín
2805,Universidad,2021-1,1043,15137,0.06890401004161988,60,Universidad Simon Bolivar,Atlántico,Barranquilla
9125,Universidad,2021-1,4,58,0.06896551724137931,61,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1110,Universidad,2021-1,876,12609,0.06947418510587676,62,Universidad Del Cauca,Cauca,Popayán
1707,Universidad,2021-1,491,6961,0.07053584255135756,63,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1826,Universidad,2021-1,991,13992,0.07082618639222413,64,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1724,Universidad,2021-1,244,3418,0.07138677589233469,65,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1723,Universidad,2021-1,314,4330,0.07251732101616629,66,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1811,Universidad,2021-1,73,1003,0.07278165503489531,67,Universidad Libre,Santander,Socorro
1718,Universidad,2021-1,184,2456,0.0749185667752443,68,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1831,Universidad,2021-1,411,5470,0.07513711151736746,69,Universidad De Ibague,Tolima,Ibagué
1201,Universidad,2021-1,2317,30694,0.07548706587606699,70,Universidad De Antioquia,Antioquia,Medellín
1812,Universidad,2021-1,601,7945,0.07564505978602895,71,Universidad De Medellin,Antioquia,Medellín
1816,Universidad,2021-1,330,4293,0.07686932215234102,72,Universidad Cooperativa De Colombia,Antioquia,Medellín
1122,Universidad,2021-1,204,2649,0.07701019252548132,73,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1728,Universidad,2021-1,596,7725,0.07715210355987055,74,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1704,Universidad,2021-1,1250,16151,0.07739458857036716,75,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1708,Universidad,2021-1,24,309,0.07766990291262135,76,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1732,Universidad,2021-1,258,3313,0.07787503773015395,77,Universidad Santo Tomas,Boyacá,Tunja
1117,Universidad,2021-1,1204,15450,0.07792880258899676,78,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1203,Universidad,2021-1,1148,14668,0.07826561221707118,79,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1720,Universidad,2021-1,502,6347,0.07909248463841184,80,Universidad Mariana,Nariño,Pasto
1833,Universidad,2021-1,672,8476,0.07928268050967438,81,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1726,Universidad,2021-1,358,4500,0.07955555555555556,82,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1835,Universidad,2021-1,347,4326,0.08021266759130836,83,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1803,Universidad,2021-1,752,9295,0.08090371167294244,84,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1223,Universidad,2021-1,20,247,0.08097165991902834,85,Universidad De Antioquia,Antioquia,Turbo
2711,Universidad,2021-1,198,2439,0.08118081180811808,86,Universidad Catolica De Pereira,Risaralda,Pereira
2832,Universidad,2021-1,786,9605,0.08183237896928683,87,Universidad De Santander - Udes,Santander,Bucaramanga
1705,Universidad,2021-1,443,5396,0.08209785025945145,88,Universidad Santo Tomas,Santander,Bucaramanga
1814,Universidad,2021-1,314,3792,0.08280590717299578,89,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1716,Universidad,2021-1,323,3888,0.0830761316872428,90,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1806,Universidad,2021-1,586,7047,0.08315595288775365,91,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1820,Universidad,2021-1,340,4025,0.084472049689441,92,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1823,Universidad,2021-1,794,9331,0.08509270174686528,93,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1709,Universidad,2021-1,789,9140,0.0863238512035011,94,Universidad Central,Cundinamarca,"Bogotá, D.C."
1807,Universidad,2021-1,418,4822,0.0866860223973455,95,Universidad Libre,Valle del Cauca,Santiago de Cali
2812,Universidad,2021-1,550,6315,0.08709422011084719,96,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1301,Universidad,2021-1,1596,18107,0.08814270724029381,97,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1825,Universidad,2021-1,382,4313,0.08856944122420589,98,Universidad Autonoma De Manizales,Caldas,Manizales
1830,Universidad,2021-1,770,8635,0.08917197452229299,99,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
9122,Universidad,2021-1,61,679,0.0898379970544919,100,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1719,Universidad,2021-1,764,8364,0.09134385461501672,101,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1102,Universidad,2021-1,128,1400,0.09142857142857144,102,Universidad Nacional De Colombia,Antioquia,Medellín
1734,Universidad,2021-1,448,4844,0.09248554913294796,103,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1815,Universidad,2021-1,417,4445,0.0938132733408324,104,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1119,Universidad,2021-1,547,5819,0.09400240591166868,105,Universidad De Los Llanos,Meta,Villavicencio
1733,Universidad,2021-1,191,1988,0.0960764587525151,106,Universidad Sergio Arboleda,Magdalena,Santa Marta
1817,Universidad,2021-1,329,3409,0.09650924024640656,107,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1802,Universidad,2021-1,213,2184,0.09752747252747251,108,Universidad La Gran Colombia,Quindío,Armenia
1717,Universidad,2021-1,414,4162,0.09947140797693416,109,Universidad De San Buenaventura,Antioquia,Medellín
1202,Universidad,2021-1,1914,19166,0.09986434310758636,110,Universidad Del Atlantico,Atlántico,Puerto Colombia
2744,Universidad,2021-1,656,6357,0.1031933301871952,111,Universidad Cesmag - Unicesmag,Nariño,Pasto
1810,Universidad,2021-1,166,1605,0.1034267912772586,112,Universidad Libre,Norte de Santander,San José de Cúcuta
1805,Universidad,2021-1,1482,14302,0.1036218710669836,113,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2810,Universidad,2021-1,1239,11890,0.1042052144659378,114,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1222,Universidad,2021-1,9,83,0.108433734939759,115,Universidad De Antioquia,Antioquia,Puerto Berrío
1818,Universidad,2021-1,3004,27425,0.109535095715588,116,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1112,Universidad,2021-1,1410,12687,0.1111373847245212,117,Universidad De Caldas,Caldas,Manizales
1834,Universidad,2021-1,627,5181,0.1210191082802548,118,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1218,Universidad,2021-1,1643,13409,0.1225296442687747,119,Universidad De La Guajira,La Guajira,Riohacha
1819,Universidad,2021-1,115,870,0.132183908045977,120,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1822,Universidad,2021-1,152,1147,0.1325196163905841,121,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1735,Universidad,2021-1,846,6333,0.1335859782093795,122,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2021-1,915,6535,0.1400153022188217,123,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
2847,Universidad,2021-1,988,6661,0.1483260771655908,124,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1703,Universidad,2021-1,152,988,0.1538461538461539,125,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
2102,Universidad,2021-1,11116,71594,0.1552644076319245,126,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
5802,Universidad,2021-1,2738,17548,0.1560291771142011,127,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
2743,Universidad,2021-1,323,2045,0.1579462102689486,128,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1801,Universidad,2021-1,1563,9356,0.1670585720393331,129,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1725,Universidad,2021-1,546,2456,0.2223127035830619,130,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1219,Universidad,2021-1,73,318,0.229559748427673,131,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1711,Universidad,2020-2,233,9910,0.02351160443995964,1,Universidad De La Sabana,Cundinamarca,Chía
1813,Universidad,2020-2,348,13169,0.02642569671197509,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1715,Universidad,2020-2,82,2741,0.02991608901860635,3,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1824,Universidad,2020-2,132,4386,0.03009575923392613,4,Universidad Metropolitana,Atlántico,Barranquilla
1828,Universidad,2020-2,185,5722,0.03233135267389025,5,Universidad Icesi,Valle del Cauca,Santiago de Cali
9105,Universidad,2020-2,26,796,0.03266331658291458,6,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1222,Universidad,2020-2,2,57,0.03508771929824561,7,Universidad De Antioquia,Antioquia,Puerto Berrío
2813,Universidad,2020-2,59,1657,0.0356065178032589,8,Universidad Eia,Antioquia,Envigado
1213,Universidad,2020-2,691,18605,0.03714055361461972,9,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1714,Universidad,2020-2,345,9210,0.03745928338762215,10,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
9929,Universidad,2020-2,7,183,0.03825136612021858,11,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
1103,Universidad,2020-2,179,4610,0.03882863340563991,12,Universidad Nacional De Colombia,Caldas,Manizales
1210,Universidad,2020-2,230,5899,0.03898965926428208,13,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1713,Universidad,2020-2,503,12858,0.03911961424793903,14,Universidad Del Norte,Atlántico,Barranquilla
1108,Universidad,2020-2,137,3439,0.0398371619656877,15,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1217,Universidad,2020-2,229,5718,0.04004896817068905,16,Universidad De Sucre,Sucre,Sincelejo
1712,Universidad,2020-2,356,8576,0.04151119402985075,17,Universidad Eafit-,Antioquia,Medellín
1113,Universidad,2020-2,493,11845,0.0416209371042634,18,Universidad De Cordoba,Córdoba,Montería
1206,Universidad,2020-2,548,13085,0.04188001528467711,19,Universidad De Nariño,Nariño,Pasto
1727,Universidad,2020-2,105,2507,0.04188272836059035,20,Universidad Pontificia Bolivariana,Córdoba,Montería
1215,Universidad,2020-2,87,2056,0.04231517509727627,21,Universidad De Cundinamarca,Cundinamarca,Girardot
1107,Universidad,2020-2,131,3053,0.04290861447756305,22,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2708,Universidad,2020-2,192,4429,0.04335064348611425,23,Universidad Ces,Antioquia,Medellín
1204,Universidad,2020-2,805,18401,0.04374762241182544,24,Universidad Industrial De Santander,Santander,Bucaramanga
1701,Universidad,2020-2,801,17194,0.04658601837850413,25,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Universidad,2020-2,1170,24927,0.04693705620411602,26,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1702,Universidad,2020-2,329,6590,0.04992412746585736,27,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1827,Universidad,2020-2,110,2189,0.05025125628140704,28,Universidad Catolica De Manizales,Caldas,Manizales
1220,Universidad,2020-2,12,238,0.05042016806722689,29,Universidad De Antioquia,Antioquia,Andes
1209,Universidad,2020-2,825,16234,0.05081926820253788,30,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1301,Universidad,2020-2,859,16138,0.05322840500681621,31,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
2811,Universidad,2020-2,256,4777,0.05359011932175006,32,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1104,Universidad,2020-2,142,2638,0.05382865807429871,33,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1106,Universidad,2020-2,1102,20454,0.05387699227534957,34,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1109,Universidad,2020-2,50,873,0.0572737686139748,35,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1724,Universidad,2020-2,185,3124,0.05921895006402049,36,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1212,Universidad,2020-2,1398,23503,0.0594817682848998,37,Universidad De Pamplona,Norte de Santander,Pamplona
1121,Universidad,2020-2,310,5116,0.06059421422986708,38,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1723,Universidad,2020-2,260,4198,0.06193425440686041,39,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1707,Universidad,2020-2,460,7394,0.06221260481471463,40,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1710,Universidad,2020-2,757,12100,0.06256198347107438,41,Universidad Pontificia Bolivariana,Antioquia,Medellín
2719,Universidad,2020-2,962,15358,0.06263836437036073,42,Universidad Católica Luis Amigó,Antioquia,Medellín
1729,Universidad,2020-2,667,10563,0.06314493988450251,43,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
2832,Universidad,2020-2,583,8985,0.06488592097941012,44,Universidad De Santander - Udes,Santander,Bucaramanga
9122,Universidad,2020-2,44,678,0.06489675516224189,45,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1820,Universidad,2020-2,254,3913,0.06491183235369281,46,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
1111,Universidad,2020-2,929,14285,0.06503325166258313,47,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1203,Universidad,2020-2,1679,25624,0.0655245082734936,48,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1816,Universidad,2020-2,273,4156,0.06568816169393647,49,Universidad Cooperativa De Colombia,Antioquia,Medellín
2805,Universidad,2020-2,932,14132,0.06594961788848004,50,Universidad Simon Bolivar,Atlántico,Barranquilla
1219,Universidad,2020-2,22,325,0.06769230769230769,51,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1720,Universidad,2020-2,432,6368,0.0678391959798995,52,Universidad Mariana,Nariño,Pasto
1214,Universidad,2020-2,718,10433,0.0688200900987252,53,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1716,Universidad,2020-2,287,3972,0.07225579053373615,54,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1826,Universidad,2020-2,1019,13980,0.0728898426323319,55,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1708,Universidad,2020-2,21,288,0.07291666666666667,56,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1835,Universidad,2020-2,334,4534,0.07366563740626378,57,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2020-2,460,6054,0.07598282127518996,58,Universidad De Manizales,Caldas,Manizales
1114,Universidad,2020-2,919,12025,0.07642411642411642,59,Universidad Surcolombiana,Huila,Neiva
1120,Universidad,2020-2,954,12475,0.07647294589178356,60,Universidad Popular Del Cesar,Cesar,Valledupar
1730,Universidad,2020-2,28,365,0.07671232876712329,61,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1123,Universidad,2020-2,164,2105,0.07790973871733967,62,Universidad Popular Del Cesar,Cesar,Aguachica
1815,Universidad,2020-2,354,4524,0.07824933687002653,63,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1817,Universidad,2020-2,266,3395,0.07835051546391752,64,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1829,Universidad,2020-2,122,1543,0.07906675307841866,65,Universidad Santiago De Cali,Valle del Cauca,Palmira
1709,Universidad,2020-2,744,9389,0.0792416657791032,66,Universidad Central,Cundinamarca,"Bogotá, D.C."
2744,Universidad,2020-2,500,6262,0.07984669434685404,67,Universidad Cesmag - Unicesmag,Nariño,Pasto
1216,Universidad,2020-2,39,488,0.07991803278688525,68,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1831,Universidad,2020-2,456,5619,0.0811532301121196,69,Universidad De Ibague,Tolima,Ibagué
1728,Universidad,2020-2,626,7577,0.08261845057410584,70,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1205,Universidad,2020-2,1342,16208,0.08279861796643632,71,Universidad De Cartagena,Bolívar,Cartagena de Indias
1832,Universidad,2020-2,436,5162,0.08446338628438589,72,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1812,Universidad,2020-2,704,8299,0.08482949752982287,73,Universidad De Medellin,Antioquia,Medellín
1223,Universidad,2020-2,23,271,0.08487084870848709,74,Universidad De Antioquia,Antioquia,Turbo
1833,Universidad,2020-2,696,8134,0.08556675682321122,75,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1717,Universidad,2020-2,359,4183,0.08582357159933063,76,Universidad De San Buenaventura,Antioquia,Medellín
1719,Universidad,2020-2,718,8307,0.08643312868664982,77,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,2020-2,323,3729,0.08661839635290963,78,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1726,Universidad,2020-2,393,4467,0.08797850906648758,79,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1105,Universidad,2020-2,760,8586,0.08851618914511997,80,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2810,Universidad,2020-2,1006,11317,0.08889281611734559,81,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1803,Universidad,2020-2,913,10251,0.08906448151399864,82,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1809,Universidad,2020-2,263,2945,0.08930390492359933,83,Universidad Libre,Risaralda,Pereira
2743,Universidad,2020-2,148,1640,0.0902439024390244,84,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1830,Universidad,2020-2,810,8913,0.09087849209020532,85,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1706,Universidad,2020-2,484,5312,0.0911144578313253,86,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1207,Universidad,2020-2,1527,16543,0.09230490237562716,87,Universidad Del Tolima,Tolima,Ibagué
1208,Universidad,2020-2,1214,13122,0.09251638469745466,88,Universidad Del Quindio,Quindío,Armenia
1704,Universidad,2020-2,1504,16248,0.09256523879862136,89,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1808,Universidad,2020-2,451,4847,0.09304724571900144,90,Universidad Libre,Atlántico,Barranquilla
1718,Universidad,2020-2,224,2389,0.09376308078694014,91,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1818,Universidad,2020-2,2646,28196,0.09384309831181728,92,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1732,Universidad,2020-2,301,3200,0.0940625,93,Universidad Santo Tomas,Boyacá,Tunja
1117,Universidad,2020-2,1435,15113,0.09495136637332098,94,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
9933,Universidad,2020-2,19,200,0.095,95,Universidad Nacional De Colombia,Cesar,La Paz
1202,Universidad,2020-2,1669,17450,0.09564469914040116,96,Universidad Del Atlantico,Atlántico,Puerto Colombia
1115,Universidad,2020-2,812,8475,0.09581120943952802,97,Universidad De La Amazonia,Caquetá,Florencia
1122,Universidad,2020-2,257,2673,0.09614665170220726,98,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1823,Universidad,2020-2,906,9318,0.09723116548615585,99,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1734,Universidad,2020-2,467,4800,0.09729166666666668,100,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1802,Universidad,2020-2,209,2096,0.09971374045801527,101,Universidad La Gran Colombia,Quindío,Armenia
1834,Universidad,2020-2,499,4915,0.1015259409969481,102,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1825,Universidad,2020-2,450,4375,0.1028571428571429,103,Universidad Autonoma De Manizales,Caldas,Manizales
1733,Universidad,2020-2,198,1857,0.1066235864297254,104,Universidad Sergio Arboleda,Magdalena,Santa Marta
2847,Universidad,2020-2,686,6371,0.1076754041751687,105,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1822,Universidad,2020-2,121,1123,0.1077471059661621,106,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
2812,Universidad,2020-2,702,6475,0.1084169884169884,107,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1705,Universidad,2020-2,585,5350,0.1093457943925234,108,Universidad Santo Tomas,Santander,Bucaramanga
1805,Universidad,2020-2,1563,14234,0.1098075031614444,109,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2711,Universidad,2020-2,269,2449,0.1098407513270723,110,Universidad Catolica De Pereira,Risaralda,Pereira
1118,Universidad,2020-2,1040,9385,0.1108151305274374,111,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1804,Universidad,2020-2,749,6723,0.1114085973523724,112,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1201,Universidad,2020-2,3252,29132,0.1116298228751888,113,Universidad De Antioquia,Antioquia,Medellín
1221,Universidad,2020-2,21,187,0.1122994652406417,114,Universidad De Antioquia,Antioquia,Caucasia
1807,Universidad,2020-2,551,4886,0.112771182971756,115,Universidad Libre,Valle del Cauca,Santiago de Cali
1819,Universidad,2020-2,102,902,0.1130820399113082,116,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1735,Universidad,2020-2,721,6209,0.1161217587373168,117,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1112,Universidad,2020-2,1518,13022,0.1165719551528183,118,Universidad De Caldas,Caldas,Manizales
1102,Universidad,2020-2,1367,10734,0.1273523383640768,119,Universidad Nacional De Colombia,Antioquia,Medellín
1725,Universidad,2020-2,295,2246,0.1313446126447017,120,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1806,Universidad,2020-2,965,7222,0.1336194959844918,121,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1703,Universidad,2020-2,149,1106,0.1347197106690778,122,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
5802,Universidad,2020-2,2496,17781,0.1403745571115235,123,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1801,Universidad,2020-2,1373,9543,0.1438750916902442,124,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1810,Universidad,2020-2,264,1630,0.1619631901840491,125,Universidad Libre,Norte de Santander,San José de Cúcuta
1811,Universidad,2020-2,189,1038,0.1820809248554913,126,Universidad Libre,Santander,Socorro
2102,Universidad,2020-2,14334,67309,0.2129581482416913,127,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
9125,Universidad,2020-2,8,25,0.32,128,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1824,Universidad,2020-1,99,4338,0.02282157676348548,1,Universidad Metropolitana,Atlántico,Barranquilla
1108,Universidad,2020-1,85,3382,0.02513305736250739,2,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1813,Universidad,2020-1,397,13475,0.02946196660482375,3,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,Universidad,2020-1,325,10000,0.0325,4,Universidad De La Sabana,Cundinamarca,Chía
1828,Universidad,2020-1,196,5765,0.03399826539462272,5,Universidad Icesi,Valle del Cauca,Santiago de Cali
1713,Universidad,2020-1,444,12960,0.03425925925925926,6,Universidad Del Norte,Atlántico,Barranquilla
1107,Universidad,2020-1,105,3001,0.03498833722092635,7,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
9125,Universidad,2020-1,1,26,0.03846153846153846,8,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1215,Universidad,2020-1,79,1996,0.03957915831663326,9,Universidad De Cundinamarca,Cundinamarca,Girardot
1210,Universidad,2020-1,239,5967,0.04005362828892241,10,Universidad Francisco De Paula Santander,Norte de Santander,Ocaña
1715,Universidad,2020-1,128,3081,0.041544952937358,11,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1217,Universidad,2020-1,236,5676,0.04157857646229739,12,Universidad De Sucre,Sucre,Sincelejo
9105,Universidad,2020-1,31,734,0.04223433242506812,13,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1701,Universidad,2020-1,773,17695,0.04368465668267872,14,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1109,Universidad,2020-1,38,855,0.04444444444444445,15,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1714,Universidad,2020-1,430,9653,0.04454573707655651,16,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1101,Universidad,2020-1,1106,24531,0.04508580979169215,17,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1110,Universidad,2020-1,549,11788,0.04657278588394978,18,Universidad Del Cauca,Cauca,Popayán
1212,Universidad,2020-1,1122,23834,0.04707560627674751,19,Universidad De Pamplona,Norte de Santander,Pamplona
1206,Universidad,2020-1,609,12867,0.04733038004196782,20,Universidad De Nariño,Nariño,Pasto
1808,Universidad,2020-1,232,4899,0.04735660338844662,21,Universidad Libre,Atlántico,Barranquilla
1204,Universidad,2020-1,850,17939,0.0473827972573722,22,Universidad Industrial De Santander,Santander,Bucaramanga
1106,Universidad,2020-1,974,20262,0.04807027934063764,23,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1702,Universidad,2020-1,319,6618,0.04820187367784829,24,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,Universidad,2020-1,126,2592,0.04861111111111111,25,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1213,Universidad,2020-1,895,18304,0.04889641608391608,26,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1730,Universidad,2020-1,17,345,0.04927536231884058,27,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1827,Universidad,2020-1,115,2310,0.04978354978354978,28,Universidad Catolica De Manizales,Caldas,Manizales
9122,Universidad,2020-1,35,696,0.05028735632183908,29,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1727,Universidad,2020-1,130,2573,0.05052467936261174,30,Universidad Pontificia Bolivariana,Córdoba,Montería
2708,Universidad,2020-1,226,4410,0.05124716553287982,31,Universidad Ces,Antioquia,Medellín
1712,Universidad,2020-1,468,9066,0.05162144275314361,32,Universidad Eafit-,Antioquia,Medellín
1103,Universidad,2020-1,244,4587,0.05319380858949204,33,Universidad Nacional De Colombia,Caldas,Manizales
1720,Universidad,2020-1,378,6942,0.05445116681071737,34,Universidad Mariana,Nariño,Pasto
1112,Universidad,2020-1,717,13135,0.05458698134754473,35,Universidad De Caldas,Caldas,Manizales
2811,Universidad,2020-1,276,5015,0.05503489531405783,36,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1722,Universidad,2020-1,341,6190,0.05508885298869143,37,Universidad De Manizales,Caldas,Manizales
1209,Universidad,2020-1,904,16059,0.05629242169499969,38,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1115,Universidad,2020-1,467,8142,0.0573569147629575,39,Universidad De La Amazonia,Caquetá,Florencia
1724,Universidad,2020-1,180,3131,0.05748961992973491,40,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1707,Universidad,2020-1,467,7954,0.0587125974352527,41,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1119,Universidad,2020-1,332,5611,0.05916948850472287,42,Universidad De Los Llanos,Meta,Villavicencio
1710,Universidad,2020-1,767,12809,0.05987977203528769,43,Universidad Pontificia Bolivariana,Antioquia,Medellín
2813,Universidad,2020-1,104,1722,0.06039488966318235,44,Universidad Eia,Antioquia,Envigado
1809,Universidad,2020-1,183,3018,0.06063618290258449,45,Universidad Libre,Risaralda,Pereira
2719,Universidad,2020-1,960,15728,0.06103763987792472,46,Universidad Católica Luis Amigó,Antioquia,Medellín
2805,Universidad,2020-1,887,14474,0.0612822992952881,47,Universidad Simon Bolivar,Atlántico,Barranquilla
1807,Universidad,2020-1,316,5040,0.0626984126984127,48,Universidad Libre,Valle del Cauca,Santiago de Cali
1732,Universidad,2020-1,205,3258,0.06292203806015961,49,Universidad Santo Tomas,Boyacá,Tunja
1820,Universidad,2020-1,257,3980,0.06457286432160804,50,Universidad Cooperativa De Colombia,Magdalena,Santa Marta
2744,Universidad,2020-1,405,6271,0.0645830011162494,51,Universidad Cesmag - Unicesmag,Nariño,Pasto
1216,Universidad,2020-1,30,463,0.06479481641468683,52,Universidad De Cundinamarca,Cundinamarca,Villa de San Diego de Ubaté
1729,Universidad,2020-1,708,10752,0.06584821428571429,53,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1214,Universidad,2020-1,677,10232,0.06616497263487099,54,Universidad De Cundinamarca,Cundinamarca,Fusagasugá
1121,Universidad,2020-1,346,5137,0.06735448705470119,55,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1111,Universidad,2020-1,985,14442,0.06820384988228777,56,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1815,Universidad,2020-1,327,4788,0.06829573934837092,57,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1723,Universidad,2020-1,318,4627,0.06872703695699157,58,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1718,Universidad,2020-1,175,2530,0.0691699604743083,59,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1105,Universidad,2020-1,604,8520,0.07089201877934272,60,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2832,Universidad,2020-1,660,9282,0.07110536522301228,61,Universidad De Santander - Udes,Santander,Bucaramanga
1816,Universidad,2020-1,298,4187,0.07117267733460712,62,Universidad Cooperativa De Colombia,Antioquia,Medellín
1114,Universidad,2020-1,884,12217,0.07235818940820168,63,Universidad Surcolombiana,Huila,Neiva
1803,Universidad,2020-1,795,10935,0.07270233196159122,64,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1716,Universidad,2020-1,303,4144,0.07311776061776062,65,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1706,Universidad,2020-1,402,5484,0.07330415754923414,66,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1705,Universidad,2020-1,376,5116,0.07349491790461297,67,Universidad Santo Tomas,Santander,Bucaramanga
1826,Universidad,2020-1,1070,14533,0.07362554187022638,68,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1208,Universidad,2020-1,947,12768,0.07416979949874687,69,Universidad Del Quindio,Quindío,Armenia
1728,Universidad,2020-1,593,7627,0.07775009833486299,70,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1835,Universidad,2020-1,366,4697,0.07792207792207792,71,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1833,Universidad,2020-1,634,8110,0.0781750924784217,72,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1708,Universidad,2020-1,26,332,0.0783132530120482,73,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1717,Universidad,2020-1,359,4563,0.07867630944554022,74,Universidad De San Buenaventura,Antioquia,Medellín
1709,Universidad,2020-1,789,10014,0.07878969442780108,75,Universidad Central,Cundinamarca,"Bogotá, D.C."
1113,Universidad,2020-1,1216,15409,0.07891491985203453,76,Universidad De Cordoba,Córdoba,Montería
1811,Universidad,2020-1,90,1138,0.07908611599297012,77,Universidad Libre,Santander,Socorro
1207,Universidad,2020-1,1209,15265,0.07920078611202096,78,Universidad Del Tolima,Tolima,Ibagué
1831,Universidad,2020-1,483,6077,0.07948000658219516,79,Universidad De Ibague,Tolima,Ibagué
1806,Universidad,2020-1,603,7583,0.07951997890017144,80,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1122,Universidad,2020-1,212,2659,0.07972922151184655,81,Universidad Del Pacifico,Valle del Cauca,Buenaventura
1203,Universidad,2020-1,2094,26092,0.08025448413306761,82,Universidad Del Valle,Valle del Cauca,Santiago de Cali
2711,Universidad,2020-1,216,2689,0.08032725920416511,83,Universidad Catolica De Pereira,Risaralda,Pereira
1805,Universidad,2020-1,1099,13433,0.08181344450234497,84,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1818,Universidad,2020-1,2442,29416,0.08301604568942073,85,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1223,Universidad,2020-1,22,264,0.08333333333333333,86,Universidad De Antioquia,Antioquia,Turbo
1120,Universidad,2020-1,1063,12693,0.08374694713621682,87,Universidad Popular Del Cesar,Cesar,Valledupar
1823,Universidad,2020-1,814,9650,0.08435233160621762,88,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1205,Universidad,2020-1,1377,16312,0.08441638057871506,89,Universidad De Cartagena,Bolívar,Cartagena de Indias
1834,Universidad,2020-1,401,4742,0.0845634753268663,90,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Bolívar,Cartagena de Indias
1726,Universidad,2020-1,405,4780,0.08472803347280335,91,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1830,Universidad,2020-1,807,9418,0.0856869823741771,92,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
2810,Universidad,2020-1,1013,11816,0.08573121191604605,93,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1102,Universidad,2020-1,895,10405,0.08601633829889477,94,Universidad Nacional De Colombia,Antioquia,Medellín
1814,Universidad,2020-1,338,3925,0.08611464968152867,95,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1829,Universidad,2020-1,116,1345,0.0862453531598513,96,Universidad Santiago De Cali,Valle del Cauca,Palmira
1817,Universidad,2020-1,310,3592,0.08630289532293986,97,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1118,Universidad,2020-1,819,9460,0.08657505285412262,98,Universidad Tecnologica Del Choco-Diego Luis Cordoba,Chocó,Quibdó
1810,Universidad,2020-1,147,1689,0.08703374777975133,99,Universidad Libre,Norte de Santander,San José de Cúcuta
1704,Universidad,2020-1,1499,17196,0.08717143521749245,100,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1734,Universidad,2020-1,446,5054,0.08824693312227938,101,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1822,Universidad,2020-1,107,1200,0.08916666666666667,102,Corporacion Universidad Piloto De Colombia,Cundinamarca,Girardot
1719,Universidad,2020-1,800,8723,0.0917115671214032,103,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1812,Universidad,2020-1,827,8960,0.09229910714285716,104,Universidad De Medellin,Antioquia,Medellín
1733,Universidad,2020-1,174,1845,0.0943089430894309,105,Universidad Sergio Arboleda,Magdalena,Santa Marta
1222,Universidad,2020-1,4,41,0.0975609756097561,106,Universidad De Antioquia,Antioquia,Puerto Berrío
2812,Universidad,2020-1,631,6465,0.09760247486465584,107,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1819,Universidad,2020-1,98,1004,0.09760956175298804,108,Universidad Cooperativa De Colombia,Santander,Barrancabermeja
1117,Universidad,2020-1,1541,15463,0.09965724632994892,109,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1832,Universidad,2020-1,566,5597,0.101125603001608,110,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1201,Universidad,2020-1,3058,30110,0.1015609432082365,111,Universidad De Antioquia,Antioquia,Medellín
1802,Universidad,2020-1,226,2219,0.1018476791347454,112,Universidad La Gran Colombia,Quindío,Armenia
2847,Universidad,2020-1,710,6734,0.1054351054351054,113,Universidad De Investigacion Y Desarrollo - Udi,Santander,Bucaramanga
1123,Universidad,2020-1,224,2096,0.1068702290076336,114,Universidad Popular Del Cesar,Cesar,Aguachica
2743,Universidad,2020-1,189,1743,0.108433734939759,115,Universidad Internacional Del Trópico Americano - Unitrópico,Casanare,Yopal
1825,Universidad,2020-1,511,4663,0.1095861033669312,116,Universidad Autonoma De Manizales,Caldas,Manizales
1301,Universidad,2020-1,1792,16214,0.1105217713087455,117,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1804,Universidad,2020-1,839,7526,0.1114802019665161,118,Universidad Autonoma Del Caribe- Uniautonoma,Atlántico,Barranquilla
1221,Universidad,2020-1,17,146,0.1164383561643836,119,Universidad De Antioquia,Antioquia,Caucasia
1220,Universidad,2020-1,38,323,0.1176470588235294,120,Universidad De Antioquia,Antioquia,Andes
1202,Universidad,2020-1,2393,19892,0.120299617936859,121,Universidad Del Atlantico,Atlántico,Puerto Colombia
5802,Universidad,2020-1,2198,18080,0.121570796460177,122,Universidad Ecci,Cundinamarca,"Bogotá, D.C."
1735,Universidad,2020-1,841,6586,0.1276951108411783,123,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1801,Universidad,2020-1,1295,9686,0.1336981209993806,124,Universidad La Gran Colombia,Cundinamarca,"Bogotá, D.C."
1218,Universidad,2020-1,1897,13880,0.136671469740634,125,Universidad De La Guajira,La Guajira,Riohacha
1219,Universidad,2020-1,63,372,0.1693548387096774,126,Universidad De Antioquia,Antioquia,El Carmen de Viboral
2102,Universidad,2020-1,11794,65796,0.1792510182989847,127,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1725,Universidad,2020-1,972,3779,0.2572109023551204,128,Fundacion Universidad Autonoma De Colombia -Fuac-,Cundinamarca,"Bogotá, D.C."
1703,Universidad,2020-1,520,1648,0.3155339805825243,129,Universidad Incca De Colombia,Cundinamarca,"Bogotá, D.C."
9929,Universidad,2020-1,506,764,0.662303664921466,130,Universidad Autónoma Indígena Intercultural - Uaiin,Cauca,Popayán
`;

export const RAW_CSV_U_REF = `IES,U Referencia,Periodo,Desertores,Matriculados,% Deserción,Ranking,NOMBRE_INSTITUCIÓN,DEPARTAMENTO_IES,MUNICIPIO_IES
1711,Y,2024-2,237,8981,0.02638904353635453,1,Universidad De La Sabana,Cundinamarca,Chía
2704,Y,2024-2,34,1181,0.0287891617273497,2,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1813,Y,2024-2,399,13156,0.03032836728488902,3,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,Y,2024-2,173,5054,0.03423031262366442,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
1712,Y,2024-2,315,7770,0.04054054054054054,5,Universidad Eafit-,Antioquia,Medellín
2813,Y,2024-2,81,1906,0.04249737670514166,6,Universidad Eia,Antioquia,Envigado
1701,Y,2024-2,688,16005,0.0429865666979069,7,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Y,2024-2,1193,27130,0.04397346111315886,8,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1713,Y,2024-2,469,10623,0.04414948696225172,9,Universidad Del Norte,Atlántico,Barranquilla
2702,Y,2024-2,168,3538,0.04748445449406444,10,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1714,Y,2024-2,380,7991,0.04755349768489551,11,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
2811,Y,2024-2,188,3457,0.05438241249638415,12,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1715,Y,2024-2,111,1869,0.0593900481540931,13,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1826,Y,2024-2,766,12687,0.06037676361630015,14,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1707,Y,2024-2,370,5498,0.0672971989814478,15,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2838,Y,2024-2,45,653,0.06891271056661562,16,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1710,Y,2024-2,631,8817,0.07156629238970172,17,Universidad Pontificia Bolivariana,Antioquia,Medellín
1729,Y,2024-2,779,10020,0.07774451097804391,18,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1117,Y,2024-2,1384,15839,0.08737925374076647,19,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1728,Y,2024-2,581,6642,0.08747365251430292,20,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1823,Y,2024-2,660,7354,0.08974707642099537,21,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1718,Y,2024-2,229,2535,0.0903353057199211,22,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1706,Y,2024-2,450,4951,0.09089072914562717,23,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1704,Y,2024-2,1214,12492,0.09718219660582772,24,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1719,Y,2024-2,622,5719,0.1087602727749607,25,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
2723,Y,2024-2,345,2837,0.1216073316884032,26,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1735,Y,2024-2,791,6163,0.1283465844556223,27,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1813,Y,2024-1,310,12665,0.02447690485590209,1,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,Y,2024-1,140,4973,0.02815202091292982,2,Universidad Icesi,Valle del Cauca,Santiago de Cali
1711,Y,2024-1,274,9280,0.02952586206896552,3,Universidad De La Sabana,Cundinamarca,Chía
2813,Y,2024-1,65,1873,0.03470368392952482,4,Universidad Eia,Antioquia,Envigado
2704,Y,2024-1,39,1114,0.03500897666068223,5,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1713,Y,2024-1,407,10924,0.03725741486634932,6,Universidad Del Norte,Atlántico,Barranquilla
2702,Y,2024-1,130,3338,0.03894547633313361,7,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1701,Y,2024-1,672,16225,0.04141756548536209,8,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1712,Y,2024-1,397,8124,0.04886755292959134,9,Universidad Eafit-,Antioquia,Medellín
1101,Y,2024-1,1485,27734,0.05354438595226076,10,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2838,Y,2024-1,37,677,0.05465288035450517,11,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1707,Y,2024-1,313,5396,0.05800593031875463,12,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2811,Y,2024-1,208,3563,0.05837777154083637,13,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1706,Y,2024-1,298,5015,0.05942173479561316,14,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1826,Y,2024-1,780,12969,0.06014341892204488,15,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1714,Y,2024-1,538,8530,0.0630715123094959,16,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1710,Y,2024-1,604,9195,0.0656878738444807,17,Universidad Pontificia Bolivariana,Antioquia,Medellín
1715,Y,2024-1,143,2063,0.06931652932622395,18,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1729,Y,2024-1,779,10256,0.07595553822152887,19,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1718,Y,2024-1,187,2308,0.08102253032928942,20,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1728,Y,2024-1,617,7050,0.0875177304964539,21,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1719,Y,2024-1,566,6205,0.0912167606768735,22,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1823,Y,2024-1,696,7612,0.09143457698370994,23,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1117,Y,2024-1,1511,16233,0.0930819934700918,24,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
2723,Y,2024-1,251,2631,0.09540098821740783,25,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1704,Y,2024-1,1487,13656,0.1088898652606913,26,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1735,Y,2024-1,754,6295,0.1197776012708499,27,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1828,Y,2023-2,166,5094,0.0325873576756969,1,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Y,2023-2,419,12767,0.03281898644943997,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,Y,2023-2,318,9281,0.03426354918651008,3,Universidad De La Sabana,Cundinamarca,Chía
1713,Y,2023-2,395,11171,0.03535941276519559,4,Universidad Del Norte,Atlántico,Barranquilla
1712,Y,2023-2,296,7947,0.03724675978356613,5,Universidad Eafit-,Antioquia,Medellín
1714,Y,2023-2,350,8468,0.0413320736891828,6,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
2838,Y,2023-2,27,623,0.04333868378812199,7,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1701,Y,2023-2,714,16110,0.04432029795158287,8,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Y,2023-2,1243,27547,0.04512288089447127,9,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2704,Y,2023-2,53,1136,0.04665492957746479,10,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
2702,Y,2023-2,144,2960,0.04864864864864865,11,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
2813,Y,2023-2,98,1844,0.05314533622559653,12,Universidad Eia,Antioquia,Envigado
1715,Y,2023-2,118,2049,0.05758906783796974,13,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
2811,Y,2023-2,217,3660,0.0592896174863388,14,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1826,Y,2023-2,870,13027,0.06678437092193137,15,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1710,Y,2023-2,637,9316,0.06837698583082868,16,Universidad Pontificia Bolivariana,Antioquia,Medellín
1707,Y,2023-2,373,5280,0.0706439393939394,17,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1729,Y,2023-2,749,9922,0.07548881273936707,18,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1706,Y,2023-2,439,4964,0.08843674456083804,19,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1823,Y,2023-2,688,7637,0.0900877307843394,20,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1117,Y,2023-2,1463,15856,0.09226791120080728,21,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1718,Y,2023-2,211,2260,0.09336283185840707,22,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1719,Y,2023-2,642,6569,0.0977317704369006,23,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1704,Y,2023-2,1437,13841,0.1038219781807673,24,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1728,Y,2023-2,822,7600,0.1081578947368421,25,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1735,Y,2023-2,608,5532,0.1099060014461316,26,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2723,Y,2023-2,333,2654,0.1254709871891485,27,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1711,Y,2023-1,246,9498,0.02590018951358181,1,Universidad De La Sabana,Cundinamarca,Chía
2704,Y,2023-1,30,1053,0.02849002849002849,2,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1828,Y,2023-1,148,5087,0.02909376842932966,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Y,2023-1,376,12490,0.03010408326661329,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1101,Y,2023-1,840,27074,0.03102607667873236,5,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1713,Y,2023-1,426,11680,0.03647260273972603,6,Universidad Del Norte,Atlántico,Barranquilla
2702,Y,2023-1,117,2969,0.03940720781407881,7,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1714,Y,2023-1,369,8584,0.04298695246971109,8,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1701,Y,2023-1,707,16386,0.04314658855120224,9,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1712,Y,2023-1,457,8124,0.05625307730182176,10,Universidad Eafit-,Antioquia,Medellín
1707,Y,2023-1,316,5367,0.05887833053847587,11,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1715,Y,2023-1,134,2234,0.05998209489704566,12,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1706,Y,2023-1,324,5135,0.06309639727361246,13,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
2813,Y,2023-1,133,1942,0.06848609680741503,14,Universidad Eia,Antioquia,Envigado
2811,Y,2023-1,275,3912,0.07029652351738241,15,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1710,Y,2023-1,703,9996,0.070328131252501,16,Universidad Pontificia Bolivariana,Antioquia,Medellín
1826,Y,2023-1,963,13009,0.0740256745330156,17,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2838,Y,2023-1,50,648,0.07716049382716049,18,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1729,Y,2023-1,858,10451,0.08209740694670367,19,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1719,Y,2023-1,571,6943,0.08224110615007922,20,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1728,Y,2023-1,628,7504,0.08368869936034115,21,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1823,Y,2023-1,663,7827,0.08470678420850901,22,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1718,Y,2023-1,196,2232,0.08781362007168458,23,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1117,Y,2023-1,1492,15805,0.09440050616893388,24,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1735,Y,2023-1,546,5498,0.09930883957802836,25,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1704,Y,2023-1,1549,14640,0.1058060109289617,26,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
2723,Y,2023-1,294,2659,0.1105678826626551,27,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1828,Y,2022-2,123,5153,0.02386959052978847,1,Universidad Icesi,Valle del Cauca,Santiago de Cali
2704,Y,2022-2,30,1115,0.02690582959641256,2,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1711,Y,2022-2,303,9595,0.03157894736842105,3,Universidad De La Sabana,Cundinamarca,Chía
1713,Y,2022-2,392,11825,0.03315010570824525,4,Universidad Del Norte,Atlántico,Barranquilla
2702,Y,2022-2,92,2753,0.03341808935706502,5,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1712,Y,2022-2,265,7837,0.03381395942324869,6,Universidad Eafit-,Antioquia,Medellín
1813,Y,2022-2,439,12808,0.03427545284197377,7,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1101,Y,2022-2,1037,27017,0.03838324018210756,8,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1701,Y,2022-2,636,16178,0.03931264680430214,9,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1714,Y,2022-2,393,8730,0.04501718213058419,10,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
2838,Y,2022-2,28,606,0.0462046204620462,11,Corporacion Colegiatura Colombiana,Antioquia,Medellín
2811,Y,2022-2,226,4115,0.05492102065613609,12,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1715,Y,2022-2,153,2301,0.06649282920469361,13,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1826,Y,2022-2,878,12714,0.06905773163441875,14,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1729,Y,2022-2,723,10357,0.0698078594187506,15,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
2813,Y,2022-2,132,1852,0.07127429805615551,16,Universidad Eia,Antioquia,Envigado
1707,Y,2022-2,391,5428,0.07203389830508475,17,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1117,Y,2022-2,1145,15334,0.07467066649276119,18,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1728,Y,2022-2,590,7126,0.08279539713724389,19,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1706,Y,2022-2,436,5110,0.0853228962818004,20,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1718,Y,2022-2,183,2121,0.08628005657708628,21,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1823,Y,2022-2,717,8137,0.08811601327270493,22,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1704,Y,2022-2,1284,14467,0.08875371535218082,23,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1719,Y,2022-2,680,7152,0.09507829977628636,24,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1735,Y,2022-2,565,5297,0.1066641495185954,25,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1710,Y,2022-2,1181,10814,0.1092102829665249,26,Universidad Pontificia Bolivariana,Antioquia,Medellín
2723,Y,2022-2,323,2688,0.1201636904761905,27,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1711,Y,2022-1,158,9703,0.01628362362156034,1,Universidad De La Sabana,Cundinamarca,Chía
2702,Y,2022-1,57,2581,0.02208446338628439,2,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1713,Y,2022-1,318,12215,0.02603356528857962,3,Universidad Del Norte,Atlántico,Barranquilla
1813,Y,2022-1,392,13055,0.03002680965147453,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,Y,2022-1,161,5328,0.03021771771771772,5,Universidad Icesi,Valle del Cauca,Santiago de Cali
1714,Y,2022-1,310,8877,0.03492170778416132,6,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
2704,Y,2022-1,39,1078,0.03617810760667903,7,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1701,Y,2022-1,651,16702,0.03897736797988265,8,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1712,Y,2022-1,352,8331,0.04225183051254351,9,Universidad Eafit-,Antioquia,Medellín
1101,Y,2022-1,1161,27086,0.0428634719043048,10,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2811,Y,2022-1,187,4316,0.04332715477293791,11,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1715,Y,2022-1,141,2600,0.05423076923076923,12,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1710,Y,2022-1,642,11081,0.05793700929518997,13,Universidad Pontificia Bolivariana,Antioquia,Medellín
2813,Y,2022-1,116,1889,0.0614081524616199,14,Universidad Eia,Antioquia,Envigado
1707,Y,2022-1,373,5894,0.06328469630132338,15,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1729,Y,2022-1,665,10457,0.06359376494214401,16,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1706,Y,2022-1,362,5444,0.06649522409992653,17,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1826,Y,2022-1,888,12826,0.0692343676906284,18,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1117,Y,2022-1,1093,15278,0.07154077758868962,19,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
2838,Y,2022-1,47,653,0.07197549770290965,20,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1728,Y,2022-1,565,7281,0.07759923087487983,21,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1718,Y,2022-1,177,2135,0.08290398126463701,22,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1823,Y,2022-1,726,8593,0.08448737344350052,23,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1719,Y,2022-1,672,7574,0.08872458410351201,24,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1735,Y,2022-1,463,4982,0.09293456443195504,25,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1704,Y,2022-1,1502,15341,0.09790756795515286,26,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
2723,Y,2022-1,385,2858,0.1347095871238628,27,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1101,Y,2021-2,519,25295,0.02051788891085195,1,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2704,Y,2021-2,23,1095,0.02100456621004566,2,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1828,Y,2021-2,131,5493,0.02384853449845258,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Y,2021-2,317,12973,0.02443536575965467,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
2702,Y,2021-2,62,2376,0.02609427609427609,5,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1713,Y,2021-2,356,11863,0.03000927252802832,6,Universidad Del Norte,Atlántico,Barranquilla
1711,Y,2021-2,309,9783,0.03158540325053664,7,Universidad De La Sabana,Cundinamarca,Chía
1714,Y,2021-2,281,8584,0.03273532152842498,8,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1712,Y,2021-2,300,8189,0.03663450970814507,9,Universidad Eafit-,Antioquia,Medellín
2811,Y,2021-2,162,4344,0.03729281767955801,10,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1701,Y,2021-2,620,16061,0.03860282672311811,11,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
2813,Y,2021-2,74,1793,0.04127161182375906,12,Universidad Eia,Antioquia,Envigado
1710,Y,2021-2,536,10963,0.04889172671713947,13,Universidad Pontificia Bolivariana,Antioquia,Medellín
1715,Y,2021-2,131,2617,0.05005731753916699,14,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1729,Y,2021-2,522,10032,0.05203349282296651,15,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1707,Y,2021-2,297,5707,0.05204135272472402,16,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1826,Y,2021-2,679,12400,0.05475806451612903,17,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
2838,Y,2021-2,35,606,0.05775577557755775,18,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1117,Y,2021-2,1032,14655,0.07041965199590583,19,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1728,Y,2021-2,497,6987,0.0711321024760269,20,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1706,Y,2021-2,383,5205,0.07358309317963496,21,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1718,Y,2021-2,165,2120,0.07783018867924528,22,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1704,Y,2021-2,1266,15130,0.08367481824190351,23,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1823,Y,2021-2,724,8606,0.08412735300952824,24,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1719,Y,2021-2,681,7345,0.09271613342409804,25,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
2723,Y,2021-2,326,2735,0.1191956124314442,26,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1735,Y,2021-2,726,5310,0.1367231638418079,27,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1711,Y,2021-1,226,10043,0.02250323608483521,1,Universidad De La Sabana,Cundinamarca,Chía
1828,Y,2021-1,129,5598,0.02304394426580922,2,Universidad Icesi,Valle del Cauca,Santiago de Cali
2704,Y,2021-1,23,995,0.02311557788944724,3,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1813,Y,2021-1,311,13143,0.02366278627406224,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1101,Y,2021-1,789,25139,0.03138549663868889,5,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2702,Y,2021-1,77,2416,0.03187086092715232,6,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1713,Y,2021-1,405,12694,0.03190483693083346,7,Universidad Del Norte,Atlántico,Barranquilla
2813,Y,2021-1,61,1786,0.0341545352743561,8,Universidad Eia,Antioquia,Envigado
1712,Y,2021-1,314,8706,0.03606708017459224,9,Universidad Eafit-,Antioquia,Medellín
1715,Y,2021-1,101,2685,0.03761638733705773,10,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1701,Y,2021-1,655,16888,0.03878493604926575,11,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
2811,Y,2021-1,201,4784,0.04201505016722408,12,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1714,Y,2021-1,438,9238,0.04741285992639099,13,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1710,Y,2021-1,622,12075,0.05151138716356107,14,Universidad Pontificia Bolivariana,Antioquia,Medellín
1706,Y,2021-1,302,5424,0.05567846607669617,15,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1729,Y,2021-1,622,10611,0.05861841485251154,16,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1707,Y,2021-1,491,6961,0.07053584255135756,17,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1826,Y,2021-1,991,13992,0.07082618639222413,18,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1718,Y,2021-1,184,2456,0.0749185667752443,19,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1728,Y,2021-1,596,7725,0.07715210355987055,20,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1704,Y,2021-1,1250,16151,0.07739458857036716,21,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1117,Y,2021-1,1204,15450,0.07792880258899676,22,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1823,Y,2021-1,794,9331,0.08509270174686528,23,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1719,Y,2021-1,764,8364,0.09134385461501672,24,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
2838,Y,2021-1,67,699,0.09585121602288985,25,Corporacion Colegiatura Colombiana,Antioquia,Medellín
2723,Y,2021-1,410,3215,0.1275272161741835,26,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1735,Y,2021-1,846,6333,0.1335859782093795,27,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1711,Y,2020-2,233,9910,0.02351160443995964,1,Universidad De La Sabana,Cundinamarca,Chía
1813,Y,2020-2,348,13169,0.02642569671197509,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1715,Y,2020-2,82,2741,0.02991608901860635,3,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1828,Y,2020-2,185,5722,0.03233135267389025,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
2704,Y,2020-2,36,1021,0.03525954946131244,5,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
2813,Y,2020-2,59,1657,0.0356065178032589,6,Universidad Eia,Antioquia,Envigado
1714,Y,2020-2,345,9210,0.03745928338762215,7,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1713,Y,2020-2,503,12858,0.03911961424793903,8,Universidad Del Norte,Atlántico,Barranquilla
2702,Y,2020-2,93,2293,0.04055822067160925,9,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
1712,Y,2020-2,356,8576,0.04151119402985075,10,Universidad Eafit-,Antioquia,Medellín
1701,Y,2020-2,801,17194,0.04658601837850413,11,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Y,2020-2,1170,24927,0.04693705620411602,12,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2811,Y,2020-2,256,4777,0.05359011932175006,13,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
2838,Y,2020-2,40,689,0.05805515239477504,14,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1707,Y,2020-2,460,7394,0.06221260481471463,15,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1710,Y,2020-2,757,12100,0.06256198347107438,16,Universidad Pontificia Bolivariana,Antioquia,Medellín
1729,Y,2020-2,667,10563,0.06314493988450251,17,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1826,Y,2020-2,1019,13980,0.0728898426323319,18,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1728,Y,2020-2,626,7577,0.08261845057410584,19,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1719,Y,2020-2,718,8307,0.08643312868664982,20,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1706,Y,2020-2,484,5312,0.0911144578313253,21,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1704,Y,2020-2,1504,16248,0.09256523879862136,22,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1718,Y,2020-2,224,2389,0.09376308078694014,23,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1117,Y,2020-2,1435,15113,0.09495136637332098,24,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1823,Y,2020-2,906,9318,0.09723116548615585,25,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
2723,Y,2020-2,355,3238,0.1096355775169858,26,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1735,Y,2020-2,721,6209,0.1161217587373168,27,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1813,Y,2020-1,397,13475,0.02946196660482375,1,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,Y,2020-1,325,10000,0.0325,2,Universidad De La Sabana,Cundinamarca,Chía
1828,Y,2020-1,196,5765,0.03399826539462272,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1713,Y,2020-1,444,12960,0.03425925925925926,4,Universidad Del Norte,Atlántico,Barranquilla
2702,Y,2020-1,84,2275,0.03692307692307693,5,Fundacion Universitaria De Ciencias De La Salud,Cundinamarca,"Bogotá, D.C."
2704,Y,2020-1,39,1030,0.03786407766990291,6,Colegio De Estudios Superiores De Administracion-Cesa-,Cundinamarca,"Bogotá, D.C."
1715,Y,2020-1,128,3081,0.041544952937358,7,Fundacion Universidad De America,Cundinamarca,"Bogotá, D.C."
1701,Y,2020-1,773,17695,0.04368465668267872,8,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1714,Y,2020-1,430,9653,0.04454573707655651,9,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1101,Y,2020-1,1106,24531,0.04508580979169215,10,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1712,Y,2020-1,468,9066,0.05162144275314361,11,Universidad Eafit-,Antioquia,Medellín
2811,Y,2020-1,276,5015,0.05503489531405783,12,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1707,Y,2020-1,467,7954,0.0587125974352527,13,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2838,Y,2020-1,43,728,0.05906593406593406,14,Corporacion Colegiatura Colombiana,Antioquia,Medellín
1710,Y,2020-1,767,12809,0.05987977203528769,15,Universidad Pontificia Bolivariana,Antioquia,Medellín
2813,Y,2020-1,104,1722,0.06039488966318235,16,Universidad Eia,Antioquia,Envigado
1729,Y,2020-1,708,10752,0.06584821428571429,17,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1718,Y,2020-1,175,2530,0.0691699604743083,18,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1706,Y,2020-1,402,5484,0.07330415754923414,19,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1826,Y,2020-1,1070,14533,0.07362554187022638,20,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1728,Y,2020-1,593,7627,0.07775009833486299,21,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1823,Y,2020-1,814,9650,0.08435233160621762,22,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1704,Y,2020-1,1499,17196,0.08717143521749245,23,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1719,Y,2020-1,800,8723,0.0917115671214032,24,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
2723,Y,2020-1,325,3338,0.09736369083283404,25,Fundacion Universitaria Agraria De Colombia -Uniagraria-,Cundinamarca,"Bogotá, D.C."
1117,Y,2020-1,1541,15463,0.09965724632994892,26,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1735,Y,2020-1,841,6586,0.1276951108411783,27,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
`;

export const RAW_CSV_U_ACREDITADAS = `IES,CARÁCTER_ACADÉMICO,ACREDITADA_ALTA_CALIDAD,Periodo,Desertores,Matriculados,% Deserción,Ranking,NOMBRE_INSTITUCIÓN,DEPARTAMENTO_IES,MUNICIPIO_IES
1711,Universidad,S,2024-2,237,8981,0.02638904353635453,1,Universidad De La Sabana,Cundinamarca,Chía
1813,Universidad,S,2024-2,399,13156,0.03032836728488902,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1113,Universidad,S,2024-2,456,13753,0.03315640223951138,3,Universidad De Cordoba,Córdoba,Montería
1107,Universidad,S,2024-2,89,2684,0.03315946348733234,4,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1828,Universidad,S,2024-2,173,5054,0.03423031262366442,5,Universidad Icesi,Valle del Cauca,Santiago de Cali
1217,Universidad,S,2024-2,228,5974,0.0381653833277536,6,Universidad De Sucre,Sucre,Sincelejo
1108,Universidad,S,2024-2,133,3290,0.04042553191489362,7,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1712,Universidad,S,2024-2,315,7770,0.04054054054054054,8,Universidad Eafit-,Antioquia,Medellín
2813,Universidad,S,2024-2,81,1906,0.04249737670514166,9,Universidad Eia,Antioquia,Envigado
1701,Universidad,S,2024-2,688,16005,0.0429865666979069,10,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Universidad,S,2024-2,1193,27130,0.04397346111315886,11,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1713,Universidad,S,2024-2,469,10623,0.04414948696225172,12,Universidad Del Norte,Atlántico,Barranquilla
1702,Universidad,S,2024-2,282,6361,0.04433265209872662,13,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1714,Universidad,S,2024-2,380,7991,0.04755349768489551,14,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1727,Universidad,S,2024-2,174,3600,0.04833333333333333,15,Universidad Pontificia Bolivariana,Córdoba,Montería
1110,Universidad,S,2024-2,683,13893,0.04916144821132944,16,Universidad Del Cauca,Cauca,Popayán
1833,Universidad,S,2024-2,441,8942,0.04931782598971148,17,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1206,Universidad,S,2024-2,659,13272,0.0496534056660639,18,Universidad De Nariño,Nariño,Pasto
2708,Universidad,S,2024-2,226,4502,0.05019991115059973,19,Universidad Ces,Antioquia,Medellín
2805,Universidad,S,2024-2,822,15411,0.05333852443060152,20,Universidad Simon Bolivar,Atlántico,Barranquilla
9933,Universidad,S,2024-2,67,1239,0.05407586763518967,21,Universidad Nacional De Colombia,Cesar,La Paz
2811,Universidad,S,2024-2,188,3457,0.05438241249638415,22,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1209,Universidad,S,2024-2,787,14369,0.05477068689539982,23,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1212,Universidad,S,2024-2,1168,21243,0.05498281786941581,24,Universidad De Pamplona,Norte de Santander,Pamplona
1106,Universidad,S,2024-2,1139,20512,0.05552847113884556,25,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1121,Universidad,S,2024-2,363,6500,0.05584615384615384,26,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1104,Universidad,S,2024-2,147,2593,0.05669109139992287,27,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1835,Universidad,S,2024-2,269,4635,0.05803667745415318,28,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1826,Universidad,S,2024-2,766,12687,0.06037676361630015,29,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1119,Universidad,S,2024-2,426,7016,0.06071835803876853,30,Universidad De Los Llanos,Meta,Villavicencio
1105,Universidad,S,2024-2,498,8189,0.06081328611552082,31,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1827,Universidad,S,2024-2,108,1771,0.06098249576510446,32,Universidad Catolica De Manizales,Caldas,Manizales
1109,Universidad,S,2024-2,43,705,0.06099290780141844,33,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1720,Universidad,S,2024-2,380,6103,0.06226446010158938,34,Universidad Mariana,Nariño,Pasto
1730,Universidad,S,2024-2,23,369,0.06233062330623306,35,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1832,Universidad,S,2024-2,309,4817,0.06414780984014946,36,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1807,Universidad,S,2024-2,288,4297,0.0670235047707703,37,Universidad Libre,Valle del Cauca,Santiago de Cali
1732,Universidad,S,2024-2,246,3657,0.06726825266611977,38,Universidad Santo Tomas,Boyacá,Tunja
1707,Universidad,S,2024-2,370,5498,0.0672971989814478,39,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1204,Universidad,S,2024-2,1362,20229,0.06732908201097434,40,Universidad Industrial De Santander,Santander,Bucaramanga
1816,Universidad,S,2024-2,260,3832,0.06784968684759916,41,Universidad Cooperativa De Colombia,Antioquia,Medellín
1103,Universidad,S,2024-2,313,4612,0.06786643538594969,42,Universidad Nacional De Colombia,Caldas,Manizales
1817,Universidad,S,2024-2,229,3314,0.06910078455039227,43,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1724,Universidad,S,2024-2,269,3866,0.06958096223486808,44,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1218,Universidad,S,2024-2,1070,15099,0.07086562023975097,45,Universidad De La Guajira,La Guajira,Riohacha
1709,Universidad,S,2024-2,422,5922,0.0712597095575819,46,Universidad Central,Cundinamarca,"Bogotá, D.C."
1710,Universidad,S,2024-2,631,8817,0.07156629238970172,47,Universidad Pontificia Bolivariana,Antioquia,Medellín
2832,Universidad,S,2024-2,686,9565,0.07171981181390485,48,Universidad De Santander - Udes,Santander,Bucaramanga
1723,Universidad,S,2024-2,246,3414,0.07205623901581722,49,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1830,Universidad,S,2024-2,464,6382,0.07270448135380758,50,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
9122,Universidad,S,2024-2,38,519,0.07321772639691715,51,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1207,Universidad,S,2024-2,1660,22521,0.07370898272723236,52,Universidad Del Tolima,Tolima,Ibagué
1112,Universidad,S,2024-2,979,12897,0.075909126153369,53,Universidad De Caldas,Caldas,Manizales
1831,Universidad,S,2024-2,328,4256,0.07706766917293233,54,Universidad De Ibague,Tolima,Ibagué
1729,Universidad,S,2024-2,779,10020,0.07774451097804391,55,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1809,Universidad,S,2024-2,203,2610,0.07777777777777778,56,Universidad Libre,Risaralda,Pereira
1205,Universidad,S,2024-2,1604,20525,0.07814859926918392,57,Universidad De Cartagena,Bolívar,Cartagena de Indias
1114,Universidad,S,2024-2,1064,13555,0.07849502028771671,58,Universidad Surcolombiana,Huila,Neiva
1805,Universidad,S,2024-2,1425,17886,0.07967125125796712,59,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1213,Universidad,S,2024-2,1917,23991,0.07990496436163562,60,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1203,Universidad,S,2024-2,2420,30240,0.08002645502645503,61,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1734,Universidad,S,2024-2,378,4717,0.08013567945728217,62,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1812,Universidad,S,2024-2,457,5528,0.08267004341534008,63,Universidad De Medellin,Antioquia,Medellín
1733,Universidad,S,2024-2,180,2165,0.08314087759815242,64,Universidad Sergio Arboleda,Magdalena,Santa Marta
1803,Universidad,S,2024-2,606,7200,0.08416666666666667,65,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1208,Universidad,S,2024-2,1258,14827,0.0848452148108181,66,Universidad Del Quindio,Quindío,Armenia
2810,Universidad,S,2024-2,960,11304,0.08492569002123142,67,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1818,Universidad,S,2024-2,1743,20478,0.08511573395839438,68,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1223,Universidad,S,2024-2,41,481,0.08523908523908524,69,Universidad De Antioquia,Antioquia,Turbo
1717,Universidad,S,2024-2,244,2839,0.08594575554772807,70,Universidad De San Buenaventura,Antioquia,Medellín
1808,Universidad,S,2024-2,414,4807,0.0861244019138756,71,Universidad Libre,Atlántico,Barranquilla
9105,Universidad,S,2024-2,63,729,0.08641975308641975,72,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1202,Universidad,S,2024-2,1683,19474,0.08642292287152101,73,Universidad Del Atlantico,Atlántico,Puerto Colombia
1111,Universidad,S,2024-2,1233,14202,0.08681875792141952,74,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1117,Universidad,S,2024-2,1384,15839,0.08737925374076647,75,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1728,Universidad,S,2024-2,581,6642,0.08747365251430292,76,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1823,Universidad,S,2024-2,660,7354,0.08974707642099537,77,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1716,Universidad,S,2024-2,347,3856,0.0899896265560166,78,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1718,Universidad,S,2024-2,229,2535,0.0903353057199211,79,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1722,Universidad,S,2024-2,446,4911,0.090816534310731,80,Universidad De Manizales,Caldas,Manizales
1706,Universidad,S,2024-2,450,4951,0.09089072914562717,81,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1825,Universidad,S,2024-2,277,3039,0.09114840408028956,82,Universidad Autonoma De Manizales,Caldas,Manizales
1102,Universidad,S,2024-2,986,10735,0.09184909175593851,83,Universidad Nacional De Colombia,Antioquia,Medellín
1219,Universidad,S,2024-2,29,314,0.09235668789808917,84,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1726,Universidad,S,2024-2,366,3812,0.09601259181532004,85,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1815,Universidad,S,2024-2,322,3318,0.0970464135021097,86,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1704,Universidad,S,2024-2,1214,12492,0.09718219660582772,87,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1201,Universidad,S,2024-2,3167,31870,0.09937245058048322,88,Universidad De Antioquia,Antioquia,Medellín
1814,Universidad,S,2024-2,258,2580,0.1,89,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1705,Universidad,S,2024-2,462,4544,0.1016725352112676,90,Universidad Santo Tomas,Santander,Bucaramanga
2812,Universidad,S,2024-2,900,8383,0.1073601336037218,91,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1719,Universidad,S,2024-2,622,5719,0.1087602727749607,92,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1806,Universidad,S,2024-2,737,6498,0.113419513696522,93,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1735,Universidad,S,2024-2,791,6163,0.1283465844556223,94,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1811,Universidad,S,2024-2,93,702,0.1324786324786325,95,Universidad Libre,Santander,Socorro
2102,Universidad,S,2024-2,17971,135593,0.1325363403715531,96,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1301,Universidad,S,2024-2,2906,20725,0.1402171290711701,97,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1810,Universidad,S,2024-2,196,1384,0.1416184971098266,98,Universidad Libre,Norte de Santander,San José de Cúcuta
1813,Universidad,S,2024-1,310,12665,0.02447690485590209,1,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1108,Universidad,S,2024-1,92,3513,0.02618844292627384,2,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1828,Universidad,S,2024-1,140,4973,0.02815202091292982,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1711,Universidad,S,2024-1,274,9280,0.02952586206896552,4,Universidad De La Sabana,Cundinamarca,Chía
1113,Universidad,S,2024-1,441,14396,0.03063350930814115,5,Universidad De Cordoba,Córdoba,Montería
2813,Universidad,S,2024-1,65,1873,0.03470368392952482,6,Universidad Eia,Antioquia,Envigado
1827,Universidad,S,2024-1,63,1807,0.03486441615938018,7,Universidad Catolica De Manizales,Caldas,Manizales
1107,Universidad,S,2024-1,106,3015,0.0351575456053068,8,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1713,Universidad,S,2024-1,407,10924,0.03725741486634932,9,Universidad Del Norte,Atlántico,Barranquilla
1109,Universidad,S,2024-1,32,788,0.04060913705583756,10,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1701,Universidad,S,2024-1,672,16225,0.04141756548536209,11,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1217,Universidad,S,2024-1,251,6014,0.04173594945128035,12,Universidad De Sucre,Sucre,Sincelejo
1835,Universidad,S,2024-1,190,4455,0.04264870931537598,13,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1112,Universidad,S,2024-1,528,12116,0.04357873885770881,14,Universidad De Caldas,Caldas,Manizales
1716,Universidad,S,2024-1,171,3885,0.04401544401544401,15,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1727,Universidad,S,2024-1,176,3686,0.04774823657080846,16,Universidad Pontificia Bolivariana,Córdoba,Montería
1712,Universidad,S,2024-1,397,8124,0.04886755292959134,17,Universidad Eafit-,Antioquia,Medellín
1206,Universidad,S,2024-1,678,13849,0.04895660336486389,18,Universidad De Nariño,Nariño,Pasto
1720,Universidad,S,2024-1,304,6133,0.04956791129952715,19,Universidad Mariana,Nariño,Pasto
2708,Universidad,S,2024-1,232,4635,0.05005393743257821,20,Universidad Ces,Antioquia,Medellín
1811,Universidad,S,2024-1,37,732,0.05054644808743169,21,Universidad Libre,Santander,Socorro
1702,Universidad,S,2024-1,335,6339,0.05284745227953936,22,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1808,Universidad,S,2024-1,261,4924,0.05300568643379366,23,Universidad Libre,Atlántico,Barranquilla
9933,Universidad,S,2024-1,64,1202,0.05324459234608985,24,Universidad Nacional De Colombia,Cesar,La Paz
1101,Universidad,S,2024-1,1485,27734,0.05354438595226076,25,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1106,Universidad,S,2024-1,1147,21239,0.05400442582042469,26,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1213,Universidad,S,2024-1,1295,23723,0.05458837415166716,27,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
2805,Universidad,S,2024-1,868,15880,0.05465994962216625,28,Universidad Simon Bolivar,Atlántico,Barranquilla
2832,Universidad,S,2024-1,527,9604,0.05487296959600167,29,Universidad De Santander - Udes,Santander,Bucaramanga
1119,Universidad,S,2024-1,376,6778,0.0554735910298023,30,Universidad De Los Llanos,Meta,Villavicencio
1121,Universidad,S,2024-1,372,6460,0.05758513931888545,31,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1724,Universidad,S,2024-1,228,3940,0.05786802030456853,32,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1707,Universidad,S,2024-1,313,5396,0.05800593031875463,33,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1730,Universidad,S,2024-1,22,378,0.0582010582010582,34,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
2811,Universidad,S,2024-1,208,3563,0.05837777154083637,35,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1110,Universidad,S,2024-1,830,14138,0.05870703069741123,36,Universidad Del Cauca,Cauca,Popayán
1832,Universidad,S,2024-1,301,5089,0.05914718019257222,37,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1706,Universidad,S,2024-1,298,5015,0.05942173479561316,38,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1826,Universidad,S,2024-1,780,12969,0.06014341892204488,39,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1105,Universidad,S,2024-1,517,8415,0.06143790849673202,40,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1807,Universidad,S,2024-1,271,4389,0.06174527227158806,41,Universidad Libre,Valle del Cauca,Santiago de Cali
1714,Universidad,S,2024-1,538,8530,0.0630715123094959,42,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1212,Universidad,S,2024-1,1393,21776,0.0639695077149155,43,Universidad De Pamplona,Norte de Santander,Pamplona
1833,Universidad,S,2024-1,586,9063,0.06465850159991172,44,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1710,Universidad,S,2024-1,604,9195,0.0656878738444807,45,Universidad Pontificia Bolivariana,Antioquia,Medellín
1104,Universidad,S,2024-1,173,2595,0.06666666666666667,46,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1203,Universidad,S,2024-1,2078,30913,0.06722091029663896,47,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1722,Universidad,S,2024-1,359,5105,0.0703232125367287,48,Universidad De Manizales,Caldas,Manizales
1723,Universidad,S,2024-1,261,3705,0.07044534412955465,49,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1209,Universidad,S,2024-1,1074,15125,0.07100826446280992,50,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1709,Universidad,S,2024-1,456,6409,0.0711499453892963,51,Universidad Central,Cundinamarca,"Bogotá, D.C."
1223,Universidad,S,2024-1,28,393,0.07124681933842239,52,Universidad De Antioquia,Antioquia,Turbo
1204,Universidad,S,2024-1,1412,19787,0.0713599838277657,53,Universidad Industrial De Santander,Santander,Bucaramanga
1103,Universidad,S,2024-1,338,4730,0.07145877378435518,54,Universidad Nacional De Colombia,Caldas,Manizales
1809,Universidad,S,2024-1,199,2750,0.07236363636363637,55,Universidad Libre,Risaralda,Pereira
1831,Universidad,S,2024-1,331,4552,0.07271528998242531,56,Universidad De Ibague,Tolima,Ibagué
1805,Universidad,S,2024-1,1297,17805,0.07284470654310587,57,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1817,Universidad,S,2024-1,238,3267,0.07284970921334558,58,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1207,Universidad,S,2024-1,1661,22569,0.0735965262085161,59,Universidad Del Tolima,Tolima,Ibagué
1732,Universidad,S,2024-1,294,3887,0.0756367378440957,60,Universidad Santo Tomas,Boyacá,Tunja
1729,Universidad,S,2024-1,779,10256,0.07595553822152887,61,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
9122,Universidad,S,2024-1,44,577,0.07625649913344887,62,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1114,Universidad,S,2024-1,1043,13600,0.07669117647058823,63,Universidad Surcolombiana,Huila,Neiva
1218,Universidad,S,2024-1,1163,15002,0.07752299693374216,64,Universidad De La Guajira,La Guajira,Riohacha
1816,Universidad,S,2024-1,301,3871,0.07775768535262206,65,Universidad Cooperativa De Colombia,Antioquia,Medellín
1705,Universidad,S,2024-1,367,4675,0.07850267379679145,66,Universidad Santo Tomas,Santander,Bucaramanga
1825,Universidad,S,2024-1,265,3363,0.07879869164436515,67,Universidad Autonoma De Manizales,Caldas,Manizales
1734,Universidad,S,2024-1,379,4794,0.07905715477680433,68,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1718,Universidad,S,2024-1,187,2308,0.08102253032928942,69,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1806,Universidad,S,2024-1,522,6327,0.08250355618776671,70,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1205,Universidad,S,2024-1,1710,20494,0.08343905533326827,71,Universidad De Cartagena,Bolívar,Cartagena de Indias
1818,Universidad,S,2024-1,1765,21117,0.08358194819339869,72,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1202,Universidad,S,2024-1,1662,19859,0.08369001460295081,73,Universidad Del Atlantico,Atlántico,Puerto Colombia
1815,Universidad,S,2024-1,291,3463,0.08403118683222639,74,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1733,Universidad,S,2024-1,192,2255,0.08514412416851441,75,Universidad Sergio Arboleda,Magdalena,Santa Marta
1812,Universidad,S,2024-1,519,6029,0.08608392768286614,76,Universidad De Medellin,Antioquia,Medellín
1219,Universidad,S,2024-1,27,313,0.08626198083067092,77,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1726,Universidad,S,2024-1,356,4092,0.08699902248289346,78,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
9105,Universidad,S,2024-1,75,857,0.08751458576429405,79,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1728,Universidad,S,2024-1,617,7050,0.0875177304964539,80,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1810,Universidad,S,2024-1,125,1423,0.08784258608573436,81,Universidad Libre,Norte de Santander,San José de Cúcuta
1830,Universidad,S,2024-1,567,6438,0.08807082945013979,82,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1803,Universidad,S,2024-1,649,7345,0.08835942818243703,83,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1208,Universidad,S,2024-1,1322,14913,0.08864748876818883,84,Universidad Del Quindio,Quindío,Armenia
1111,Universidad,S,2024-1,1282,14141,0.09065836928081464,85,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1719,Universidad,S,2024-1,566,6205,0.0912167606768735,86,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1823,Universidad,S,2024-1,696,7612,0.09143457698370994,87,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1717,Universidad,S,2024-1,277,3017,0.09181305933046072,88,Universidad De San Buenaventura,Antioquia,Medellín
1117,Universidad,S,2024-1,1511,16233,0.0930819934700918,89,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1814,Universidad,S,2024-1,292,2808,0.103988603988604,90,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
2812,Universidad,S,2024-1,879,8398,0.1046677780423911,91,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1102,Universidad,S,2024-1,1187,11297,0.1050721430468266,92,Universidad Nacional De Colombia,Antioquia,Medellín
1704,Universidad,S,2024-1,1487,13656,0.1088898652606913,93,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1201,Universidad,S,2024-1,3576,31302,0.114241901475944,94,Universidad De Antioquia,Antioquia,Medellín
1735,Universidad,S,2024-1,754,6295,0.1197776012708499,95,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2102,Universidad,S,2024-1,18072,131383,0.1375520425016935,96,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
2810,Universidad,S,2024-1,1707,12039,0.1417891851482681,97,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1301,Universidad,S,2024-1,3434,22066,0.1556240369799692,98,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1828,Universidad,S,2023-2,166,5094,0.0325873576756969,1,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,S,2023-2,419,12767,0.03281898644943997,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,Universidad,S,2023-2,318,9281,0.03426354918651008,3,Universidad De La Sabana,Cundinamarca,Chía
1713,Universidad,S,2023-2,395,11171,0.03535941276519559,4,Universidad Del Norte,Atlántico,Barranquilla
1113,Universidad,S,2023-2,545,15136,0.0360068710359408,5,Universidad De Cordoba,Córdoba,Montería
1712,Universidad,S,2023-2,296,7947,0.03724675978356613,6,Universidad Eafit-,Antioquia,Medellín
1107,Universidad,S,2023-2,115,3009,0.03821867730142905,7,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1108,Universidad,S,2023-2,142,3519,0.04035237283319125,8,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1720,Universidad,S,2023-2,238,5848,0.04069767441860465,9,Universidad Mariana,Nariño,Pasto
1702,Universidad,S,2023-2,259,6347,0.04080668032141169,10,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1730,Universidad,S,2023-2,14,343,0.04081632653061224,11,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1714,Universidad,S,2023-2,350,8468,0.0413320736891828,12,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1727,Universidad,S,2023-2,144,3303,0.04359673024523161,13,Universidad Pontificia Bolivariana,Córdoba,Montería
1217,Universidad,S,2023-2,264,5999,0.04400733455575929,14,Universidad De Sucre,Sucre,Sincelejo
1701,Universidad,S,2023-2,714,16110,0.04432029795158287,15,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Universidad,S,2023-2,1243,27547,0.04512288089447127,16,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1106,Universidad,S,2023-2,1017,21365,0.04760121694359935,17,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1212,Universidad,S,2023-2,1074,21384,0.05022446689113356,18,Universidad De Pamplona,Norte de Santander,Pamplona
1206,Universidad,S,2023-2,715,13979,0.05114815079762501,19,Universidad De Nariño,Nariño,Pasto
1833,Universidad,S,2023-2,459,8904,0.05154986522911052,20,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1119,Universidad,S,2023-2,338,6535,0.05172149961744453,21,Universidad De Los Llanos,Meta,Villavicencio
2813,Universidad,S,2023-2,98,1844,0.05314533622559653,22,Universidad Eia,Antioquia,Envigado
2805,Universidad,S,2023-2,820,15389,0.053284813828059,23,Universidad Simon Bolivar,Atlántico,Barranquilla
1110,Universidad,S,2023-2,756,14063,0.05375808860129418,24,Universidad Del Cauca,Cauca,Popayán
1832,Universidad,S,2023-2,267,4887,0.05463474524248005,25,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1716,Universidad,S,2023-2,211,3790,0.05567282321899736,26,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1835,Universidad,S,2023-2,246,4411,0.05576966674223532,27,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1209,Universidad,S,2023-2,832,14914,0.05578650932010192,28,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2708,Universidad,S,2023-2,263,4585,0.05736095965103599,29,Universidad Ces,Antioquia,Medellín
2811,Universidad,S,2023-2,217,3660,0.0592896174863388,30,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1114,Universidad,S,2023-2,793,13188,0.06013042159538975,31,Universidad Surcolombiana,Huila,Neiva
1223,Universidad,S,2023-2,19,315,0.06031746031746032,32,Universidad De Antioquia,Antioquia,Turbo
1105,Universidad,S,2023-2,508,8403,0.06045459954778055,33,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
9933,Universidad,S,2023-2,70,1140,0.06140350877192982,34,Universidad Nacional De Colombia,Cesar,La Paz
2832,Universidad,S,2023-2,585,9449,0.06191131336649381,35,Universidad De Santander - Udes,Santander,Bucaramanga
1203,Universidad,S,2023-2,1854,29643,0.06254427689505111,36,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1121,Universidad,S,2023-2,398,6349,0.06268703732871318,37,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1109,Universidad,S,2023-2,51,786,0.0648854961832061,38,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1724,Universidad,S,2023-2,259,3916,0.06613891726251277,39,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1204,Universidad,S,2023-2,1319,19935,0.06616503636819664,40,Universidad Industrial De Santander,Santander,Bucaramanga
1826,Universidad,S,2023-2,870,13027,0.06678437092193137,41,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1817,Universidad,S,2023-2,213,3178,0.0670232850849591,42,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1734,Universidad,S,2023-2,309,4606,0.06708640903169778,43,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1219,Universidad,S,2023-2,10,148,0.06756756756756757,44,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1709,Universidad,S,2023-2,438,6474,0.06765523632993513,45,Universidad Central,Cundinamarca,"Bogotá, D.C."
1710,Universidad,S,2023-2,637,9316,0.06837698583082868,46,Universidad Pontificia Bolivariana,Antioquia,Medellín
1815,Universidad,S,2023-2,237,3452,0.0686558516801854,47,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1805,Universidad,S,2023-2,1178,16827,0.0700065371129732,48,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1707,Universidad,S,2023-2,373,5280,0.0706439393939394,49,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1218,Universidad,S,2023-2,1028,14344,0.07166759620747351,50,Universidad De La Guajira,La Guajira,Riohacha
1207,Universidad,S,2023-2,1581,21889,0.07222805975604185,51,Universidad Del Tolima,Tolima,Ibagué
1205,Universidad,S,2023-2,1472,20257,0.07266623883102137,52,Universidad De Cartagena,Bolívar,Cartagena de Indias
1103,Universidad,S,2023-2,350,4809,0.07278020378457059,53,Universidad Nacional De Colombia,Caldas,Manizales
1827,Universidad,S,2023-2,126,1721,0.07321324811156305,54,Universidad Catolica De Manizales,Caldas,Manizales
1112,Universidad,S,2023-2,868,11833,0.07335417899095749,55,Universidad De Caldas,Caldas,Manizales
1723,Universidad,S,2023-2,261,3535,0.07383309759547384,56,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1104,Universidad,S,2023-2,199,2693,0.07389528406981062,57,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1213,Universidad,S,2023-2,1790,24206,0.07394860778319425,58,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1807,Universidad,S,2023-2,326,4398,0.07412460209185993,59,Universidad Libre,Valle del Cauca,Santiago de Cali
2810,Universidad,S,2023-2,787,10457,0.07526059099168021,60,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1729,Universidad,S,2023-2,749,9922,0.07548881273936707,61,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1202,Universidad,S,2023-2,1557,20222,0.0769953515972703,62,Universidad Del Atlantico,Atlántico,Puerto Colombia
1816,Universidad,S,2023-2,305,3896,0.07828542094455852,63,Universidad Cooperativa De Colombia,Antioquia,Medellín
1812,Universidad,S,2023-2,494,6026,0.08197809492200464,64,Universidad De Medellin,Antioquia,Medellín
1111,Universidad,S,2023-2,1216,14776,0.08229561451001624,65,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1830,Universidad,S,2023-2,550,6591,0.0834471248672432,66,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1831,Universidad,S,2023-2,375,4453,0.08421289018639119,67,Universidad De Ibague,Tolima,Ibagué
1825,Universidad,S,2023-2,277,3275,0.08458015267175573,68,Universidad Autonoma De Manizales,Caldas,Manizales
1808,Universidad,S,2023-2,418,4942,0.08458114123836503,69,Universidad Libre,Atlántico,Barranquilla
1201,Universidad,S,2023-2,1577,18602,0.0847758305558542,70,Universidad De Antioquia,Antioquia,Medellín
1803,Universidad,S,2023-2,621,7297,0.08510346717829245,71,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1733,Universidad,S,2023-2,187,2186,0.08554437328453797,72,Universidad Sergio Arboleda,Magdalena,Santa Marta
9122,Universidad,S,2023-2,50,578,0.08650519031141868,73,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1208,Universidad,S,2023-2,1294,14875,0.08699159663865547,74,Universidad Del Quindio,Quindío,Armenia
9105,Universidad,S,2023-2,73,838,0.08711217183770883,75,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1818,Universidad,S,2023-2,1899,21727,0.08740277074607632,76,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1722,Universidad,S,2023-2,462,5276,0.08756633813495072,77,Universidad De Manizales,Caldas,Manizales
1706,Universidad,S,2023-2,439,4964,0.08843674456083804,78,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,S,2023-2,258,2899,0.08899620558813384,79,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1823,Universidad,S,2023-2,688,7637,0.0900877307843394,80,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1726,Universidad,S,2023-2,361,3973,0.0908633274603574,81,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1117,Universidad,S,2023-2,1463,15856,0.09226791120080728,82,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1718,Universidad,S,2023-2,211,2260,0.09336283185840707,83,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1719,Universidad,S,2023-2,642,6569,0.0977317704369006,84,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1732,Universidad,S,2023-2,375,3763,0.09965453095934096,85,Universidad Santo Tomas,Boyacá,Tunja
1102,Universidad,S,2023-2,1188,11570,0.1026793431287813,86,Universidad Nacional De Colombia,Antioquia,Medellín
1705,Universidad,S,2023-2,483,4692,0.1029411764705882,87,Universidad Santo Tomas,Santander,Bucaramanga
1704,Universidad,S,2023-2,1437,13841,0.1038219781807673,88,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1809,Universidad,S,2023-2,298,2828,0.1053748231966054,89,Universidad Libre,Risaralda,Pereira
1717,Universidad,S,2023-2,330,3098,0.1065203357004519,90,Universidad De San Buenaventura,Antioquia,Medellín
1728,Universidad,S,2023-2,822,7600,0.1081578947368421,91,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1735,Universidad,S,2023-2,608,5532,0.1099060014461316,92,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2102,Universidad,S,2023-2,14066,114846,0.1224770562318235,93,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1810,Universidad,S,2023-2,180,1455,0.1237113402061856,94,Universidad Libre,Norte de Santander,San José de Cúcuta
1811,Universidad,S,2023-2,100,764,0.1308900523560209,95,Universidad Libre,Santander,Socorro
1806,Universidad,S,2023-2,828,6278,0.1318891366677286,96,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1301,Universidad,S,2023-2,3478,24020,0.1447960033305579,97,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
2812,Universidad,S,2023-2,1263,8417,0.150053463229179,98,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1301,Universidad,S,2023-1,296,21226,0.01394516159427118,1,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1711,Universidad,S,2023-1,246,9498,0.02590018951358181,2,Universidad De La Sabana,Cundinamarca,Chía
1828,Universidad,S,2023-1,148,5087,0.02909376842932966,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,S,2023-1,376,12490,0.03010408326661329,4,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1222,Universidad,S,2023-1,2,66,0.0303030303030303,5,Universidad De Antioquia,Antioquia,Puerto Berrío
1101,Universidad,S,2023-1,840,27074,0.03102607667873236,6,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1220,Universidad,S,2023-1,7,213,0.03286384976525822,7,Universidad De Antioquia,Antioquia,Andes
1213,Universidad,S,2023-1,822,23813,0.03451896023180616,8,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1113,Universidad,S,2023-1,554,15667,0.03536094976702624,9,Universidad De Cordoba,Córdoba,Montería
1713,Universidad,S,2023-1,426,11680,0.03647260273972603,10,Universidad Del Norte,Atlántico,Barranquilla
9933,Universidad,S,2023-1,39,1010,0.03861386138613861,11,Universidad Nacional De Colombia,Cesar,La Paz
1730,Universidad,S,2023-1,13,323,0.04024767801857585,12,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1217,Universidad,S,2023-1,245,5981,0.04096304965724795,13,Universidad De Sucre,Sucre,Sincelejo
1727,Universidad,S,2023-1,140,3260,0.04294478527607362,14,Universidad Pontificia Bolivariana,Córdoba,Montería
1714,Universidad,S,2023-1,369,8584,0.04298695246971109,15,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1701,Universidad,S,2023-1,707,16386,0.04314658855120224,16,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1103,Universidad,S,2023-1,209,4803,0.04351447012283989,17,Universidad Nacional De Colombia,Caldas,Manizales
1221,Universidad,S,2023-1,8,181,0.04419889502762431,18,Universidad De Antioquia,Antioquia,Caucasia
1110,Universidad,S,2023-1,607,13698,0.04431303839976639,19,Universidad Del Cauca,Cauca,Popayán
1212,Universidad,S,2023-1,982,21874,0.04489348084483862,20,Universidad De Pamplona,Norte de Santander,Pamplona
1827,Universidad,S,2023-1,85,1795,0.04735376044568245,21,Universidad Catolica De Manizales,Caldas,Manizales
1702,Universidad,S,2023-1,300,6326,0.04742333227948151,22,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,Universidad,S,2023-1,128,2673,0.04788627010849233,23,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1832,Universidad,S,2023-1,237,4924,0.04813160032493907,24,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
2805,Universidad,S,2023-1,777,15747,0.04934273194894265,25,Universidad Simon Bolivar,Atlántico,Barranquilla
1811,Universidad,S,2023-1,40,791,0.05056890012642225,26,Universidad Libre,Santander,Socorro
1206,Universidad,S,2023-1,720,13760,0.05232558139534884,27,Universidad De Nariño,Nariño,Pasto
1808,Universidad,S,2023-1,260,4953,0.05249343832020997,28,Universidad Libre,Atlántico,Barranquilla
1107,Universidad,S,2023-1,156,2962,0.05266711681296422,29,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1119,Universidad,S,2023-1,340,6368,0.05339195979899498,30,Universidad De Los Llanos,Meta,Villavicencio
1724,Universidad,S,2023-1,208,3829,0.05432227735701228,31,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1712,Universidad,S,2023-1,457,8124,0.05625307730182176,32,Universidad Eafit-,Antioquia,Medellín
1833,Universidad,S,2023-1,498,8800,0.05659090909090909,33,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1112,Universidad,S,2023-1,664,11330,0.05860547219770521,34,Universidad De Caldas,Caldas,Manizales
2832,Universidad,S,2023-1,552,9418,0.05861117009980887,35,Universidad De Santander - Udes,Santander,Bucaramanga
2708,Universidad,S,2023-1,276,4699,0.0587359012555863,36,Universidad Ces,Antioquia,Medellín
1707,Universidad,S,2023-1,316,5367,0.05887833053847587,37,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1105,Universidad,S,2023-1,498,8395,0.0593210244192972,38,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1835,Universidad,S,2023-1,253,4264,0.05933395872420263,39,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1716,Universidad,S,2023-1,229,3858,0.05935717988595127,40,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1732,Universidad,S,2023-1,209,3497,0.05976551329711181,41,Universidad Santo Tomas,Boyacá,Tunja
1121,Universidad,S,2023-1,374,6212,0.06020605280103027,42,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1102,Universidad,S,2023-1,699,11533,0.06060868811237319,43,Universidad Nacional De Colombia,Antioquia,Medellín
1706,Universidad,S,2023-1,324,5135,0.06309639727361246,44,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1108,Universidad,S,2023-1,219,3463,0.0632399653479642,45,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1204,Universidad,S,2023-1,1264,19873,0.06360388466763951,46,Universidad Industrial De Santander,Santander,Bucaramanga
1203,Universidad,S,2023-1,1911,29617,0.06452375324982274,47,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1709,Universidad,S,2023-1,465,7052,0.06593874078275666,48,Universidad Central,Cundinamarca,"Bogotá, D.C."
1809,Universidad,S,2023-1,186,2801,0.06640485540878258,49,Universidad Libre,Risaralda,Pereira
1720,Universidad,S,2023-1,395,5815,0.06792777300085985,50,Universidad Mariana,Nariño,Pasto
1723,Universidad,S,2023-1,258,3783,0.06819984139571768,51,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1831,Universidad,S,2023-1,325,4761,0.06826296996429322,52,Universidad De Ibague,Tolima,Ibagué
2813,Universidad,S,2023-1,133,1942,0.06848609680741503,53,Universidad Eia,Antioquia,Envigado
1815,Universidad,S,2023-1,244,3528,0.0691609977324263,54,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1722,Universidad,S,2023-1,344,4968,0.06924315619967794,55,Universidad De Manizales,Caldas,Manizales
1805,Universidad,S,2023-1,1151,16560,0.06950483091787439,56,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1816,Universidad,S,2023-1,275,3949,0.06963788300835655,57,Universidad Cooperativa De Colombia,Antioquia,Medellín
1106,Universidad,S,2023-1,1463,20841,0.07019816707451658,58,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2811,Universidad,S,2023-1,275,3912,0.07029652351738241,59,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1710,Universidad,S,2023-1,703,9996,0.070328131252501,60,Universidad Pontificia Bolivariana,Antioquia,Medellín
2810,Universidad,S,2023-1,784,10892,0.07197943444730077,61,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1209,Universidad,S,2023-1,1219,16635,0.07327923053802224,62,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1807,Universidad,S,2023-1,332,4520,0.07345132743362832,63,Universidad Libre,Valle del Cauca,Santiago de Cali
1826,Universidad,S,2023-1,963,13009,0.0740256745330156,64,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1734,Universidad,S,2023-1,342,4548,0.07519788918205805,65,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1111,Universidad,S,2023-1,1151,14958,0.07694878994517984,66,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1114,Universidad,S,2023-1,1057,13645,0.07746427262733602,67,Universidad Surcolombiana,Huila,Neiva
1806,Universidad,S,2023-1,501,6385,0.07846515270164447,68,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1205,Universidad,S,2023-1,1575,19986,0.07880516361453017,69,Universidad De Cartagena,Bolívar,Cartagena de Indias
1830,Universidad,S,2023-1,545,6728,0.08100475624256837,70,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1733,Universidad,S,2023-1,173,2135,0.08103044496487119,71,Universidad Sergio Arboleda,Magdalena,Santa Marta
1817,Universidad,S,2023-1,260,3178,0.08181246066708622,72,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1729,Universidad,S,2023-1,858,10451,0.08209740694670367,73,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1719,Universidad,S,2023-1,571,6943,0.08224110615007922,74,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1803,Universidad,S,2023-1,628,7598,0.0826533298236378,75,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1218,Universidad,S,2023-1,1148,13867,0.08278647147905098,76,Universidad De La Guajira,La Guajira,Riohacha
1705,Universidad,S,2023-1,352,4214,0.083531086853346,77,Universidad Santo Tomas,Santander,Bucaramanga
1728,Universidad,S,2023-1,628,7504,0.08368869936034115,78,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1825,Universidad,S,2023-1,302,3590,0.08412256267409471,79,Universidad Autonoma De Manizales,Caldas,Manizales
1823,Universidad,S,2023-1,663,7827,0.08470678420850901,80,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1223,Universidad,S,2023-1,28,329,0.0851063829787234,81,Universidad De Antioquia,Antioquia,Turbo
1812,Universidad,S,2023-1,561,6498,0.08633425669436749,82,Universidad De Medellin,Antioquia,Medellín
1810,Universidad,S,2023-1,123,1422,0.08649789029535865,83,Universidad Libre,Norte de Santander,San José de Cúcuta
1718,Universidad,S,2023-1,196,2232,0.08781362007168458,84,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1818,Universidad,S,2023-1,1987,22576,0.08801381998582565,85,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1726,Universidad,S,2023-1,373,4137,0.09016195310611554,86,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1219,Universidad,S,2023-1,26,283,0.09187279151943464,87,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1117,Universidad,S,2023-1,1492,15805,0.09440050616893388,88,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1208,Universidad,S,2023-1,1455,14881,0.09777568711780124,89,Universidad Del Quindio,Quindío,Armenia
1201,Universidad,S,2023-1,3019,30765,0.09813099301153907,90,Universidad De Antioquia,Antioquia,Medellín
9122,Universidad,S,2023-1,61,619,0.098546042003231,91,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1735,Universidad,S,2023-1,546,5498,0.09930883957802836,92,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1717,Universidad,S,2023-1,330,3287,0.1003954974140554,93,Universidad De San Buenaventura,Antioquia,Medellín
9105,Universidad,S,2023-1,89,852,0.1044600938967136,94,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1704,Universidad,S,2023-1,1549,14640,0.1058060109289617,95,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1814,Universidad,S,2023-1,352,3206,0.1097941359950094,96,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1109,Universidad,S,2023-1,86,780,0.1102564102564103,97,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1202,Universidad,S,2023-1,2297,20833,0.110257764124226,98,Universidad Del Atlantico,Atlántico,Puerto Colombia
1207,Universidad,S,2023-1,2590,22407,0.1155888784754764,99,Universidad Del Tolima,Tolima,Ibagué
2812,Universidad,S,2023-1,941,8100,0.1161728395061728,100,Universidad Ean,Cundinamarca,"Bogotá, D.C."
2102,Universidad,S,2023-1,16102,113325,0.1420869181557468,101,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1202,Universidad,S,2022-2,0,1,0.0,1,Universidad Del Atlantico,Atlántico,Puerto Colombia
1828,Universidad,S,2022-2,123,5153,0.02386959052978847,2,Universidad Icesi,Valle del Cauca,Santiago de Cali
1222,Universidad,S,2022-2,2,69,0.02898550724637681,3,Universidad De Antioquia,Antioquia,Puerto Berrío
1711,Universidad,S,2022-2,303,9595,0.03157894736842105,4,Universidad De La Sabana,Cundinamarca,Chía
1713,Universidad,S,2022-2,392,11825,0.03315010570824525,5,Universidad Del Norte,Atlántico,Barranquilla
1712,Universidad,S,2022-2,265,7837,0.03381395942324869,6,Universidad Eafit-,Antioquia,Medellín
1813,Universidad,S,2022-2,439,12808,0.03427545284197377,7,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1724,Universidad,S,2022-2,126,3581,0.03518570231778833,8,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1108,Universidad,S,2022-2,130,3458,0.03759398496240601,9,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1101,Universidad,S,2022-2,1037,27017,0.03838324018210756,10,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1701,Universidad,S,2022-2,636,16178,0.03931264680430214,11,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1301,Universidad,S,2022-2,778,19226,0.04046603557682305,12,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1113,Universidad,S,2022-2,673,16059,0.0419079643813438,13,Universidad De Cordoba,Córdoba,Montería
2805,Universidad,S,2022-2,624,14725,0.04237691001697793,14,Universidad Simon Bolivar,Atlántico,Barranquilla
2708,Universidad,S,2022-2,199,4667,0.04263981144203986,15,Universidad Ces,Antioquia,Medellín
1217,Universidad,S,2022-2,266,6011,0.04425220429213109,16,Universidad De Sucre,Sucre,Sincelejo
1110,Universidad,S,2022-2,581,13083,0.0444087747458534,17,Universidad Del Cauca,Cauca,Popayán
1714,Universidad,S,2022-2,393,8730,0.04501718213058419,18,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1213,Universidad,S,2022-2,1051,23231,0.04524127243769101,19,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1107,Universidad,S,2022-2,148,3014,0.0491041804910418,20,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1727,Universidad,S,2022-2,152,3044,0.04993429697766097,21,Universidad Pontificia Bolivariana,Córdoba,Montería
9933,Universidad,S,2022-2,44,857,0.05134189031505251,22,Universidad Nacional De Colombia,Cesar,La Paz
1702,Universidad,S,2022-2,337,6339,0.05316295945732766,23,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1106,Universidad,S,2022-2,1099,20603,0.05334174634761928,24,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1204,Universidad,S,2022-2,1075,20059,0.05359190388354355,25,Universidad Industrial De Santander,Santander,Bucaramanga
1209,Universidad,S,2022-2,950,17405,0.05458201666187877,26,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
2811,Universidad,S,2022-2,226,4115,0.05492102065613609,27,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1720,Universidad,S,2022-2,317,5757,0.0550634010769498,28,Universidad Mariana,Nariño,Pasto
1832,Universidad,S,2022-2,270,4842,0.05576208178438662,29,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1223,Universidad,S,2022-2,14,251,0.05577689243027888,30,Universidad De Antioquia,Antioquia,Turbo
1835,Universidad,S,2022-2,243,4301,0.05649848872355266,31,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1716,Universidad,S,2022-2,203,3515,0.0577524893314367,32,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1121,Universidad,S,2022-2,366,6140,0.05960912052117264,33,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1103,Universidad,S,2022-2,284,4743,0.05987771452667089,34,Universidad Nacional De Colombia,Caldas,Manizales
9122,Universidad,S,2022-2,34,567,0.05996472663139329,35,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1734,Universidad,S,2022-2,264,4348,0.06071757129714812,36,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1708,Universidad,S,2022-2,11,173,0.06358381502890173,37,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1833,Universidad,S,2022-2,542,8479,0.06392263238589456,38,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1709,Universidad,S,2022-2,464,7185,0.06457898399443285,39,Universidad Central,Cundinamarca,"Bogotá, D.C."
1212,Universidad,S,2022-2,1541,23090,0.06673884798614119,40,Universidad De Pamplona,Norte de Santander,Pamplona
1206,Universidad,S,2022-2,947,14158,0.06688797852804068,41,Universidad De Nariño,Nariño,Pasto
1826,Universidad,S,2022-2,878,12714,0.06905773163441875,42,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1729,Universidad,S,2022-2,723,10357,0.0698078594187506,43,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1102,Universidad,S,2022-2,837,11964,0.06995987963891676,44,Universidad Nacional De Colombia,Antioquia,Medellín
1205,Universidad,S,2022-2,609,8704,0.06996783088235294,45,Universidad De Cartagena,Bolívar,Cartagena de Indias
1805,Universidad,S,2022-2,1083,15382,0.07040696918476141,46,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2813,Universidad,S,2022-2,132,1852,0.07127429805615551,47,Universidad Eia,Antioquia,Envigado
1830,Universidad,S,2022-2,493,6879,0.07166739351649949,48,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1815,Universidad,S,2022-2,255,3558,0.07166947723440135,49,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
2832,Universidad,S,2022-2,661,9208,0.07178540399652476,50,Universidad De Santander - Udes,Santander,Bucaramanga
1707,Universidad,S,2022-2,391,5428,0.07203389830508475,51,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
2812,Universidad,S,2022-2,521,7186,0.0725020873921514,52,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1104,Universidad,S,2022-2,200,2734,0.07315288953913679,53,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1119,Universidad,S,2022-2,452,6141,0.07360364761439504,54,Universidad De Los Llanos,Meta,Villavicencio
1730,Universidad,S,2022-2,24,326,0.0736196319018405,55,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1117,Universidad,S,2022-2,1145,15334,0.07467066649276119,56,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1105,Universidad,S,2022-2,649,8589,0.07556176504831762,57,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1807,Universidad,S,2022-2,328,4263,0.07694112127609665,58,Universidad Libre,Valle del Cauca,Santiago de Cali
2810,Universidad,S,2022-2,824,10646,0.0773999624272027,59,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1812,Universidad,S,2022-2,518,6634,0.07808260476334036,60,Universidad De Medellin,Antioquia,Medellín
1831,Universidad,S,2022-2,368,4656,0.07903780068728522,61,Universidad De Ibague,Tolima,Ibagué
1732,Universidad,S,2022-2,265,3315,0.07993966817496229,62,Universidad Santo Tomas,Boyacá,Tunja
1114,Universidad,S,2022-2,1032,12894,0.08003722661703118,63,Universidad Surcolombiana,Huila,Neiva
1219,Universidad,S,2022-2,19,235,0.08085106382978724,64,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1203,Universidad,S,2022-2,2352,29075,0.08089423903697335,65,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1817,Universidad,S,2022-2,253,3110,0.08135048231511254,66,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1728,Universidad,S,2022-2,590,7126,0.08279539713724389,67,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1726,Universidad,S,2022-2,333,4019,0.08285643194824584,68,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1208,Universidad,S,2022-2,1228,14495,0.08471886857537082,69,Universidad Del Quindio,Quindío,Armenia
1808,Universidad,S,2022-2,415,4880,0.08504098360655737,70,Universidad Libre,Atlántico,Barranquilla
1201,Universidad,S,2022-2,2347,27524,0.08527103618660078,71,Universidad De Antioquia,Antioquia,Medellín
1706,Universidad,S,2022-2,436,5110,0.0853228962818004,72,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1109,Universidad,S,2022-2,71,824,0.08616504854368932,73,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1718,Universidad,S,2022-2,183,2121,0.08628005657708628,74,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1823,Universidad,S,2022-2,717,8137,0.08811601327270493,75,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1723,Universidad,S,2022-2,322,3642,0.08841295991213619,76,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1704,Universidad,S,2022-2,1284,14467,0.08875371535218082,77,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1733,Universidad,S,2022-2,177,1977,0.08952959028831563,78,Universidad Sergio Arboleda,Magdalena,Santa Marta
1816,Universidad,S,2022-2,362,4038,0.08964834076275384,79,Universidad Cooperativa De Colombia,Antioquia,Medellín
1803,Universidad,S,2022-2,701,7781,0.09009124791157948,80,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1717,Universidad,S,2022-2,298,3272,0.0910757946210269,81,Universidad De San Buenaventura,Antioquia,Medellín
1111,Universidad,S,2022-2,1402,15216,0.09213985278654048,82,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1825,Universidad,S,2022-2,342,3654,0.09359605911330048,83,Universidad Autonoma De Manizales,Caldas,Manizales
1218,Universidad,S,2022-2,1314,13823,0.09505895970483975,84,Universidad De La Guajira,La Guajira,Riohacha
1719,Universidad,S,2022-2,680,7152,0.09507829977628636,85,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,S,2022-2,309,3249,0.0951061865189289,86,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1827,Universidad,S,2022-2,174,1823,0.09544706527701592,87,Universidad Catolica De Manizales,Caldas,Manizales
1722,Universidad,S,2022-2,528,5434,0.097165991902834,88,Universidad De Manizales,Caldas,Manizales
1818,Universidad,S,2022-2,2257,23007,0.09810057808493068,89,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1809,Universidad,S,2022-2,300,2836,0.1057827926657264,90,Universidad Libre,Risaralda,Pereira
1735,Universidad,S,2022-2,565,5297,0.1066641495185954,91,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1710,Universidad,S,2022-2,1181,10814,0.1092102829665249,92,Universidad Pontificia Bolivariana,Antioquia,Medellín
1112,Universidad,S,2022-2,1293,11751,0.1100331886647945,93,Universidad De Caldas,Caldas,Manizales
2102,Universidad,S,2022-2,11466,101139,0.1133687301634384,94,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
9125,Universidad,S,2022-2,8,69,0.1159420289855072,95,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1221,Universidad,S,2022-2,23,191,0.1204188481675393,96,Universidad De Antioquia,Antioquia,Caucasia
1806,Universidad,S,2022-2,771,6271,0.1229468984213044,97,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1207,Universidad,S,2022-2,2869,22755,0.1260821797407163,98,Universidad Del Tolima,Tolima,Ibagué
1810,Universidad,S,2022-2,193,1431,0.1348707197763802,99,Universidad Libre,Norte de Santander,San José de Cúcuta
1220,Universidad,S,2022-2,28,204,0.1372549019607843,100,Universidad De Antioquia,Antioquia,Andes
1705,Universidad,S,2022-2,678,4936,0.1373581847649919,101,Universidad Santo Tomas,Santander,Bucaramanga
1811,Universidad,S,2022-2,147,878,0.1674259681093394,102,Universidad Libre,Santander,Socorro
9105,Universidad,S,2022-2,191,943,0.2025450689289502,103,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1711,Universidad,S,2022-1,158,9703,0.01628362362156034,1,Universidad De La Sabana,Cundinamarca,Chía
1713,Universidad,S,2022-1,318,12215,0.02603356528857962,2,Universidad Del Norte,Atlántico,Barranquilla
1813,Universidad,S,2022-1,392,13055,0.03002680965147453,3,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,Universidad,S,2022-1,161,5328,0.03021771771771772,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
2708,Universidad,S,2022-1,142,4667,0.0304263981144204,5,Universidad Ces,Antioquia,Medellín
1730,Universidad,S,2022-1,10,319,0.03134796238244514,6,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1209,Universidad,S,2022-1,556,17176,0.03237074988355845,7,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1108,Universidad,S,2022-1,114,3477,0.03278688524590164,8,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1714,Universidad,S,2022-1,310,8877,0.03492170778416132,9,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1727,Universidad,S,2022-1,109,3066,0.03555120678408349,10,Universidad Pontificia Bolivariana,Córdoba,Montería
9125,Universidad,S,2022-1,2,52,0.03846153846153846,11,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1121,Universidad,S,2022-1,219,5622,0.03895410885805763,12,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1701,Universidad,S,2022-1,651,16702,0.03897736797988265,13,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1212,Universidad,S,2022-1,981,23357,0.04200025688230509,14,Universidad De Pamplona,Norte de Santander,Pamplona
1712,Universidad,S,2022-1,352,8331,0.04225183051254351,15,Universidad Eafit-,Antioquia,Medellín
1204,Universidad,S,2022-1,852,19923,0.0427646438789339,16,Universidad Industrial De Santander,Santander,Bucaramanga
1101,Universidad,S,2022-1,1161,27086,0.0428634719043048,17,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
2811,Universidad,S,2022-1,187,4316,0.04332715477293791,18,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
9933,Universidad,S,2022-1,32,728,0.04395604395604396,19,Universidad Nacional De Colombia,Cesar,La Paz
2805,Universidad,S,2022-1,679,15091,0.04499370485719965,20,Universidad Simon Bolivar,Atlántico,Barranquilla
1702,Universidad,S,2022-1,305,6525,0.04674329501915709,21,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1217,Universidad,S,2022-1,282,5974,0.04720455306327419,22,Universidad De Sucre,Sucre,Sincelejo
1808,Universidad,S,2022-1,233,4934,0.0472233481961897,23,Universidad Libre,Atlántico,Barranquilla
1113,Universidad,S,2022-1,784,16541,0.04739737621667372,24,Universidad De Cordoba,Córdoba,Montería
1107,Universidad,S,2022-1,149,3012,0.04946879150066401,25,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1724,Universidad,S,2022-1,175,3529,0.04958911873051856,26,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
9122,Universidad,S,2022-1,31,615,0.05040650406504065,27,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1213,Universidad,S,2022-1,1165,22782,0.05113686243525591,28,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1827,Universidad,S,2022-1,104,1939,0.05363589479112945,29,Universidad Catolica De Manizales,Caldas,Manizales
9105,Universidad,S,2022-1,51,930,0.05483870967741936,30,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1104,Universidad,S,2022-1,156,2812,0.05547652916073969,31,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1206,Universidad,S,2022-1,801,14335,0.05587722357865364,32,Universidad De Nariño,Nariño,Pasto
1222,Universidad,S,2022-1,4,71,0.05633802816901409,33,Universidad De Antioquia,Antioquia,Puerto Berrío
1106,Universidad,S,2022-1,1185,20924,0.05663353087363793,34,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
2832,Universidad,S,2022-1,525,9267,0.05665263839430236,35,Universidad De Santander - Udes,Santander,Bucaramanga
1710,Universidad,S,2022-1,642,11081,0.05793700929518997,36,Universidad Pontificia Bolivariana,Antioquia,Medellín
1832,Universidad,S,2022-1,301,5063,0.0594509184278096,37,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1722,Universidad,S,2022-1,317,5177,0.06123237396175391,38,Universidad De Manizales,Caldas,Manizales
2813,Universidad,S,2022-1,116,1889,0.0614081524616199,39,Universidad Eia,Antioquia,Envigado
1734,Universidad,S,2022-1,275,4450,0.06179775280898876,40,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1105,Universidad,S,2022-1,524,8348,0.06276952563488261,41,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1709,Universidad,S,2022-1,496,7896,0.06281661600810537,42,Universidad Central,Cundinamarca,"Bogotá, D.C."
1103,Universidad,S,2022-1,308,4893,0.06294706723891273,43,Universidad Nacional De Colombia,Caldas,Manizales
1707,Universidad,S,2022-1,373,5894,0.06328469630132338,44,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1716,Universidad,S,2022-1,235,3698,0.06354786371011358,45,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1729,Universidad,S,2022-1,665,10457,0.06359376494214401,46,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1205,Universidad,S,2022-1,1184,18501,0.06399654072752824,47,Universidad De Cartagena,Bolívar,Cartagena de Indias
1809,Universidad,S,2022-1,187,2884,0.06484049930651872,48,Universidad Libre,Risaralda,Pereira
1805,Universidad,S,2022-1,969,14828,0.06534933908821149,49,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1732,Universidad,S,2022-1,214,3256,0.06572481572481573,50,Universidad Santo Tomas,Boyacá,Tunja
1706,Universidad,S,2022-1,362,5444,0.06649522409992653,51,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1835,Universidad,S,2022-1,292,4328,0.06746765249537892,52,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1203,Universidad,S,2022-1,1465,21625,0.06774566473988439,53,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1833,Universidad,S,2022-1,591,8581,0.06887309171425242,54,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1826,Universidad,S,2022-1,888,12826,0.0692343676906284,55,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1208,Universidad,S,2022-1,979,14062,0.06962025316455696,56,Universidad Del Quindio,Quindío,Armenia
1110,Universidad,S,2022-1,937,13416,0.06984197972570065,57,Universidad Del Cauca,Cauca,Popayán
1102,Universidad,S,2022-1,856,12080,0.07086092715231788,58,Universidad Nacional De Colombia,Antioquia,Medellín
1117,Universidad,S,2022-1,1093,15278,0.07154077758868962,59,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1723,Universidad,S,2022-1,293,4036,0.07259663032705649,60,Universidad Pontificia Bolivariana,Santander,Bucaramanga
2810,Universidad,S,2022-1,823,11167,0.07369929255843109,61,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1720,Universidad,S,2022-1,437,5927,0.0737303863674709,62,Universidad Mariana,Nariño,Pasto
1831,Universidad,S,2022-1,376,5082,0.0739866194411649,63,Universidad De Ibague,Tolima,Ibagué
1119,Universidad,S,2022-1,458,6167,0.07426625587806064,64,Universidad De Los Llanos,Meta,Villavicencio
1223,Universidad,S,2022-1,19,251,0.07569721115537849,65,Universidad De Antioquia,Antioquia,Turbo
1114,Universidad,S,2022-1,994,13116,0.07578530039646234,66,Universidad Surcolombiana,Huila,Neiva
1111,Universidad,S,2022-1,1147,15091,0.07600556623152872,67,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1817,Universidad,S,2022-1,242,3159,0.07660652105096549,68,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1812,Universidad,S,2022-1,558,7273,0.07672212292039049,69,Universidad De Medellin,Antioquia,Medellín
1807,Universidad,S,2022-1,335,4347,0.07706464228203358,70,Universidad Libre,Valle del Cauca,Santiago de Cali
1728,Universidad,S,2022-1,565,7281,0.07759923087487983,71,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1220,Universidad,S,2022-1,16,206,0.07766990291262135,72,Universidad De Antioquia,Antioquia,Andes
1825,Universidad,S,2022-1,297,3818,0.07778941854374018,73,Universidad Autonoma De Manizales,Caldas,Manizales
1806,Universidad,S,2022-1,504,6429,0.07839477368175456,74,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1811,Universidad,S,2022-1,73,911,0.0801317233809001,75,Universidad Libre,Santander,Socorro
1816,Universidad,S,2022-1,337,4196,0.08031458531935176,76,Universidad Cooperativa De Colombia,Antioquia,Medellín
1803,Universidad,S,2022-1,669,8193,0.08165507140241669,77,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1718,Universidad,S,2022-1,177,2135,0.08290398126463701,78,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1823,Universidad,S,2022-1,726,8593,0.08448737344350052,79,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1218,Universidad,S,2022-1,1155,13415,0.08609765188222139,80,Universidad De La Guajira,La Guajira,Riohacha
1818,Universidad,S,2022-1,2107,24040,0.08764559068219634,81,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1830,Universidad,S,2022-1,658,7447,0.08835772794413858,82,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1726,Universidad,S,2022-1,375,4237,0.08850601840925183,83,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
2812,Universidad,S,2022-1,626,7060,0.0886685552407932,84,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1719,Universidad,S,2022-1,672,7574,0.08872458410351201,85,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1815,Universidad,S,2022-1,345,3874,0.08905524006195147,86,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1705,Universidad,S,2022-1,461,5036,0.09154090548054011,87,Universidad Santo Tomas,Santander,Bucaramanga
1735,Universidad,S,2022-1,463,4982,0.09293456443195504,88,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1708,Universidad,S,2022-1,20,212,0.09433962264150944,89,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1814,Universidad,S,2022-1,330,3476,0.0949367088607595,90,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1201,Universidad,S,2022-1,2993,31433,0.09521840104348932,91,Universidad De Antioquia,Antioquia,Medellín
1717,Universidad,S,2022-1,349,3581,0.09745881038815972,92,Universidad De San Buenaventura,Antioquia,Medellín
1704,Universidad,S,2022-1,1502,15341,0.09790756795515286,93,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1810,Universidad,S,2022-1,144,1469,0.09802586793737236,94,Universidad Libre,Norte de Santander,San José de Cúcuta
2102,Universidad,S,2022-1,9362,93637,0.09998184478357916,95,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1221,Universidad,S,2022-1,26,255,0.1019607843137255,96,Universidad De Antioquia,Antioquia,Caucasia
1733,Universidad,S,2022-1,217,2037,0.1065292096219931,97,Universidad Sergio Arboleda,Magdalena,Santa Marta
1112,Universidad,S,2022-1,1321,12181,0.1084475823003038,98,Universidad De Caldas,Caldas,Manizales
1207,Universidad,S,2022-1,2454,21565,0.113795501970786,99,Universidad Del Tolima,Tolima,Ibagué
1301,Universidad,S,2022-1,2418,18755,0.1289256198347107,100,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1202,Universidad,S,2022-1,2571,19837,0.1296062912738822,101,Universidad Del Atlantico,Atlántico,Puerto Colombia
1219,Universidad,S,2022-1,31,235,0.1319148936170213,102,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1109,Universidad,S,2022-1,164,967,0.1695966907962771,103,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1101,Universidad,S,2021-2,519,25295,0.02051788891085195,1,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1828,Universidad,S,2021-2,131,5493,0.02384853449845258,2,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,S,2021-2,317,12973,0.02443536575965467,3,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1209,Universidad,S,2021-2,437,16891,0.02587176602924635,4,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1103,Universidad,S,2021-2,122,4671,0.02611860415328623,5,Universidad Nacional De Colombia,Caldas,Manizales
1222,Universidad,S,2021-2,2,74,0.02702702702702703,6,Universidad De Antioquia,Antioquia,Puerto Berrío
2708,Universidad,S,2021-2,126,4548,0.02770448548812665,7,Universidad Ces,Antioquia,Medellín
9933,Universidad,S,2021-2,16,551,0.02903811252268602,8,Universidad Nacional De Colombia,Cesar,La Paz
1713,Universidad,S,2021-2,356,11863,0.03000927252802832,9,Universidad Del Norte,Atlántico,Barranquilla
1113,Universidad,S,2021-2,500,16181,0.03090043878623076,10,Universidad De Cordoba,Córdoba,Montería
1711,Universidad,S,2021-2,309,9783,0.03158540325053664,11,Universidad De La Sabana,Cundinamarca,Chía
1206,Universidad,S,2021-2,421,13269,0.03172808802471927,12,Universidad De Nariño,Nariño,Pasto
1213,Universidad,S,2021-2,683,21062,0.03242806950906846,13,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1714,Universidad,S,2021-2,281,8584,0.03273532152842498,14,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1204,Universidad,S,2021-2,632,19069,0.03314279721013163,15,Universidad Industrial De Santander,Santander,Bucaramanga
1102,Universidad,S,2021-2,378,11288,0.03348688873139617,16,Universidad Nacional De Colombia,Antioquia,Medellín
1220,Universidad,S,2021-2,8,236,0.03389830508474576,17,Universidad De Antioquia,Antioquia,Andes
1217,Universidad,S,2021-2,204,5960,0.03422818791946309,18,Universidad De Sucre,Sucre,Sincelejo
9125,Universidad,S,2021-2,2,55,0.03636363636363636,19,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1712,Universidad,S,2021-2,300,8189,0.03663450970814507,20,Universidad Eafit-,Antioquia,Medellín
2811,Universidad,S,2021-2,162,4344,0.03729281767955801,21,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1108,Universidad,S,2021-2,128,3397,0.03768030615248749,22,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1701,Universidad,S,2021-2,620,16061,0.03860282672311811,23,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
2805,Universidad,S,2021-2,521,13400,0.03888059701492538,24,Universidad Simon Bolivar,Atlántico,Barranquilla
9105,Universidad,S,2021-2,38,954,0.03983228511530398,25,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1727,Universidad,S,2021-2,111,2746,0.04042243262927895,26,Universidad Pontificia Bolivariana,Córdoba,Montería
1702,Universidad,S,2021-2,260,6396,0.04065040650406504,27,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,Universidad,S,2021-2,113,2777,0.04069139359020526,28,Universidad Nacional De Colombia,Valle del Cauca,Palmira
2813,Universidad,S,2021-2,74,1793,0.04127161182375906,29,Universidad Eia,Antioquia,Envigado
1221,Universidad,S,2021-2,9,216,0.04166666666666666,30,Universidad De Antioquia,Antioquia,Caucasia
1212,Universidad,S,2021-2,1036,23918,0.04331465841625554,31,Universidad De Pamplona,Norte de Santander,Pamplona
1724,Universidad,S,2021-2,132,3035,0.04349258649093905,32,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1734,Universidad,S,2021-2,192,4163,0.04612058611578189,33,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1710,Universidad,S,2021-2,536,10963,0.04889172671713947,34,Universidad Pontificia Bolivariana,Antioquia,Medellín
1121,Universidad,S,2021-2,264,5343,0.04941044357102752,35,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1835,Universidad,S,2021-2,187,3715,0.05033647375504711,36,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1223,Universidad,S,2021-2,11,217,0.05069124423963134,37,Universidad De Antioquia,Antioquia,Turbo
1729,Universidad,S,2021-2,522,10032,0.05203349282296651,38,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1707,Universidad,S,2021-2,297,5707,0.05204135272472402,39,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1716,Universidad,S,2021-2,185,3542,0.05223037831733484,40,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1107,Universidad,S,2021-2,156,2970,0.05252525252525252,41,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1826,Universidad,S,2021-2,679,12400,0.05475806451612903,42,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1832,Universidad,S,2021-2,260,4690,0.05543710021321962,43,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1709,Universidad,S,2021-2,427,7696,0.05548336798336798,44,Universidad Central,Cundinamarca,"Bogotá, D.C."
1831,Universidad,S,2021-2,286,4925,0.05807106598984772,45,Universidad De Ibague,Tolima,Ibagué
1106,Universidad,S,2021-2,1181,20319,0.05812293912101973,46,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1105,Universidad,S,2021-2,489,8361,0.05848582705418012,47,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1805,Universidad,S,2021-2,744,12451,0.05975423660750141,48,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1815,Universidad,S,2021-2,224,3654,0.06130268199233716,49,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
2832,Universidad,S,2021-2,523,8526,0.06134177809054656,50,Universidad De Santander - Udes,Santander,Bucaramanga
1723,Universidad,S,2021-2,234,3783,0.06185567010309279,51,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1205,Universidad,S,2021-2,1081,17441,0.06198039103262427,52,Universidad De Cartagena,Bolívar,Cartagena de Indias
9122,Universidad,S,2021-2,39,607,0.0642504118616145,53,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1720,Universidad,S,2021-2,371,5753,0.0644880931687815,54,Universidad Mariana,Nariño,Pasto
1816,Universidad,S,2021-2,262,4021,0.06515792091519522,55,Universidad Cooperativa De Colombia,Antioquia,Medellín
1817,Universidad,S,2021-2,193,2892,0.06673582295988935,56,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1201,Universidad,S,2021-2,745,10683,0.06973696527192737,57,Universidad De Antioquia,Antioquia,Medellín
1117,Universidad,S,2021-2,1032,14655,0.07041965199590583,58,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1207,Universidad,S,2021-2,1437,20243,0.07098750185249222,59,Universidad Del Tolima,Tolima,Ibagué
1812,Universidad,S,2021-2,530,7458,0.07106462858675248,60,Universidad De Medellin,Antioquia,Medellín
1728,Universidad,S,2021-2,497,6987,0.0711321024760269,61,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1208,Universidad,S,2021-2,973,13441,0.07239044713934975,62,Universidad Del Quindio,Quindío,Armenia
1109,Universidad,S,2021-2,62,855,0.07251461988304093,63,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
2810,Universidad,S,2021-2,751,10324,0.07274312282061217,64,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1706,Universidad,S,2021-2,383,5205,0.07358309317963496,65,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1730,Universidad,S,2021-2,24,324,0.07407407407407407,66,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1732,Universidad,S,2021-2,225,2986,0.0753516409912927,67,Universidad Santo Tomas,Boyacá,Tunja
1833,Universidad,S,2021-2,601,7920,0.07588383838383839,68,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1718,Universidad,S,2021-2,165,2120,0.07783018867924528,69,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1722,Universidad,S,2021-2,423,5430,0.07790055248618785,70,Universidad De Manizales,Caldas,Manizales
1803,Universidad,S,2021-2,671,8611,0.07792358611078852,71,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1301,Universidad,S,2021-2,1502,18828,0.07977480348417251,72,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1830,Universidad,S,2021-2,619,7729,0.08008798033380773,73,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1717,Universidad,S,2021-2,287,3527,0.08137227105188545,74,Universidad De San Buenaventura,Antioquia,Medellín
1111,Universidad,S,2021-2,1259,15210,0.08277449046679816,75,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1704,Universidad,S,2021-2,1266,15130,0.08367481824190351,76,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1726,Universidad,S,2021-2,345,4122,0.08369723435225619,77,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1823,Universidad,S,2021-2,724,8606,0.08412735300952824,78,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1808,Universidad,S,2021-2,397,4661,0.08517485518129157,79,Universidad Libre,Atlántico,Barranquilla
1818,Universidad,S,2021-2,1983,23242,0.08531967988985457,80,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1809,Universidad,S,2021-2,250,2893,0.08641548565502938,81,Universidad Libre,Risaralda,Pereira
1203,Universidad,S,2021-2,2597,28879,0.08992693652827315,82,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1825,Universidad,S,2021-2,347,3797,0.09138793784566764,83,Universidad Autonoma De Manizales,Caldas,Manizales
1719,Universidad,S,2021-2,681,7345,0.09271613342409804,84,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1733,Universidad,S,2021-2,171,1840,0.09293478260869566,85,Universidad Sergio Arboleda,Magdalena,Santa Marta
2812,Universidad,S,2021-2,599,6443,0.0929691137668788,86,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1807,Universidad,S,2021-2,438,4516,0.09698848538529672,87,Universidad Libre,Valle del Cauca,Santiago de Cali
1708,Universidad,S,2021-2,24,247,0.097165991902834,88,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1814,Universidad,S,2021-2,348,3544,0.0981941309255079,89,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1114,Universidad,S,2021-2,1342,12825,0.1046393762183236,90,Universidad Surcolombiana,Huila,Neiva
1705,Universidad,S,2021-2,530,4981,0.1064043364786188,91,Universidad Santo Tomas,Santander,Bucaramanga
1202,Universidad,S,2021-2,2018,18258,0.1105268923211743,92,Universidad Del Atlantico,Atlántico,Puerto Colombia
1827,Universidad,S,2021-2,239,2075,0.1151807228915663,93,Universidad Catolica De Manizales,Caldas,Manizales
1112,Universidad,S,2021-2,443,3546,0.1249294980259447,94,Universidad De Caldas,Caldas,Manizales
1806,Universidad,S,2021-2,805,6417,0.1254480286738351,95,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1735,Universidad,S,2021-2,726,5310,0.1367231638418079,96,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2102,Universidad,S,2021-2,11595,80234,0.1445147942268863,97,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1811,Universidad,S,2021-2,162,948,0.1708860759493671,98,Universidad Libre,Santander,Socorro
1810,Universidad,S,2021-2,260,1502,0.1731025299600533,99,Universidad Libre,Norte de Santander,San José de Cúcuta
1219,Universidad,S,2021-2,14,77,0.1818181818181818,100,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1213,Universidad,S,2021-1,216,19150,0.01127937336814621,1,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1109,Universidad,S,2021-1,17,843,0.02016607354685647,2,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
9933,Universidad,S,2021-1,8,382,0.02094240837696335,3,Universidad Nacional De Colombia,Cesar,La Paz
2708,Universidad,S,2021-1,96,4524,0.02122015915119363,4,Universidad Ces,Antioquia,Medellín
1108,Universidad,S,2021-1,71,3344,0.02123205741626794,5,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1711,Universidad,S,2021-1,226,10043,0.02250323608483521,6,Universidad De La Sabana,Cundinamarca,Chía
1828,Universidad,S,2021-1,129,5598,0.02304394426580922,7,Universidad Icesi,Valle del Cauca,Santiago de Cali
1813,Universidad,S,2021-1,311,13143,0.02366278627406224,8,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1209,Universidad,S,2021-1,387,16091,0.02405071157790069,9,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1113,Universidad,S,2021-1,371,15399,0.02409247353724268,10,Universidad De Cordoba,Córdoba,Montería
1204,Universidad,S,2021-1,461,18396,0.02505979560774081,11,Universidad Industrial De Santander,Santander,Bucaramanga
1217,Universidad,S,2021-1,148,5789,0.02556572810502677,12,Universidad De Sucre,Sucre,Sincelejo
1104,Universidad,S,2021-1,73,2664,0.0274024024024024,13,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1212,Universidad,S,2021-1,685,23128,0.02961777931511588,14,Universidad De Pamplona,Norte de Santander,Pamplona
1101,Universidad,S,2021-1,789,25139,0.03138549663868889,15,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
9105,Universidad,S,2021-1,27,855,0.03157894736842105,16,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1713,Universidad,S,2021-1,405,12694,0.03190483693083346,17,Universidad Del Norte,Atlántico,Barranquilla
1111,Universidad,S,2021-1,469,14593,0.03213869663537312,18,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
2813,Universidad,S,2021-1,61,1786,0.0341545352743561,19,Universidad Eia,Antioquia,Envigado
1712,Universidad,S,2021-1,314,8706,0.03606708017459224,20,Universidad Eafit-,Antioquia,Medellín
1107,Universidad,S,2021-1,116,3045,0.0380952380952381,21,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
1701,Universidad,S,2021-1,655,16888,0.03878493604926575,22,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1730,Universidad,S,2021-1,13,333,0.03903903903903904,23,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1121,Universidad,S,2021-1,204,5167,0.03948132378556223,24,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1727,Universidad,S,2021-1,113,2850,0.03964912280701754,25,Universidad Pontificia Bolivariana,Córdoba,Montería
1205,Universidad,S,2021-1,672,16271,0.04130047323458914,26,Universidad De Cartagena,Bolívar,Cartagena de Indias
1103,Universidad,S,2021-1,195,4694,0.04154239454622923,27,Universidad Nacional De Colombia,Caldas,Manizales
2811,Universidad,S,2021-1,201,4784,0.04201505016722408,28,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1106,Universidad,S,2021-1,869,20375,0.04265030674846626,29,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1827,Universidad,S,2021-1,93,2168,0.04289667896678967,30,Universidad Catolica De Manizales,Caldas,Manizales
1702,Universidad,S,2021-1,283,6578,0.04302219519610824,31,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1105,Universidad,S,2021-1,362,8255,0.04385221078134464,32,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
1206,Universidad,S,2021-1,626,13336,0.04694061187762447,33,Universidad De Nariño,Nariño,Pasto
1714,Universidad,S,2021-1,438,9238,0.04741285992639099,34,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1207,Universidad,S,2021-1,862,17757,0.04854423607591372,35,Universidad Del Tolima,Tolima,Ibagué
1710,Universidad,S,2021-1,622,12075,0.05151138716356107,36,Universidad Pontificia Bolivariana,Antioquia,Medellín
1208,Universidad,S,2021-1,687,13151,0.0522393734316782,37,Universidad Del Quindio,Quindío,Armenia
1808,Universidad,S,2021-1,276,4962,0.05562273276904474,38,Universidad Libre,Atlántico,Barranquilla
1706,Universidad,S,2021-1,302,5424,0.05567846607669617,39,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1729,Universidad,S,2021-1,622,10611,0.05861841485251154,40,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1114,Universidad,S,2021-1,737,12336,0.05974383916990921,41,Universidad Surcolombiana,Huila,Neiva
1221,Universidad,S,2021-1,14,225,0.06222222222222222,42,Universidad De Antioquia,Antioquia,Caucasia
1832,Universidad,S,2021-1,337,5297,0.06362091750047197,43,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1809,Universidad,S,2021-1,204,3091,0.06599805888062116,44,Universidad Libre,Risaralda,Pereira
1722,Universidad,S,2021-1,364,5465,0.06660567246111619,45,Universidad De Manizales,Caldas,Manizales
1220,Universidad,S,2021-1,18,266,0.06766917293233082,46,Universidad De Antioquia,Antioquia,Andes
2805,Universidad,S,2021-1,1043,15137,0.06890401004161988,47,Universidad Simon Bolivar,Atlántico,Barranquilla
9125,Universidad,S,2021-1,4,58,0.06896551724137931,48,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1110,Universidad,S,2021-1,876,12609,0.06947418510587676,49,Universidad Del Cauca,Cauca,Popayán
1707,Universidad,S,2021-1,491,6961,0.07053584255135756,50,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1826,Universidad,S,2021-1,991,13992,0.07082618639222413,51,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1724,Universidad,S,2021-1,244,3418,0.07138677589233469,52,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1723,Universidad,S,2021-1,314,4330,0.07251732101616629,53,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1811,Universidad,S,2021-1,73,1003,0.07278165503489531,54,Universidad Libre,Santander,Socorro
1718,Universidad,S,2021-1,184,2456,0.0749185667752443,55,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1831,Universidad,S,2021-1,411,5470,0.07513711151736746,56,Universidad De Ibague,Tolima,Ibagué
1201,Universidad,S,2021-1,2317,30694,0.07548706587606699,57,Universidad De Antioquia,Antioquia,Medellín
1812,Universidad,S,2021-1,601,7945,0.07564505978602895,58,Universidad De Medellin,Antioquia,Medellín
1816,Universidad,S,2021-1,330,4293,0.07686932215234102,59,Universidad Cooperativa De Colombia,Antioquia,Medellín
1728,Universidad,S,2021-1,596,7725,0.07715210355987055,60,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1704,Universidad,S,2021-1,1250,16151,0.07739458857036716,61,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1708,Universidad,S,2021-1,24,309,0.07766990291262135,62,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1732,Universidad,S,2021-1,258,3313,0.07787503773015395,63,Universidad Santo Tomas,Boyacá,Tunja
1117,Universidad,S,2021-1,1204,15450,0.07792880258899676,64,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1203,Universidad,S,2021-1,1148,14668,0.07826561221707118,65,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1720,Universidad,S,2021-1,502,6347,0.07909248463841184,66,Universidad Mariana,Nariño,Pasto
1833,Universidad,S,2021-1,672,8476,0.07928268050967438,67,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1726,Universidad,S,2021-1,358,4500,0.07955555555555556,68,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1835,Universidad,S,2021-1,347,4326,0.08021266759130836,69,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1803,Universidad,S,2021-1,752,9295,0.08090371167294244,70,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1223,Universidad,S,2021-1,20,247,0.08097165991902834,71,Universidad De Antioquia,Antioquia,Turbo
2832,Universidad,S,2021-1,786,9605,0.08183237896928683,72,Universidad De Santander - Udes,Santander,Bucaramanga
1705,Universidad,S,2021-1,443,5396,0.08209785025945145,73,Universidad Santo Tomas,Santander,Bucaramanga
1814,Universidad,S,2021-1,314,3792,0.08280590717299578,74,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1716,Universidad,S,2021-1,323,3888,0.0830761316872428,75,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1806,Universidad,S,2021-1,586,7047,0.08315595288775365,76,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1823,Universidad,S,2021-1,794,9331,0.08509270174686528,77,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1709,Universidad,S,2021-1,789,9140,0.0863238512035011,78,Universidad Central,Cundinamarca,"Bogotá, D.C."
1807,Universidad,S,2021-1,418,4822,0.0866860223973455,79,Universidad Libre,Valle del Cauca,Santiago de Cali
2812,Universidad,S,2021-1,550,6315,0.08709422011084719,80,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1301,Universidad,S,2021-1,1596,18107,0.08814270724029381,81,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1825,Universidad,S,2021-1,382,4313,0.08856944122420589,82,Universidad Autonoma De Manizales,Caldas,Manizales
1830,Universidad,S,2021-1,770,8635,0.08917197452229299,83,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
9122,Universidad,S,2021-1,61,679,0.0898379970544919,84,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1719,Universidad,S,2021-1,764,8364,0.09134385461501672,85,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1102,Universidad,S,2021-1,128,1400,0.09142857142857144,86,Universidad Nacional De Colombia,Antioquia,Medellín
1734,Universidad,S,2021-1,448,4844,0.09248554913294796,87,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1815,Universidad,S,2021-1,417,4445,0.0938132733408324,88,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1119,Universidad,S,2021-1,547,5819,0.09400240591166868,89,Universidad De Los Llanos,Meta,Villavicencio
1733,Universidad,S,2021-1,191,1988,0.0960764587525151,90,Universidad Sergio Arboleda,Magdalena,Santa Marta
1817,Universidad,S,2021-1,329,3409,0.09650924024640656,91,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1717,Universidad,S,2021-1,414,4162,0.09947140797693416,92,Universidad De San Buenaventura,Antioquia,Medellín
1202,Universidad,S,2021-1,1914,19166,0.09986434310758636,93,Universidad Del Atlantico,Atlántico,Puerto Colombia
1810,Universidad,S,2021-1,166,1605,0.1034267912772586,94,Universidad Libre,Norte de Santander,San José de Cúcuta
1805,Universidad,S,2021-1,1482,14302,0.1036218710669836,95,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
2810,Universidad,S,2021-1,1239,11890,0.1042052144659378,96,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1222,Universidad,S,2021-1,9,83,0.108433734939759,97,Universidad De Antioquia,Antioquia,Puerto Berrío
1818,Universidad,S,2021-1,3004,27425,0.109535095715588,98,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1112,Universidad,S,2021-1,1410,12687,0.1111373847245212,99,Universidad De Caldas,Caldas,Manizales
1218,Universidad,S,2021-1,1643,13409,0.1225296442687747,100,Universidad De La Guajira,La Guajira,Riohacha
1735,Universidad,S,2021-1,846,6333,0.1335859782093795,101,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
2102,Universidad,S,2021-1,11116,71594,0.1552644076319245,102,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
1219,Universidad,S,2021-1,73,318,0.229559748427673,103,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1711,Universidad,S,2020-2,233,9910,0.02351160443995964,1,Universidad De La Sabana,Cundinamarca,Chía
1813,Universidad,S,2020-2,348,13169,0.02642569671197509,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1828,Universidad,S,2020-2,185,5722,0.03233135267389025,3,Universidad Icesi,Valle del Cauca,Santiago de Cali
9105,Universidad,S,2020-2,26,796,0.03266331658291458,4,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1222,Universidad,S,2020-2,2,57,0.03508771929824561,5,Universidad De Antioquia,Antioquia,Puerto Berrío
2813,Universidad,S,2020-2,59,1657,0.0356065178032589,6,Universidad Eia,Antioquia,Envigado
1213,Universidad,S,2020-2,691,18605,0.03714055361461972,7,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1714,Universidad,S,2020-2,345,9210,0.03745928338762215,8,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1103,Universidad,S,2020-2,179,4610,0.03882863340563991,9,Universidad Nacional De Colombia,Caldas,Manizales
1713,Universidad,S,2020-2,503,12858,0.03911961424793903,10,Universidad Del Norte,Atlántico,Barranquilla
1108,Universidad,S,2020-2,137,3439,0.0398371619656877,11,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1217,Universidad,S,2020-2,229,5718,0.04004896817068905,12,Universidad De Sucre,Sucre,Sincelejo
1712,Universidad,S,2020-2,356,8576,0.04151119402985075,13,Universidad Eafit-,Antioquia,Medellín
1113,Universidad,S,2020-2,493,11845,0.0416209371042634,14,Universidad De Cordoba,Córdoba,Montería
1206,Universidad,S,2020-2,548,13085,0.04188001528467711,15,Universidad De Nariño,Nariño,Pasto
1727,Universidad,S,2020-2,105,2507,0.04188272836059035,16,Universidad Pontificia Bolivariana,Córdoba,Montería
1107,Universidad,S,2020-2,131,3053,0.04290861447756305,17,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
2708,Universidad,S,2020-2,192,4429,0.04335064348611425,18,Universidad Ces,Antioquia,Medellín
1204,Universidad,S,2020-2,805,18401,0.04374762241182544,19,Universidad Industrial De Santander,Santander,Bucaramanga
1701,Universidad,S,2020-2,801,17194,0.04658601837850413,20,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1101,Universidad,S,2020-2,1170,24927,0.04693705620411602,21,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1702,Universidad,S,2020-2,329,6590,0.04992412746585736,22,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1827,Universidad,S,2020-2,110,2189,0.05025125628140704,23,Universidad Catolica De Manizales,Caldas,Manizales
1220,Universidad,S,2020-2,12,238,0.05042016806722689,24,Universidad De Antioquia,Antioquia,Andes
1209,Universidad,S,2020-2,825,16234,0.05081926820253788,25,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1301,Universidad,S,2020-2,859,16138,0.05322840500681621,26,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
2811,Universidad,S,2020-2,256,4777,0.05359011932175006,27,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1104,Universidad,S,2020-2,142,2638,0.05382865807429871,28,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1106,Universidad,S,2020-2,1102,20454,0.05387699227534957,29,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1109,Universidad,S,2020-2,50,873,0.0572737686139748,30,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1724,Universidad,S,2020-2,185,3124,0.05921895006402049,31,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1212,Universidad,S,2020-2,1398,23503,0.0594817682848998,32,Universidad De Pamplona,Norte de Santander,Pamplona
1121,Universidad,S,2020-2,310,5116,0.06059421422986708,33,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1723,Universidad,S,2020-2,260,4198,0.06193425440686041,34,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1707,Universidad,S,2020-2,460,7394,0.06221260481471463,35,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1710,Universidad,S,2020-2,757,12100,0.06256198347107438,36,Universidad Pontificia Bolivariana,Antioquia,Medellín
1729,Universidad,S,2020-2,667,10563,0.06314493988450251,37,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
2832,Universidad,S,2020-2,583,8985,0.06488592097941012,38,Universidad De Santander - Udes,Santander,Bucaramanga
9122,Universidad,S,2020-2,44,678,0.06489675516224189,39,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1111,Universidad,S,2020-2,929,14285,0.06503325166258313,40,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1203,Universidad,S,2020-2,1679,25624,0.0655245082734936,41,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1816,Universidad,S,2020-2,273,4156,0.06568816169393647,42,Universidad Cooperativa De Colombia,Antioquia,Medellín
2805,Universidad,S,2020-2,932,14132,0.06594961788848004,43,Universidad Simon Bolivar,Atlántico,Barranquilla
1219,Universidad,S,2020-2,22,325,0.06769230769230769,44,Universidad De Antioquia,Antioquia,El Carmen de Viboral
1720,Universidad,S,2020-2,432,6368,0.0678391959798995,45,Universidad Mariana,Nariño,Pasto
1716,Universidad,S,2020-2,287,3972,0.07225579053373615,46,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1826,Universidad,S,2020-2,1019,13980,0.0728898426323319,47,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1708,Universidad,S,2020-2,21,288,0.07291666666666667,48,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1835,Universidad,S,2020-2,334,4534,0.07366563740626378,49,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1722,Universidad,S,2020-2,460,6054,0.07598282127518996,50,Universidad De Manizales,Caldas,Manizales
1114,Universidad,S,2020-2,919,12025,0.07642411642411642,51,Universidad Surcolombiana,Huila,Neiva
1730,Universidad,S,2020-2,28,365,0.07671232876712329,52,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1815,Universidad,S,2020-2,354,4524,0.07824933687002653,53,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1817,Universidad,S,2020-2,266,3395,0.07835051546391752,54,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1709,Universidad,S,2020-2,744,9389,0.0792416657791032,55,Universidad Central,Cundinamarca,"Bogotá, D.C."
1831,Universidad,S,2020-2,456,5619,0.0811532301121196,56,Universidad De Ibague,Tolima,Ibagué
1728,Universidad,S,2020-2,626,7577,0.08261845057410584,57,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1205,Universidad,S,2020-2,1342,16208,0.08279861796643632,58,Universidad De Cartagena,Bolívar,Cartagena de Indias
1832,Universidad,S,2020-2,436,5162,0.08446338628438589,59,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1812,Universidad,S,2020-2,704,8299,0.08482949752982287,60,Universidad De Medellin,Antioquia,Medellín
1223,Universidad,S,2020-2,23,271,0.08487084870848709,61,Universidad De Antioquia,Antioquia,Turbo
1833,Universidad,S,2020-2,696,8134,0.08556675682321122,62,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1717,Universidad,S,2020-2,359,4183,0.08582357159933063,63,Universidad De San Buenaventura,Antioquia,Medellín
1719,Universidad,S,2020-2,718,8307,0.08643312868664982,64,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1814,Universidad,S,2020-2,323,3729,0.08661839635290963,65,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1726,Universidad,S,2020-2,393,4467,0.08797850906648758,66,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1105,Universidad,S,2020-2,760,8586,0.08851618914511997,67,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2810,Universidad,S,2020-2,1006,11317,0.08889281611734559,68,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1803,Universidad,S,2020-2,913,10251,0.08906448151399864,69,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1809,Universidad,S,2020-2,263,2945,0.08930390492359933,70,Universidad Libre,Risaralda,Pereira
1830,Universidad,S,2020-2,810,8913,0.09087849209020532,71,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
1706,Universidad,S,2020-2,484,5312,0.0911144578313253,72,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1207,Universidad,S,2020-2,1527,16543,0.09230490237562716,73,Universidad Del Tolima,Tolima,Ibagué
1208,Universidad,S,2020-2,1214,13122,0.09251638469745466,74,Universidad Del Quindio,Quindío,Armenia
1704,Universidad,S,2020-2,1504,16248,0.09256523879862136,75,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1808,Universidad,S,2020-2,451,4847,0.09304724571900144,76,Universidad Libre,Atlántico,Barranquilla
1718,Universidad,S,2020-2,224,2389,0.09376308078694014,77,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1818,Universidad,S,2020-2,2646,28196,0.09384309831181728,78,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1732,Universidad,S,2020-2,301,3200,0.0940625,79,Universidad Santo Tomas,Boyacá,Tunja
1117,Universidad,S,2020-2,1435,15113,0.09495136637332098,80,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
9933,Universidad,S,2020-2,19,200,0.095,81,Universidad Nacional De Colombia,Cesar,La Paz
1202,Universidad,S,2020-2,1669,17450,0.09564469914040116,82,Universidad Del Atlantico,Atlántico,Puerto Colombia
1823,Universidad,S,2020-2,906,9318,0.09723116548615585,83,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1734,Universidad,S,2020-2,467,4800,0.09729166666666668,84,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1825,Universidad,S,2020-2,450,4375,0.1028571428571429,85,Universidad Autonoma De Manizales,Caldas,Manizales
1733,Universidad,S,2020-2,198,1857,0.1066235864297254,86,Universidad Sergio Arboleda,Magdalena,Santa Marta
2812,Universidad,S,2020-2,702,6475,0.1084169884169884,87,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1705,Universidad,S,2020-2,585,5350,0.1093457943925234,88,Universidad Santo Tomas,Santander,Bucaramanga
1805,Universidad,S,2020-2,1563,14234,0.1098075031614444,89,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1201,Universidad,S,2020-2,3252,29132,0.1116298228751888,90,Universidad De Antioquia,Antioquia,Medellín
1221,Universidad,S,2020-2,21,187,0.1122994652406417,91,Universidad De Antioquia,Antioquia,Caucasia
1807,Universidad,S,2020-2,551,4886,0.112771182971756,92,Universidad Libre,Valle del Cauca,Santiago de Cali
1735,Universidad,S,2020-2,721,6209,0.1161217587373168,93,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1112,Universidad,S,2020-2,1518,13022,0.1165719551528183,94,Universidad De Caldas,Caldas,Manizales
1102,Universidad,S,2020-2,1367,10734,0.1273523383640768,95,Universidad Nacional De Colombia,Antioquia,Medellín
1806,Universidad,S,2020-2,965,7222,0.1336194959844918,96,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1810,Universidad,S,2020-2,264,1630,0.1619631901840491,97,Universidad Libre,Norte de Santander,San José de Cúcuta
1811,Universidad,S,2020-2,189,1038,0.1820809248554913,98,Universidad Libre,Santander,Socorro
2102,Universidad,S,2020-2,14334,67309,0.2129581482416913,99,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
9125,Universidad,S,2020-2,8,25,0.32,100,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1108,Universidad,S,2020-1,85,3382,0.02513305736250739,1,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Sogamoso
1813,Universidad,S,2020-1,397,13475,0.02946196660482375,2,Universidad De Los Andes,Cundinamarca,"Bogotá, D.C."
1711,Universidad,S,2020-1,325,10000,0.0325,3,Universidad De La Sabana,Cundinamarca,Chía
1828,Universidad,S,2020-1,196,5765,0.03399826539462272,4,Universidad Icesi,Valle del Cauca,Santiago de Cali
1713,Universidad,S,2020-1,444,12960,0.03425925925925926,5,Universidad Del Norte,Atlántico,Barranquilla
1107,Universidad,S,2020-1,105,3001,0.03498833722092635,6,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Duitama
9125,Universidad,S,2020-1,1,26,0.03846153846153846,7,Universidad De Antioquia,Antioquia,Santa Fé de Antioquia
1217,Universidad,S,2020-1,236,5676,0.04157857646229739,8,Universidad De Sucre,Sucre,Sincelejo
9105,Universidad,S,2020-1,31,734,0.04223433242506812,9,Escuela Naval De Cadetes Almirante Padilla,Bolívar,Cartagena de Indias
1701,Universidad,S,2020-1,773,17695,0.04368465668267872,10,Pontificia Universidad Javeriana,Cundinamarca,"Bogotá, D.C."
1109,Universidad,S,2020-1,38,855,0.04444444444444445,11,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Chiquinquirá
1714,Universidad,S,2020-1,430,9653,0.04454573707655651,12,Colegio Mayor De Nuestra Señora Del Rosario,Cundinamarca,"Bogotá, D.C."
1101,Universidad,S,2020-1,1106,24531,0.04508580979169215,13,Universidad Nacional De Colombia,Cundinamarca,"Bogotá, D.C."
1110,Universidad,S,2020-1,549,11788,0.04657278588394978,14,Universidad Del Cauca,Cauca,Popayán
1212,Universidad,S,2020-1,1122,23834,0.04707560627674751,15,Universidad De Pamplona,Norte de Santander,Pamplona
1206,Universidad,S,2020-1,609,12867,0.04733038004196782,16,Universidad De Nariño,Nariño,Pasto
1808,Universidad,S,2020-1,232,4899,0.04735660338844662,17,Universidad Libre,Atlántico,Barranquilla
1204,Universidad,S,2020-1,850,17939,0.0473827972573722,18,Universidad Industrial De Santander,Santander,Bucaramanga
1106,Universidad,S,2020-1,974,20262,0.04807027934063764,19,Universidad Pedagogica Y Tecnologica De Colombia - Uptc,Boyacá,Tunja
1702,Universidad,S,2020-1,319,6618,0.04820187367784829,20,Pontificia Universidad Javeriana,Valle del Cauca,Santiago de Cali
1104,Universidad,S,2020-1,126,2592,0.04861111111111111,21,Universidad Nacional De Colombia,Valle del Cauca,Palmira
1213,Universidad,S,2020-1,895,18304,0.04889641608391608,22,Universidad Del Magdalena - Unimagdalena,Magdalena,Santa Marta
1730,Universidad,S,2020-1,17,345,0.04927536231884058,23,Universidad Pontificia Bolivariana,Valle del Cauca,Palmira
1827,Universidad,S,2020-1,115,2310,0.04978354978354978,24,Universidad Catolica De Manizales,Caldas,Manizales
9122,Universidad,S,2020-1,35,696,0.05028735632183908,25,Universidad Manuela Beltran-Umb-,Santander,Bucaramanga
1727,Universidad,S,2020-1,130,2573,0.05052467936261174,26,Universidad Pontificia Bolivariana,Córdoba,Montería
2708,Universidad,S,2020-1,226,4410,0.05124716553287982,27,Universidad Ces,Antioquia,Medellín
1712,Universidad,S,2020-1,468,9066,0.05162144275314361,28,Universidad Eafit-,Antioquia,Medellín
1103,Universidad,S,2020-1,244,4587,0.05319380858949204,29,Universidad Nacional De Colombia,Caldas,Manizales
1720,Universidad,S,2020-1,378,6942,0.05445116681071737,30,Universidad Mariana,Nariño,Pasto
1112,Universidad,S,2020-1,717,13135,0.05458698134754473,31,Universidad De Caldas,Caldas,Manizales
2811,Universidad,S,2020-1,276,5015,0.05503489531405783,32,Universidad Escuela Colombiana De Ingenieria Julio Garavito,Cundinamarca,"Bogotá, D.C."
1722,Universidad,S,2020-1,341,6190,0.05508885298869143,33,Universidad De Manizales,Caldas,Manizales
1209,Universidad,S,2020-1,904,16059,0.05629242169499969,34,Universidad Francisco De Paula Santander,Norte de Santander,San José de Cúcuta
1724,Universidad,S,2020-1,180,3131,0.05748961992973491,35,Universidad De San Buenaventura,Bolívar,Cartagena de Indias
1707,Universidad,S,2020-1,467,7954,0.0587125974352527,36,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Cundinamarca,"Bogotá, D.C."
1119,Universidad,S,2020-1,332,5611,0.05916948850472287,37,Universidad De Los Llanos,Meta,Villavicencio
1710,Universidad,S,2020-1,767,12809,0.05987977203528769,38,Universidad Pontificia Bolivariana,Antioquia,Medellín
2813,Universidad,S,2020-1,104,1722,0.06039488966318235,39,Universidad Eia,Antioquia,Envigado
1809,Universidad,S,2020-1,183,3018,0.06063618290258449,40,Universidad Libre,Risaralda,Pereira
2805,Universidad,S,2020-1,887,14474,0.0612822992952881,41,Universidad Simon Bolivar,Atlántico,Barranquilla
1807,Universidad,S,2020-1,316,5040,0.0626984126984127,42,Universidad Libre,Valle del Cauca,Santiago de Cali
1732,Universidad,S,2020-1,205,3258,0.06292203806015961,43,Universidad Santo Tomas,Boyacá,Tunja
1729,Universidad,S,2020-1,708,10752,0.06584821428571429,44,Universidad El Bosque,Cundinamarca,"Bogotá, D.C."
1121,Universidad,S,2020-1,346,5137,0.06735448705470119,45,Universidad-Colegio Mayor De Cundinamarca,Cundinamarca,"Bogotá, D.C."
1111,Universidad,S,2020-1,985,14442,0.06820384988228777,46,Universidad Tecnologica De Pereira - Utp,Risaralda,Pereira
1815,Universidad,S,2020-1,327,4788,0.06829573934837092,47,Corporacion Universidad Piloto De Colombia,Cundinamarca,"Bogotá, D.C."
1723,Universidad,S,2020-1,318,4627,0.06872703695699157,48,Universidad Pontificia Bolivariana,Santander,Bucaramanga
1718,Universidad,S,2020-1,175,2530,0.0691699604743083,49,Universidad De San Buenaventura,Cundinamarca,"Bogotá, D.C."
1105,Universidad,S,2020-1,604,8520,0.07089201877934272,50,Universidad Pedagogica Nacional,Cundinamarca,"Bogotá, D.C."
2832,Universidad,S,2020-1,660,9282,0.07110536522301228,51,Universidad De Santander - Udes,Santander,Bucaramanga
1816,Universidad,S,2020-1,298,4187,0.07117267733460712,52,Universidad Cooperativa De Colombia,Antioquia,Medellín
1114,Universidad,S,2020-1,884,12217,0.07235818940820168,53,Universidad Surcolombiana,Huila,Neiva
1803,Universidad,S,2020-1,795,10935,0.07270233196159122,54,Universidad De La Salle,Cundinamarca,"Bogotá, D.C."
1716,Universidad,S,2020-1,303,4144,0.07311776061776062,55,Universidad De San Buenaventura,Valle del Cauca,Santiago de Cali
1706,Universidad,S,2020-1,402,5484,0.07330415754923414,56,Universidad Externado De Colombia,Cundinamarca,"Bogotá, D.C."
1705,Universidad,S,2020-1,376,5116,0.07349491790461297,57,Universidad Santo Tomas,Santander,Bucaramanga
1826,Universidad,S,2020-1,1070,14533,0.07362554187022638,58,Universidad Antonio Nariño,Cundinamarca,"Bogotá, D.C."
1208,Universidad,S,2020-1,947,12768,0.07416979949874687,59,Universidad Del Quindio,Quindío,Armenia
1728,Universidad,S,2020-1,593,7627,0.07775009833486299,60,Universidad Sergio Arboleda,Cundinamarca,"Bogotá, D.C."
1835,Universidad,S,2020-1,366,4697,0.07792207792207792,61,Universidad De Ciencias Aplicadas Y Ambientales - Udca,Cundinamarca,"Bogotá, D.C."
1833,Universidad,S,2020-1,634,8110,0.0781750924784217,62,Corporación Universidad Del Sinu - Elias Bechara Zainum - Unisinu -,Córdoba,Montería
1708,Universidad,S,2020-1,26,332,0.0783132530120482,63,Fundacion Universidad De Bogota - Jorge Tadeo Lozano,Bolívar,Cartagena de Indias
1717,Universidad,S,2020-1,359,4563,0.07867630944554022,64,Universidad De San Buenaventura,Antioquia,Medellín
1709,Universidad,S,2020-1,789,10014,0.07878969442780108,65,Universidad Central,Cundinamarca,"Bogotá, D.C."
1113,Universidad,S,2020-1,1216,15409,0.07891491985203453,66,Universidad De Cordoba,Córdoba,Montería
1811,Universidad,S,2020-1,90,1138,0.07908611599297012,67,Universidad Libre,Santander,Socorro
1207,Universidad,S,2020-1,1209,15265,0.07920078611202096,68,Universidad Del Tolima,Tolima,Ibagué
1831,Universidad,S,2020-1,483,6077,0.07948000658219516,69,Universidad De Ibague,Tolima,Ibagué
1806,Universidad,S,2020-1,603,7583,0.07951997890017144,70,Universidad Libre,Cundinamarca,"Bogotá, D.C."
1203,Universidad,S,2020-1,2094,26092,0.08025448413306761,71,Universidad Del Valle,Valle del Cauca,Santiago de Cali
1805,Universidad,S,2020-1,1099,13433,0.08181344450234497,72,Universidad Santiago De Cali,Valle del Cauca,Santiago de Cali
1818,Universidad,S,2020-1,2442,29416,0.08301604568942073,73,Universidad Cooperativa De Colombia,Cundinamarca,"Bogotá, D.C."
1223,Universidad,S,2020-1,22,264,0.08333333333333333,74,Universidad De Antioquia,Antioquia,Turbo
1823,Universidad,S,2020-1,814,9650,0.08435233160621762,75,Universidad Autonoma De Bucaramanga-Unab-,Santander,Bucaramanga
1205,Universidad,S,2020-1,1377,16312,0.08441638057871506,76,Universidad De Cartagena,Bolívar,Cartagena de Indias
1726,Universidad,S,2020-1,405,4780,0.08472803347280335,77,Universidad Catolica De Oriente -Uco,Antioquia,Rionegro
1830,Universidad,S,2020-1,807,9418,0.0856869823741771,78,Universidad Autonoma De Occidente,Valle del Cauca,Santiago de Cali
2810,Universidad,S,2020-1,1013,11816,0.08573121191604605,79,Corporacion Universidad De La Costa Cuc,Atlántico,Barranquilla
1102,Universidad,S,2020-1,895,10405,0.08601633829889477,80,Universidad Nacional De Colombia,Antioquia,Medellín
1814,Universidad,S,2020-1,338,3925,0.08611464968152867,81,Universidad Autonoma Latinoamericana-Unaula-,Antioquia,Medellín
1817,Universidad,S,2020-1,310,3592,0.08630289532293986,82,Universidad Cooperativa De Colombia,Santander,Bucaramanga
1810,Universidad,S,2020-1,147,1689,0.08703374777975133,83,Universidad Libre,Norte de Santander,San José de Cúcuta
1704,Universidad,S,2020-1,1499,17196,0.08717143521749245,84,Universidad Santo Tomas,Cundinamarca,"Bogotá, D.C."
1734,Universidad,S,2020-1,446,5054,0.08824693312227938,85,Universidad De Boyaca Uniboyaca,Boyacá,Tunja
1719,Universidad,S,2020-1,800,8723,0.0917115671214032,86,Universidad Catolica De Colombia,Cundinamarca,"Bogotá, D.C."
1812,Universidad,S,2020-1,827,8960,0.09229910714285716,87,Universidad De Medellin,Antioquia,Medellín
1733,Universidad,S,2020-1,174,1845,0.0943089430894309,88,Universidad Sergio Arboleda,Magdalena,Santa Marta
1222,Universidad,S,2020-1,4,41,0.0975609756097561,89,Universidad De Antioquia,Antioquia,Puerto Berrío
2812,Universidad,S,2020-1,631,6465,0.09760247486465584,90,Universidad Ean,Cundinamarca,"Bogotá, D.C."
1117,Universidad,S,2020-1,1541,15463,0.09965724632994892,91,Universidad Militar-Nueva Granada,Cundinamarca,"Bogotá, D.C."
1832,Universidad,S,2020-1,566,5597,0.101125603001608,92,Universidad Tecnologica De Bolivar,Bolívar,Cartagena de Indias
1201,Universidad,S,2020-1,3058,30110,0.1015609432082365,93,Universidad De Antioquia,Antioquia,Medellín
1825,Universidad,S,2020-1,511,4663,0.1095861033669312,94,Universidad Autonoma De Manizales,Caldas,Manizales
1301,Universidad,S,2020-1,1792,16214,0.1105217713087455,95,Universidad Distrital-Francisco Jose De Caldas,Cundinamarca,"Bogotá, D.C."
1221,Universidad,S,2020-1,17,146,0.1164383561643836,96,Universidad De Antioquia,Antioquia,Caucasia
1220,Universidad,S,2020-1,38,323,0.1176470588235294,97,Universidad De Antioquia,Antioquia,Andes
1202,Universidad,S,2020-1,2393,19892,0.120299617936859,98,Universidad Del Atlantico,Atlántico,Puerto Colombia
1735,Universidad,S,2020-1,841,6586,0.1276951108411783,99,Universidad Manuela Beltran-Umb-,Cundinamarca,"Bogotá, D.C."
1218,Universidad,S,2020-1,1897,13880,0.136671469740634,100,Universidad De La Guajira,La Guajira,Riohacha
1219,Universidad,S,2020-1,63,372,0.1693548387096774,101,Universidad De Antioquia,Antioquia,El Carmen de Viboral
2102,Universidad,S,2020-1,11794,65796,0.1792510182989847,102,Universidad Nacional Abierta Y A Distancia Unad,Cundinamarca,"Bogotá, D.C."
`;

export const DATA_NACIONAL = parseRawData(RAW_CSV_NACIONAL, RankingType.NACIONAL);
export const DATA_UNIVERSIDADES = parseRawData(RAW_CSV_UNIVERSIDADES, RankingType.UNIVERSIDADES);
export const DATA_U_REF = parseRawData(RAW_CSV_U_REF, RankingType.U_REF);
export const DATA_U_ACREDITADAS = parseRawData(RAW_CSV_U_ACREDITADAS, RankingType.U_ACREDITADAS);