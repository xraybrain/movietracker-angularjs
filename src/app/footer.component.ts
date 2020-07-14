import { Component } from "@angular/core";

@Component({
  selector: "footer",
  templateUrl: "./footer.component.html",
})
export class Footer {
  year: number = (new Date()).getFullYear();
}
