import React, { useContext } from "react";
import FileSaver from "file-saver";

// icons
import { HiOutlineDownload } from "react-icons/hi";
import { LayoutContext } from "./layout/LayoutContext";

const ResultsTable = () => {
  const context = useContext(LayoutContext);
  const data = context.data;

  const dataPointsDiff = () => {
    const total = context.data.row_2.length;
    const simplifiedPoints = context.data.row_2_rdp.filter(
      (item) => item
    ).length;

    const result = 100 - Math.trunc((simplifiedPoints / total) * 100);
    return `${result}% less`;
  };

  // receive the file from the flask server
  const handleDownload = async () => {
    fetch("/download")
      .then((response) => response.blob())
      .then((blob) => {
        // Use the file-saver package to trigger a download
        FileSaver.saveAs(blob, context.data.new_file_name);
      });
  };

  return (
    <div className="rounded-xl border border-slate-600 mt-8 mb-16 md:mb-24 overflow-x-scroll md:overflow-hidden">
      <table className="table-fixed font-oxanium border-collapse border-spacing-0 break-words sm:w-full">
        <thead className="bg-slate-200 text-sm md:text-base xl:text-lg border-b border-slate-600">
          <tr className="text-left">
            <th className="p-4 sm:px-8 xl:px-10"></th>
            <th className="p-4 sm:px-8 xl:px-10 text-center">Original</th>
            <th className="p-4 sm:px-8 xl:px-10 text-center">Simplified</th>
            <th className="p-4 sm:px-8 w-max text-center">Difference</th>
          </tr>
        </thead>
        <tbody className="bg-white text-sm md:text-base xl:text-lg">
          <TableRow
            title="No. of data points"
            original={data.row_2.length}
            simplified={data.row_2_rdp.filter((item) => item).length}
            difference={`${dataPointsDiff()}`}
          />
          <TableRow
            title="Mean value"
            original={`${data.mean_original.toFixed(2)}`}
            simplified={`${data.mean_rdp.toFixed(2)}`}
            difference={`${(data.mean_original - data.mean_rdp).toFixed(2)}`}
          />
          <TableRow
            title="Standard deviation"
            original={`${data.std_original.toFixed(2)}`}
            simplified={`${data.std_rdp.toFixed(2)}`}
            difference={`${(data.std_original - data.std_rdp).toFixed(2)}`}
          />
          <TableRow
            title="File"
            original={`${data.file_size} ${data.file_type}`}
            simplified={`${data.new_file_size} ${data.new_file_type}`}
            difference={`${data.diff_file_size} ${data.diff_file_type} less`}
          />
          <tr className="border-b border-slate-200 ">
            <td className="p-4 sm:px-8 xl:px-10 font-semibold">
              Download File
            </td>

            <td className="p-4 sm:px-8 xl:px-10 text-center break-words">
              {`${data.new_file_name}`}
            </td>
            <td className="p-4 sm:px-8 md:px-0 w-max flex justify-center items-center mx-auto">
              <button
                onClick={handleDownload}
                className="flex mx-auto items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md text-white"
              >
                <HiOutlineDownload />
                <p className="font-medium hidden sm:block ml-2">
                  Download File
                </p>
              </button>
            </td>
            <td className="p-4 sm:px-8 xl:px-10 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;

const TableRow = ({ title, original, simplified, difference }) => {
  return (
    <tr className="border-b border-slate-200 ">
      <td className="p-4 sm:px-8 xl:px-10 font-semibold">{title}</td>
      <td className="p-4 sm:px-8 xl:px-10 text-center">{original}</td>
      <td className="p-4 sm:px-8 xl:px-10 text-center">{simplified}</td>
      <td className="p-4 sm:px-8 xl:px-10 text-center">{difference}</td>
    </tr>
  );
};
