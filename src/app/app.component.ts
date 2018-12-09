import { Component } from '@angular/core';
import {AppsyncService} from './service/appsync.service';
import {Application} from './model/application-model';
import {queryList} from './service/graphql/queries/recipe-query';
import {Profile} from './model/profile-model';
import {Mail} from './model/mail-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  mails: Mail[];
  applications: Application[];
  profiles: Profile[];

  constructor(private appsyncService: AppsyncService) {}

  query(): void {
    this.appsyncService.query(queryList).subscribe(
      x => {
        this.showMails(x['data']['listMail']['items']);
        this.showApplications(x['data']['listApplications']['items']);
        this.showProfiles(x['data']['listProfiles']['items']);
      },
      (error) => console.log(error)
    );
  }

  private showMails(mails: Mail[]): void {
    this.mails = mails;
  }

  private showApplications(apps: Application[]): void {
    this.applications = apps;
  }

  private showProfiles(profiles: Profile[]): void {
    this.profiles = profiles;
  }
}
