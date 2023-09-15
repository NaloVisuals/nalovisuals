import { motion } from "framer-motion";
import Divider from "../utils/Divider";
import dynamic from "next/dynamic";
import { childrenVar, parentVariant } from "../utils/AnimateFunctions";

type VideoT = {
  title: string;
  link: string;
};

const VideoArray: VideoT[] = [
  {
    title: "Lil Qell x BiggBossAzjha - Having Motion",
    link: "https://youtu.be/hydzr0Od418?si=_ExrNoZc4oha7dbJ",
  },
  {
    title: "Lil Qell x Eazzy - Back 2 Back",
    link: "https://www.youtube.com/watch?v=FrfczLrMc0k&ab",
  },
  {
    title: "Peso Peso ft. Louie Ray",
    link: "https://youtu.be/wLQfrnKbQiU",
  },
  {
    title: "Real G.O - Mad Now",
    link: "https://youtu.be/XNE0tAHwUkc",
  },
  {
    title: "Mac Moo - Talkin Crazy",
    link: "https://youtu.be/zO09F2hbJ1g",
  },
  {
    title: "Sebycax - Apel Resping",
    link: "https://www.youtube.com/watch?v=AH22aXJzxCo&ab",
  },
];
function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex min-h-screen w-full flex-col items-center justify-start"
    >
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center">
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="font-bold tracking-[0.25em] text-white text-opacity-75"
            >
              PORTFOLIO
            </motion.span>
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="text-2xl font-semibold md:text-3xl"
            >
              Some Of Our Projects.
            </motion.span>
            <motion.p
              variants={childrenVar("vertical", "spring")}
              className="text-center text-sm italic text-white text-opacity-75"
            >
              Let actions speak for themselves
            </motion.p>
          </div>
          <motion.div
            variants={parentVariant(0.25, 0.125)}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="flex max-w-[1500px] flex-wrap items-center justify-center pb-10 lg:pb-0 gap-5"
          >
            {VideoArray.map((item, index) => (
              <motion.div
                variants={childrenVar("vertical", "spring")}
                className="flex w-full items-center justify-center max-w-[300px] lg:w-fit md:max-w-none"
                key={index}
              >
                <VideoComp {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function VideoComp(props: VideoT) {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false, // Ensure it's only rendered on the client-side
  });

  return (
    <div className="aspect-video w-[300px] hover:scale-105 overflow-hidden rounded-md shadow-[0_0_10px] shadow-custom/25 outline-none transition-all hover:shadow-[0_0_10px] hover:shadow-custom/50 sm:w-[480px]">
      <ReactPlayer
        volume={0.25}
        light={true}
        controls={true}
        loop={true}
        width="100%"
        height="100%"
        url={props.link}
      />
    </div>
  );
}

export default Portfolio;
