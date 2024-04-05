import { Fragment } from "react";
import "./styles.css";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay__background" onClick={onClose} />
          <div className="overlay__container">{children}</div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
