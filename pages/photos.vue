<template>
  <v-container>
    <v-form>
      <v-text-field type="text" label="Search anything..." v-model="search"></v-text-field>
      <v-btn @click="searchPhoto" class="mr-5">search!</v-btn>
      <v-btn @click="addPhoto">Add Photo</v-btn>
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
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Image Description" v-model="imgForm.alt_description" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Image Url" v-model="imgForm.urls.full"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Download Url"
                  hint="enter the same url of image"
                  v-model="imgForm.links.download"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addPhotoToStore">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      dialog: false,
      imgForm: {
        alt_description: "",
        urls: {
          full: ""
        },
        links: {
          download: ""
        }
      }
    };
  },
  methods: {
    searchPhoto() {
      this.$store.commit("photos/addLocation", this.search);
      this.$store.dispatch("photos/getPhotos");
    },
    addPhoto() {
      this.dialog = !this.dialog;
    },
    addPhotoToStore() {
      const imgData = this.clone(this.imgForm);
      this.$store.commit("photos/addNewImg", imgData);
      this.dialog = false;
    },
    clone(obj) {
      if (null == obj || "object" != typeof obj) return obj;
      var copy = obj.constructor();
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
      }
      return copy;
    }
  }
};
</script>

<style>
</style>