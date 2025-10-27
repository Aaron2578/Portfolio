import Footer from "../components/Footer";
import Header from "../components/Header";
import { Github } from "lucide-react";
import { DiPhp, DiMysql } from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaShare,
  FaServer,
} from "react-icons/fa"; // FontAwesome
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import Button from "../components/Button";

import pic from "../assets/recipes-img.png";
import suryaTailor from "../assets/surya-tailor.png";
import todoList from "../assets/todo_list.png";
import positivus from "../assets/positivus.png";
import weatherApp from "../assets/weatherApp.png";
import instagramClone from "../assets/instagramClone.png";
import matrimony from "../assets/matrimony.png";
import bankFlow from "../assets/bankFlow.png";
import qrCode from "../assets/qrCode.png";
import profileCard from "../assets/profileCard.png";
import eduSphere from "../assets/EduSphere.png";
import sportifyEventz from "../assets/sportifyEventz.png";

function Projects() {
  const projects = [
    {
      id: 1,
      project_name: "Web Recipes",
      img: pic,
      description:
        "The Web Recipes App is a modern, responsive web application built with React and TypeScript that allows users to discover and search from around the world. The app provides detailed recipe information including ingredients, cooking steps, and preparation time. It focuses on clean UI, efficient state management, and type-safe code for better maintainability and scalability.",
      sourceCode: "https://github.com/Aaron2578/recipes-app",
      liveProject: "https://web-recipes.netlify.app/",
      status: "Completed",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
        <SiTypescript size={40} color="#3178C6" />,
      ],
      view: "responsive",
    },
    {
      id: 2,
      project_name: "Surya Tailor",
      img: suryaTailor,
      description:
        "Suriya Tailors is a modern, responsive business website designed for a tailoring service. Built with React and TypeScript, it highlights the tailor’s services, showcases quality craftsmanship, and provides easy contact options for customers. The website delivers a clean UI and smooth user experience, ensuring visitors can quickly explore tailoring services, view details, and reach out for appointments.",
      sourceCode: "https://github.com/Aaron2578/surya-tailor",
      liveProject: "https://surya-tailor.netlify.app/",
      status: "Building",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
      ],
      view: "responsive",
    },
    {
      id: 3,
      project_name: "To-Do List",
      img: todoList,
      description:
        "The React To-Do List App is a productivity tool for task management.Users can add, edit, and delete tasks with a smooth workflow.Completed tasks are shown with a strike-through effect for clarity.The app dynamically displays the count of total, packed, and unpacked tasks.A clean and responsive interface is built using Tailwind CSS.The design ensures usability across both desktop and mobile devices.It demonstrates React concepts like components, hooks, and state management.This project is ideal for practicing React + Tailwind CSS while showcasing portfolio skills.",
      sourceCode: "https://github.com/Aaron2578/todo-list-react",
      liveProject: "https://vite-menu-list.netlify.app/",
      status: "Completed",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
      ],
      view: "responsive",
    },
    {
      id: 4,
      project_name: "Positivus - Marketing Website",
      img: positivus,
      description:
        "A sleek and professional landing page designed for modern businesses and digital agencies. Fully responsive across all devices, ensuring a seamless browsing experience. Clean, minimalist UI that puts the focus on content and brand messaging. Strategically placed CTAs to guide users toward key actions and conversions. Service sections that clearly highlight offerings and unique selling points. Testimonials to build trust and establish brand credibility. Optimized layout for fast loading and smooth navigation. Built using HTML, CSS (TailwindCSS), and React for maintainability and scalability. Perfect for brands aiming to boost their digital presence and customer engagement.",
      sourceCode: "https://github.com/Aaron2578/positivus",
      liveProject: "https://positivus-ui.netlify.app/",
      status: "Building",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
      ],
      view: "responsive",
    },
    {
      id: 5,
      project_name: "Weather Web App",
      img: weatherApp,
      description:
        "A weather web app project aims to provide users with accurate and real-time weather information through an intuitive and visually appealing platform. The application delivers current weather conditions, temperature, humidity, wind speed, and detailed forecasts for cities worldwide. Additional functionalities may include unit conversion (°C/°F), location-based updates, personalized weather alerts, and support for multiple cities. The project emphasizes responsive design, API integration, and clean user interfaces, helping developers strengthen their front-end skills while creating a reliable and engaging user experience.",
      sourceCode: "https://github.com/Aaron2578/weather-app",
      liveProject: "https://weather-forecastings.netlify.app/",
      status: "Updating",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
      ],
      view: "responsive",
    },
    {
      id: 6,
      project_name: "Instagram Clone",
      img: instagramClone,
      description:
        "The Instagram Clone is a fully responsive social media web application built using React and Tailwind CSS, mimicking the core functionalities of Instagram. It allows users to view posts, like, comment, and add new posts, with data persistence simulated using a JSON Server backend. The project demonstrates component-based architecture, state management, API integration, and a modern, mobile-first design approach.",
      sourceCode: "https://github.com/Aaron2578/instagram-clone",
      liveProject: "https://web-clone-insta.netlify.app/",
      status: "Building",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
        <FaServer size={40} color="#F7DF1E" />,
      ],
      view: "desktop",
    },
    {
      id: 7,
      project_name: "MatchVerse - Matrimony Website",
      img: matrimony,
      description:
        "The Matrimony Website is a responsive web application designed to help users find potential life partners. Users can create profiles, browse matches, and connect with other members. The platform focuses on user-friendly navigation, secure data handling, and modern UI/UX design to provide a seamless matchmaking experience.",
      sourceCode: "https://github.com/Aaron2578/MatchVerse-matrimony",
      liveProject: "https://match-verse.netlify.app/",
      status: "Building",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <SiTailwindcss size={40} color="#38B2AC" />,
      ],
      view: "responsive",
    },
    {
      id: 8,
      project_name: "Bank Flow",
      img: bankFlow,
      description:
        "Bank Flow is a modern personal finance dashboard that empowers users to manage their income, expenses, and savings in a clean and intuitive interface. Built with React, the app allows users to track their financial transactions, visualize spending patterns, and open & close their account. The platform focuses on data privacy, real-time updates, and responsive design, ensuring users can manage their finances effectively across devices.",
      sourceCode: "https://github.com/Aaron2578/bank_account",
      liveProject: "https://bank-flow.netlify.app/",
      status: "Updating",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <FaCss3Alt size={40} color="#1572B6" />,
      ],
      view: "responsive",
    },
    {
      id: 9,
      project_name: "Qr Code Generator",
      img: qrCode,
      description:
        "The QR Code Generator is a web application that allows users to generate QR codes dynamically for URLs, text, or other data. Users can input information, scan it as an image.This project demonstrates real-time data handling, user input validation, and interactive UI design.",
      sourceCode: "https://github.com/Aaron2578/qr_code",
      liveProject: "https://find-qr.netlify.app/",
      status: "Updating",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <FaCss3Alt size={40} color="#1572B6" />,
      ],
      view: "responsive",
    },
    {
      id: 10,
      project_name: "Profile Card",
      img: profileCard,
      description:
        "A profile card is a modern UI component that showcases a person’s professional identity in a neat and attractive layout. It includes a profile image, name, job title, and a brief description, helping visitors quickly understand who the person is and what they do. It’s widely used in developer portfolios, team member sections, and user dashboards to make profiles visually engaging and easily accessible.",
      sourceCode: "https://github.com/Aaron2578/profile-card",
      liveProject: "https://aaron-profile-card.netlify.app/",
      status: "Updating",
      icon: [
        <FaReact size={40} color="#61DAFB" />,
        <FaCss3Alt size={40} color="#1572B6" />,
      ],
      view: "responsive",
    },
    {
      id: 11,
      project_name: "EduSphere - Department Website",
      img: eduSphere,
      description:
        "The Department Website is a responsive web application designed to provide information about a college or university department. It highlights the department’s courses, faculty, research, events, and resources, offering an intuitive interface for students, faculty, and visitors. This project demonstrates clean UI/UX, component-based design, and responsive layouts, making information easy to access across devices.",
      liveProject: "https://mscs.netlify.app/",
      status: "Completed",
      icon: [
        <FaHtml5 size={40} color="#E34F26" />,
        <FaCss3Alt size={40} color="#1572B6" />,
        <FaJsSquare size={40} color="#F7DF1E" />,
        <FaBootstrap size={40} color="#7952B3" />,
        <DiPhp size={40} color="#777BB4" />,
        <DiMysql size={40} color="#4479A1" />,
      ],
      view: "responsive",
      btnDisplay: true,
    },
    {
      id: 12,
      project_name: "Sportify Eventz - Sports Website",
      img: sportifyEventz,
      description:
        "A sports website project aims to create an all-inclusive platform for sports enthusiasts, offering the latest news, live scores, detailed analyses, and interactive features. This project involves developing a user-friendly interface that provides seamless access to real-time updates, match schedules, player statistics, and expert opinions across various sports. The project enhances web development skills, including front-end design, back-end integration, and responsive design, ensuring a dynamic and engaging experience for all users.",
      sourceCode: "https://github.com/Aaron2578/sportify-eventz",
      liveProject: "https://sportify-eventz.vercel.app/",
      status: "Completed",
      icon: [
        <FaHtml5 size={40} color="#E34F26" />,
        <FaCss3Alt size={40} color="#1572B6" />,
        <FaJsSquare size={40} color="#F7DF1E" />,
        <FaBootstrap size={40} color="#7952B3" />,
      ],
      view: "responsive",
    },
  ];
  return (
    <div>
      <Header />
      <div className="w-[90%] my-12 m-auto">
        <div className="text-white text-xl flex md:justify-end pacifico-regular">
          Total Projects : {projects.length < 10 && "0"}
          {projects.length}
        </div>
        {projects.map((i) => (
          <div
            className="my-5 flex flex-col md:flex-row justify-between items-center gap-5 border-2 bg-black border-gray-500 rounded-4xl hover:border-white p-5"
            key={i.id}
          >
            <div className="md:w-[30%]">
              <h2 className="text-white text-2xl tagesschrift-regular py-2">
                {i.project_name}
              </h2>
              <img src={i.img} alt={i.project_name} className="rounded-2xl" />
              <div className="w-full m-auto justify-center flex mt-3 gap-3">
                {i.icon?.map((p: any) => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <div className="md:w-[70%] text-white text-justify">
              <p>{i.description}</p>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-fit flex justify-between gap-1.5 md:gap-5">
                  <a href={i.sourceCode}>
                    <Button
                      text={"Source Code"}
                      icon={<Github className="text-black text-md" />}
                      disable={i.btnDisplay}
                    />
                  </a>
                  <a href={i.liveProject}>
                    <Button
                      text={"Live Project"}
                      icon={<FaShare className="text-black text-md" />}
                    />
                  </a>
                </div>
                <div className="flex items-center tagesschrift-regular">
                  <span className="pr-2 text-amber-300">Status :</span>
                  <div>{i.status === "Completed" && " Completed ✅ "}</div>
                  <div> {i.status === "Building" && " Building 📊 "}</div>
                  <div>{i.status === "Updating" && " Updating  ♻"}</div>
                </div>
                <div className="flex items-center tagesschrift-regular">
                  <span className="pr-2 text-green-400">View : </span>
                  <div>
                    {i.view === "responsive" && "Desktop & Mobile 📱💻"}
                  </div>
                  <div>{i.view === "mobile" && "Mobile 📱"}</div>
                  <div>{i.view === "desktop" && "Desktop 💻"}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
