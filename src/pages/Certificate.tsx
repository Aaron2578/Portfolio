import Footer from "../components/Footer";
import Header from "../components/Header";

function Certificate() {
  const certificate = [
    {
      name: "UI/UX Designer",
      img: "src/assets/UIUX.png",
      pdf: "src/documents/Aaraon-UI&UX.pdf",
    },
    {
      name: "Frontend Development Internship",
      img: "src/assets/codeAlphaFrontenddevelopmentInternship.png",
      pdf: "src/documents/C.aaron.pdf",
    },
    {
      name: "Web Development Internship",
      img: "src/assets/codeAlphaWebdevelopmentInternship.png",
      pdf: "src/documents/C.aaron (2).pdf",
    },
    {
      name: "Web Development Internship",
      img: "src/assets/rinexInternship.png",
      pdf: "src/documents/Aaron C - Internship  Completion Certificate.pdf",
    },
    {
      name: "Web Development",
      img: "src/assets/rinexWebCourseCompletion.png",
      pdf: "src/documents/Course completion certificate.pdf",
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
