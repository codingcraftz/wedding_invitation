"use client";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

const photos = Array(15)
  .fill(0)
  .map((_, index) => `/images/gallery-${index + 1}.jpg`);

export default function Gallery() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-6 px-2">
      <h2 className="text-2xl text-white mb-4 font-bold">갤러리</h2>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]} // 플러그인 등록
        mobileSettings={{
          controls: true,
          showCloseIcon: true,
          download: false,
        }}
        elementClassNames="grid grid-cols-3 gap-4"
      >
        {photos.map((photo, index) => (
          <a key={index} href={photo} data-lg-size="1024-768">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
