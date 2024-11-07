import links from "@/links.json";
import { notFound } from "next/navigation";

export default function LinkHead({ params }: { params: { id: string } }) {
  const link = links[params.id];

  if (link == null) {
    return notFound();
  }

  return (
    <>
      <meta property="og:title" content={link.title} />
      <meta property="og:site_name" content="Yumin Jung" />
      <meta property="og:description" content={link.description} />
      <meta
        property="og:image"
        content={`https://yumin.blog/og/${link.image}`}
      />
    </>
  );
}
