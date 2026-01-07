const Brands = () => {
  const brandLogos = [
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305446868-59e861c007d5?w=150&h=60&fit=crop",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150&h=60&fit=crop",
    "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=150&h=60&fit=crop",
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=150&h=60&fit=crop",
    "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=150&h=60&fit=crop",
  ];

  return (
    <section className="py-12 lg:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Trusted by 120+ Companies Across India
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
