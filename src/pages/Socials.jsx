import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { FaRobot } from "react-icons/fa6"; // for Arattai (robot icon)

const Socials = () => (
  <div className="py-12 bg-slate-900/70 text-gray-100">
    <div className="container mx-auto px-6 text-center space-y-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-glow">
        Connect with Us
      </h2>

      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-6 md:gap-12 items-center">
        <a
          href="https://youtube.com/@mrgeekforgeeksofficial?si=g1eGHFSOB8o5aVeM"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-red-500 font-semibold transition-colors"
        >
          <FaYoutube className="text-xl" /> YouTube
        </a>

        <a
          href="https://www.linkedin.com/company/mr-geek-for-geeks/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 font-semibold transition-colors"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>

        <a
          href="https://www.instagram.com/mrgeekforgeeks?igsh=bHc1emUzd2J5aTV1"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-pink-500 font-semibold transition-colors"
        >
          <FaInstagram className="text-xl" /> Instagram
        </a>

        <a
          href="https://www.instagram.com/cyberyoddhabymrgeekforgeeks?igsh=cWNjcWFuem1ucHlj"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-pink-500 font-semibold transition-colors"
        >
          <FaInstagram className="text-xl" /> Instagram Page 2
        </a>

        <a
          href="https://whatsapp.com/channel/0029Vat8vfYH5JM4T2IQAu2h"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-green-500 font-semibold transition-colors"
        >
          <FaWhatsapp className="text-xl" /> WhatsApp
        </a>

        <a
          href="https://www.facebook.com/share/1ZkVmKHZ5P/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 font-semibold transition-colors"
        >
          <FaFacebook className="text-xl" /> Facebook Page 1
        </a>

        <a
          href="https://www.facebook.com/share/1CyGEC5x1h/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 font-semibold transition-colors"
        >
          <FaFacebook className="text-xl" /> Facebook Page 2
        </a>

        <a
          href="https://aratt.ai/@mrgeekforgeeks"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-purple-500 font-semibold transition-colors"
        >
          <FaRobot className="text-xl" /> Arattai
        </a>
      </div>
    </div>
  </div>
);

export default Socials;
