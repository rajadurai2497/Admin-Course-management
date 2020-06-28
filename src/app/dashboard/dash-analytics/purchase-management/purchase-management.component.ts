import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

export interface PurchaseElement {
  id: number;
  name: string;
  course: string;
  email: string;
  phonenumber: number;
  paidamount: number;
  paidon: string;
}
const ELEMENT_DATA: PurchaseElement[] = [
  { id: 1, name: 'Hydrogen', course: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '22/04/2020' },
  { id: 2, name: 'Hello', course: 'c++', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '14/04/2020' },
  { id: 3, name: 'shyam', course: 'C', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '11/02/2020' },
  { id: 4, name: 'Man', course: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '02/03/2020' },
  { id: 5, name: 'amuthan', course: 'Digital', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '20/12/2019' },
  { id: 6, name: 'kavitha', course: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '25/11/2019' },
  { id: 7, name: 'Hydro', course: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '26/12/2019' },
];

@Component({
  selector: 'app-purchase-management',
  templateUrl: './purchase-management.component.html',
  styleUrls: ['./purchase-management.component.scss']
})
export class PurchaseManagementComponent implements OnInit {
  fromDate: Date = null;
  toDate: Date = null;

  displayedColumns: string[] = ['id', 'name', 'course', 'email', 'phonenumber', 'paidamount', 'paidon'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  filter() {
    let filteredData: PurchaseElement[] = [];
    const fromDate = this.fromDate ?
      moment(moment(this.fromDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    const toDate = this.toDate ?
      moment(moment(this.toDate).format('DD/MM/YYYY'), 'DD/MM/YYYY') : null;
    if (fromDate && toDate) {
      ELEMENT_DATA.forEach(element => {
        const paidOn = moment(element.paidon, "DD/MM/YYYY");
        if (paidOn && paidOn.isBetween(fromDate, toDate)) {
          filteredData.push(element);
        }
      });
      this.dataSource = new MatTableDataSource(filteredData);
    } else {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
  }

}
