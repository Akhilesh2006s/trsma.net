import { Image as ImageIcon, Video, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  { type: "photo", placeholder: "AGM 2024", span: "col-span-2 row-span-2" },
  { type: "photo", placeholder: "Training Workshop", span: "col-span-1" },
  { type: "photo", placeholder: "District Meeting", span: "col-span-1" },
  { type: "photo", placeholder: "Press Conference", span: "col-span-1 row-span-2" },
  { type: "photo", placeholder: "Leadership Summit", span: "col-span-2" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold font-body mb-4">
            Media & Gallery
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Moments That <span className="text-secondary">Define</span> Us
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Explore our journey through photos, videos, and media coverage.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <Button variant="default" size="sm">
            <ImageIcon className="w-4 h-4" />
            Photos
          </Button>
          <Button variant="outline" size="sm">
            <Video className="w-4 h-4" />
            Videos
          </Button>
          <Button variant="outline" size="sm">
            <Newspaper className="w-4 h-4" />
            News
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-4 auto-rows-[150px] lg:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${item.span} group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-primary/60" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-primary-foreground font-body font-semibold text-sm">
                  {item.placeholder}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
