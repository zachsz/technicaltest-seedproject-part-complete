import React from 'react';
import PropTypes from 'prop-types';
import './deal-filter.scss';

class DealFilter extends React.Component {
  render() {
    const { filterState, handleChange } = this.props;
    return (
      <div className="deal-filter-menu">
        <ul>
          <li>
            <input id="filter-broadband" type="checkbox" onChange={handleChange} value="broadband" />
            <label htmlFor="filter-broadband">Broadband</label>
          </li>
          <li>
            <input id="filter-tv" type="checkbox" onChange={handleChange} value="tv" />
            <label htmlFor="filter-tv">TV</label>
          </li>
          <li>
            <input id="filter-mobile" type="checkbox" onChange={handleChange} value="mobile" />
            <label htmlFor="filter-mobile">Mobile</label>
          </li>
        </ul>
      </div>
    );
  }
}

DealFilter.propTypes = {
  filterState: PropTypes.shape({
    broadband: PropTypes.bool.isRequired,
    tv: PropTypes.bool.isRequired,
    mobile: PropTypes.bool.isRequired
  }),
  handleChange: PropTypes.func.isRequired
};

export default DealFilter;
