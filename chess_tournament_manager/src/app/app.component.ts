import {Component, OnInit} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {Router} from "@angular/router";
import {CommonService} from "./commons/commons.service";


registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title!: string;
  pageTitle!: string;

  constructor(private router: Router, private service: CommonService) {
  }

  ngOnInit() {
    this.title = 'Chess Tournament Manager';
    this.service.pageTitle$.subscribe((res: string) => this.pageTitle = res)
  };

}
