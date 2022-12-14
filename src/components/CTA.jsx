import styles from "../style";
import Button from "./Button";
const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-center text-[38px] leading-[40px] xs:leading-[50px] mb-5`}>Lets try our service now!</h2>
      <p className={`${styles.paragraph} text-center `}>
        Get everything you need to navigate fast and secure!
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
