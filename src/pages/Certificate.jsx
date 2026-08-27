import "../styles/certificate.css";
import khrd from "../assets/images/371116769_685406140296111_2843862045068968103_n.jpg";

const Certificate = () => {
  const certification = [
    {
      course: "Basic Course",
      name: "KSHRD Center Certified",
      image: khrd
    },
  ]
  return (
    <>
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certs-grid">
          {certification.map(item => (
            <div className="cert-card fade-in">
              <img src={item.image} className="cert-icon cert-icon.web" />
              <h4>{item.course}</h4>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificate;