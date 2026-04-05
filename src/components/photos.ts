export type Photo = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "landscape" | "city";
};

export const photos: Photo[] = [
  { id: 1, src: "/photos/DSC05297.JPG", alt: "DSC05297", width: 7008, height: 4672, category: "landscape" },
  { id: 2, src: "/photos/DSC05321.JPG", alt: "DSC05321", width: 7008, height: 4672, category: "landscape" },
  { id: 3, src: "/photos/DSC05332.JPG", alt: "DSC05332", width: 7008, height: 4672, category: "landscape" },
  { id: 4, src: "/photos/DSC05338.JPG", alt: "DSC05338", width: 7008, height: 4672, category: "landscape" },
  { id: 5, src: "/photos/DSC05399.JPG", alt: "DSC05399", width: 7008, height: 4672, category: "landscape" },
  { id: 6, src: "/photos/DSC05425.JPG", alt: "DSC05425", width: 7008, height: 4672, category: "landscape" },
];
