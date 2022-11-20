import React from "react";

function HeaderItem({ Icon, title } : {Icon: any, title: string}) {
  return (
    <div className="group flex flex-col hover:text-white cursor-pointer sm:w-20 w-12 items-center">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p
        className="opacity-0
             tracking-widest 
             group-hover:opacity-100  "
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
