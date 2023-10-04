import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newServerName:string='';
  newServerContent:string='';
  serverElements=[];

  onAddServer(){
    this.serverElements.push(
      {name : this.newServerName, content : this.newServerContent,type:'server'}
    );
  }
  onAddBluePrint(){
    this.serverElements.push(
      {name : this.newServerName, content : this.newServerContent,type:'blueprint'}
    );
  }
}
