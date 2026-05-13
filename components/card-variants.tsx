import type { ReactNode } from "react";

// ─── Hobby Card ──────────────────────────────────────────────────────────────
// Coloured-background card with a mono label, big serif title, and optional detail line.

type HobbyCardProps = {
	bg: string;
	label: string;
	labelColor?: string;
	title: ReactNode;
	detail?: string;
	children?: ReactNode;
};

export function HobbyCard({
	bg,
	label,
	labelColor = "text-stone-400",
	title,
	detail,
	children,
}: HobbyCardProps) {
	return (
		<div className="rounded-xl p-6" style={{ backgroundColor: bg }}>
			<span
				className={`text-[10px] font-mono tracking-widest uppercase block mb-3 ${labelColor}`}
			>
				{label}
			</span>
			<p className="font-serif text-4xl leading-tight text-stone-900 mb-2">
				{title}
			</p>
			{detail && <p className="text-sm text-stone-400 mt-3">{detail}</p>}
			{children}
		</div>
	);
}

// ─── Project Card ─────────────────────────────────────────────────────────────
// Light gradient card with a serif tagline, skeleton content lines, and an optional initials watermark.

type ProjectCardProps = {
	tagline: string;
	initials?: string;
	children?: ReactNode;
};

export function ProjectCard({ tagline, initials, children }: ProjectCardProps) {
	return (
		<div className="bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl p-6 overflow-hidden relative">
			<div className="font-serif text-stone-400 text-sm mb-4">{tagline}</div>
			{children ?? (
				<>
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
				</>
			)}
			{initials && (
				<div className="absolute bottom-0 right-0 font-serif text-[6rem] leading-none text-stone-300/40 select-none">
					{initials}
				</div>
			)}
		</div>
	);
}

// ─── Image Card ───────────────────────────────────────────────────────────────
// Dark card for photography / film content with a mono label, large serif title, body text, and decorative film strips.

type ImageCardProps = {
	bg?: string;
	label: string;
	title: ReactNode;
	description: string;
	strips?: string[];
};

export function ImageCard({
	bg = "#1a1a18",
	label,
	title,
	description,
	strips = ["bg-amber-900/40", "bg-stone-700/40", "bg-amber-700/40"],
}: ImageCardProps) {
	return (
		<div
			className="rounded-xl p-6 relative overflow-hidden h-full"
			style={{ backgroundColor: bg }}
		>
			<span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block mb-3">
				{label}
			</span>
			<p className="font-serif text-3xl text-stone-200 leading-snug mt-4">
				{title}
			</p>
			<p className="text-sm text-stone-500 mt-4 leading-relaxed">
				{description}
			</p>
			{strips.length > 0 && (
				<div className="absolute bottom-6 right-4 flex gap-1">
					{strips.map((c) => (
						<div
							key={c}
							className={`w-10 h-20 rounded ${c} border border-white/5`}
						/>
					))}
				</div>
			)}
		</div>
	);
}

// ─── Book Card ────────────────────────────────────────────────────────────────
// White card with a coloured spine on the left and title / author on the right.

type BookCardProps = {
	spineColor: string;
	spineLabel: string;
	status: string;
	title: string;
	author: string;
};

export function BookCard({
	spineColor,
	spineLabel,
	status,
	title,
	author,
}: BookCardProps) {
	return (
		<div className="bg-white border border-stone-100 rounded-xl p-5 flex gap-4 items-start">
			<div
				className={`w-14 shrink-0 h-20 ${spineColor} rounded flex items-center justify-center`}
			>
				<span className="text-white text-[8px] font-mono text-center leading-tight px-1">
					{spineLabel}
				</span>
			</div>
			<div>
				<span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 mb-1 block">
					{status}
				</span>
				<p className="font-serif text-lg leading-snug text-stone-900">
					{title}
				</p>
				<p className="text-sm text-stone-400 mt-1">{author}</p>
			</div>
		</div>
	);
}
