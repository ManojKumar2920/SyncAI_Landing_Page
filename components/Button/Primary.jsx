import React from "react";
import Link from "next/link";

const Primary = ({ href, children }) => {
  return (
    <Link href={href} className=" p-4 rounded-full border text-sm border-blue-500">
      {children}
    </Link>
  );
};

export default Primary;
