interface Column<T> {
    header: string;
    accessorKey: keyof T;
    cell?: (item: T) => React.ReactNode;
}

interface DataGridProps<T> {
    data: T[];
    columns: Column<T>[];
    title?: string;
}

export function DataGrid<T extends { id: string | number }>({ data, columns, title }: DataGridProps<T>) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {title && (
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">{title}</h3>
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                            {columns.map((col, idx) => (
                                <th key={idx} className="px-6 py-3 font-medium">
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="bg-white border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                {columns.map((col, idx) => (
                                    <td key={idx} className="px-6 py-4 text-gray-700">
                                        {col.cell ? col.cell(item) : (item[col.accessorKey] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
