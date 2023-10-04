import { Component } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName:string='';
  newServerContent:string='';



  onAddServer(){
    // this.serverElements.push(
    //   {name : this.newServerName, content : this.newServerContent,type:'server'}
    // );
  }
  onAddBluePrint(){
    // this.serverElements.push(
    //   {name : this.newServerName, content : this.newServerContent,type:'blueprint'}
    // );
  }
}
