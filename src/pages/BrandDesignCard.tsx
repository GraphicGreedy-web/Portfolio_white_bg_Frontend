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
