import { Component } from "@angular/core";
import { stringify } from "querystring";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent_josh {
  title = "app";
  rootName = "Joshua";

  onNameChanged(newName: string) {
    this.rootName = newName;
  }
}
