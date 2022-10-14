import React, { Component } from 'react'

export default class result extends Component {
  render() {
    return (
        <React.Fragment>

            <div>Wrong Word : {this.props.worddetails.wrongword}</div>
            <div>Correct Word : {this.props.worddetails.correctword}</div>

            <div>TYping Speed : {this.props.worddetails.correctword/(60000/this.props.state.timer)}</div>
            <div>Acuray : {(this.props.worddetails.correctword*100)/(this.props.worddetails.wrongword+this.props.worddetails.correctword)}</div>
        </React.Fragment>
    )
  }
}
