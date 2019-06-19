import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Person, SearchService } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  sub: Subscription;
  searchResults: Person[];
  constructor(private searchService: SearchService,private route:ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
    if (params['term']) {
      this.query = decodeURIComponent(params['term']);
      this.search();
    }
  });
  }

  search():void{
    this.searchService.search(this.query).subscribe(
    data => { this.searchResults = data; },
    error => console.log(error)
  );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
