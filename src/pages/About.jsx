import secondpic from "../assets/images/Picture02.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-image fade-in-left">
          <div className="about-image-wrapper">
            <img src={secondpic} alt="About Visa" />
          </div>
        </div>
        <div className="about-content fade-in-right">
          <h2>
            Curious to know a bit more{" "}
            <span className="gradient-text">about me?</span>
          </h2>
          <p>
            I'm a{" "}
            <span className="highlight">
              fourth-year Management Information Systems (MIS) student
            </span>
            at SETEC Institute with a passion for software development and
            creating web applications that solve real-world problems.
          </p>
          <p>
            My journey into programming began with a curiosity about how
            websites and applications work, which inspired me to learn{" "}
            <span className="highlight">Java</span>,
            <span className="highlight">Spring Boot</span>,
            <span className="highlight">React</span>, and
            <span className="highlight">PostgreSQL</span>. Through academic
            projects and intensive training at the Korea Software HRD Center,
            I've continued to strengthen my skills in both frontend and backend
            development while writing clean, maintainable, and efficient code.
          </p>
          <p>
            I'm always eager to learn new technologies, improve my
            problem-solving skills, and take on challenging projects that help
            me grow as a developer. My goal is to build reliable software that
            creates meaningful value while continuously expanding my knowledge
            in modern software engineering.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <div className="number">1+</div>
              <div className="label">Projects Built</div>
            </div>
            <div className="about-stat">
              <div className="number">1+</div>
              <div className="label">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
