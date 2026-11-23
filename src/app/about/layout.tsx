import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DOCZIS",
  description:
    "Learn about DOCZIS, the privacy-first offline document hub for Android, and its developer Rahul Raj.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
