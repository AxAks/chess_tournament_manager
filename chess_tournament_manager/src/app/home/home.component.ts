import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from "../commons/commons.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  pageTitle!: string;
  constructor(private router: Router, private service: CommonService) {
  }

  ngOnInit(): void {
  }
}
