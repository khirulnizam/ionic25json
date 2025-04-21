//filename tab1.page.ts
import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';

import { FormGroup, FormBuilder,FormControl} from '@angular/forms';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
    //save record process
    formtraining:any;
    urlinsert:any;
    jsondata:any;

  constructor(private ftraining: FormBuilder, 
    private http: HttpClient) {
    this.formtraining=this.ftraining.group(
      {//to generate json formatted data
        id:[''],
        trainingname:[''],
        contact:[''],
        description:[''],
      }
    );
  }//end constructor


  trainings:any[]=[];
  ngOnInit(){
    //fetch data from online db
    this.http.get<any[]>('http://localhost/tmsjsonphp/traininglist.php')
    .subscribe(
    response=>{
      this.trainings=response; //remove response.map
      console.log("Data : "+JSON.stringify(this.trainings));
    },
    error=>{
      //error
      console.log("Error: "+error);
    });
  }//end ngOnInit()




  //filename tab1.page.ts

  savetraining(){
    this.urlinsert="http://localhost/tmsjsonphp/inserttrainingjson.php";
    this.jsondata={
      'id':this.formtraining.value.id,
      'trainingname':this.formtraining.value.trainingname,
      'contact':this.formtraining.value.contact,
      'description':this.formtraining.value.description
    };//end jsondata
    console.log(this.jsondata);

    //push jsondata to server using HTTPCLIENT
    this.http.post(this.urlinsert, this.jsondata).subscribe(
      response => {
        console.log('Insert successful', response);
        alert('Insert successful'+ response);
      },
      error => {
        console.error('Insert fail', error);
        alert('Insert fail'+ error);
      }
    );
  }//end savetraining function

}
