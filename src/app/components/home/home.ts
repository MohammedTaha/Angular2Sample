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
      .subscribe( (res) => {
        this.activityResults = res && res.activityAlert ? res.activityAlert : [];
      });
  }

  handleClick(activityResultObj, index){
      this.selectedActivityResult = JSON.stringify(this.activityResults[index]);
  }
}
