export const state = () => ({
	links: []
});


export const mutations = {
	addLink(state, payload) {
		state.links.push(payload);
	},
	removeLink(state, payload) {
		state.links.splice(payload, 1);
	},
	getAllLinks(state, link) {
		state.links = link;
	}
};