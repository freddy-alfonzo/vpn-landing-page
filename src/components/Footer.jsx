import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX} ${styles.boxWidth} flex-col lg:mx-auto`}>
    <div
      className={`${styles.flexCenter} md:items-start md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-1 flex flex-col justify-start md:mr-10">
        <span className="font-poppins font-bold text-center md:text-start text-4xl text-gradient uppercase mt-10">
          Xaya VPN
        </span>
        <p
          className={`${styles.paragraph} mt-4 max-w-[310px] text-center md:text-start`}
        >
          A new era vpn easy reliable and secure
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row md:justify-between justify-center flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, i) => (
          <div key={i} className="flex flex-col ss:my-0 my-4 min-w-[136px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center md:text-start ">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`fonts-poppins fonts-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer text-center md:text-start ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2022 Xaya VPN. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
