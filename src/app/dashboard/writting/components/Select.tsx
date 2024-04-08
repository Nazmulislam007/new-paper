"use client";
import { useId, type Dispatch, type SetStateAction } from "react";
import Select from "react-select";
const options = [
	{ value: "রাজনীতি", label: "রাজনীতি" },
	{ value: "বাংলাদেশ", label: "বাংলাদেশ" },
	{ value: "খেলা", label: "খেলা" },
	{ value: "বিশ্ব", label: "বিশ্ব" },
	{ value: "বাণিজ্য", label: "বাণিজ্য" },
	{ value: "অপরাধ", label: "অপরাধ" },
	{ value: "অন্যান্য", label: "অন্যান্য" },
];

export default function SelectInput({
	isMulti,
	value,
	setValues,
}: {
	isMulti: boolean;
	value: any;
	setValues: Dispatch<SetStateAction<any>>;
}) {
	return (
		<Select
			instanceId={useId()}
			isMulti={isMulti}
			name={isMulti ? "relatedTags" : "tag"}
			options={options}
			className="basic-multi-select"
			classNamePrefix="select"
			onChange={(e) =>
				setValues((prev: any) => ({
					...prev,
					...(isMulti ? { relatedTags: e } : { tag: e }),
				}))
			}
			value={value}
		/>
	);
}
