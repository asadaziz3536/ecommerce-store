import InstaCard from "./InstaCard";

const InstaStoreis = () => {
  return (
    <section className="insta-stories">
      <div className="container max-w-screen-xl m-auto  py-[40px]  md:py-[100px]">
        <h2 className="font-semibold text-3xl pb-10 md:pb-20 text-center">
          Our Instagram Stories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-7">
          <InstaCard />
          <InstaCard />
          <InstaCard />
          <InstaCard />
        </div>
      </div>
    </section>
  );
};

export default InstaStoreis;
