import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AgendaItem extends Component{
  static propTypes = {
    name: PropTypes.String,
    cron: PropTypes.String
  };

  render(){
    return(
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.cron}</div>
        <div><button>Edit</button></div>
        <div><button>Delete</button></div>
      </div>
    )
  }
}