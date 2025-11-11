import { Component, signal ,Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { Menu } from "./menu/menu";
import { Nav } from "./nav/nav";
import { Aside } from "./aside/aside";
import { Footer } from "./footer/footer";
import { Section } from "./section/section";
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { Taskservice } from './taskservice';


@Component({
  selector: 'app-root',
  //
  imports: [RouterOutlet, Task, Menu, Nav, Aside, Footer, Section,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,PercentPipe,DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//
export class App {
  today = new Date();
  price = 1234.56;
percentage = 0.259;
 tasks: any[] = [];
 constructor(private taskService: Taskservice) {}
 ngOnInit() {
this.tasks = this.taskService.getTasks();
}

markAdd(){
  this.tasks.push({ id:'4',title: 'new task', done: false} )
}
deleTsk(ind:number){
  this.tasks.splice(ind ,1)
}
}

