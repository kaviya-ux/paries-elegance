import { useState, useEffect } from "react";
import activitiesData from "../data/activities.json";
const { galleryImages } = activitiesData;

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowRight") {
        const idx = filteredImages.findIndex((img) => img.id === selectedImage.id);
        setSelectedImage(filteredImages[(idx + 1) % filteredImages.length]);
      } else if (e.key === "ArrowLeft") {
        const idx = filteredImages.findIndex((img) => img.id === selectedImage.id);
        setSelectedImage(
          filteredImages[(idx - 1 + filteredImages.length) % filteredImages.length]
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold">Paris Photo Gallery</h1>
        <p className="text-muted mt-4 max-w-2xl mx-auto">
          Explore the beauty of Paris through our curated photo collection. From
          iconic landmarks to hidden gems, experience the City of Light through
          stunning imagery.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-card text-sm font-semibold transition-colors ${
              selectedCategory === category
                ? "bg-ink text-cream"
                : "border border-line hover:bg-cream-soft"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <GalleryImage
            key={image.id}
            image={image}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onNext={() => {
            const idx = filteredImages.findIndex(
              (img) => img.id === selectedImage.id
            );
            setSelectedImage(filteredImages[(idx + 1) % filteredImages.length]);
          }}
          onPrevious={() => {
            const idx = filteredImages.findIndex(
              (img) => img.id === selectedImage.id
            );
            setSelectedImage(
              filteredImages[(idx - 1 + filteredImages.length) % filteredImages.length]
            );
          }}
        />
      )}
    </div>
  );
}

function GalleryImage({ image, onClick }) {
  return (
    <div
      className="relative rounded-card overflow-hidden cursor-pointer group aspect-[4/3]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <img
        src={image.image}
        alt={image.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-display font-semibold">{image.title}</h3>
        <p className="text-sm text-white/80">{image.location}</p>
      </div>
    </div>
  );
}

function Lightbox({ image, onClose, onNext, onPrevious }) {
  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={(e) => e.stopPropagation()}
        className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Close"
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 text-white hover:text-gold transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Previous image"
      >
        <span className="material-symbols-outlined text-4xl">arrow_back</span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white hover:text-gold transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Next image"
      >
        <span className="material-symbols-outlined text-4xl">arrow_forward</span>
      </button>

      <div
        className="max-w-5xl max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.image}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        <div className="text-center mt-4 text-white">
          <h3 className="font-display text-2xl font-bold">{image.title}</h3>
          <p className="text-white/80 mt-2">{image.location}</p>
          <p className="text-white/60 mt-1">{image.description}</p>
          <span className="inline-block mt-3 text-xs bg-white/20 px-3 py-1 rounded">
            {image.category}
          </span>
        </div>
      </div>
    </div>
  );
}