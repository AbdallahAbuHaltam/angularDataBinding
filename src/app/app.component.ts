import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  serverElements=[{
    type:'server',
    name:'TestServer',
    content:'A Test only'
  }];

  
  onServerAdded(serverData:{serverName:string,serverContent:string}){
     this.serverElements.push(
       {name : serverData.serverName, content : serverData.serverContent,type:'server'}
     );
  }
  onBlueprintAdded(blueprintrData:{serverName:string,serverContent:string}){
     this.serverElements.push(
       {name : blueprintrData.serverName, content : blueprintrData.serverContent,type:'blueprint'}
     );
  }
}
