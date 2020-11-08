<template>
  <v-container>
    <v-form @submit.prevent="addData">
      <v-text-field v-model="Name" label="Movie" class="ma-2"></v-text-field>
      <v-text-field
        v-model="price"
        label="Price"
        class="ma-2"
        type="number"
      ></v-text-field>
      <v-btn color="success" class="mr-4" @click="addData">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from '.firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
import 'firebase/storage'
export default {
  data() {
    return {
      Name: '',
      price: null,
    }
  },
  methods: {
    addData() {
      const dataText = {
        Name: this.Name,
        price: this.price,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyText').doc().set(dataText)
    },
    reset() {},
    methods: {
      // ...........
      getData() {
        db.collection('MyForm')
          .doc('formdata')
          .onSnapshot((doc) => {
            // console.log("Current data: ", doc.data());
            const firebaseData = doc.data()
            if (firebaseData) {
              this.txt = firebaseData.txt
              this.checkbox = firebaseData.checkbox
              this.radioGroup = firebaseData.radioGroup
              this.switcher = firebaseData.switcher
              this.rating = firebaseData.rating
              this.slider = firebaseData.slider
            }
          })
      },
    },
    created() {
      this.getData()
    },
  },
}
</script>

<style></style>
