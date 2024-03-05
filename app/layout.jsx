import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Canada Wheels | Find your dream car",
  description: "Find your dream car today!",
  keywords: "cars, used cars, new cars, find cars",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>;
      </body>
    </html>
  );
}

export default MainLayout;
