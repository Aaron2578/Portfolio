import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Education() {
  const education = [
    {
      id: 1,
      degree: "Master of Science",
      stream: "Computer Science",
      percentage: "92%",
      year: 2025,
    },
    {
      id: 2,
      degree: "Bachelor of Science",
      stream: "Computer Science",
      percentage: "87%",
      year: 2023,
    },
  ];

  // Track open state for each item
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleOpen = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Header />
      {education.map((i) => (
        <div
          className="w-[90%] m-auto my-10 p-3 bg-gray-300 rounded-2xl hover:bg-white transition-colors duration-300 cursor-pointer montserrat"
          key={i.id}
        >
          <div className="flex justify-between items-center">
            <div>{i.degree}</div>
            <div>
              <button
                className="bg-black text-white rounded-full"
                onClick={() => toggleOpen(i.id)}
              >
                {!openItems[i.id] ? <Plus size={24} /> : <Minus size={24} />}
              </button>
            </div>
          </div>
          <div>
            {openItems[i.id] && (
              <div className="text-black my-3">
                <hr />
                <div className="mt-5">
                  <p>
                    <strong>Degree : </strong> {i.degree}
                  </p>
                  <p>
                    <strong>Stream : </strong> {i.stream}
                  </p>
                  <p>
                    <strong>Percentage : </strong> {i.percentage}
                  </p>
                  <p>
                    <strong>Year of passing : </strong> {i.year}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Education;
