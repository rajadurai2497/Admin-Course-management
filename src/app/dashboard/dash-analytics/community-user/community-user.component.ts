import { Component, OnInit, ViewChild } from '@angular/core';
import { CommunityUserService } from 'src/app/services/community-user.service';
import { ComunityUserList } from 'src/app/models/community-user.model';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-community-user',
  templateUrl: './community-user.component.html',
  styleUrls: ['./community-user.component.scss']
})
export class CommunityUserComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  displayedColumns: string[];
  communityUser: ComunityUserList[]=[];
  dataSource = new MatTableDataSource<ComunityUserList>();

  constructor(private readonly _communityUserService: CommunityUserService) { }

  ngOnInit(): void {
    this.displayedColumns = ['id', 'fullName', 'emailId', 'phoneNumber'];
    this.getAllCommunityUser();
  }

  public getAllCommunityUser(): void {
    this._communityUserService.getAllCommunityUser().then((data) => {
      if(data && data.result){
        this.communityUser = data.comunityUserList;
        this.dataSource=new MatTableDataSource<ComunityUserList>(this.communityUser);
        this.dataSource.paginator = this.paginator;
      }
      
    });
  }
}



