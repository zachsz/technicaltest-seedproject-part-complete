import React from 'react';
import PropTypes from 'prop-types';
import './deal-filter.scss';

class DealFilter extends React.Component {
  render() {
    return (
      <ul className="deal-filter-menu">
        <li>
          <input
            id="filter-broadband"
            type="checkbox"
            onChange={this.props.handleChange}
            value="broadband"
          />
          <label htmlFor="filter-broadband">Broadband</label>
        </li>
        <li>
          <input
            id="filter-tv"
            type="checkbox"
            onChange={this.props.handleChange}
            value="tv"
          />
          <label htmlFor="filter-tv">TV</label>
        </li>
        <li>
          <input
            id="filter-mobile"
            type="checkbox"
            onChange={this.props.handleChange}
            value="mobile"
          />
          <label htmlFor="filter-mobile">Mobile</label>
        </li>
      </ul>
    );
  }
}

DealFilter.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default DealFilter;
