import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddBlog = () => {
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
    console.log(e);
  };
  return (
    <div>
      <h3 className="mb-4">Add Blog</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter blog title" />
          <select name="" id="" className="form-control py-3 mb-3">
            <option value="">Select Blog Category</option>
          </select>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
