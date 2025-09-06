export function downloadCSV(rows, filename = 'export.csv') {
    if (!rows || rows.length === 0) {
      alert('No rows to export');
      return;
    }
    const keys = Object.keys(rows[0]);
    const escape = s => `"${String(s ?? '').replace(/"/g, '""')}"`;
    const csv = [keys.join(','), ...rows.map(r => keys.map(k => escape(r[k])).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
  