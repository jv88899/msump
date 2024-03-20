import AddAlbumList from "../../components/add-album-list/AddAlbumList";
import Description from "../../components/description/Description";
import Search from "../../components/search/Search";
import Title from "../../components/title/Title";

export default function AddAlbum() {
  return (
    <>
      <div>
        <Title text="Add Album" />
        <Description text="Type the album name and click search." />
      </div>
      <Search inputText="Album name..." buttonText="Search" />
      <AddAlbumList
        data={[
          { albumName: "Album 1", artistName: "Artist 1", albumImage: "NA" },
        ]}
      />
    </>
  );
}
