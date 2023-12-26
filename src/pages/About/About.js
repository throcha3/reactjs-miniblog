import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About mini <span>Blog</span>
        <p>This project is a blog made with React.js and Firebase</p>
      </h2>
      <Link to="/posts/create" className="btn">
        Create post
      </Link>
    </div>
  );
};

export default About;
