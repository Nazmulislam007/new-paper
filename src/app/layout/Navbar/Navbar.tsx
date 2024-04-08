"use client";

import { useEffect, useState } from "react";
import Search from "./components/Search";

export default function Navbar() {
	const [toggleNav, setToggleNav] = useState(false);
	const [toggleSearch, setToggleSearch] = useState(false);

	useEffect(() => {
		if (toggleNav || toggleSearch) {
			document.body.classList.add("overflow-hidden");
		}
		if (!toggleNav && !toggleSearch) {
			document.body.classList.remove("overflow-hidden");
		}
	}, [toggleNav, toggleSearch]);

	return (
		<nav className="fixed z-50 top-0 left-0 right-0 bg-white md:w-[400px] md:left-1/2 md:-translate-x-1/2 md:border-l md:border-r">
			<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2.5 border-b">
				<a href="/">
					<img src="/assets/logo.jpg" className="h-10" alt="Flowbite Logo" />
				</a>
				<div className="flex items-center gap-1">
					<button
						type="button"
						className="w-9 h-9 flex items-center justify-center text-sm text-gray-500 rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 search"
						onClick={() => {
							setToggleSearch(!toggleSearch);
							if (toggleNav) setToggleNav(false);
						}}
					>
						<span className="material-symbols-outlined"> search </span>
					</button>
					<button
						onClick={() => {
							setToggleNav(!toggleNav);
							if (toggleSearch) setToggleSearch(false);
						}}
						data-collapse-toggle="mega-menu-full"
						type="button"
						className="inline-flex items-center w-9 h-9 justify-center text-sm text-gray-500 rounded-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 hamburger"
						aria-controls="mega-menu-full"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* <!-- nav manu --> */}
			<div
				className={`font-medium w-full md:order-1 min-h-screen nav-menu ${
					toggleNav ? "" : "hidden"
				}`}
			>
				<ul className="flex flex-col">
					<li>
						<a
							href="/"
							className="block py-4 px-5 text-gray-900 rounded hover:bg-gray-100 border-b"
							aria-current="page"
						>
							মূলপাতা
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							রাজনীতি
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							সর্বাধিক পঠিত
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							অর্থনীতি
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							স্বাস্থ্য
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							খেলা
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							প্রযুক্তি
						</a>
					</li>
					<li>
						<a
							href="/articles/article"
							className="block py-4 border-b px-5 text-gray-900 rounded hover:bg-gray-100"
							aria-current="page"
						>
							ভিডিও
						</a>
					</li>
					<li>
						<a
							href="/dashboard/content"
							className="block py-4 border-b px-5 text-green-900 rounded hover:bg-green-100"
							aria-current="page"
						>
							ড্যাশবোর্ড
						</a>
					</li>
				</ul>
			</div>
			{/* <!-- search --> */}
			<Search toggleSearch={toggleSearch} />
		</nav>
	);
}
