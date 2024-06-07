import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-15 flex justify-between">
        <Image src="/images/logo.png" width={80} height={80} />
      </div>
      <p className=" container p-15 text-slate-600 text-right">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
