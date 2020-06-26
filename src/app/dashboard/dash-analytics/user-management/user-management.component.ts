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
  columnsToDisplay = ['Id', 'Name', 'Email', 'MobileNumber','City','State','Country','User Name','Password'];
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
    name: 'Hydrogen',
    email:'kavi@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'mtm',
    state:'TN',
    country:'india',
    username:'kavi',
    password:'hello123@'
  }, {
    id: 2,
    name: 'Hydrogen',
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
    name: 'Hydrogen',
    email:'kavi@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'mtm',
    state:'TN',
    country:'india',
    username:'kavi',
    password:'hello123@'
  },
  {
    id: 4,
    name: 'Hydrogen',
    email:'kavi@getMaxListeners.com',
    mobilenumber:9067894666,
    city:'mtm',
    state:'TN',
    country:'india',
    username:'kavi',
    password:'hello123@'
  }
];