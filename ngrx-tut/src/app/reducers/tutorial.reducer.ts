import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';

const initialState: Tutorial = {
    name: 'Initial Turorial',
    url: 'https://google.com'
};

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            const index = <number>action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}
