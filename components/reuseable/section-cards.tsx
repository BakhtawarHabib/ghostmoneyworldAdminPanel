"use client";

import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/firebase/firestore";
import { Card } from "@/components/ui/card";

export function BannerCards() {
  const [banners, setBanners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBanners = async () => {
      const { data } = await getDocuments("banners");
      if (data) setBanners(data);
      setLoading(false);
    };
    loadBanners();
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6 text-muted-foreground text-sm">
        Loading banners...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 px-4">
      {banners.map((banner) => (
        <Card
          key={banner.id}
          className="rounded-xl shadow overflow-hidden p-3 grid grid-cols-2 gap-2"
        >
          {banner.urls.map((url: string, i: number) => (
            <img
              key={i}
              src={url}
              className="w-full h-32 object-cover rounded-md"
            />
          ))}
        </Card>
      ))}
    </div>
  );
}
