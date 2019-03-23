import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export const authModule = {
    state,
    // state: {
    //     customers: [],
    //     files: [],
    //     images: [],
    // },
    mutations,
    actions,
    getters
};
