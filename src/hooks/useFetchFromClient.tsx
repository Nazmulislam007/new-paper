import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type NewsByTagsType =
	| {
			id: any;
			title: any;
			img: any;
			created_at: any;
			reading_time: any;
			author: any;
	  }[]
	| null;

type SelectedNewsType =
	| {
			id: any;
			title: any;
			description: any;
			media: any;
			created_at: any;
			reading_time: any;
			img: any;
	  }[]
	| null;

type BDNewsType =
	| {
			id: any;
			title: any;
			author: any;
			created_at: any;
			reading_time: any;
	  }[]
	| null;

type VideosType =
	| {
			id: any;
			title: any;
			media: any;
			created_at: any;
	  }[]
	| null;

type MostReadedNewsType =
	| {
			id: any;
			title: any;
			tag: any;
			created_at: any;
			reading_time: any;
			author: any;
	  }[]
	| null;

type SearchedNewsType = null;

type AllNewsType =
	| {
			id: any;
			title: any;
			tag: any;
			created_at: any;
			reading_time: any;
			author: any;
	  }[]
	| null;

type SingleNewsType = null;

export function useGetNewsByTags(tag: string) {
	const supabase = createClient();
	const [newsByTags, setNewsByTags] = useState<NewsByTagsType>();

	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase
				.from("news")
				.select("id, title, img, created_at, reading_time, author")
				.order("created_at", { ascending: true })
				.contains("relatedTags", [tag])
				.limit(3);

			setNewsByTags(data);
			if (error) console.log(error);
		}
		fetchData();
	}, [tag]);

	return { newsByTags };
}

export function useGetSelectedNews() {
	const supabase = createClient();
	const [selectedNews, setSelectedNews] = useState<SelectedNewsType>();

	useEffect(() => {
		async function fetchData() {
			const { data, error } = await supabase
				.from("news")
				.select("id, title, description, media, created_at, reading_time, img")
				.contains("relatedTags", ["রাজনীতি"])
				.limit(2);

			setSelectedNews(data);
			if (error) console.log(error);
		}
		fetchData();
	}, []);

	return { selectedNews };
}

export function useGetBDNews() {
	const supabase = createClient();
	const [BDNews, setBDNews] = useState<BDNewsType>();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await supabase
					.from("news")
					.select("id, title, author, created_at, reading_time")
					.contains("relatedTags", ["বাংলাদেশ"])
					.limit(3);

				setBDNews(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return { BDNews };
}

export function getVideos() {
	const supabase = createClient();
	const [videos, setVideos] = useState<VideosType>();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await supabase
					.from("news")
					.select("id, title, media, created_at")
					.order("created_at", { ascending: true })
					.limit(2);

				setVideos(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return { videos };
}

export function getMostReadedNews() {
	const supabase = createClient();
	const [mostReadedNews, setMostReadedNews] = useState<MostReadedNewsType>();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await supabase
					.from("news")
					.select("id, title, tag, created_at, reading_time, author")
					.limit(3);

				setMostReadedNews(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return { mostReadedNews };
}

export function getSearchedNews() {
	const supabase = createClient();
	const [searchedNews, setSearchedNews] = useState<SearchedNewsType>();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await supabase
					.from("news")
					.select("id, title, tag, created_at, reading_time, author")
					.limit(3);

				setSearchedNews(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return { searchedNews };
}

export function useGetAllNews(start: number, end: number) {
	const supabase = createClient();
	const [allNews, setAllNews] = useState<AllNewsType>();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await supabase
					.from("news")
					.select("id, title, tag, created_at, reading_time, author")
					.range(start, end);
				console.log(data);
				setAllNews(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [start, end]);

	return { allNews };
}

export function getSingleNew() {
	const supabase = createClient();
	const [singleNews, setSingleNews] = useState<SingleNewsType>();

	useEffect(() => {
		async function fetchData() {
			try {
				const { data } = await supabase
					.from("news")
					.select("id, title, tag, created_at, reading_time, author")
					.limit(3);

				setSingleNews(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return { singleNews };
}
