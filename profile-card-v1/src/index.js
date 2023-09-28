import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  const skills = [
    { skill: "Ruby", level: "advanced", color: "red" },
    { skill: "Javascript", level: "intermediate", color: "violet" },
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
        <SkillList skills={skills} />
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

function SkillList({ skills }) {
  return skills.map((skill) => {
    <Skill skillObj={skill} key={skill.skill}></Skill>;
  }); //<div className="skill-list">
  //<Skill skill={props.skill}></Skill>
  //</div>
}
function Skill(props) {
  return (
    <div className="skill">
      <span>{props.skill}</span>
      <span>{props.skill}</span>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
