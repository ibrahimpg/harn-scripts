import roll from './roll';

const subtables: any = {
  1: { // general activities
    Type: 'Day/Night',
    Day: {
      20: 'Eating/Drinking/Gambling/etc.',
      25: 'Going to/from Market/church/work',
      30: 'To/from Visiting Friends/etc.',
      35: 'Seeking/offering Directions',
      40: 'Seeking/offering Services',
      45: 'Camping/seeking Lodgings/etc.',
      55: 'Offering Employment',
      85: 'Working/Looking for Work/etc.',
      90: 'Escaping the Law/service/etc.',
      95: 'On Errand/Bearing Message',
      100: 'Seeking/in a Duel/fight/etc.',
    },
    Night: {
      24: 'Eating/Drinking/Gambling/etc.',
      25: 'Going to/from Market/church/work',
      30: 'To/from Visiting Friends/etc.',
      35: 'Seeking/offering Directions',
      40: 'Seeking/offering Services',
      75: 'Camping/seeking Lodgings/etc.',
      85: 'Offering Employment',
      90: 'Working/Looking for Work/etc.',
      96: 'Escaping the Law/service/etc.',
      98: 'On Errand/Bearing Message',
      100: 'Seeking/in a Duel/fight/etc.',
    },
  },
  2: { // Mobs & Crowds
    Type: 'Day/Night',
    Day: {
      5: 'Auction/Impromptu Market/sale',
      10: 'Brawl/Looting/Rioting',
      15: 'Fight/Boxing Match/Duel',
      20: 'Hue and Cry',
      35: 'Juggler/Acrobat/Jester/Fool',
      40: 'Mob Sport: Soccer/Greased pig/etc.',
      55: 'Musician/Bard/Singer',
      60: 'Edict/Proclamation/Spectacle',
      70: 'Play/Puppet Show/Animal Show',
      75: 'Political Orator/Debate',
      80: 'Procession/Funeral/etc.',
      85: {
        Description: 'Public Execution',
        Subtables: ['5'],
      },
      90: {
        Description: 'Public Punishment',
        Subtables: ['5'],
      },
      100: {
        Description: 'Religious Sermon/Orator/Debate',
        Subtables: ['4'],
      },
    },
    Night: {
      10: 'Brawl/Looting/Rioting',
      15: 'Fight/Boxing Match/Duel',
      20: 'Hue and Cry',
      35: 'Juggler/Acrobat/Jester/Fool',
      50: 'Musician/Bard/Singer',
      55: 'Edict/Proclamation/Spectacle',
      60: 'Play/Puppet Show/Animal Show',
      67: 'Political Orator/Debate',
      82: 'Procession/Funeral/etc.',
      87: {
        Description: 'Public Execution',
        Subtables: ['5'],
      },
      97: {
        Description: 'Public Punishment',
        Subtables: ['5'],
      },
      100: {
        Description: 'Religious Sermon/Orator/Debate',
        Subtables: ['4'],
      },
    },
  },
  3: { // Guilds
    Type: 'Urban/Other',
    Urban: {
      1: 'Apothecary',
      2: 'Alchemist',
      3: 'Astrologer',
      5: 'Chandler',
      6: 'Charcoaler',
      12: 'Clothier',
      13: 'Courtesan',
      14: 'Embalmer',
      15: 'Glassworker',
      17: 'Harper',
      18: 'Herald',
      23: 'Hideworker',
      27: 'Innkeeper',
      29: 'Jeweler',
      30: 'Lexigrapher',
      35: 'Litigant',
      36: 'Locksmith',
      40: 'Mason',
      49: 'Mercantyler',
      59: 'Metalsmith',
      61: 'Miller',
      62: 'Miner',
      66: 'Ostler',
      67: 'Perfumer',
      69: 'Physician',
      70: 'Pilot',
      78: 'Potter',
      80: 'Salter',
      81: 'Seaman',
      82: 'Shek-Plet',
      83: 'Shipwright',
      84: 'Tentmaker',
      85: 'Thespian',
      86: 'Timberwright',
      89: 'Weaponcrafter',
      100: 'Woodcrafter',
    },
    Other: {
      1: 'Apothecary',
      2: 'Alchemist',
      3: 'Astrologer',
      4: 'Chandler',
      6: 'Charcoaler',
      8: 'Clothier',
      9: 'Courtesan',
      10: 'Embalmer',
      11: 'Glassworker',
      12: 'Harper',
      13: 'Herald',
      16: 'Hideworker',
      18: 'Innkeeper',
      19: 'Jeweler',
      20: 'Lexigrapher',
      21: 'Litigant',
      22: 'Locksmith',
      24: 'Mason',
      31: 'Mercantyler',
      41: 'Metalsmith',
      59: 'Miller',
      69: 'Miner',
      72: 'Ostler',
      73: 'Perfumer',
      74: 'Physician',
      75: 'Pilot',
      79: 'Potter',
      81: 'Salter',
      82: 'Seaman',
      83: 'Shek-Plet',
      84: 'Shipwright',
      85: 'Tentmaker',
      86: 'Thespian',
      89: 'Timberwright',
      90: 'Weaponcrafter',
      100: 'Woodcrafter',
    },
  },
  '3a': { // Guild Rank
    Type: 'Numeric',
    Values: {
      20: 'Apprentice',
      65: 'Journeyman',
      80: 'Bonded Master',
      95: 'Freemaster',
      99: 'Syndic',
      100: 'Guildmaster',
    },
  },
  '3b': { // Guildsman Activity
    Type: 'Numeric',
    Values: {
      30: 'At/seeking work',
      40: 'On errand',
      50: 'Seeking materials',
      55: 'Seeking employees',
      65: 'Delivering goods',
      100: {
        Description: 'Other',
        Subtables: ['1', '10'],
      },
    },
  },
  4: { // Clerics
    Type: 'Numeric',
    Values: {
      15: 'Acolyte/Novice',
      30: 'Mendicant Lay-brother/sister',
      40: 'Mendicant Friar/etc.',
      60: 'Deacon(ess)/etc.',
      70: 'Mendicant Priest(ess)',
      85: 'Temple Priest(ess)',
      96: 'High Priest(ess) with attendants',
      99: 'Bishop(ess) with attendants',
      100: 'Primate/Pontiff/Archbishop(ess)',
    },
  },
  '4a': { // Clerical Activity
    Type: 'Numeric',
    Values: {
      10: 'Ministering flock/Dispensing alms/etc.',
      15: 'Inspecting Church Property/lands/etc.',
      20: 'Preaching/About to preach/etc.',
      30: 'Meditating/Praying/etc.',
      40: 'Seeking Victims for Rituals/etc.',
      50: 'Inquisiting after Heretics/apostates/etc.',
      60: 'Begging/soliciting Alms (as applicable)',
      65: 'On Pilgrimage',
      100: {
        Description: 'Non-Church-Related Activity',
        Subtables: ['1'],
      },
    },
  },
  5: { // Criminals
    Type: 'Day/Night',
    Day: {
      10: 'Collecting Extortion/etc.',
      15: 'Collecting Dues/Patrolling/etc.',
      35: 'Pursecutting/Stalking a Mark/etc.',
      45: 'Con Job/Gambling/Touting/etc.',
      46: 'Burgling/Casing Job/etc.',
      47: 'Moving/smuggling Goods/contraband',
      48: 'Assasing Stalking Prey/etc.',
      100: {
        Description: 'Non-Criminal Activity',
        Subtables: ['1', '3b'],
      },
    },
    Night: {
      10: 'Collecting Extortion/etc.',
      11: 'Collecting Dues/Patrolling/etc.',
      13: 'Pursecutting/Stalking a Mark/etc.',
      20: 'Con Job/Gambling/Touting/etc.',
      45: 'Burgling/Casing Job/etc.',
      60: 'Moving/smuggling Goods/contraband',
      62: 'Assasing Stalking Prey/etc.',
      100: {
        Description: 'Non-Criminal Activity',
        Subtables: ['1', '3b'],
      },
    },
  },
  6: { // Peasant & Rural Folk
    Type: 'Numeric',
    Values: {
      20: 'Serf/Poor Thrall',
      45: 'Half-Villein/Average Thrall',
      70: 'Villein/Wealthy Thrall',
      75: 'Reeve (Chief Serf/Thrall)',
      80: 'Farm Worker (Freeman)',
      90: 'Freehold (Tenant) Farmer',
      95: 'Yeoman (Freehold Farmer)',
      96: 'Thatcher',
      98: 'Woodcutter/Iceman',
      100: 'Forester',
    },
  },
  '6a': { // Peasant Activity
    Type: 'Day/Night',
    Day: {
      5: 'Running Away (seeking protection?)',
      30: 'Traveling to/from Work/market',
      70: 'At Work (Making/selling Goods)',
      85: 'Herding Livestock (as applicable)',
      100: {
        Description: 'At Leisure (non-work-related)',
        Subtables: ['1'],
      },
    },
    Night: {
      15: 'Running Away (seeking protection?)',
      20: 'Traveling to/from Work/market',
      25: 'At Work (Making/selling Goods)',
      30: 'Herding Livestock (as applicable)',
      100: {
        Description: 'At Leisure (non-work-related)',
        Subtables: ['1'],
      },
    },

  },
  7: { // Nobles/Personages
    Type: 'Numeric',
    Values: {
      75: 'Enfoeffed Knight/Patrician',
      85: 'Grandmaster/officer of Fighting Order',
      95: 'Duke/Earl/Baron/Great Patrician/etc.',
      100: 'King/Emperor/Tribal Chieftain/etc.',
    },
  },
  8: { // Military Encountersa
    Type: 'Numeric',
    Values: {
      50: 'Local Garrison/guard/patrol/etc.',
      60: 'Militiamen',
      75: 'Legionnaire/Man at Arms',
      84: 'Mercenary',
      88: 'Naval Seaman/Marine (as applicable)',
      93: 'Gladiator (Free)',
      100: 'Knight-Bachelor (Landless)',
    },
  },
  '8a': { // Military Activities
    Type: 'Day/Night',
    Day: {
      45: 'On Guard/patrol',
      50: 'Bearing Message/Moving Cargo',
      60: 'Training/on Maneuvers/etc.',
      65: 'Recruiting',
      70: 'Investigating Crime/etc.',
      80: 'Seeking Employment',
      95: {
        Description: 'Off Duty',
        Subtables: ['1'],
      },
      100: {
        Description: 'Asbent Without Leave',
        Subtables: ['1'],
      },
    },
    Night: {
      60: 'On Guard/patrol',
      65: 'Bearing Message/Moving Cargo',
      66: 'Training/on Maneuvers/etc.',
      69: 'Recruiting',
      70: 'Investigating Crime/etc.',
      75: 'Seeking Employment',
      95: {
        Description: 'Off Duty',
        Subtables: ['1'],
      },
      100: {
        Description: 'Asbent Without Leave',
        Subtables: ['1'],
      },
    },
  },
  9: { // Officials
    Type: 'Numeric',
    Values: {
      20: 'Bailiff/Sheriff/Constable',
      55: 'Mayor/Alderman/Town Bureaucrat',
      70: 'Judge/Magistrate/Royal Official',
      80: 'Gaoler/Executioner (with prisoners?)',
      100: 'Reeve/Inquisitor',
    },
  },
  '9a': { // Official Activities
    Type: 'Numeric',
    Values: {
      25: 'Collecting/assessing Taxes',
      60: 'Inspecting Businesses/Public Works/etc.',
      75: 'Investigating Crime',
      100: {
        Description: 'Off Duty',
        Subtables: ['1'],
      },
    },
  },
  10: { // Adventurers
    Type: 'Day/Night',
    Day: {
      5: 'Camping/seeking Accommodations/etc.',
      23: 'Exploring/seeking Adventure',
      58: 'Questing/Crusading/Geas/etc.',
      63: 'Seeking Directions/protection',
      70: 'Escaping Persecution/the Law/etc.',
      80: 'Hunting Criminals/runaways/game',
      90: 'Escorting Cargo/treasure/etc.',
      93: 'In Distress/Under Attack/etc.',
      96: 'Caring for Wounded/dead',
      98: 'Preparing/springing Ambush/etc.',
      100: 'Dividing Loot after Fight/etc.',
    },
    Night: {
      70: 'Camping/seeking Accommodations/etc.',
      72: 'Exploring/seeking Adventure',
      74: 'Questing/Crusading/Geas/etc.',
      76: 'Seeking Directions/protection',
      86: 'Escaping Persecution/the Law/etc.',
      93: 'Hunting Criminals/runaways/game',
      94: 'Escorting Cargo/treasure/etc.',
      96: 'In Distress/Under Attack/etc.',
      98: 'Caring for Wounded/dead',
      99: 'Preparing/springing Ambush/etc.',
      100: 'Dividing Loot after Fight/etc.',
    },

  },
  11: { // Animal Activities
    Type: 'Numeric',
    Values: {
      50: 'Sleeping/Hibernating/Dormant',
      85: 'Stalking/Hunting or Fleeing Predator',
      100: 'Eating Kill/Grazing/Foraging/Hunting/etc.',
    },
  },
  12: { // Equines
    Type: 'Numeric',
    Values: {
      95: {
        Description: 'Wild Horse/Pony',
        Subtables: ['11'],
      },
      96: {
        Description: 'Centaurin',
        Subtables: ['1', '11'],
      },
      97: {
        Description: 'Unicorn',
        Subtables: ['11'],
      },
      99: {
        Description: 'Hirenu (Hipogriff)',
        Subtables: ['11'],
      },
      100: {
        Description: 'Unique/rare Equine (GM discretion)',
      },
    },
  },
  13: { // Reptiles
    Type: 'Numeric',
    Values: {
      10: {
        Description: 'Ordinary Reptile/lizard',
        Subtables: ['11'],
      },
      50: {
        Description: 'Ordinary Snake (non-poisonous)',
        Subtables: ['11'],
      },
      80: {
        Description: 'Ordinary Snake (poisonous)',
        Subtables: ['11'],
      },
      90: {
        Description: 'Ordinary Snake (constrictor)',
        Subtables: ['11'],
      },
      96: {
        Description: 'Yelgri (Harpy)',
        Subtables: ['11'],
      },
      99: {
        Description: 'Wyvern/Ilme (as applicable)',
        Subtables: ['11'],
      },
      100: {
        Description: 'Dragon',
        Subtables: ['11'],
      },
    },
  },
  14: { // Fungus/Slime
    Type: 'Numeric',
    Values: {
      35: 'Langlah (Gray Ooze)',
      65: 'Lurishi (Ocrhe Mold)',
      95: "M'nogai (Green Slime)",
      100: 'Unique/rare Fungus/Slime',
    },
  },
  15: { // Ivashu
    Type: 'Day/Night',
    Day: {
      25: {
        Description: 'Aklash (the Vessel of Choking Wind)',
        Subtables: ['11'],
      },
      50: {
        Description: 'Nolah (Hârnic Troll)',
        Subtables: ['11'],
      },
      60: 'Umbathri (Gargoyle)',
      95: {
        Description: 'Vlasta (the Eater of Eyes)',
        Subtables: ['11'],
      },
      99: 'Unique/rare Ivashu (GM discretion)',
    },
    Night: {
      15: {
        Description: 'Aklash (the Vessel of Choking Wind)',
        Subtables: ['11'],
      },
      40: {
        Description: 'Hru (the Rock Giant)',
        Subtables: ['11'],
      },
      65: {
        Description: 'Nolah (Hârnic Troll)',
        Subtables: ['11'],
      },
      75: 'Umbathri (Gargoyle)',
      95: {
        Description: 'Vlasta (the Eater of Eyes)',
        Subtables: ['11'],
      },
      99: 'Unique/rare Ivashu (GM discretion)',
    },
  },
  16: { // Ethereals
    Type: 'Day/Night',
    Day: {
      15: 'Elmithri/Water Sprite/Water Elemental/etc',
      50: 'Asiri/Aulamithri/Air Elemental/etc.',
      60: 'Earth Elemental (as applicable)',
      70: 'Fire Elemental (as applicable)',
      84: 'Shade/Ghost/Astral Entity/etc.',
      85: 'Amorvrin ("Free" Undead)',
      90: 'Possessed Entity/Golem/Zombie/etc.',
      95: 'Deity/demigod (as applicable)',
      100: 'Unique/rare Ethereal (GM Discretion)',
    },
    Night: {
      10: 'Elmithri/Water Sprite/Water Elemental/etc',
      20: 'Asiri/Aulamithri/Air Elemental/etc.',
      30: 'Earth Elemental (as applicable)',
      40: 'Fire Elemental (as applicable)',
      60: 'Shade/Ghost/Astral Entity/etc.',
      70: 'Amorvrin ("Free" Undead)',
      80: 'Gulmorvrin ("Enslaved" Undead)',
      90: 'Possessed Entity/Golem/Zombie/etc.',
      95: 'Deity/demigod (as applicable)',
      100: 'Unique/rare Ethereal (GM Discretion)',
    },
  },
};

