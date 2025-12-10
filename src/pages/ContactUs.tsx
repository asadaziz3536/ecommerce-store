import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import phoneImg from "@/assets/images/pexels-cottonbro-10600774.jpg"

const ContactUs = () => {
  return (
    <div className="max-w-screen-xl m-auto">

      <section>
      <h2 className="font-semibold text-3xl pb-4 md:pb-10">Contact Us</h2>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">


          <img src={phoneImg} alt="" />
        </div>
        <div className="col-span-6">
          <form action="">
            <div className="pb-3">
              <label htmlFor="" className="block font-medium pb-1 text-sm">
                First Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="firstName"
                className="py-6 border-black"
                placeholder="Enter Your First Name"
              />
              <p className="text-red-500">{}</p>
            </div>
            <div className="pb-3">
              <label htmlFor="" className="block font-medium pb-1 text-sm">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="lastName"
                className="py-6 border-black"
                placeholder="Enter Your Last Name"
              />
              <p className="text-red-500">{}</p>
            </div>

            <div className="pb-3">
              <label htmlFor="" className="block font-medium pb-1 text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                className="py-6 border-black"
                placeholder="Enter Your Email"
              />
              <p className="text-red-500">{}</p>
            </div>

            <div className="pb-3">
              <label htmlFor="" className="block font-medium pb-1 text-sm">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                name="message"
                className="py-6 px-3 rounded-md border border-black w-full"
                placeholder="Enter Your Message"
              />
              <p className="text-red-500">{}</p>
            </div>

            <Button className="px-8">Submit</Button>
          </form>
        </div>
      </div>

      </section>
    </div>
  );
};

export default ContactUs;
