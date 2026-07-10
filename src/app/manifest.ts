import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Presently",
    short_name: "Presently",

    description:
      "Presentation Remote",

    start_url: "/",

    display: "standalone",

    background_color: "#fbfbfc",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}