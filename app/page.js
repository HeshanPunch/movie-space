import MovieCatalog from "./components/MovieCatalog";
import AddMovie from "./components/AddMovie";

export default function Home() {
  return (
    <main className="flex flex-col space-y-4 mx-auto">
      <MovieCatalog />
    </main>
  );
}
