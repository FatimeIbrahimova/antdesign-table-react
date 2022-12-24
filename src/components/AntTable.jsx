import React, { useEffect, useState } from 'react'

import { Table } from 'antd';
const AntTable = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [setUser]);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id,
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Age',
            dataIndex: 'age',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username'
            ,
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'street',
            dataIndex: ["address", "street"],
            key: 'street'
        }
    ];
    return (
        <div>
            <Table columns={columns} dataSource={user} />;
        </div>
    )
}

export default AntTable