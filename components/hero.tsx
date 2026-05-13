export function Hero() {
	return (
		<div className="flex flex-col gap-8">
			<p className="font-serif text-[2.15rem] leading-[1.35] text-muted-foreground">
				{"Hey there, I'm "}
				<span className="text-foreground">Alek</span>
				{" 👋 I like building "}
				<span className="text-foreground">things</span>
				{", and I'm a "}
				<span className="text-foreground">software engineer</span>
				{" focused on the web."}
			</p>

			<p className="font-serif text-[2.15rem] leading-[1.35] text-muted-foreground">
				{"I care about making products that "}
				<span className="text-foreground">feel right</span>
				{" — fast, thoughtful, and built with "}
				<span className="text-foreground">attention to detail</span>
				{"."}
			</p>

			<p className="font-serif text-[2.15rem] leading-[1.35] text-muted-foreground">
				{"I do some "}
				<span className="text-foreground">reading</span>
				{" and "}
				<span className="text-foreground">writing</span>
				{" as well, and I'm always looking for interesting "}
				<span className="text-foreground">problems</span>
				{" to solve."}
			</p>
		</div>
	);
}
