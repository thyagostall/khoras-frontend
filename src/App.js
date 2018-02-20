import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let startTime = "12:00";
    let endTime = "13:00";
    let editing = false;

    return (
      <div className="App">
        <RecordLine startTime={startTime} endTime={endTime} editing={editing} />
      </div>
    );
  }
}

class RecordLine extends Component {
  render() {
    let startTime = this.props.startTime;
    let endTime = this.props.endTime;
    let editing = this.props.editing;

    if (editing) {
      return (
        <EditingRecordLine startTime={startTime} endTime={endTime} editing={editing} />
      )
    } else {
      return (
        <SavedRecordLine startTime={startTime} endTime={endTime} editing={editing} />
      )
    }
  }
}

class SavedRecordLine extends Component {
  render() {
    return (
      <div className="SavedRecordLine">
        <input type="time" disabled value={this.props.startTime}></input>
        <input type="time" disabled value={this.props.endTime}></input>
        <button>Edit</button>
      </div>
    )
  }
}

class EditingRecordLine extends Component {
  render() {
    return (
      <div className="EditingRecordLine">
        <input type="time" value={this.props.startTime}></input>
        <input type="time" value={this.props.endTime}></input>
        <button>Add</button>
        <button>Cancel</button>
      </div>
    )
  }
}

export default App;
