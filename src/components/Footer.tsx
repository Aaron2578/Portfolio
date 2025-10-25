function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="hover:text-black bg-white w-full md:max-w-none md:bg-none text-gray-600 text-sm md:text-md text-center rounded-b-lg py-2 cursor-pointer montserrat fixed bottom-0 left-1/2 transform -translate-x-1/2">
      <p>Created by Aaron &copy; {date} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
