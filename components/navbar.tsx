import Link from "next/link";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-background">
			<nav className="flex items-center gap-0.5 border border-border rounded-lg px-1 py-1 bg-background">
				<Link
					href="/"
					className="px-3 py-1 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
				>
					Alek
				</Link>
				<Link
					href="/projects"
					className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
				>
					Projects
				</Link>
				<Link
					href="/writing"
					className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
				>
					Writing
				</Link>
				<Link
					href="/hobbies"
					className="px-3 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
				>
					Hobbies
				</Link>
			</nav>
			<nav className="flex items-center gap-5">
				<a
					href="https://github.com/alekkarp"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					GitHub
				</a>
				<a
					href="https://twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					Twitter
				</a>
				<a
					href="mailto:aleksander.karp2000@gmail.com"
					className="text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					Email
				</a>
			</nav>
		</header>
	);
}
