import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
  ELEMENT_DATA = [
    { title: 'Cesars chiper', date: '20.10.2018', address: '0xedf365468f1dda25135d0321e143a31bfe760876' },
    { title: 'Sha256', date: '25.10.2018', address: '0xedf365468f1dda25135d0321e143a31bfe760876' },
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['title', 'date', 'address', 'action'];

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
