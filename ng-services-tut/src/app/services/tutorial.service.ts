import { Subject } from 'rxjs/Subject';

import { Tutorial } from '../models/tutorial.model';

export class TutorialService {

    public tutorialsModified = new Subject<null>();

    private tutorials: Tutorial[] = [
        {
            name: 'Initial Tutorial',
            url: 'http://google.com'
        }
    ];

    public getTutorials(): Tutorial[] {
        // slice() returns a new array, which can be edited, without modifying the original one.
        return this.tutorials.slice();
    }

    public addTutorial(tutorial: Tutorial): void {
        this.tutorials.push(tutorial);
        // Manually handle updates.
        this.tutorialsModified.next();
    }

    public removeTutorial(index: number): void {
        // Remove the element without mutating the array.
        this.tutorials = [...this.tutorials.slice(0, index), ...this.tutorials.slice(index + 1)];
        // Manually handle updates.
        this.tutorialsModified.next();
    }
}
