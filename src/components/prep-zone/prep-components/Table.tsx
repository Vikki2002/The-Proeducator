import React from "react";
import { motion } from "framer-motion";

interface TableProps<T extends Record<string, unknown>> {
    headers: string[];
    data: T[];
    keyField: string;
}

const ReusableTable = <T extends Record<string, unknown>>({ headers, data, keyField }: TableProps<T>) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full overflow-x-auto bg-base-100 rounded-xl shadow-lg"
        >
            <table className="table table-zebra w-full">
                <thead>
                    <tr className="bg-primary text-primary-content">
                        {headers.map((header, index) => (
                            <th key={index} className="font-bold text-base py-4">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <motion.tr
                            key={String(row[keyField] || rowIndex)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: rowIndex * 0.1 }}
                            className="hover:bg-base-200 transition-colors duration-200"
                        >
                            {Object.values(row).map((value, cellIndex) => (
                                <td 
                                    key={cellIndex}
                                    className="py-3 px-4 text-base-content"
                                >
                                    {String(value)}
                                </td>
                            ))}
                        </motion.tr>
                    ))}
                </tbody>
            </table>

            {data.length === 0 && (
                <div className="text-center py-8 text-base-content/70">
                    No data available
                </div>
            )}
        </motion.div>
    );
};

export default ReusableTable;
