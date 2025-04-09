"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div style={styles.body}>
      <div style={styles.container}>
        <Image
          src="https://lh3.googleusercontent.com/a/ACg8ocImueCMI_2v4CG14nHE1fqpnT1snuxUvWnGH_7DK-jnnKQ5ek0T"
          alt="Logo"
          width={100}
          height={100}
          style={{ borderRadius: "50%", marginBottom: "1.5rem" }}
        />
        <h1 className="pulse">Coming Soon</h1>
        <p style={styles.paragraph}>
          Something amazing is on the way. Stay tuned!
        </p>
        <div style={styles.countdown}>{timeLeft}</div>

        <style jsx>{`
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
            }
          }
          .pulse {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            animation: pulse 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Roboto, sans-serif",
    height: "100vh",
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  container: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  countdown: {
    fontSize: "2rem",
    fontWeight: 300,
  },
};
