import React, { useContext, useState } from "react";
import DataCard from "./DataCard";
import { CapsuleContext } from "../App";

export default function DataLayout() {
  const { capsuleData } = useContext(CapsuleContext);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const totalPages = Math.ceil(capsuleData.length / cardsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayData = capsuleData.slice(startIndex, endIndex);

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedData = chunkArray(displayData, 2); // Change '2' to the number of columns you desire

  return (
    <div className="m-6 p-6 bg-transparent">
      <div className="flex flex-wrap justify-center">
        {chunkedData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col items-center space-y-4">
            {row.map((data, index) => (
              <DataCard key={index} data={data} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="pagination">
          <div className="flex space-x-2">
            {Array.from(Array(totalPages), (_, i) => (
              <button
                key={i + 1}
                onClick={() => handleClick(i + 1)}
                className={`px-3 py-1 border border-gray-300 rounded transition duration-300 ${currentPage === i + 1
                  ? "bg-gray-800 text-white hover:bg-gray-700"
                  : "bg-white text-gray-800 hover:bg-gray-200 hover:text-gray-700"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
