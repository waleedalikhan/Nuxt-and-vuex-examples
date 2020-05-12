<template>
  <v-container>
    <v-form>
      <v-text-field type="text" label="Search anything..." v-model="search"></v-text-field>
      <v-btn @click="searchPhoto">search!</v-btn>
    </v-form>
    <h1>{{ search }}</h1>
    <v-row>
      <v-col md="4" cols="12" v-for="photo in $store.state.photos.photos" :key="photo.id">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="photo.urls.full"></v-img>
          <v-card-title style="font-size: 19px;" class="my-5">{{ photo.alt_description }}</v-card-title>

          <v-card-subtitle class="pb-0">Number: {{ photo.id }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>

            <v-btn color="orange" text>
              <a :href="photo.links.download" target="_blank">Explore Image</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchPhoto() {
      this.$store.commit("photos/addLocation", this.search);
      this.$store.dispatch("photos/getPhotos");
    }
  }
};
</script>

<style>
</style>