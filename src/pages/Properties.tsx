import React from "react";
import { ArrowRight } from "lucide-react";
const ALL_PROPERTIES = [
  {
    id: 1,
    title: "The Glass House",
    location: "Hollywood Hills, CA",
    price: "$12,500 / mo",
    beds: 3,
    baths: 3.5,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    title: "Coastal Retreat",
    location: "Malibu, CA",
    price: "$18,000 / mo",
    beds: 4,
    baths: 4,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "Urban Penthouse",
    location: "Downtown LA",
    price: "$9,500 / mo",
    beds: 2,
    baths: 2.5,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "Desert Modern",
    location: "Palm Springs, CA",
    price: "$8,000 / mo",
    beds: 3,
    baths: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 5,
    title: "Historic Estate",
    location: "Pasadena, CA",
    price: "$15,000 / mo",
    beds: 5,
    baths: 4.5,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 6,
    title: "Canyon Hideaway",
    location: "Topanga, CA",
    price: "$7,500 / mo",
    beds: 2,
    baths: 2,
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  },
];

export function Properties() {
  return (
    <div className="w-full pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-charcoal mb-6 tracking-tight">
            Our <span className="italic font-light">Portfolio</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-warmgray leading-relaxed max-w-2xl">
            A meticulously curated selection of the finest rental properties.
            Each home is chosen for its architectural merit, location, and
            uncompromising quality.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {ALL_PROPERTIES.map((property) => (
            <div key={property.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-surface mb-6 relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-warmgray mb-2">
                    {property.location}
                  </p>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center space-x-4 font-sans text-sm text-warmgray">
                    <span>{property.beds} Beds</span>
                    <span className="w-1 h-1 rounded-full bg-divider"></span>
                    <span>{property.baths} Baths</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-sans text-sm text-charcoal">
                    {property.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
