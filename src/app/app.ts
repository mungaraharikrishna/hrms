import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from "./components/sidenav/sidenav";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidenav, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hrms';
  currentYear: number = new Date().getFullYear();
}
