import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navConfig = {
  unscrolledStyle:
    "bg-transparent border-b border-transparent backdrop-blur-none",
  scrolledStyle: "bg-custom/10 border-b border-custom/30 backdrop-blur-sm",
};

type navLinkT = {
  name: string;
  link: string;
};

const navLinkA: navLinkT[] = [
  {
    name: "about us",
    link: "/#about",
  },
  {
    name: "skills",
    link: "/#skills",
  },
  {
    name: "services",
    link: "/#services",
  },
  {
    name: "portfolio",
    link: "/#portfolio",
  },
  {
    name: "credits",
    link: "/#credits",
  },
  {
    name: "hiring",
    link: "/#hiring",
  },
  {
    name: "discord",
    link: "/#discord",
  },
  {
    name: "contact",
    link: "/#contact",
  },
];

function Navbar() {
  const { scrollY } = useScroll();

  const [navStyle, setnavStyle] = useState(navConfig.unscrolledStyle);

  const [navMenuState, setnavMenuState] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setnavStyle(navConfig.scrolledStyle);
    } else {
      setnavStyle(navConfig.unscrolledStyle);
    }
  });

  const router = useRouter();

  function sendTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: "-30px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      className={`fixed top-0 z-[999] flex h-15 w-full select-none items-center justify-center`}
    >
      <div
        className={`flex h-full w-full items-center justify-center ${navStyle} transition-all duration-300`}
      >
        <div className="relative flex h-full w-full max-w-[1400px] items-center justify-between gap-5 px-10 md:px-5">
          <Link href={"/"} scroll={false}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              onClick={() => sendTop()}
              whileHover={{ scale: 1.2 }}
              className="relative hover:cursor-pointer aspect-square h-9"
            >
              <Image
                loading="eager"
                draggable={false}
                src={"/assets/navlogo.webp"}
                fill
                alt=""
              />
            </motion.div>
          </Link>

          <motion.ul
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.7,
                  staggerChildren: 0.25,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className=" hidden items-center justify-center gap-5 px-2.5 md:flex "
          >
            {navLinkA.map((item, index) => (
              <motion.li
                variants={{
                  hidden: { x: "-30px", opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "tween",
                    },
                  },
                }}
                key={index}
              >
                <NavLinkC link={item.link} name={item.name} />
              </motion.li>
            ))}
          </motion.ul>
          {!navMenuState && (
            <div
              onClick={() => setnavMenuState(!navMenuState)}
              className="rounded-full border border-custom/30 bg-custom/10 p-1.5 hover:cursor-pointer md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
          {navMenuState && (
            <div
              onClick={() => setnavMenuState(!navMenuState)}
              className="rounded-full border border-custom/30 bg-custom/10 p-1.5 hover:cursor-pointer md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
          {navMenuState && <NavMenuComp />}
        </div>
      </div>
    </motion.nav>
  );
}

function NavMenuComp() {
  return (
    <ul className="absolute left-0 top-[60px] flex h-screen w-full flex-col items-center justify-start gap-5 border-t border-custom/30 bg-black/50 pt-10 backdrop-blur-sm">
      {navLinkA.map((item, index) => (
        <motion.li
          variants={{
            hidden: { x: "-30px", opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                type: "tween",
              },
            },
          }}
          key={index}
        >
          <NavLinkC link={item.link} name={item.name} />
        </motion.li>
      ))}
    </ul>
  );
}

function NavLinkC({ link, name }: navLinkT) {
  return (
    <Link
      href={link}
      scroll={false}
      className=" relative px-1 font-semibold capitalize before:absolute before:-bottom-1 before:right-0 before:h-0.5 before:w-[0%] before:bg-custom/75 before:transition-all hover:before:left-0 hover:before:w-full"
    >
      {name}
    </Link>
  );
}

export default Navbar;
