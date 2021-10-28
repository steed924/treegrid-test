import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { ToolbarModule, ToolbarAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule , CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';

import { DatePickerModule, DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ CommonModule, HttpModule, TreeGridAllModule,       NumericTextBoxAllModule, ToolbarModule, DropDownListAllModule, ButtonAllModule, DialogModule, MultiSelectAllModule, CheckBoxAllModule, ReactiveFormsModule, FormsModule, DatePickerModule, SparklineAllModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
