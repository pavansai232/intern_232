import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  //selector: '.app-servers',
selector:'app-servers',

//template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewserver=false;
  servercretionstatus='no server was created';
  servername='Testserver';
  servercreated=false;
  servers=['Testserver','Testserver 2']
  constructor() { 
    setTimeout(() => {
      this.allownewserver = true;
    }, 2000);
  }
  ngOnInit(): void {
      
  }
  oncreateserver(){
    this.servercreated=true;
    this.servers.push(this.servername);
    this.servercretionstatus='server was created name is'+ this.servername;
  }
  onUpdateservername(event:Event){
   this.servername=(<HTMLInputElement>event.target).value;
  }

}
