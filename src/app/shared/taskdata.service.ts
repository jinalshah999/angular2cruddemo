import { Injectable } from '@angular/core';
import { Task } from '../tasks/task';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TaskdataService {
private allTasks:Task[]=[];
  constructor(private _http:Http) { }

getAllTasks(){
  return this._http.get("https://rkdemotask.herokuapp.com/Tasks")
  .map((response:Response)=>response.json());
  
  }
  deleteTask(item:Task){
        
      let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     return this._http.delete("https://rkdemotask.herokuapp.com/Tasks/"+item.Id,
                      options)
                    .map((response:Response)=>response.json());   
  }
  addTask(item:Task){
       let body = JSON.stringify(item);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.post("https://rkdemotask.herokuapp.com/Tasks/",
                     body, options)
                    .map((response:Response)=>response.json());
  }
  getTaskId(id:any){
    return this._http.get("https://rkdemotask.herokuapp.com/Tasks/"+id)
  .map((response:Response)=>response.json());
  }
  editTask(item:Task){
    let body = JSON.stringify(item);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.put("https://rkdemotask.herokuapp.com/Tasks/"+item.Id,
                     body, options)
                    .map((response:Response)=>response.json());
  }
}
