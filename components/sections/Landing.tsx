import Divider from "../utils/Divider";
import BlurMargin from "../utils/BlurMargin";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";

function Landing() {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false, // Ensure it's only rendered on the client-side
  });
  const [playerState, setPlayerState] = useState(false);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-start ">
      <Divider />
      <BlurMargin />
      <div className=" w-full flex-1 items-stretch justify-center flex">
        <div className="hidden md:inline">
          <ReactPlayer
            muted={true}
            loop={true}
            width={"100%"}
            height={"90%"}
            playing={playerState}
            onReady={() => setPlayerState(true)}
            url={"assets/landing.mp4"}
          />
        </div>
        <div className="relative w-[500px] h-full md:hidden">
          <Image
            className="aspect-square object-contain"
            fill
            alt=""
            src={"/assets/phoneLandingImage.webp"}
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
