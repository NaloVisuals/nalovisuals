import { motion } from "framer-motion";
import Divider from "../utils/Divider";
import Image from "next/image";
import { childrenVar, parentVariant } from "../utils/AnimateFunctions";

type SkillT = {
  percentage: number;
  icon: string;
  colorStyle: string;
  shadow: string;
  dropShadow: string;
};

const SkillArr: SkillT[] = [
  {
    colorStyle: "bg-[#e08bfd]",
    icon: "/assets/after.webp",
    shadow: "shadow-[0_0_10px_rgb(224,139,253,0.6)]",
    dropShadow: "drop-shadow-[0_0_10px_rgb(224,139,253,0.25)]",
    percentage: 100,
  },
  {
    colorStyle: "bg-[#9a9aff]",
    icon: "/assets/premiere.webp",
    shadow: "shadow-[0_0_10px_rgba(154,154,255,0.6)]",
    dropShadow: "drop-shadow-[0_0_10px_rgba(154,154,255,0.25)]",
    percentage: 100,
  },
  {
    colorStyle: "bg-[#38b0de]",
    icon: "/assets/davinci.webp",
    shadow: "shadow-[0_0_10px_rgba(56,176,222,0.6)]",
    dropShadow: "drop-shadow-[0_0_10px_rgba(56,176,222,0.25)]",
    percentage: 100,
  },
  {
    colorStyle: "bg-[#5fce98]",
    icon: "/assets/finalcut.webp",
    shadow: "shadow-[0_0_10px_rgba(95,206,152,0.6)]",
    dropShadow: "drop-shadow-[0_0_10px_rgba(95,206,152,0.25)]",
    percentage: 100,
  },
  {
    colorStyle: "bg-[#e37200]",
    icon: "/assets/blender.webp",
    shadow: "shadow-[0_0_10px_rgba(227,114,0,0.6)]",
    dropShadow: "drop-shadow-[0_0_10px_rgba(227,114,0,0.25)]",
    percentage: 60,
  },
  {
    colorStyle: "bg-[#a1a0e1]",
    icon: "/assets/c4d.webp",
    shadow: "shadow-[0_0_10px_rgba(161,160,225,0.6)]",
    dropShadow: "drop-shadow-[0_0_10px_rgba(161,160,225,0.25)]",
    percentage: 40,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className=" flex min-h-screen w-full select-none flex-col items-center justify-start bg-gradient-to-tl "
    >
      <Divider />
      <div className="flex w-full flex-1 items-stretch justify-center">
        <div className="flex items-center justify-center py-10 lg:py-0">
          <div className="flex min-h-[500px] flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-0 lg:pt-10">
            <motion.div
              variants={parentVariant(0.5, 0.25)}
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              className="flex h-full flex-col items-center justify-center gap-2.5 px-5 lg:items-end lg:justify-start"
            >
              <div className="flex flex-col items-center justify-center gap-1.5 lg:items-end lg:justify-start">
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="text-xl font-semibold"
                >
                  Skill
                </motion.span>
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="max-w-[150px] text-center opacity-75 lg:text-right"
                >
                  Raising the bar and exceeding client expectation is the
                  ultimate drive for everything I do.
                </motion.span>
              </div>
            </motion.div>
            <div className="flex h-full flex-1 flex-col items-center justify-start gap-10 px-5 pt-2.5">
              <motion.ul
                variants={parentVariant(0.25, 0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex w-full flex-col items-center justify-start gap-10 lg:flex-row"
              >
                {SkillArr.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={childrenVar("horizontal", "tween")}
                  >
                    <SkillComp
                      colorStyle={item.colorStyle}
                      icon={item.icon}
                      percentage={item.percentage}
                      shadow={item.shadow}
                      dropShadow={item.dropShadow}
                    />
                  </motion.div>
                ))}
              </motion.ul>
              <motion.div
                variants={parentVariant(0.25, 0.25)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="hidden flex-col items-start justify-center gap-2.5 lg:flex"
              >
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="text-xl font-semibold"
                >
                  Experience
                </motion.span>
                <motion.span
                  variants={childrenVar("vertical", "spring")}
                  className="w-full max-w-[600px] opacity-75"
                >
                  We have a diverse range of editors experienced in all
                  specialized software for video editing and AI. They
                  accumulated through years of discipline and hands-on
                  experience to create fast, unique & diverse projects that
                  ensure to satisfy the clients needs in all fields.
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillComp({
  colorStyle,
  icon,
  percentage,
  shadow,
  dropShadow,
}: SkillT) {
  return (
    <div className="flex flex-row-reverse items-center justify-center gap-2.5 lg:flex-col">
      <div
        className={`flex h-2 w-40 flex-row-reverse items-center justify-end rounded-3xl bg-neutral-950 lg:h-40 lg:w-2 lg:flex-col`}
      >
        <motion.div
          initial={{ height: "0%" }}
          animate={{ height: `${percentage}%` }}
          transition={{
            type: "tween",
          }}
          className={`hidden w-full rounded-3xl lg:inline ${shadow} ${colorStyle}`}
        ></motion.div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{
            type: "tween",
          }}
          className={`inline h-full w-full rounded-3xl lg:hidden ${shadow} ${colorStyle}`}
        ></motion.div>
      </div>
      <div className={`relative ${dropShadow} h-10 w-10`}>
        <Image draggable={"false"} src={icon} fill alt="" />
      </div>
    </div>
  );
}

export default Skills;
