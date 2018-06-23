import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QueueComment from "../QueueComment/index";

export default class QueueItem extends Component{
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    userName: PropTypes.object,
    fakeUsers: PropTypes.arrayOf(PropTypes.object),
    comments: PropTypes.arrayOf(PropTypes.object)
  }


  render(){
    const comments = this.props.comments
      .map(val=>(<QueueComment text={val.text} user={val.users} fakeUsers={this.props.fakeUsers}/>));
    return(
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.url}</div>
        <div>{this.props.userName}</div>
        <div className={'comments'}>
          {comments}
        </div>
      </div>
    )
  }
}