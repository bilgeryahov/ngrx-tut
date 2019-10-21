import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';

export const ADD_TUTORIAL = 'ADD_TUTORIAL';
export const REMOVE_TUTORIAL = 'REMOVE_TUTORIAL';

export class AddTutorial implements Action {
    readonly type: string = ADD_TUTORIAL;
    
    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type: string = REMOVE_TUTORIAL;
    
    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial;
