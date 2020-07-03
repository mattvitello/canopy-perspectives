import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      document.querySelector('#' + this.fragment + 'Section').scrollIntoView();
    }
  }

  scroll (id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
