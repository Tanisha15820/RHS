import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import logo from "../assets/images/rhs_logo.png";

const quickLinks = ["Home", "Products", "Services"];

const ourServices = ["Services"];

const contactLinks = ["Contact Us"];

const trustItems = [
  {
    icon: <SecurityIcon sx={{ fontSize: 19 }} />,
    title: "Trusted Care",
    description: "Expert doctors & advanced medical technology",
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 19 }} />,
    title: "Patient First",
    description: "Compassionate care tailored to your needs",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 19 }} />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for you and your family",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 19 }} />,
    title: "Quality Assured",
    description: "International standards, consistent excellence",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background pt-8">
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_6px_30px_rgba(37,37,184,0.1)] ring-1 ring-primary/10">
        {/* =====================================================
            TOP FOOTER
        ===================================================== */}
        <div className="px-6 py-8 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* =================================================
                ABOUT
            ================================================= */}
            <div className="lg:pr-5">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Reinforce Healthcare Services"
                  className="h-12 w-auto object-contain"
                />

                <div className="leading-tight">
                  <h2 className="text-[16px] font-extrabold tracking-tight text-primary-dark">
                    REINFORCE
                  </h2>

                  <p className="text-[10px] font-bold tracking-wide text-primary">
                    HEALTHCARE
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-[13px] leading-6 text-gray-500">
                Reinforce Healthcare Services is committed to delivering
                world-class medical care with advanced technology and a
                patient-first approach.
              </p>

              {/* Social Icons */}
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition hover:bg-primary hover:text-white"
                >
                  <FacebookIcon sx={{ fontSize: 15 }} />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition hover:bg-primary hover:text-white"
                >
                  <LinkedInIcon sx={{ fontSize: 15 }} />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition hover:bg-primary hover:text-white"
                >
                  <InstagramIcon sx={{ fontSize: 15 }} />
                </a>

                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition hover:bg-primary hover:text-white"
                >
                  <YouTubeIcon sx={{ fontSize: 15 }} />
                </a>
              </div>
            </div>

            {/* =================================================
                QUICK LINKS
            ================================================= */}
            <div>
              <h3 className="mb-4 text-[14px] font-bold text-primary-dark">
                Quick Links
              </h3>

              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <FooterLink key={link} text={link} />
                ))}
              </ul>
            </div>

            {/* =================================================
                OUR SERVICES
            ================================================= */}
            <div>
              <h3 className="mb-4 text-[14px] font-bold text-primary-dark">
                Our Services
              </h3>

              <ul className="space-y-2.5">
                {ourServices.map((link) => (
                  <FooterLink key={link} text={link} />
                ))}
              </ul>
            </div>

            {/* =================================================
                FOR PATIENTS
            ================================================= */}
            <div>
              <h3 className="mb-4 text-[14px] font-bold text-primary-dark">
                Contact Us
              </h3>

              <ul className="space-y-2.5">
                {contactLinks.map((link) => (
                  <FooterLink key={link} text={link} />
                ))}
              </ul>
            </div>

            {/* =================================================
                GET IN TOUCH
            ================================================= */}
            <div>
              <h3 className="mb-4 text-[14px] font-bold text-primary-dark">
                Get in Touch
              </h3>

              {/* WhatsApp */}
              <ContactItem
                icon={<WhatsAppIcon sx={{ fontSize: 17 }} />}
                title="WhatsApp Us (24/7)"
                value="+91 926 888 0303"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST SECTION
        ===================================================== */}
        <div className="mx-5 mb-5 rounded-xl border border-primary/10 bg-white shadow-[0_4px_20px_rgba(25,168,232,0.08)] md:mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <TrustItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                border={index !== 3}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM BLUE BAR
        ===================================================== */}
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-dark to-primary px-6 py-5 md:px-8 lg:px-10">
          {/* Decorative Circle */}
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full border border-white/5"></div>

          <div className="absolute -right-4 -bottom-20 h-48 w-48 rounded-full border border-white/5"></div>

          <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <PrivacyTipOutlinedIcon
                sx={{
                  fontSize: 16,
                  color: "var(--color-primary)",
                }}
              />

              <p className="text-[11px] leading-5 text-white/80">
                © 2025 Reinforce Healthcare Services.
                <br className="sm:hidden" /> All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-[11px] text-white/70">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>

              <span className="h-3 w-px bg-white/20"></span>

              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>

              <span className="h-3 w-px bg-white/20"></span>

              <a href="#" className="transition hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =====================================================
   FOOTER LINK
===================================================== */

const FooterLink = ({ text }) => {
  return (
    <li>
      <a
        href="#"
        className="group flex items-center gap-1 text-[13px] text-gray-500 transition hover:text-primary"
      >
        <KeyboardArrowRightIcon
          sx={{ fontSize: 15 }}
          className="text-primary transition-transform duration-200 group-hover:translate-x-1"
        />

        <span>{text}</span>
      </a>
    </li>
  );
};

/* =====================================================
   CONTACT ITEM
===================================================== */

const ContactItem = ({ icon, title, value }) => {
  return (
    <a
      href="#"
      className="mb-3 flex items-center gap-2.5 border-b border-gray-100 pb-3"
    >
      {/* Icon */}
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[13px] font-semibold text-primary-dark">{title}</p>

        <p className="mt-0.5 text-[13px] text-gray-500">{value}</p>
      </div>
    </a>
  );
};

/* =====================================================
   TRUST ITEM
===================================================== */

const TrustItem = ({ icon, title, description, border }) => {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-4 ${
        border ? "border-b border-gray-100 lg:border-b-0 lg:border-r" : ""
      }`}
    >
      {/* Icon */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h4 className="text-[13px] font-bold text-primary-dark">{title}</h4>

        <p className="mt-1 max-w-[160px] text-[11px] leading-4 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Footer;
