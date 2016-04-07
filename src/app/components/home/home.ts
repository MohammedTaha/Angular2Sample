import {Component} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Home {
  public activityResults;
  public selectedActivityResult;
  constructor(private http : Http) {
      this.loadJSON();
  }


  loadJSON(){
      this.http.get("../../../ListOfAAResponse.json")
      .map(res => res.json())
      .subscribe( (res:any) => {

          if(res.activityAlert && res.activityAlert.length){
            res.activityAlert.forEach((aa)=>{
              aa.status = aa["@status"];
              delete aa["@status"];
            });
            this.activityResults = res.activityAlert;
          }
        //this.activityResults = res && res.activityAlert ? res.activityAlert : [];
      });
  }

  handleClick(activityResultObj, index){
      this.selectedActivityResult = JSON.stringify(this.activityResults[index]);
  }
}
