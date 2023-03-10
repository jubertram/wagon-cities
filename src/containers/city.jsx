import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectActiveCity } from '../actions';

class City extends PureComponent {
  handleClick = () => {
    this.props.selectActiveCity(this.props.city);
  }

  render () {
    const { name } = this.props.city;
    return (
      <li className="list-group-item" onClick={this.handleClick}>{name}</li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
