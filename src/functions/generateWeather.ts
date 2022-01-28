/* eslint-disable no-loop-func */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import roll from './roll';

const seasons: any = {
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

const weatherTable: any = {
  spring: {
    1: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'North',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    2: {
      temperature: 'Cool',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Northeast',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    3: {
      temperature: 'Warm (Cool)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    4: {
      temperature: 'Warm',
      clouds: 'Partly Cloudy',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    5: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Northwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    6: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    7: {
      temperature: 'Cold (Freezing)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    8: {
      temperature: 'Cool',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    9: {
      temperature: 'Cold',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    10: {
      temperature: 'Freezing',
      clouds: 'Partly Cloudy',
      precipitation: 'Fog or Mist',
      windDirection: 'North',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    11: {
      temperature: 'Cold (Freezing)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    12: {
      temperature: 'Cool (Freezing)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Northeast',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    13: {
      temperature: 'Warm (Cool)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    14: {
      temperature: 'Hot (Warm)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'South',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    15: {
      temperature: 'Warm',
      clouds: 'Partly Cloudy',
      precipitation: 'Thunderstorms',
      windDirection: 'Southwest',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    16: {
      temperature: 'Cool (Cold)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    17: {
      temperature: 'Cool',
      clouds: 'Partly Cloudy',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    18: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    19: {
      temperature: 'Cold',
      clouds: 'Partly Cloudy',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'Northwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    20: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
  },
  summer: {
    1: {
      temperature: 'Cool',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    2: {
      temperature: 'Warm',
      clouds: 'Partly Cloudy',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Northeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    3: {
      temperature: 'Hot (Cool)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    4: {
      temperature: 'Hot (Warm)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'South',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    5: {
      temperature: 'Warm',
      clouds: 'Partly Cloudy',
      precipitation: 'Thunderstorms',
      windDirection: 'Southwest',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    6: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'South',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    7: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    8: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Northwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    9: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    10: {
      temperature: 'Warm (Cool)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    11: {
      temperature: 'Warm (Cool)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    12: {
      temperature: 'Hot (Cool)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'Northeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    13: {
      temperature: 'Hot (Warm)',
      clouds: 'Partly Cloudy',
      precipitation: 'Thunderstorms',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    14: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'South',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    15: {
      temperature: 'Warm',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    16: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    17: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    18: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    19: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    20: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Northwest',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
  },
  fall: {
    1: {
      temperature: 'Cool',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'North',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    2: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    3: {
      temperature: 'Warm (Cool)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'Northeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    4: {
      temperature: 'Hot (Warm)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    5: {
      temperature: 'Hot (Warm)',
      clouds: 'Partly Cloudy',
      precipitation: 'Thunderstorms',
      windDirection: 'South',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    6: {
      temperature: 'Warm',
      clouds: 'Overcast',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    7: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    8: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    9: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Northwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    10: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    11: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    12: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Northeast',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    13: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: 'Fog or Mist',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    14: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'South',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    15: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    16: {
      temperature: 'Warm (Cool)',
      clouds: 'Partly Cloudy',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'South',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    17: {
      temperature: 'Warm (Cool)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    18: {
      temperature: 'Cool (Cold)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    19: {
      temperature: 'Cold (Freezing)',
      clouds: 'Overcast',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    20: {
      temperature: 'Freezing',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
  },
  winter: {
    1: {
      temperature: '',
      clouds: 'Overcast',
      precipitation: 'Steady Snow/Sleet',
      windDirection: 'North',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    2: {
      temperature: 'Cold (Freezing)',
      clouds: 'Overcast',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    3: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    4: {
      temperature: 'Cool (Cold)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Northeast',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    5: {
      temperature: 'Warm (Cold)',
      clouds: 'Clear',
      precipitation: 'Fog or Mist',
      windDirection: 'Southeast',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    6: {
      temperature: 'Cool (Freezing)',
      clouds: 'Partly Cloudy',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'South',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    7: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Steady or Heavy Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    8: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'Northwest',
      windSpeedArr: ['Calm', 'Breeze', 'Wind'],
    },
    9: {
      temperature: 'Cool',
      clouds: 'Overcast',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    10: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    11: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Steady Snow/Sleet',
      windDirection: 'North',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    12: {
      temperature: 'Freezing',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'North',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    13: {
      temperature: 'Cool (Freezing)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'Northeast',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    14: {
      temperature: 'Cool (Cold)',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southeast',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    15: {
      temperature: 'Cool (Freezing)',
      clouds: 'Clear',
      precipitation: '',
      windDirection: 'South',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    16: {
      temperature: 'Cool (Cold)',
      clouds: 'Partly Cloudy',
      precipitation: 'Rain Showers or Light Rain',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    17: {
      temperature: 'Cold (Freezing)',
      clouds: 'Overcast',
      precipitation: 'Steady Snow/Sleet',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    18: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: 'Snow/Sleet Flurries',
      windDirection: 'Southwest',
      windSpeedArr: ['Wind', 'Gale', 'Storm'],
    },
    19: {
      temperature: 'Cold',
      clouds: 'Partly Cloudy',
      precipitation: '',
      windDirection: 'Southwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
    20: {
      temperature: 'Cold',
      clouds: 'Overcast',
      precipitation: '',
      windDirection: 'Northwest',
      windSpeedArr: ['Breeze', 'Wind', 'Gale'],
    },
  },
};

const watchTable: string[] = [
  'First Watch (12am-4am)',
  'Second Watch (4am-8am)',
  'Third Watch (8am-12pm)',
  'Fourth Watch (12pm-4pm)',
  'Fifth Watch (4pm-8pm)',
  'Sixth Watch (8pm-12am)',
];

// const windTable = {
//   0: 'Calm',
//   1: 'Breeze',
//   2: 'Wind',
//   3: 'Gale',
//   4: 'Storm',
// };

const precipitationFunc = (precipitation: string, windSpeed: string) => {
  let response: string = '';

  switch (precipitation) {
    case 'Fog or Mist':
      if (windSpeed === 'Calm') {
        if (roll(2) === 1) response = ' with Fog and ';
        else response = ' with Mist and ';
      } else {
        response = ' with ';
      }
      break;
    case 'Rain Showers or Light Rain':
      if (roll(2) === 1) response = ' with Rain Showers and ';
      else response = ' with Light Rain and ';
      break;
    case 'Steady or Heavy Rain':
      if (roll(2) === 1) response = ' with Steady Rain and ';
      else response = ' with Heavy Rain and ';
      break;
    case 'Thunderstorms':
      if (roll(100) <= 10) response = ' with Thunderstorms and Hail and ';
      else response = ' with Thunderstorms ';
      break;
    case 'Steady Snow/Sleet':
      if (roll(2) === 1) response = ' with Steady Snow and ';
      else response = ' with Steady Sleet and ';
      break;
    case 'Snow/Sleet Flurries':
      if (roll(2) === 1) response = ' with Snow Flurries and ';
      else response = ' with Sleet Flurries and ';
      break;
    default:
      response = ` with ${precipitation} and `;
  }

  return response;
};

export default async (): Promise<string[][]> => {
  const response: string[][] = [];

  let weatherRoll = roll(20);

  const monthArray = Object.keys(seasons);

  monthArray.forEach((month) => {
    for (let i = 1; i < 31; i += 1) {
      const season = seasons[month];
      const date = `${i} of ${month} (${season})`;

      watchTable.forEach((watch: string) => {
        // VAR CHANGEROLL
        const changeRoll = roll(10);
        if (changeRoll === 1) weatherRoll -= 1;
        else if (changeRoll === 8 || changeRoll === 9) weatherRoll += 1;
        else if (changeRoll === 10) weatherRoll += 2;

        // wraparound
        if (weatherRoll > 20) weatherRoll -= 20;
        if (weatherRoll < 1) weatherRoll += 20;

        // console.log(weatherRoll);

        // WEATHER PROPERTIES
        const weatherProperties = weatherTable[season][weatherRoll];
        // console.log(weatherProperties);

        const {
          temperature, clouds, windDirection, windSpeedArr,
        } = weatherProperties;
        let { precipitation } = weatherProperties;

        // VAR WINDSPEED DESCRIPTION - part of final desc.
        const windRoll = roll(3) - 1;
        const windSpeed = windSpeedArr[windRoll];
        let windDirectionDescription: string = '';
        if (windSpeed !== 'Calm') windDirectionDescription = `${windSpeed} from the ${windDirection}`;
        else windDirectionDescription = 'no wind (calm)';

        // VAR PRECIPITATION - part of final desc.
        if (precipitation !== '') precipitation = precipitationFunc(precipitation, windSpeed);
        else precipitation = ' with ';

        // FINAL DESCRIPTION CONCAT
        const description = `${temperature} and ${clouds}${precipitation}${windDirectionDescription}`;

        // console.log(watch, weatherRoll, description); ------> weatherRoll needed for CSV?

        response.push([`${date} - ${watch} - ${description}`]);
      });
    }
  });
  return response;
};
