import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full">
			<div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-16">
				<Link href="/" className="font-semibold text-sm">
					Alek Karp
				</Link>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-base`}
							>
								<Link href="/projects">Projects</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={`${navigationMenuTriggerStyle()} h-10 px-4 py-2 text-base`}
							>
								<Link href="/reach-me">Reach me</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
