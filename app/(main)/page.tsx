import { ArrowUpRight } from "lucide-react";
import { EmailBadge } from "@/components/email-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { links } from "@/lib/links";
import { projects } from "@/lib/projects";

const socials = [
	{
		label: "X",
		icon: "/social-icons/x.svg",
		href: links.twitter,
		handle: "aleksander_karp",
	},
	{
		label: "LinkedIn",
		icon: "/social-icons/linkedin.svg",
		href: links.linkedin,
		handle: "alek-karp",
	},
	{
		label: "GitHub",
		icon: "/social-icons/github.svg",
		href: links.github,
		handle: "alek-karp",
	},
];

export default function Home() {
	return (
		<div className="h-screen bg-zinc-950 text-zinc-200 flex items-center">
			<div className="max-w-[720px] w-full mx-auto px-6 flex flex-col gap-8">
				<div className="flex items-center gap-6">
					<Avatar>
						<AvatarImage
							src="/photos/new_york.webp"
							alt="Alek Karp"
							className="scale-[2] origin-center"
						/>
						<AvatarFallback>AK</AvatarFallback>
					</Avatar>
					<div>
						<h1 className="text-lg font-semibold text-zinc-100 leading-tight">
							Alek Karp
						</h1>
						<p className="text-base text-zinc-500">Software Engineer</p>
					</div>
				</div>

				<div className="flex items-center gap-2">
					{socials.map((s) => (
						<Badge
							key={s.label}
							asChild
							variant="outline"
							className="py-3 text-base"
						>
							<a href={s.href} target="_blank" rel="noopener noreferrer">
								{s.icon ? (
									<img src={s.icon} alt={s.label} className="h-3 w-auto" />
								) : (
									s.label
								)}
								{s.handle && <span className="text-zinc-400">{s.handle}</span>}
								<ArrowUpRight size={10} className="opacity-50" />
							</a>
						</Badge>
					))}
					<EmailBadge />
				</div>

				<div className="space-y-3">
					<p className="text-zinc-200 leading-relaxed text-base">
						Hey, I&apos;m Alek. I like building things for the web — fast,
						thoughtful software that{" "}
						<span className="text-zinc-200">feels right</span> to use. I care a
						lot about attention to detail and the gap between good and great.
					</p>
					<p className="text-zinc-200 leading-relaxed text-base">
						I&apos;ve been building{" "}
						<Badge
							asChild
							variant="outline"
							className="py-1.5 align-middle text-base"
						>
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
						<Badge
							asChild
							variant="outline"
							className="py-1.5 align-middle text-base"
						>
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
					<p className="text-zinc-200 leading-relaxed text-base">
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
