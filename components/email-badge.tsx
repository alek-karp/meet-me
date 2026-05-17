"use client";

import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const u = "aleksander.karp2000";
const d = "gmail.com";

export function EmailBadge() {
	return (
		<Badge
			variant="outline"
			className="text-base cursor-pointer"
			onClick={() => {
				window.location.href = `mailto:${u}@${d}`;
			}}
		>
			Email
			<ArrowUpRight size={10} className="opacity-50" />
		</Badge>
	);
}
