import Vue from 'vue';
import Vuetify from 'vuetify';
import { options } from '@/plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export const parameters = {
  // 自动为组件文档中的事件匹配参数
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const vuetify = new Vuetify(options)

export const decorators = [
  (story, context) => {
    // 包装组件
    const wrapped = story(context)
    // 返回 Vue 子类，表示每一个故事在Storybook里渲染出来都是一个完整的Vue实例
    return Vue.extend({
      vuetify,
      components: { wrapped },
      template: `
        <v-app>
          <v-main>
            <wrapped />
          </v-main>
        </v-app>
      `
    })
  },
]