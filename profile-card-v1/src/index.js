import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const skills = [
    { skill: "Ruby", level: "advanced", color: "green" },
    { skill: "Javascript", level: "intermediate", color: "yellow" },
    { skill: "React", level: "beginner", color: "violet" },
  ];
  return (
    <div className="card">
      <Avatar
        source="SonicTheHedgehog.jpg"
        alt="SonicTheHedgeHog"
        class="avatar"
      />
      <div className="data">
        <Intro
          name="Santos De La Fuente"
          description="I like to play videogames. I also like to learn new stuff and coding"
        />
        <SkillList skillObj={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.source} alt={props.alt} className={props.class}></img>;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <body>{props.description}</body>
    </div>
  );
}

function SkillList({ skillObj }) {
  return (
    <ul className="skill-list">
      {skillObj.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  const level = skillObj.level;
  if (level == "intermediate") {
    return (
      <div className="skill" style={{ backgroundColor: `${skillObj.color}` }}>
        <span>{skillObj.skill}</span>
        <span>💪</span>
      </div>
    );
  } else if (level == "beginner") {
    return (
      <div className="skill" style={{ backgroundColor: `${skillObj.color}` }}>
        <span>{skillObj.skill}</span>
        <span>👶</span>
      </div>
    );
  } else if (level == "advanced") {
    return (
      <div className="skill" style={{ backgroundColor: `${skillObj.color}` }}>
        <span>{skillObj.skill}</span>
        <span>🦾</span>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
