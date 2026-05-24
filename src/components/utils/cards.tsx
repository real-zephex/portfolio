"use client";

import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  title: string;
  message: string;
  image: string;
  url: string;
}

const Cards = ({ title, message, image, url }: CardsProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-glass transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-300">
        <h2 className="text-xl font-bold text-white mb-1 drop-shadow-md">
          {title}
        </h2>
        <p className="text-sm text-gray-200 line-clamp-2 mb-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {message}
        </p>
        <Link
          href={url}
          target="_blank"
          className="btn btn-sm btn-primary w-full lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-150"
        >
          View Demo
        </Link>
      </div>
    </div>
  );
};

export default Cards;
