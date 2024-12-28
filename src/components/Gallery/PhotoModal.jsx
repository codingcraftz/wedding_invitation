"use client";
import { useState } from "react";

export default function PhotoModal({ photo, onClose }) {
  const [currentPhoto, setCurrentPhoto] = useState(photo);

  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    // Add the same photo URLs here for navigation
  ];

  const currentIndex = photos.indexOf(currentPhoto);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentPhoto(photos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentPhoto(photos[nextIndex]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        ×
      </button>
      <div className="flex items-center">
        <button className="text-white text-2xl mr-4" onClick={handlePrev}>
          ‹
        </button>
        <img
          src={currentPhoto}
          alt="Current"
          className="max-w-full max-h-full"
        />
        <button className="text-white text-2xl ml-4" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
}
