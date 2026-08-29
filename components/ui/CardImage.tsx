import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

// A CMS-created item can exist with no image uploaded yet (imageUrl starts
// as ""), and next/image throws hard on an empty src. Every card/modal that
// renders a CMS-controlled image goes through this instead of <Image>
// directly, so a missing image degrades to a placeholder rather than
// crashing the page.
export function CardImage({ src, alt, ...props }: ImageProps) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
        <ImageOff className="h-8 w-8" strokeWidth={1.5} />
      </div>
    );
  }
  return <Image src={src} alt={alt} {...props} />;
}
