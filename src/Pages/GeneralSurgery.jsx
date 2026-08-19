// import React from "react";

// import generalSurgeryBg from "../assets/images/General_Surgery.png";

// const GeneralSurgery = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <section
//         className="relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${generalSurgeryBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
//           {/* Heading */}
//           <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
//             General{" "}
//             <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
//               Surgery
//             </span>
//           </h1>

//           {/* Small line */}
//           <div className="mt-3 h-[2px] w-10 bg-primary" />

//           {/* Description */}
//           <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 md:text-sm">
//             Explore our wide range of high-quality general surgery instruments
//             and equipment.
//           </p>
//         </div>
//         <div className="grid grid-cols-2">
//           <div className="flex items-center bg-white shadow-xl">
//             <h1 className="font-bold text-lg">Categories</h1>
//           </div>
//           <div></div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GeneralSurgery;

import React, { useState } from "react";

import generalSurgeryBg from "../assets/images/surgery_banner.png";
import bipolarPlasmaGenerator from "../assets/images/bipolar_plasma_generator.png";
import diodeLaser from "../assets/images/diode_laser.png";

const GeneralSurgery = () => {
  const [generalSurgeryOpen, setGeneralSurgeryOpen] = useState(true);

  const products = [
    {
      name: "Bipolar Plasma Generator",
      image: bipolarPlasmaGenerator,
    },
    {
      name: "Diode Laser",
      image: diodeLaser,
    },
    {
      name: "Diode Laser",
      image: diodeLaser,
    },
  ];

  const subCategories = ["Bipolar Plasma Generator", "Diode Laser"];

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${generalSurgeryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            General{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Surgery
            </span>
          </h1>

          <div className="mt-3 h-[2px] w-10 bg-primary" />

          <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 md:text-sm">
            Explore our wide range of high-quality general surgery instruments
            and equipment.
          </p>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS SECTION
      ====================================================== */}

      <section className="bg-white px-5 py-8 md:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          {/* =================================================
              TOP BAR
          ================================================== */}

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Product Count */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                ☷
              </div>

              <p className="text-sm text-slate-500">
                Showing <span className="font-medium text-slate-700">1–8</span>{" "}
                of <span className="font-medium text-slate-700">48</span>{" "}
                products
              </p>
            </div>

            {/* Sort + Filter */}
            <div className="flex items-center gap-3">
              <button
                className="
                  flex items-center gap-2 rounded-lg border border-slate-200
                  bg-white px-4 py-2.5 text-xs font-medium text-slate-600
                  transition hover:border-primary hover:text-primary
                "
              >
                <span>☷</span>
                Sort by
                <span className="text-slate-400">⌄</span>
              </button>

              <button
                className="
                  flex items-center gap-2 rounded-lg border border-slate-200
                  bg-white px-4 py-2.5 text-xs font-medium text-slate-600
                  transition hover:border-primary hover:text-primary
                "
              >
                <span>▽</span>
                Filter
              </button>
            </div>
          </div>

          {/* =================================================
              SIDEBAR + PRODUCTS
          ================================================== */}

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr]">
            {/* =================================================
                LEFT SIDEBAR
            ================================================== */}

            <aside>
              <div
                className="
                  rounded-xl border border-slate-100 bg-white
                  p-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                "
              >
                {/* Sidebar Heading */}
                <h2 className="mb-4 text-sm font-bold text-slate-800">
                  Categories
                </h2>

                {/* Main Category */}
                <div className="relative mb-2">
                  {/* Blue Active Line */}
                  <div className="absolute -left-4 top-1 h-6 w-[2px] bg-primary" />

                  <button
                    onClick={() => setGeneralSurgeryOpen(!generalSurgeryOpen)}
                    className="flex w-full items-center justify-between"
                  >
                    <p className="text-[13px] font-semibold text-primary">
                      General Surgery
                    </p>

                    <span className="text-xs text-primary">
                      {generalSurgeryOpen ? "⌃" : "⌄"}
                    </span>
                  </button>
                </div>

                {/* Sub Categories */}
                {generalSurgeryOpen && (
                  <div className="space-y-1">
                    {subCategories.map((category, index) => (
                      <button
                        key={category}
                        className={`
                          w-full rounded-md px-3 py-2 text-left text-xs
                          transition
                          ${
                            index === 0
                              ? "bg-primary/10 font-medium text-primary"
                              : "text-slate-500 hover:bg-slate-50 hover:text-primary"
                          }
                        `}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}

                {/* Other Categories */}
                <div className="mt-4 space-y-1">
                  {["Urology", "Ortho"].map((category) => (
                    <button
                      key={category}
                      className="
                        flex w-full items-center justify-between
                        rounded-md px-2 py-2 text-left text-xs
                        font-medium text-slate-600
                        transition hover:bg-slate-50 hover:text-primary
                      "
                    >
                      <span>{category}</span>

                      <span className="text-slate-400">›</span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              {/* Product Grid */}

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="
                      group relative overflow-hidden rounded-xl
                      border border-slate-100 bg-white
                      p-3
                      shadow-[0_3px_15px_rgba(15,23,42,0.04)]
                      transition duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:shadow-[0_10px_30px_rgba(25,168,232,0.10)]
                    "
                  >
                    {/* Favorite Button */}

                    <button
                      className="
                        absolute right-3 top-3 z-10
                        flex h-7 w-7 items-center justify-center
                        rounded-full border border-slate-100
                        bg-white text-slate-400
                        transition
                        hover:border-red-100
                        hover:text-red-500
                      "
                    ></button>

                    {/* Product Image */}

                    <div
                      className="
                        flex h-44 items-center justify-center
                        overflow-hidden rounded-lg
                        bg-gradient-to-br from-primary/5 to-primary/10
                        md:h-48
                      "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          h-full w-full object-contain p-3
                          transition duration-500
                          group-hover:scale-110"
                      />
                    </div>

                    {/* Product Name */}

                    <h3
                      className="
                        mt-3 truncate text-center
                        text-[11px] font-semibold text-slate-800
                        md:text-xs
                      "
                    >
                      {product.name}
                    </h3>

                    {/* View Details Button */}

                    <button
                      className="
                        mt-3 flex w-full items-center justify-between
                        rounded-lg border border-primary/10
                        px-3 py-2
                        text-[12px] font-bold text-primary
                        transition duration-300
                        hover:bg-gradient-to-r from-primary to-primary-dark hover:text-white
                      "
                    >
                      <span>Book an Appointment</span>

                      <span
                        className="
                          flex h-5 w-5 items-center justify-center
                          rounded-full bg-primary/10
                          text-primary
                          transition
                          group-hover:bg-white
                        "
                      >
                        →
                      </span>
                    </button>
                  </div>
                ))}
              </div>

              {/* =================================================
                  PAGINATION
              ================================================== */}

              <div className="mt-8 flex items-center justify-center gap-2">
                {/* Previous */}
                <button
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-sm text-slate-400
                    transition hover:border-primary hover:text-primary
                  "
                >
                  ‹
                </button>

                {/* Page 1 */}
                <button
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-primary
                    bg-primary/10 text-xs font-semibold text-primary
                  "
                >
                  1
                </button>

                {/* Page 2 */}
                <button
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-xs text-slate-600
                    transition hover:border-primary hover:text-primary
                  "
                >
                  2
                </button>

                {/* Page 3 */}
                <button
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-xs text-slate-600
                    transition hover:border-primary hover:text-primary
                  "
                >
                  3
                </button>

                {/* Page 4 */}
                <button
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-xs text-slate-600
                    transition hover:border-primary hover:text-primary
                  "
                >
                  4
                </button>

                {/* Next */}
                <button
                  className="
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border border-slate-200
                    text-sm text-slate-500
                    transition hover:border-primary hover:text-primary
                  "
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralSurgery;
