import { assets } from "../assets/assets";
import logo from "../assets/logo.svg";
import {motion} from "motion/react"

const Footer = () => {
  return (
    <motion.footer
     initial={{opacity:0, y:20}}
     whileInView={{opacity:1, y:0}}
     transition={{duration:0.6, delay:0.2}}
     className="px-6 md:px-16 md:mt-30 lg:px-24 bg-white">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor">

        <div>
          <img
            src={logo}
            alt="logo"
            className="h-8 md:h-9"
          />

          <p className="max-w-xs mt-3 text-gray-600 text-sm">
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a href="#" aria-label="Facebook">
              <img className="w-5 h-5" src={assets.facebook_logo} alt="" />
            </a>
            <a href="#" aria-label="Instagram">
              <img className="w-5 h-5" src={assets.instagram_logo} alt="" />
            </a>
            <a href="#" aria-label="Twitter">
              <img className="w-5 h-5" src={assets.twitter_logo} alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-1/2 gap-8">

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Quick Links
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-gray-600 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">Browse Cars</a></li>
              <li><a href="#">List Your Car</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Resources
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-gray-600 text-sm">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Insurance</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">
              Contact
            </h2>
            <ul className="mt-3 flex flex-col gap-1.5 text-gray-600 text-sm">
              <li>Bro Pg, Suraj Vihar</li>
              <li>Dwarka, Delhi-110078</li>
              <li>+91 9782400666</li>
              <li>info@example.com</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} CarRental. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
