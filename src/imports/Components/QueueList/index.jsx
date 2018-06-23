import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QueueItem from "../QueueItem/index";

export default class QueueList extends Component{
  static propTypes = {
    queue: PropTypes.object,
    fakeUsers: PropTypes.arrayOf(PropTypes.object),
  };


  render(){
    const items = this.props.queue
      .map(val=>(
        <QueueItem
          title={val.title}
          url={val.url}
          userName={val.user.name}
          comments={val.comments}
          fakeUsers={this.props.fakeUsers}
        />));

    return(
      <div>
        <div>On Deck Queue: {items.length}</div>
        <div className={'list'}>
          {items}
        </div>
      </div>
    )
  }
}