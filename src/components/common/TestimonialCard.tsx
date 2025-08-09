import { FaStar } from "react-icons/fa";
import ReviewPerson from "@/assets/images/hero.jpg";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col rounded-lg border p-5 bg-white">
      <div className="flex gap-3 pb-2">
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
        <FaStar color="orange" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore
        possimus earum cum, fugit sequi eligendi porro odit iusto consequatur
        aliquam! Dicta voluptatum id saepe quaerat sint, quisquam dolor tempore.
      </p>

      <div className="flex gap-3 pt-4">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src={ReviewPerson}
          alt="Review Image"
        />
        <div>
          <h5 className="font-medium">lorem Ipsum</h5>
          <span>Model</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
