// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  return (
    <div style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <div>İlk todo</div>
      <div>
        <IoIosRemoveCircle />
        <FaEdit />
      </div>
    </div>
  );
};

export default Todo;
