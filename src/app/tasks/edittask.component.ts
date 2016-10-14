import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from '../shared/taskdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import  { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  taskId:string;
  taskTitle:string;
  taskStatus:string;
  private subscription: Subscription;
  status = ['pending','done'];
model:Task;// = {Id:'',Title:'',Status:''};
  constructor(private _datatask:TaskdataService,private _router:Router,private route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.subscription=this.route.params.subscribe(
      (params:any)=>{
          this.taskId=params["Id"];
          this.taskTitle=params["Title"];
          this.taskStatus=params["Status"];
          
          
      }
    );
    this._datatask.getTaskId(this.taskId).subscribe(
            (data:Task)=>{
              this.model=data;
              
            }
          );
  }
taskSubmit(){
    this._datatask.editTask(this.model).subscribe(
      (data:Task)=>{
       if(data!=null)
       this._router.navigate(['/allTask']);
       },
       function (error){console.log("error"+error)},
       function(){console.log("subscription done")}
    );
}
}
