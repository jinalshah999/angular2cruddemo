import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from '../shared/taskdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import  { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  selectedTask: Task;
  taskId:string;
  private subscription: Subscription;
status = ['pending','done'];
model = {Id:'',Title:'',Status:''};
  constructor(private _datatask:TaskdataService,private _router:Router,private route:ActivatedRoute) { 

  }

  ngOnInit() {
    
  }
taskSubmit(){
    this._datatask.addTask(this.model).subscribe(
      (data:Task)=>{
       if(data!=null)
       this._router.navigate(['/allTask']);
       },
       function (error){console.log("error"+error)},
       function(){console.log("subscription done")}
    );
   
}
}
