import React from "react";

function Projects() {
  return (
    <div>
      <h2 className="project-heading">Projects</h2>
      <ul>
        <li>
          <strong>Income Tax Department (Website)</strong> <br />
          <em>(45 days)</em> <br />
          Improved website loading speed by 40% using optimized queries and caching techniques. Used a responsive design for all devices, fast loading pages, clear navigation, readable fonts, secure access, multilingual support, assistive technologies, and WCAG compliance to ensure seamless user experience for everyone.<br />
          <b>Tech:</b> HTML, CSS, JavaScript, Bootstrap, MySQL, PHP
        </li>
        <li>
          <strong>Currency Converter App (Android Platform)</strong> <br />
          Developed a real-time currency converter app for Android, integrating live exchange rates via API. Designed an intuitive and user-friendly UI to enhance user experience. Optimized app performance for smooth and responsive functionality across various devices.<br />
          <b>Tech:</b> Android Studio, Kotlin, REST API, XML, Firebase
        </li>
        <li>
          <strong>Medicine Record Management System (C program)</strong> <br />
          Developed a console-based application in C to manage medicine records efficiently. Implemented functionalities for adding, updating, searching, and deleting medicine data. Used file handling for persistent storage and structured data management. Designed an intuitive menu-driven interface for easy user interaction.<br />
          <b>Tech:</b> C, File Handling, Data Structures, Command-Line Interface
        </li>
        <li>
          <strong>Tic Tac Toe Game</strong> <br />
          Developed a Tic Tac Toe game with an interactive user interface and intelligent move logic. Implemented Minimax Algorithm for AI-based opponent moves. Designed an intuitive UI for a smooth user experience.<br />
          <b>Tech:</b> C++ Programming Language, GUI framework (PyQt), Algorithmic logic
        </li>
      </ul>
    </div>
  );
}

export default Projects;