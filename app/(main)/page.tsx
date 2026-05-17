import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
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
					<div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 shrink-0">
						<Image
							src="/photos/new_york.webp"
							alt="Alek Karp"
							width={48}
							height={48}
							className="w-full h-full object-cover object-center scale-[2] origin-center"
						/>
					</div>
					<div>
						<h1 className="text-lg font-semibold text-zinc-100 leading-tight">
							Alek Karp
						</h1>
						<p className="text-base text-zinc-500">Software Engineer</p>
					</div>
				</div>

				{/* Social links */}
				<div className="flex items-center gap-2">
					{socials.map((s) => (
						<Badge
							key={s.label}
							asChild
							variant="outline"
							className="text-base"
						>
							<a
								href={s.href}
								target={s.href.startsWith("mailto") ? undefined : "_blank"}
								rel="noopener noreferrer"
							>
								{s.label}
								<ArrowUpRight size={10} className="opacity-50" />
							</a>
						</Badge>
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
						<Badge asChild variant="outline" className="align-middle text-base">
							<a
								href={projects[0].href}
								target="_blank"
								rel="noopener noreferrer"
							>
								Decision Timeline
								<ArrowUpRight size={10} className="opacity-50" />
							</a>
						</Badge>{" "}
						a CLI that lets you query git history in natural language — so you
						can always find out <span className="text-zinc-200">why</span> a
						past decision was made. I also built{" "}
						<Badge asChild variant="outline" className="align-middle text-base">
							<a
								href={projects[1].href}
								target="_blank"
								rel="noopener noreferrer"
							>
								Purple Lotus
								<ArrowUpRight size={10} className="opacity-50" />
							</a>
						</Badge>{" "}
						a Canadian directory for finding therapists you actually feel good
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
