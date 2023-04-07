import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <div>
          <dt className="text-lg font-medium leading-6 text-gray-900 truncate">
            {title}
          </dt>
          <dd className="mt-1 flex items-baseline text-2xl font-semibold text-blue-600">
            {value}
          </dd>
        </div>
      </div>
    </div>
  );
};

export default Card;
