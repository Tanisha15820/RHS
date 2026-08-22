import { useState } from "react";

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
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AirIcon from "@mui/icons-material/Air";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useLocation } from "react-router-dom";

import logo from "../assets/images/compressed_rhs_logo.png";

// Shared link styles
const ACTIVE_LINK = "bg-primary/10 text-primary-dark";

const INACTIVE_LINK =
  "text-gray-700 hover:bg-primary/5 hover:text-primary-dark";

const MOBILE_INACTIVE = "text-gray-700 hover:bg-primary/5";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const { pathname } = useLocation();

  // Products menu stays active on product pages
  const isProducts =
    pathname === "/urology" ||
    pathname === "/general-surgery" ||
    pathname.startsWith("/products");

  const isUrology = pathname === "/urology";

  const isGeneralSurgery = pathname === "/general-surgery";

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setProductsOpen(false);
  };

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

          <div className="leading-tight">
            <h1 className="text-[13px] font-extrabold tracking-tight text-primary-dark sm:text-[16px]">
              REINFORCE
            </h1>

            <p className="text-[8px] font-bold tracking-widest text-primary sm:text-[10px]">
              HEALTHCARE SERVICES
            </p>
          </div>
        </a>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* HOME */}
          <a
            href="/"
            className={`flex items-center gap-1.5 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            <span>Home</span>
          </a>

          {/* ================= PRODUCTS ================= */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
                isProducts ? ACTIVE_LINK : INACTIVE_LINK
              }`}
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
                    {/* ================= GENERAL SURGERY ================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MonitorHeartIcon sx={{ fontSize: 22 }} />
                        </div>

                        <h3>
                          <a
                            href="/general-surgery"
                            className="text-sm font-bold text-gray-800 transition-colors hover:text-primary"
                          >
                            General Surgery
                          </a>
                        </h3>
                      </div>

                      <div className="space-y-1">
                        <a
                          href="/general-surgery"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          <span>Bipolar Plasma Generator</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href="/general-surgery"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          <span>Diode Laser</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>
                      </div>
                    </div>

                    {/* ================= UROLOGY ================= */}
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <AirIcon sx={{ fontSize: 22 }} />
                        </div>

                        <h3>
                          <a
                            href="/urology"
                            className="text-sm font-bold text-gray-800 transition-colors hover:text-primary"
                          >
                            Urology
                          </a>
                        </h3>
                      </div>

                      <div className="space-y-1">
                        <a
                          href="/urology"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          <span>Surgical Laser</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href="/urology"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          <span>Urodynamic System & Uroflowmetry</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href="/urology"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          <span>ESWL Lithotripsy</span>

                          <ChevronRightIcon
                            sx={{ fontSize: 17 }}
                            className="opacity-50 transition-transform group-hover:translate-x-1"
                          />
                        </a>

                        <a
                          href="/urology"
                          className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] text-gray-600 transition-all hover:bg-primary/5 hover:text-primary"
                        >
                          <span>Endo Urology UMD Endoscopy</span>

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

          {/* ================= BLOGS ================= */}
          <a
            href="/blogs"
            className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${
              pathname === "/blogs" ? ACTIVE_LINK : INACTIVE_LINK
            }`}
          >
            <span>Blogs</span>
          </a>

          {/* ================= SERVICES ================= */}
          <a
            href="/services"
            className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${INACTIVE_LINK}`}
          >
            <span>Services</span>

            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* ================= CLIENTS ================= */}
          <a
            href="/patients"
            className={`flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${INACTIVE_LINK}`}
          >
            <span>Clients</span>

            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* ================= CONTACT ================= */}
          <a
            href="/contact"
            className={`rounded-full px-3 py-3 text-[13px] font-semibold transition-all duration-200 ${INACTIVE_LINK}`}
          >
            Contact Us
          </a>
        </nav>

        {/* ================= DESKTOP RIGHT SIDE ================= */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* GET A QUOTE */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-[13px] font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <CalendarMonthIcon sx={{ fontSize: 16 }} />
            <span>Get a Quote</span>
          </button>

          {/* SEARCH */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10"
            aria-label="Search"
          >
            <SearchIcon sx={{ fontSize: 22 }} />
          </button>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          type="button"
          onClick={() => setMobileMenu((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition-all duration-200 hover:bg-primary/10 lg:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
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
            {/* ================= HOME ================= */}
            <a
              href="/"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-semibold ${
                pathname === "/" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              Home
            </a>

            {/* ================= PRODUCTS ================= */}
            <div>
              <button
                type="button"
                onClick={() => setProductsOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${
                  isProducts ? ACTIVE_LINK : MOBILE_INACTIVE
                }`}
              >
                <span className="flex items-center gap-2">
                  <MedicalServicesIcon sx={{ fontSize: 20 }} />
                  Products
                </span>

                <KeyboardArrowDownIcon
                  sx={{ fontSize: 20 }}
                  className={`transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ================= PRODUCT SUBMENU ================= */}
              {productsOpen && (
                <div className="ml-4 mt-1 space-y-2 border-l-2 border-primary/10 pl-3">
                  {/* ================= GENERAL SURGERY ================= */}
                  <div className="rounded-xl bg-gray-50/70 py-2">
                    <a
                      href="/general-surgery"
                      onClick={closeMobileMenu}
                      className={`mb-1 flex items-center gap-2 px-3 py-2 text-sm font-bold ${
                        isGeneralSurgery
                          ? "text-primary"
                          : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      <MonitorHeartIcon
                        sx={{ fontSize: 18 }}
                        className="text-primary"
                      />
                      General Surgery
                    </a>

                    <a
                      href="/general-surgery"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Bipolar Plasma Generator
                    </a>

                    <a
                      href="/general-surgery"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Diode Laser
                    </a>
                  </div>

                  {/* ================= UROLOGY ================= */}
                  <div className="rounded-xl bg-gray-50/70 py-2">
                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className={`mb-1 flex items-center gap-2 px-3 py-2 text-sm font-bold ${
                        isUrology
                          ? "text-primary"
                          : "text-gray-800 hover:text-primary"
                      }`}
                    >
                      <AirIcon sx={{ fontSize: 18 }} className="text-primary" />
                      Urology
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Surgical Laser
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Urodynamic System & Uroflowmetry
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      ESWL Extracorporeal Shock Wave Lithotripsy
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Endo Urology UMD Endoscopy
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Endo-Vision Set
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Flexible Video Ureterorenoscope & Cystoscope
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Bipolar (Emed & Simai)
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary"
                    >
                      Rocamed Consumables
                    </a>

                    <a
                      href="/urology"
                      onClick={closeMobileMenu}
                      className="mt-1 block px-3 py-2 text-sm font-semibold text-primary hover:text-primary-dark"
                    >
                      View All Urology Products →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* ================= BLOGS ================= */}
            <a
              href="/blogs"
              onClick={closeMobileMenu}
              className={`flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium ${
                pathname === "/blogs" ? ACTIVE_LINK : MOBILE_INACTIVE
              }`}
            >
              <ArticleIcon sx={{ fontSize: 20 }} />
              Blogs
            </a>

            {/* ================= SERVICES ================= */}
            <a
              href="/services"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <HealthAndSafetyIcon sx={{ fontSize: 20 }} />
              Services
            </a>

            {/* ================= CLIENTS ================= */}
            <a
              href="/patients"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <PeopleIcon sx={{ fontSize: 20 }} />
              Clients
            </a>

            {/* ================= CATALOGUES ================= */}
            <a
              href="/resources"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <ArticleIcon sx={{ fontSize: 20 }} />
              Catalogues
            </a>

            {/* ================= CONTACT ================= */}
            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <ContactPhoneIcon sx={{ fontSize: 20 }} />
              Contact Us
            </a>

            {/* ================= GET A QUOTE ================= */}
            <button
              type="button"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-3.5 text-base font-semibold text-white shadow-md shadow-primary/30"
            >
              <CalendarMonthIcon sx={{ fontSize: 20 }} />
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
