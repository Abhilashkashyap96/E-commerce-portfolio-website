import React from 'react';
// Components
import Button from '../../components/Button';
// Styles
import './styles.css'

class TopBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  };

  componentWillMount () {
    this.setState({
      text: this.props.name
    })
  };

  componentDidMount () {
    // const input = document.getElementById('input');
    // input.addEventListener('input', (e) => {
    //   const value = e.target.value;
    //   this.setState({
    //     text: value
    //   });
    // });
  };

  componentWillReceiveProps (newProps) {
    this.setState({
      text: newProps.name
    });
  };

  componentWillUnmount () {
    this.props.handlePropChange('');
  };

  onChange = (e) => {
    const value = e.target.value;
    this.setState({
      text: value
    });
    this.props.handlePropChange(value);
  };

  render () {
    return (
      <div class='topbar-container'>
        <input type='text' onChange={this.onChange} value={this.state.text} />
        <h1>{this.state.text}</h1>
        <Button onClick={() => alert('hello')}>My Button</Button>
        <hr/>
      </div>
    );
  };
};

export default TopBar;
