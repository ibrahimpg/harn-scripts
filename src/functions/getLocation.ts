import roll from './roll';

const kingdomsTable = {
  18: 'Barbarian',
  19: 'Chybisa',
  32: 'Kaldor',
  44: 'Kanday',
  64: 'Melderyn',
  74: 'Orbaal',
  86: 'Rethem',
  99: 'Tharda',
  100: 'Other',
};

const placesTable = {
  Barbarian: {
    5: 'Adaenum',
    9: 'Anoa',
    12: 'Bujoc',
    16: 'Chelni',
    17: 'Chymak',
    23: 'Equani',
    27: 'Gozyda',
    43: 'Hodiri',
    44: 'Kabloqui',
    46: 'Kamaki',
    48: 'Kath',
    56: 'Kubora',
    66: 'Pagaelin',
    71: 'Solori',
    82: 'Taelda',
    92: 'Tulwyn',
    98: 'Urdu',
    100: 'Ymodi',
  },
  Chybisa: {
    40: 'Burzyn',
    60: 'Geda',
    75: 'Lerenil',
    100: 'Onden',
  },
  Kaldor: {
    2: 'Athelren',
    4: 'Baseta',
    6: 'Bidow',
    9: 'Esenor',
    11: 'Fisen',
    17: 'Gardiren',
    18: 'Getha',
    20: 'Heru',
    22: 'Hutop',
    23: 'Jedes',
    31: 'Kiban',
    33: 'Kobing',
    36: 'Kolorn',
    38: 'Kyg',
    46: 'Minarsas',
    48: 'Nenda',
    50: 'Nubeth',
    56: 'Olokand',
    58: 'Pendeth',
    65: 'Qualdri',
    70: 'Querina',
    72: 'Setrew',
    75: 'Shebra',
    77: 'Sirendel',
    88: 'Tashal',
    91: 'Ternua',
    93: 'Tonot',
    96: 'Uldien',
    98: 'Yeged',
    100: 'Zoben',
  },
  Kanday: {
    16: 'Aleath',
    18: 'Avertu',
    20: 'Chison',
    22: 'Cuton',
    23: 'Dunir',
    31: 'Dyrisa',
    33: 'Edino',
    38: 'Ewen',
    40: 'Findumon',
    41: 'Gimon',
    42: 'Hebon',
    46: 'Heroth',
    47: 'Ibonost',
    51: 'Imiden',
    57: 'Kedis',
    62: 'Menekod',
    63: 'Minilaous',
    66: 'Ohetis',
    68: 'Pinide',
    72: 'Quivim',
    78: 'Sarkum',
    85: 'Selvos',
    91: 'Sepire',
    97: 'Sumon',
    98: 'Torthan',
    100: 'Zerien',
  },
  Melderyn: {
    10: 'Cherafir',
    20: 'Chyrefal',
    21: 'Cosyuh',
    22: 'Cundras',
    26: 'Cupeth',
    27: 'Fosumo',
    28: 'Glenoth',
    29: 'Gosus',
    32: 'Gythrun',
    37: 'Harden',
    41: 'Huvos',
    44: 'Jetust',
    46: 'Jothet',
    51: 'Karveth',
    53: 'Laket',
    55: 'Lyf',
    57: 'Menio',
    59: 'Moque',
    64: 'Nurisel',
    67: 'Ontur',
    69: 'Parios',
    72: 'Parnam',
    73: 'Racyn',
    76: 'Ramere',
    80: 'Shenap',
    93: 'Thay',
    96: 'Wharo',
    98: 'Yael',
    100: 'Zuilos',
  },
  Orbaal: {
    2: 'Aaldem',
    4: 'Antir',
    7: 'Arathel',
    9: 'Arone',
    11: 'Asax',
    13: 'Daasen',
    15: 'Ebein',
    17: 'Fjaga',
    23: 'Geldeheim',
    25: 'Gwaeryn',
    27: 'Gyfyn',
    29: 'Hjael',
    33: 'Keiren',
    35: 'Kjen',
    39: 'Leriel',
    44: 'Lorkin',
    49: 'Marby',
    51: 'Mul',
    53: 'Pethwys',
    55: 'Pjagel',
    58: 'Pled',
    60: 'Pyberg',
    62: 'Quiam',
    64: 'Quimen',
    67: 'Sherwyn',
    69: 'Shese',
    71: 'Shien',
    75: 'Tandir',
    77: 'Tawheim',
    79: 'Teryff',
    81: 'Thoen',
    83: 'Thrand',
    85: 'Thursa',
    87: 'Utera',
    91: 'Vaagel',
    93: 'Vold',
    95: 'Wethom',
    98: 'Zuden',
    100: 'Zynholm',
  },
  Rethem: {
    2: 'Arketh',
    4: 'Bedenes',
    7: 'Bekar',
    12: 'Chakta',
    15: 'Dasen',
    22: 'Golotha',
    24: 'Henwe',
    27: 'Hyen',
    31: 'Ithiko',
    35: 'Ithius',
    40: 'Menekai',
    45: 'Norienar',
    49: 'Omnis',
    54: 'Phira',
    58: 'Quiso',
    61: 'Quste',
    67: 'Senun',
    72: 'Shostim',
    79: 'Techen',
    85: 'Themeson',
    89: 'Thiri',
    92: 'Tormau',
    94: 'Weseda',
    98: 'Winen',
    100: 'Zaza',
  },
  Tharda: {
    3: 'Bythe',
    6: 'Cestor',
    9: 'Chenad',
    24: 'Coranan',
    25: 'Dumon',
    30: 'Eidru',
    33: 'Esuron',
    38: 'Firis',
    42: 'Fobin',
    44: 'Geminost',
    51: 'Geshtei',
    54: 'Hediro',
    59: 'Hibut',
    64: 'Imrium',
    69: 'Kuseme',
    72: 'Moleryn',
    76: 'Noru',
    78: 'Ostenor',
    84: 'Parnan',
    86: 'Pedan',
    95: 'Shiran',
    96: 'Stimos',
    100: 'Telen',
  },
  Other: {
    5: 'Elshavel',
    90: 'Habe',
    93: 'Noron',
    95: 'Trobridge',
    100: 'Ulfshafen',
  },
};

export default () => {
  let kingdom: string = '';
  let place: string = '';

  const kingdomRoll: number = roll(100);
  const placeRoll: number = roll(100);

  const kingdomsTableKeyArray: string[] = Object.keys(kingdomsTable).reverse();
  const kingdomsTableNumberKeyArray: number[] = kingdomsTableKeyArray.map((x) => Number(x));

  kingdomsTableNumberKeyArray.forEach((x) => { if (kingdomRoll <= x) kingdom = kingdomsTable[x]; });

  const placesTableKeyArray: string[] = Object.keys(placesTable[kingdom]).reverse();
  const placesTableNumKeyArray: number[] = placesTableKeyArray.map((x) => Number(x));

  placesTableNumKeyArray.forEach((x) => { if (placeRoll <= x) place = placesTable[kingdom][x]; });

  return `in ${place}, ${kingdom}`;
};
