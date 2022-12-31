// TODO: remove these -> reminder that i can do this
// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// function wrapInArray(obj: string | string[]) {}
// type NumberArray = Array<number>;
// interface SMTH { [key: string]: string; }
// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }
// interface IProps extends ISomeOther{ }

export enum ScoringRule {
  Once = "Once",
  Multiple = "Multiple",
  Simultaneous = "Simultaneous",
  Undetermined = "Undetermined",
}

export enum DefaultSport {
  Darts = "Darts",
  Beerpong = "Beerpong",
  Snooker = "Snooker",
  Tablefootball = "Tablefootball",
}

export interface Sport {
  name: string;
  rounds: number;
  scoreStart: number;
  scoreGoal: number | null;
  fixedRounds: boolean;
  scoringRule: ScoringRule;
  scoresPerTurn?: number;
  defaultSport?: DefaultSport;
  commonInputs?: Array<number>;
  customColor?: string;
}
