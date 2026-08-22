import { Bookmark, Plus } from "lucide-react";
import blogBannerBg from "../assets/images/blogs.png";
import blogImg1 from "../assets/images/blog_3.png";
import blogImg2 from "../assets/images/blog_2.png";
import blogImg3 from "../assets/images/blog_1.png";
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
      {/* Hero section */}
      <section
        className="relative h-[260px] w-full overflow-hidden md:h-[280px]"
        style={{
          backgroundImage: `url(${blogBannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <div>
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
        </div>
      </section>

      {/* Blog section */}
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
              {/* Blog card */}
              <article
                className="
                  group
                  relative
                  grid
                  min-h-[340px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#e2edf4]
                  bg-white
                  shadow-[0_10px_35px_rgba(15,23,42,0.07)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1.5
                  hover:border-primary/25
                  hover:shadow-[0_22px_50px_rgba(25,168,232,0.15)]
                  md:grid-cols-[46%_54%]
                  lg:min-h-[360px]
                "
              >
                {/* Blog image */}
                <div
                  className="
                    relative
                    h-[280px]
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
                      group-hover:scale-[1.04]"
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/20
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Curved white edge */}
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

                  {/* Blue curve behind white edge */}
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

                  {/* Category pill */}
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
                      px-3.5
                      py-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-primary
                      shadow-[0_4px_15px_rgba(15,23,42,0.12)]
                      backdrop-blur-sm
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      md:left-5
                      md:top-5
                    "
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                    </span>

                    {post.tag}
                  </div>
                </div>

                {/* Blog content */}
                <div
                  className="
                    relative
                    flex
                    min-h-[340px]
                    flex-col
                    justify-center
                    overflow-hidden
                    px-6
                    py-8
                    md:min-h-[360px]
                    md:px-9
                    lg:px-11
                    lg:py-9
                  "
                >
                  {/* Decorative background */}
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
                    {/* Dotted grid */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle,#d9edf5_1.5px,transparent_1.5px)]
                        bg-[length:18px_18px]
                      "
                    />

                    {/* Large plus */}
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

                    {/* Small plus */}
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

                    {/* Decorative dots */}
                    <span className="absolute right-28 top-10 h-2 w-2 rounded-full bg-primary/20" />
                    <span className="absolute right-12 bottom-20 h-2 w-2 rounded-full bg-primary/20" />
                    <span className="absolute right-36 bottom-12 h-1.5 w-1.5 rounded-full bg-primary/20" />

                    {/* Decorative connecting lines */}
                    <div className="absolute right-14 top-16 h-[1px] w-24 rotate-[25deg] bg-primary/10" />
                    <div className="absolute right-20 top-20 h-16 w-[1px] rotate-[35deg] bg-primary/10" />
                  </div>

                  {/* Bookmark */}
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
                      hover:rotate-12
                      hover:scale-110
                      hover:bg-primary
                      hover:text-white
                      hover:shadow-[0_6px_18px_rgba(25,168,232,0.35)]
                      md:right-6
                      md:top-6
                    "
                  >
                    <Bookmark className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </button>

                  {/* Blog title */}
                  <h2
                    className="
                      relative
                      z-10
                      mt-3
                      max-w-[500px]
                      pr-10
                      text-xl
                      font-bold
                      leading-[1.3]
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:text-2xl
                      md:text-[24px]
                      lg:text-[26px]
                    "
                  >
                    {post.title}
                  </h2>

                  {/* Accent divider */}

                  <div className="relative z-10 mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-primary to-primary-dark" />

                  {/* Blog description */}
                  <p
                    className="
                      relative
                      z-10
                      mt-3
                      max-w-[520px]
                      text-xs
                      leading-[1.8]
                      text-slate-600
                      line-clamp-3
                      sm:text-[13px]
                    "
                  >
                    {post.excerpt}
                  </p>
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
