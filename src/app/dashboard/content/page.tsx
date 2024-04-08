"use client";

import Banner from "@/app/components/Banner";
import Divider from "@/app/components/Divider";
import { useGetAllNews } from "@/hooks/useFetchFromClient";
import { useState } from "react";

export default function page() {
	const [pageRange, setPageRange] = useState({
		start: 0,
		end: 4,
	});

	const { allNews } = useGetAllNews(pageRange.start, pageRange.end);
	// console.log(allNews);

	const handleChangeRange = () => {
		setPageRange((prev) => ({ ...prev, end: prev.end + 5 }));
	};

	return (
		<main>
			{/* banner */}
			<Banner />

			<Divider />

			<div className="mx-4 mt-4">
				<section>
					{allNews?.map((news) => (
						<div className="flex flex-col" key={news.id}>
							<div className="flex items-center gap-3 py-3">
								<div className="p-3 shadow-[0px_3px_12px_rgba(0,0,0,0.09)] w-full">
									<p className="text-sm text-blue-500">{news.tag}</p>
									<a href={`/articles/${news.id}`}>
										<p className="my-2 text-lg font-medium">{news.title}</p>
									</a>
									<div className="flex mt-1 justify-between text-sm text-gray-500">
										<p className="flex items-center gap-1">
											50 মিনিট আগে
											<span className="h-3 w-[1px] block bg-gray-500" />
											{news.author}
										</p>
										<p>{news.reading_time} মিনিট পড়া</p>
									</div>
								</div>
							</div>
						</div>
					))}
					<div className="flex items-center mt-7">
						<button
							type="button"
							className="bg-blue-500 text-white px-3 pt-3 pb-2 rounded hover:bg-blue-600 mx-auto"
							onClick={handleChangeRange}
						>
							আরো দেখুন
						</button>
					</div>
				</section>
			</div>
		</main>
	);
}
