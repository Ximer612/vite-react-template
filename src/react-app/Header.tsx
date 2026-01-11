// src/components/Header.jsx
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>My Site</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
