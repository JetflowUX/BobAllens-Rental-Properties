import React from 'react';
export function About() {
  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:mb-32 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 tracking-tight">
            The <span className="italic font-light">Standard</span> of Living
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-7">
            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-surface">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Architectural detail"
                className="w-full h-full object-cover" />
              
            </div>
          </div>

          <div className="md:col-span-5 md:pt-24">
            <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-8">
              About Bob Allen
            </h2>

            <div className="space-y-8 font-sans text-charcoal/80 leading-relaxed">
              <p className="text-lg md:text-xl font-serif text-charcoal leading-snug">
                For over two decades, Bob Allen has redefined the luxury rental
                market by treating properties not as commodities, but as curated
                experiences.
              </p>

              <p>
                What began as a single, meticulously restored mid-century modern
                home in the hills has grown into an exclusive portfolio of the
                most sought-after residences. Our approach is rooted in a simple
                philosophy: true luxury is found in the details.
              </p>

              <p>
                We partner with discerning property owners and architectural
                purists to offer homes that inspire. From the quality of the
                light to the texture of the materials, every property in our
                collection must meet an exacting standard before it bears the
                Bob Allen name.
              </p>

              <p>
                Our clientele expects more than just a place to stay; they
                expect a seamless extension of their lifestyle. We provide an
                unparalleled level of service, ensuring that every aspect of the
                rental experience is handled with discretion, efficiency, and
                grace.
              </p>
            </div>

            <div className="mt-16 pt-16 border-t border-divider">
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Our Core Values
              </h3>
              <ul className="space-y-6">
                {[
                {
                  title: 'Curation',
                  desc: 'We select only properties with distinct architectural character and uncompromising quality.'
                },
                {
                  title: 'Discretion',
                  desc: 'We protect the privacy of our clients and property owners with absolute vigilance.'
                },
                {
                  title: 'Service',
                  desc: 'We anticipate needs before they arise, providing a frictionless living experience.'
                }].
                map((value, idx) =>
                <li key={idx}>
                    <h4 className="font-sans text-sm font-medium text-charcoal mb-1">
                      {value.title}
                    </h4>
                    <p className="font-sans text-sm text-warmgray">
                      {value.desc}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);

}