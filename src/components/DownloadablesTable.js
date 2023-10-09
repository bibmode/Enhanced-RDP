import React from "react";
import MonthlySunspots from "../downloadables/monthly-sunspots.csv";
import ElectricProduction from "../downloadables/Electric_Production.csv";
import MLTemperature from "../downloadables/MLTempDataset.csv";
import GoldPriceData from "../downloadables/gold_price_data.csv";
import Train from "../downloadables/train.csv";
import NetworkAnalytics from "../downloadables/Network_Analytics.csv";
import BlackSoilData from "../downloadables/black_soil_data.csv";
import { HiOutlineDownload } from "react-icons/hi";

const DownloadablesTable = () => {
  return (
    <div className="rounded-xl border border-slate-600 mt-8 mb-32 xl:mb-48 overflow-x-scroll sm:overflow-hidden">
      <table className="table-auto font-oxanium border-collapse border-spacing-0 break-words min-w-full sm:w-full">
        <thead className="bg-slate-200 text-sm lg:text-base border-b border-slate-600">
          <tr className="text-left">
            <th className="p-4 sm:px-8 xl:px-10">File Name</th>
            <th className="p-4 sm:px-8 xl:px-10">No. of Points</th>
            <th className="p-4 sm:px-8 xl:px-10">File Size</th>
            <th className="p-4 sm:px-8 w-max text-center">Download</th>
          </tr>
        </thead>
        <tbody className="bg-white text-sm lg:text-base">
          <TableRow
            file={ElectricProduction}
            fileName="Electric Production"
            fileSize="8 KB"
            numberOfPoints="397"
          />
          <TableRow
            file={MonthlySunspots}
            fileName="Monthly Sunspots"
            fileSize="44 KB"
            numberOfPoints="2,820"
          />
          <TableRow
            file={MLTemperature}
            fileName="ML Temperature"
            fileSize="78 KB"
            numberOfPoints="6,676"
          />
          <TableRow
            file={GoldPriceData}
            fileName="Gold Price Data"
            fileSize="186 KB"
            numberOfPoints="10,787"
          />
          <TableRow
            file={Train}
            fileName="Train Count"
            fileSize="374 KB"
            numberOfPoints="18,288"
          />
          <TableRow
            file={NetworkAnalytics}
            fileName="Network Analytics"
            fileSize="629 KB"
            numberOfPoints="25,631"
          />
          <TableRow
            file={BlackSoilData}
            fileName="Black Soil Data"
            fileSize="2.26 MB"
            numberOfPoints="197,161"
          />
        </tbody>
      </table>
    </div>
  );
};

export default DownloadablesTable;

const TableRow = ({ fileName, numberOfPoints, fileSize, file }) => {
  var fileNameDashed = fileName.replace(/\s+/g, "-");

  return (
    <tr className="border-b border-slate-200 ">
      <td className="p-4 sm:px-8 xl:px-10">{fileName}</td>
      <td className="p-4 sm:px-8 xl:px-10">{numberOfPoints}</td>
      <td className="p-4 sm:px-8 xl:px-10">{fileSize}</td>
      <td className="p-4 sm:px-8 md:px-0 w-max flex justify-center mx-auto">
        <a
          href={file}
          download={fileNameDashed}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto"
        >
          <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md text-white">
            <HiOutlineDownload />
            <p className="font-medium hidden sm:block ml-2">Download File</p>
          </button>
        </a>
      </td>
    </tr>
  );
};
