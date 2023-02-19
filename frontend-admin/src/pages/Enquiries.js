import React from 'react';
import { Table } from 'antd';
const Enquiries = () => {
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
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
    },
    {
      title: 'Staus',
      dataIndex: 'status',
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
      email: `arunabh@gmail.com${i}`,
      mobile: `8714368699${i}`,
      status: `recived ${i}`,
      action: `processing ${i}`,
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Enquiries;
