import fs from "node:fs";
import path from "node:path";

const PHOTOS_DIR = path.join(process.cwd(), "public/photos");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

type PhotoMeta = {
	filename: string;
	label?: string;
	title?: string;
	description?: string;
	orientation?: "portrait" | "landscape";
	rotation?: 0 | 90 | 180 | 270;
};

type Photo = {
	src: string;
	label: string;
	title: string;
	description: string;
	orientation: "portrait" | "landscape";
	rotation: 0 | 90 | 180 | 270;
};

function loadMetadata(): PhotoMeta[] {
	const metaPath = path.join(PHOTOS_DIR, "metadata.json");
	try {
		const raw = fs.readFileSync(metaPath, "utf-8");
		const json = JSON.parse(raw) as { photos?: PhotoMeta[] };
		return json.photos ?? [];
	} catch {
		return [];
	}
}

export function getPhotos(): Photo[] {
	let filenames: string[];
	try {
		filenames = fs
			.readdirSync(PHOTOS_DIR)
			.filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));
	} catch {
		return [];
	}

	const metadata = loadMetadata();
	const metaMap = new Map(metadata.map((m) => [m.filename, m]));

	return filenames.map((filename) => {
		const meta = metaMap.get(filename);
		return {
			src: `/photos/${filename}`,
			label: meta?.label ?? "Photography",
			title:
				meta?.title ?? filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
			description: meta?.description ?? "",
			orientation: meta?.orientation ?? "portrait",
			rotation: meta?.rotation ?? 0,
		};
	});
}
