import Link from "next/link";
import img1 from "./img1.jpg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-gray-600 pt-[10px] md:pt-[100px] lg:pt-[100px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1.src})`,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'overlay',
          width: 'auto',
          height: '100vh',
        }}
      >
        <div className="container relative z-10" style={{marginTop:'10%'}}>
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h1 className="mb-6 text-3xl font-extrabold leading-snug text-yellow-300 sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2] text-center">
                  Welcome to Asridhi Infotech
                </h1>
                <p className="mx-auto max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44] mb-2">
                  We understand that building a successful business starts with assembling the right team.
                </p>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  As a premier staffing and recruiting company, we specialize in connecting businesses with top-tier talent.
                </p>
                <Link href="/contact">
                  <button className="px-4 py-2 rounded-md bg-white hover:bg-gray-400 hover:text-white hover:scale-105 duration-300 mb-8">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
