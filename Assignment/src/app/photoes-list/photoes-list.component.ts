import { RestService } from './../Service/rest.service';
import { Component, OnInit } from '@angular/core';
import { TypeCheckCompiler } from '@angular/compiler/src/view_compiler/type_check_compiler';

@Component({
  selector: 'app-photoes-list',
  templateUrl: './photoes-list.component.html',
  styleUrls: ['./photoes-list.component.css']
})
export class PhotoesListComponent implements OnInit {
response:any;


  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
this.rest.getdata().subscribe(data=>{
this.response=data;
for(let i=0;i<this.response.length;i++){
// debugger;
  this.response[i].comparein=false;

}

console.log(this.response);
})
  }
  checkComp(){

  }
click(i){
  // debugger
  if(this.response[i].comparein==false){
    this.response[i].comparein=true;
  }
  else{
    this.response[i].comparein=false;
  }

}
}
