import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import thankGif from "../assets/thank-you-thanks.gif"; // Make sure to place the GIF in src folder or adjust the path
import Footer from "../components/Footer";

function ThankYou() {
  return (
    <section className="thanks min-h-screen flex items-center justify-center bg-white tagesschrift-regular">
      <div className="container">
        <div className="thanks-wrapper">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              THANK YOU FOR CONTACTING ME...
            </h2>
            <div className="mb-4">
              <img src={thankGif} alt="thanking-gif" className="mx-auto" />
            </div>
            <span className="block mb-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-black hover:text-blue-600"
              >
                <i className="fas fa-reply"></i>
                <FaArrowLeft />
                <span>GO BACK</span>
              </Link>
            </span>
            <h5 className="text-gray-700">I will reach you soon...</h5>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ThankYou;
