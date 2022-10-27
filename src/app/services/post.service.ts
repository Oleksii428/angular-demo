import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../configs";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient: HttpClient) {

  }

  getAll(): Observable<IPost[]> {
    return this.HttpClient.get<IPost[]>(urls.posts)
  }

  getById(id: number): Observable<IPost> {
    return this.HttpClient.get<IPost>(urls.posts + `/${id}`)
  }
}
