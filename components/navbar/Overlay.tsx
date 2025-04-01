"use client";
import { useEffect, useRef } from "react";
import SearchIcon from "./Searchicon"
import Button from "@/components/ui/Button"

interface OverlayProps {
  onClose: () => void;
}

export default function Overlay({ onClose }: OverlayProps) {
  const overlayInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (overlayInputRef.current) {
      overlayInputRef.current.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      <div className="fixed top-0 left-0 right-0 bg-white shadow-2xl z-50 p-6 h-[50vh] overflow-auto transition-transform duration-300 flex flex-col justify-start items-center pt-6">

        <div className="absolute top-4 right-6">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl font-bold"
          >
            ✕
          </button>
        </div>


        <div className="w-full max-w-3xl flex flex-row gap-4">
          <input
            ref={overlayInputRef}
            type="text"
            className="w-full border-b-2 border-black text-lg px-2 py-3 outline-none"
          />
          <div>
            <Button className="flex-shrink-0">
                    <SearchIcon/>
                    </Button>
            </div>
        </div>
      </div>
    </>
  );
}
