import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TutorialService } from '../../services/tutorial.service';

import { Tutorial } from '../../models/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials$: Observable<Tutorial[]>;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.tutorials$ = this.tutorialService.tutorialsModifiedAsync;
  }

  delTutorial(index: number) {
    this.tutorialService.removeTutorial(index);
  }

}
