import { Fragment, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AnimatePresence } from "framer-motion";

export function Overlay({ isOpen, onClose, project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
            <div className="overlay__content">
              <div className="overlay__header">
                <div className="overlay__title">{project.title}</div>
                <div className="overlay__close" onClick={onClose}>
                  Close
                </div>
              </div>
              <div className="overlay__image-container">
                <img
                  className="overlay__image"
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                />
                <div className="overlay__controls">
                  <MdOutlineKeyboardArrowLeft
                    className="overlay__control"
                    onClick={handlePrevImage}
                  />
                  <div className="overlay__counter">
                    {currentImageIndex + 1} of {project.images.length}
                  </div>
                  <MdOutlineKeyboardArrowRight
                    className="overlay__control"
                    onClick={handleNextImage}
                  />
                </div>
              </div>
              <div className="overlay__footer">Skills and deliverables</div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
