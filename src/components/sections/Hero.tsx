
import { GithubIcon, LinkedInIcon } from '../../helpers/svg';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[116px_repeat(2,1fr)] pt-8 md:pt-22 gap-4 md:gap-2 items-center px-4 md:px-0">
      {/* Social Icons */}
      <div className="hidden md:block p-4">
        <div className="flex flex-col gap-4">
          {GithubIcon()} 
          {LinkedInIcon()}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 p-4 order-2 md:order-none">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:whitespace-nowrap">
          Tunere Ereibor
        </h1>
        <h2 className="text-center font-medium text-lg md:text-xl">
          Software Engineer
        </h2>
        <p className="font-light text-center md:text-left max-w-md">
          As a Software Engineer, I am driven by a deep passion for acquiring
          new skills and expertise to create stunning and fully responsive
          applications.
        </p>
        
        {/* Mobile-only social icons */}
        <div className="flex md:hidden gap-4 mt-2">
          {GithubIcon()} 
          {LinkedInIcon()}
        </div>
      </div>

      {/* Image */}
      <div className="p-4 order-1 md:order-none">
        <img
          src="/laptop.jpg"
          alt="Laptop"
          className="object-cover w-full h-64 md:h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;