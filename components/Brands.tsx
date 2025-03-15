import React from "react";
import arkoLogo from "../app/assets/arko-LOGO.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BenefitsCarousel: React.FC = () => {
  const benefits = [
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/JRL.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/Undercut.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/Andis.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/JRL.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/Fox.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/Kemei.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/Kemei.jpg?fa532018b19235886365a71843cdd11d",
    },
    {
      image: "https://images.tcdn.com.br/files/728448/themes/117/img/settings/Kemei.jpg?fa532018b19235886365a71843cdd11d",
    },
  ];

  return (
    <div className="py-5 bg-barber-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Nossas Marcas
      </h2>
      <div className="container mx-auto px-4 mb-1">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:translate-y-[-5px]">
                <img
                  src={benefit.image}
                  
                  className="w-24 h-24 mb-2"
                />
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BenefitsCarousel;
