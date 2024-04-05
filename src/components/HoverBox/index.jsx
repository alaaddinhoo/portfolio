import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HoverBox = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control visibility of the box
  const containerRef = React.useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (event) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const offsetY = event.clientY - containerRect.top;
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const handleContainerClick = () => {
    // Toggle the visibility of the box when the container is clicked
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    // Reset the visibility of the box when isHovered state changes
    if (isHovered) {
      setIsVisible(true);
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => {
        setIsHovered(true);
        document.body.style.cursor = "none";
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        document.body.style.cursor = "default";
      }}
      onMouseMove={handleMouseMove}
      onClick={handleContainerClick} // Call handleContainerClick when the container is clicked
    >
      {/* Element to trigger hover */}
      {children}

      {/* Circular box with text */}
      {isHovered && isVisible && (
        <motion.div
          style={{
            position: "absolute",
            top: springY,
            left: springX,
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
            display: "grid",
            placeItems: "center",
            width: "150px",
            height: "150px",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          Click me
        </motion.div>
      )}
    </div>
  );
};

export default HoverBox;
