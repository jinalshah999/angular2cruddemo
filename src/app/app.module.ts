import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskdataService } from './shared/taskdata.service';
import { HeaderComponent } from './header.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { EdittaskComponent } from './tasks/edittask.component';
import { FilterPipe } from './shared/filter.pipe';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HeaderComponent,
    AddtaskComponent,
    EdittaskComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
