import { Component } from '@angular/core';

import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private tutorialService: TutorialService) {}

  addTutorial(name, url) {
   this.tutorialService.addTutorial({ name, url });
  }

}
