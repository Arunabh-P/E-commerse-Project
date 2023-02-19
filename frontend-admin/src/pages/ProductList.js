import React from 'react';
import { Table } from 'antd';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'staus',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Arunabh ${i}`,
    product: 32,
    staus: `Dispatched ${i}`,
    action: (
      <>
        <Link to="/" className=" fs-3 text-danger">
          <BiEdit />
        </Link>
        <Link className="ms-3 fs-3 text-danger" to="/">
          <AiFillDelete />
        </Link>
      </>
    ),
  });
}
const ProductList = () => {
  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ProductList;
