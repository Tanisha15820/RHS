// import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import PeopleIcon from "@mui/icons-material/People";
// import ArticleIcon from "@mui/icons-material/Article";
// import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import SearchIcon from "@mui/icons-material/Search";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// import logo from "../assets/images/compressed_rhs_logo.png";

// const Navbar = () => {
//   const [mobileMenu, setMobileMenu] = React.useState(false);

//   return (
//     <header className="w-full bg-background px-3 py-4 md:px-5">
//       {/* Navbar */}
//       <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10 md:px-6">
//         {/*  LOGO  */}
//         <a href="/" className="flex items-center gap-3">
//           {/* Logo Image */}
//           <img
//             src={logo}
//             alt="Reinforce Healthcare Services"
//             className="h-14 w-auto object-contain md:h-16"
//           />

//           {/* Logo Text */}
//           <div className="hidden leading-tight sm:block">
//             <h1 className="text-[16px] font-extrabold tracking-tight text-primary-dark">
//               REINFORCE
//             </h1>

//             <p className="text-[10px] font-bold tracking-widest text-primary">
//               HEALTHCARE SERVICES
//             </p>
//           </div>
//         </a>

//         {/*  DESKTOP MENU  */}
//         <nav className="hidden items-center gap-0.5 lg:flex">
//           {/* Home */}
//           <a
//             href="/"
//             className="group relative flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-3 text-[13px] font-semibold text-primary-dark transition-all duration-200 hover:bg-primary/10"
//           >
//             <span>Home</span>
//           </a>

//           {/* Products */}
//           <a
//             href=""
//             className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
//           >
//             <span>Products</span>
//             <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
//           </a>

//           {/* Catalogues */}
//           <a
//             href=""
//             className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
//           >
//             <span>Catalogues</span>
//             <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
//           </a>

//           {/* Services */}
//           <a
//             href=""
//             className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
//           >
//             <span>Services</span>
//             <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
//           </a>

//           {/* Clients */}
//           <a
//             href=""
//             className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
//           >
//             <span>Clients</span>
//             <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
//           </a>

//           {/* Contact Us */}
//           <a
//             href=""
//             className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
//           >
//             Contact Us
//           </a>
//         </nav>

//         {/* RIGHT SIDE */}
//         <div className="hidden items-center gap-2.5 lg:flex">
//           {/* Appointment Button */}
//           <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-[13px] font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
//             <CalendarMonthIcon sx={{ fontSize: 16 }} />

//             <span>Book an Appointment</span>
//           </button>

//           {/* Search */}
//           <button
//             className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10"
//             aria-label="Search"
//           >
//             <SearchIcon sx={{ fontSize: 22 }} />
//           </button>

//           {/* Menu */}
//           <button
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10"
//             aria-label="Menu"
//           >
//             {mobileMenu ? (
//               <CloseIcon sx={{ fontSize: 22 }} />
//             ) : (
//               <MenuIcon sx={{ fontSize: 22 }} />
//             )}
//           </button>
//         </div>

//         {/* ================= MOBILE BUTTON ================= */}
//         <button
//           onClick={() => setMobileMenu(!mobileMenu)}
//           className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark lg:hidden"
//           aria-label="Open menu"
//         >
//           {mobileMenu ? (
//             <CloseIcon sx={{ fontSize: 24 }} />
//           ) : (
//             <MenuIcon sx={{ fontSize: 24 }} />
//           )}
//         </button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {mobileMenu && (
//         <div className="mx-auto mt-3 max-w-7xl rounded-2xl bg-white p-4 shadow-xl ring-1 ring-primary/10 lg:hidden">
//           <nav className="flex flex-col gap-1">
//             <a
//               href="/"
//               className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3.5 text-base font-semibold text-primary-dark"
//             >
//               <HomeIcon sx={{ fontSize: 20 }} />
//               Home
//             </a>

//             <a
//               href="/doctors"
//               className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
//             >
//               <MedicalServicesIcon sx={{ fontSize: 20 }} />
//               Find a Doctor
//             </a>

//             <a
//               href="/services"
//               className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
//             >
//               <span className="flex items-center gap-2">
//                 <HealthAndSafetyIcon sx={{ fontSize: 20 }} />
//                 Services
//               </span>
//               <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
//             </a>

//             <a
//               href="/patients"
//               className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
//             >
//               <span className="flex items-center gap-2">
//                 <PeopleIcon sx={{ fontSize: 20 }} />
//                 Patients
//               </span>
//               <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
//             </a>

//             <a
//               href="/resources"
//               className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
//             >
//               <span className="flex items-center gap-2">
//                 <ArticleIcon sx={{ fontSize: 20 }} />
//                 Resources
//               </span>
//               <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
//             </a>

//             <a
//               href="/contact"
//               className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
//             >
//               <ContactPhoneIcon sx={{ fontSize: 20 }} />
//               Contact Us
//             </a>

