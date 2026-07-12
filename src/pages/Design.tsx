import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";

import The_Power_of_Relationship from "../assets/The Power of Relationship - Cover Page.png";
import The_Future_is_already_Watching from "../assets/The Future is already watching - Cover Page.png";
import Food_Screen from "../assets/Food Screen.jpg";
import onboarding from "../assets/Onboarding.jpg";
import Cart_Screen from "../assets/Cart Screen.jpg";
import foodDeliveryHome from "../assets/foodDeliveryHome.png";
import foodDeliveryConfirmation from "../assets/foodDeliveryOrderConfirm.png";
import foodDeliveryStatus from "../assets/foodDeliveryOrderStatus.png";
import Menu from "../assets/Menu.png";
import Customer from "../assets/Customer.png";
import Setting from "../assets/Setting.png";
import Chat from "../assets/Chat.png";
import Saloon from "../assets/Saloon.png";

import Scifi from "../assets/Sci-fi carousel.jpg";
import Easter from "../assets/Easter egg carousel.jpg";

function Design() {
  const Carousel = [
    { name: "Sci-Fi Concept", img: Scifi },
    { name: "Easter Egg Concept", img: Easter },
  ];
  const coverpage = [
    { name: "The Power of Relationship", img: The_Power_of_Relationship },
    { name: "The Future is already Watching", img: The_Future_is_already_Watching },
  ];
  const foodAppDesign = [
    { name: "Menu Screen", img: Food_Screen },
    { name: "Onboarding Flow", img: onboarding },
    { name: "Cart Summary", img: Cart_Screen },
  ];
  const foodDeliveryDesign = [
    { name: "Home Dashboard", img: foodDeliveryHome },
    { name: "Order Confirmation", img: foodDeliveryConfirmation },
    { name: "Order Status", img: foodDeliveryStatus },
  ];
  const RestaurantPoS = [
    { name: "Catalog Menu", img: Menu },
    { name: "Customer Management", img: Customer },
    { name: "Admin Settings", img: Setting },
    { name: "Trainee Chat System", img: Chat },
  ];
  const SaloonPos = [
    { name: "Sleek Portal Home", img: Saloon },
  ];

  const designSections = [
    { title: "UI/UX Carousel Designs", items: Carousel, cols: "grid-cols-1 sm:grid-cols-2" },
    { title: "Book Cover Pages", items: coverpage, cols: "grid-cols-1 sm:grid-cols-2" },
    { title: "Food App Designs", items: foodAppDesign, cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" },
    { title: "Food Delivery Screens", items: foodDeliveryDesign, cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" },
    { title: "Restaurant Point of Sale (PoS)", items: RestaurantPoS, cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" },
    { title: "Saloon POS Dashboard", items: SaloonPos, cols: "grid-cols-1 max-w-sm" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />

      <div className="w-[90%] max-w-6xl mx-auto my-12 flex-grow">
        {/* Page Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent montserrat inline-block">
            UI/UX Designs & Prototypes
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            A gallery of application interfaces, branding covers, and concept designs.
          </p>
          <div className="w-12 h-1 bg-blue-600 mt-3 rounded-full"></div>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-16">
          {designSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h3 className="text-lg font-bold border-l-4 border-blue-500 pl-3 text-white montserrat uppercase tracking-wider">
                {section.title}
              </h3>

              <div className={`grid ${section.cols} gap-6 sm:gap-8`}>
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIdx * 0.05 }}
                    className="group flex flex-col gap-3"
                  >
                    {/* Image Wrapper */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-lg shadow-black/20 bg-slate-900/40 p-2">
                      <div className="rounded-xl overflow-hidden aspect-auto bg-slate-950 flex items-center justify-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full max-w-full h-auto max-h-[360px] object-contain transition-transform duration-500 group-hover:scale-[1.03] cursor-pointer"
                        />
                      </div>
                    </div>
                    {/* Title */}
                    <div className="text-slate-300 text-sm sm:text-base font-semibold montserrat pl-2 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Design;
