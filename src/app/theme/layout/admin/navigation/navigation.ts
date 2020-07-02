import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavAdmin=[
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/dashboard/admin'
        },
        {
          id: 'course management',
          title: 'Course management',
          type: 'item',
          icon: 'feather icon-book',
          url: '/dashboard/admin/course-management'
        },
        {
          id: 'purchase management',
          title: 'Purchase management',
          type: 'item',
          icon: 'feather icon-shopping-cart',
          url: '/dashboard/admin/purchase-management'
        },
        {
          id: 'user management',
          title: 'User management',
          type: 'item',
          icon: 'feather icon-user',
          url: '/dashboard/admin/user-management'
        },
        {
          id: 'Community User',
          title: 'Community User',
          type: 'item',
          icon: 'feather icon-users',
          url: '/dashboard/admin/community-user'
        }
]

const NavLearner=[
  {
    id: 'mycourse',
    title: 'My Course',
    type: 'item',
    icon: 'feather icon-book',
    url: '/dashboard/learner/mycourse',
},
{
  id: 'contactus',
  title: 'Contact Us',
  type: 'item',
  icon: 'feather icon-phone-call',
  url: 'https://codedthemes-2.gitbook.io/gradient-able-angular/',
  target: true,
  external: true
},

]
          
@Injectable()
export class NavigationItem {
  public get() {
    return NavAdmin;
  }

  public getAdmin() {
    return NavAdmin;
  }

  public getLeaner() {
    return NavLearner;
  }
}
