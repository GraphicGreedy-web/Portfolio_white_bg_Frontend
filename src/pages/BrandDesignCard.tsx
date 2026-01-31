import React from "react";
import { useParams } from "react-router-dom";
import { getSingleBrandHook } from "../hooks/fetchhook.js";
function BrandDesignCard() {
  const { brandId } = useParams();
  console.log("got it: ", brandId);

  interface Logo {
    id: number;
    title: string;
    image: string;
    variations: string[];
    colors: string[];
    typography: string;
    mockups: string[];
  }
  const singleBrand = getSingleBrandHook(brandId);
  console.log("main single brand: ", singleBrand);
  if (!singleBrand) {
    return <div>Loading...</div>;
  }

  const logos: Logo[] = [
    {
      id: 1,
      title: "Aurora",
      image:
        "https://images.pexels.com/photos/7841440/pexels-photo-7841440.jpeg?auto=compress&cs=tinysrgb&w=800",
      variations: [
        "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/7841440/pexels-photo-7841440.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      colors: ["#000000", "#FFFFFF", "#F5F5F5"],
      typography: "Inter, Sans-serif",
      mockups: [
        "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 2,
      title: "Artisan Coffee",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      variations: [
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      colors: ["#6B4423", "#E8D5C4", "#2C1810"],
      typography: "Playfair Display, Serif",
      mockups: [
        "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 3,
      title: "Urban Studio",
      image:
        "https://images.pexels.com/photos/7841440/pexels-photo-7841440.jpeg?auto=compress&cs=tinysrgb&w=800",
      variations: [
        "https://images.pexels.com/photos/7841440/pexels-photo-7841440.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      colors: ["#1A1A1A", "#E63946", "#FFFFFF"],
      typography: "Montserrat, Sans-serif",
      mockups: [
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      id: 4,
      title: "Eco Brand",
      image:
        "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800",
      variations: [
        "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      colors: ["#2D5016", "#A8D5BA", "#F4F4F4"],
      typography: "Lato, Sans-serif",
      mockups: [
        "https://images.pexels.com/photos/7841440/pexels-photo-7841440.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  ];
  // const logo = logos.find((logo) => logo.id === parseInt(brandId as string));
  return (
    <div className="mx-auto rounded-3 mt-[5em]">
      {/* <div className="border border-dark mx-auto text-center rounded-5 d-flex flex-grow w-[100%] h-[100%]"> */}
        {/* <div> */}
          <img src={singleBrand?.image} alt={singleBrand?.title}  className="mx-auto"/>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default BrandDesignCard;
