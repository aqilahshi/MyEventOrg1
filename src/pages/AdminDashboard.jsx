import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Total Participants",
    dataIndex: "totalparticipants",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];
const data1 = [];
for (let i = 1; i <= 30; i++) {
  data1.push({
    key: i,
    name: `CS BersamaMu ${i}`,
    totalparticipants: 32,
    staus: `Upcoming Event`,
  });
}
const AdminDashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 1,
    },
    {
      type: "Feb",
      sales: 2,
    },
    {
      type: "Mar",
      sales: 3,
    },
    {
      type: "Apr",
      sales: 5,
    },
    {
      type: "May",
      sales: 7,
    },
    {
      type: "Jun",
      sales: 2,
    },
    {
      type: "July",
      sales: 3,
    },
    {
      type: "Aug",
      sales: 9,
    },
    {
      type: "Sept",
      sales: 1,
    },
    {
      type: "Oct",
      sales: 0,
    },
    {
      type: "Nov",
      sales: 3,
    },
    {
      type: "Dec",
      sales: 2,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h1 className="mb-4 title">Admin Dashboard</h1>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="dashboardbox">
          <div>
            <p className="desc">Total Event Registered</p>
            <h4 className="mb-0 sub-title">38</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6>
              <BsArrowDownRight /> 32%
            </h6> */}
            {/* <p className="mb-0  desc">In las</p> */}
          </div>
        </div>
        <div className="dashboardbox">
          <div>
            <p className="desc">Upcoming Event</p>
            <h4 className="mb-0 sub-title">16</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6> */}
            {/* <p className="mb-0  desc">Compared To April 2022</p> */}
          </div>
        </div>
        <div className="dashboardbox">
          <div>
            <p className="desc">Past Events</p>
            <h4 className="mb-0 sub-title">20</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p> */}
          </div>
        </div>

        <div className="dashboardbox">
          <div>
            <p className="desc">Ongoing Events</p>
            <h4 className="mb-0 sub-title">2</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p> */}
          </div>
        </div>
      </div>

<br/>


      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="dashboardbox">
          <div>
            <p className="desc">Total Users</p>
            <h4 className="mb-0 sub-title">306</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6>
              <BsArrowDownRight /> 32%
            </h6> */}
            {/* <p className="mb-0  desc">In las</p> */}
          </div>
        </div>
        <div className="dashboardbox">
          <div>
            <p className="desc">Most Participant in antd Event</p>
            <h4 className="mb-0 sub-title">240</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6 className="red">
              <BsArrowDownRight /> 32%
            </h6> */}
            {/* <p className="mb-0  desc">Compared To April 2022</p> */}
          </div>
        </div>
        <div className="dashboardbox">
          <div>
            <p className="desc">Past Events</p>
            <h4 className="mb-0 sub-title">20</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p> */}
          </div>
        </div>

        <div className="dashboardbox">
          <div>
            <p className="desc">Ongoing Events</p>
            <h4 className="mb-0 sub-title">2</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            {/* <h6 className="green">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p> */}
          </div>
        </div>
      </div>

<br/>
            <p><Link to="addadmin"><Button>Add New Admin</Button></Link></p>
            <p><Link to="validatevendor"><Button>Verify New Vendor</Button></Link></p>
            <p><Link to="removevendor"><Button>Manage Vendor</Button></Link></p>

      <div className="mt-4">
        <h3 className="mb-5 title">Event Statistics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Event Handled</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;