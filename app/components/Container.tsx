"use client";

interface ConntainerProp {
  children: React.ReactNode;
}

const Container: React.FC<ConntainerProp> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px2 px-4 ">
      {children}
    </div>
  );
};

export default Container;
