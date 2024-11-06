"use client";

import { convert, getConversionUnits } from "@/app/lib/utils";
import { useState, useEffect } from "react";

interface ConverterCardProps {
  title: string;
  type: "length" | "weight" | "temperature" | "volume";
  description: string;
}

export default function ConverterCard({
  title,
  type,
  description,
}: ConverterCardProps) {
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [result, setResult] = useState("");
  const units = getConversionUnits(type);

  useEffect(() => {
    if (units.length > 0) {
      setFromUnit(units[0]);
      setToUnit(units[1]);
    }
  }, [units]);

  const handleConvert = () => {
    if (!fromValue || !fromUnit || !toUnit) return;
    const convertedValue = convert(
      type,
      parseFloat(fromValue),
      fromUnit,
      toUnit
    );
    setResult(convertedValue.toFixed(4));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            From:
          </label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter value"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">To:</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <input
              type="text"
              value={result}
              readOnly
              className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
              placeholder="Result"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>
    </div>
  );
}
