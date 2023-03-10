import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends PureComponent {
  render () {
    if (this.props.activeCity) {
      const { name, address, slug } = this.props.activeCity;
      const url = `https://kitt.lewagon.com/placeholder/cities/${slug}`;
      return (
        <div className="active-city">
          <h3>{name}</h3>
          <p>{address}</p>
          <img src={url} alt="" />
        </div>
      );
    }
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
