import Album from "../../components/album/Album";
import Description from "../../components/description/Description";
import Title from "../../components/title/Title";

export default function ViewAlbum() {
  return (
    <div>
      <Title text="View Album" />
      <Description text="This is the page where a user can view an album" />
      <Album
        albumTitle="Album Name"
        albumArtist="Arist Name"
        albumImage="https://placehold.it/100"
      />
    </div>
  );
}
