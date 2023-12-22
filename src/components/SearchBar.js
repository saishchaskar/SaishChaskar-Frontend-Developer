import { Button, Space } from "antd";
import Search from "antd/es/input/Search";
import React, { useContext, useEffect, useState } from "react";
import { CapsuleContext } from "../App";

export default function SearchBar() {
  const { capsuleData, setCapsuleData } = useContext(CapsuleContext);
  const [ogCapsuleData, setogCapsuleData] = useState(capsuleData);

  const onSearch = (value, query) => {
    if (query === "capsule_serial") {
      const data = capsuleData.filter((item) => item.capsule_serial.includes(value));
      setCapsuleData(data);
    }
    if (query === "type") {
      const data = capsuleData.filter((item) => item.type.includes(value));
      setCapsuleData(data);
    }
    if (query === "landings") {
      // eslint-disable-next-line
      const data = capsuleData.filter((item) => item.landings == value);
      setCapsuleData(data);
    }
  };

  const handleClear = () => {
    setCapsuleData(ogCapsuleData);
  };

  useEffect(() => {
    if (ogCapsuleData.length === 0 && capsuleData.length > 0) {
      setogCapsuleData(capsuleData);
      console.log("done");
    }
    // eslint-disable-next-line
  }, [capsuleData]);
  return (
    <div className="container-fluid" style={{ backgroundColor: 'transparent' }}>
      <div className="m-4 p-2 rounded-lg flex justify-center" style={{ backgroundColor: "transparent" }}>
        <Space className="flex md:flex-row flex-col">
          <Search
            className="w-64 rounded-lg border-2 border-blue-300 px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search by Serial"
            allowClear
            onSearch={(value) => {
              onSearch(value, 'capsule_serial');
            }}
          />

          <Search
            className="w-64 rounded-lg border-2 border-blue-300 px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search by Type"
            allowClear
            onSearch={(value) => {
              onSearch(value, 'type');
            }}
          />

          <Search
            className="w-64 rounded-lg border-2 border-blue-300 px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Search by Landings"
            allowClear
            onSearch={(value) => {
              onSearch(value, 'landings');
            }}
          />

          <Button onClick={handleClear} style={{ backgroundColor: "skyblue" }}>Reset</Button>
        </Space>
      </div>
    </div>

  );
}
