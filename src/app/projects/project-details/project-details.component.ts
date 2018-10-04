import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit {

  ELEMENT_DATA = [
    { action: 'create', date: '2.10.2018', address: '0xedf365468f1dda25135d0321e143a31bfe760876' },
    { action: 'application', date: '5.10.2018', address: '0xedf365468f1dda25135d0321e143a31bfe760876' },
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['action', 'date', 'address'];

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
