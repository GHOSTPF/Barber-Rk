import React from "react";
import { Star, CreditCard, Truck, Percent } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BenefitsCarousel: React.FC = () => {
  const benefits = [
    {
      icon: <Star />,
      title: "+ 2500 avaliações",
      subtitle: "5 estrelas no Google",
    },
    {
      icon: <Percent />,
      title: "Primeira compra",
      subtitle: "cupom: barbeiro5",
    },
    {
      icon: <CreditCard />,
      title: "Parcele no cartão",
      subtitle: "em até 12x",
    },

    {
      icon: <Truck />,
      title: "Frete grátis*",
      subtitle: "acima de R$299",
    },
  ];

  return (
    <div className="py-8 bg-barber-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-transform hover:translate-y-[-5px]"
            >
              <div className="text-barber-800 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-barber-300">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsCarousel;
