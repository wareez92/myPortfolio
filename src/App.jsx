import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import { BsTranslate } from "react-icons/bs";

const items = [
  {
    id: 1,
    name: "Puppy Bowl React",
    img: "public/Puppy Bowl React.png",
    video: "/Puppy Bowl React Demo.mp4",
    description:
      "A project I worked on during my time at Fullstack Academy. This application allows users to create puppies by assigning a name, status, and image. The details page displays the time each puppy was created. React, HTML, CSS, and JavaScript were the technologies used to build this project.",
    link: "https://github.com/wareez92/puppy-bowl-react",
    date: "2024",
  },
  {
    id: 2,
    name: "Ice Mania",
    img: `public/Ice Mania Pic.png`,
    video: "/Ice Mania Demo.mp4",
    description:
      "A game project I completed in 2018 using Unity and C#. The assets were created with Adobe Illustrator. In the game, players must catch as many ice cubes as possible to achieve the highest score while avoiding black ice, which ends the game.",
    link: "",
    date: "2018",
  },
  {
    id: 3,
    name: "Puppy Bowl",
    img: `public/Puppy Bowl Picture.png`,
    video: "/Puppy Bowl Html.mp4",
    description:
      "A smaller version of Puppy Bowl. Users can click on a puppy's name to get detailed information about the pup, including age and email. This app was made using React.js, HTML, CSS, and JavaScript.",
    link: "https://github.com/wareez92/Unit2.PuppyBowl.Starter",
    date: "2024",
  },
  {
    id: 4,
    name: "SynthStorm",
    img: `public/SynthStorm Pic.png`,
    video: "/SynthStorm React Demo.mp4",
    description:
      "SynthStorm is an e-commerce website built with React.js, Node.js, Express.js, and PostgreSQL. Users can shop for synthesizers, add items to their cart, remove them, and complete purchases.",
    link: "https://github.com/wareez92/capstone-api/tree/main",
    date: "2024",
  },
  {
    id: 5,
    name: "Party Planner",
    img: `public/Party Planner Picture.png`,
    video: "/PartyPlanner React Demo.mp4",
    description:
      "This application allows users to view the details of a planned party or delete a party from the planner. It was built using React.js, HTML, CSS, and JavaScript.",
    link: "https://github.com/wareez92/Unit2.PartyPlanner",
    date: "2024",
  },
  {
    id: 6,
    name: "Pokemon",
    img: `public/Pokemon Picture.png`,
    video: "/Pokemon React Demo.mp4",
    description:
      "An application that curates pokemon and their properties to the user. The languages used to create this project are React.js HTML CSS Javascript",
    link: "https://github.com/wareez92/pokemon",
    date: "2024",
  },
  {
    id: 7,
    name: "Puppy Pals",
    img: `public/Puppy Pals Picture.png`,
    video: "/Puppy Pals React Demo.mp4",
    description:
      "Smaller version of puppy bowl. THe user can click on a puppy's name to get information on that pup. Info includes age and email. This app was made using React.js, HTML, CSS, Javascript",
    link: "https://github.com/wareez92/puppy-pals",
    date: "2024",
  },
  {
    id: 8,
    name: "Book Buddy",
    img: `public/Book Buddy Picture.png`,
    video: "/BookBuddy React Demo.mp4",
    description:
      "This application allows users to borrow books. Users can check out a book and return it later. They can also view the details of a single book. This app was created using React.js, HTML, CSS, and JavaScript.",
    link: "https://github.com/wareez92/Unit3.BookBuddy.Starter",
    date: "2024",
  },
];
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects items={items} />} />
        <Route path="/projects/:id" element={<SingleProject items={items} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Title />
      <Welcome />
      <hr />
      <Projects items={items} />
      <hr />
      <About />
      <hr />
      <Resume />
      <hr />
      <Contact />
      <hr />
    </>
  );
}

