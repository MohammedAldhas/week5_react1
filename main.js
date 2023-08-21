// const name1 = document.getElementById("root");
// const element = document.createElement("div");
// element.innerHTML = "HelloWorld";
// name1.appendChild(element);
// console.log(name1);

//web Back

//React
// const react1 = document.getElementById("root");

// const element = React.createElement("div", {
//     children: "Dimah",
//     className: "text"
// })

// ReactDOM.render(element, react1);

//JSX

const react1 = document.querySelector(".root");

let element = (
  <div>
    <div className="container">
      <div className="line"></div>
      <div className="tittle">
        <h1>MOHAMMED ALDHAS</h1>
        <h4>Front-End Developer</h4>
      </div>
      <div className="contact">
        <p>Riyadh, Saudi Arabia</p>
        <p>+966583661960</p>
        <a href="mohammed.aldhas3@gmail.com">mohammed.aldhas3@gmail.com</a>
        <p className="bold">
          LINKEDIN:
          <a href="https://www.linkedin.com/in/mohammad-aldhas/">
            mohammad-aldhas
          </a>
        </p>
        <p className="bold">
          GITHUB:
          <a href="github.com/MohammedAldhas/">github.com/MohammedAldhas</a>
        </p>
      </div>
      <hr></hr>
      <p>
        A motivated and knowledgeable fresh graduate seeking a position in
        computer science field. Interested in front-end development in
        particular and programming in general. looking for a work environment
        that enables me to develop my abilities and practical skills in line
        with my qualifications.
      </p>
      <hr></hr>
      <div className="header">
        <p className="bold">EDUCATION</p>
        <ul>
          <div>
            <li>Bachelor of Computer Science</li>
            <p className="list-s">Taif University // June 2022</p>
          </div>

          <div>
            <li>Tuwaiq Academy</li>
            <p className="list-s">
              Bootcamp front-end development July 2023-Present
            </p>
          </div>
        </ul>
      </div>

      <div className="header">
        <p className="bold">PROJECTS</p>
        <ul className="project">
          <li>
            A tourist program to serve the tourists of the Kingdom of Saudi
            Arabia (graduation project).
          </li>
          <li>A project to develop a game with unity engine using the C#.</li>
          <li>To-do List using HTML | Bootstrap | CSS |JavaScript.</li>
          <li>Responsive Webpage using UI\UX | Figma | HTML | CSS.</li>
        </ul>
      </div>

      <div className="header">
        <p className="bold">CERTIFICATIONS</p>
        <ul className="project">
          <li>Wall Street English (Level 8).</li>
          <li>Tuwaiq Academy Bootcamp Typescript.</li>
          <li>introduction of cybersecurity.</li>
        </ul>
      </div>
      <hr></hr>
      <div className="skills">
        <div className="header">
          <p className="bold">Technical Skills</p>
          <ul className="project">
            <li>JavaScript | TypeScript</li>
            <li>HTML | CSS | Bootstrap.</li>
            <li>Git\GitHub</li>
            <li>Microsoft office.</li>
            <li>Dart</li>
          </ul>
        </div>
        <div className="header">
          <p className="bold">Soft Skills</p>
          <ul className="project">
            <li>Problem Solving.</li>
            <li>Communication.</li>
            <li>Fast learner.</li>
            <li>Work under pressures</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, react1);
