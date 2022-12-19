// TODO: remove these -> reminder that i can do this
// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// function wrapInArray(obj: string | string[]) {}
// type NumberArray = Array<number>;
// interface SMTH { [key: string]: string; }

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
