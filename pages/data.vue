<template>
  <v-container>
    <CollectionText />
  </v-container>
</template>

<script>
import CollectionText from '~/components/CollectionText.vue'
import 'firebase/storage'
export default {
  data() {
    return {
      CollectionText,
    }
  },
}
</script>

<style></style>
