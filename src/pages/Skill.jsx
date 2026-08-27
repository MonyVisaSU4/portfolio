import "../styles/skill.css"

const Skill = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "js",
      image: "https://cdn.simpleicons.org/javascript/F7DF1E"
    },
    {
      name: "React",
      icon: "react",
      image: "https://cdn.simpleicons.org/react/61DAFB"
    },
    {
      name: "MongoDB",
      icon: "mongo",
      image: "https://cdn.simpleicons.org/mongodb/47A248"
    },
    {
      name: "Git",
      icon: "git",
      image: "https://cdn.simpleicons.org/git/F05032"
    },
    {
      name: "Next.js",
      icon: "next",
      image: "https://cdn.simpleicons.org/nextdotjs/000000"
    },
    {
      name: "Tailwind",
      icon: "tailwind",
      image: "https://cdn.simpleicons.org/tailwindcss/06B6D4"
    },
    {
      name: "AWS",
      icon: "aws",
      image: "https://www.dataxschool.in/images/4441753461864."
    },
    {
      name: "Java",
      icon: "java",
      image: "https://cdn.simpleicons.org/openjdk/ED8B00"
    },
    {
      name: "Spring Boot",
      icon: "spring",
      image: "https://cdn.simpleicons.org/springboot/6DB33F"
    },
    {
      name: "Hibernate / JPA",
      icon: "hibernate",
      image: "https://cdn.simpleicons.org/hibernate/59666C"
    },
    {
      name: "REST API",
      icon: "rest",
      image: "https://cdn.simpleicons.org/openapiinitiative/6BA539"
    }
  ];
  return (
    <>
      <div className="container">
        <h2 className="section-title">Tech Stack and Frameworks I work with</h2>
        <div className="skills-grid">
          {skills.map((item) => (
            <div className="skill-item fade-in">
              <div className={`skill-icon ${item.icon}`}>
                <img src={item.image}
                  alt={item.name}
                  width="28"
                  height="28" />
              </div>
              <span className="skill-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;