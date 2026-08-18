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

import logo from "../assets/images/rhs_logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <header className="w-full bg-background px-3 py-4 md:px-5">
      {/* Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10 md:px-6">
        {/* ================= LOGO ================= */}
        <a href="/" className="flex items-center gap-3">
          {/* Logo Image */}
          <img
            src={logo}
            alt="Reinforce Healthcare Services"
            className="h-14 w-auto object-contain md:h-16"
          />

          {/* Logo Text */}
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
          {/* Home */}
          <a
            href="/"
            className="group relative flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-3 text-[13px] font-semibold text-primary-dark transition-all duration-200 hover:bg-primary/10"
          >
            <span>Home</span>
          </a>

          {/* Products */}
          <a
            href="/products"
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            Products
          </a>

          {/* Services */}
          <a
            href="/services"
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            <span>Services</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* Patients */}
          <a
            href="/patients"
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            <span>Patients</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* Resources */}
          <a
            href="/resources"
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            <span>Resources</span>
            <KeyboardArrowDownIcon sx={{ fontSize: 15 }} />
          </a>

          {/* Contact Us */}
          <a
            href="/contact"
            className="flex items-center gap-1 rounded-full px-3 py-3 text-[13px] font-semibold text-gray-700 transition-all duration-200 hover:bg-primary/5 hover:text-primary-dark"
          >
            Contact Us
          </a>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Appointment Button */}
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
            <a
              href="/"
              className="flex items-center gap-2 rounded-xl bg-primary/5 px-4 py-3.5 text-base font-semibold text-primary-dark"
            >
              <HomeIcon sx={{ fontSize: 20 }} />
              Home
            </a>

            <a
              href="/doctors"
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <MedicalServicesIcon sx={{ fontSize: 20 }} />
              Find a Doctor
            </a>

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

            <a
              href="/patients"
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <PeopleIcon sx={{ fontSize: 20 }} />
                Patients
              </span>
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </a>

            <a
              href="/resources"
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <span className="flex items-center gap-2">
                <ArticleIcon sx={{ fontSize: 20 }} />
                Resources
              </span>
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            </a>

            <a
              href="/contact"
              className="flex items-center gap-2 rounded-xl px-4 py-3.5 text-base font-medium text-gray-700 hover:bg-primary/5"
            >
              <ContactPhoneIcon sx={{ fontSize: 20 }} />
              Contact Us
            </a>

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
