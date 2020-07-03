export interface UserProfileModel {
    userProfileList: UserProfileList[];
    result: true;
  }

export interface UserProfileList {
   fullName: string;
    gender: string;
    birthDate: string;
    martailStatus: string;
    location: string;
  }
