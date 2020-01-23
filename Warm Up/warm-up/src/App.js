import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

//Function Based Components
const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

//Class Based Components
/* class App extends React.Component {
  render() {
    return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>; 
  }
} */

export default App;