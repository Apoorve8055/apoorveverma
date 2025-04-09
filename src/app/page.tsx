"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./page.css";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const launchDate = new Date("2025-06-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("We're live!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="container">
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocImueCMI_2v4CG14nHE1fqpnT1snuxUvWnGH_7DK-jnnKQ5ek0T"
          alt="Logo"
          width={100}
          height={100}
          className="logo"
        />
        <h1 className="pulse">Coming Soon</h1>
        <p className="paragraph">
          Something amazing is on the way. Stay tuned!
        </p>
        <div className="countdown">{timeLeft}</div>
      </div>
    </div>
  );
}
