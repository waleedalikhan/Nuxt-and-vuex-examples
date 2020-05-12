export const state = () => ({
	todos: []
});

export const actions = {
	async getTodos({ commit }) {
		const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
		commit('getAllTodos', response.data);
	}
};

export const mutations = {
	increaseCounter(state) {
		state.counter++;
	},
	getAllTodos(state, todo) {
		state.todos = todo;
		console.log(state.todos);
	},
	addTodo(state, todo) {
		const data = {
			"userId": 10,
			"id": ++state.id,
			"title": todo,
			"completed": false
		};
		state.todos.push(data);
		console.log(todo);
	},
	removeTodo(state, payload) {
		state.todos.splice(payload, 1);
		console.log(payload);
	}
};

export const getters = {
	checkTodos: state => {
		return state.todos.length;
	}
};

