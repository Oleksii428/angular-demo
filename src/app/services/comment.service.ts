import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private HttpClient: HttpClient) {

  }

  getAll(): Observable<IComment[]> {
    return this.HttpClient.get<IComment[]>(urls.comments)
  }
}
