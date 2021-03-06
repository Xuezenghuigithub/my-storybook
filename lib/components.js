import Vue from 'vue';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('../src/components', true, /\.vue$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')));

  Vue.component(`Z${componentName}`, componentConfig.default || componentConfig)
});