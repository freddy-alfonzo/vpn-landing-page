import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center md:text-start`}>
        Find a better card deal in few easy steps
      </h2>
      <p className={`${styles.paragraph} mt-5 w-[100%] text-center md:text-start`}>
        Choose a payment method and start enjoying the best VPN in the world
      </p>

      <Button styles="mt-10 md:mx-0 mx-auto " />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] max-w-[700px]" />
    </div>
  </section>
);

export default CardDeal;
