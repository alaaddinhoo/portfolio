import { Fragment, useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import "./styles.css";

export function Overlay({ isOpen, onClose, project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    // Reset currentImageIndex to 0 when the overlay is closed
    if (!isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container w-[90vw] h-[80vh] p-[15px] xl:w-[65vw] xl:h-[90vh] xl:p-[30px]">
            <div className="flex flex-col gap-[35px]">
              <div className="flex flex-row justify-between items-center">
                <div className="text-[22px] font-medium">{project?.title}</div>
                <div onClick={onClose}>Close</div>
              </div>

              {project && project.images && (
                <div>
                  <img
                    className="w-full h-[450px] object-cover md:h-[500px] md:object-contain bg-[#eee]"
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                  />

                  <div className="relative bottom-[0px]  md:bottom-[22px] w-[130px] h-[22px] flex flex-row gap-[5px] items-center ml-auto bg-[#464646] text-[14px] text-white">
                    <MdOutlineKeyboardArrowLeft
                      onClick={handlePrevImage}
                      className="grow"
                    />
                    <div>
                      {currentImageIndex + 1} of {project?.images?.length}
                    </div>
                    <MdOutlineKeyboardArrowRight
                      onClick={handleNextImage}
                      className="grow"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-[12px]">
                <div className="font-medium text-[22px] ">
                  Skills & Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="skills__and__deliverables">
                    App Development
                  </div>

                  {project.categories.map((category) => (
                    <div className="skills__and__deliverables">{category}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-medium text-[22px] ">
                  Project Description
                </div>
                <div>{project.description}</div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="font-medium text-[22px] ">Link</div>
                <a href={project.link} className="underline">
                  {project.link}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
