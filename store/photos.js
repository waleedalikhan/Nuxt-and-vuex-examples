export const state = () => ({
	photos: [],
	location: ""
});

export const mutations = {
	addLocation(state, locationName) {
		state.location = locationName;
	},
	getAllPhotos(state, photo) {
		state.photos = photo;
	},
	addNewImg(state, newImg) {
		state.photos.push(newImg);
		console.log(newImg);

	}
};

export const actions = {
	async getPhotos({ commit, state }) {
		const response = await this.$axios.get(`https://api.unsplash.com/search/photos?query=${state.location}&client_id=F7XleKXRkso2HyYWSueg18eYlNwrl_IpXqL0jtn2XRo`);
		commit("getAllPhotos", response.data.results);

		console.log(response.data.results);

	},
};




