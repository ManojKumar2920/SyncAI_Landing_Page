'use client'
import React, { useState } from "react";
import { FaPlus as Plus, FaMinus as Minus } from "react-icons/fa6";
import { GeneralFAQ, WebsiteFAQ } from "./FAQContent";
import { useScrollRevealBottom } from "../Reveal/ScrollReveal";

const FAQ = () => {
  const [selectedSection, setSelectedSection] = useState("General FAQ");

  const renderContent = () => {
    const faqs = selectedSection === "General FAQ" ? GeneralFAQ : WebsiteFAQ;
    return faqs.map((faq) => (
      <div key={faq.id} className="text-white">
        <h1 className="text-3xl font-bold">{faq.question}</h1>
        <p className="py-2 text-sm">{faq.answer}</p>
      </div>
    ));
  };

  useScrollRevealBottom();

  return (
    <div className="z-20 flex flex-col items-center justify-center reveal">
      <div className="pt-16">
        <h2 className="text-center text-4xl text-white">Frequently Asked Questions</h2>
      </div>
      <div className="flex items-start justify-center gap-6 w-[80%] p-20">
        <div className="w-[30%]">
          <div className="rounded-3xl bg-gradient-to-b from-[#252627] to-[#121212] text-white px-6 py-4">
            <h1 className="py-3 border-b">Whitepaper</h1>
            <h1
              className="py-3 border-b flex items-center justify-between cursor-pointer"
              onClick={() => setSelectedSection("General FAQ")}
            >
              General FAQ {selectedSection === "General FAQ" ? <Minus /> : <Plus />}
            </h1>
            <h1
              className="py-3 flex items-center justify-between cursor-pointer"
              onClick={() => setSelectedSection("Website & XP")}
            >
              Website & XP {selectedSection === "Website & XP" ? <Minus /> : <Plus />}
            </h1>
          </div>
        </div>
        <div className="w-[70%]">{renderContent()}</div>
      </div>
    </div>
  );
};

export default FAQ;
