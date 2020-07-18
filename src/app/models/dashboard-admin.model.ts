
export class dashboardEntity{
  dashboardTableEntityObj: dashboardTableEntity[] = [];
  dashboardTileEntityObj: dashboardTileEntity;
  paymentDate:string;

}

export class dashboardTableEntity {
  courseAmount: string;
  courseName: string;
  emailId: string;
  name: string;
  paymentDate: string;
  constructor(){}
}
export class dashboardTileEntity{
  activeLearners: string;
  completedLearners: string;
  totalCourse: string;
  totalLearners: string;
  constructor(){}
}