function Navbar({ isVisible, toggleNavbar }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1040);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1040); // 65em = 1040px
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: isVisible ? "0" : "-100%",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        color: "white",
        fontSize: "xx-large",
        display: isDesktop ? "none" : "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        transition: "top 0.3s ease-in-out",
        zIndex: "5",
        borderBottom: "2px solid black",
        overflow: "scroll",
      }}
    >
      <ul>
        <li>
          <a href="#projects" onClick={toggleNavbar}>
            Projects
          </a>
        </li>
        <li>
          <a href="#resume" onClick={toggleNavbar}>
            Resume
          </a>
        </li>
        <li>
          <a href="#about-header" onClick={toggleNavbar}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleNavbar}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Title() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev);
  };
  return (
    <header>
      <section>
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQE2U26fTIeNbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730838848576?e=1736380800&v=beta&t=myZQ0sP_WG-iQIQGKts0UqA8OO0aG1IUg-nAG1h2rPk"
          alt="Wareez"
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
            border: "3.2px solid var(--primary-color)",
            boxSizing: "border-box",
          }}
        />

        <nav id="desktop-nav">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#about-header">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          className="hamburger"
          onClick={toggleNavbar}
          style={{
            border: "none",
            background: "none",
          }}
        >
          <IoIosArrowDropdown
            style={{
              transform: isNavbarVisible ? "rotate(180deg)" : "rotate(0deg)",
              fontSize: "3em",
              color: "var(--primary-color)",
            }}
          />
        </button>
      </section>
      <Navbar
        className="main-nav"
        isVisible={isNavbarVisible}
        toggleNavbar={() => setIsNavbarVisible(false)}
      />
    </header>
  );
}

function Welcome() {
  return (
    <>
      <section className="welcome">
        <h1>
          Wareez <br />
          Sowemimo
        </h1>
        <h3>FullStack Web Developer</h3>
      </section>
    </>
  );
}

function Projects({ items }) {
  return (
    <>
      <h2 id="projects">Projects</h2>
      <div className="projects-list">
        {items.map((item) => (
          <div key={item.id} className="project">
            <Link to={`/projects/${item.id}`}>
              <img
                src={item.img}
                alt={item.name}
                className="project-thumbnails"
              />
            </Link>
            <h3>{item.name}</h3>
            <p>
              Completed: <span>{item.date}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function SingleProject({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = items.find((item) => item.id === parseInt(id));

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <>
      <h2>{project.name}</h2>
      <div className="single-project">
        <video src={project.video} autoPlay loop muted />
        
        <div className="description">
          <p>{project.description}</p>
          <button onClick={() => navigate("/")}>Back to Projects</button>

          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <h2 id="about-header">About Me</h2>
      <section id="about">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQE2U26fTIeNbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730838848576?e=1736380800&v=beta&t=myZQ0sP_WG-iQIQGKts0UqA8OO0aG1IUg-nAG1h2rPk"
          alt="Wareez"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hi, I’m Wareez!
            <br />
            Im currently a student at Fullstack Academy. I first discovered my
            interest in tech 2015 when my brothers were talking about creating
            video game for the iPhone. I thought the idea was awesome and I took
            notes on it and taught myself C# and build the game in unity. I
            created all the assets for the game including character sprites and
            backgrounds for the stages and composed the music. Although I wasn’t
            able to successfully submit to the App Store, this experience stuck
            with me forever. I learned the value of ideas and the beauty of
            sticking with my goals until I reach them. Almost ten years later,
            I’m now pursuing a career in the tech space with fully confidence in
            my ability to plan a project from start to finish and my tenacity
            when it comes to seeing things through no matter how difficult a
            given task become.
          </p>
        </div>
      </section>
    </>
  );
}

function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <section id="resume">
        <a href="https://www.dropbox.com/scl/fi/9262iahb7osmavzjsuh0l/my-resume-2.pdf?rlkey=f32xxl7vd9el18l1e4yxhgfql&st=fsxlx9r1&dl=0">Open</a>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <section id="contact">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/wareez-sowemimo-3a90aa2a8/?profileId=ACoAAEoNb7EBVKY8yUZaLEHhKJo_qdQbLQ6I_6U">
              <AiOutlineLinkedin className="social-icons" id="linked-in" />
            </a>
          </li>
          <li>
            <a href="https://github.com/wareez92">
              <VscGithub className="social-icons" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
