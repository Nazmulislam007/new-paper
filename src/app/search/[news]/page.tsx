import Banner from "@/app/components/Banner";
import Divider from "@/app/components/Divider";

export default function page() {
	return (
		<main>
			{/* banner */}
			<Banner />

			<Divider />

			<div className="mx-4 mt-4">
				<section>
					<div className="flex flex-col">
						<div className="flex items-center gap-3 py-3">
							<div className="p-3 shadow-[0px_3px_12px_rgba(0,0,0,0.09)]">
								<p className="text-sm text-blue-500">বাংলাদেশে</p>
								<a href="/">
									<p className="my-2 text-lg font-medium">
										নির্বাচনে ভোটার উপস্থিতি নিয়ে আওয়ামী লীগ উদ্বিগ্ন নয়
									</p>
								</a>
								<div className="flex mt-1 justify-between text-sm text-gray-500">
									<p className="flex items-center gap-1">
										50 মিনিট আগে
										<span className="h-3 w-[1px] block bg-gray-500" />
										সুলতান
									</p>
									<p>5 মিনিট পড়া</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex items-center gap-3 py-3">
							<div className="p-3 shadow-[0px_3px_12px_rgba(0,0,0,0.09)]">
								<p className="text-sm text-blue-500">বাংলাদেশে</p>
								<a href="/">
									<p className="my-2 text-lg font-medium">
										নির্বাচনে ভোটার উপস্থিতি নিয়ে আওয়ামী লীগ উদ্বিগ্ন নয়
									</p>
								</a>
								<div className="flex mt-1 justify-between text-sm text-gray-500">
									<p className="flex items-center gap-1">
										50 মিনিট আগে
										<span className="h-3 w-[1px] block bg-gray-500" />
										সুলতান
									</p>
									<p>5 মিনিট পড়া</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center mt-7">
						<button
							type="button"
							className="bg-blue-500 text-white px-3 pt-3 pb-2 rounded hover:bg-blue-600 mx-auto"
						>
							আরো দেখুন
						</button>
					</div>
				</section>
			</div>
		</main>
	);
}
