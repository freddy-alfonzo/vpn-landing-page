import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="#home" className={`flex md:flex-row flex-col sm:py-12 py-4`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p
          className={`${styles.paragraph} xs:text-[18px] text-[15px] md:text-start text-center`}
        >
          <span className="text-white">20%</span> Discount for {"  "}
          <span> 1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[47px] text-white ss:leading-[100px]">
          The Next <br className="hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="lg:flex hidden md:mr4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[64px] text-[47px] text-white ss:leading-[100px] w-full">
        VPN Network{" "}
      </h1>
      <p className={`${styles.paragraph} max-w-[100%] mt-5 text-justify`}>
        XayaVPN is the fastest and secure VPN in the world. We value people’s
        freedom of choice beyond anything else, so through hard work,
        dedication, and technological innovation we strive to offer access to
        free and safe internet for our users.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="xs:w-[70%] xs:h-[70%] w-[90%] xs:min-w-[460px] xs:min-h-[400px] max-w-[460px]  max-h-[390px] realtive z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] top-0 white__gradient rounded-full bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}></div>
  </section>
);

export default Hero;
