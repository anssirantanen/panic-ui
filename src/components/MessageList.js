import React from 'react'
import {connect } from 'react-redux'
import * as actions from '../actions/socket'


export class MessageList extends React.Component {

  componentDidMount(){
    this.props.bindSocket()
  }

  render(){
    console.log(this.props.banana)
    return(
      <div>List</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { banana : 'banana'}
}


export default connect(mapStateToProps, actions)(MessageList)

