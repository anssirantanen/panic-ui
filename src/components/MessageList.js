import React from 'react'
import {connect } from 'react-redux'
import * as actions from '../actions/socket'


export class MessageList extends React.Component {

  componentDidMount(){
    this.props.bindSocket()
  }

  render(){
    console.log(this.props.frames)
    return(
      <div><ul>{this.props.frames.map((e) => {
        return(<li>{e}</li>)
      })
      }</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { frames : state.frames}
}


export default connect(mapStateToProps, actions)(MessageList)

