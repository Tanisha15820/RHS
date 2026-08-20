// import { faq } from "../assets/images/faq.png";

// const FAQ = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20">
//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
//         {/* Heading */}
//         <div className="mb-10 text-center">
//           <div className="mb-3 flex items-center justify-center gap-3">
//             <span className="h-px w-7 bg-[#20B7AE]" />

//             <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
//               FAQ'S
//             </span>
//             <span className="h-px w-7 bg-[#20B7AE]" />
//           </div>

//           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
//             Frequently Asked{" "}
//             <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
//               Questions
//             </span>
//           </h2>

//           <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
//             Find answers to common questions about our products,
//             <br className="hidden sm:block" />
//             services and support.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         <div className="">
//           <img src={faq} alt="faq image" />
//         </div>
//         <div className="flex items-center ">

//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import { useState } from "react";
import faq from "../assets/images/faq.png";

// FAQ Data
const faqData = [
  {
    question: "What types of healthcare products do you offer?",
    answer:
      "We offer a wide range of advanced medical devices and equipment including Bipolar Plasma Generators, Diode Lasers, Endoscopy Systems, Flexible Video URS and more. Our products are designed to deliver precision, safety and reliability in modern healthcare.",
  },
  {
    question: "Are your products certified and safe to use?",
    answer:
      "Yes, our healthcare products are manufactured according to required quality and safety standards. We focus on providing reliable and safe medical equipment for healthcare professionals.",
  },
  {
    question: "Do you provide installation and training?",
    answer:
      "Yes, we provide installation support and product training to help healthcare professionals and medical staff use our equipment correctly and efficiently.",
  },
  {
    question: "What kind of after-sales support do you provide?",
    answer:
      "We provide dedicated after-sales support, maintenance assistance and technical guidance whenever required to ensure smooth operation of our products.",
  },
  {
    question: "Do you offer warranty on your products?",
    answer:
      "Yes, warranty coverage is available on our products. The warranty period may vary depending on the product and its terms.",
  },
  {
    question: "Do you supply products internationally?",
    answer:
      "Yes, we work with healthcare organizations and customers across different regions and can provide international product supply depending on the location.",
  },
];

const FAQ = () => {
  // Stores which FAQ is currently open
  const [openIndex, setOpenIndex] = useState(0);

  // Open / close FAQ
  const handleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] py-16 sm:py-20">
      {/* Decorative Plus Icons */}
      <span className="absolute right-8 top-8 text-2xl font-light text-[#DCE5F5]">
        +
      </span>

      <span className="absolute right-5 top-20 text-2xl font-light text-[#DCE5F5]">
        +
      </span>

      <span className="absolute right-0 top-36 text-2xl font-light text-[#DCE5F5]">
        +
      </span>

      <span className="absolute left-3 top-1/2 text-2xl font-light text-[#DCE5F5]">
        +
      </span>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div className="mb-10 text-center">
          {/* Small Heading */}
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#20B7AE]" />

            <span className="text-xs font-bold uppercase tracking-wider text-[#20AFA7]">
              FAQ'S
            </span>

            <span className="h-px w-7 bg-[#20B7AE]" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#7C879C]">
            Find answers to common questions about our products,
            <br className="hidden sm:block" />
            services and support.
          </p>
        </div>

        {/* =====================================================
            FAQ CONTENT
        ====================================================== */}

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.9fr_1.25fr]">
          {/* =================================================
              LEFT SIDE - IMAGE
          ================================================= */}

          <div className="relative min-h-[430px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <img
              src={faq}
              alt="Healthcare products"
              className="h-full w-full object-cover"
            />
          </div>

          {/* =================================================
              RIGHT SIDE - FAQ ACCORDION
          ================================================= */}

          <div className="flex flex-col gap-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    overflow-hidden
                    rounded-xl
                    border
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    ${
                      isOpen ? "border-[#E7ECF5] shadow-md" : "border-slate-100"
                    }
                  `}
                >
                  {/* Question */}
                  <button
                    onClick={() => handleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    {/* Left Side */}
                    <div className="flex min-w-0 items-center gap-4">
                      {/* Icon */}
                      {/* <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-lg
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "bg-[#E4F9F7] text-[#20B7AE]"
                              : "bg-[#F3F7FF] text-[#4D7CFE]"
                          }
                        `}
                      >
                        {index === 0 && "▣"}
                        {index === 1 && "♢"}
                        {index === 2 && "♧"}
                        {index === 3 && "✣"}
                        {index === 4 && "▤"}
                        {index === 5 && "◎"}
                      </div> */}

                      {/* Question */}
                      <span className="text-sm font-semibold text-[#263653] sm:text-[15px]">
                        {item.question}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`
                        shrink-0
                        text-sm
                        text-[#60708C]
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : "rotate-0"}
                      `}
                    >
                      ⌄
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pl-[76px]">
                        <p className="max-w-2xl text-xs leading-6 text-[#7C879C] sm:text-sm">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
