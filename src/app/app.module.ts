import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CriterionWrapperComponent } from './criteria/criterion-wrapper/criterion-wrapper.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CriterionWrapperComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
