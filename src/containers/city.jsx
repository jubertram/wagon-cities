import React, { PureComponent } from 'react';

class City extends PureComponent {
  render () {
    const { name } = this.props.city;
    return (
      <li className="list-group-item">{name}</li>
    );
  }
}

export default City;
