import React from 'react'

const users = [
  {
    name: "Michael",
    id: 1
  },
  {
    name: "Sarah",
    id: 2
  },
  {
    name: "Daniel",
    id:3
  },
  {
    name: "Liam",
    id:4
  }
]

export default React.createClass({
  getInitialState() {
    return {
      user: users.filter(user=>{
        return Number(user.id) === Number(this.props.match.params.userId)
      })[0]
    }
  },
  componentWillReceiveProps(props) {
    // in the video, I forgot to pass in the props in this function.
    // Fixed here so we're no using old props. 
    // For more info:
    // https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops 
    this.setState({
      user: users.filter(user=>{
        return Number(user.id) === Number(props.match.params.userId)
      })[0] 
    })
  },
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>User</h1>
        <p>{this.state.user.name}</p>
      </div>
    )
  }
})