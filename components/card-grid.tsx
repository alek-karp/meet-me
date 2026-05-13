import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { links } from "@/lib/links";

type CardItem = {
	id: number;
	category: string;
	title: string;
	href?: string;
	rowSpan?: 2;
	visual: ReactNode;
};

const cards: CardItem[] = [
	{
		id: 1,
		category: "Projects",
		title: "Decision Timeline",
		href: links.github,
		visual: (
			<div className="bg-[#0e0e10] rounded-xl p-6 font-mono text-xs leading-6 overflow-hidden">
				<div className="text-[#666] mb-3">~/projects/decision-timeline</div>
				<div>
					<span className="text-[#7c8a6e]">$</span>
					<span className="text-[#e8e8e8]"> decision-timeline query \</span>
				</div>
				<div className="text-[#e8e8e8] pl-4">
					{"  --query "}
					<span className="text-[#9ecbff]">
						"why did we switch to OpenSearch?"
					</span>
				</div>
				<div className="text-[#e8e8e8] pl-4">
					{"  --repo "}
					<span className="text-[#9ecbff]">alekkarp/landing</span>
				</div>
				<div className="mt-4 text-[#666]">Searching 142 decisions...</div>
				<div className="mt-2 text-[#7c8a6e]">✓ Found 3 relevant decisions</div>
				<div className="mt-3 border-t border-[#222] pt-3">
					<div className="text-[#9ecbff]">
						2024-03-14 · feat(infra): migrate to OpenSearch Serverless
					</div>
					<div className="text-[#888] mt-1 leading-5">
						Switched from self-managed ES to OpenSearch Serverless for reduced
						ops overhead and better scaling characteristics...
					</div>
				</div>
			</div>
		),
	},
	{
		id: 2,
		category: "Writing",
		title: "Notes",
		visual: (
			<div className="bg-stone-50 border border-stone-100 rounded-xl p-6">
				<p className="font-serif text-2xl leading-snug text-stone-800 mb-3">
					What the heck is a digital garden?
				</p>
				<p className="text-sm text-stone-400 mb-3">Coming soon</p>
				<p className="text-sm text-stone-500 leading-relaxed">
					A place to think out loud, work through ideas, and share things that
					don't fit neatly into a blog post format...
				</p>
			</div>
		),
	},
	{
		id: 3,
		category: "Hobbies",
		title: "Coffee",
		visual: (
			<div className="bg-[#f5f0e8] rounded-xl p-6">
				<div className="flex gap-2 mb-4">
					<span className="text-[10px] font-mono font-medium tracking-widest uppercase px-2 py-1 border border-stone-300 rounded text-stone-500">
						Filter
					</span>
					<span className="text-[10px] font-mono font-medium tracking-widest uppercase px-2 py-1 bg-amber-100 border border-amber-200 rounded text-amber-700">
						Now brewing
					</span>
				</div>
				<p className="font-serif text-4xl leading-tight text-stone-900 mb-2">
					Ethiopia
					<br />
					Yirgacheffe
				</p>
				<p className="text-sm text-stone-400 mt-3">
					Blueberry · Jasmine · Dark chocolate
				</p>
			</div>
		),
	},
	{
		id: 4,
		category: "Reading",
		title: "Books",
		visual: (
			<div className="bg-white border border-stone-100 rounded-xl p-5 flex gap-4 items-start">
				<div className="w-14 shrink-0 h-20 bg-stone-800 rounded flex items-center justify-center">
					<span className="text-white text-[9px] font-mono text-center leading-tight px-1">
						PRAGMA&shy;TIC
					</span>
				</div>
				<div>
					<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 mb-1 block">
						Reading
					</span>
					<p className="font-serif text-lg leading-snug text-stone-900">
						The Pragmatic Programmer
					</p>
					<p className="text-sm text-stone-400 mt-1">
						David Thomas & Andrew Hunt
					</p>
				</div>
			</div>
		),
	},
	{
		id: 5,
		category: "Projects",
		title: "This site",
		visual: (
			<div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl p-6 overflow-hidden relative">
				<div className="font-serif text-stone-400 text-sm mb-4">
					Personal space on the internet
				</div>
				<div className="space-y-2">
					<div className="h-3 bg-stone-300/60 rounded-full w-3/4" />
					<div className="h-3 bg-stone-300/60 rounded-full w-1/2" />
					<div className="h-3 bg-stone-300/60 rounded-full w-2/3" />
				</div>
				<div className="mt-4 flex gap-2">
					<div className="h-2 bg-stone-300/60 rounded-full w-12" />
					<div className="h-2 bg-stone-300/60 rounded-full w-16" />
					<div className="h-2 bg-stone-300/60 rounded-full w-10" />
				</div>
				<div className="absolute bottom-0 right-0 font-serif text-[6rem] leading-none text-stone-300/40 select-none">
					AK
				</div>
			</div>
		),
	},
	{
		id: 6,
		category: "Hobbies",
		title: "Running",
		visual: (
			<div className="bg-[#eef2f7] rounded-xl p-6">
				<span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-3 block">
					This week
				</span>
				<p className="font-serif text-5xl text-slate-800 mb-1">32.4</p>
				<p className="text-sm text-slate-400">kilometers</p>
				<div className="mt-4 flex gap-1 items-end h-8">
					{[40, 65, 50, 80, 45, 70, 55].map((h, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: static decorative bars
							key={i}
							className="flex-1 bg-slate-300 rounded-sm"
							style={{ height: `${h}%` }}
						/>
					))}
				</div>
			</div>
		),
	},
	{
		id: 7,
		category: "Listening",
		title: "Music",
		visual: (
			<iframe
				title="Spotify player"
				style={{ borderRadius: 12 }}
				src="https://open.spotify.com/embed/track/5B4bDsnAtPF1gb30IFQhgw?utm_source=generator&theme=0"
				width="100%"
				height="152"
				frameBorder="0"
				allowFullScreen
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			/>
		),
	},
	{
		id: 8,
		category: "Writing",
		title: "Favourite quote",
		visual: (
			<div className="bg-stone-50 border border-stone-100 rounded-xl p-6">
				<p className="font-serif text-xl leading-relaxed text-stone-700 mb-4">
					"Programs must be written for people to read, and only incidentally
					for machines to execute."
				</p>
				<p className="text-xs text-stone-400 font-mono">— Harold Abelson</p>
			</div>
		),
	},
	{
		id: 9,
		category: "Hobbies",
		title: "Plants",
		visual: (
			<div className="bg-[#f0f4ee] rounded-xl p-6">
				<span className="text-[10px] font-mono tracking-widest uppercase text-green-600/60 block mb-3">
					Currently tending to
				</span>
				<div className="space-y-2">
					{[
						{ name: "Monstera Deliciosa", status: "Thriving 🌿" },
						{ name: "Fiddle Leaf Fig", status: "Recovering 🤞" },
						{ name: "Pothos", status: "Unstoppable 💪" },
					].map((p) => (
						<div key={p.name} className="flex justify-between items-center">
							<span className="text-sm text-stone-700">{p.name}</span>
							<span className="text-xs text-stone-400">{p.status}</span>
						</div>
					))}
				</div>
			</div>
		),
	},
	{
		id: 10,
		category: "Reading",
		title: "Next up",
		visual: (
			<div className="bg-white border border-stone-100 rounded-xl p-5 flex gap-4 items-start">
				<div className="w-14 shrink-0 h-20 bg-blue-900 rounded flex items-center justify-center">
					<span className="text-white text-[8px] font-mono text-center leading-tight px-1">
						DUNE
					</span>
				</div>
				<div>
					<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 mb-1 block">
						Up next
					</span>
					<p className="font-serif text-lg leading-snug text-stone-900">Dune</p>
					<p className="text-sm text-stone-400 mt-1">Frank Herbert</p>
				</div>
			</div>
		),
	},
];

