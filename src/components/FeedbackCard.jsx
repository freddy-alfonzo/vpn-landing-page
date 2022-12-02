import { quotes } from "../assets";

const FeedbackCard = ({ content, name, img }) => (
  <div className="flex justify-between flex-col px-5 rounded-[20px] max-w-[400px] mb-10 mx-auto feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42px] h-[27px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10 text-justify">
      {content}
    </p>
    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
          {name}
        </h4>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
