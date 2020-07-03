import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll (id) {
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }
}