const fullWidthCards: CardItem[] = [
	{
		id: 101,
		category: "Hobbies",
		title: "Photography",
		rowSpan: 2,
		visual: (
			<div className="bg-[#1a1a18] rounded-xl p-6 relative overflow-hidden h-full">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block mb-3">
					Film · Kodak Gold 200
				</span>
				<p className="font-serif text-3xl text-stone-200 leading-snug mt-4">
					Shooting film,
					<br />
					slowly.
				</p>
				<p className="text-sm text-stone-500 mt-4 leading-relaxed">
					Shooting 35mm slows me down in the best way — one roll, 36 frames, no
					deleting.
				</p>
				<div className="absolute bottom-6 right-4 flex gap-1">
					{["bg-amber-900/40", "bg-stone-700/40", "bg-amber-700/40"].map(
						(c) => (
							<div
								key={c}
								className={`w-10 h-20 rounded ${c} border border-white/5`}
							/>
						),
					)}
				</div>
			</div>
		),
	},
	{
		id: 102,
		category: "Now",
		title: "Status",
		visual: (
			<div className="bg-stone-50 border border-stone-100 rounded-xl p-6 h-full">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-4">
					What I'm up to
				</span>
				<div className="space-y-3">
					<div className="flex items-start gap-2">
						<span className="text-base mt-0.5">🛠️</span>
						<p className="text-sm text-stone-600 leading-relaxed">
							Building{" "}
							<span className="text-stone-900 font-medium">
								Decision Timeline
							</span>{" "}
							— a CLI for indexing architectural decisions
						</p>
					</div>
					<div className="flex items-start gap-2">
						<span className="text-base mt-0.5">📍</span>
						<p className="text-sm text-stone-600">
							Based in{" "}
							<span className="text-stone-900 font-medium">Warsaw</span>
						</p>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 103,
		category: "Hobbies",
		title: "Climbing",
		visual: (
			<div className="bg-[#eef0eb] rounded-xl p-6 h-full">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-3">
					Bouldering · V5–V6
				</span>
				<p className="font-serif text-4xl leading-tight text-stone-800 mb-3">
					(Plastic)
					<br />
					rocks.
				</p>
				<p className="text-xs text-stone-400">At the gym 3× a week</p>
			</div>
		),
	},
	{
		id: 104,
		category: "Stack",
		title: "Tools",
		visual: (
			<div className="bg-white border border-stone-100 rounded-xl p-6 h-full">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-4">
					Day to day
				</span>
				<div className="flex flex-wrap gap-2">
					{[
						"TypeScript",
						"Next.js",
						"Bun",
						"AWS",
						"React",
						"Tailwind",
						"PostgreSQL",
						"Go",
					].map((t) => (
						<span
							key={t}
							className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-1 rounded"
						>
							{t}
						</span>
					))}
				</div>
			</div>
		),
	},
	{
		id: 105,
		category: "Hobbies",
		title: "Watching",
		visual: (
			<div className="bg-[#111] rounded-xl p-6 h-full relative overflow-hidden">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block mb-3">
					Recently watched
				</span>
				<p className="font-serif text-2xl text-stone-200 leading-snug mb-1">
					Severance
				</p>
				<p className="text-xs text-stone-500">S2 · Apple TV+</p>
				<div className="absolute bottom-0 right-0 left-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
				<div className="absolute bottom-4 left-6 flex gap-1">
					{[1, 2, 3, 4, 5].map((s) => (
						<div key={s} className="w-5 h-1 rounded-full bg-stone-200" />
					))}
					<div className="w-5 h-1 rounded-full bg-stone-600" />
					<div className="w-5 h-1 rounded-full bg-stone-600" />
				</div>
			</div>
		),
	},
	{
		id: 106,
		category: "Setup",
		title: "Desk",
		visual: (
			<div className="bg-stone-50 border border-stone-100 rounded-xl p-6 h-full">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-4">
					Hardware
				</span>
				<div className="space-y-2.5">
					{[
						["MacBook Pro", '14" M3 Pro'],
						["Monitor", 'LG 27" 4K'],
						["Keyboard", "Keychron Q1"],
						["Headphones", "Sony WH-1000XM5"],
					].map(([item, detail]) => (
						<div key={item} className="flex justify-between">
							<span className="text-sm text-stone-500">{item}</span>
							<span className="text-sm text-stone-800 font-medium">
								{detail}
							</span>
						</div>
					))}
				</div>
			</div>
		),
	},
	{
		id: 107,
		category: "Links",
		title: "Internet finds",
		visual: (
			<div className="bg-white border border-stone-100 rounded-xl p-6 h-full">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-4">
					Things worth reading
				</span>
				<div className="space-y-3">
					{[
						"The Grug Brained Developer",
						"Teach Yourself CS",
						"Paul Graham's Essays",
					].map((link) => (
						<div
							key={link}
							className="flex items-center justify-between group cursor-pointer"
						>
							<span className="text-sm text-stone-700 group-hover:text-stone-900 transition-colors">
								{link}
							</span>
							<ArrowUpRight
								size={12}
								className="text-stone-300 group-hover:text-stone-600 transition-colors shrink-0 ml-2"
							/>
						</div>
					))}
				</div>
			</div>
		),
	},
];

export function FullWidthCards() {
	return (
		<div className="grid grid-cols-4 auto-rows-[200px] gap-3">
			{fullWidthCards.map((card) => (
				<div
					key={card.id}
					className={`flex flex-col${card.rowSpan === 2 ? " row-span-2" : ""}`}
				>
					<div className="flex items-center justify-between mb-1.5 px-0.5 shrink-0">
						<span className="text-xs text-muted-foreground">
							{card.category} · {card.title}
						</span>
						{card.href ? (
							<a href={card.href} target="_blank" rel="noopener noreferrer">
								<ArrowUpRight
									size={14}
									className="text-muted-foreground hover:text-foreground transition-colors"
								/>
							</a>
						) : (
							<ArrowUpRight size={14} className="text-muted-foreground/30" />
						)}
					</div>
					<div className="min-h-0 flex-1">{card.visual}</div>
				</div>
			))}
		</div>
	);
}

export function GitHubActivityCard() {
	return (
		<div>
			<div className="flex items-center justify-between mb-1.5 px-0.5">
				<span className="text-xs text-muted-foreground">
					Projects · Open source
				</span>
				<a href={links.github} target="_blank" rel="noopener noreferrer">
					<ArrowUpRight
						size={14}
						className="text-muted-foreground hover:text-foreground transition-colors"
					/>
				</a>
			</div>
			<div className="bg-[#0d1117] rounded-xl p-6">
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block mb-4">
					GitHub activity
				</span>
				<img
					src="http://ghchart.rshah.org/alek-karp"
					alt="alek-karp's GitHub contribution chart"
					className="w-full"
				/>
			</div>
		</div>
	);
}

export function CardGrid() {
	return (
		<div className="columns-2 gap-3">
			{cards.map((card) => (
				<div key={card.id} className="break-inside-avoid mb-3">
					<div className="flex items-center justify-between mb-1.5 px-0.5">
						<span className="text-xs text-muted-foreground">
							{card.category} · {card.title}
						</span>
						{card.href ? (
							<a href={card.href} target="_blank" rel="noopener noreferrer">
								<ArrowUpRight
									size={14}
									className="text-muted-foreground hover:text-foreground transition-colors"
								/>
							</a>
						) : (
							<ArrowUpRight size={14} className="text-muted-foreground/30" />
						)}
					</div>
					{card.visual}
				</div>
			))}
		</div>
	);
}
