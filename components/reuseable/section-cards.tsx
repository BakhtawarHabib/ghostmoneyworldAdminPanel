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
import { Pencil } from "lucide-react";

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
    return <div className="px-4 py-6 text-sm text-muted-foreground">Loading videos...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 sm:grid-cols-2 xl:grid-cols-3">
      {videos.map((video) => (
        <Card key={video.id} className="@container/card overflow-hidden">
          {/* Thumbnail */}
          <img
            src={video.thumbnail}
            alt={video.title}

            className="h-50 w-full object-cover"

          />

          {/* Title + Duration */}
          <CardHeader>
            <CardTitle className="text-base font-semibold line-clamp-1">
              {video.title}
            </CardTitle>

            <CardDescription className="text-sm">
              {video.duration}
            </CardDescription>
          </CardHeader>

          {/* Edit Button */}
          <CardFooter className="flex justify-between items-center">
            <div className="text-muted-foreground text-sm">
              Duration: {video.duration}
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
