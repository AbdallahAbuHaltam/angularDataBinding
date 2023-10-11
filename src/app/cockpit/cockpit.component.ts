import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  // newServerName:string='';
  newServerContent:string='';
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();



  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit(
      {serverName:nameInput.value,serverContent:this.newServerContent}
    );
  }
  onAddBluePrint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit(
      {serverName:nameInput.value,serverContent:this.newServerContent}
    );
  }
}
