import { Component } from '@angular/core';

@Component({
  selector: 'app-criteria/abstract-criterion',
  template: '',
})
export abstract class AbstractCriterionComponent {
  data: any;

  onChange: () => void;
}
