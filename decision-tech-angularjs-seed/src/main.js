import angular from 'angular';
angular.module('app', []);

require('./services/filter.service');
require('./services/api.service');
require('./components/home/home.component');
require('./components/burgerMenu/burgerMenu.component');
require('./components/siteNav/siteNav.component');
require('./components/broadbandGrid/broadbandGrid.component');
require('./components/deals/deals.component');
require('./components/filterBar/filterBar.component');
import './styles.scss';

