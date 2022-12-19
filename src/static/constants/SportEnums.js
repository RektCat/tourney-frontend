export const SCORINGRULE = Object.freeze({
  once: "Symbol(once)",
  multiple: "Symbol(multiple)",
  simultaneous: "Symbol(simultaneous)",
  undetermined: "Symbol(undetermined)",
});

export const DEFAULTSPORT = Object.freeze({
  darts: "Symbol(darts)",
  beerpong: "Symbol(beerpong)",
  snooker: "Symbol(snooker)",
  tablefootball: "Symbol(tablefootball)",
});

export const BASESPORTS = Object.freeze({
  darts: {
    name: "Default Darts",
    rounds: 11,
    scoreStart: 501,
    scoreGoal: 0,
    fixedRounds: false,
    scoringRule: SCORINGRULE.multiple,
    scoresPerTurn: 3,
    defaultSport: DEFAULTSPORT.darts,
  },
  beerpong: {
    name: "Default Beerpong",
    rounds: 1,
    scoreStart: 10,
    scoreGoal: 0,
    fixedRounds: true,
    scoringRule: SCORINGRULE.undetermined,
    defaultSport: DEFAULTSPORT.beerpong,
  },
  snooker: {
    name: "Default Snooker",
    rounds: 1,
    scoreStart: 0,
    scoreGoal: 0,
    fixedRounds: true,
    scoringRule: SCORINGRULE.undetermined,
    defaultSport: DEFAULTSPORT.snooker,
  },
  tablefootball: {
    name: "Default Tablefootball",
    rounds: 1,
    scoreStart: 0,
    scoreGoal: 10,
    fixedRounds: true,
    scoringRule: SCORINGRULE.simultaneous,
    defaultSport: DEFAULTSPORT.tablefootball,
  },
});
