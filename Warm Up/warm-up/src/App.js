import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

//Function Based Components
const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
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