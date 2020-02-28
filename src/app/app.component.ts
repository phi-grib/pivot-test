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

  type = 'FINDING';

  ngOnInit() {

  }

  checkRowIntegrity(data: Array<Object>) {
    //Check there are no missing or extra fields
    let BreakException = {};
    let data_0 = data[0];
    let data_0_keys = Object.keys(data_0);
    data.forEach((record)=> {
      try {
        Object.keys(record).forEach((key) => {
          if(!data_0.hasOwnProperty(key)) {
            console.log("Record with extra fields:");
            console.log(record);
            throw BreakException;
          }
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      }
      try {
        data_0_keys.forEach((key) => {
          if(!record.hasOwnProperty(key)) {
            console.log("Record with missing fields:");
            console.log(key);
            console.log(record);
            throw BreakException;
          }
        });
      } catch (e) {
        if (e !== BreakException) throw e;
      }
          
    });
  }




  ngAfterViewInit() {
    const url: string = 'assets/mtr_terbinafine_naftifine_faerspa_2020_02_27_17_49_17.json'
    //const url: string = 'assets/mtr_terbinafine_naftifine_etoxsyspa_2020_02_27_17_44_18.json'
    //const url: string = 'assets/novartis.json';
    //const url: string = 'assets/6193.json';
    
    this.http.get(url,{withCredentials: false}).subscribe(result => {


      
      /*//format conversion for 'assets/6193.json'
      
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
      });
      let data: Array<Object> = [];
      Object.keys(obj_rows).forEach((row) => {
        data.push(obj_rows[row]);
      });*/

      //dietary_mouse_28_6200.png
      //dietary_rat_182_6194.png
      //oral_mouse_91_6207.png
      //oral_rat_84_6209.png
      //oral_gavage_mouse_91_6193.png


      let data;
      let study_ids_to_exclude;
      switch (this.type) {
        case 'FINDING':
          study_ids_to_exclude = result['COMPOUND'][0]["studyIds"]
          let study_id = undefined;
          //study_id = 6200; //Dietary mouse 28
          //study_id = 6194; //Dietary rat 182
          //study_id = 6207; //Oral mouse 91
          //study_id = 6209; //Oral rat 84
          //study_id = 6193; //Oral gavage mouse 91
          data = result['FINDING'];

          this.checkRowIntegrity(data);


          //From here pure jQuery and javascript only     

          $("#output").pivotUI(
            data, {
              dataClass: $.pivotUtilities.SubtotalPivotData,
              rows: ["specimenOrgan","finding"],
              cols: ["timepoint", "dose"],
              filter: function(record) {
                if (study_id !== undefined) {
                  return record["studyId"] == study_id;
                } else {
                  return !(study_ids_to_exclude.indexOf(record) > -1);
                }
              },
              aggregatorName: ["Count"],
              /*exclusions: {timepoint:["14"],finding:["null"]},*/
              renderers: $.extend(
                $.pivotUtilities.renderers, 
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.subtotal_renderers
              ),
              rendererName: "Table With Subtotal",
              rendererOptions: {
                  arrowExpanded: "[+]",
                  arrowCollapsed: "[-]",
                  rowSubtotalDisplay: {
                    hideOnExpand: true,
                    displayOnTop: false
                      
                  },
                  colSubtotalDisplay: {

                  }
              }
            }
          );
        break;
        case 'STUDY':
          study_ids_to_exclude = result['COMPOUND'][0]["studyIds"]
          data = result['STUDY'];

          this.checkRowIntegrity(data);


          //From here pure jQuery and javascript only
          
          $("#output").pivotUI(
            data, {
              dataClass: $.pivotUtilities.SubtotalPivotData,
              aggregatorName: ["Count"],
              cols: ['duration'],
              rows: ['species','route'],
              filter: function(record) {
                return !(study_ids_to_exclude.indexOf(record) > -1);
              },
              /*exclusions: {timepoint:["14"],finding:["null"]},*/
              renderers: $.extend(
                $.pivotUtilities.renderers, 
                $.pivotUtilities.plotly_renderers,
                $.pivotUtilities.subtotal_renderers
              ),
              rendererName: "Table With Subtotal",
              rendererOptions: {
                  arrowExpanded: "[+]",
                  arrowCollapsed: "[-]",
                  rowSubtotalDisplay: {
                    hideOnExpand: true,
                    displayOnTop: false
                      
                  },
                  colSubtotalDisplay: {

                  }
              }
            }
          );
        break;
      }
    });
    


    /* build-in test
    $("#output").pivotUI(
      $.pivotUtilities.tipsData, {
        rows: ["sex"],
        cols: ["smoker"],
        vals: ["tip", "total_bill"],
        aggregatorName: "Sum over Sum",
        rendererName: "Bar Chart",
        renderers: $.extend(
          $.pivotUtilities.renderers, 
          $.pivotUtilities.plotly_renderers
        )
      }
    );*/

  }
}
