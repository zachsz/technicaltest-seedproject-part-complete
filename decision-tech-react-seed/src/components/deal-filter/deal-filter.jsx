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
            <input
              type="checkbox"
              onChange={handleChange}
              value="broadband"
            />
            Broadband
          </li>
          <li>
            <input
              type="checkbox"
              onChange={handleChange}
              value="tv"
            />
            TV
          </li>
          <li>
            <input
              type="checkbox"
              onChange={handleChange}
              value="mobile"
            />
            Mobile
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