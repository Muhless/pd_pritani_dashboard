import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  return (
    <div className="bg-white rounded-full w-72 flex items-center px-3">
      <BiSearch size={30}/>
      <input
        type="text"
        placeholder="Cari..."
        className="p-2 text-sm w-72 focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
