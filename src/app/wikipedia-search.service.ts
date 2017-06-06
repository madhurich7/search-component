import { Injectable } from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp:Jsonp) { }
  search(term:Observable<string>, debounceMSec = 350){
    return term
        .debounceTime(debounceMSec)
        .distinctUntilChanged()
        .flatMap(term => this.rawsearch(term))
  }
  
  rawsearch(term){
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
    //res.json()--> returns an array
    //0 index element is the typed string in the input
    //1 inedx is an array of ten elements some long text
    //2 index is an array of ten elements that are matching strings found in wiki
    //3 index is an array of ten elements containing the urls of the matching strings found in wiki
                .map((res) => res.json()[3]);
  }

}
