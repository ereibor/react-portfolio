import { GithubIcon, LinkedInIcon } from "../../helpers/svg";


const Hero = () => {
  return (
    <div className="grid grid-cols-[116px_repeat(2,1fr)] pt-22 gap-2 items-center">
      <div className="p-4">
        <div className="flex flex-col items-center gap-4">{GithubIcon()} {LinkedInIcon()}</div>
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-5xl font-bold whitespace-nowrap">Tunere Ereibor</h1>
        <h2 className="text-center font-medium text-xl">Software Engineer</h2>
        <p className=" font-light">
          As a Software Engineer, I am driven by a deep passion for acquiring
          new skills and expertise to create stunning and fully responsive
          applications.
        </p>
      </div>
      <div className="p-4">
        <img
          src="/laptop.jpg"
          alt="Laptop"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
