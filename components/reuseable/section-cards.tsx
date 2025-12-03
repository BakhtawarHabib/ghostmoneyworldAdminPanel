"use client";

import { useEffect, useState } from "react";
import { getDocuments } from "@/lib/firebase/firestore";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, PlayCircle } from "lucide-react";

export function VideoCards() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await getDocuments("videos");

      if (!error && data) {
        setVideos(data);
      }

      setLoading(false);
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6 text-sm text-muted-foreground">
        Loading videos...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 px-4 lg:px-6 sm:grid-cols-2 xl:grid-cols-3">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Thumbnail with Play Icon */}
          <div className="relative w-full h-48 rounded-b-none">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-b-none"
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-all cursor-pointer">
              <PlayCircle className="text-white w-16 h-16 drop-shadow-lg" />
            </div>
          </div>

          {/* Title + Description */}
          <CardHeader>
            <CardTitle className="text-base font-semibold line-clamp-1">
              {video.title}
            </CardTitle>

            <CardDescription className="text-sm line-clamp-2">
              {video.description}
            </CardDescription>

            <div className="text-xs text-muted-foreground mt-1">
              Category ID: {video.category}
            </div>
          </CardHeader>

          {/* Footer */}
          <CardFooter className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Duration: {video.duration} min
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={() => console.log("Edit:", video.id)}
            >
              <Pencil className="size-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
