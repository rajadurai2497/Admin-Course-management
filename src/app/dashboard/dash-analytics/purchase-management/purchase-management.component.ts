import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

export interface PeriodicElement {
  id: number;
  name: string;
  course: string;
  email:string;
  phonenumber: number;
  paidamount: number;
  paidon: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen',course:'java',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'22/04/1996'},
  {id: 2, name: 'Hello',course:'c++',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'22/03/1996'},
  {id: 3, name: 'shyam',course:'C',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'22/02/1996'},
  {id: 4, name: 'Man',course:'java',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'22/03/1996'},
  {id: 5, name: 'amuthan',course:'Digital',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'20/04/1996'},
  {id: 6, name: 'kavitha',course:'java',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'25/04/1996'},
  {id: 7, name: 'Hydro',course:'java',email:'kavi@gmail',phonenumber: 907856435673,paidamount: 500, paidon:'26/04/1996'},
];

@Component({
  selector: 'app-purchase-management',
  templateUrl: './purchase-management.component.html',
  styleUrls: ['./purchase-management.component.scss']
})
export class PurchaseManagementComponent implements OnInit {
  fromDate: Date;
  toDate: Date;

  displayedColumns: string[] = ['id', 'name', 'course', 'email','phonenumber','paidamount','paidon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  filter()
  {
    console.log(moment(this.fromDate).format('DD/MM/YYYY'));
    console.log(moment(this.toDate).format('DD/MM/YYYY'));
    // console.log(new Date("26-04-1996"))
    // console.log(this.fromDate)
    // console.log(this.toDate)
  }

  constructor() { }

  ngOnInit() {
  }

}
