import React from "react";
import {
  ArrowRight,
  Bookmark,
  CalendarDays,
  Clock3,
  PenLine,
  Plus,
} from "lucide-react";
import blogBannerBg from "../assets/images/blogs.png";
import blogImg1 from "../assets/images/blog_1.png";
import blogImg2 from "../assets/images/blog_2.png";
import blogImg3 from "../assets/images/blog_3.png";
import blogImg4 from "../assets/images/blog_4.png";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      tag: "Surgical Innovation",
      title: "The Rise of Bipolar Plasma Technology in Modern OTs",
      date: "12 Aug 2026",
      readTime: "5 min read",
      excerpt:
        "How bipolar plasma generators are reducing thermal spread and improving precision across general surgery procedures, and what it means for hospitals upgrading their OT setups.",
      image: blogImg1,
    },
    {
      id: 2,
      tag: "Product Guide",
      title: "Diode Laser vs Traditional Systems: What Surgeons Should Know",
      date: "28 Jul 2026",
      readTime: "6 min read",
      excerpt:
        "A practical comparison of diode laser systems against conventional equipment, covering cost of ownership, safety margins, and day-to-day usability in the OT.",
      image: blogImg2,
    },
    {
      id: 3,
      tag: "Hospital Insights",
      title: "Building an Equipment Procurement Checklist for General Surgery",
      date: "10 Jul 2026",
      readTime: "4 min read",
      excerpt:
        "From compliance to after-sales support, here is a checklist hospital administrators can use before finalizing any surgical equipment vendor.",
      image: blogImg3,
    },
    {
      id: 4,
      tag: "Case Study",
      title: "Reducing OT Turnaround Time with Smarter Equipment Choices",
      date: "02 Jul 2026",
      readTime: "7 min read",
      excerpt:
        "A look at how one multi-speciality hospital cut average OT turnaround time by rethinking their general surgery instrument stack.",
      image: blogImg4,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${blogBannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Blog
            </span>
          </h1>

          <div className="mt-3 h-[2px] w-10 bg-primary" />

          <p className="mt-4 max-w-md text-xs leading-5 text-slate-500 md:text-sm">
            Insights, guides and updates from the world of surgical equipment
            and hospital innovation.
          </p>
        </div>
      </section>

      {/* =========================================================
          BLOG SECTION
          IMPORTANT:
          Sticky behaviour is kept exactly here.
      ========================================================== */}
      <section className="bg-white px-4 py-12 sm:px-5 md:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="sticky mb-6"
              style={{
                top: `${90 + index * 22}px`,
                zIndex: index + 1,
              }}
            >
              {/* =================================================
                  BLOG CARD
              ================================================== */}
              <article
                className="
                  group
                  relative
                  grid
                  min-h-[285px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#dbeaf2]
                  bg-white
                  shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                  transition-all
                  duration-500
                  hover:shadow-[0_15px_40px_rgba(15,23,42,0.13)]
                  md:grid-cols-[48%_52%]
                  lg:min-h-[290px]
                "
              >
                {/* =================================================
                    LEFT IMAGE
                ================================================== */}
                <div
                  className="
                    relative
                    h-[230px]
                    overflow-hidden
                    bg-slate-100
                    md:h-full
                  "
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.04]
                    "
                  />

                  {/* Soft image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-black/5
                      via-transparent
                      to-white/10
                    "
                  />

                  {/* =================================================
                      CURVED WHITE EDGE
                  ================================================== */}
                  <div
                    className="
                      absolute
                      -right-12
                      top-[-12%]
                      h-[124%]
                      w-[105px]
                      rounded-[50%]
                      bg-white
                      md:-right-16
                      md:w-[125px]
                    "
                  />

                  {/* =================================================
                      BLUE CURVE BEHIND WHITE EDGE
                  ================================================== */}
                  <div
                    className="
                      absolute
                      -right-16
                      top-[-12%]
                      h-[124%]
                      w-[55px]
                      rounded-[50%]
                      bg-primary/20
                      blur-[1px]
                    "
                  />

                  {/* =================================================
                      CATEGORY PILL
                  ================================================== */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/95
                      px-3
                      py-2
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-wide
                      text-primary
                      shadow-[0_4px_15px_rgba(15,23,42,0.10)]
                      backdrop-blur-sm
                      md:left-5
                      md:top-5
                    "
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                      <PenLine className="h-2.5 w-2.5 text-primary" />
                    </span>

                    {post.tag}
                  </div>
                </div>

                {/* =================================================
                    RIGHT CONTENT
                ================================================== */}
                <div
                  className="
                    relative
                    flex
                    min-h-[280px]
                    flex-col
                    justify-center
                    overflow-hidden
                    px-6
                    py-7
                    md:min-h-[290px]
                    md:px-8
                    lg:px-10
                    lg:py-8
                  "
                >
                  {/* =================================================
                      DECORATIVE BACKGROUND
                  ================================================== */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-45px]
                      right-[-20px]
                      h-[190px]
                      w-[230px]
                      opacity-40
                    "
                  >
                    {/* dotted grid */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle,#d9edf5_1.5px,transparent_1.5px)]
                        bg-[length:18px_18px]
                      "
                    />

                    {/* large plus */}
                    <Plus
                      className="
                        absolute
                        right-7
                        top-12
                        h-8
                        w-8
                        text-primary/20
                        stroke-[2.5]
                      "
                    />

                    {/* small plus */}
                    <Plus
                      className="
                        absolute
                        right-20
                        bottom-8
                        h-4
                        w-4
                        text-primary/20
                      "
                    />

                    {/* small circles */}
                    <span className="absolute right-28 top-10 h-2 w-2 rounded-full bg-primary/20" />
                    <span className="absolute right-12 bottom-20 h-2 w-2 rounded-full bg-primary/20" />
                    <span className="absolute right-36 bottom-12 h-1.5 w-1.5 rounded-full bg-primary/20" />

                    {/* connecting line */}
                    <div className="absolute right-14 top-16 h-[1px] w-24 rotate-[25deg] bg-primary/10" />
                    <div className="absolute right-20 top-20 h-16 w-[1px] rotate-[35deg] bg-primary/10" />
                  </div>

                  {/* =================================================
                      BOOKMARK
                  ================================================== */}
                  <button
                    className="
                      absolute
                      right-5
                      top-5
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef8fd]
                      text-primary
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:bg-primary
                      hover:text-white
                      md:right-6
                      md:top-6
                    "
                  >
                    <Bookmark className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </button>

                  {/* =================================================
                      DATE + READ TIME
                  ================================================== */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-3
                      text-[9px]
                      font-semibold
                      text-slate-400
                      md:text-[10px]
                    "
                  >
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3 w-3 text-primary" />
                      {post.date}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-300" />

                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-3 w-3 text-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}
                  <h2
                    className="
                      relative
                      z-10
                      mt-3
                      max-w-[500px]
                      pr-10
                      text-xl
                      font-bold
                      leading-[1.35]
                      text-slate-800
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-2xl
                      md:text-[22px]
                      lg:text-[23px]
                    "
                  >
                    {post.title}
                  </h2>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}
                  <p
                    className="
                      relative
                      z-10
                      mt-3
                      max-w-[500px]
                      text-[10px]
                      leading-[1.75]
                      text-slate-500
                      sm:text-[11px]
                      md:text-[11px]
                    "
                  >
                    {post.excerpt}
                  </p>

                  {/* =================================================
                      READ MORE
                  ================================================== */}
                  <button
                    className="
                      relative
                      z-10
                      mt-4
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-[11px]
                      font-bold
                      text-primary
                      transition-all
                      duration-300
                      hover:gap-3
                    "
                  >
                    <span>Read More</span>

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
