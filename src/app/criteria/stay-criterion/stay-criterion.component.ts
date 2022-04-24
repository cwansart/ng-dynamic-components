import { Component, OnInit } from '@angular/core';
import { AbstractCriterionComponent } from '../abstract-criterion/abstract-criterion.component';
import { CriteriaNames } from '../criteria-map';

@Component({
  selector: 'app-stay-criterion',
  templateUrl: './stay-criterion.component.html',
})
export class StayCriterionComponent extends AbstractCriterionComponent<CriteriaNames.age> {}
