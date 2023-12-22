import React, { useState } from "react";
import { Button, Descriptions, Modal } from "antd";

export default function MoreInfo({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        onClick={showModal}
        className="ml-4 transition duration-300 ease-in-out border-2 border-white hover:bg-black hover:text-black"
        style={{ borderColor: 'white', borderWidth: '2px' }}
      >
        <p className="text-white font-Montserrat  ">
          <b>More</b>
        </p>
      </Button>
      <Modal
        title={data.capsule_serial}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okType={"default"}
        width={1000}
      >
        <Descriptions layout="vertical" bordered className="bg-gray-200 rounded-lg shadow-md">
          <Descriptions.Item label="Capsule Id" className="border-b py-2 border-gray-500">
            <span className="font-semibold">{data.capsule_id}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Status" className="border-b py-2 border-gray-500">
            <span className="font-semibold">{data.status}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Original Launch" span={3} className="border-b py-2 border-gray-500">
            <span className="font-semibold">{Date(data.original_launch)}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Missions" className="border-b py-2 border-gray-500">
            <ul className="list-disc pl-4">
              {data.missions.map((item, key) => (
                <li key={key} className="mb-2">
                  <div className="font-semibold">Name: {item.name}</div>
                  <div className="font-semibold">Flight: {item.flight}</div>
                </li>
              ))}
            </ul>
          </Descriptions.Item>
          <Descriptions.Item label="Landings" className="border-b py-2 border-gray-500">
            <span className="font-semibold">{data.landings}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Type" className="border-b py-2 border-gray-500">
            <span className="font-semibold">{data.type}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Details" className="border-b py-2 border-gray-500">
            <span className="font-semibold">{data.details}</span>
          </Descriptions.Item>
          <Descriptions.Item label="Reuse Count" className="border-b py-2 border-gray-500">
            <span className="font-semibold">{data.reuse_count}</span>
          </Descriptions.Item>
        </Descriptions>




      </Modal>
    </div>
  );
}
