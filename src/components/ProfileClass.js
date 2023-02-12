import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
        userInfo : "Dummy Name",
        location : "Dummy Location"
    }
    console.log(` ${this.props.name} constructor`);
  }

  async componentDidMount() {
    // this will be called only once after first render
    const data = await fetch("https://api.github.com/users/praveenreddy3621")
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo: json
    })

    this.timer = setInterval(() => {
        console.log("I am timer")
    }, 2000)
    console.log(` ${this.props.name} componentDidMount`);
  }

  componentDidUpdate(prevProps, prevState) {
    // this will be called only when setState, new props or force update()
    //if(this.state.count != prevState.)
    console.log(` ${this.props.name} componentDidUpdate`)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log(` ${this.props.name} componentWillUnmount`)
  }

  render() {
    console.log(` ${this.props.name} render`)
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component </h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
