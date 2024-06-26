import openInNew from "../../assets/open_in_new.svg";
import "./About.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__logo-and-title">
        <picture className="about__logo__container">
          <img src="sr_nau.jpg" className="logo" alt="Vite logo" />
        </picture>
        <h1 className="about__title">Студрада НАУ</h1>
      </div>
      <h3 className="about__description">
        Студентська рада НАУ — це ком'юніті згуртованих та ініціативних
        студентів, які роблять НАУ кращим. Ми відкриті для кожного студента.
        <br />
        <br />
        Основна наша діяльність полягає в захисті прав та інформуванні
        студентства, організації та проведення культурно-масових подій.
      </h3>
      <a
        href="https://drive.google.com/drive/folders/1U2OhpZcnafG9JNxV-jEqvGUjK3ictfhM?usp=sharing"
        target="_blank"
      >
        <button className="documentation-link">
          <h3>Документація</h3>
          <img src={openInNew} alt="[open]" />
        </button>
      </a>
    </div>
  );
};

export default About;
