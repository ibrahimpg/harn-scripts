import roll from './roll';
import rollMultiple from './rollMultiple';

const speciesTable: any = {
  97: 'Human',
  98: 'Sindarin',
  99: 'Khuzdul',
};

const sexTable: any = {
  Human: {
    48: 'Male',
    100: 'Female',
  },
  Sindarin: {
    45: 'Male',
    100: 'Female',
  },
  Khuzdul: {
    75: 'Male',
    100: 'Female',
  },
};

// const socialClassTable = {
//   Tribal: {
//     10: 'Slave',
//     99: 'Unguilded',
//     100: 'Noble',
//   },
//   Viking: {
//     15: 'Slave',
//     80: 'Serf',
//     93: 'Unguilded',
//     98: 'Guilded',
//     100: 'Noble',
//   },
//   Feudal: {
//     15: 'Slave',
//     70: 'Serf',
//     93: 'Unguilded',
//     98: 'Guilded',
//     100: 'Noble',
//   },
//   Imperial: {
//     25: 'Slave',
//     90: 'Unguilded',
//     98: 'Guilded',
//     100: 'Nobled',
//   },
//   Khuzan: {
//     15: 'Unguilded',
//     98: 'Guilded',
//     100: 'Noble',
//   },
//   Sindarin: {
//     70: 'Unguilded',
//     99: 'Guilded',
//     100: 'Noble',
//   },
// };

const siblingRankTable: any = {
  25: ['Eldest', 1],
  50: ['2nd Child', 2],
  70: ['3rd Child', 3],
  85: ['4th Child', 4],
  95: ['5th Child', 5],
  100: ['6th Child', 6],
};

const heightTable: any = {
  Human: {
    Male: 54,
    Female: 52,
  },
  Sindarin: {
    Male: 51,
    Female: 50,
  },
  Khuzdul: {
    Male: 40,
    Female: 40,
  },
};

const frameTable: any = {
  5: 'Scant',
  8: 'Light',
  12: 'Medium',
  15: 'Heavy',
  100: 'Massive',
};

const weightTable: any = {
  40: 75,
  41: 77,
  42: 79,
  43: 81,
  44: 83,
  45: 85,
  47: 87,
  49: 89,
  50: 95,
  51: 97,
  52: 100,
  53: 103,
  54: 106,
  55: 109,
  56: 112,
  57: 115,
  58: 118,
  59: 121,
  60: 124,
  61: 127,
  62: 130,
  63: 133,
  64: 137,
  65: 141,
  66: 145,
  67: 149,
  68: 153,
  69: 157,
  70: 160,
  71: 165,
  72: 170,
  73: 175,
  74: 180,
  75: 185,
  76: 190,
  77: 195,
  78: 200,
  79: 205,
  80: 210,
  81: 215,
  82: 220,
  83: 225,
  84: 230,
  85: 235,
  86: 240,
  87: 245,
  88: 250,
  89: 255,
};

const comelinessTable: any = {
  5: 'Ugly',
  8: 'Plain',
  12: 'Average',
  15: 'Attractive',
  100: 'Handsome',
};

function getRow(table: any, dieRoll: any) {
  let resultRow = '';
  // let dieRoll = roll(die);
  // console.log(table, dieRoll);
  Object.keys(table).reverse().forEach((row) => {
    // console.log(row, table[row], dieRoll);
    if (dieRoll <= row) {
      // console.log("HIT!");
      resultRow = table[row];
    }
  });
  // console.log(resultRow);
  return resultRow;
}

