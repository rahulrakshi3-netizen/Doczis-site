import type { Metadata } from "next";
import FeaturesPage from "./FeaturesPage";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all 12+ DOCZIS features: Image to PDF, PDF to Images, OCR Scanner, Reorder Pages, Delete Pages, Split PDF, Merge PDFs, Compress, Protect PDF, Unprotect PDF, Watermark, and Sign PDF.",
};

export default function Page() {
  return <FeaturesPage />;
}
