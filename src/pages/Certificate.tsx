import Footer from "../components/Footer";
import Header from "../components/Header";

import uiuxImg from "../assets/UIUX.png";
import uiuxPDF from "../documents/Aaraon-UI&UX.pdf";
import codeAlphaFrontImg from "../assets/codeAlphaFrontenddevelopmentInternship.png";
import codeAlphaFrontPDF from "../documents/C.aaron.pdf";
import codeAlphaWebImg from "../assets/codeAlphaWebdevelopmentInternship.png";
import codeAlphaWebPDF from "../documents/C.aaron (2).pdf";
import rinexInternImg from "../assets/rinexInternship.png";
import rinexInternPDF from "../documents/Aaron C - Internship  Completion Certificate.pdf";
import rinexWebImg from "../assets/rinexWebCourseCompletion.png";
import rinexWebPDF from "../documents/Course completion certificate.pdf";

function Certificate() {
  const certificate = [
    {
      name: "UI/UX Designer",
      img: uiuxImg,
      pdf: uiuxPDF,
    },
    {
      name: "Frontend Development Internship",
      img: codeAlphaFrontImg,
      pdf: codeAlphaFrontPDF,
    },
    {
      name: "Web Development Internship",
      img: codeAlphaWebImg,
      pdf: codeAlphaWebPDF,
    },
    {
      name: "Web Development Internship",
      img: rinexInternImg,
      pdf: rinexInternPDF,
    },
    {
      name: "Web Development",
      img: rinexWebImg,
      pdf: rinexWebPDF,
    },
  ];

  return (
    <div>
      <Header />
      <div className="text-white w-[90%] m-auto my-6 flex flex-col items-center tagesschrift-regular">
        {certificate.map((i) => (
          <div key={i.name} className="text-center my-5">
            <div className="relative inline-block">
              <a href={i.pdf}>
                <img
                  src={i.img}
                  alt={i.name}
                  className="h-50 md:h-70  rounded-2xl hover:opacity-90 transition duration-200"
                />
              </a>
            </div>

            {/* Certificate Name */}
            <div className="mt-1 text-xl font-medium">{i.name}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
