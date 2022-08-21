import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Code Inspector</h1>
      <div className={styles.paragraphs}>
        <p className={styles.paragraph}>
          Code-inspector provides a invaluable service for those who want to
          understand code better. It is easy to use and provides a summary of
          complex topics in simple terms, making it an invaluable resource for
          anyone who is learning code.
        </p>
        <p className={styles.paragraph}>
          This website utilizes the OpenAI API to generate results. OpenAI is a
          powerful artificial intelligence platform that enables developers to
          create intelligent applications. For more information, please visit
          their website.
        </p>
      </div>
    </div>
  );
};

export default About;
