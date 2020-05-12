<template>
  <v-container>
    <v-form>
      <v-text-field type="text" label="Add Todo" v-model="title"></v-text-field>
      <v-btn @click="addTodos">add todo</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },

  methods: {
    addTodos() {
      this.$store.commit("todos/addTodo", this.title);
    }
  }
};
</script>

<style>
</style>