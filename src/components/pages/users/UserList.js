import React , {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import './UserList.css';
import { Table, Tag, Radio, Space } from 'antd';



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['Tester', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['Manager'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 34,
    address: 'Sidney No. 1 Lake Park',
    tags: ['Designer', 'Scrum master'],
  },
  {
    key: '4',
    name: 'Anouar Belila',
    age: 24,
    address: 'Palosaarentie 60 B 110, Vaasa, Finland',
    tags: ['Designer', 'Scrum master'],
  },
  {
    key: '5',
    name: 'Anna Becker',
    age: 22,
    address: 'New York No. 1 Lake Park',
    tags: ['Software Engineer'],
  },
];
const UserList = () => {
    const [top, setTop] = useState('topLeft')
    const [bottom, setBottom] = useState('bottomRight')
    return (
      <div className="main--user--container">
          <div className="main--user--container--wrapper"> 
        
        <Table
          columns={columns}
          pagination={{ position: [top,bottom] }}
          dataSource={data}
        />
        </div>
      </div>
    );
  
}

export default UserList;
