import { Component, Input, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Movie } from "../model/Movie";

@Component({
  selector: "search-result-item",
  templateUrl: "./searchresultitem.component.html",
})
export class SearchResultItem {
  @Input()
  movie: Movie;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "black" })
    );
  }
}
