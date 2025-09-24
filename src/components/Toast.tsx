// components/Toast.tsx
import React, { useEffect } from "react";

interface ToastProps {
  type: "success" | "error";
  title: string;
  message?: string;
  onClose: () => void;
  duration?: number; 
}

const Toast: React.FC<ToastProps> = ({
  type,
  title,
  message,
  onClose,
  duration = 3000,
}) => {

  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const isSuccess = type === "success";

  return (
    <div
      className={`fixed h-fit  z-[999999]  flex items-start gap-3 rounded-md px-4 py-3 shadow-lg text-black w-[320px] sm:w-[380px]
        transition-all overflow-hidden
        bg-white/90
        bottom-4 right-4 
        sm:bottom-4 sm:right-4
        max-sm:top-4 max-sm:right-1/2 max-sm:translate-x-1/2`}
    >
      {/* Gradient background on the left */}
      <div
        className={`absolute left-0 top-0 h-full w-8`}
        style={{
          background: isSuccess
            ? "linear-gradient(to right, #22c55e, transparent)" // green → transparent
            : "linear-gradient(to right, #ef4444, transparent)", // red → transparent
        }}
      />

      {/* Icon */}
      <span className="mt-1 relative z-10">
        {isSuccess ? (
          <svg
            className="w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.07-3.536-3.535a1 1 0 00-1.414 1.414l4.243 4.242a1 1 0 001.414 0l7.778-7.778a1 1 0 00-1.414-1.414L10 13.586 6.707 10.293a1 1 0 00-1.414 1.414l4.243 4.242a1 1 0 001.414 0l7.778-7.778a1 1 0 00-1.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 011.5 0 .75.75 0 01-1.5 0zM10 6.75a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>

      {/* Content */}
      <div
        className={`flex-1 relative z-10 text-black`}
      >
        <h4 className="font-semibold text-sm">{title}</h4>
        {message && <p className="text-xs">{message}</p>}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white relative z-10"
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;