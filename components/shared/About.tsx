import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-50/50 mt-10" id="about">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <h2 className="w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600">
          About Us
        </h2>

        <div className="mt-5 w-full flex flex-col justify-center items-center">
          <p className="leading-loose text-center">
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Obcaecati quasi sed tempora
            sequi nemo ipsa non rerum, quaerat ratione
            reprehenderit vitae nobis animi impedit. Eos
            reiciendis nisi adipisci? In, optio! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit.
            Illum odio et magnam tempora quod voluptatibus
            nihil, modi doloremque laborum iusto ducimus
            nulla ad eligendi architecto totam quaerat
            repellendus fugit fugiat. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Possimus
            sint tempora voluptas sed consequuntur delectus,
            excepturi cupiditate nam doloribus provident
            atque id eligendi iure reiciendis vitae
            voluptatem nesciunt perferendis assumenda.
          </p>

          <Image
            src={"/signature.png"}
            width={400}
            height={400}
            alt="workify signature"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
