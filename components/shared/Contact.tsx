import Input from "../ui/Input";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <div className="lg:py-24 py-16" id="contact">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <div className="grid md:grid-cols-12 gridc1 items-center gap-[30px]">
          <div className="md:col-span-6">
            <img
              className="h-auto max-w-full"
              src="contact.png"
              alt="contact image"
            />
          </div>
          <div className="md:col-span-6 bg-gray-50/50">
            <div>
              <div className="rounded-md shadow p-6 w-full">
                <h3 className="mb-6 text-2xl leading-normal">
                  Get in touch!
                </h3>
                <form className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Input
                      id="name"
                      label="Name"
                      placeHolder="Your Name"
                    />
                    <Input
                      id="email"
                      label="Email"
                      placeHolder="Your Email"
                    />
                  </div>
                  <Input
                    id="subject"
                    label="Subject"
                    placeHolder="Subject"
                  />
                  <Input
                    isTextArea
                    id="message"
                    label="Message"
                    placeHolder="Your Message"
                  />

                  <Button type="submit">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
