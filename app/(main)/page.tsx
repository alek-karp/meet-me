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
					<Avatar className="after:border-0">
						<AvatarImage
							src="/photos/profile-photo.webp"
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
						I&apos;m Aleksander Karp, a founder and software engineer with 5+
						years of experience building high-scale systems at Amazon and
						Google.
					</p>
					<p className="text-zinc-200 leading-relaxed text-base">
						Previously, I worked on Amazon&apos;s tier-1 payment execution
						platform, supporting global commerce traffic with peaks of 100K+
						items purchased per minute. I also worked on Google event-management
						products supporting 3M+ guests and contributed to Google I/O for
						215K+ registrants.
					</p>
					<p className="text-zinc-200 leading-relaxed text-base">
						I like building fast, thoughtful software with strong product detail
						and taste.
					</p>
					<p className="text-zinc-200 leading-relaxed text-base">
						I&apos;m currently building{" "}
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
						</Badge>
						, an agentic growth platform for therapists and clinics.
					</p>
					<p className="text-zinc-200 leading-relaxed text-base">
						Outside of code, I go to the gym, drink too much coffee, and read
						and write about interesting problems.
					</p>
				</div>

				<p className="text-zinc-500 text-sm text-center">
					Right now in Vancouver.{" "}
					<a
						href="https://calendar.notion.so/meet/alekkarp/chat"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2 hover:text-zinc-300 transition-colors"
					>
						Let&apos;s grab a coffee
					</a>
				</p>
			</div>
		</div>
	);
}
