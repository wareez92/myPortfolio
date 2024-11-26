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
    img: `https://media.licdn.com/dms/image/v2/D4E2DAQFg8jjNZgEprQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731962303023?e=1732568400&v=beta&t=40MtsKI5Vr0iOro3QoIqFMd6gWJ9PXjrZ3q6mLis4nQ`,
    video: "/Puppy Bowl React Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "https://github.com/wareez92/puppy-bowl-react",
    date: "2024",
  },
  {
    id: 2,
    name: "Ice Mania",
    img: `https://media.licdn.com/dms/image/v2/D4E2DAQHS4HnNJXLltw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731963256468?e=1732568400&v=beta&t=pk6Rl5fGugIRVKHe8va8PuHywox1wVGALxl9V3sk4Pc`,
    video: "/Ice Mania Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "",
    date: "2018",
  },
  {
    id: 3,
    name: "Puppy Bowl",
    img: `https://media.licdn.com/dms/image/v2/D562DAQG3C8rJC4dXOg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730230142427?e=1732568400&v=beta&t=EvQRebwg36-EVBDahr5knXGltBRWWKyDJhAfjTIdz3A`,
    video: "/Puppy Bowl Html.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "https://github.com/wareez92/Unit2.PuppyBowl.Starter",
    date: "2024",
  },
  {
    id: 4,
    name: "SynthStorm",
    img: `https://media.licdn.com/dms/image/v2/D562DAQHWZ-nGmdSGYw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730230028980?e=1732568400&v=beta&t=olOsSjsPrMe21M0MceO5r7UPeJeDIezSUF7jhPPvcF8`,
    video: "/SynthStorm React Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "https://github.com/wareez92/capstone-api/tree/main",
    date: "2024",
  },
  {
    id: 5,
    name: "Party Planner",
    img: `https://media.licdn.com/dms/image/v2/D562DAQEy_Bj10XozrA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730837553470?e=1732568400&v=beta&t=FxG--m3ruMfLfd6Ms41vJhjzBG_xbcQYMviGzPrNK4A`,
    video: "/PartyPlanner React Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "https://github.com/wareez92/Unit2.PartyPlanner",
    date: "2024",
  },
  {
    id: 6,
    name: "Pokemon",
    img: `https://media.licdn.com/dms/image/v2/D562DAQGexb7UK7AiWQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730837611707?e=1732568400&v=beta&t=C6AKiJ0dB1BlWiyBK6zFolTlUwryPgNogI2kitepm_0`,
    video: "/Pokemon React Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "https://github.com/wareez92/pokemon",
    date: "2024",
  },
  {
    id: 7,
    name: "Puppy Pals",
    img: `https://media.licdn.com/dms/image/v2/D4E2DAQGDqZFgWZSHUQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731963533713?e=1732568400&v=beta&t=-d0GvbmlWjY_PaW9HAWw5JJktmDKB5YDiE4dfFW1ihs`,
    video: "/Puppy Pals React Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
    link: "",
    date: "2024",
  },
  {
    id: 8,
    name: "Book Buddy",
    img: `https://media.licdn.com/dms/image/v2/D562DAQHXGb1TpOKtYw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1730837584224?e=1732568400&v=beta&t=9Jk5RjEHRf6hRUf9BO0wATsdNJIFDaSEyoRWpS3tM4I`,
    video: "/BookBuddy React Demo.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloribus vitae quo dolorem qui dolores et voluptatum nulla cupiditate vel in quisquam quos reiciendis, nisi commodi voluptatem aut praesentium id quaerat accusantium iure! Maxime sed dolorum vel, natus ipsam cumque? Eos, excepturi totam. Corporis perspiciatis quos veniam pariatur perferendis tenetur?",
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
