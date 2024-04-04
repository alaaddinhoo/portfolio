import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { TbMenu } from "react-icons/tb";
import { menuVars, containerVars, mobileLinkVars } from "./anim";

const Navbar = () => {
  // block scroll stuff
  const scrollBlocked = useRef(false);
  const toggleScroll = () => {
    scrollBlocked.current = !scrollBlocked.current;
    document.documentElement.classList.toggle(
      "no-scroll",
      scrollBlocked.current
    );
  };

  // navbar stuff
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    toggleScroll();
  }, [open]);

  return (
    <div>
      {/*  mobile fixed top navbar  */}
      <div className="w-full px-[10vw] sticky top-0 h-[100px] bg-white z-[399] flex justify-between items-center sm:hidden">
        <a
          className="w-[20px] h-[20px] cursor-pointer rounded-full border-[2px] border-black"
          href="/"
        ></a>

        <div>
          <div className="rounded-full">
            <TbMenu
              className="p-[15px] text-6xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* web nav bar  */}
      <div className=" sticky top-0 z-[399] h-[100px] mx-auto mb-[calc(125px-3vh)] 2xl:mb-[gap-[125px]] bg-white w-[80vw] xl:w-[75vw] 2xl:w-[65vw] justify-between items-center hidden sm:flex">
        <a
          className="w-[20px] h-[20px] rounded-full border-[2px] border-black"
          href="/"
        ></a>
        {/* <div className="hidden sm:flex text-[20px] flex-row gap-12">
                <div>Work</div>
                <div>Services</div>
                <div>Resume</div>
            </div> */}
        <TbMenu
          className="p-[15px] text-6xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-[400] left-0 top-0 w-full h-screen origin-top bg-white text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1
                  className="text-lg cursor-pointer text-black"
                  onClick={(event) => (window.location.href = "/")}
                >
                  Home
                </h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-5xl uppercase text-black"
                  >
                    <a href="/">WORK</a>
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-5xl uppercase text-black"
                  >
                    <a href="/Portfolio.pdf">RESUME</a>
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-5xl uppercase text-black"
                  >
                    <a href="/skills">SKILLS</a>
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="text-5xl uppercase text-black"
                  >
                    <a href="/about">ABOUT</a>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
              >
                <div className="overflow-hidden">
                  <motion.div
                    variants={mobileLinkVars}
                    className="font-lora text-center underline underline-offset-4"
                  >
                    <a href="mailto:alaaeldin.92@outlook.com">
                      alaaeldin.92@outlook.com
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
