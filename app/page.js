import { Alert } from "flowbite-react";
import Header from "./components/header";
import SubNav from "./components/subNav";
import SearchBar from "./components/searchBar";
import Stories from "./components/stories";

export default function Home() {
  return (
    <main>
      <Header />
      <SubNav />
      <SearchBar />
      <Stories />
    </main>
  );
}
