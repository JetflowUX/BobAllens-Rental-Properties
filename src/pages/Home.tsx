import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const FEATURED_PROPERTIES = [
{
  id: 1,
  title: 'The Glass House',
  location: 'Hollywood Hills, CA',
  price: '$12,500 / mo',
  image:
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
},
{
  id: 2,
  title: 'Coastal Retreat',
  location: 'Malibu, CA',
  price: '$18,000 / mo',
  image:
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
}];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-24 px-6 md:px-12 pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Luxury interior"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-charcoal/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-cream/80 mb-6">
            Exceptional Living
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] tracking-tight max-w-4xl text-balance mb-10">
            Curated spaces for <br />
            <span className="italic font-light">refined</span> living.
          </h1>
          <Link
            to="/properties"
            className="inline-flex items-center space-x-4 border-b border-cream/50 pb-2 text-cream hover:border-cream transition-colors group">
            
            <span className="font-sans text-sm uppercase tracking-widest">
              Explore Portfolio
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5} />
            
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-5">
            <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-6">
              Our Philosophy
            </h2>
            <p className="font-serif text-3xl md:text-4xl text-charcoal leading-snug text-balance">
              We believe a home is more than an address. It is the canvas upon
              which your life unfolds.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-sans text-warmgray leading-relaxed mb-8">
              Bob Allen's Rental Properties represents a curated collection of
              the most exceptional residences. We look beyond square footage,
              seeking out properties with architectural significance, impeccable
              design, and an undeniable sense of place.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center space-x-3 text-charcoal hover:text-olive transition-colors group">
              
              <span className="font-sans text-xs uppercase tracking-widest">
                Read our story
              </span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5} />
              
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties (Asymmetric Layout) */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Featured <span className="italic font-light">Residences</span>
            </h2>
            <Link
              to="/properties"
              className="hidden md:inline-flex items-center space-x-3 text-warmgray hover:text-charcoal transition-colors group">
              
              <span className="font-sans text-xs uppercase tracking-widest">
                View All
              </span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5} />
              
            </Link>
          </div>

          <div className="space-y-32">
            {FEATURED_PROPERTIES.map((property, index) =>
            <div
              key={property.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
                <div
                className={`md:col-span-8 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                
                  <div className="aspect-[4/3] overflow-hidden bg-cream">
                    <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
                  
                  </div>
                </div>
                <div
                className={`md:col-span-4 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-4">
                    {property.location}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                    {property.title}
                  </h3>
                  <p className="font-sans text-warmgray mb-8">
                    {property.price}
                  </p>
                  <Link
                  to="/properties"
                  className="inline-block border border-divider px-8 py-4 font-sans text-xs uppercase tracking-widest text-charcoal hover:bg-charcoal hover:text-cream transition-colors">
                  
                    View Details
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 md:hidden">
            <Link
              to="/properties"
              className="inline-flex items-center space-x-3 text-warmgray hover:text-charcoal transition-colors group">
              
              <span className="font-sans text-xs uppercase tracking-widest">
                View All Properties
              </span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5} />
              
            </Link>
          </div>
        </div>
      </section>
    </div>);

}