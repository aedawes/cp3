//state---------------------------------------------------------------
export const state = () => {
    return {
        form: {}
    }
}

//mutations------------------------------------------------------------
export const mutations = {
    setForm (state, form) {
        state.form = form
    }
}

//actions--------------------------------------------------------------
export const actions = {
    //login
    async setForm ({ commit, state }, form ) {
        commit('setForm', form)
    },
}