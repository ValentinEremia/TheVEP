"use client";

import "./globals.css";
// import '../css/prism.css';
// import '../css/tailwind.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { ThemeProvider } from "next-themes";
import Footer2 from "@/components/Footer2";
import ScrollTop from "@/components/ScrollTop";

// export const metadata = {
//   title: "valy-web",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>valy-web</title>
      <meta name="description" content="My Portfolio Website" />
      <body className="bg-gray-50  relative dark:bg-gray-900 ">
        <ThemeProvider attribute="class">
          <div className="bg-[#f39396] absolute top-[8rem] z-0 right-[1rem] h-[86%] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#dd575956]" />
          {/* <div className="bg-[#f39396] absolute top-[5rem] z-0 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#dd575979]" /> */}
          <div className="bg-[#ada4f2] absolute z-0 top-[8rem]  h-[86%] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7368ec4b]" />
          {/* <div className="bg-[#ada4f2] absolute top-[8rem] z-0 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7368ec6d]" /> */}
          <Header />
          <ScrollTop />

          {children  }

          <hr className="border-gray-800 w-full" />
          
            <Footer2 />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
