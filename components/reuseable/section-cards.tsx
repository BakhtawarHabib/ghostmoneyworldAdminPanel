"use client";

import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/firebase/firestore";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function BannerCards() {
  const [banners, setBanners] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  const fetchBanners = async () => {
    const { data } = await getDocuments("banners");
    if (data) {
      const flat = data.flatMap((b: any) => b.urls);
      setBanners(flat);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBanners();

    // Listen for BannerUploader event
    const refresh = () => fetchBanners();
    window.addEventListener("banner-updated", refresh);

    return () => window.removeEventListener("banner-updated", refresh);
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6 text-muted-foreground text-sm text-center">
        Loading banners...
      </div>
    );
  }

  if (banners.length === 0) {
    return (
      <div className="px-4 py-6 text-center text-gray-500">
        No banners uploaded yet.
      </div>
    );
  }

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % banners.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="w-full flex flex-col items-center gap-4 py-6 px-4">

      {/* Slider */}
      <Card className="w-full max-w-2xl h-60 overflow-hidden relative rounded-2xl shadow-lg bg-black/5">

        <img
          src={banners[index]}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full text-lg backdrop-blur hover:bg-white shadow"
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full text-lg backdrop-blur hover:bg-white shadow"
        >
          ›
        </button>
      </Card>

      {/* Dots */}
      <div className="flex gap-2 mt-1">
        {banners.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "w-4 h-4 rounded-[20px] cursor-pointer transition-all",
              i === index ? "bg-black" : "bg-gray-400/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
