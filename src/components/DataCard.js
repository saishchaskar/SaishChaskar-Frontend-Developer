import { Card, Space } from "antd";
import React from "react";
import MoreInfo from "./MoreInfo";

export default function DataCard({ data }) {
  return (
    <Card
      className="w-fit m-3 transition duration-300 transform-gpu hover:scale-105"
      style={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}
      // #9DE0E6

      title={
        <Space>
          <p className="text-white font-Montserrat"><b>Serial :</b></p>
          <p className="text-white font-Montserrat">{data.capsule_serial}</p>
        </Space>}
      extra={<MoreInfo data={data} />}
    >
      <div className="pr-10">
        <Space>
          <p className="text-white font-Montserrat"><b>Status :</b></p>
          <p className="text-white font-Montserrat">{data.status}</p>
        </Space>
        <br />
        <Space>
          <p className="text-white font-Montserrat"><b>Type :</b></p>
          <p className="text-white font-Montserrat">{data.type}</p>
        </Space>
        <br />
        <Space>
          <p className="text-white font-Montserrat"><b>Landings :</b></p>
          <p className="text-white font-Montserrat">{data.landings}</p>
        </Space>
      </div>
    </Card>
  );
}
