import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppsyncService {
  constructor() {
    Amplify.configure(environment.amplify.AppSync);
  }
  public query(query: string): Observable<object> {
    return from<object>(API.graphql(graphqlOperation(query))).pipe(
      map(result => result)
    );
  }
}

