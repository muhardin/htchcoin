import Image from "next/image";

const IcoTimer = () => {
  return (
    <div>
      <div className="bg-opacity-40 backdrop-blur-[12px] max-w-[256px]">
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="">
            <Image width={15} height={88} src="/images/bracket.svg" alt="[]" />
          </div>
          <div className="text-center flex flex-col">
            <span className="text-2xl text-orange-500">Until Next Price</span>
            <span className="text-[28px] text-green-600 font-orbitron font-semibold">
              03: 15: 33: 25
            </span>
            <span className="text-sm text-[#79716B]">
              Days Hours Minutes Seconds
            </span>
          </div>
          <div className="">
            <Image width={15} height={88} src="/images/bracket1.svg" alt="[]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IcoTimer;
