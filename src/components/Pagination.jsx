import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } =
    useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center py-2 border-t-2 fixed bottom-0 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="w-11/12 max-w-[670px] flex justify-between items-center">
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600">
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600">
              Next
            </button>
          )}
        </div>

        <p className="font-semibold text-gray-600 text-sm dark:text-gray-400">
          Page <span className="font-bold">{page}</span> of{" "}
          <span className="font-bold">{totalPages}</span>
        </p>
      </div>
    </div>
  );
};

export default Pagination;
