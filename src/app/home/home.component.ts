import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fragment: string;
  public stories: any[];
  public activeStory;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

    this.stories = [
      { 
        navTitle: 'Public Parks',
        title: 'Public Park Geurilla Safety',
        htmlText: '<p>Lorem ipsum dolor sit amet, delenit epicuri pertinacia has ut. Nostrum referrentur efficiantur in vis. Sit cu minim sapientem, adhuc quaerendum nec at. Graeco virtute in vix. Ad libris volutpat intellegat qui, in assum possit ancillae est. Pro eu inimicus corrumpit.</p>' +
          '<p>Ex eos quod dicit fierent, mei posse definitionem in, vel eros sensibus ex. Tempor interesset per ad. Posse aeque postea id eum, eu minimum ponderum conceptam qui, ne vis semper expetenda omittantur. Reque admodum invidunt ut pri, vel cu quot invidunt liberavisse, ne ius assum prompta moderatius. Ea has stet voluptatibus. Quo erat assueverit te. Cu qui error movet dictas, id per vero dolore consectetuer.</p>' +
          '<p>Appareat corrumpit intellegat et sed, id ludus regione noluisse mel. Integre habemus id sed, populo ancillae noluisse ut nam. Eos et dico epicuri vulputate, duo an vide dolorem constituam. Cu vix habeo utamur ocurreret. Cum definiebas repudiandae ne, minim iisque commodo in his.</p>',
        images: ['/assets/images/forest.jpg', '/assets/images/tree-bg.jpg', '/assets/images/tree2-bg.jpg']
      },
      { 
        navTitle: 'Outdoor Dwellers',
        title: 'Outdoor Dwellers (Homeless Camps)',
        htmlText: '<p>Lorem ipsum dolor sit amet, delenit epicuri pertinacia has ut. Nostrum referrentur efficiantur in vis. Sit cu minim sapientem, adhuc quaerendum nec at. Graeco virtute in vix. Ad libris volutpat intellegat qui, in assum possit ancillae est. Pro eu inimicus corrumpit.</p>' +
          '<p>Ex eos quod dicit fierent, mei posse definitionem in, vel eros sensibus ex. Tempor interesset per ad. Posse aeque postea id eum, eu minimum ponderum conceptam qui, ne vis semper expetenda omittantur. Reque admodum invidunt ut pri, vel cu quot invidunt liberavisse, ne ius assum prompta moderatius. Ea has stet voluptatibus. Quo erat assueverit te. Cu qui error movet dictas, id per vero dolore consectetuer.</p>' +
          '<p>Appareat corrumpit intellegat et sed, id ludus regione noluisse mel. Integre habemus id sed, populo ancillae noluisse ut nam. Eos et dico epicuri vulputate, duo an vide dolorem constituam. Cu vix habeo utamur ocurreret. Cum definiebas repudiandae ne, minim iisque commodo in his.</p>',
        images: ['/assets/images/forest.jpg', '/assets/images/tree2-bg.jpg', '/assets/images/tree4-bg.jpg']
      },
      { 
        navTitle: 'Green-Up',
        title: 'Show up and Green-Up',
        htmlText: '<p>Lorem ipsum dolor sit amet, delenit epicuri pertinacia has ut. Nostrum referrentur efficiantur in vis. Sit cu minim sapientem, adhuc quaerendum nec at. Graeco virtute in vix. Ad libris volutpat intellegat qui, in assum possit ancillae est. Pro eu inimicus corrumpit.</p>' +
          '<p>Ex eos quod dicit fierent, mei posse definitionem in, vel eros sensibus ex. Tempor interesset per ad. Posse aeque postea id eum, eu minimum ponderum conceptam qui, ne vis semper expetenda omittantur. Reque admodum invidunt ut pri, vel cu quot invidunt liberavisse, ne ius assum prompta moderatius. Ea has stet voluptatibus. Quo erat assueverit te. Cu qui error movet dictas, id per vero dolore consectetuer.</p>' +
          '<p>Appareat corrumpit intellegat et sed, id ludus regione noluisse mel. Integre habemus id sed, populo ancillae noluisse ut nam. Eos et dico epicuri vulputate, duo an vide dolorem constituam. Cu vix habeo utamur ocurreret. Cum definiebas repudiandae ne, minim iisque commodo in his.</p>',
        images: ['/assets/images/tree2-bg.jpg', '/assets/images/tree-bg.jpg', '/assets/images/forest.jpg']
      }
    ];
    this.activeStory = this.stories[0];
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      document.querySelector('#' + this.fragment + 'Section').scrollIntoView();
    } else {
      window.scrollTo(0,0);
    }
  }

  scroll (id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  selectStory(index) {
    this.activeStory = this.stories[index];
  }
}