const encounterChancesTable: any = {
  Urban: {
    Timetick: '1 Minute',
    Day: 16,
    Night: 19,
  },
  Rural: {
    Timetick: '1 Watch',
    Day: 14,
    Night: 19,
  },
  Highway: {
    Timetick: '1 Watch',
    Day: 17,
    Night: 19,
  },
  Wilderness: {
    Timetick: '1 Watch',
    Day: 19,
    Night: 20,
  },
  River: {
    Timetick: '1 Watch',
    Day: 18,
    Night: 19,
  },
  Sealanes: {
    Timetick: '1 Watch',
    Day: 19,
    Night: 19,
  },
  'Open Sea': {
    Timetick: '1 Watch',
    Day: 20,
    Night: 20,
  },
  Underworld: {
    Timetick: '1 Minute',
    Day: 20,
    Night: 20,
  },
  Underground: {
    Timetick: '1 Minute',
    Day: 20,
    Night: 20,
  },
  Safe: {
    Timetick: '24 Hours',
    Day: 20,
    Night: 21,
  },
};

const encountersTable: any = {
  Urban: {
    Lawful: {
      Day: { // Lawful
        1: {
          Description: 'Beggar/Cripple/etc.',
          Subtables: ['1'],
        },
        2: {
          Description: 'Cartographer/Artist',
          Subtables: ['1'],
        },
        7: {
          Description: 'Cleric/etc',
          Subtables: ['4', '4a'],
        },
        9: {
          Description: 'Crier (news/edict/etc.)',
        },
        11: {
          Description: 'Servant/Cook/etc.',
          Subtables: ['1'],
        },
        25: {
          Description: 'Farmer/etc.',
          Subtables: ['6', '6a'],
        },
        30: {
          Description: 'Fisherman/monger',
          Subtables: ['1'],
        },
        33: {
          Description: 'Foreigner (reroll)',
        },
        55: {
          Description: 'Guildsman',
          Subtables: ['3', '3a', '3b'],
        },
        57: {
          Description: 'Hunter/Trapper/etc.',
          Subtables: ['1'],
        },
        58: {
          Description: 'Items from window...',
        },
        63: {
          Description: 'Lia-Kavair',
          Subtables: ['3a', '5'],
        },
        68: {
          Description: 'Laborer/etc.',
          Subtables: ['1'],
        },
        78: {
          Description: 'Military',
          Subtables: ['8'],
        },
        83: {
          Description: 'Mob/Crowd/Assembly',
          Subtables: ['2'],
        },
        85: {
          Description: 'Noble/Personage',
          Subtables: ['7'],
        },
        88: {
          Description: 'Local Official',
          Subtables: ['9', '9a'],
        },
        89: {
          Description: 'Mercantyler',
          Subtables: ['1', '3a'],
        },
        90: {
          Description: 'Pimp procuring/etc.',
        },
        91: {
          Description: 'Prostitute',
        },
        92: {
          Description: 'Ratter/Scavenger',
          Subtables: ['1'],
        },
        93: {
          Description: 'Scribe/Scholar',
          Subtables: ['1'],
        },
        94: {
          Description: 'Slaver-Mercantyler',
          Subtables: ['1'],
        },
        95: {
          Description: 'Teamster',
          Subtables: ['1', '3a'],
        },
        96: {
          Description: 'Toymaker',
          Subtables: ['1'],
        },
        97: {
          Description: 'Unguilded Peddler',
          Subtables: ['1'],
        },
        98: {
          Description: 'Unguilded Criminal',
          Subtables: ['5'],
        },
        100: {
          Description: 'Urchins/Children',
          Subtables: ['1', '2'],
        },
      },
      Night: { // Lawful
        1: {
          Description: 'Beggar/Cripple/etc.',
          Subtables: ['1'],
        },
        2: {
          Description: 'Cartographer/Artist',
          Subtables: ['1'],
        },
        7: {
          Description: 'Cleric/etc',
          Subtables: ['4', '4a'],
        },
        8: {
          Description: 'Crier (news/edict/etc.)',
        },
        9: {
          Description: 'Dogs/Rats',
          Subtables: ['11'],
        },
        10: {
          Description: 'Servant/Cook/etc.',
          Subtables: ['1'],
        },
        13: {
          Description: 'Farmer/etc.',
          Subtables: ['6', '6a'],
        },
        14: {
          Description: 'Fisherman/monger',
          Subtables: ['1'],
        },
        15: {
          Description: 'Foreigner (reroll)',
        },
        26: {
          Description: 'Guildsman',
          Subtables: ['3', '3a', '3b'],
        },
        27: {
          Description: 'Hunter/Trapper/etc.',
          Subtables: ['1'],
        },
        32: {
          Description: 'Items from window...',
        },
        44: {
          Description: 'Lia-Kavair',
          Subtables: ['3a', '5'],
        },
        45: {
          Description: 'Laborer/etc.',
          Subtables: ['1'],
        },
        61: {
          Description: 'Military',
          Subtables: ['8'],
        },
        62: {
          Description: 'Mob/Crowd/Assembly',
          Subtables: ['2'],
        },
        63: {
          Description: 'Noble/Personage',
          Subtables: ['7'],
        },
        64: {
          Description: 'Local Official',
          Subtables: ['9', '9a'],
        },
        65: {
          Description: 'Mercantyler',
          Subtables: ['1', '3a'],
        },
        67: {
          Description: 'Pimp procuring/etc.',
        },
        77: {
          Description: 'Prostitute',
        },
        81: {
          Description: 'Ratter/Scavenger',
          Subtables: ['1'],
        },
        83: {
          Description: 'Street Ruffian',
          Subtables: ['1', '5'],
        },
        84: {
          Description: 'Scribe/Scholar',
          Subtables: ['1'],
        },
        86: {
          Description: 'Slaver-Mercantyler',
          Subtables: ['1'],
        },
        91: {
          Description: 'Street Cleaner',
        },
        92: {
          Description: 'Teamster',
          Subtables: ['1', '3a'],
        },
        93: {
          Description: 'Toymaker',
          Subtables: ['1'],
        },
        94: {
          Description: 'Unguilded Peddler',
          Subtables: ['1'],
        },
        99: {
          Description: 'Unguilded Criminal',
          Subtables: ['5'],
        },
        100: {
          Description: 'Urchins/Children',
          Subtables: ['1', '2'],
        },
      },
    },
    Lawless: {
      Day: { // Lawless
        2: {
          Description: 'Beggar/Cripple/etc.',
          Subtables: ['1'],
        },
        3: {
          Description: 'Cartographer/Artist',
          Subtables: ['1'],
        },
        8: {
          Description: 'Cleric/etc',
          Subtables: ['4', '4a'],
        },
        9: {
          Description: 'Crier (news/edict/etc.)',
        },
        10: {
          Description: 'Dogs/Rats',
          Subtables: ['11'],
        },
        11: {
          Description: 'Servant/Cook/etc.',
          Subtables: ['1'],
        },
        20: {
          Description: 'Farmer/etc.',
          Subtables: ['6', '6a'],
        },
        24: {
          Description: 'Fisherman/monger',
          Subtables: ['1'],
        },
        27: {
          Description: 'Foreigner (reroll)',
        },
        42: {
          Description: 'Guildsman',
          Subtables: ['3', '3a', '3b'],
        },
        44: {
          Description: 'Hunter/Trapper/etc.',
          Subtables: ['1'],
        },
        47: {
          Description: 'Items from window...',
        },
        58: {
          Description: 'Lia-Kavair',
          Subtables: ['3a', '5'],
        },
        62: {
          Description: 'Laborer/etc.',
          Subtables: ['1'],
        },
        70: {
          Description: 'Military',
          Subtables: ['8'],
        },
        76: {
          Description: 'Mob/Crowd/Assembly',
          Subtables: ['2'],
        },
        78: {
          Description: 'Noble/Personage',
          Subtables: ['7'],
        },
        80: {
          Description: 'Local Official',
          Subtables: ['9', '9a'],
        },
        81: {
          Description: 'Mercantyler',
          Subtables: ['1', '3a'],
        },
        84: {
          Description: 'Pimp procuring/etc.',
        },
        88: {
          Description: 'Prostitute',
        },
        89: {
          Description: 'Ratter/Scavenger',
          Subtables: ['1'],
        },
        90: {
          Description: 'Street Ruffian',
          Subtables: ['1', '5'],
        },
        91: {
          Description: 'Scribe/Scholar',
          Subtables: ['1'],
        },
        93: {
          Description: 'Slaver-Mercantyler',
          Subtables: ['1'],
        },
        94: {
          Description: 'Street Cleaner',
        },
        95: {
          Description: 'Teamster',
          Subtables: ['1', '3a'],
        },
        96: {
          Description: 'Toymaker',
          Subtables: ['1'],
        },
        97: {
          Description: 'Unguilded Peddler',
          Subtables: ['1'],
        },
        98: {
          Description: 'Unguilded Criminal',
          Subtables: ['5'],
        },
        100: {
          Description: 'Urchins/Children',
          Subtables: ['1', '2'],
        },
      },
      Night: { // Lawless
        3: {
          Description: 'Beggar/Cripple/etc.',
          Subtables: ['1'],
        },
        4: {
          Description: 'Cartographer/Artist',
          Subtables: ['1'],
        },
        9: {
          Description: 'Cleric/etc',
          Subtables: ['4', '4a'],
        },
        10: {
          Description: 'Crier (news/edict/etc.)',
        },
        12: {
          Description: 'Dogs/Rats',
          Subtables: ['11'],
        },
        13: {
          Description: 'Servant/Cook/etc.',
          Subtables: ['1'],
        },
        15: {
          Description: 'Farmer/etc.',
          Subtables: ['6', '6a'],
        },
        16: {
          Description: 'Fisherman/monger',
          Subtables: ['1'],
        },
        17: {
          Description: 'Foreigner (reroll)',
        },
        27: {
          Description: 'Guildsman',
          Subtables: ['3', '3a', '3b'],
        },
        28: {
          Description: 'Hunter/Trapper/etc.',
          Subtables: ['1'],
        },
        34: {
          Description: 'Items from window...',
        },
        54: {
          Description: 'Lia-Kavair',
          Subtables: ['3a', '5'],
        },
        55: {
          Description: 'Laborer/etc.',
          Subtables: ['1'],
        },
        61: {
          Description: 'Military',
          Subtables: ['8'],
        },
        63: {
          Description: 'Mob/Crowd/Assembly',
          Subtables: ['2'],
        },
        64: {
          Description: 'Noble/Personage',
          Subtables: ['7'],
        },
        65: {
          Description: 'Local Official',
          Subtables: ['9', '9a'],
        },
        66: {
          Description: 'Mercantyler',
          Subtables: ['1', '3a'],
        },
        69: {
          Description: 'Pimp procuring/etc.',
        },
        75: {
          Description: 'Prostitute',
        },
        77: {
          Description: 'Ratter/Scavenger',
          Subtables: ['1'],
        },
        86: {
          Description: 'Street Ruffian',
          Subtables: ['1', '5'],
        },
        87: {
          Description: 'Scribe/Scholar',
          Subtables: ['1'],
        },
        88: {
          Description: 'Slaver-Mercantyler',
          Subtables: ['1'],
        },
        91: {
          Description: 'Street Cleaner',
        },
        92: {
          Description: 'Teamster',
          Subtables: ['1', '3a'],
        },
        93: {
          Description: 'Toymaker',
          Subtables: ['1'],
        },
        94: {
          Description: 'Unguilded Peddler',
          Subtables: ['1'],
        },
        99: {
          Description: 'Unguilded Criminal',
          Subtables: ['5'],
        },
        100: {
          Description: 'Urchins/Children',
          Subtables: ['1', '2'],
        },
      },
    },
  },
  Rural: {
    Lawful: {
      Day: {
        5: {
          Description: 'Local Lord/escort',
          Subtables: ['1', '8', '10'],
        },
        55: {
          Description: 'Farmer/etc.',
          Subtables: ['6'],
        },
        60: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        62: {
          Description: 'Poacher/Hunter',
          Subtables: ['1'],
        },
        75: 'Reroll as Highway',
        95: 'Reroll as Urban',
        100: 'Reroll as Wilderness',
      },
      Night: {
        2: {
          Description: 'Local Lord/escort',
          Subtables: ['1', '8', '10'],
        },
        20: {
          Description: 'Farmer/etc.',
          Subtables: ['6'],
        },
        40: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        60: {
          Description: 'Poacher/Hunter',
          Subtables: ['1'],
        },
        70: 'Reroll as Highway',
        90: 'Reroll as Urban',
        100: 'Reroll as Wilderness',
      },
    },
    Lawless: {
      Day: {
        5: {
          Description: 'Local Lord/escort',
          Subtables: ['1', '8', '10'],
        },
        50: {
          Description: 'Farmer/etc.',
          Subtables: ['6'],
        },
        55: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        65: {
          Description: 'Poacher/Hunter',
          Subtables: ['1'],
        },
        75: 'Reroll as Highway',
        90: 'Reroll as Urban',
        100: 'Reroll as Wilderness',
      },
      Night: {
        2: {
          Description: 'Local Lord/escort',
          Subtables: ['1', '8', '10'],
        },
        20: {
          Description: 'Farmer/etc.',
          Subtables: ['6'],
        },
        35: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        60: {
          Description: 'Poacher/Hunter',
          Subtables: ['1'],
        },
        70: 'Reroll as Highway',
        85: 'Reroll as Urban',
        100: 'Reroll as Wilderness',
      },
    },
  },
  Highway: {
    Lawful: {
      Day: { // Lawful
        25: 'Reroll as Wilderness/Urban',
        35: 'Reroll as Urban',
        45: {
          Description: 'Journeyman',
          Subtables: ['3b'],
        },
        55: 'Caravan with Escort',
        60: {
          Description: 'Peddler/Mercantyler',
          Subtables: ['1', '3b'],
        },
        65: {
          Description: 'Cleric/etc.',
          Subtables: ['4'],
        },
        70: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        80: 'Soldiers on Patrol',
        85: {
          Description: 'Brigands/Highwayman',
          Subtables: ['1'],
        },
        90: {
          Description: 'Military',
          Subtables: ['8'],
        },
        95: {
          Description: 'Personage',
          Subtables: ['7'],
        },
        100: {
          Description: 'Adventurer',
          Subtables: ['10'],
        },
      },
      Night: { // Lawful
        60: 'Reroll as Wilderness/Urban',
        63: 'Reroll as Urban',
        65: {
          Description: 'Journeyman',
          Subtables: ['3b'],
        },
        66: 'Caravan with Escort',
        68: {
          Description: 'Peddler/Mercantyler',
          Subtables: ['1', '3b'],
        },
        70: {
          Description: 'Cleric/etc.',
          Subtables: ['4'],
        },
        80: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        85: 'Soldiers on Patrol',
        94: {
          Description: 'Brigands/Highwayman',
          Subtables: ['1'],
        },
        96: {
          Description: 'Military',
          Subtables: ['8'],
        },
        98: {
          Description: 'Personage',
          Subtables: ['7'],
        },
        100: {
          Description: 'Adventurer',
          Subtables: ['10'],
        },
      },
    },
    Lawless: {
      Day: { // Lawless
        30: 'Reroll as Wilderness/Urban',
        35: 'Reroll as Urban',
        40: {
          Description: 'Journeyman',
          Subtables: ['3b'],
        },
        50: 'Caravan with Escort',
        53: {
          Description: 'Peddler/Mercantyler',
          Subtables: ['1', '3b'],
        },
        57: {
          Description: 'Cleric/etc.',
          Subtables: ['4'],
        },
        60: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        70: 'Soldiers on Patrol',
        90: {
          Description: 'Brigands/Highwayman',
          Subtables: ['1'],
        },
        95: {
          Description: 'Military',
          Subtables: ['8'],
        },
        97: {
          Description: 'Personage',
          Subtables: ['7'],
        },
        100: {
          Description: 'Adventurer',
          Subtables: ['10'],
        },
      },
      Night: { // Lawless
        70: 'Reroll as Wilderness/Urban',
        72: 'Reroll as Urban',
        74: {
          Description: 'Journeyman',
          Subtables: ['3b'],
        },
        75: 'Caravan with Escort',
        76: {
          Description: 'Peddler/Mercantyler',
          Subtables: ['1', '3b'],
        },
        79: {
          Description: 'Cleric/etc.',
          Subtables: ['4'],
        },
        81: {
          Description: 'Forester',
          Subtables: ['1'],
        },
        83: 'Soldiers on Patrol',
        94: {
          Description: 'Brigands/Highwayman',
          Subtables: ['1'],
        },
        96: {
          Description: 'Military',
          Subtables: ['8'],
        },
        97: {
          Description: 'Personage',
          Subtables: ['7'],
        },
        100: {
          Description: 'Adventurer',
          Subtables: ['10'],
        },
      },
    },
  },
  Wilderness: {
    Day: {
      20: 'Tracks/Spore/Sounds (Reroll)',
      45: 'Local Tribe/patrol/etc.',
      47: {
        Description: 'Wild Dog/wolf/etc.',
        Subtables: ['11'],
      },
      49: {
        Description: 'Mountain Lion/Wild Cat/etc.',
        Subtables: ['11'],
      },
      51: {
        Description: 'Ursine: Bear',
        Subtables: ['11'],
      },
      54: {
        Description: 'Stag/Deer/Hind/etc.',
        Subtables: ['11'],
      },
      55: {
        Description: 'Wild/stray Cattle/etc.',
        Subtables: ['11'],
      },
      57: {
        Description: 'Wild/stray Sheep/goats/etc.',
        Subtables: ['11'],
      },
      59: {
        Description: 'Wild/stray Boar/pig/etc.',
        Subtables: ['11'],
      },
      61: {
        Description: 'Avian: Eagle/hawk/falcon/etc.',
        Subtables: ['11'],
      },
      62: {
        Description: 'Equine',
        Subtables: ['11', '12'],
      },
      63: {
        Description: 'Reptile',
        Subtables: ['13', '11'],
      },
      64: {
        Description: 'Ivashu',
        Subtables: ['15', '11'],
      },
      65: {
        Description: 'Ethereal',
        Subtables: ['16'],
      },
      82: {
        Description: 'Human Adventurer',
        Subtables: ['10'],
      },
      83: {
        Description: 'Gargun (Wandering Band)',
        Subtables: ['1', '10'],
      },
      85: {
        Description: 'Khuzdul Adventurer',
        Subtables: ['10'],
      },
      86: {
        Description: 'Sindarin Adventurer',
        Subtables: ['10'],
      },
      88: 'Geomorphic: Landslide/Bog/etc.',
      90: 'One/more of party gets lost',
      92: 'Spoilage/loss of Food/etc.',
      94: 'Lame Horse or Equipment Loss/failure',
      96: 'Sickness/Food Poisoning/etc.',
      98: 'Mutiny/Dissent/Argument/etc.',
      99: 'Plant Hazard (poison ivy/etc.)',
      100: {
        Description: 'Slime/Mold/Fungus',
        Subtables: ['14'],
      },
    },
    Night: {
      15: 'Tracks/Spore/Sounds (Reroll)',
      45: 'Local Tribe/patrol/etc.',
      48: {
        Description: 'Wild Dog/wolf/etc.',
        Subtables: ['11'],
      },
      51: {
        Description: 'Mountain Lion/Wild Cat/etc.',
        Subtables: ['11'],
      },
      53: {
        Description: 'Ursine: Bear',
        Subtables: ['11'],
      },
      55: {
        Description: 'Stag/Deer/Hind/etc.',
        Subtables: ['11'],
      },
      57: {
        Description: 'Wild/stray Cattle/etc.',
        Subtables: ['11'],
      },
      59: {
        Description: 'Wild/stray Sheep/goats/etc.',
        Subtables: ['11'],
      },
      61: {
        Description: 'Wild/stray Boar/pig/etc.',
        Subtables: ['11'],
      },
      62: {
        Description: 'Avian: Eagle/hawk/falcon/etc.',
        Subtables: ['11'],
      },
      63: {
        Description: 'Equine',
        Subtables: ['11', '12'],
      },
      66: {
        Description: 'Reptile',
        Subtables: ['13', '11'],
      },
      69: {
        Description: 'Ivashu',
        Subtables: ['15', '11'],
      },
      73: {
        Description: 'Ethereal',
        Subtables: ['16'],
      },
      75: 'Dryad (Forest only)',
      79: {
        Description: 'Human Adventurer',
        Subtables: ['10'],
      },
      88: {
        Description: 'Gargun (Wandering Band)',
        Subtables: ['1', '10'],
      },
      89: {
        Description: 'Khuzdul Adventurer',
        Subtables: ['10'],
      },
      91: {
        Description: 'Sindarin Adventurer',
        Subtables: ['10'],
      },
      92: 'Geomorphic: Landslide/Bog/etc.',
      93: 'One/more of party gets lost',
      94: 'Spoilage/loss of Food/etc.',
      95: 'Lame Horse or Equipment Loss/failure',
      97: 'Sickness/Food Poisoning/etc.',
      98: 'Mutiny/Dissent/Argument/etc.',
      99: 'Plant Hazard (poison ivy/etc.)',
      100: {
        Description: 'Slime/Mold/Fungus',
        Subtables: ['14'],
      },
    },
  },
  Maritime: {
    River: {
      34: 'Local Fishing Boat',
      35: 'Foreign Fishing Boat',
      65: 'Local Merchantman',
      75: 'Foreign Merchantman',
      80: 'Pirate/Privateer/etc.',
      84: 'Local Warship',
      85: 'Foreign Warship',
      90: 'Mutiny/Dissent/Argument',
      94: 'Maelstrom/Freak Current',
      96: 'Fire on Board',
      98: 'Equipment Failure',
      99: 'Food and/or Water Spoilage',
      100: 'Sea Monster or Water Monster',
    },
    Sealanes: {
      25: 'Local Fishing Boat',
      30: 'Foreign Fishing Boat',
      55: 'Local Merchantman',
      65: 'Foreign Merchantman',
      70: 'Pirate/Privateer/etc.',
      74: 'Local Warship',
      75: 'Foreign Warship',
      80: 'Mutiny/Dissent/Argument',
      82: 'Maelstrom/Freak Current',
      84: 'Fire on Board',
      86: 'Equipment Failure',
      90: 'Food and/or Water Spoilage',
      91: 'Killer Whale (Orca)',
      94: 'Dolphin/Porpoise',
      95: 'Gray/finback/sperm Whale',
      96: 'Humpback/bowhead Whale',
      98: 'Right Whale/Narwhal',
      99: 'Seal/Walrus/Sealion',
      100: 'Sea Monster or Water Monster',
    },
    'Open Sea': {
      5: 'Local Fishing Boat',
      8: 'Foreign Fishing Boat',
      22: 'Local Merchantman',
      29: 'Foreign Merchantman',
      40: 'Pirate/Privateer/etc.',
      44: 'Local Warship',
      45: 'Foreign Warship',
      59: 'Mutiny/Dissent/Argument',
      60: 'Maelstrom/Freak Current',
      62: 'Fire on Board',
      65: 'Equipment Failure',
      70: 'Food and/or Water Spoilage',
      72: 'Killer Whale (Orca)',
      77: 'Dolphin/Porpoise',
      81: 'Gray/finback/sperm Whale',
      84: 'Humpback/bowhead Whale',
      90: 'Right Whale/Narwhal',
      98: 'Seal/Walrus/Sealion',
      100: 'Sea Monster or Water Monster',
    },
  },
  Underworld: {
    10: 'Tracks/Spore/Sounds (Reroll)',
    40: 'Resident Creatures (as applicable)',
    55: 'Reroll as Wilderness (as applicable)',
    65: {
      Description: 'Gargun (wandering band)',
      Subtables: ['10'],
    },
    70: {
      Description: 'Reptiles: Snake/dragon/etc.',
      Subtables: ['13'],
    },
    78: {
      Description: 'Ivashu',
      Subtables: ['15'],
    },
    85: {
      Description: 'Ethereal: Ghost/demon/etc.',
      Subtables: ['16'],
    },
    90: 'Cave-in/Bad floor/etc.',
    92: 'One/more of party gets lost',
    93: 'Failure/loss of Equipment',
    95: 'Mutiny/Dissent/Argument',
    98: {
      Description: 'Slime/Mold/Fungus',
      Subtables: ['14'],
    },
    100: 'Other/unique Creature (GM discretion)',
  },
  Safe: {
  },
};

