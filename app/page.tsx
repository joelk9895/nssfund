"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white w-[90%] py-20">
      <h1 className="text-2xl font-bold text-blue-900">
        NSS MEC's Waynad Relief Fund Collection
      </h1>
      <h2 className="text-4xl font-bold">Payment Info</h2>
      <Image
        src={"/QR.jpeg"}
        width={200}
        height={200}
        alt="Payment Info"
        className="w-[50%] h-fit"
      />
      <p className="text-xl font-bold ">7510131911@okbizaxis</p>
      <button
        className="bg-black hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded "
        onClick={() => {
          navigator.clipboard.writeText("7510131911@okbizaxis");
        }}
      >
        Copy Upi Id
      </button>
    </main>
  );
}
