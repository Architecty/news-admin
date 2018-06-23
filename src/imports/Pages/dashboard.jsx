import React, {Component} from 'react';
import QueueList from "../Components/QueueList/index";

export class Dashboard extends Component{
  constructor(){
    super();

    this.state = {
      queue: [],
      fakeUsers: [],
      schedules:[]
    }
  }

  render(){
    return(
      <div>
        <QueueList
          queue={this.state.queue}
          fakeUsers={this.state.fakeUsers}
        />
      </div>
    )
  }
}