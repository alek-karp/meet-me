import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/links";
import { projects } from "@/lib/projects";

const socials = [
	{ label: "X", href: links.twitter },
	{ label: "GitHub", href: links.github },
	{ label: "Email", href: "mailto:aleksander.karp2000@gmail.com" },
];

export default function Home() {
	return (
		<div className="h-screen bg-zinc-950 text-zinc-200 flex items-center">
			<div className="max-w-[580px] w-full mx-auto px-6 flex flex-col gap-8">
				{/* Avatar + Name + Role */}
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
						<span className="text-xs font-medium text-zinc-500 tracking-tight">
							AK
						</span>
					</div>
					<div>
						<h1 className="text-lg font-semibold text-zinc-100 leading-tight">
							Alek Karp
						</h1>
						<p className="text-base text-zinc-500">Software Engineer</p>
					</div>
				</div>

				{/* Social links */}
				<div className="flex items-center gap-5">
					{socials.map((s) => (
						<a
							key={s.label}
							href={s.href}
							target={s.href.startsWith("mailto") ? undefined : "_blank"}
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-base text-zinc-600 hover:text-zinc-200 transition-colors"
						>
							{s.label}
							<ArrowUpRight size={11} className="opacity-40" />
						</a>
					))}
				</div>

				{/* About */}
				<div className="space-y-3">
					<p className="text-zinc-400 leading-relaxed text-base">
						Hey, I&apos;m Alek. I like building things for the web — fast,
						thoughtful software that{" "}
						<span className="text-zinc-200">feels right</span> to use. I care a
						lot about attention to detail and the gap between good and great.
					</p>
					<p className="text-zinc-400 leading-relaxed text-base">
						I&apos;ve been building{" "}
						<a
							href={projects[0].href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-200 underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-500 transition-colors text-base"
						>
							Decision Timeline
						</a>
						, a CLI that lets you query git history in natural language — so you
						can always find out <span className="text-zinc-200">why</span> a
						past decision was made. I also built{" "}
						<a
							href={projects[1].href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-200 underline underline-offset-2 decoration-zinc-700 hover:decoration-zinc-500 transition-colors text-base"
						>
							Purple Lotus
						</a>
						, a Canadian directory for finding therapists you actually feel good
						about.
					</p>
					<p className="text-zinc-400 leading-relaxed text-base">
						Outside of code I run long distances, shoot film, and drink too much
						coffee. I do some <span className="text-zinc-200">reading</span> and{" "}
						<span className="text-zinc-200">writing</span> as well — always
						looking for interesting problems to think through.
					</p>
				</div>
			</div>
		</div>
	);
}
