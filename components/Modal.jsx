"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const router = useRouter();
  function onHide() {
    router.back();
  }
  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md bg-white border border-teal-600 flex flex-col p-2 rounded-md "
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("root-modal")
  );
}
