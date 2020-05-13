<template>
  <v-card>
    <v-card-title>
      Blogs
      <v-menu
        v-model="menu"
        :close-on-content-click="true"
        :nudge-width="100"
        offset-y
        nudge-bottom="5"
      >
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on" class="white--text ml-7" width="30" height="30" round tile>
            <img :src="selectedLang" alt />
          </v-avatar>
        </template>
        <v-list class="pa-o ma-0">
          <v-list-item @click="de" class="mt-n2">
            <v-list-item-avatar tile>
              <img :src="require('~/assets/img/de.png')" alt />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Dutch</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="en" class="mb-n2">
            <v-list-item-avatar tile>
              <img :src="require('~/assets/img/en.png')" alt />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>English</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="data" :search="search">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My Blogs</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field label="edit Title" v-model="editedItem.title"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ data }">
        <v-btn small class="mr-2" @click="editItem(data)">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
        <v-btn small @click="deleteItem(data)">
          <v-icon small>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  created() {
    this.getBlog();
  },
  data() {
    return {
      search: "",
      lang: "de",
      menu: false,
      dialog: false,
      selectedLang: require("~/assets/img/de.png"),
      headers: [
        { text: "Title", value: "title" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      data: [],
      editedIndex: -1,
      editedItem: {
        title: ""
      },
      defaultItem: {
        title: ""
      }
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    async getBlog() {
      const response = await this.$axios.get(
        `http://192.168.10.157:3333/api/blog?l=${this.lang}`
      );
      console.log(response);
      this.data = response.data;
    },
    de() {
      this.selectedLang = require("~/assets/img/de.png");
      this.lang = "de";
      this.getBlog();
    },
    en() {
      this.selectedLang = require("~/assets/img/en.png");
      this.lang = "en";
      this.getBlog();
      // window.location.reload(true);
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.data.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.data.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      } else {
        this.data.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>