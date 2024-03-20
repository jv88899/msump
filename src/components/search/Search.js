export default function Search({ inputText, buttonText }) {
  return (
    <form>
      <input type="text" placeholder={inputText} />
      <button type="submit">{buttonText}</button>
    </form>
  );
}
