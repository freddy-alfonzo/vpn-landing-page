import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, tittle, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {" "}
        {tittle}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {" "}
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2
          className={`${styles.heading2} md:mt-10 mt-0  text-[35px] xs:text-[35px] md:text-[42px]`}
        >
          Enjoy a fast and stable connection anywhere
        </h2>
        <p className={`${styles.paragraph} max-w-[100%] mt-5 text-justify`}>
          Streaming or downloading files with a slow internet connection is not
          an option. No worries, our Thousands of VPN servers will make sure
          your internet connection doesn’t suffer. So turn on the VPN, access
          websites, download files, stream videos, and enjoy a speedy
          connection.
        </p>

        <Button styles="mt-10 mx-auto md:mx-0" />
      </div>
      <div className={`${layout.sectionImg} flex-col items-start`}>
        {" "}
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
