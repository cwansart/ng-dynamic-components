import { Component } from '@angular/core';
import { CriteriaNames } from './criteria/criteria-map';
import { v4 as uuidv4 } from 'uuid';
import { CriteriaDataTypes } from './criteria/criteria-data-types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  availableCriteria = Object.keys(CriteriaNames);

  components: CriteriaDataTypes[] = [
    { type: CriteriaNames.age, uuid: uuidv4(), data: {} },
    { type: CriteriaNames.stay, uuid: uuidv4(), data: {} },
    { type: CriteriaNames.age, uuid: uuidv4(), data: {} },
  ];

  removeCriterion(uuid: string) {
    console.log('removing from components', uuid);
    this.components = this.components.filter(
      (component) => component.uuid !== uuid
    );
  }

  addCriterion(criterion: string) {
    if (criterion in CriteriaNames) {
      this.components = [
        ...this.components,
        {
          uuid: uuidv4(),
          type: CriteriaNames[criterion],
          data: {},
        },
      ];
    }
  }
}
