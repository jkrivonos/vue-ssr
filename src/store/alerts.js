export default {
	namespaced: true,
	state: {
		messages: []
	},
	getters: {
		all: state => state.messages,
	},
	mutations: {
		add(state, message){
			state.messages.push(message);
		}
	},
	actions: {
		add({ commit }, { type, text }){
			// id, autoremove after n sec
			commit('add', { type, text });
		}
	}
}