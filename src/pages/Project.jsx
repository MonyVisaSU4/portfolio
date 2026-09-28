import zentrio from "../assets/images/zentrio.png";
import "../styles/project.css";

const Project = () => {
  const projects = [
    {
      name: "Zentrio",
      desc: "Web Application for Task Management at Korea Software HRD Center",
      language: ["NextJs", "Spring Boot", "Tailwind"],
      alt: "Zentiro - Task Management System",
      image: zentrio,
      source: "https://www.figma.com/proto/73E7bqg2USMoNZMNaCDDJi/Zentrio?node-id=2200-107151&t=IP3QLX21rl0aTnkA-1&scaling=scale-down-width&content-scaling=fixed&page-id=38%3A12588&starting-point-node-id=2928%3A114191"
    },
    {
      name: "Loan Management",
      desc: "Web Application for Loan.",
      language: ["Flask", "Bootstrap", "Jinja template engine"],
      alt: "Loan Management - Web Application for Loan.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vENVQUHEl0GSnP2MB36po2ieXPoIy5gRx7xcuyl_uw&s=10",
      source: "https://github.com/MonyVisaSU4/setec-y4-s1-adv-pp-midterm.git"
    },
  ];
  return (
    <>
      <div className="container">
        <h2 className="section-title">Some of the projects I've built</h2>
        <div className="projects-list">
          {projects.map((item) => (
            <div className="project-card fade-in">
              <div className="project-image">
                <div className="project-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="project-content">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="project-tags">
                  {item.language.map((subitem) => (
                    <span className="project-tag">{subitem}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={item.source}
                    className="project-link secondary"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
