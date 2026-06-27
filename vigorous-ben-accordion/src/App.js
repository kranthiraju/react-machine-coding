import "./styles.css";
import Accordion from "../components/Accordion";

export default function App() {
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  return (
    <div className="App">
      <h1>React Accordion Component</h1>
      <Accordion items={items} />
    </div>
  );
}
