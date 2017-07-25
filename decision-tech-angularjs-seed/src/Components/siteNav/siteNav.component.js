import angular from 'angular';
import './siteNav.component.scss';
angular.module('app').component('siteNav',{
    template: `<nav class="site-nav"><div class="site-nav__content"><div class="site-nav__logo"></div><div class="site-nav__burger-menu"><burger-menu></burger-menu></div></div></nav>`
})