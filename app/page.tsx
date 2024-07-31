"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copying = () => {
    setCopied(true);
    navigator.clipboard.writeText("7510131911@okbizaxis");
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white dark:bg-white w-[90%] py-20">
      <h1 className="text-2xl font-bold text-blue-900 text-center">
        NSS MEC&apos;s Waynad Relief Fund Collection
      </h1>
      <h2 className="text-4xl font-bold text-black dark:text-black">
        Payment Info
      </h2>
      <Image
        src={"/QR.jpeg"}
        width={200}
        height={200}
        alt="Payment Info"
        className="w-[50%] h-fit"
      />
      <p className="text-xl font-bold text-black dark:text-black ">
        7510131911@okbizaxis
      </p>
      <button
        className="bg-black hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded"
        onClick={copying}
      >
        Copy Upi Id
      </button>
      {copied && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white font-bold py-2 px-4 rounded">
          UPI ID copied to clipboard!
        </div>
      )}
    </main>
  );
}
