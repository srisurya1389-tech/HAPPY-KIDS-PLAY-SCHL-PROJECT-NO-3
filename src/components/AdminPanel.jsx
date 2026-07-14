import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { openExternal } from '../utils/openExternal';
import './AdminPanel.css';

// ponytail: client-side PIN only — anyone can read it in the bundle. Fine as a casual
// gate for now; swap for real auth + a backend once this holds real payment data.
const ADMIN_PIN = '2026';
const REG_KEY = 'happyKidsRegistrations';
const ENQ_KEY = 'happyKidsEnquiries';

const CLASS_NAMES = ['Tiny Tots', 'Explorers', 'Kindergarten Prep'];
const CLASS_CAPACITY = { 'Tiny Tots': 15, 'Explorers': 18, 'Kindergarten Prep': 16 };
const emptyForm = { name: '', className: 'Tiny Tots', contact: '', fee: '', status: 'Unpaid' };

const parseFee = (fee) => parseInt(String(fee).replace(/[^0-9]/g, ''), 10) || 0;
const formatCurrency = (n) => '₹' + n.toLocaleString('en-IN');

const feeReminderMessage = (student) =>
  `Hi! This is a friendly reminder from Happy Kids Playschool that the fee for ` +
  `${student.name} (${student.className}) is currently pending. Kindly clear it at your ` +
  `earliest convenience. Thank you! 🙏`;

