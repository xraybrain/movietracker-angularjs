import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "search-bar",
  templateUrl: "./searchbar.component.html",
})
export class SearchBar {
  @Output()
  searchForMovie = new EventEmitter<string>();

  movieTitle: string = "";

  handleSearch() {
    // movieTitle must not be empty
    if (this.movieTitle === "") return alert("movie title is required");

    // emit searchForMovie event
    this.searchForMovie.emit(this.movieTitle);
    this.movieTitle = "";
  }
}
