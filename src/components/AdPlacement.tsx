"use client";

import { useEffect } from "react";
import Script from "next/script";

interface AdPlacementProps {
  position: "top" | "middle" | "bottom";
}

export default function AdPlacement({ position }: AdPlacementProps) {
  useEffect(() => {
    try {
      // Try to run ads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log("AdSense error:", err);
    }
  }, []);

  // Different sizes for different positions
  const getAdSize = (position: string) => {
    switch (position) {
      case "top":
        return "min-h-[250px]";
      case "middle":
        return "min-h-[280px]";
      case "bottom":
        return "min-h-[250px]";
      default:
        return "min-h-[250px]";
    }
  };

  return (
    <div className={`w-full rounded-lg ${getAdSize(position)}`}>
      <div className="relative w-full h-full">
        {/* Fallback/placeholder when ads are loading or blocked */}
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
          <span className="text-sm">Advertisement</span>
        </div>

        {/* Actual ad unit */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client="ca-pub-7596578471761023"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
