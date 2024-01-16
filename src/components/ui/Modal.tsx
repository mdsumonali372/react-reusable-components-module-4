import { MouseEvent, useRef } from "react";
import cn from "../../utils/cn";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleCloseOutSideModal = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <div
      className={cn(
        "fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
      onClick={handleCloseOutSideModal}
    >
      <div
        ref={containerRef}
        className="bg-white w-full max-w-sm rounded-md p-10"
      >
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = () => {
  return <button>Close Button</button>;
};

Modal.CloseButton = CloseButton;

export default Modal;
