"use client";

import {
	createContext,
	useContext,
	useMemo,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

type NewsProviderType = {
	children: ReactNode;
};

type ContextType = {
	currentBtn: string;
	setCurrentBtn: Dispatch<SetStateAction<string>>;
};

const NewsContext = createContext<ContextType>({
	currentBtn: "",
	setCurrentBtn: () => void {},
});

const useNews = () => {
	return useContext(NewsContext);
};

export default function NewsProvider({ children }: NewsProviderType) {
	const [currentBtn, setCurrentBtn] = useState("রাজনীতি");

	const value = useMemo(
		() => ({
			currentBtn,
			setCurrentBtn,
		}),
		[currentBtn],
	);

	return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export { useNews };