function rollSubtable(sub: any, time: any, environ: string) {
  // iterate through each subtable, roll, and add the result to the description
  // two types: day/night and numeric. Daynight have day/night keys and numeric has a values key
  // const subtable = subtables[sub];
  const subtableThing = subtables[sub];
  const subtableType = subtableThing.Type;
  const subtableRoll = roll(100);
  console.log(`Rolling on Subtable ${sub} (type ${subtableType}) ... Rolled a ${subtableRoll}`);
  let subtableKey: any;

  if (subtableType === 'Day/Night') subtableKey = subtables[sub][time];
  if (subtableType === 'Numeric') subtableKey = subtables[sub].Values;
  if (subtableType === 'Urban/Other') subtableKey = subtables[sub].Other;
  if (subtableType === 'Urban/Other' && environ === 'Urban') subtableKey = subtables[sub].Urban;

  let wholeRow;
  let subtableModifier;
  Object.keys(subtableKey).reverse().forEach((row) => {
    if (subtableRoll <= row) {
      // subtableModifier = subtableKey[row];
      // check if description and additional subtables exist
      if (subtableKey[row].hasOwnProperty('Description')) {
        wholeRow = subtableKey[row];
        subtableModifier = subtableKey[row].Description;
      } else {
        wholeRow = subtableKey[row];
        subtableModifier = subtableKey[row];
      }
    }
  });
  if (wholeRow.hasOwnProperty('Subtables')) {
    console.log('There are MORE subtables!', encounterSubtables);
    // iterate through each subtable, roll, and add the result to the description
    // two types: day/night and numeric. Daynight have day/night keys and numeric has a values key
    wholeRow.Subtables.forEach((sub) => {
      subtableModifier += ` ${rollSubtable(sub, time, environ)}`;
    });
  }
  return subtableModifier;
}

