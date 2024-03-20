import AlbumResult from "../album-result/AlbumResult";
import Title from "../title/Title";

export default function AddAlbumList({ data }) {
  return (
    <>
      <div>
        <Title text="Search Results" />
        {/* A bunch of results */}
        {data?.map(({ artistName, albumName, albumImage }) => (
          <AlbumResult
            albumImage={albumImage}
            albumName={albumName}
            artistName={artistName}
          />
        ))}
      </div>
    </>
  );
}
