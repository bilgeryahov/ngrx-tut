import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TutorialService } from '../../services/tutorial.service';

import { Tutorial } from '../../models/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit, OnDestroy {

  tutorialsSubscription: Subscription;
  tutorials: Tutorial[];

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.tutorials = this.tutorialService.getTutorials();
    this.tutorialsSubscription = this.tutorialService.tutorialsModified.subscribe(
      () => this.tutorials = this.tutorialService.getTutorials()
    );
  }

  ngOnDestroy() {
    this.tutorialsSubscription.unsubscribe();
  }

  delTutorial(index: number) {
    this.tutorialService.removeTutorial(index);
  }

}
