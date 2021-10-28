import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public data: DataManager;
  public pageSetting: Object;

  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;

  ngOnInit(): void {
    this.data = new DataManager({
      url: 'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
      adaptor: new WebApiAdaptor(),
      offline: true,
    });
    this.pageSetting = { pageCount: 3 };
  }
}
