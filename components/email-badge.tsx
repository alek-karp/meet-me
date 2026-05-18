"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const u = "aleksander.karp2000";
const d = "gmail.com";

export function EmailBadge() {
	return (
		<Badge
			variant="outline"
			className="py-3 text-base cursor-pointer"
			onClick={() => {
				window.location.href = `mailto:${u}@${d}`;
			}}
		>
			<Mail size={12} />
			<span className="text-zinc-400">email</span>
			<ArrowUpRight size={10} className="opacity-50" />
		</Badge>
	);
}
