import "./section.css";
import styles from "../../index.css";

function Section({ children, sectionColor }) {
  return <div className={sectionColor}>{children}</div>;
}

export default Section;
