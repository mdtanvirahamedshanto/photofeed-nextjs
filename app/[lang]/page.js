import PhotoList from "@/components/PhotoList";

export default async function Home() {
  const response = await fetch(
    `https://photofeed-nextjs.vercel.app/api/photos`
  );
  const photos = await response.json();
  return <PhotoList photos={photos} />;
}
