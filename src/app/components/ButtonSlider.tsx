"use client";
import { useNews } from "@/context/NewsContext";

const tags = [
	"রাজনীতি",
	"বাংলাদেশ",
	"খেলা",
	"বিশ্ব",
	"বাণিজ্য",
	"অপরাধ",
	"অন্যান্য",
];

function ButtonSlider() {
	const { currentBtn, setCurrentBtn } = useNews();

	return (
		<section className="flex gap-[10px] mt-[25px] overflow-auto mx-4">
			{tags.map((tag) => (
				<button
					key={tag}
					type="button"
					id="tag-btn"
					className={`text-sm py-2 px-3.5 border rounded w-fit ${
						tag === currentBtn
							? "border-blue-50 bg-blue-100 text-blue-600"
							: "border-gray-300 bg-transparent text-gray-800"
					}`}
					onClick={() => setCurrentBtn(tag)}
				>
					{tag}
				</button>
			))}
		</section>
	);
}

export default ButtonSlider;
