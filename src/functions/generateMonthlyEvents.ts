import roll from './roll';
import getLocation from './getLocation';

const results = {
  'State Occasion': 'State Occasion: State Wedding/Birth, Tournament/Contest, Visit by Dignitary',
  Edict: 'Edict: Inquisition/Witch Hunt, Persecution, Royal Proclamation, Scandal, Tax Levy',
  'Civil Unrest': 'Civil Unrest: Riots/Rebellion',
  'Death/Illness': 'Death/Illness: Assassination Attempt, Sickness/Death of Personage',
  'War/Raids': 'War/Raids: Border/Pirate/Viking Raid, Civil War, Invasion/Foreign War',
  Terrorization: 'Terrorization: Crime/Crime Wave, Major Brigandage, Marauding Creature',
  Epidemic: 'Epidemic: Plague/Infestation (May Spread)',
  'Good Harvest': 'Good Harvest: Population Growth Price Collapse',
  'Poor Harvest': 'Poor Harvest: Animal/Crop Blight, Famine Food Riots, Prices High',
  Disaster: 'Disaster: Avalanche, Earthquake, Fire, Flood, Landslide, Volcanic Eruption, Meteor, Collapse/Damage to Major Bridge/Building',
  'Freak Weather': 'Freak Weather: Blizzard, Cold Snap, Drought, Heatwave, Hurricane, Tornado',
  'Multiple Events': 'Multiple Events',
  'No Special Events': 'No Special Events',
};

const seasonResultsTable = {
  spring: {
    2: 'State Occasion',
    4: 'Edict',
    6: 'Civil Unrest',
    7: 'Death/Illness',
    12: 'War/Raids',
    14: 'Terrorization',
    16: 'Epidemic',
    18: 'Disaster',
    20: 'Freak Weather',
    22: 'Multiple Events',
    100: 'No Special Events',
  },
  summer: {
    3: 'State Occasion',
    5: 'Edict',
    7: 'Civil Unrest',
    8: 'Death/Illness',
    11: 'War/Raids',
    13: 'Terrorization',
    16: 'Epidemic',
    18: 'Disaster',
    20: 'Freak Weather',
    22: 'Multiple Events',
    100: 'No Special Events',
  },
  fall: {
    2: 'State Occasion',
    4: 'Edict',
    6: 'Civil Unrest',
    7: 'Death/Illness',
    9: 'War/Raids',
    11: 'Terrorization',
    12: 'Epidemic',
    14: 'Good Harvest',
    16: 'Poor Harvest',
    18: 'Disaster',
    20: 'Freak Weather',
    22: 'Multiple Events',
    100: 'No Special Events',
  },
  winter: {
    1: 'State Occasion',
    3: 'Edict',
    5: 'Civil Unrest',
    6: 'Death/Illness',
    8: 'War/Raids',
    13: 'Terrorization',
    18: 'Disaster',
    20: 'Freak Weather',
    22: 'Multiple Events',
    100: 'No Special Events',
  },
};

const seasons = {
  Nuzyael: 'spring',
  Peonu: 'spring',
  Kelen: 'spring',
  Nolus: 'summer',
  Larane: 'summer',
  Agrazhar: 'summer',
  Azura: 'fall',
  Halane: 'fall',
  Savor: 'fall',
  Ilvin: 'winter',
  Navek: 'winter',
  Morgat: 'winter',
};

const monthsOrdered: string[] = [
  'Nuzyael', 'Peonu', 'Kelen', 'Nolus', 'Larane', 'Agrazhar', 'Azura', 'Halane', 'Savor', 'Ilvin', 'Navek', 'Morgat',
];

function iterateResults(season, dieRoll: number) {
  for (const row in seasonResultsTable[season]) {
    if (dieRoll <= Number(row)) {
      return seasonResultsTable[season][row];
    }
  }
}

function generateEvent(month: string, maxRoll = 100): string {
  const season = seasons[month];
  const dieRoll = roll(maxRoll);
  const resultText = iterateResults(season, dieRoll);
  // return result_text;
  let result;

  if (resultText === 'Multiple Events') {
    result = `${generateEvent(month, 20)}\n${generateEvent(month, 20)}`;
    return result;
  }

  result = resultText;
  if (result !== 'No Special Events') {
    result += getLocation();
  }
  return result;
  // return results[result];
}

export default () => {
  let response: string = '';
  monthsOrdered.forEach((month) => { response += `${month}: ${generateEvent(month)}<br>`; });
  return response;
};
