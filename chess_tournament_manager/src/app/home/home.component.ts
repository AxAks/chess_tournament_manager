import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  pageTitle!: string;
  PageTitleEvent!: string
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.titleHandler(this.PageTitleEvent='Accueil')
  }

  titleHandler(PageTitleEvent: string) {
    this.pageTitle = PageTitleEvent
  }
}
