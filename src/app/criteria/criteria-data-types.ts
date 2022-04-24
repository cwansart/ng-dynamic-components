import { CriteriaNames } from './criteria-map';

interface CriterionDataType<T extends CriteriaNames> {
  type: T;
  uuid: string;
  data: ParameterMap[T];
}

type ParameterMap = {
  age: AgeType;
  stay: StayType;
};

export type AgeType = {
  from?: number;
  to?: number;
};

export type StayType = {
  from?: Date;
  to?: Date;
};

export type CriteriaDataTypes =
  | CriterionDataType<CriteriaNames.age>
  | CriterionDataType<CriteriaNames.stay>;
