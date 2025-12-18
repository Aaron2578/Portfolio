import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Experience() {
  const experience = [
    {
      id: 1,
      company: "Techmaax",
      role: "Technical Trainer",
      from_year: 2025,
      from_date: "2025-11-03",
      status: "Current",
      experience: 0,
    },
  ];

const date = new Date().getFullYear();


  const calculateExperience = (startDate: any) => {
    const start = new Date(startDate);
    const end = new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years ${months} months ${days} days`;
  };

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
            <div>
              {i.company}{" "}
              <span className="text-green-500 text-sm">({i.status})</span>{" "}
            </div>
            {/* {date  - i.from_year} year Experience */}
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
  <strong>Year : </strong>
  {i.from_year}
  {i.status === "Current" && ` - ${date} (Present)`}
  {i.status != "Current" && ` - ${date}`}
</p>


                  <p>
                    <strong>Experience : </strong>{" "}
                    {calculateExperience(i.from_date)}
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
