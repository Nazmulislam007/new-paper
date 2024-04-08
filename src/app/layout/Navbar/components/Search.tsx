"use client";
import { useRouter } from "next/navigation";
import { useState, type SyntheticEvent } from "react";

export default function Search({ toggleSearch }: { toggleSearch: boolean }) {
	const route = useRouter();
	const [search, setSearch] = useState("");

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		if (search) {
			route.push(`/search/${search}`);
		}
	};

	return (
		<div
			className={`px-6 py-5 font-medium w-full md:order-1 min-h-screen ${
				toggleSearch ? "" : "hidden"
			} search-field`}
		>
			<h2 className="text-lg mb-2">অনুসন্ধান</h2>
			<form
				onSubmit={handleSubmit}
				className="flex items-center h-10 border border-blue-500 rounded"
			>
				<input
					type="text"
					className="w-full py-0 px-3 focus:outline-none"
					placeholder="খুজুন..."
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<button
					type="submit"
					className="w-9 h-8 mr-1 bg-blue-500 grid place-content-center rounded"
				>
					<span className="material-symbols-outlined text-white"> search </span>
				</button>
			</form>

			{/* <!-- search history  --> */}
			<div className="mt-8">
				<p className="border-b pb-2">সাম্প্রতিক অনুসন্ধান</p>
				<div className="py-3 border-b gap-2 flex items-center">
					<span className="material-symbols-outlined"> history </span>
					<p className="text-gray-500 text-sm">আজকের খবর</p>
				</div>

				<div className="py-3 border-b gap-2 flex items-center">
					<span className="material-symbols-outlined"> history </span>
					<p className="text-gray-500 text-sm">বাংলাদেশ</p>
				</div>
			</div>
		</div>
	);
}
