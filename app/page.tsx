import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="banner">
        <div className="logo-container">
          <Image
            src="/../public/logo_transparentbg.png"
            alt="...loading"
            width={700}
            height={700}
          />
        </div>
      </div>
    </main>
  );
}
