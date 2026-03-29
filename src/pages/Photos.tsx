import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { photoGroups, allPhotos } from '../data/photos';

const full = (filename: string) =>
  `${import.meta.env.BASE_URL}photos/${encodeURIComponent(filename)}`;

const Photos = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % allPhotos.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, prev, next, closeLightbox]);

  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-beer-cream/20">
      {/* Header */}
      <section className="bg-beer-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Camera className="h-10 w-10 text-beer-amber" />
            <h1 className="text-4xl md:text-5xl text-white">Photos</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
            Snapshots from BURP meetings, competitions, and special events — {allPhotos.length} photos and counting.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {photoGroups.map(group => {
          const groupStartIndex = globalIndex;
          globalIndex += group.photos.length;

          return (
            <section key={group.label}>
              <h2 className="text-2xl font-bold text-beer-brown mb-6 pb-2 border-b border-beer-amber/30">
                {group.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {group.photos.map((photo, i) => {
                  const idx = groupStartIndex + i;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => openLightbox(idx)}
                      className="aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-beer-amber focus:ring-offset-2 bg-beer-brown/10"
                      title={photo.caption}
                    >
                      <img
                        src={full(photo.filename)}
                        alt={photo.caption ?? photo.filename}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[90vh] mx-16 flex flex-col items-center gap-4"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={full(allPhotos[lightboxIndex].filename)}
              alt={allPhotos[lightboxIndex].caption ?? allPhotos[lightboxIndex].filename}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            {allPhotos[lightboxIndex].caption && (
              <p className="text-white/90 text-center text-sm md:text-base max-w-2xl">
                {allPhotos[lightboxIndex].caption}
              </p>
            )}
            <p className="text-white/50 text-xs">
              {lightboxIndex + 1} / {allPhotos.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Photos;
