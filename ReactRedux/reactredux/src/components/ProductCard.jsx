import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    // dispatch(updateDataFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-md">
      <img className="w-full h-full  rounded-md my-5" src={dt?.url} alt="" />
      <div className=" left-0 bottom-0 bg-indigo-600 text-white w-full px-2 ">
        <div className=" text-lg font-semibold">{dt?.name}</div>
        <div>{dt?.price} TL</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-0"
      >
        <BsThreeDots className="text-black" size={24} />
      </div>
      {openEdit && (
        <div
          className=" cursor-pointer bg-black border-white text-white
         absolute top-5 right-2 p-2 text-sm rounded-md "
        >
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div onClick={updateFunc} className="cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
