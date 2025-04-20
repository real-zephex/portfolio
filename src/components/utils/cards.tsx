import Image from "next/image";
import Link from "next/link";

const Cards = ({
  title,
  message,
  image,
  url,
}: {
  title: string;
  message: string;
  image: string;
  url: string;
}) => {
  return (
    <div className="bg-base-200 rounded-xl w-auto h-72 shadow-lg hover:bg-base-100 transition-colors active:scale-95 relative">
      <Image
        src={image}
        quality={100}
        width={500}
        height={500}
        className=" rounded-t-xl w-full object-cover"
        alt="Project card"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-2">{message}</p>
        <Link
          href={url}
          target="_blank"
          className="absolute bottom-0 left-0 p-4"
        >
          <button className="btn btn-outline btn-sm mt-2 btn-success">
            Visit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
