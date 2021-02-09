<template>
  <v-snackbar v-model="snackbar" :color="color" :timeout="timeout" top right>
    <template>
      <v-icon color="white" class="mr-3" size="20"> mdi-alert </v-icon>
    </template>
    {{content}}
    <template v-slot:action="{ attrs }">
      <v-icon v-bind="attrs" color="white" size="16" @click="close"> mdi-close </v-icon>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    visible: Boolean,
    color: {
      type: String,
      default: "info"
    },
    content: {
      type: String,
      default: "提示内容"
    },
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      snackbar: this.visible
    }
  },
  // watch: {
  //   visible (val) {
  //     this.snackbar = val;
  //   }
  // },
  methods: {
    // show(content, color = 'info'){
    //   this.snackbar = true;
    //   this.content = content;
    //   this.color = color;
    // },
    show(){

    },
    close(){
      this.$emit('requestClose', false);
    }
  },
  // data() {
  //   return {
  //     snackbar: false,
  //     color: "info",
  //     content: "提示内容",
  //     timeout: 3000,
  //     extend: 'extend'
  //   };
  // },
  
};
</script>