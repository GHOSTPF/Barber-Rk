import { Scissors } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      title: 'O Melhor para seu',
      subtitle: 'Estilo',
      description: 'Descubra nossa seleção exclusiva de produtos profissionais para cuidados masculinos. Qualidade e tradição em cada detalhe.',
    },
    {
      image: 'https://images.unsplash.com/photo-1633121050918-ab208f1508b7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Produtos Premium',
      subtitle: 'para Barbeiros',
      description: 'Descubra nossa seleção exclusiva de produtos profissionais para cuidados masculinos. Qualidade e tradição em cada detalhe.',
    },
    {
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      title: 'Os produtos mais',
      subtitle: 'top do Mercado',
      description: 'Descubra nossa seleção exclusiva de produtos profissionais para cuidados masculinos. Qualidade e tradição em cada detalhe.',
    },
    // Adicione mais slides conforme necessário
  ];

  return (
    <div className="relative h-full bg-barber-900 overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-barber-900 to-barber-900/40" />
            </div>
            
            {/* Ajuste o padding aqui */}
            <div className="relative container mx-auto px-4 h-full flex items-center py-20">
              <div className="max-w-2xl">
                <div className="flex items-center mb-4">
                  <Scissors className="text-barber-200 mr-2" size={24} />
                  <span className="text-barber-200 font-display text-lg">Produtos Premium</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                  {slide.title}
                  <span className="text-barber-300 block">{slide.subtitle}</span>
                </h1>
                <p className="text-barber-100 text-lg mb-8 max-w-lg">
                  {slide.description}
                </p>
                <button className="bg-barber-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-barber-600 transition-colors">
                  Explorar Produtos
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      
    </div>
  );
}