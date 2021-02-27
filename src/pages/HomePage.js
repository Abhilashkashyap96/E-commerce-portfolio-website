import React from 'react';
// Views
import TopBar from '../views/TopBar';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      show: true
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: value
    });
  };

  handlePropChange = (value) => {
    this.setState({
      name: value
    });
  }

  hideTopBar = () => {
    this.setState({
      show: false
    });
  };

  render () {
    return (
      <div>
        {this.state.show === true && (
          <TopBar name={this.state.name} handlePropChange={this.handlePropChange} />
        )}
        <input onChange={this.onChange} value={this.state.name} />
        <h1>{this.state.name}</h1>
        <button onClick={this.hideTopBar}>Unmount</button>
        <h1>Home</h1>
      </div>
    );
  };
};

export default Home;
