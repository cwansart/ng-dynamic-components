import { Type } from '@angular/core';
import { AbstractCriterionComponent } from './abstract-criterion/abstract-criterion.component';
import { AgeCriterionComponent } from './age-criterion/age-criterion.component';
import { StayCriterionComponent } from './stay-criterion/stay-criterion.component';

type criteriaMapType = Record<CriteriaNames, Type<AbstractCriterionComponent>>;

const CRITERIA_MAP: criteriaMapType = {
  age: AgeCriterionComponent,
  stay: StayCriterionComponent,
};

export enum CriteriaNames {
  age = 'age',
  stay = 'stay',
}

export function getComponentForName(name: CriteriaNames) {
  return CRITERIA_MAP[name];
}
