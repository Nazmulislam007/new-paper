import Banner from "./components/Banner";
import ButtonSlider from "./components/ButtonSlider";
import Divider from "./components/Divider";
import HorizontalImageText from "./components/HorizontalImageText";
import LatestNews from "./components/LatestNews";
import OverLappingImg from "./components/OverLappingImg";
import SelectedNews from "./components/SelectedNews";

export default function Home() {
	return (
		<main>
			{/* banner */}
			<Banner />

			{/* <!-- latest new section  --> */}
			<LatestNews />

			{/* <!-- button slider --> */}
			<ButtonSlider />

			<Divider />

			{/* <!-- horizontal text+image new section --> */}
			<HorizontalImageText />

			{/* <!-- banner section --> */}
			<Banner />

			{/* <!-- cart new section --> */}
			<SelectedNews />

			{/* <!-- overlapping image section--> */}
			<OverLappingImg />

			{/* <!-- video section --> */}
			<section className="mx-4 mb-2">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					ভিডিও
				</div>

				<div className="flex gap-4 flex-col mt-2 mb-4 video-section">
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

				<div className="text-lg border grid pt-2 pr-[13px] pb-[3px] pl-[13px] place-items-center rounded-md bg-blue-50 border-blue-200">
					<a href="/" className="underline text-blue-500">
						{" "}
						আরো দেখুন{" "}
					</a>
				</div>
			</section>

			<Divider />

			{/* <!-- most readed section --> */}
			<div className="mx-4 mt-4">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					সর্বাধিক পঠিত
				</div>

				<section>
					<div className="flex flex-col most-readed-news">
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
				</section>
			</div>
		</main>
	);
}
