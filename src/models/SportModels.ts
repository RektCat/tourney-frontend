export enum ScoringRule {
  Once,
  Multiple,
  Simultaneous,
  Undetermined,
}

export enum DefaultSport {
  Darts,
  Beerpong,
  Snooker,
  Tablefootball,
}

export interface Sport {
  name: string;
  rounds: number;
  scoreStart: number;
  scoreGoal: number;
  fixedRounds: boolean;
  scoringRule: ScoringRule;
  scoresPerTurn?: number;
  defaultSport?: DefaultSport;
  customColor?: string;
}
