export interface UserManagementModel {
  allUserList: AllUserList[];
  result: true;
}

export interface AllUserList {
  userId: string;
  userName: string;
  passWord: string;
  name: string;
  emailId: string;
  phoneNumber: string;
  city: string;
}
