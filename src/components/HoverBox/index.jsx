import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HoverBox = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = React.useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 }); // Adjust stiffness and damping values
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 }); // Adjust stiffness and damping values

  const handleMouseMove = (event) => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const offsetY = event.clientY - containerRect.top;
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

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
    >
      {/* Element to trigger hover */}
      {children}

      {/* Circular box with text */}
      {isHovered && (
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
