import { Component, OnInit } from '@angular/core';
import { AbstractCriterionComponent } from '../abstract-criterion/abstract-criterion.component';
import { CriteriaNames } from '../criteria-map';

@Component({
  selector: 'app-age-criterion',
  templateUrl: './age-criterion.component.html',
})
export class AgeCriterionComponent extends AbstractCriterionComponent<CriteriaNames.stay> {}
