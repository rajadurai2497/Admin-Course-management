import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserManagementComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'name', 'email', 'mobilenumber','city','state','country','username','password'];
  expandedElement: PeriodicElement | null;

  constructor() { }

  ngOnInit() {
  
  }

}
export interface PeriodicElement {
  id: number;
  name: string;
  email: string;
  mobilenumber:number;
  city:string;
  state:string;
  country:string;
  username:string;
  password:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Hydrogen1',
    email:'kavi@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'mtm',
    state:'TN',
    country:'india',
    username:'kavi',
    password:'hello123@'
  }, {
    id: 2,
    name: 'Hydrogen2',
    email:'kavi@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'mtm',
    state:'TN',
    country:'india',
    username:'kavi',
    password:'hello123@'
  },
  {
    id: 3,
    name: 'Hydrogen3',
    email:'kavi@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'mtm',
    state:'TN',
    country:'india',
    username:'vijay',
    password:'fjjhfdh@'
  },
  {
    id: 4,
    name: 'Hydrogen4',
    email:'jk@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'ngl',
    state:'TN',
    country:'india',
    username:'hji',
    password:'tyyy123@'
  }
];