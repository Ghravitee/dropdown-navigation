import mobileImage from "../images/image-hero-mobile.png";
import desktopImage from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

const Hero = () => {
  return (
    <main className="lg:min-h-screen">
      <section className="flex flex-col lg:flex lg:flex-row-reverse lg:justify-around lg:pl-40 lg:pr-20 w-full items-center">
          <picture className="lg:h-[33rem] lg:w-[38rem]">
            <img
              src={mobileImage}
              className="lg:hidden block mx-auto"
              alt="This is the hero image for the landing page"
            />
            <img
              src={desktopImage}
            
              className="hidden lg:block lg:object-contain h-full w-full"
              alt="This is the hero image for the landing page"
            />
          </picture>
          <article className="flex flex-col gap-4 items-center px-4 pt-6 pb-20 lg:items-start lg:pb-0 lg:w-[50%] lg:pt-32">
            <h1 className="text-Almost-Black text-3xl lg:text-[4rem] leading-[1] epilogue-bold lg:mb-6 tracking-wide">Make <span className="lg:block">remote work</span></h1>
            <p className="text-Medium-Gray epilogue-normal text-center lg:text-left lg:max-w-[25rem] lg:mb-8">
              {" "}
              Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.
            </p>
            <a
              href="#"
              className="bg-Almost-Black px-4 py-2 lg:mb-8 flex justify-center items-center border border-Almost-Black hover:bg-Almost-White hover:text-Almost-Black rounded-xl text-Almost-White"
            >
              Learn more
            </a>
            <div className="flex justify-between items-center gap-6 xl:gap-10 mt-8 lg:mt-auto">
                    <img src={databiz} width={80} height={80} alt="This is an icon for a brand named databiz" />
                    <img src={audiophile} width={50} height={50} alt="This is an icon for a brand named audiophile" />
                    <img src={meet} width={50} height={50} alt="This is an icon for a brand named meet" />
                    <img src={maker} width={50} height={50} alt="This is an icon for a brand named maker" />
            </div>
          </article>
      </section>
    </main>
  );
};

export default Hero;
