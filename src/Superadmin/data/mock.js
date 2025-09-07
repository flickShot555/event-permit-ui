// centralized mock data used across pages
export const seedUsers = [
    { id: 1, name: 'Ayesha Khan', email: 'ayesha@example.com', role: 'Admin', status: 'Active', createdAt: '2025-06-01' },
    { id: 2, name: 'Bilal Ahmed', email: 'bilal@example.com', role: 'Moderator', status: 'Active', createdAt: '2025-06-10' },
    { id: 3, name: 'Sana Iqbal', email: 'sana@example.com', role: 'User', status: 'Suspended', createdAt: '2025-05-21' },
    { id: 4, name: 'Usman Tariq', email: 'usman@example.com', role: 'User', status: 'Active', createdAt: '2025-07-03' },
    { id: 5, name: 'Zara Ali', email: 'zara@example.com', role: 'Admin', status: 'Active', createdAt: '2025-04-15' },
  ];
  
  export const seedAdmins = [
    { id: 101, name: 'Super Admin', email: 'super@platform.com', role: 'Super Admin', lastLogin: '2025-08-29 11:22' },
    { id: 102, name: 'Ops Admin', email: 'ops@platform.com', role: 'Admin', lastLogin: '2025-08-30 09:10' },
  ];
  
  export const seedEvents = [
    { id: 'E-1001', event: 'City Marathon', status: 'Approved', owner: 'Ayesha', updatedAt: '2025-08-28' },
    { id: 'E-1002', event: 'Food Expo', status: 'In Review', owner: 'Bilal', updatedAt: '2025-08-27' },
    { id: 'E-1003', event: 'Tech Summit', status: 'Rejected', owner: 'Sana', updatedAt: '2025-08-20' },
    { id: 'E-1004', event: 'Film Festival', status: 'Approved', owner: 'Zara', updatedAt: '2025-08-26' },
  ];
  
  export const seedLogs = [
    { id: 'L1', actor: 'Super Admin', action: 'APPROVED', target: 'E-1004 Film Festival', at: '2025-08-26T13:12:00Z' },
    { id: 'L2', actor: 'Ops Admin', action: 'CREATED_USER', target: 'usman@example.com', at: '2025-08-25T10:00:00Z' },
    { id: 'L3', actor: 'Super Admin', action: 'SUSPENDED', target: 'sana@example.com', at: '2025-08-20T09:00:00Z' },
  ];
  