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
    addLinks() {
      alert("akhjvjasvfgasv");
      const myForm = this.clone(this.form);
      console.log(myForm);

      this.$store.commit("links/addLink", myForm);
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