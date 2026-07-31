function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="w-full bg-slate-950/80 border-t border-white/5 text-gray-500 hover:text-white text-sm text-center py-6 montserrat mt-auto transition-colors duration-500 relative z-10">
      <p>Created by Aaron &copy; {date} All Rights Reserved</p>
    </div>
  );
}

export default Footer;
