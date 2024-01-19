import React from "react";
import CV from "../../images/CV.pdf.docx";

function Cta() {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk!
      </a>
    </div>
  );
}

export default Cta;
