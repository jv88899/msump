export default function AlbumResult({ albumImage, artistName, albumName }) {
  return (
    <>
      <div>
        <span>{albumImage}</span>
        <span>{artistName}</span>
        <span>{albumName}</span>
      </div>
    </>
  );
}
