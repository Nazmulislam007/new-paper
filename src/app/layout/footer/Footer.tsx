"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mx=16px mt-6">
			<div className="border-b border-t py-5">
				<p className="text-center mb-2 font-medium">অনুসরন করুন</p>
				<div className="flex items-center justify-center gap-3">
					<a href="/" className="w-[31px] h-[31px] relative">
						<Image
							fill
							priority
							src="/assets/facebook-icon.svg"
							alt="facebook"
						/>
					</a>
					<a href="/" className="w-[24px] h-[24px] relative">
						<Image fill priority src="/assets/twitter-icon.svg" alt="twitter" />
					</a>
					<a href="/" className="w-[30px] h-[30px] relative">
						<Image
							fill
							priority
							src="/assets/instagram-icon.svg"
							alt="instagram"
						/>
					</a>
					<a href="/" className="w-[30px] h-[30px] relative">
						<Image fill priority src="/assets/youtube-icon.svg" alt="youtube" />
					</a>
					<a href="/" className="w-[30px] h-[30px] relative">
						<Image
							fill
							priority
							src="/assets/whatsapp-icon.svg"
							alt="whatsapp"
						/>
					</a>
					<a href="/" className="w-[30px] h-[30px] relative">
						<Image
							fill
							priority
							src="/assets/telegram-icon.svg"
							alt="telegram"
						/>
					</a>
				</div>
			</div>
			<div className="flex gap-3 items-center justify-center py-8 border-b">
				<button
					type="button"
					className="bg-transparent text-lg pt-2 pb-1 w-[154px] border border-blue-500 text-blue-500 font-medium grid place-items-center rounded-md"
				>
					বিজ্ঞাপন দিন
				</button>
				<Link href="/dashboard/writting">
					<button
						type="button"
						className="bg-blue-500 text-white text-lg pt-2 pb-1 w-[154px] border border-blue-500 font-medium grid place-items-center rounded-md"
					>
						লেখা জমা দিন
					</button>
				</Link>
			</div>
			<div>
				<p className="border pt-4 pb-3 text-center">
					<a href="/" className="w-[24px] h-[24px] relative">
						টি.এন.আই নিউজ মিডিয়া
					</a>
				</p>
				<p className="border pt-4 pb-3 text-center">
					<a href="/">যোগাযোগ করুন</a>
				</p>
				<p className="border pt-4 pb-3 text-center">
					<a href="/">শর্তাবলি ও নীতিমালা</a>
				</p>
				<p className="border pt-4 pb-3 text-center">
					<a href="/">গোপনীয়তা নীতি</a>
				</p>
			</div>
			<div className="py-5 px-4 text-center font-medium">
				স্বত্ব © ১৯৯৮-২০২৪ টি.এন.আই নিউজ মিডিয়া সম্পাদক ও প্রকাশক: সুলতান ও রফিক
			</div>
		</footer>
	);
}
