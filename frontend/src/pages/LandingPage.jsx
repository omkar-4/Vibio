import { NavLink, useNavigate } from "react-router-dom";
import LandingPageCard from "../components/LandingPageCard";

function LandingPage() {
  const navigate = useNavigate();
  const cards = [
    { artistname: "skull", image: "/images/skull.jpg" },
    { artistname: "cybergirl", image: "/images/cybergirl.jpg" },
    { artistname: "birdman", image: "/images/birdman.jpg" },
    { artistname: "city", image: "/images/city.jpg" },
  ];

  return (
    <main className="h-full w-full">
      <header className="flex flex-nowrap justify-between items-center">
        <nav className="py-4 px-4 w-full h-fit flex">
          <ul className="flex space-x-4">
            {["/", "/signup", "/login"].map((path) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={`${
                    location.pathname === path
                      ? "text-[#f5f5f5] underline underline-offset-4 hover:text-teal-400"
                      : "text-zinc-400 hover:text-teal-600"
                  }`}
                >
                  {path === "/" ? "Welcome" : path.slice(1).toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="pr-4 flex gap-2">
          <span>caliber</span>
          <img src="/images/logoicon.svg" width={24} height={24} />
        </div>
      </header>
      <section className="px-6 py-8 flex w-full">
        <div className="flex w-1/2 justify-between">
          <div className="relative">
            <span className="text-7xl zentry">Where your</span>
            <br />
            <span className="text-7xl dancing-script mr-7 -translate-y-3 inline-block">craft</span>
            <span className="text-7xl zentry">craves</span>
            <br />
            <span className="text-7xl zentry">expression</span>
            <div className="absolute top-0 right-0"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl dancing-script">a social for</span>
            <span className="text-lg">serious</span>
            <span className="text-lg">passionate</span>
            <span className="text-lg">unflinching</span>
            <span className="text-7xl zentry inline-block mt-2 text-stroke text-transparent">ANIMATORS</span>
            <button
              onClick={() => navigate("/signup")}
              className="border-2 border-[#f5f5f5] hover:border-transparent hover:bg-[#f5f5f5] text-[#f5f5f5] hover:text-[#101010] px-4 py-2 uppercase rounded-full box-border w-fit self-center mt-4"
            >
              join now
            </button>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col items-end">
          <span>
            discover <span className="inline-block w-8 h-0.5 align-middle bg-white"></span>
          </span>
          <span>connect</span>
          <span>share</span>
          <span>earn</span>
        </div>
      </section>
      <section className="relative flex gap-32 even:translate-y-16 mt-8 p-16">
        {cards.map((card, index) => (
          <LandingPageCard key={index} artistname={card.artistname} image={card.image} isEven={index % 2 === 1} />
        ))}
        <span className="absolute -bottom-24 -z-10 text-[#F22F1D] block text-7xl zentry">
          Which steals the
          <br />
          spotlight
        </span>
      </section>
    </main>
  );
}

export default LandingPage;
