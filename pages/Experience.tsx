import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Experience() {
 
const date = new Date().getFullYear()

  const experience = [
    {
      id: 1,
      company: "Techmaax",
      role: "Technical Trainer",
      from_year: 2025,
      status:'Current',
      experience:0,
    }
  ];

  // Track open state for each item
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

  const toggleOpen = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Header />
      {experience.map((i) => (
        <div
          className="w-[90%] m-auto my-10 p-3 bg-gray-300 rounded-2xl hover:bg-white transition-colors duration-300 cursor-pointer montserrat"
          key={i.id}
        >
          <div className="flex justify-between items-center">
            <div>{i.company} <span className="text-green-500 text-sm">({i.status})</span> {date  - i.from_year} year Experience</div>
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
                    <strong>Company : </strong> {i.company}
                  </p>
                  <p>
                    <strong>Role : </strong> {i.role}
                  </p>
                  <p>
                    <strong>Year : </strong> {i.from_year} <span></span>{i.from_year == date || ` - ${date} (Present)`}
                  </p>
                  <p>
                    <strong>Experience : </strong> {date  - i.from_year} year Experience
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

export default Experience;
