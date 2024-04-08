import NewsProvider from "@/context/NewsContext";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/footer/Footer";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta charSet="utf-8" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@100..900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,1,0"
				/>
			</head>
			<body className="md:w-[400px] md:mx-auto md:border-l md:border-r">
				<NewsProvider>
					<Navbar />
					<div className="pb-14" />
					{children}
					<Footer />
				</NewsProvider>
			</body>
		</html>
	);
}