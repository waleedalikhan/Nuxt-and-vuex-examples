<template>
  <v-container>
    <AddTodo />
    <v-row align="start">
      <v-col md="4" cols="12" class="mb-5" v-for="todo in $store.state.todos.todos" :key="todo.id">
        <v-card>
          <v-card-text>{{ todo.title }}</v-card-text>
          <v-card-actions>
            <v-btn text @click="deleteTodo">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddTodo from "@/components/AddTodo";

export default {
  components: {
    AddTodo
  },
  computed: {},
  created() {
    this.$store.dispatch("todos/getTodos");
  },
  methods: {
    deleteTodo() {
      this.$store.commit("todos/removeTodo");
    }
  }
};
</script>
