import Image from "next/image";
import Link from "next/link";
import "./global.css";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <div
      // style={{
      //   height: "100vh",   
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <NavBar/>
      <div className="">Home</div>
      {/* <Image
        src="/images/projects/agency-website-cover-image.jpg"
        alt="Next.js logo"
        width={780}
        height={738}
        priority
      />
      <Link href="/about">
        <h2 className="underline font-bold text-4xl">About</h2>
      </Link> */}
    </div>
  );
}