export default () => {
  let response: string = '';

  // determine race
  const race = getRow(speciesTable, roll(99));
  response += `Race: ${race} <br>`;

  // roll for rank
  let rank: string = '';
  let familySizeModifier: number = 0;
  const rankRoll = roll(100);
  const siblingRankTableKeyArray = Object.keys(siblingRankTable).reverse();
  const siblingRankTableNumberKeyArray = siblingRankTableKeyArray.map((x) => Number(x));
  siblingRankTableNumberKeyArray.forEach((x) => {
    if (rankRoll <= x) {
      rank = [siblingRankTable[x][0]];
      familySizeModifier = [siblingRankTable[x][1]];
    }
  });
  response += `Rank: ${rank} <br>`;
  response += `Family Size Modifier: ${familySizeModifier} <br>`;

  // roll for family size
  const familySize = roll(6) - 1 + familySizeModifier;
  const siblingRank = `${familySizeModifier} of ${familySize}`;
  response += `Family Size: ${familySize} <br>`;
  response += `Sibling Rank: ${siblingRank} <br>`;

  // determine sex/alive
  let sex: string = '';
  let alive: string = '';
  for (let i = 1; i <= familySize; i += 1) {
    sex = getRow(sexTable[race], roll(100));
    if (i !== familySizeModifier) alive = (roll(100) <= 60 ? 'still living' : 'deceased');
  }
  response += `Sex: ${sex} <br>`;
  response += `Alive? ${alive} <br>`;

  // roll for height
  const height = heightTable[race][sex] + rollMultiple(4, 6);
  const heightFeet = Math.trunc(height / 12);
  const heightInches = height - (heightFeet * 12);
  response += `Height: ${height} inches = ${heightFeet}'${heightInches}" <br>`;

  // calculate frame
  let frameRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul') frameRoll += 3;
  if (race === 'Sindarin') frameRoll -= 2;
  if (race === 'Human' && sex === 'Female') frameRoll -= 3;
  const frame = getRow(frameTable, frameRoll);
  response += `Frame: ${frame} <br>`;

  // calculate weight
  let weight: number = weightTable[height];
  if (frame === 'Scant') weight = Math.trunc(weight * 0.8);
  if (frame === 'Light') weight = Math.trunc(weight * 0.9);
  if (frame === 'Heavy') weight = Math.trunc(weight * 1.1);
  if (frame === 'Massive') weight = Math.trunc(weight * 1.2);
  response += `Optimum weight: ${weight} <br>`;

  // roll for comeliness
  let comelinessRoll = rollMultiple(3, 6);
  if (race === 'Sindarin') { comelinessRoll += 2; }
  response += `Comeliness: ${comelinessRoll} / ${getRow(comelinessTable, comelinessRoll)} <br>`;

  // roll for strength
  let strengthRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul') { strengthRoll += 4; }
  if (race === 'Sindarin') { strengthRoll += 1; }
  if (weight <= 85) strengthRoll -= 4;
  if (weight >= 86 && weight <= 110) strengthRoll -= 3;
  if (weight >= 111 && weight <= 130) strengthRoll -= 2;
  if (weight >= 131 && weight <= 145) strengthRoll -= 1;
  if (weight >= 156 && weight <= 170) strengthRoll += 1;
  if (weight >= 171 && weight <= 190) strengthRoll += 2;
  if (weight >= 191 && weight <= 215) strengthRoll += 3;
  if (weight >= 216 && weight <= 245) strengthRoll += 4;
  response += `Strength: ${strengthRoll} <br>`;

  // roll for stamina
  let staminaRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul') { staminaRoll += 2; }
  if (race === 'Sindarin') { staminaRoll += 1; }
  response += `Stamina: ${staminaRoll} <br>`;

  // roll for dexterity
  let dexterityRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul') { dexterityRoll += 1; }
  if (race === 'Sindarin') { dexterityRoll += 2; }
  response += `Dexterity: ${dexterityRoll} <br>`;

  // roll for agility
  let agilityRoll = rollMultiple(3, 6);
  if (frame === 'Scant') agilityRoll += 2;
  if (frame === 'Light') agilityRoll += 1;
  if (frame === 'Heavy') agilityRoll -= 1;
  if (frame === 'Massive') agilityRoll -= 2;
  response += `Agility: ${agilityRoll} <br>`;

  // roll for eyesight
  let eyesightRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul') { eyesightRoll += 1; }
  if (race === 'Sindarin') { eyesightRoll += 2; }
  // TODO: ADD TRIBESMAN MODIFIER
  response += `Eyesight: ${eyesightRoll} <br>`;

  // roll for hearing
  let hearingRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul' || race === 'Sindarin') hearingRoll += 2;
  response += `Hearing: ${hearingRoll} <br>`;

  // roll for smell
  let smellRoll = rollMultiple(3, 6);
  if (race === 'Khuzdul') { smellRoll += 2; }
  if (race === 'Sindarin') { smellRoll += 3; }
  // TODO: ADD TRIBESMAN MODIFIER
  response += `Smell: ${smellRoll} <br>`;

  // roll for voice
  let voiceRoll = rollMultiple(3, 6);
  if (race === 'Sindarin') { voiceRoll += 2; }
  response += `Voice: ${voiceRoll} <br>`;

  return response;
};
