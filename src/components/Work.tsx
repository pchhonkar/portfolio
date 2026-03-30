import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { publicUrl } from "../utils/publicUrl";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects: {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
  description?: string;
  tag?: string;
}[] = [
  {
    title: "TaxBuddy",
    category: "AI-Powered Tax Refund Engine for F1/J1 Visa Holders",
    tools: `Next.js 14, Claude API, Supabase pgvector
Hybrid RAG, IRS Form Generation
Tax Treaty Engine`,
    image: publicUrl("images/taxbuddy.png"),
    link: "https://github.com/pchhonkar/F1-TaxHelp",
  },
  {
    title: "Agentic PIM",
    category: "AI-Powered Product Information Management",
    description:
      "Multi-agent AI system that autonomously cleans messy supplier catalogs — fixes categories, normalizes pricing, generates SEO descriptions. Replaces days of manual merchandiser work with seconds of AI reasoning. Inspired by BetterCommerce.io.",
    tools: `CrewAI, Ollama (llama3.1), FastAPI
Next.js 13.5, Python, Pandas
SSE Streaming`,
    image: publicUrl("images/agentic-pim.png"),
    link: "https://github.com/pchhonkar/BetterCommerce",
  },
  {
    title: "OmniFlowAI",
    category: "Multi-Modal AI Pipeline for Automated Intelligence",
    tools: `RAG Retrieval, Fine-Tuned Inference
Cross-Format Conversion`,
    image: publicUrl("images/omniflowai.png"),
    link: "https://github.com/pchhonkar/OmniFlowAI-A-Unified-Multi-Modal-Intelligence-Pipeline",
  },
  {
    title: "MedTeller",
    tag: "Vision-Language AI",
    category: "Auto Radiology Reports from Chest X-Rays",
    description:
      "Generates radiology reports from chest X-rays using ViT + cross-attention + fine-tuned GPT-2. Trained on 7,470 images. Live Streamlit demo.",
    tools: `ViT Encoder, Cross-Attention, GPT-2 Medical Decoder
PyTorch · ViT-Base · GPT-2 · ClinicalBERT · HuggingFace Transformers · Streamlit
SafeTensors · NLTK · scikit-learn · Pillow · NumPy · Git LFS · BPE Tokenizer · AdamW · CUDA`,
    image: publicUrl("images/medteller.png"),
    link: "https://github.com/rishikathakre/MedTeller",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        {project.tag ? (
                          <p className="carousel-tag">{project.tag}</p>
                        ) : null}
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.description ? (
                          <p className="carousel-description">
                            {project.description}
                          </p>
                        ) : null}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
