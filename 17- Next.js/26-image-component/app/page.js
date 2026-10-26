import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Local Image</h1>
      <Image
        src="/shoe-image.jpeg"
        height={300}
        width={300}
        alt="Shoe-image"
        priority={true}
      />

      <br />

      <h1>External Image</h1>
      <Image
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.avif"
        height={300}
        width={300}
        alt="External-image"
        className="h-[300px] w-[300px] object-cover" 
      />
    </div>
  );
}