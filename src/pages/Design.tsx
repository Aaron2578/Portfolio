import Footer from "../components/Footer";
import Header from "../components/Header";

import The_Power_of_Relationship from "../assets/The Power of Relationship - Cover Page.jpeg";
import The_Future_is_already_Watching from "../assets/The Future is already watching - Cover Page.jpeg"
import Food_Screen from "../assets/Food Screen.jpg"
import onboarding from "../assets/Onboarding.jpg"
import Cart_Screen from "../assets/Cart Screen.jpg"
import foodDeliveryHome from "../assets/foodDeliveryHome.png"
import foodDeliveryConfirmation from "../assets/foodDeliveryOrderConfirm.png"
import foodDeliveryStatus from "../assets/foodDeliveryOrderStatus.png"
import Menu from "../assets/Menu.png"
import Customer from "../assets/Customer.png"
import Setting from "../assets/Setting.png"
import Chat from "../assets/Chat.png"

function Design() {
  const coverpage = [
    {
      name: "The Power of Relationship",
      img: The_Power_of_Relationship,
    },
    {
      name: "The Future is already Watching",
      img: The_Future_is_already_Watching,
    },
  ];
  const foodAppDesign = [
    {
      name: "Menu",
      img: Food_Screen,
    }, 
    {
      name: "Onboarding",
      img: onboarding,
    },
    {
      name: "Cart",
      img: Cart_Screen,
    },
  ];
  const foodDeliveryDesign = [
    {
      name: "Home",
      img: foodDeliveryHome,
    }, 
    {
      name: "Order Confirmation",
      img: foodDeliveryConfirmation,
    },
    {
      name: "Order Status",
      img: foodDeliveryStatus,
    },
  ];
  const RestaurantPoS = [
    {
      name: "Menu",
      img: Menu,
    }, 
    {
      name: "Customer",
      img: Customer,
    },
    {
      name: "Setting",
      img: Setting,
    },
    {
      name: "Chat",
      img: Chat,
    },
  ];

  return (
    <div>
      <Header />
      <h1 className="text-white font-bold text-xl w-[90%] m-auto mt-10">Cover Pages</h1>
      <div className="text-white w-[90%] m-auto my-6 flex flex-col md:flex-row flex-wrap justify-between items-center tagesschrift-regular">
        {coverpage.map((i) => (
          <div key={i.name} className="text-center my-10">
            <div className="relative inline-block">
                <img
                  src={i.img}
                  alt={i.name}
                  className="h-50 md:h-70  rounded-2xl hover:opacity-90 transition duration-200 border-2"
                />
            </div>

            {/* Certificate Name */}
            <div className="mt-1 text-xl font-medium">{i.name}</div>
          </div>
        ))}
      </div>
      <h1 className="text-white font-bold text-xl w-[90%] m-auto mt-10">Food App Screens</h1>
      <div className="text-white w-[90%] m-auto my-6 flex flex-col md:flex-row flex-wrap justify-between items-center tagesschrift-regular">
        {foodAppDesign.map((i) => (
          <div key={i.name} className="text-center my-10">
            <div className="relative inline-block">
                <img
                  src={i.img}
                  alt={i.name}
                  className="h-50 md:h-70  rounded-2xl hover:opacity-90 transition duration-200 border-2"
                />
            </div>

            {/* Certificate Name */}
            <div className="mt-1 text-xl font-medium">{i.name}</div>
          </div>
        ))}
      </div>
      <h1 className="text-white font-bold text-xl w-[90%] m-auto mt-10">Food Delivery Screens</h1>
      <div className="text-white w-[90%] m-auto my-6 flex flex-col md:flex-row flex-wrap justify-between items-center tagesschrift-regular">
        {foodDeliveryDesign.map((i) => (
          <div key={i.name} className="text-center my-10">
            <div className="relative inline-block">
                <img
                  src={i.img}
                  alt={i.name}
                  className="h-50 md:h-70  rounded-2xl hover:opacity-90 transition duration-200 border-2"
                />
            </div>

            {/* Certificate Name */}
            <div className="mt-1 text-xl font-medium">{i.name}</div>
          </div>
        ))}
      </div>
      <h1 className="text-white font-bold text-xl w-[90%] m-auto mt-10">Restaurant PoS</h1>
      <div className="text-white w-[90%] m-auto my-6 flex flex-col md:flex-row flex-wrap justify-between items-center tagesschrift-regular">
        {RestaurantPoS.map((i) => (
          <div key={i.name} className="text-center my-10">
            <div className="relative inline-block">
                <img
                  src={i.img}
                  alt={i.name}
                  className="h-50 md:h-70  rounded-2xl hover:opacity-90 transition duration-200 border-2"
                />
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

export default Design;
