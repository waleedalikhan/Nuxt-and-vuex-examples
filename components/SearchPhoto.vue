<template>
  <v-container></v-container>
</template>

<script>
export default {
  data() {
    return {
      location: ""
    };
  },

  methods: {
    searchPhoto() {
      this.$store.commit("photos/addLocation", this.location);
    }
  }
};
</script>

<style>
</style>