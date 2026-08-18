import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import homeBanner from "../assets/images/compressed_home_banner.png";
import Products from "../Components/Products";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* ================= HERO BANNER ================= */}
      <section className="relative min-h-[500px] w-full overflow-hidden bg-primary/5">
        {/* Animated Background */}
        <div
          className="absolute inset-0 animate-zoom-slow bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${homeBanner})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-white/5"></div>

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-10 sm:px-6 md:min-h-[620px] md:py-16 lg:px-10">
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[540px] md:-mt-16">
            {/* Small Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
              <ShieldOutlinedIcon
                className="text-primary"
                style={{ fontSize: 18 }}
              />

              <span className="text-sm font-medium text-slate-600">
                Trusted Healthcare Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.15] text-slate-900 sm:text-5xl lg:text-[52px]">
              Compassionate Care.
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Healthier Tomorrow.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-base leading-7 text-slate-600">
              Reinforce Healthcare Services is committed to providing
              world-class medical care with advanced technology and a
              patient-first approach.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-7 grid max-w-[500px] grid-cols-2 gap-3 sm:grid-cols-4">
              {/* Feature 1 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Expert Doctors
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FavoriteBorderIcon
                    className="text-primary"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Advanced Care
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-dark/10">
                  <LocalHospitalOutlinedIcon
                    className="text-primary-dark"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600 whitespace-nowrap">
                  Modern Facilities
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center rounded-xl bg-white/80 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <PersonOutlineOutlinedIcon
                    className="text-primary"
                    style={{ fontSize: 21 }}
                  />
                </div>

                <span className="text-xs font-medium text-slate-600">
                  Patient First
                </span>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {/* Appointment Button */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              >
                Book an Appointment
                <ArrowForwardIcon style={{ fontSize: 18 }} />
              </button>

              {/* Video Button */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-white/80 px-5 py-3 text-sm font-semibold text-primary-dark backdrop-blur-sm transition-all duration-300 hover:bg-white sm:w-auto"
              >
                <PlayCircleOutlinedIcon style={{ fontSize: 20 }} />
                Watch Our Video
              </button>
            </div>
          </div>
        </div>

        {/* ================= STATS CARD ================= */}
        <div className="relative z-20 mx-auto mt-6 w-[92%] max-w-4xl md:absolute md:bottom-5 md:left-1/2 md:mt-0 md:-translate-x-1/2">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-md md:grid-cols-4">
            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 md:border-b-0 md:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GroupsOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">25+</p>
                <p className="text-xs text-slate-500">Specialities</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 md:border-b-0 md:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <LocalHospitalOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">100+</p>
                <p className="text-xs text-slate-500">Hospitals & Centers</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-slate-200 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GroupsOutlinedIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">1M+</p>
                <p className="text-xs text-slate-500">Happy Patients</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <FavoriteBorderIcon className="text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold text-primary-dark">24/7</p>
                <p className="text-xs text-slate-500">Patient Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
    </div>
  );
};

export default HomePage;
