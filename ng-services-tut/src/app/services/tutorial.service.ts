import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Tutorial } from '../models/tutorial.model';
import { Observable } from 'rxjs';

export class TutorialService {

    public tutorialsModifiedAsync: Observable<Tutorial[]>;
    private tutorialsModified: BehaviorSubject<Tutorial[]>;
    private tutorials: Tutorial[] = [
        {
            name: 'Initial Tutorial',
            url: 'http://google.com'
        }
    ];

    constructor() {
        this.tutorialsModified = new BehaviorSubject<Tutorial[]>(this.tutorials);
        this.tutorialsModifiedAsync = this.tutorialsModified.asObservable();
    }

    public addTutorial(tutorial: Tutorial): void {
        this.tutorials.push(tutorial);
        this.tutorialsModified.next(this.tutorials);
    }

    public removeTutorial(index: number): void {
        this.tutorials = [...this.tutorials.slice(0, index), ...this.tutorials.slice(index + 1)];
        this.tutorialsModified.next(this.tutorials);
    }
}
