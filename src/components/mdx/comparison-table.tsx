interface ComparisonTableProps {
  headers: string[]
  rows: string[][]
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-8 overflow-x-auto -mx-5 px-5">
      <table className="w-full text-body-sm border-collapse">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left font-body-medium text-copy py-3 px-4 border-b border-border bg-surface-alt first:rounded-tl-brand-sm last:rounded-tr-brand-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="py-3 px-4 text-copy-mid leading-[1.6] first:text-copy first:font-body-medium"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
