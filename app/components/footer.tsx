import { Instagram, Linkedin, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 p-5 border">
      <div className="flex justify-between">
        <div>
          <Link href="https://www.linkedin.com/in/jed-peek/">
            <h1>@jedpeek 2024</h1>
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/jed-peek/">
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
