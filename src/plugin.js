import katexDirective from './directives/katex-directive';
import KatexElement from './components/KatexElement.vue';

const plugin = {
  install(app, options) {
    const globalOptions = (options && options.globalOptions) || {};
    const vKatex = katexDirective(globalOptions);
    app.directive(vKatex.name, vKatex.directive);
    app.component(KatexElement.name, KatexElement);
    // TEST PLEASE REMOVE
    console.log(app);
    app.config.globalProperties.$katexOptions = globalOptions;
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
