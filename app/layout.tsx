// "use client";

// import "./globals.css";
// import Header from "@/components/Header";
// import { ThemeProvider } from "next-themes";
// import ScrollTop from "@/components/ScrollTop";
// import Footer from "@/components/Footer";
// import { Toaster } from "react-hot-toast";
// import { Poppins } from "next/font/google";
// import Head from "@/components/Head";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "400", "700", "900"],
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       {/* <Head /> */}

//       <body id="root" className={poppins.className}>
//         <ThemeProvider attribute="class">
//           <Header />
//           <ScrollTop />
//           {children}
//           <hr className="border-gray-300 dark:border-gray-800 w-full" />
//           <Toaster position="top-right" />
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// -------

import "./globals.css";
import MyLayout from "./MyLayout";
import siteMetadata from "@/data/siteMetadata";


export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
        <MyLayout>{children}</MyLayout>
  
  );
}
