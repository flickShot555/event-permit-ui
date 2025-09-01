export default function Table({ columns, data, onEdit, onDelete }) {
    return (
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>{columns.map((c) => <th key={c.accessor}>{c.Header}</th>)}</tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((c) => (
                  <td key={c.accessor}>
                    {c.Cell ? c.Cell({ value: row[c.accessor], row }) : row[c.accessor]}
                  </td>
                ))}
                {(onEdit || onDelete) && (
                  <td className="table-actions">
                    {onEdit && <button className="btn btn-small" onClick={() => onEdit(row)}>Edit</button>}
                    {onDelete && <button className="btn btn-small btn-danger" onClick={() => onDelete(row)}>Delete</button>}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  