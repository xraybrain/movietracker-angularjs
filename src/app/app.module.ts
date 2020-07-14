import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Footer } from "./footer.component";
import { MainNavbar } from "./mainnavbar.component";
import { SearchBar } from "./searchbar.component";
import { FormsModule } from "@angular/forms";
import { SearchResultList } from "./searchresultlist.component";
import { SearchResultItem } from "./searchresultitem.component";
import { Homepage } from "./homepage.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from "@angular/common/http";
import { AboutPage } from "./about.component";
import { RouterModule } from "@angular/router";

const routes = RouterModule.forRoot([
  { path: "dashboard", component: Homepage },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "about", component: AboutPage },
]);

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    MainNavbar,
    SearchBar,
    SearchResultList,
    SearchResultItem,
    Homepage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
