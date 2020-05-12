<template>
  <v-container>
    <AddLink />
    <v-row align="start">
      <v-col md="4" cols="12" class="mb-5" v-for="link in $store.state.links.links" :key="link.id">
        <a :href="link.address" target="_blank" class="link">{{ link.name }}</a>
        <v-btn text @click="deleteLink">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddLink from "@/components/AddLink";

export default {
  components: {
    AddLink
  },
  computed: {},
  created() {
    // if ((this.$store.state.todos.todos = !"")) {
    //   this.$store.dispatch("todos/getTodos");
    // }
  },
  methods: {
    deleteLink() {
      this.$store.commit("links/removeLink");
    }
  }
};
</script>

<style scoped>
.link {
  background: #272727;
  text-decoration: none;
  color: #fff;
  padding: 0.6rem 1.5rem;
  border-radius: 3px;
  text-transform: uppercase;
}
</style>