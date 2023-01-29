import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      count: 0,
    };
    console.log(` ${this.props.name} constructor`);
  }

  componentDidMount() {
    console.log(` ${this.props.name} componentDidMount`);
  }

  render() {
    console.log(` ${this.props.name} render`)
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Class Component </h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            // we never mutate the state directly
            this.setState({
              count: 1,
            });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default Profile;
