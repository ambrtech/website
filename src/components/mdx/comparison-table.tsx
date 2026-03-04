interface ComparisonTableProps {
  headers: string[]
  rows: string[][]
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-10 overflow-x-auto -mx-1">
      <table className="w-full text-body-sm border-collapse rounded-brand overflow-hidden border border-border">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="text-left font-body-medium text-copy py-3.5 px-5 bg-surface-alt border-b border-border"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border last:border-0 transition-colors hover:bg-surface"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="py-3.5 px-5 text-copy-mid leading-[1.65] first:text-copy first:font-body-medium"
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
