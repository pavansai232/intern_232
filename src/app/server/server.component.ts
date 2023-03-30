import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
      color:white;
    }`]
})
export class servercomponent{
  serverID: number = 10;
  serverstatus: string ='offline';
  constructor(){
    this.serverstatus=Math.random() > 0.5 ? 'online' : 'offline';  
  }
  getserverstatus(){
   return this.serverstatus;
  }
  getcolor(){
    return this.serverstatus === 'online' ? 'green' : 'red';
  }
}