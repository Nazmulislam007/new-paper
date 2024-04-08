import useGetLatestNews from "@/hooks/useFetchFromServer";
import Link from "next/link";

export default async function LatestNews() {
	const { latestNews } = await useGetLatestNews();

	return (
		<section className="mx-4">
			<div className="text-sm pt-2 pr-3 pb-1 pl-3 border border-transparent rounded w-fit bg-red-100 text-red-600">
				সর্বশেষ খবর
			</div>
			<Link href={`/articles/${latestNews?.[0].id}`}>
				<h2 className="text-blue-500 text-lg font-medium mt-4 mb-2 main-latest-heading">
					{latestNews?.[0].title}
				</h2>
			</Link>

			{/* <!-- VerticalLinearStepper  --> */}

			<ol
				className="relative text-gray-500 border-s border-red-500 border-dashed ml-2 mt-4"
				id="latest-news"
			>
				{latestNews?.slice(1)?.map(({ id, title, created_at }) => (
					<li className="mb-6 ms-5" key={id}>
						<span className="absolute w-3 h-3 bg-red-500 rounded-full -start-[6.5px] ring-4 ring-white" />
						<p className="text-sm leading-tight">2 মিনিট আগে</p>
						<p className="text-gray-800 font-medium">{title}</p>
					</li>
				))}
			</ol>
		</section>
	);
}
