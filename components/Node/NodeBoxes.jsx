import React from "react";

const NodeBoxes = ({ layer }) => {
  return (
    <div className="flex p-10">
      <div className="text-white bg-[#151515] p-4 rounded-3xl">
        <div className="border-b py-3 border-slate-500">
          {layer.title && <h1 className="text-center 2xl:text-2xl">{layer.title}</h1>}
        </div>
        <div>{layer.items.header && <p>{layer.items.header}</p>}</div>
        {layer.items.map((item, index) => (
          <div key={index}>
            {item.header && (
              <div className="pt-2 ">
                <p className="text-start text-sm 2xl:text-md">{item.header}</p>
              </div>
            )}
            <div className=" bg-gradient-to-b p-[1px] from-blue-500 to-slate-500 rounded-xl my-3">
              <div className="flex items-center justify-start p-3 gap-1 rounded-xl bg-[#151515]">
                <div className="text-md 2xl:text-2xl gap-2 text-blue-500">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodeBoxes;
