import { Component, OnInit } from '@angular/core';
import { ColumnType } from 'igniteui-angular';
import { Employee, employeesData } from './localData';

@Component({
  selector: 'app-thing-grid',
  templateUrl: './thing-grid.component.html',
  styleUrls: ['./thing-grid.component.scss']
})
export class ThingGridComponent implements OnInit {
  public localData: Employee[] = [];
  public showSidebar = false;

  public dateFormatter = (date: Date) => date.toLocaleDateString();

  ngOnInit(): void {
    this.localData = employeesData;
  }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
