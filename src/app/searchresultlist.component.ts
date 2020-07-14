import { Component, Input } from "@angular/core";
import { Movie } from "../model/Movie";

@Component({
  selector: "search-result-list",
  templateUrl: "./searchresultlist.component.html",
})
export class SearchResultList {
  @Input()
  isSearching: boolean;

  @Input()
  movies: Movie[];
}
