"use client";
import { createClient } from "@/utils/supabase/client";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Editor from "./components/Editor";
import SelectInput from "./components/Select";

export default function page() {
	// Create Supabase client
	const supabase = createClient();
	const [img, setImg] = useState<HTMLInputElement>();
	const [overallError, setError] = useState("");
	const [success, setSucess] = useState(false);

	async function insertData(data: any) {
		const { error } = await supabase.from("news").insert({ ...data });

		if (error) {
			setError("Something went wrong!");
		} else {
			setError("");
			setSucess(true);
		}
	}

	return (
		<section className="mx-4 mt-8">
			<h1 className="mb-5 text-xl font-semibold">খবর সাবমিট করুন</h1>
			<Formik
				initialValues={{
					title: "",
					author: "",
					location: "",
					videoLink: "",
					description: "",
					relatedTags: "" || [],
					tag: "",
					reading_time: 0,
					imageTaker: "",
				}}
				validationSchema={Yup.object({
					title: Yup.string()
						.max(30, "Must be 30 characters or less")
						.required("Required"),
					author: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required("Required"),
					location: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required("Required"),
					description: Yup.string()
						.max(2000, "Must be 2000 characters or less")
						.required("Required"),
					videoLink: Yup.string(),
					tag: Yup.object().required("Required"),
					relatedTags: Yup.array()
						.min(1, "Must be 1 item or more")
						.max(4, "Must be 4 items or less"),
					reading_time: Yup.number().required("Required"),
					imageTaker: Yup.string().required("Requried"),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					const data = {
						title: values.title,
						author: values.author,
						location: values.location,
						description: values.description,
						relatedTags: values.relatedTags.map((tag) => (tag as any).value),
						tag: (values.tag as any).value,
						reading_time: values.reading_time,
						media: {
							videoLink: values.videoLink,
							author: values.imageTaker,
						},
					};

					if (img?.name) {
						const image: any = img;
						const { data, error } = await supabase.storage
							.from("news-images")
							.upload(`${img?.name}-${Date.now()}`, image);

						if (error) {
							setError(error.message);
							return;
						}

						if (data?.path) {
							insertData({
								...data,
								img: data.path,
							});
						}
					} else {
						insertData({
							...data,
							img: "",
						});
					}

					setSubmitting(false);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					setValues,
					/* and other goodies */
				}) => (
					<form onSubmit={handleSubmit}>
						<div className="mb-5">
							<label htmlFor="large-input" className="block mb-1 font-medium">
								শিরোনাম
							</label>
							<input
								type="text"
								id="title"
								name="title"
								className="block w-full p-4 text-gray-900 border border-gray-300 text-base focus:outline-none"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.title}
							/>
							{touched.title && errors.title ? (
								<div className="text-sm text-red-500 mt-2">{errors.title}</div>
							) : null}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								প্রতিবেদক
							</label>
							<input
								type="text"
								id="author"
								name="author"
								className="block w-full p-2 text-gray-900 border border-gray-300 text-base focus:outline-none"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.author}
							/>
							{touched.author && errors.author ? (
								<div className="text-sm text-red-500 mt-2">{errors.author}</div>
							) : null}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								স্থান
							</label>
							<input
								type="text"
								id="location"
								name="location"
								className="block w-full p-2 text-gray-900 border border-gray-300 text-base focus:outline-none"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.location}
							/>
							{touched.location && errors.location ? (
								<div className="text-sm text-red-500 mt-2">
									{errors.location}
								</div>
							) : null}
						</div>
						<div className="mb-5">
							<div className="block mb-1 font-medium">খবরের বর্ণনা</div>
							<Editor setValues={setValues} />
							{touched.description && errors.description ? (
								<div className="text-sm text-red-500 mt-2">
									{errors.description}
								</div>
							) : null}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								পড়ার সময় (মিনিট)
							</label>
							<input
								type="number"
								id="reading_time"
								name="reading_time"
								className="block w-full p-2 text-gray-900 border border-gray-300 text-base focus:outline-none"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.reading_time}
							/>
							{touched.reading_time && errors.reading_time ? (
								<div className="text-sm text-red-500 mt-2">
									{errors.reading_time}
								</div>
							) : null}
						</div>
						<div className="mb-5">
							<div className="block mb-1 font-medium">ছবি</div>
							<input
								className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50"
								aria-describedby="new picture"
								id="img"
								name="img"
								type="file"
								accept="image/*"
								onChange={(e) => {
									setImg(e.target.files && (e.target.files[0] as any));
								}}
							/>
							{/* {touched.img && errors.img ? (
								<div className="text-sm text-red-500 mt-2">
									{(errors as any).img}
								</div>
							) : null} */}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								ছবি যিনি নিয়েছেন
							</label>
							<input
								type="text"
								id="imageTaker"
								name="imageTaker"
								className="block w-full p-2 text-gray-900 border border-gray-300 text-base focus:outline-none"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.imageTaker}
							/>
							{touched.imageTaker && errors.imageTaker ? (
								<div className="text-sm text-red-500 mt-2">
									{errors.imageTaker}
								</div>
							) : null}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								ভিডিও লিংক
							</label>
							<input
								type="text"
								id="videoLink"
								name="videoLink"
								className="block w-full p-2 text-gray-900 border border-gray-300 text-base focus:outline-none"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.videoLink}
							/>
							{touched.videoLink && errors.videoLink ? (
								<div className="text-sm text-red-500 mt-2">
									{errors.videoLink}
								</div>
							) : null}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								বিষয়
							</label>
							<SelectInput
								isMulti={false}
								setValues={setValues}
								value={values.tag}
							/>
							{touched.tag && errors.tag ? (
								<div className="text-sm text-red-500 mt-2">{errors.tag}</div>
							) : null}
						</div>
						<div className="mb-5">
							<label htmlFor="base-input" className="block mb-1 font-medium">
								সর্ম্পকিত বিষয়
							</label>
							<SelectInput
								isMulti
								setValues={setValues}
								value={values.relatedTags}
							/>
							{touched.relatedTags && errors.relatedTags ? (
								<div className="text-sm text-red-500 mt-2">
									{errors.relatedTags}
								</div>
							) : null}
						</div>
						{overallError && (
							<div className="text-sm text-red-500 my-2">{overallError}</div>
						)}
						{success && !overallError && (
							<div className="text-sm text-green-500 my-2">
								News posted successfully
							</div>
						)}
						<button
							type="submit"
							className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
						>
							পাঠান
						</button>
					</form>
				)}
			</Formik>
		</section>
	);
}
