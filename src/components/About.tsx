import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Data Science grad student at UMD with 2+ years building data pipelines, ML
          models and AI systems using SQL, dbt, Snowflake and Airflow.
        </p>
        <p className="para">
          I work at the intersection of data engineering and AI, building RAG and
          LLM pipelines with LangChain, experimenting with agentic AI, and shipping
          production-ready systems with Python, Docker and CI/CD.
        </p>
        <p className="para">
          I don&apos;t just analyze data. I build the systems that move it,
          transform it and make it intelligent.
        </p>
      </div>
    </div>
  );
};

export default About;
