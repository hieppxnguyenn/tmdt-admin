import React, { useEffect, useState } from 'react';
import cars from '../../config/data';
import { Space, Table, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function Product() {
  const [product, setProduct] = useState([]);
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      width: 50,
      render: (items, record, index) => (<>{index + 1}</>)
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Moderm',
      dataIndex: 'moderm',
      key: 'moderm',
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: '',
      key: 'action',
      width: 50,
      render: (record) => {
        return (
          <Space size="middle">

            <button className='wrap-button-info-2'><EditOutlined onClick={() => {
              onEditUser(record)
            }} /></button>

            <button className='wrap-button-delete-2'><DeleteOutlined onClick={() => {
              onDeleted(record)
            }} /></button>
          </Space>
        )
      },
    },
  ];
  //api get 
  // const  getProduct = async (value) => {
  //    const res = await requestGetAPI()
  // if(res) {
  //   setProduct(res)
  // }
  // }
  const onEditUser = (record) => {
    console.log({ ...record });
  }
  // api delete
  // const deletedAPI = async (record) => {
  //   const res = await requestDeleteAPI()
  // }
  //api edit
  // const editProduct = async (record) => {
  //   const res = await requestPutAPI()
  // }
  const onDeleted = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        const newData = [...product];
        const index = newData.findIndex((item) => record.id === item.id);
        newData.splice(index,1);
        setProduct(newData);
        // deletedAPI(record);
        // setLoading(false);
        // setItem((pre) => pre.filter((userAdmin) => userAdmin.id !== record.id));
      },
    });
  }
  useEffect(() => {
    // getProduct
    setProduct(cars)
  }, []);
  return (
    <>
      <Table rowKey="id" dataSource={product} columns={columns} />
    </>
  )
}

export default Product