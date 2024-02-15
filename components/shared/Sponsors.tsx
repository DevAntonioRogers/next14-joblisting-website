import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1450px] w-[90%] mx-auto">
        <div className="w-full text-center">
          <h2 className="text-3xl">
            More Than{" "}
            <span className="text-purple-600 font-bold">
              10,000 Companies
            </span>{" "}
            Trust us
          </h2>
        </div>

        <div className="flex justify-between items-center mt-5 flex-wrap gap-10">
          <Image
            src={"/airbnb.png"}
            alt="Airbnb logo"
            width={144}
            height={144}
          />
          <Image
            src={"/discord.png"}
            alt="Discord logo"
            width={144}
            height={144}
          />
          <Image
            src={"/slack.png"}
            alt="slack logo"
            width={144}
            height={144}
          />
          <Image
            src={"/capitalone.png"}
            alt="CapitalOne logo"
            width={144}
            height={144}
          />
          <Image
            src={"/dropbox.png"}
            alt="DropBox logo"
            width={144}
            height={144}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
