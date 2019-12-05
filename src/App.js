import React from 'react';
import moment from 'moment';
import { Table } from 'antd';
import 'antd/dist/antd.css'

import './App.css';

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
    render: (a,b) => { console.log(a,b); },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

console.log(moment('2019-08-15T15:51:21.582+08:00').format('YYYY-MM-DD hh:mm:ss'));

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
    age: 52,
    address: 'Sidney No. 1 Lake Park',
  },
];

function App() {
  return (
    <div className="App">
      <Table
          columns={columns}
          dataSource={data}
        />
    </div>
  );
}

export default App;
