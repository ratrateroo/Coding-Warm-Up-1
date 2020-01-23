import React from 'react';

//Function Based Components
const App = () => {
  //return React.createElement('h1', {title: "This works"}, 'Hi, this is ReactJS!');
  return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>;
};

//Class Based Components
/* class App extends React.Component {
  render() {
    return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>; 
  }
} */

export default App;