import React from "react";
import Link from "next/link";

const Primary = ({ href, children }) => {
  return (
    <Link href={href} className=" p-4 rounded-full border text-sm hover:bg-gradient-to-b transition ease-linear hover:-translate-y-1 hover:scale-220 duration-300 from-[#193558] to-[#41CEEC] border-blue-500">
      {children}
    </Link>
  );
};

export default Primary;
