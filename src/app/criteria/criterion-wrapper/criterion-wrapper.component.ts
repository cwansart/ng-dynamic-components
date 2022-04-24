import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CriteriaNames, getComponentForName } from '../criteria-map';

@Component({
  selector: 'app-criterion-wrapper',
  templateUrl: './criterion-wrapper.component.html',
})
export class CriterionWrapperComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  viewRef: ViewContainerRef;

  @Input()
  componentType: CriteriaNames;

  @Input()
  uuid: string;

  @Output()
  onRemove = new EventEmitter<string>();

  ngOnInit() {
    console.log('loading criterion', this.componentType);
    this.viewRef.clear();
    this.viewRef.createComponent(getComponentForName(this.componentType));

    // todo: wire onChange here
  }

  remove() {
    this.onRemove.emit(this.uuid);
  }
}
