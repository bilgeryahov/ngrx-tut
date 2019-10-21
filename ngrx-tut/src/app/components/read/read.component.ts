import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Tutorial } from './../../models/tutorial.model';
import { AppState } from './../../app.state';
import { Observable } from 'rxjs';
import * as TutorialActions from './../../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial');
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {
  }

}
