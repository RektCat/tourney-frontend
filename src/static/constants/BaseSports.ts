import { DefaultSport, ScoringRule, Sport } from "../../models/SportModels";

interface BaseSportsType {
  [items: string]: Sport;
}

const BASESPORTS: BaseSportsType = {
  darts: {
    name: "Default Darts",
    rounds: 11,
    scoreStart: 501,
    scoreGoal: 0,
    fixedRounds: false,
    scoringRule: ScoringRule.Multiple,
    scoresPerTurn: 3,
    defaultSport: DefaultSport.Darts,
  },
  beerpong: {
    name: "Default Beerpong",
    rounds: 1,
    scoreStart: 10,
    scoreGoal: 0,
    fixedRounds: true,
    scoringRule: ScoringRule.Undetermined,
    defaultSport: DefaultSport.Beerpong,
  },
  snooker: {
    name: "Default Snooker",
    rounds: 1,
    scoreStart: 0,
    scoreGoal: null,
    fixedRounds: true,
    scoringRule: ScoringRule.Undetermined,
    defaultSport: DefaultSport.Snooker,
  },
  tablefootball: {
    name: "Default Tablefootball",
    rounds: 1,
    scoreStart: 0,
    scoreGoal: 10,
    fixedRounds: true,
    scoringRule: ScoringRule.Simultaneous,
    defaultSport: DefaultSport.Tablefootball,
  },
};

export default BASESPORTS;
