"use client";
import katex from "katex";
import "katex/dist/katex.min.css";
import dynamic from "next/dynamic";
import {
	useEffect,
	useMemo,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";
import "react-quill/dist/quill.snow.css";
import Toolbar from "./ToolBar";

const Editor = ({
	setValues,
}: { setValues: Dispatch<SetStateAction<any>> }) => {
	const ReactQuill = useMemo(
		() => dynamic(() => import("react-quill"), { ssr: false }),
		[],
	);
	const [text, setText] = useState("");

	useEffect(() => {
		window.katex = katex;
	}, []);

	const handleChange = (html: any) => {
		setText(html);
		setValues((prev: any) => ({ ...prev, description: html }));
	};
	const modules = {
		toolbar: {
			container: "#toolbar",
		},
	};
	const formats = ["bold", "underline", "header", "blockquote", "list", "link"];

	return (
		<>
			<Toolbar />
			<ReactQuill
				onChange={handleChange}
				value={text}
				modules={modules}
				formats={formats}
			/>
		</>
	);
};

export default Editor;
