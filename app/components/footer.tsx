import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 p-5 border">
      <div className="flex justify-between">
        <div>
          <h1>@jedpeek</h1>
          <h1>@jedpeek</h1>
        </div>
        <div>
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
