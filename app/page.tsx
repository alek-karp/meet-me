import { Hero } from "@/components/hero";

export default function Home() {
	return (
		<div className="flex h-[calc(100vh-3.5rem)] items-center justify-center font-sans">
			<main className="flex h-full w-full items-center">
				<Hero />
			</main>
		</div>
	);
}
