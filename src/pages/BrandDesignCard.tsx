import React from "react";
import { useParams } from "react-router-dom";
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
  const logo = logos.find((logo) => logo.id === parseInt(brandId as string));
  const mediumWidth = " md:w-[88%]";
  return (
    <div
      style={{ marginTop: "5rem", width: "75%" }}
      className="border border-dark mx-auto rounded-3 bg-[#062f24]"
    >
      <div
        className="border border-dark mx-auto text-center rounded-5 d-flex flex-grow"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className="logo" style={{ height: "100%", width: "80%" }}>
          <p
            className="text-[#eeeeee] font-serif text-[2.5rem] md:text-[1.8rem] sm:text-[1.8rem]"
            style={{ marginLeft: "-8%" }}
          >
            Logo Design
          </p>
        </div>
        <div
          className="logo bg-[green] w-[100%] rounded-3"
          style={{ height: "73%" }}
        >
          Image
        </div>
        <div
          className="aurora position-fixed text-[12rem] font-bold text-[#eeeeee] font-sans sm:text-[8rem] sm:mt-[7rem] sm:translate-x-[3rem] lg:mt-[9%] lg:text-[12rem] lg:translate-y-[-4rem] lg:ml-[4%]  "
          style={{
            height: "10rem",
            width: "10rem",
          }}
        >
          Auraro
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className="border h-[70%] w-[30%]  translate-x-[-4rem]">Left</div>
        <div className="border h-[70%] w-[30%] mr-[10%] translate-x-2 text-[white] font-[serif] p-3">
          Right
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className="border h-[80%] w-[83%] text-[white] md:w-[88%]">
          What does company do
        </div>
      </div>
      <div
        className={`border border-dark justify-content-center rounded-5 d-flex align-items-center`}
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div
        className="border border-dark justify-content-center rounded-5 d-flex align-items-center"
        style={{ width: "100%", height: "20rem" }}
      >
        <div className={`border h-[80%] w-[83%] text-[white] ${mediumWidth}`}>
          Mix Width
        </div>
      </div>
      <div className=" z-50 flex items-center justify-center p-6">
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl lg:text-8xl font-serif font-bold mb-8">
            {logo.title}
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Primary Logo
              </h3>
              <img
                src={logo.image}
                alt={logo.title}
                className="h-25 rounded-xl"
                style={{ height: "20rem", width: "20rem" }}
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Variations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {logos.map((variation, idx) => (
                  <img
                    key={idx}
                    src={variation}
                    alt={`Variation ${idx + 1}`}
                    className="w-full rounded-xl"
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Color Palette
              </h3>
              <div className="flex gap-4">
                {logo.colors.map((color) => (
                  <div key={color} className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg border-2 border-gray-200 mb-2"
                      style={{ backgroundColor: color }}
                    />
                    <p className="text-xs font-mono text-gray-600">{color}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
                Typography
              </h3>
              <p className="text-gray-600">{logo.typography}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Mockups
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {logo.mockups.map((mockup, idx) => (
                  <img
                    key={idx}
                    src={mockup}
                    alt={`Mockup ${idx + 1}`}
                    className="w-full rounded-xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default BrandDesignCard;
