<template>
  <v-btn 
    :color="color" 
    :width="width" 
    :x-small="xSmall"
    :small="small"
    :large="large"
    :x-large="xLarge"
    :icon="icon" 
    :disabled="disabled" 
    v-on="$listeners"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    width: [String, Number],
    icon: Boolean,
    disabled: Boolean,
    small: Boolean,
    xSmall: Boolean,
    large: Boolean,
    xLarge: Boolean,
  },
};
</script>
