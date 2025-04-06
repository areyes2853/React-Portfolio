import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.jsx

import './App.css';

const App = () => {
  const mySkills = [
    {
      name: 'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true,
    },
    {
      name: 'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false,
    },
    {
      name: 'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false,
    },
    // Example: Add a backend-only skill if needed
    // {
    //   name: 'Node.js',
    //   comfort: 7,
    //   frontEnd: false,
    //   backend: true
    // }
  ];

  const skillMessage = mySkills.map((skill, index) =>{
    // if(skill.frontEnd && skill.backend)
  const skillCanDo = skill.frontEnd && skill.backend?`Efficient in both Frontend and Backend: ${skill.name}`:
  skill.frontEnd? `Efficient in Frontend: ${skill.name}` 
  :skill.backend? `Efficient in Backend: ${skill.name}`: `Skill: ${skill.name} (Category not specified)`
  return <li key={index}>{skillCanDo}</li>
  });

  return (
    <>
      <h1>Pro!</h1>
      <p>My skills are:</p>
      <ul>
        {skillMessage}
      </ul>
    </>
  );
};

export default App;


