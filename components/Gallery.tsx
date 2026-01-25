'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  category?: string;
  columns?: 2 | 3 | 4;
}

export default function Gallery({
  images,
  category,
  columns = 3,
}: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filteredImages = category
    ? images.filter(img => img.category === category)
    : images;

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid ${columnClass} gap-6`}>
        {filteredImages.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="relative overflow-hidden rounded-lg card h-64 cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {image.category && (
              <div className="absolute top-3 left-3">
                <span className="badge">{image.category}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-accent-primary transition-colors z-10"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].alt}
              className="w-full h-auto rounded-t-lg"
            />

            {/* Caption */}
            <div className="p-4">
              <p className="text-slate-700 text-center">
                {filteredImages[selectedIndex].alt}
              </p>
              <p className="text-sm text-slate-500 text-center mt-2">
                {selectedIndex + 1} / {filteredImages.length}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 p-4 border-t border-slate-200 justify-between">
              <button
                onClick={() =>
                  setSelectedIndex(
                    selectedIndex === 0
                      ? filteredImages.length - 1
                      : selectedIndex - 1
                  )
                }
                className="btn-secondary"
              >
                ← Previous
              </button>
              <button
                onClick={() =>
                  setSelectedIndex(
                    selectedIndex === filteredImages.length - 1
                      ? 0
                      : selectedIndex + 1
                  )
                }
                className="btn-secondary"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
