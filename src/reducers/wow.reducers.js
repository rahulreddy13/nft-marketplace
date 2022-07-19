import { AUTHENTICATED } from '../actions/wow';

const initialState = {
  isAuthenticated : false
};

export default function ourTeamReducer(state = initialState, { type , payload}) {
    switch (type) {
        case AUTHENTICATED:
          return Object.assign({}, state, {
              isAuthenticated: payload.isAuthenticated
          });
        default:
            return state;
    }
}
  