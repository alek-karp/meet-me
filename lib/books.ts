export type Book = {
	title: string;
	author: string;
	status: "reading" | "up next" | "read";
	spineColor: string;
	spineLabel: string;
};

export const books: Book[] = [
	{
		title: "Principles",
		author: "Ray Dalio",
		status: "reading",
		spineColor: "bg-stone-800",
		spineLabel: "PRINCIPLES",
	},
	{
		title: "A Feast for Crows",
		author: "George R. R. Martin",
		status: "up next",
		spineColor: "bg-red-900",
		spineLabel: "ASOIAF",
	},
	{
		title: "The Coming Wave",
		author: "Mustafa Suleyman with Michael Bhaskar",
		status: "read",
		spineColor: "bg-blue-900",
		spineLabel: "THE COMING WAVE",
	},
];

export const currentBook =
	books.find((b) => b.status === "reading") ?? books[0];
export const nextBook = books.find((b) => b.status === "up next") ?? books[1];
export const recentBook = books.find((b) => b.status === "read") ?? books[2];
