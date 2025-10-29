import "../styles/styles.css"
import Filter from "../components/Filter"
import Categories from "../components/Categories";

export default function Index() {
  return (
    <div className="px-[24px] py-[24px]">
      <Filter />
      <Categories />
    </div>
  );
}
