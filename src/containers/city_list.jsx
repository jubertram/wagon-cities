import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends PureComponent {
  componentWillMount() {
    this.props.setCities();
  }

  render () {
    return (
      <div className="cities">
        <ul>
          {this.props.cities.map(city => <City city={city} key={city.name} />) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
