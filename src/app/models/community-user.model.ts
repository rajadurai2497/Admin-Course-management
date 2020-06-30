export interface CommunityUserModel {
  comunityUserList: ComunityUserList[];
  result: true;
}

export interface ComunityUserList {
  id: string;
 fullName: string;
  emailID: string;
  phoneNumber: string;
}
