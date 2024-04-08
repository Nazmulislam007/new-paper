import Banner from "@/app/components/Banner";
import Divider from "@/app/components/Divider";

export default function page() {
	return (
		<main>
			{/* <!-- banner --> */}
			<Banner />

			{/* <!-- post section --> */}
			<section className="mx-4 mb-6">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					বাংলাদেশে
				</div>

				<p className="text-lg text-blue-500 font-medium py-2">
					বুধ ও বৃহস্পতিবার ৪৮ ঘণ্টার অবরোধ ডাকল বিএনপি
				</p>

				<div className="flex items-start justify-between mb-4">
					<div>
						<p className="text-sm">
							প্রতিবেদক :<span className="text-sm"> সুলতান</span>,
							<span className="text-xs text-gray-500">কুড়িগ্রাম</span>
						</p>
						<p className="text-sm pt-1 text-gray-500">
							২৩ ফেব্রুয়ারি ২০২৪, সকাল ১০:৫০
						</p>
					</div>
					<div className="border border-blue-50 rounded bg-blue-100 text-blue-600 grid place-content-center h-fit p-1">
						<span className="material-symbols-outlined"> download </span>
					</div>
				</div>

				<div className="mb-4">
					<img
						src="/assets/image3.jpg"
						alt="image3"
						className="block max-w-full w-full"
					/>
				</div>
				<div className="flex justify-between mb-4 text-gray-500">
					<p className="text-sm">২৩ ফেব্রুয়ারি ২০২৪, ১০:৫০</p>
					<p className="text-sm">ছবি: সুলতান</p>
				</div>

				<div>
					<p>
						রোজা এবং একই সাথে গ্রীষ্মকাল আসার আগেই বিদ্যুতের দাম প্রতি ইউনিটে ৩৪ থেকে
						৭০ পয়সা পর্যন্ত দাম বাড়ানোর সিদ্ধান্ত নিয়েছে সরকার।
						<br />
						<br />
						মঙ্গলবার বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ প্রতিমন্ত্রী নসরুল হামিদ সচিবালয়ে এ
						ঘোষণা দেন।
						<br />
						<br />
						তিনি জানান, মার্চের প্রথম সপ্তাহ থেকেই বিদ্যুতের দামের বিষয়টি কার্যকর করা
						হবে। মূলত, ভর্তুকি থেকে ধীরে ধীরে বের হওয়ার জন্যই বিদ্যুতের ‘দাম সমন্বয়’
						করার সিদ্ধান্ত নেয়া হয়েছে।
						<br />
						<br />
						তবে শুধু বিদ্যুৎ নাম, গ্যাসের দামও সমন্বয় করার কথা জানিয়েছেন প্রতিমন্ত্রী।
						<br />
						<br />
						তবে সেটি আবাসিক বা শিল্প খাতে এখনি বাড়বে না। যে গ্যাস ব্যবহার করে বিদ্যুৎ
						উৎপাদন করা হয়, সেটির দাম কিছুটা বাড়বে।
						<br />
						<br />
						তিনি বলেন, বিশ্ব বাজারে দাম বাড়লে দেশের বাজারেও গ্যাসের দাম বাড়ানো হয়।
						আর, বিশ্ব বাজারে দাম কমলে দেশেও গ্যাসের দাম কমে যাবে। এটিও মার্চের প্রথম
						সপ্তাহ থেকে কার্যকর হবে।
						<br />
						<br />
						এর আগে প্রতিমন্ত্রী জানিয়েছিলেন, জ্বালানি তেলের দামও মার্চের প্রথম সপ্তাহে
						সমন্বয় হবে।
						<br />
						<br />
						এখন থেকে ‘ডায়নামিক প্রাইস' নীতি অনুসরণ করা হবে। যখন বিশ্ববাজারে
						অপরিশোধিত তেলের দাম বাড়লে অথবা কমলে সমন্বয় করা হবে। অর্থাৎ কিছুদিন পরপর
						তেলের দাম সমন্বয় করা হবে।
					</p>
				</div>

				<div className="flex justify-between items-center mt-5 mb-2">
					<div>
						<div className="h-1 w-10 mb-1 bg-blue-500" />
						<p>সম্পর্কিত বিষয়</p>
					</div>
					<div className="-rotate-45 h-10 w-10 grid place-content-center border rounded-full">
						<span className="material-symbols-outlined ml-1"> send </span>
					</div>
				</div>

				<div className="flex gap-1 flex-wrap mb-3">
					<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
						বাংলাদেশে
					</div>
					<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
						বিদ্যুৎ
					</div>
					<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
						দাম বৃদ্ধি
					</div>
					<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
						জ্বালানি
					</div>
					<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
						তেল ও গ্যাস শিল্প
					</div>
				</div>
			</section>

			<Divider />

			{/* <!-- horizontal text+image new section --> */}
			<section className="mx-4 my-4">
				<div className="text-sm pb-[6px] pt-[9px] px-3 border border-blue-50 rounded w-fit bg-blue-100 text-blue-600">
					ভিডিও
				</div>
				<div className="flex items-center gap-[10px] py-[10px] border-b my-2">
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
						<img src="/assets/image1.jpg" alt="ima" width="123" height="99" />
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

				<div>
					<div className="flex items-center gap-3 py-3">
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
				</div>

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
