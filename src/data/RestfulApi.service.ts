import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchResult } from "../model/SearchResult";

@Injectable({
  providedIn: "root",
})
export class RestfulAPI {
  private API_URL =
    "http://api.themoviedb.org/3/search/movie?api_key=a5e1067cd76cc2dc41f63cc56c1e1705&query=";

  constructor(private http: HttpClient) {}

  searchForMovie(movieTitle: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(this.API_URL + movieTitle);
  }
}
