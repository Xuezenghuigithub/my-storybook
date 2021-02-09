<template>
  <v-app>
    <v-main>
      <z-btn color="info" width="100" @click="hello">
        <v-icon>mdi-heart</v-icon>
      </z-btn>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    hello(){
      console.log('hello');      
    }
  },
};
</script>
