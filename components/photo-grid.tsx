import { ImageCard } from "@/components/card-variants";
import { getPhotos } from "@/lib/photos";

export function PhotoGrid() {
	const photos = getPhotos();

	if (photos.length === 0) return null;

	return (
		<div className="grid grid-cols-4 gap-3 auto-rows-[200px] mt-3">
			{photos.map((photo) => (
				<div
					key={photo.src}
					className={
						photo.orientation === "landscape" ? "col-span-2" : "row-span-2"
					}
				>
					<ImageCard
						label={photo.label}
						title={photo.title}
						description={photo.description}
						imageSrc={photo.src}
						rotation={photo.rotation}
					/>
				</div>
			))}
		</div>
	);
}
