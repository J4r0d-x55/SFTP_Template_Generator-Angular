import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SFTP_form';
  submitted = false;
  userData:any={};
  selectedLangage: string | undefined;
  getData(data:NgForm)
  {
    console.warn(data);
    this.userData=data
    this.submitted = true;
    
  } 
}