//             <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/30">
//               <CalendarMonthIcon sx={{ fontSize: 20 }} />
//               Book an Appointment
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Icons for Products dropdown
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AirIcon from "@mui/icons-material/Air";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import logo from "../assets/images/compressed_rhs_logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  // Products dropdown state
  const [productsOpen, setProductsOpen] = React.useState(false);

  return (
    <header className="w-full bg-background px-3 py-4 md:px-5">
      {/* ================= NAVBAR ================= */}
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10 md:px-6">
        {/* ================= LOGO ================= */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Reinforce Healthcare Services"
            className="h-14 w-auto object-contain md:h-16"
          />

          <div className="hidden leading-tight sm:block">
            <h1 className="text-[16px] font-extrabold tracking-tight text-primary-dark">
              REINFORCE
            </h1>

            <p className="text-[10px] font-bold tracking-widest text-primary">
              HEALTHCARE SERVICES
            </p>
          </div>
        </a>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* HOME */}
          <a
            href="/"
            className="group relative flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-3 text-[13px] font-semibold text-primary-dark transition-all duration-200 hover:bg-primary/10"
          >
            <span>Home</span>
          </a>

          {/* ================= PRODUCTS ================= */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            {/* Products Button */}
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
            >
              <span>Products</span>

              <KeyboardArrowDownIcon
                sx={{ fontSize: 15 }}
                className={`transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ================= PRODUCTS DROPDOWN ================= */}
            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[650px] -translate-x-1/2 pt-3">
                <div className="rounded-2xl bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.12)] ring-1 ring-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    {/* ================= CATEGORY 1 ================= */}
                    <div>
                      {/* Category Heading */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary">
                          <MonitorHeartIcon sx={{ fontSize: 22 }} />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          General Surgery
                        </h3>
                      </div>

                      {/* Products */}
                      <div className="space-y-1">
                        <a
                          href=""
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary-dark"
                        >
                          <span>Bipolar Plasma Generator</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href=""
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary-dark"
                        >
                          <span>Diode Laser</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>
                      </div>
                    </div>

                    {/* ================= CATEGORY 2 ================= */}
                    <div>
                      {/* Category Heading */}
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-500">
                          <AirIcon sx={{ fontSize: 22 }} />
                        </div>

                        <h3 className="text-sm font-bold text-gray-800">
                          Urology
                        </h3>
                      </div>

                      {/* Products */}
                      <div className="space-y-1">
                        <a
                          href="/products/nebulizer-machines"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-purple-50 hover:text-purple-600"
                        >
                          <span>Bipolar (Embed & Simai)</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href=""
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-purple-50 hover:text-purple-600"
                        >
                          <span>Cyber Blade</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href=""
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-purple-50 hover:text-purple-600"
                        >
                          <span>Bladder Scanner</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CATALOGUES */}
          <a
            href=""
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            <span>Catalogues</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* SERVICES */}
          <a
            href=""
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            <span>Services</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* CLIENTS */}
          <a
            href=""
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            <span>Clients</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* CONTACT */}
          <a
            href=""
            className="rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            Contact Us
          </a>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Appointment */}
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-[13px] font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
            <CalendarMonthIcon sx={{ fontSize: 16 }} />

            <span>Book an Appointment</span>
          </button>

          {/* Search */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10"
            aria-label="Search"
          >
            <SearchIcon sx={{ fontSize: 22 }} />
          </button>

          {/* Menu */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10"
            aria-label="Menu"
          >
            {mobileMenu ? (
              <CloseIcon sx={{ fontSize: 22 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 22 }} />
            )}
          </button>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark lg:hidden"
          aria-label="Open menu"
        >
          {mobileMenu ? (
            <CloseIcon sx={{ fontSize: 24 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 24 }} />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl bg-white p-4 shadow-xl ring-1 ring-primary/10 lg:hidden">
          <nav className="flex flex-col gap-1">
            {/* Home */}
            <a
              href="/"
              className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3.5 text-base font-semibold text-primary-dark"
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              Home
            </a>

            {/* ================= MOBILE PRODUCTS ================= */}
            <div>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
              >
                <span className="flex items-center gap-2">
                  <MedicalServicesIcon sx={{ fontSize: 20 }} />
                  Products
                </span>

                <KeyboardArrowDownIcon
                  sx={{ fontSize: 20 }}
                  className={`transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mobile Product Categories */}
              {productsOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/10 pl-3">
                  {/* General Surgery */}
                  <div className="py-2">
                    <p className="mb-1 flex items-center gap-2 px-3 text-sm font-bold text-gray-800">
                      <MonitorHeartIcon
                        sx={{ fontSize: 18 }}
                        className="text-primary"
                      />
                      General Surgery
                    </p>

                    <a
                      href=""
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5"
                    >
                      Bipolar Plasma Generator
                    </a>

                    <a
                      href=""
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5"
                    >
                      Diode Laser
                    </a>
                  </div>

                  {/* Urology */}
                  <div className="py-2">
                    <p className="mb-1 flex items-center gap-2 px-3 text-sm font-bold text-gray-800">
                      <AirIcon
                        sx={{ fontSize: 18 }}
                        className="text-purple-500"
                      />
                      Urology
                    </p>

                    <a
                      href=""
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-purple-50"
                    >
                      Bipolar (Embed & Simai)
                    </a>

                    <a
                      href=""
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-purple-50"
                    >
                      Cyber Blade
                    </a>

                    <a
                      href=""
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-purple-50"
                    >
                      Bladder Scanner
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Services */}
            <a
              href="/services"
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <HealthAndSafetyIcon sx={{ fontSize: 20 }} />
                Services
              </span>

              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </a>

            {/* Clients */}
            <a
              href="/patients"
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <PeopleIcon sx={{ fontSize: 20 }} />
                Clients
              </span>

              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </a>

            {/* Catalogues */}
            <a
              href="/resources"
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <ArticleIcon sx={{ fontSize: 20 }} />
                Catalogues
              </span>

              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </a>

            {/* Contact */}
            <a
              href="/contact"
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <ContactPhoneIcon sx={{ fontSize: 20 }} />
              Contact Us
            </a>

            {/* Appointment */}
            <button className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/30">
              <CalendarMonthIcon sx={{ fontSize: 20 }} />
              Book an Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
