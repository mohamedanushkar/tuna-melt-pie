import React from "react";

interface test {
  str: string;
}
const Hero = () => {
  // Splitting Texts
  const SplitText = "Tuna Melt Pie";

  return (
    <div className=" text-organge h-screen container mx-auto flex flex-col items-center justify-center">
      <h1 className="font-coktail text-center sm:text-6xl">
        Tuna Melt <br /> Pie
      </h1>
    </div>
  );
};

export default Hero;
