import { Component } from "@angular/core";
import { Movie } from "../model/Movie";
import { RestfulAPI } from "../data/RestfulApi.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
})
export class Homepage {
  // a flag to keep track of when app is searching for movie
  isSearching: boolean = false;
  movies: Movie[];

  constructor(
    public restAPI: RestfulAPI,
    private spinnerService: NgxSpinnerService
  ) {
    this.movies = [];
  }

  handleSearch(movieTitle: string) {
    this.movies = [];
    // spinner
    this.spinnerService.show();
    // make API request for movie
    this.restAPI.searchForMovie(movieTitle).subscribe((rawData) => {
      this.isSearching = false;
      rawData.results.forEach((m) => {
        // filter out movies without poster_path
        if (m.poster_path) {
          m.poster_path = `https://image.tmdb.org/t/p/w500${m.poster_path}`;
          this.movies.push(m);
        }
      });
      this.spinnerService.hide();
    });
  }
}
