import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {

  inputValue : string;
  pingResponse :string;
  constructor(private http: HttpClient) { 
       this.inputValue = "";
       this.pingResponse = "";
  }
  
  sendPing() {
    const URL = this.inputValue;
    const startTime = Date.now();
    this.http.get(URL).subscribe(
      (response) => {
        console.log('Status 200: Connection réussie');
        this.pingResponse = `Connection réussie en : ${Date.now() - startTime} ms`;
        this.inputValue = '';
      },
      (error) => {
        console.log('Impossible de joindre le serveur');
        this.pingResponse = 'Impossible de joindre le serveur';
        this.inputValue = '';
      }
    );
  }
  //https://jsonplaceholder.typicode.com/todos
  ngOnInit(): void {
  }

}
