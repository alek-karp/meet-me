import {
	CardGrid,
	FullWidthCards,
	GitHubActivityCard,
} from "@/components/card-grid";
import { Hero } from "@/components/hero";

export default function Home() {
	return (
		<div>
			<div className="flex items-start">
				<aside className="w-5/12 sticky top-14 self-start px-8 pt-10 pb-24">
					<Hero />
				</aside>
				<main className="w-7/12 px-4 pt-6 pb-6">
					<CardGrid />
				</main>
			</div>
			<div className="px-4 pb-16">
				<FullWidthCards />
				<div className="mt-3">
					<GitHubActivityCard />
				</div>
			</div>
		</div>
	);
}
