import { Component, Inject, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  terms;
  terms$ = new Subject();
  constructor(@Inject('wiki') private wiki){}

  ngOnInit(){
    console.log(this.terms$);
    this.wiki.search(this.terms$)
              .subscribe(res => this.terms = res);
  }

  // search(term){
  //   this.wiki.search(term)
  //             .subscribe((results) => {
  //               console.log(results);
  //               this.terms = results;
  //             });
  // }
}
