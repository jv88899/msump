import AlbumArtist from "../album-artist/AlbumArtist";
import AlbumImage from "../album-image/AlbumImage";
import AlbumTitle from "../album-title/AlbumTitle";

export default function Album({ albumTitle, albumArtist, albumImage }) {
  return (
    <>
      <div>
        <AlbumTitle text={albumTitle} />
        <AlbumArtist text={albumArtist} />
        <AlbumImage imageSource="https://placehold.it/100x100" />
      </div>
    </>
  );
}
