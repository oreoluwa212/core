import { artifact } from "../assets";
import SimpleBtn from "./buttons/SimpleBtn";
import HeaderText from "./textComponents/HeaderText";

const headerTexts = [
  {
    subtitle: "An open art platform",
    description:
      "Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art.",
  },
  {
    subtitle: "An open art platform",
    description:
      "Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art.",
  },
  {
    subtitle: "An open art platform",
    description:
      "Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art. Connecting African Art Enthusiasts Across the Continent: Invest in the Future of African Art.",
  },
];

function JoinInFree() {
  return (
    <div className="w-full flex h-full bg-joinInBg font-montserrat py-16 px-[5%]">
      <div className="flex flex-col h-full w-[50%] lgss:pr-[10%]">
        <HeaderText className={"text-white"} title={"Join in free"} />
        {headerTexts.map((header, index) => (
          <HeaderText
            key={index}
            title={header.title}
            className={"text-white"}
            subtitle={header.subtitle}
            description={header.description}
          />
        ))}
        <div className="pt-14 flex lgss:flex-row flex-col w-full space-x-7 lgss:items-center">
          <SimpleBtn className={"px-[32px]"}>Log In</SimpleBtn>
          <SimpleBtn className={"px-6 lgss:px-[32px] border-white border"}>
            Sign Up
          </SimpleBtn>
        </div>
      </div>
      <div className="flex w-[50%] justify-center items-center">
        <img src={artifact} alt="" />
      </div>
    </div>
  );
}

export default JoinInFree