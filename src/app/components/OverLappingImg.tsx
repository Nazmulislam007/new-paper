"use client";
import { useGetBDNews } from "@/hooks/useFetchFromClient";

export default function OverLappingImg() {
	const { BDNews } = useGetBDNews();

	return (
		<section className="mx-4 my-7">
			<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
				বাংলাদেশে
			</div>
			{/* <!-- overlapping image--> */}
			<div className="relative mt-2 rounded-lg before:content-[''] before:absolute before:h-full before:w-full before:z-10 before:bg-gradient-to-b before:from-[#00000000] before:to-[#000000c4] overlapping-img-container">
				<img
					src="/assets/image4.jpg"
					alt="image4"
					className="block max-w-full w-full"
				/>
				<p className="absolute z-20 left-[10px] bottom-[5px] text-white text-lg">
					{BDNews?.[0].title}
				</p>
			</div>

			<section className="my-2 flex flex-col gap-3">
				{BDNews?.slice(1).map((news) => (
					<a href={`/articles/${news.id}`}>
						<div className="flex items-center gap-[10px] py-[10px] border-b">
							<div className="text-gray-500 basis-3/4">
								<p className="text-sm leading-tight">
									{news.reading_time} মিনিট পড়া
								</p>
								<p className="my-[6px] text-gray-800 font-medium">
									{news.title}
								</p>
								<p className="text-xs flex items-center gap-[5px]">
									50 মিনিট আগে
									<span className="h-[13px] w-[1px] block bg-gray-600" />
									{news.author}
								</p>
							</div>
							<div className="rounded basis-1/4">
								<img
									src="/assets/image1.jpg"
									alt="ima"
									width="123"
									height="99"
								/>
							</div>
						</div>
					</a>
				))}
			</section>

			<div className="text-lg border grid pt-2 pr-[13px] pb-[3px] pl-[13px] place-items-center rounded-md bg-blue-50 border-blue-200">
				<a href="/categories/bangladesh" className="underline text-blue-500">
					{" "}
					আরো দেখুন{" "}
				</a>
			</div>
		</section>
	);
}
