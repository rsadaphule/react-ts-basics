//import { Component, useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import CourseGoal from "./components/CourseGoal.tsx";
import { Goal } from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImage from "./assets/goals.jpg";
//import "./App.css";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  //const [count, setCount] = useState(0);

  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(title: string, description: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: title,
        description: description,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <Header image={{ src: goalsImage, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal addGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </>
  );
}

export default App;
