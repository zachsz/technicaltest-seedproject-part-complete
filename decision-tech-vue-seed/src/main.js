import Vue from 'vue';
import SiteNav from './components/site-nav/site-nav.vue';
import App from './components/app/app.vue';
import './styles.scss';

new Vue({
  el: '#app',
  components: {
    App,
    SiteNav
  }
});