const AdminPanel = () => {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('adminUnlocked') === 'true');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const [view, setView] = useState('records');
  const [students, setStudents] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [classFilter, setClassFilter] = useState('all');
  const [sortBy, setSortBy] = useState(null);
  const [sortDir, setSortDir] = useState('asc');
  const [selectedIds, setSelectedIds] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [remindedIds, setRemindedIds] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!unlocked) return;
    try {
      setStudents(JSON.parse(localStorage.getItem(REG_KEY) || '[]'));
    } catch (e) {
      console.error("Failed to parse students from localStorage:", e);
      setStudents([]);
    }
    try {
      setEnquiries(JSON.parse(localStorage.getItem(ENQ_KEY) || '[]').reverse());
    } catch (e) {
      console.error("Failed to parse enquiries from localStorage:", e);
      setEnquiries([]);
    }
  }, [unlocked]);

  const saveStudents = (list) => {
    setStudents(list);
    localStorage.setItem(REG_KEY, JSON.stringify(list));
  };

  const logActivity = (text) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setActivityLog((prev) => [{ text, time }, ...prev].slice(0, 8));
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem('adminUnlocked', 'true');
      setUnlocked(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const openAddForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (student) => {
    setForm(student);
    setEditingId(student.id);
    setShowForm(true);
  };

  const closeForm = () => setShowForm(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveForm = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (editingId) {
      saveStudents(students.map((s) => (s.id === editingId ? { ...form, id: editingId } : s)));
      logActivity(`Updated details for ${form.name}`);
    } else {
      saveStudents([...students, { ...form, id: Date.now().toString() }]);
      logActivity(`Added new student ${form.name}`);
    }
    setShowForm(false);
  };

  const deleteStudent = (id) => {
    const student = students.find((s) => s.id === id);
    if (!window.confirm(`Remove ${student?.name || 'this student'} from records?`)) return;
    saveStudents(students.filter((s) => s.id !== id));
    setSelectedIds((prev) => prev.filter((i) => i !== id));
    if (student) logActivity(`Removed ${student.name} from records`);
  };

  const toggleStatus = (id) => {
    const student = students.find((s) => s.id === id);
    const newStatus = student.status === 'Paid' ? 'Unpaid' : 'Paid';
    saveStudents(students.map((s) => (s.id === id ? { ...s, status: newStatus } : s)));
    logActivity(`Marked ${student.name} as ${newStatus}`);
  };

  const sendReminder = (student) => {
    const digits = student.contact.replace(/\D/g, '');
    if (digits) openExternal(`https://wa.me/${digits}?text=${encodeURIComponent(feeReminderMessage(student))}`);
    setRemindedIds((prev) => [...prev, student.id]);
    logActivity(`Reminder sent to ${student.name}'s parent`);
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const bulkMarkPaid = () => {
    saveStudents(students.map((s) => (selectedIds.includes(s.id) ? { ...s, status: 'Paid' } : s)));
    logActivity(`Marked ${selectedIds.length} student(s) as Paid`);
  };

  const bulkMarkUnpaid = () => {
    saveStudents(students.map((s) => (selectedIds.includes(s.id) ? { ...s, status: 'Unpaid' } : s)));
    logActivity(`Marked ${selectedIds.length} student(s) as Unpaid`);
  };

  const bulkDelete = () => {
    if (!window.confirm(`Delete ${selectedIds.length} student record(s)?`)) return;
    saveStudents(students.filter((s) => !selectedIds.includes(s.id)));
    logActivity(`Deleted ${selectedIds.length} student record(s)`);
    setSelectedIds([]);
  };

  const exportCsv = () => {
    const rows = [['Name', 'Class', 'Contact', 'Fee', 'Status']];
    students.forEach((s) => rows.push([s.name, s.className, s.contact, s.fee, s.status]));
    const csv = rows.map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student-fee-records.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleSort = (field) => {
    setSortBy(field);
    setSortDir((prev) => (sortBy === field && prev === 'asc' ? 'desc' : 'asc'));
  };

  const filteredStudents = useMemo(() => {
    let list = students.filter((s) => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'all' || s.status === filter;
      const matchesClass = classFilter === 'all' || s.className === classFilter;
      return matchesSearch && matchesFilter && matchesClass;
    });
    if (sortBy) {
      list = [...list].sort((a, b) => {
        const av = (a[sortBy] || '').toLowerCase();
        const bv = (b[sortBy] || '').toLowerCase();
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return sortDir === 'asc' ? cmp : -cmp;
      });
    }
    return list;
  }, [students, search, filter, classFilter, sortBy, sortDir]);

  const visibleIds = filteredStudents.map((s) => s.id);
  const allSelected = visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));
  const toggleSelectAll = () => setSelectedIds(allSelected ? [] : visibleIds);

  const collectedTotal = students.filter((s) => s.status === 'Paid').reduce((sum, s) => sum + parseFee(s.fee), 0);
  const pendingTotal = students.filter((s) => s.status === 'Unpaid').reduce((sum, s) => sum + parseFee(s.fee), 0);

  const classBreakdown = CLASS_NAMES.map((name) => {
    const inClass = students.filter((s) => s.className === name);
    return { name, total: inClass.length, paid: inClass.filter((s) => s.status === 'Paid').length, unpaid: inClass.filter((s) => s.status === 'Unpaid').length };
  });

  const capacity = CLASS_NAMES.map((name) => {
    const enrolled = students.filter((s) => s.className === name).length;
    const max = CLASS_CAPACITY[name];
    const pct = Math.min(100, Math.round((enrolled / max) * 100));
    return { name, enrolled, max, pct, barColor: pct >= 90 ? '#FF6B6B' : pct >= 60 ? '#FFD43B' : '#69DB7C' };
  });

  const revenueMonths = [
    { label: 'Feb', amt: 62000 }, { label: 'Mar', amt: 68000 }, { label: 'Apr', amt: 71000 },
    { label: 'May', amt: 65000 }, { label: 'Jun', amt: 74000 }, { label: 'Jul', amt: collectedTotal || 58000 }
  ];
  const maxAmt = Math.max(...revenueMonths.map((m) => m.amt));
  const revenueTrend = revenueMonths.map((m, i) => ({
    label: m.label,
    barHeight: Math.max(10, Math.round((m.amt / maxAmt) * 120)) + 'px',
    color: i === revenueMonths.length - 1 ? '#1C7ED6' : '#BFE3FF'
  }));

  const unpaidList = students.filter((s) => s.status === 'Unpaid');

  if (!unlocked) {
    return (
      <div className="admin-gate">
        <form className="admin-gate-card" onSubmit={handlePinSubmit}>
          <h2>Admin Access 🔒</h2>
          <p>Enter the admin PIN to continue.</p>
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter PIN" autoFocus />
          {pinError && <p className="admin-error">Incorrect PIN.</p>}
          <button type="submit" className="btn-primary">Unlock</button>
          <button type="button" className="admin-gate-back" onClick={() => navigate('/')}>← Back to Home</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-panel">
      <div className="admin-topbar">
        <div className="admin-topbar-brand">
          <span className="admin-topbar-logo">HK</span>
          <span className="admin-topbar-title">Happy Kids · Admin</span>
        </div>
        <button className="admin-topbar-back" onClick={() => navigate('/')}>← Back to website</button>
      </div>

      <div className="admin-body">
        <div className="admin-heading-row">
          <div>
            <h1>Student & Fee Records</h1>
            <p>Add, edit and track who's paid their fees.</p>
          </div>
          <div className="admin-stats">
            <div className="admin-stat"><strong>{students.length}</strong><span>Total students</span></div>
            <div className="admin-stat is--green"><strong>{students.filter((s) => s.status === 'Paid').length}</strong><span>Paid</span></div>
            <div className="admin-stat is--red"><strong>{students.filter((s) => s.status === 'Unpaid').length}</strong><span>Unpaid</span></div>
            <div className="admin-stat is--green"><strong>{formatCurrency(collectedTotal)}</strong><span>Fees collected</span></div>
            <div className="admin-stat is--red"><strong>{formatCurrency(pendingTotal)}</strong><span>Fees pending</span></div>
          </div>
        </div>

        <div className="admin-tabs">
          <button className={view === 'records' ? 'active' : ''} onClick={() => setView('records')}>Student Records</button>
          <button className={view === 'enquiries' ? 'active' : ''} onClick={() => setView('enquiries')}>Website Enquiries ({enquiries.length})</button>
        </div>

        {view === 'records' && (
          <>
            <div className="admin-charts-row">
              <div className="admin-card">
                <div className="admin-card-header">
                  <div className="admin-card-title">Revenue trend</div>
                  <div className="admin-card-sub">Last 6 months</div>
                </div>
                <div className="revenue-chart">
                  {revenueTrend.map((m) => (
                    <div key={m.label} className="revenue-bar-col">
                      <div className="revenue-bar" style={{ background: m.color, height: m.barHeight }}></div>
                      <div className="revenue-bar-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="admin-card">
                <div className="admin-card-title" style={{ marginBottom: 18 }}>Class capacity</div>
                {capacity.map((c) => (
                  <div key={c.name} className="capacity-row">
                    <div className="capacity-row-top">
                      <span>{c.name}</span>
                      <span className="capacity-count">{c.enrolled}/{c.max}</span>
                    </div>
                    <div className="capacity-track">
                      <div className="capacity-fill" style={{ background: c.barColor, width: `${c.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-toolbar">
              <div className="admin-toolbar-left">
                <input
                  type="text"
                  placeholder="Search by name..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="admin-search"
                />
                <button className={`admin-pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                <button className={`admin-pill ${filter === 'Paid' ? 'active' : ''}`} onClick={() => setFilter('Paid')}>Paid</button>
                <button className={`admin-pill ${filter === 'Unpaid' ? 'active' : ''}`} onClick={() => setFilter('Unpaid')}>Unpaid</button>
                <select className="admin-select" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
                  <option value="all">All classes</option>
                  {CLASS_NAMES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="admin-toolbar-right">
                <button className="admin-btn-outline" onClick={exportCsv}>⬇ Export CSV</button>
                <button className="admin-btn-filled" onClick={openAddForm}>+ Add Student</button>
              </div>
            </div>

            {selectedIds.length > 0 && (
              <div className="admin-bulk-bar">
                <span>{selectedIds.length} selected</span>
                <button className="bulk-btn is--paid" onClick={bulkMarkPaid}>Mark Paid</button>
                <button className="bulk-btn is--unpaid" onClick={bulkMarkUnpaid}>Mark Unpaid</button>
                <button className="bulk-btn is--delete" onClick={bulkDelete}>Delete</button>
                <button className="bulk-clear" onClick={() => setSelectedIds([])}>Clear</button>
              </div>
            )}

            {showForm && (
              <form className="admin-inline-form" onSubmit={saveForm}>
                <div className="admin-inline-form-title">{editingId ? 'Edit Student' : 'Add New Student'}</div>
                <div className="admin-inline-form-grid">
                  <div className="form-group">
                    <label>Child's name</label>
                    <input name="name" value={form.name} onChange={handleFormChange} placeholder="e.g. Aarav Mehta" required />
                  </div>
                  <div className="form-group">
                    <label>Class</label>
                    <select name="className" value={form.className} onChange={handleFormChange}>
                      {CLASS_NAMES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Parent contact</label>
                    <input name="contact" value={form.contact} onChange={handleFormChange} placeholder="Phone or email" />
                  </div>
                  <div className="form-group">
                    <label>Fee amount</label>
                    <input name="fee" value={form.fee} onChange={handleFormChange} placeholder="e.g. ₹8,000" />
                  </div>
                  <div className="form-group">
                    <label>Fee status</label>
                    <select name="status" value={form.status} onChange={handleFormChange}>
                      <option value="Paid">Paid</option>
                      <option value="Unpaid">Unpaid</option>
                    </select>
                  </div>
                </div>
                <div className="admin-inline-form-actions">
                  <button type="submit" className="bulk-btn is--paid">{editingId ? 'Save Changes' : 'Add Student'}</button>
                  <button type="button" className="admin-btn-cancel" onClick={closeForm}>Cancel</button>
                </div>
              </form>
            )}

            <div className="admin-card admin-table-card">
              <div className="admin-table-header-row">
                <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
                <div className="sortable" onClick={() => toggleSort('name')}>Name {sortBy === 'name' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</div>
                <div>Class</div>
                <div>Parent Contact</div>
                <div>Fee</div>
                <div className="sortable" onClick={() => toggleSort('status')}>Status {sortBy === 'status' ? (sortDir === 'asc' ? '↑' : '↓') : ''}</div>
                <div>Actions</div>
              </div>

              {filteredStudents.length === 0 ? (
                <div className="admin-empty">No students match this search/filter.</div>
              ) : (
                filteredStudents.map((student) => (
                  <div key={student.id} className={`admin-table-row ${selectedIds.includes(student.id) ? 'is--selected' : ''}`}>
                    <input type="checkbox" checked={selectedIds.includes(student.id)} onChange={() => toggleSelect(student.id)} />
                    <div className="cell-name">{student.name}</div>
                    <div>{student.className}</div>
                    <div>{student.contact}</div>
                    <div>{student.fee}</div>
                    <div>
                      <span className={`status-badge ${student.status === 'Paid' ? 'is--paid' : 'is--unpaid'}`}>{student.status}</span>
                    </div>
                    <div className="admin-row-actions">
                      <button className="row-action is--toggle" onClick={() => toggleStatus(student.id)}>
                        {student.status === 'Paid' ? 'Mark Unpaid' : 'Mark Paid'}
                      </button>
                      <button className="row-action is--edit" onClick={() => openEditForm(student)}>Edit</button>
                      <button className="row-action is--delete" onClick={() => deleteStudent(student.id)}>Delete</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="admin-bottom-grid">
              <div className="admin-card">
                <div className="admin-card-title" style={{ marginBottom: 16 }}>Class-wise breakdown</div>
                {classBreakdown.map((cls) => (
                  <div key={cls.name} className="breakdown-row">
                    <div>
                      <div className="breakdown-name">{cls.name}</div>
                      <div className="breakdown-total">{cls.total} students</div>
                    </div>
                    <div className="breakdown-badges">
                      <span className="mini-badge is--paid">{cls.paid} paid</span>
                      <span className="mini-badge is--unpaid">{cls.unpaid} unpaid</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="admin-card">
                <div className="admin-card-title" style={{ marginBottom: 16 }}>Payment reminders</div>
                {unpaidList.length === 0 ? (
                  <div className="admin-mini-empty">Everyone's paid up 🎉</div>
                ) : (
                  unpaidList.map((u) => (
                    <div key={u.id} className="reminder-row">
                      <div>
                        <div className="breakdown-name">{u.name}</div>
                        <div className="breakdown-total">{u.fee} due · {u.contact}</div>
                      </div>
                      <button className={`remind-btn ${remindedIds.includes(u.id) ? 'is--done' : ''}`} onClick={() => sendReminder(u)}>
                        {remindedIds.includes(u.id) ? 'Reminded ✓' : 'Send Reminder'}
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="admin-card">
                <div className="admin-card-title" style={{ marginBottom: 16 }}>Recent activity</div>
                {activityLog.length === 0 ? (
                  <div className="admin-mini-empty">No activity yet.</div>
                ) : (
                  activityLog.map((entry, i) => (
                    <div key={i} className="activity-row">
                      <span className="activity-dot"></span>
                      <div>
                        <div className="activity-text">{entry.text}</div>
                        <div className="activity-time">{entry.time}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}

        {view === 'enquiries' && (
          <div className="admin-card admin-table-card">
            {enquiries.length === 0 ? (
              <div className="admin-empty">No enquiries submitted yet.</div>
            ) : (
              <div className="admin-table-wrapper">
                <table className="enquiries-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Child's Age</th>
                      <th>Program</th>
                      <th>Message</th>
                      <th>Received</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enq) => (
                      <tr key={enq.id}>
                        <td>{enq.name}</td>
                        <td>{enq.phone}</td>
                        <td>{enq.childAge}</td>
                        <td>{enq.program}</td>
                        <td>{enq.message || '-'}</td>
                        <td>{new Date(enq.timestamp).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
