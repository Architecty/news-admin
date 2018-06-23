import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class QueueComment extends Component{
  static propTypes = {
    text: PropTypes.string,
    user: PropTypes.object,
    fakeUsers: PropTypes.arrayOf(PropTypes.object)
  }

  render(){

    return(
      <div>
        <div>{this.props.text}</div>
        <div>{this.props.user.name}</div>
      </div>
    )
  }
}