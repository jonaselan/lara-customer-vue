import actions from './actions';
import getters from './getters';
import mutations from './mutations';
// import state from './state';

export const customerModule = {
    // state,
    state: {
        customers: [],
        files: [],
        images: [],
    },
    mutations,
    actions,
    getters
};
