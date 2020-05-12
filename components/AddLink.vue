<template>
  <v-container>
    <v-form>
      <v-text-field type="text" label="Enter Link Name" v-model="form.name"></v-text-field>
      <v-text-field type="text" label="Enter Link Address" v-model="form.address"></v-text-field>
      <v-btn @click="addLinks">add Link</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: undefined,
        address: undefined
      }
    };
  },

  methods: {
    addLinks(e) {
      e.preventDefault();
      this.$store.commit("links/addLink", this.form);
    }
  }
};
</script>

<style>
</style>