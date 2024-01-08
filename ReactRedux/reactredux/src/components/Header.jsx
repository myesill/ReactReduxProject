import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="flex items-center justify-between
       bg-indigo-600 text-white px-4 py-4"
      >
        <div className="text-3xl ">REACT UYGULAMA</div>
        <div className="flex items-center gap-5">
          <div className="text-black">
            <select
              onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
              className="h-10 rounded-lg"
              name=""
              id=""
            >
              <option value="asc">ARTAN</option>
              <option value="des">AZALAN </option>
            </select>
          </div>
          <div>
            <input
              onChange={(e) => dispatch(searchDataFunc(e.target.value))}
              className="h-10 rounded-lg px-4 text-black"
              type="text"
              placeholder="Arama Yapınız"
            />
          </div>
          <div
            onClick={() => dispatch(modalFunc())}
            className="bg-indigo-800 rounded-full flex items-center cursor-pointer"
          >
            <MdPostAdd size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
