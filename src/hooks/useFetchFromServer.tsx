import { createClient } from "@/utils/supabase/server";

export default async function useGetLatestNews() {
	const supabase = createClient();

	const { data: latestNews } = await supabase
		.from("news")
		.select("id, title, created_at")
		.order("created_at", { ascending: false })
		.limit(4);

	return { latestNews };
}
