import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Product = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] max-w-[700px] relative z-[5]"
      />
      <div className="absolute z-[3] -left 1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left 1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} lg:max-w-[620px] text-center `}>
        Easily pay and enjoy your plan
      </h2>
      <p className={`${styles.paragraph} text-justify mt-5`}>
        30-day money-back guarantee. If you’re not 100% satisfied with XayaVPN,
        let us know within 30 days and we’ll refund your payment. It’s that
        simple. Download the XayaVPN mobile app for iOS or Android here.
      </p>
      <div className="flex flex-row fiex-wrap sm:mt-10 mt-6 md:mx-0 mx-auto ">
        <img
          src={apple}
          alt="apple_store"
          className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Product;
