import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AgendaList extends Component{
  static propTypes = {
    schedule: PropTypes.arrayOf(PropTypes.string)
  }

  render(){
    return(<div/>)
  }
}