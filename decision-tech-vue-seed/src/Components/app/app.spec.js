import Vue from 'vue';
import { mount } from '@vue/test-utils';
import App from './app.vue';

describe('App', () => {
  describe('GIVEN when filtering by "broadband"', () => {
    it('should show the 4 broadband only deals', () => {
      const expectedDealsIds = [6158, 4359, 4371, 5459];
      const wrapper = mount(App);
      const broadbandCheckbox = wrapper.find('.filter-menu input[value="broadband"]');

      broadbandCheckbox.trigger('change');

      const tableRows = wrapper.findAll('.broadband-grid__deal');

      expect(tableRows.length).toBe(4);
      tableRows.filter(node => {
        expect(
          expectedDealsIds.includes(parseInt(node.attributes()['data-deal-id'], 10))
        ).toBe(true);
      });
    });
  });
});
