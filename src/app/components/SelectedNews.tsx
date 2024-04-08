"use client";
import { useGetSelectedNews } from "@/hooks/useFetchFromClient";

export default function SelectedNews() {
	const { selectedNews } = useGetSelectedNews();

	return (
		<section className="mx-4">
			<div>
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					নির্বাচিত খবর
				</div>
				{selectedNews?.map((news) => (
					<div className="flex flex-col gap-3 mb-2" key={news.id}>
						<div>
							<a href={`/articles/${news.id}`}>
								<p className="text-lg font-semibold pt-2">{news.title}</p>
							</a>

							<div>
								<p className="text-sm pt-2 line-clamp-3">{news.description}</p>
								<a
									href={`/articles/${news.id}`}
									className="text-sm text-blue-500 underline"
								>
									আরো পড়ুন
								</a>
							</div>

							<p className="text-sm text-gray-500 my-3">
								{news.reading_time} মিনিট পড়া
							</p>
							{
								<a href={`/articles/${news.id}`}>
									<div className="relative">
										<img
											src="/assets/image3.jpg"
											alt="image3"
											className="block max-w-full w-full"
										/>
									</div>
								</a>
							}
							<div className="flex justify-between my-4 text-gray-500">
								<p className="text-sm">২৩ ফেব্রুয়ারি ২০২৪, ১০:৫০</p>
								<p className="text-sm">ছবি: {news.media.author}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
