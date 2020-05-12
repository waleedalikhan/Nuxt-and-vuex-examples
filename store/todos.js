export const state = () => ({
	todos: []
});

export const actions = {
	async getTodos({ commit }) {
		const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
		commit('getAllTodos', response.data.slice(1, 51));
	}
};

export const mutations = {
	increaseCounter(state) {
		state.counter++;
	},
	getAllTodos(state, todo) {
		state.todos = todo;
	},
	addTodo(state, todo) {
		const data = {
			"userId": 10,
			"id": ++state.id,
			"title": todo,
			"completed": false
		};
		state.todos.push(data);
	},
	removeTodo(state, payload) {
		state.todos.splice(payload, 1);
	}
};

export const getters = {
	checkTodos: state => {
		return state.todos.length;
	}
};

