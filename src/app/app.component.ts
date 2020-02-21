import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'pivot-test';

  constructor(private http: HttpClient) {}

  ngOnInit() {

  }
  ngAfterViewInit() {
    const url: string = 'assets/6193.json';
    
    this.http.get(url,{withCredentials: false}).subscribe(result => {
      let obj_rows: Object = {};
      let keys: Array<string> = Object.keys(result);
      keys.forEach(key => {
        Object.keys(result[key]).forEach((key_row) =>
        {
          let row: number = Number(key_row);
          if (obj_rows.hasOwnProperty(row)) {
            keys.forEach((key2) => {
              obj_rows[row][key2] = result[key2][key_row]; 
            })
          } else {
            obj_rows[row] = {row: row}; 
            keys.forEach((key2) => {
              obj_rows[row][key2] = null; 
            })
          }

        });
        let data: Array<Object> = [];
        Object.keys(obj_rows).forEach((row) => {
          data.push(obj_rows[row]);
        });
        (<any>$("#output")).pivotUI(
          data, {
            dataClass: (<any>$).pivotUtilities.SubtotalPivotData,
            rows: ["specimenOrgan","finding"],
            cols: ["timepoint", "dose"],
            aggregatorName: ["Count"],
            exclusions: {timepoint:["14"],finding:["null"]},
            renderers: $.extend(
              (<any>$).pivotUtilities.renderers, 
              (<any>$).pivotUtilities.plotly_renderers,
              (<any>$).pivotUtilities.subtotal_renderers
            ),
            rendererName: "Table With Subtotal",
            rendererOptions: {
                arrowExpanded: "[+]",
                arrowCollapsed: "[-]",
                rowSubtotalDisplay: {
                    collapseAt: 0
                },
                colSubtotalDisplay: {
                    collapseAt: 0
                }
            }
          }
        );
      });




    });
    /* build-in test
    (<any>$("#output")).pivotUI(
      (<any>$).pivotUtilities.tipsData, {
        rows: ["sex"],
        cols: ["smoker"],
        vals: ["tip", "total_bill"],
        aggregatorName: "Sum over Sum",
        rendererName: "Bar Chart",
        renderers: $.extend(
          (<any>$).pivotUtilities.renderers, 
          (<any>$).pivotUtilities.plotly_renderers
        )
      }
    );*/

  }
}
