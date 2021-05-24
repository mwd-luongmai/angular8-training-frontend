import { Component, OnInit, Input } from '@angular/core'
import { MatTableDataSource } from '@angular/material'

@Component({
  selector: 'app-table-basic-responsive',
  templateUrl: './table-basic-responsive.component.html',
  styleUrls: ['./table-basic-responsive.component.scss'],
})
export class TableBasicResponsiveComponent implements OnInit {
  displayedColumns = []
  columns = []

  @Input()
  dataSource: MatTableDataSource<any>

  @Input()
  dataColumn: { displayedColumns: any[]; columnsConfig: any[] }

  // {
  //   'displayedColumns' : ['position', 'name'],
  //   'columnsConfig' : [
  //     {
  //       key : "position",
  //       name : "Position"
  //     },
  //     {
  //       key : "name",
  //       name : "Name"
  //     }
  //   ]
  // };

  constructor() {}

  ngOnInit() {
    this.displayedColumns = this.dataColumn.displayedColumns
    this.columns = this.dataColumn.columnsConfig
  }
}
