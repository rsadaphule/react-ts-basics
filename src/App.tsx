//import { Component, useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg";
//import "./App.css";
import { useState } from "react";

type Goal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  //const [count, setCount] = useState(0);

  const [goals, setGoal] = useState<Goal[]>([]);

  function handleAddGoal() {
    console.log("inside handleAddGoal");
    console.log(goals);
    setGoal((prevGoals) => {
      const newGoal: Goal = {
        id: 100,
        title: "hardcoded title",
        description: "hardcoded desc",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal, index) => {
          console.log("inside map");
          console.log(goals.length);
          return (
            <li key={index}>
              <CourseGoal id={goal.id} title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
