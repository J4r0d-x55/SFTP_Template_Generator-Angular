import { Component, OnInit,ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements AfterViewInit {

  submitted = false;
  userData:any={};
  selectedLangage: string | undefined;
  // textarea: any;
  getData(data:NgForm)
  {
    console.warn(data);
    this.userData=data
    this.submitted = true;
    
  } 

  constructor() {     
  }
  
  @ViewChild('textarea')
  textarea!: ElementRef<any>;
  ngAfterViewInit() {
    this.saveTextareaContent();
  }
  saveTextareaContent() {
    const textareaContent = this.textarea.nativeElement.value;
    const file = new Blob([textareaContent], { type: 'text/plain' });
    FileSaver.saveAs(file, 'template.txt');
  }
  
}
