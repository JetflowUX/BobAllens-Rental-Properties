import React, { useState } from 'react';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };
  return (
    <div className="w-full pt-32 pb-24 px-6 md:px-12 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 md:mb-32 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 tracking-tight">
            Private <span className="italic font-light">Inquiries</span>
          </h1>
          <p className="font-sans text-warmgray text-lg leading-relaxed">
            Whether you are seeking a residence or wish to discuss adding your
            property to our portfolio, we invite you to connect with our team.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="space-y-12">
              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-4">
                  Office
                </h3>
                <p className="font-sans text-charcoal leading-relaxed">
                  124 Luxury Lane
                  <br />
                  Beverly Hills, CA 90210
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-4">
                  Contact
                </h3>
                <p className="font-sans text-charcoal leading-relaxed">
                  1-800-555-0199
                  <br />
                  inquiries@boballens.com
                </p>
              </div>

              <div>
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-warmgray mb-4">
                  Hours
                </h3>
                <p className="font-sans text-charcoal leading-relaxed">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM PST
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value
                    })
                    }
                    className="block w-full border-0 border-b border-divider bg-transparent py-3 px-0 text-charcoal placeholder:text-transparent focus:border-charcoal focus:ring-0 peer transition-colors"
                    placeholder="Name"
                    required />
                  
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 -translate-y-6 text-xs font-sans uppercase tracking-widest text-warmgray transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-charcoal">
                    
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value
                    })
                    }
                    className="block w-full border-0 border-b border-divider bg-transparent py-3 px-0 text-charcoal placeholder:text-transparent focus:border-charcoal focus:ring-0 peer transition-colors"
                    placeholder="Email"
                    required />
                  
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 -translate-y-6 text-xs font-sans uppercase tracking-widest text-warmgray transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-charcoal">
                    
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  id="inquiry"
                  value={formState.inquiry}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    inquiry: e.target.value
                  })
                  }
                  className="block w-full border-0 border-b border-divider bg-transparent py-3 px-0 text-charcoal focus:border-charcoal focus:ring-0 appearance-none font-sans"
                  required>
                  
                  <option value="" disabled>
                    Select Inquiry Type
                  </option>
                  <option value="rental">Looking to Rent</option>
                  <option value="list">List a Property</option>
                  <option value="press">Press / Media</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-warmgray">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 9l-7 7-7-7">
                    </path>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value
                  })
                  }
                  rows={4}
                  className="block w-full border-0 border-b border-divider bg-transparent py-3 px-0 text-charcoal placeholder:text-transparent focus:border-charcoal focus:ring-0 peer transition-colors resize-none"
                  placeholder="Message"
                  required>
                </textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 -translate-y-6 text-xs font-sans uppercase tracking-widest text-warmgray transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-charcoal">
                  
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="inline-block border border-charcoal bg-charcoal text-cream px-10 py-4 font-sans text-xs uppercase tracking-widest hover:bg-transparent hover:text-charcoal transition-colors">
                
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>);

}