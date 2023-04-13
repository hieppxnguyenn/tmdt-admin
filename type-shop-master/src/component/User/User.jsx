import React, { useEffect, useState } from 'react';
import { Table, Space, Modal } from 'antd';
import {  DeleteOutlined } from '@ant-design/icons';


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

function User() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '',
      key: 'action',
      width: 50,
      render: (record) => {
        return (
          <Space size="middle">
            <button className='wrap-button-delete-2'>
              <DeleteOutlined onClick={() => {
                onDeleted(record)
                }} />
            </button>
          </Space>
        )
      },
    },
  ];
  const [dataUser, setDataUser] = useState([]);

  const handleDelete = (record) => {
    const newData = [...dataUser];
    const index = newData.findIndex((item) => record.key === item.key);
    newData.splice(index, 1);
    setDataUser(newData);
  };
  const onDeleted = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        const newData = [...dataUser];
        const index = newData.findIndex((item) => record.id === item.id);
        newData.splice(index,1);
        setDataUser(newData);
        // deletedAPI(record);
        // setLoading(false);
        // setItem((pre) => pre.filter((userAdmin) => userAdmin.id !== record.id));
      },
    });
  }
  useEffect(() => {
    setDataUser(data)
  }, []);
  return (
    <Table dataSource={dataUser} columns={columns} />
  );
};

export default User