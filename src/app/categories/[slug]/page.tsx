import Banner from "@/app/components/Banner";
import Divider from "@/app/components/Divider";

export default function page() {
	return (
		<main>
			{/* <!-- banner --> */}
			<Banner />

			<section className="mx-4 my-7">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					বাংলাদেশে
				</div>

				<section className="mt-2">
					<div className="flex items-center gap-[10px] py-[10px] border-b">
						<div className="text-gray-500">
							<p className="text-sm leading-tight">5 মিনিট পড়া</p>
							<p className="my-[6px] text-gray-800 font-medium">
								নির্বাচনে ভোটার উপস্থিতি নিয়ে আওয়ামী লীগ উদ্বিগ্ন নয়
							</p>
							<p className="text-xs flex items-center gap-[5px]">
								50 মিনিট আগে
								<span className="h-[13px] w-[1px] block bg-gray-600" />
								সুলতান
							</p>
						</div>
						<div className="rounded">
							<img src="/assets/image1.jpg" alt="im" width="123" height="99" />
						</div>
					</div>
				</section>

				<div className="text-lg border grid pt-2 pr-[13px] pb-[3px] pl-[13px] place-items-center rounded-md bg-blue-50 border-blue-200 mt-4">
					<a href="/" className="underline text-blue-500">
						{" "}
						আরো দেখুন{" "}
					</a>
				</div>
			</section>

			{/* <!-- video section --> */}
			<section className="mx-4 mb-2">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					ভিডিও
				</div>

				<div className="flex gap-4 flex-col mt-2">
					{/* <!-- Video cart --> */}
					<div className="shadow-[0px_3px_12px_rgba(0,0,0,0.09)] rounded overflow-hidden">
						<div className="relative">
							<img
								src="/assets/image5.jpg"
								alt="image3"
								className="block w-full max-w-full"
							/>
							<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[38px] w-[38px] grid place-items-center shadow-[0_0_6px_6px_#e2545485] rounded-full bg-[#DD3333]">
								<span className="material-symbols-outlined text-white">
									play_arrow
								</span>
							</div>
						</div>
						<div className="px-3 pt-2 pb-3">
							<p className="text-lg font-medium pt-1">
								বুধ ও বৃহস্পতিবার ৪৮ ঘণ্টার অবরোধ ডাকল বিএনপি
							</p>
							<div className="flex justify-between text-gray-500 mt-2">
								<p className="text-sm">২৩ ফেব্রুয়ারি ২০২৪, ১০:৫০</p>
								<p className="text-sm">ছবি: সুলতান</p>
							</div>
						</div>
					</div>
				</div>

				<div className="text-lg border grid pt-2 pr-[13px] pb-[3px] pl-[13px] place-items-center rounded-md bg-blue-50 border-blue-200 mt-4">
					<a href="/" className="underline text-blue-500">
						{" "}
						আরো দেখুন{" "}
					</a>
				</div>
			</section>

			<Divider />

			{/* <!-- most readed section --> */}
			<section className="mx-4 mt-4">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					সর্বাধিক পঠিত
				</div>

				<section>
					<div className="flex items-center gap-3 pt-3">
						<div className="p-3 shadow-[0px_3px_12px_rgba(0,0,0,0.09)]">
							<p className="text-sm text-blue-500">বাংলাদেশে</p>
							<p className="my-2 text-lg font-medium">
								নির্বাচনে ভোটার উপস্থিতি নিয়ে আওয়ামী লীগ উদ্বিগ্ন নয়
							</p>
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
				</section>
				<div className="text-lg border grid pt-2 pr-[13px] pb-[3px] pl-[13px] place-items-center rounded-md bg-blue-50 border-blue-200 mt-4">
					<a href="/" className="underline text-blue-500">
						{" "}
						আরো দেখুন{" "}
					</a>
				</div>
			</section>
		</main>
	);
}
