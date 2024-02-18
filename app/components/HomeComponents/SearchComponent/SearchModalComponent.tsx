import SearchForm from "./SearchFormComponent";

const SearchModal = ({ click }: { click: () => void }) => {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-primary/30 flex justify-center items-center">
      <SearchForm onClick={click} />
    </div>
  );
};

export default SearchModal;
