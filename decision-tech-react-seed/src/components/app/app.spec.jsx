import React from 'react';
import { mount } from 'enzyme';
import App from './app.jsx';

describe('App', () => {
  describe('GIVEN when filtering by "broadband"', () => {
    it('should show the 4 broadband only deals', () => {
      const expectedDealsIds = [6158, 4359, 4371, 5459];
      const wrapper = mount(<App />);
      const broadbandCheckbox = wrapper.find('.deal-filter-menu input[value="broadband"]');
      const tableRows = wrapper.find('.broadband-grid__deal');

      broadbandCheckbox.simulate('click');

      expect(tableRows).toHaveLength(4);
      tableRows.forEach(row => {
        expect(
          expectedDealsIds.includes(row.prop('data-deal-id'))
        ).toBe(true);
      });
    });
  });
});
