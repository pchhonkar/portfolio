import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Data Engineer</h4>
                <h5>American Bankers Association</h5>
              </div>
              <h3 className="career-date">May 2025 – Sep 2025</h3>
            </div>
            <p>
              Delivered ML and data engineering work across pipelines, modeling,
              and analytics in support of association data products and initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Data Engineer</h4>
                <h5>Axtrum Technologies</h5>
              </div>
              <h3 className="career-date">Mar 2023- Jul 2024</h3>
            </div>
            <p>
              Automated vendor onboarding and data pipelines with Python, Airflow,
              and Snowflake on AWS; integrated multi-source data from S3 and SQL
              and improved reliability of production workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Dysmech Consultant Services</h5>
              </div>
              <h3 className="career-date">May 2020 – Jul 2020</h3>
            </div>
            <p>
              Built an LSTM-based AQI prediction model with TensorFlow; automated
              real-time data ingestion from APIs using Python and Pandas.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>Quatrro</h5>
              </div>
              <h3 className="career-date">May 2019 – Jul 2019</h3>
            </div>
            <p>
              Summer internship focused on Python development, scripting, and
              supporting internal tools and application features.
            </p>
          </div>

          <h3 className="education-title">Education</h3>
          <div className="career-info-box career-education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MS in Data Science</h4>
                <h5>University of Maryland, College Park</h5>
              </div>
              <h3 className="career-date">2024 – 2026</h3>
            </div>
            <p className="career-education-placeholder" />
          </div>
          <div className="career-info-box career-education-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech in Computer Science</h4>
                <h5>SRM University, Delhi</h5>
              </div>
              <h3 className="career-date">2018 – 2022</h3>
            </div>
            <p className="career-education-placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
