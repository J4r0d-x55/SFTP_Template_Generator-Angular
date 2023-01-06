import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  submitted = false;
  userData:any={};
  selectedLangage: string | undefined;
  getData(data:NgForm)
  {
    console.warn(data);
    this.userData=data
    this.submitted = true;
    
  } 
  constructor() { }

  ngOnInit(): void {
    
  }

}
