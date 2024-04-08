"use client";

import { useNews } from "@/context/NewsContext";
import { useGetNewsByTags } from "@/hooks/useFetchFromClient";

export default function HorizontalImageText() {
	const { currentBtn } = useNews();
	const { newsByTags } = useGetNewsByTags(currentBtn);

	let content = null;

	if (!newsByTags || newsByTags.length < 1)
		content = <p className="text-center pt-5">কোনো খবর খুঁজে পাওয়া যায়নি</p>;

	if (newsByTags && newsByTags.length > 0)
		content = newsByTags.map((news) => (
			<div
				className="flex items-center gap-[10px] py-[10px] border-b"
				key={news.id}
			>
				<div className="text-gray-500 w-3/4">
					<p className="text-sm leading-tight">{news.reading_time} মিনিট পড়া</p>
					<p className="my-[6px] text-gray-800 font-medium">{news.title}</p>
					<p className="text-xs flex items-center gap-[5px]">
						50 মিনিট আগে
						<span className="h-[13px] w-[1px] block bg-gray-600" />
						{news.author}
					</p>
				</div>
				<div className="rounded w-1/4">
					<img src="/assets/image1.jpg" alt="im" width="123" height="99" />
				</div>
			</div>
		));

	return (
		<section id="horizontal-text-image" className="mx-4 flex flex-col gap-3">
			{content}
		</section>
	);
}
