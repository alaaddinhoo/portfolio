import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { TbMenu } from "react-icons/tb";
import { menuVars, containerVars, mobileLinkVars } from "./anim";
import Magnetic from "../../common/Magnetic";

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

  // get extension
  const currentPageExtension = window.location.pathname.split(".").pop();
  // console.log(currentPageExtension);

  // navbar stuff
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
    toggleScroll();
  }, [open]);

  return (
    <div className="sticky top-0 z-[399] h-[100px] bg-white w-full mx-auto">
      {/*  mobile fixed top navbar  */}
      <div className="h-[100px] justify-between items-center flex sm:hidden">
        <a
          className=" w-[20px] h-[20px] cursor-pointer rounded-full border-[2px] border-black"
          href="/"
        ></a>

        <div>
          <TbMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>

      {/* web nav bar  */}
      <div className="h-[100px] justify-between items-center hidden sm:flex">
        <a
          className="w-[20px] h-[20px] rounded-full border-[2px] border-black"
          href="/"
        ></a>
        {/* <div className="hidden sm:flex text-[20px] flex-row gap-12">
                <div>Work</div>
                <div>Services</div>
                <div>Resume</div>
            </div> */}
        <TbMenu className="text-4xl cursor-pointer" onClick={toggleMenu} />
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
                  className="text-lg cursor-pointer"
                  onClick={(event) => (window.location.href = "/")}
                >
                  Home
                </h1>
                <p className="text-md cursor-pointer" onClick={toggleMenu}>
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora text-5xl uppercase items-center gap-4 "
              >
                <Magnetic>
                  <div className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <a
                        href="/"
                        style={{
                          color: `${
                            currentPageExtension == "/" ? "black" : "gray"
                          }`,
                        }}
                      >
                        WORK
                      </a>
                    </motion.div>
                  </div>
                </Magnetic>

                {/* <Magnetic>
                  <div className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <a
                        href="/resume"
                        style={{
                          color: `${
                            currentPageExtension == "/resume" ? "black" : "gray"
                          }`,
                        }}
                      >
                        RESUME
                      </a>
                    </motion.div>
                  </div>
                </Magnetic>

                <Magnetic>
                  <div className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <a
                        href="/skills"
                        style={{
                          color: `${
                            currentPageExtension == "/skills" ? "black" : "gray"
                          }`,
                        }}
                      >
                        SKILLS
                      </a>
                    </motion.div>
                  </div>
                </Magnetic>

                <Magnetic>
                  <div className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <a
                        href="/about"
                        style={{
                          color: `${
                            currentPageExtension == "/about" ? "black" : "gray"
                          }`,
                        }}
                      >
                        ABOUT
                      </a>
                    </motion.div>
                  </div>
                </Magnetic> */}
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
