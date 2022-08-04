import styles from "../styles/About.module.css";
const About = () => {
  return (
    <>
      <h1>Code Inspector</h1>
      <p className={styles.paragraph}>
        This website uses the OpenAI API to generate results. OpenAI is a
        powerful artificial intelligence platform that enables developers to
        create intelligent applications. For more information, please visit
        their website.
      </p>
    </>
  );
};

export default About;
