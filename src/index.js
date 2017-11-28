import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// registerServiceWorker();

const FormattedDate = info => {
  return <h2>It is {info.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component{
  constructor(info) {
    super(info);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>Hello, world !</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
