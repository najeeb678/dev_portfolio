import HelloWorld from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>AboutUs</div>
      <Image
        src="/images/profile/developer-pic-1.png"
        alt="Next.js logo"
        width={780}
        height={738}
        priority
      />
      <Link href="/">
        <h2 className="underline font-bold text-4xl">Home</h2>
      </Link>

      <HelloWorld />
    </div>
  );
};

export default AboutUs;
