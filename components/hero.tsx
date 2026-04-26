import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<div className="flex h-full w-full items-center gap-16 px-16 py-10">
			{/* Left: gradient card */}
			<div className="relative h-full w-1/2 shrink-0 overflow-hidden rounded-3xl bg-[#0e0e10]">
				<div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-600 opacity-40 blur-3xl" />
				<div className="absolute -bottom-24 -right-12 h-80 w-80 rounded-full bg-teal-400 opacity-30 blur-3xl" />
				<div className="absolute bottom-24 left-12 h-64 w-64 rounded-full bg-indigo-500 opacity-20 blur-2xl" />
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-4xl font-semibold tracking-tight text-white">
						Alek Karp
					</span>
				</div>
			</div>

			{/* Right: text content */}
			<div className="flex w-1/2 flex-col gap-8">
				<h1 className="text-5xl font-semibold leading-tight tracking-tight">
					Building things,
					<br />
					for the web.
				</h1>
				<p className="max-w-sm text-lg leading-8 text-muted-foreground">
					Software engineer focused on crafting fast, thoughtful products.
					Always looking for interesting problems to solve.
				</p>
				<div>
					<Button
						variant="outline"
						className="rounded-full px-8 py-5 text-base"
					>
						Get in touch
					</Button>
				</div>
			</div>
		</div>
	);
}
