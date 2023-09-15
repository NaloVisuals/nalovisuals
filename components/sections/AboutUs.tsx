import Link from "next/link";
import { childrenVar, parentVariant } from "../utils/AnimateFunctions";
import Divider from "../utils/Divider";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full select-none flex-col items-center justify-start bg-custom/5 "
    >
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center pb-10 "
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-2.5 px-5">
            <div className="flex flex-col items-center justify-center">
              <motion.span
                variants={childrenVar("vertical", "spring")}
                className="font-bold tracking-[0.25em] text-white text-opacity-75"
              >
                ABOUT US
              </motion.span>
              <motion.span
                variants={childrenVar("vertical", "spring")}
                className="text-2xl font-semibold md:text-3xl"
              >
                Nalo Visuals.
              </motion.span>
            </div>
            <motion.p
              variants={childrenVar("vertical", "spring")}
              className="text-center text-sm italic text-white text-opacity-75"
            >
              Where ideas take flight in the world of reality
            </motion.p>
          </div>
          <div className="w-full px-5">
            <motion.div
              variants={childrenVar("vertical", "spring")}
              className="h-[1px] w-full bg-custom/30"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-10 px-5 lg:flex-row">
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="w-full max-w-[300px] text-center text-xl font-semibold lg:max-w-[400px] lg:text-left "
            >
              Welcome to Nalo Visuals, we are a dynamic VFX post production
              agency, dedicated to collaborating with directors and
              videographers to create engaging videos that satisfy{" "}
              <Link scroll={false} href={"#portfolio"} className="text-custom">
                clients.
              </Link>
            </motion.span>
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="w-full max-w-[300px] text-center text-xl font-semibold lg:max-w-[400px] "
            >
              At Nalo Visuals, our team of skilled editors bring a diverse range
              of talent to your videos.
              <br className="hidden lg:inline" />{" "}
              <br className="hidden lg:inline" />
              We pride ourselves on making strong partnerships and bringing
              videos to life in a{" "}
              <span className="text-custom">MAX 48 hrs turnaround.</span>
            </motion.span>
            <motion.span
              variants={childrenVar("vertical", "spring")}
              className="w-full max-w-[300px] text-center text-xl font-semibold lg:max-w-[400px] lg:text-right "
            >
              We’ve worked with{" "}
              <Link scroll={false} href={"#portfolio"} className="text-custom">
                top tier artists
              </Link>{" "}
              including Rowdy Rebel, Peso Peso, Louie Ray, Leg and many more.
              <br className="hidden lg:inline" />{" "}
              <br className="hidden lg:inline" />
              Whether you're an experienced director or an emerging artist Nalo
              Visuals can help you out with your editing needs.
            </motion.span>
          </div>
          <div className="w-full px-5">
            <motion.div
              variants={childrenVar("vertical", "spring")}
              className="h-[1px] w-full bg-custom/30"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2.5 px-5 text-center">
            <motion.span
              className="text-xl font-semibold"
              variants={childrenVar("vertical", "spring")}
            >
              <Link href={"#contact"} scroll={false} className="text-custom">
                Contact
              </Link>{" "}
              us today to discuss future and projects
            </motion.span>
            <motion.span
              className="text-sm font-semibold text-white text-opacity-75"
              variants={childrenVar("vertical", "spring")}
            >
              Or
            </motion.span>
            <motion.span
              className="text-xl font-semibold"
              variants={childrenVar("vertical", "spring")}
            >
              Check out our{" "}
              <Link href={"#credits"} scroll={false} className="text-custom">
                Credits
              </Link>{" "}
              section to see all of our satisfied clients.
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutUs;
