import { action } from '@storybook/addon-actions';
import ZBtn from '@/components/Btn.vue';

export default {
  title: 'Vuetify Components/Button',
  component: ZBtn,
  argTypes: {
    color: {
      description: '组件颜色，默认为主题色',
      table: {
        defaultValue: { summary: 'primary' },
      }
    },
    width: {
      description: '组件宽度',
    },
    icon: {
      description: '是否为 icon 按钮',
      table: {
        defaultValue: { summary: false },
      }
    },
    disabled: {
      description: '按钮禁用',
      table: {
        defaultValue: { summary: false },
      }
    },
    small: {
      description: '小尺寸按钮',
      table: {
        defaultValue: { summary: false },
      }
    },
    xSmall: {
      name: 'x-small',
      description: '超小尺寸按钮',
      table: {
        defaultValue: { summary: false },
      }
    },
    large: {
      description: '大尺寸按钮',
      table: {
        defaultValue: { summary: false },
      }
    },
    xLarge: {
      name: 'x-large',
      description: '超大尺寸按钮',
      table: {
        defaultValue: { summary: false },
      }
    },
  }
};

const Template = (args, { argTypes }) => ({
  components: { ZBtn },
  props: Object.keys(argTypes),
  template: '<z-btn v-bind="$props" @click="clickBtn">按钮</z-btn>',
  methods: { clickBtn: action('click')}
})

export const Default = Template.bind({})

export const SizeBtn = () => ({
  components: { ZBtn },
  template: `<v-row align="center">
              <v-col> <z-btn x-small @click="click">x-small</z-btn> </v-col>
              <v-col> <z-btn small>small</z-btn> </v-col>
              <v-col> <z-btn>default</z-btn> </v-col>
              <v-col> <z-btn large>large</z-btn> </v-col>
              <v-col> <z-btn x-large>x-large</z-btn> </v-col>
              <v-col> <z-btn disabled x-large>x-large</z-btn> </v-col>
            </v-row>`,
  methods: { click: action('click')},
});

export const IconBtn = () => ({
  components: { ZBtn },
  template: `<v-row align="center">
              <v-col> <z-btn icon x-small><v-icon>mdi-plus</v-icon></z-btn> </v-col>
              <v-col> <z-btn icon small><v-icon>mdi-plus</v-icon></z-btn> </v-col>
              <v-col> <z-btn icon><v-icon>mdi-plus</v-icon></z-btn> </v-col>
              <v-col> <z-btn icon large> <v-icon>mdi-plus</v-icon> </z-btn> </v-col>
              <v-col> <z-btn  icon x-large><v-icon>mdi-plus</v-icon></z-btn> </v-col>
              <v-col> <z-btn disabled icon x-large><v-icon>mdi-plus</v-icon></z-btn> </v-col>
            </v-row>`,
  methods: { click: action('click')},
});