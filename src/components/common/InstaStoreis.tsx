import InstaCard from "./InstaCard";
import PostOneImg from "@/assets/images/raamin-ka-uR51HXLO7G0-unsplash.jpg";
import PostTwoImg from "@/assets/images/markus-winkler-PQmXUxmfR44-unsplash.jpg";
import PostThreeImg from "@/assets/images/yoel-j-gonzalez-1tUf_3u6HGU-unsplash.jpg";
import PostFourImage from "@/assets/images/matas-katinas-sWchRkeWSUE-unsplash.jpg";

const InstaStoreis = () => {
  const PostImages = [
    {
      img: PostOneImg,
    },
    {
      img: PostTwoImg,
    },
    {
      img: PostThreeImg,
    },
    {
      img: PostFourImage,
    },
  ];
  return (
    <section className="insta-stories">
      <div className="container max-w-screen-xl m-auto  py-[40px]  md:py-[100px]">
        <h2 className="font-semibold text-3xl pb-10 md:pb-20 text-center">
          Our Instagram Stories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7">
          {PostImages.map((item) => (
            <InstaCard cardImg={item.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaStoreis;
