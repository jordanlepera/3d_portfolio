import { socials } from "../constants";

const Socials = () => {
  return (
    <div className="z-[100000] fixed bottom-4 sm:left:2 left-[5%] right-[5%] sm:left-2 min-w-min sm:w-16 h-16 sm:h-[30%] rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <ul className="min-w-fit h-full flex items-center justify-evenly sm:flex-col">
        {socials.map((social) => (
          <li key={social.name} className="flex items-center gap-2">
            <a href={social.link} target="_blank" rel="noreferrer">
              <img
                src={social.icon}
                alt={social.name}
                className="transition-all duration-500 w-8 h-8 object-contain sm:filter sm:saturate-0 sm:hover:saturate-200"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
