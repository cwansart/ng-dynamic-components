import { Component } from '@angular/core';
import { CriteriaNames } from '../criteria-map';

@Component({
  selector: 'app-criteria/abstract-criterion',
  template: '',
})
export abstract class AbstractCriterionComponent<T extends CriteriaNames> {
  data: T;

  onChange: () => void;
}