function generateEncounterDetails(environ: string, law: string, time: string) {
  let response = '';

  let table: any;
  if (environ === 'Urban') table = encountersTable[environ][law][time];
  if (environ === 'Rural') table = encountersTable[environ][law][time];
  if (environ === 'Highway') table = encountersTable[environ][law][time];
  if (environ === 'River') table = encountersTable.Maritime[environ];
  if (environ === 'Sealanes') table = encountersTable.Maritime[environ];
  if (environ === 'Open Sea') table = encountersTable.Maritime[environ];
  if (environ === 'Wilderness') table = encountersTable[environ][time];
  if (environ === 'Underworld') table = encountersTable[environ];
  if (environ === 'Underground') table = encountersTable.Underworld;

  const dieRoll = roll(100);

  let encounterRow: any;
  let encounterName: any;
  let encounterDesc: any;
  let encounterSubtables: any;

  const tableKeys = Object.keys(table).reverse();
  const tableKeysToNumbers = tableKeys.map((x) => Number(x));
  tableKeysToNumbers.forEach((row) => {
    if (dieRoll <= row) {
      encounterRow = table[row];
      // console.log(encounterRow);
      if (table[row].hasOwnProperty('Description')) {
        encounterName = encounterRow.Description;
      } else {
        encounterName = encounterRow;
      }
      encounterDesc = encounterName;
      encounterSubtables = encounterRow.Subtables;
    }
  });

  if (encounterRow.hasOwnProperty('Subtables')) {
    encounterSubtables.forEach((sub: any) => {
      encounterDesc += ` ${rollSubtable(sub, time, environ)}`;
    });
  }

  // handle rerolls here
  if (encounterDesc === 'Reroll as Urban') encounterDesc += ` -> ${generateEncounterDetails('Urban', law, time)}`;
  if (encounterDesc === 'Reroll as Highway') encounterDesc += ` -> ${generateEncounterDetails('Highway', law, time)}`;
  if (encounterDesc === 'Reroll as Wilderness') encounterDesc += ` -> ${generateEncounterDetails('Wilderness', law, time)}`;
  if (encounterDesc === 'Tracks/Spore/Sounds (Reroll)') {
    encounterDesc += `Tracks/Spore/Sounds of ... -> ${generateEncounterDetails(environ, law, time)}`;
  }
  if (encounterDesc === 'Reroll as Wilderness/Urban') {
    if (roll(2) === 1) encounterDesc += ` -> (Wilderness): ${generateEncounterDetails('Wilderness', law, time)}`;
    else encounterDesc += ` -> (Urban): ${generateEncounterDetails('Urban', law, time)}`;
  }

  response += `Encounter description: ${encounterDesc} <br>`;

  return response;
}

export default (environ = 'Urban', law = 'Lawful', time = 'Day') => {
  const minimum = encounterChancesTable[environ][time];
  let result;
  const dieRoll = 20;
  if (dieRoll >= minimum) {
    result = generateEncounterDetails(environ, law, time);
  }
  return result;
};
