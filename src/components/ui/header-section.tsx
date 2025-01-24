import Image from "next/image";

const HeaderSection = async () => {
  return (
    <main className="mt-4 bg-base-300 rounded-xl p-4 flex items-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <Image
            src="/pic.jpg"
            alt={"Profile Photo"}
            width={300}
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="ml-4">
        <h2 className="text-4xl font-bold">
          Hello <span className="text-teal-300">.</span>
        </h2>
        <p className="text-xl">
          I am{" "}
          <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
            Sumit Kumar
          </span>
        </p>
      </div>
    </main>
  );
};

export default HeaderSection;
