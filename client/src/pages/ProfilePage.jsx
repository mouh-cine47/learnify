import { useState, useEffect } from 'react';
import { User, Mail, MapPin, Award, Settings, BookOpen, Eye, EyeOff} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedPage from '../components/motion/AnimatedPage';
import Input from '../components/common/Input';
import { safeJson } from '../utils/safeJson';
import { getApiBaseUrl } from '../utils/apiBase';

const API_BASE = getApiBaseUrl();

export default function ProfilePage() {
  const { user: authUser } = useAuth();
  const { isDark } = useTheme();
  const [profile, setProfile] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', bio: '' });
  const [changingPwd, setChangingPwd] = useState(false);
  const [pwdForm, setPwdForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [pwdError, setPwdError] = useState('');
  const [pwdSuccess, setPwdSuccess] = useState('');
  const [savingPwd, setSavingPwd] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [showPwd, setShowPwd] = useState({
  currentPassword: false,
  newPassword: false,
  confirmPassword: false,
});

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;
    Promise.all([
      fetch(`${API_BASE}/users/me`, { headers: { Authorization: `Bearer ${token}` } }).then(r => safeJson(r)),
      fetch(`${API_BASE}/users/me/courses`, { headers: { Authorization: `Bearer ${token}` } }).then(r => safeJson(r)),
    ])
      .then(([userData, coursesData]) => {
        setProfile(userData);
        setForm({ firstName: userData.firstName || '', lastName: userData.lastName || '', bio: userData.bio || '' });
        setEnrolledCourses(coursesData.enrolledCourses || []);
      })
      .catch(() => setError('Failed to load profile'))
      .finally(() => setLoading(false));
  }, [token]);

  const handleChangePassword = async () => {
  setPwdError('');
  setPwdSuccess('');
  if (pwdForm.newPassword !== pwdForm.confirmPassword) {
    return setPwdError("Les mots de passe ne correspondent pas");
  }
  if (pwdForm.newPassword.length < 6) {
    return setPwdError("Minimum 6 caractères");
  }
  setSavingPwd(true);
  try {
    const res = await fetch(`${API_BASE}/users/change-password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        currentPassword: pwdForm.currentPassword,
        newPassword: pwdForm.newPassword,
      }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    setPwdSuccess(data.message);
    setPwdForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setChangingPwd(false);
  } catch (e) {
    setPwdError(e.message);
  } finally {
    setSavingPwd(false);
  }
};

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`${API_BASE}/users/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to update');
      const updated = await safeJson(res);
      setProfile(updated);
      setEditing(false);
    } catch {
      setError('Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <AnimatedPage className="min-h-screen page-bg">
      <div className="flex min-h-screen items-center justify-center text-black dark:text-slate-300">Loading profile...</div>
    </AnimatedPage>
  );

  if (error) return (
    <div className="page-bg flex min-h-screen items-center justify-center px-4">
      <div className="surface rounded-3xl px-6 py-4 text-red-500">
        {error}
      </div>
    </div>
  );

  const fullName = profile ? `${profile.firstName || ''} ${profile.lastName || ''}`.trim() : '';

  return (
    <AnimatedPage className="min-h-screen py-12 page-bg text-black dark:text-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="surface overflow-hidden rounded-[2rem]">
          {/* Profile Header */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900" />

          <div className="px-8 pb-8">
              <div className="-mt-12 flex flex-col items-start gap-6 md:flex-row md:items-end">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-500 text-3xl font-semibold text-white shadow-lg shadow-sky-500/30">
                {profile?.firstName?.[0]?.toUpperCase() || '?'}
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{fullName || 'No name'}</h1>
                <p className="mt-1 text-sm capitalize text-black dark:text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>{profile?.role}</p>
              </div>
            </div>

            {/* Edit Form */}
            {editing ? (
              <div className="surface-strong mt-8 rounded-2xl border border-sky-200/80 p-6 dark:border-slate-700/80">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-sky-200/80 bg-white/75 p-4 dark:border-slate-700/80 dark:bg-slate-950/25">
                    <Input
                      label="First name"
                      value={form.firstName}
                      className="!border-0 !bg-transparent text-black !shadow-none !ring-0 !placeholder:text-slate-400"
                      onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                    />
                  </div>
                  <div className="rounded-2xl border border-sky-200/80 bg-white/75 p-4 dark:border-slate-700/80 dark:bg-slate-950/25">
                    <Input
                      label="Last name"
                      value={form.lastName}
                      className="!border-0 !bg-transparent text-black !shadow-none !ring-0 !placeholder:text-slate-400"
                      onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-sky-200/80 bg-white/60 p-4 dark:border-slate-700/80 dark:bg-slate-950/20">
                  <label className="block mb-1 text-sm font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>Bio</label>
                  <textarea
                    value={form.bio}
                    onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                    rows={3}
                    maxLength={250}
                    className="input min-h-[7.5rem] ext-black dark:text-white !placeholder:text-slate-400" style={{ color: isDark ? undefined : '#000000' }} 
                  />
                </div>
                <div className="flex gap-3">
                  <button onClick={handleSave} disabled={saving} className="px-6 py-2 font-bold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                  <button onClick={() => setEditing(false)} className="btn btn-outline btn-md">
                    Cancel
                  </button>
                </div>
              </div>
            ) : null}

            {/* Change Password */}
            {!changingPwd ? (
             <button
               onClick={() => setChangingPwd(true)}
               style={{ color: isDark ? 'white' : 'black' }}
               className="btn btn-md mt-6 border border-rose-200 bg-rose-50 shadow-sm hover:bg-rose-100 dark:border-rose-500/30 dark:bg-rose-500/10 dark:hover:bg-rose-500/20"
             >
               Change Password
             </button>
            ) : (
               <div className="surface-strong mt-6 space-y-4 rounded-2xl border border-sky-200/80 p-6 dark:border-slate-700/80">
                  <h3 className="font-bold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>Change Password</h3>
                 {pwdError && <p className="text-sm text-red-500">{pwdError}</p>}
                 {pwdSuccess && <p className="text-sm text-green-500">{pwdSuccess}</p>}
                 {['currentPassword', 'newPassword', 'confirmPassword'].map((field) => (
                  <div key={field}>
                   <label className="block mb-1 text-sm font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>
                      {field === 'currentPassword' ? 'Current Password'
                       : field === 'newPassword' ? 'New Password'
                       : 'Confirm New Password'}
                   </label>
                   <div className="relative">
                     <input type={showPwd[field] ? 'text' : 'password'} value={pwdForm[field]} onChange={e => setPwdForm(f => ({ ...f, [field]: e.target.value }))} className="input pr-10 !text-black !placeholder:text-slate-400"/>
                     <button type="button" onClick={() => setShowPwd(s => ({ ...s, [field]: !s[field] }))} className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600 dark:hover:text-gray-300" >
                       {showPwd[field] ? <EyeOff size={16} /> : <Eye size={16} />}
                     </button>
                   </div>
                 </div>
                   ))}
                 <div className="flex gap-3">
                   <button onClick={handleChangePassword} disabled={savingPwd}
                       className="px-6 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">
                      {savingPwd ? 'Saving...' : 'Save'}
                   </button>
                   <button onClick={() => { setChangingPwd(false); setPwdError(''); }}
                     className="px-6 py-2 font-bold border-2 border-gray-300 rounded-lg dark:border-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
                      Cancel
                   </button>
                  </div>
               </div>
            )}

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-8 mb-8 mt-8 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>Personal information</h2>
                <div className="mt-4 space-y-4">
                  <div className="surface-strong flex items-center gap-3 rounded-2xl border border-sky-200/80 p-4 dark:border-slate-700/80">
                    <User size={18} className="text-muted" />
                    <div>
                      <p className="text-xs text-black dark:text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>Full name</p>
                      <p className="font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{fullName || '—'}</p>
                    </div>
                  </div>
                  <div className="surface-strong flex items-center gap-3 rounded-2xl border border-sky-200/80 p-4 dark:border-slate-700/80">
                    <Mail size={18} className="text-muted" />
                    <div>
                      <p className="text-xs text-black dark:text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>Email</p>
                      <p className="font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{profile?.email}</p>
                    </div>
                  </div>
                  {profile?.bio && (
                    <div className="surface-strong flex items-start gap-3 rounded-2xl border border-sky-200/80 p-4 dark:border-slate-700/80">
                      <MapPin size={18} className="mt-0.5 text-muted" />
                      <div>
                        <p className="text-xs text-black dark:text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>Bio</p>
                        <p className="font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{profile.bio}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>Learning stats</h2>
                <div className="mt-4 space-y-3">
                  <div className="surface-strong flex items-center gap-3 rounded-2xl border border-sky-200/80 p-4 dark:border-slate-700/80">
                    <Settings size={18} className="text-muted" />
                    <div>
                      <p className="text-xs text-black dark:text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>Member since</p>
                      <p className="font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>
                        {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '—'}
                      </p>
                    </div>
                  </div>
                  <div className="surface-strong flex items-center gap-3 rounded-2xl border border-sky-200/80 p-4 dark:border-slate-700/80">
                    <BookOpen size={18} className="text-muted" />
                    <div>
                      <p className="text-xs text-black dark:text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>Enrolled courses</p>
                      <p className="font-semibold text-black dark:text-white" style={{ color: isDark ? undefined : '#000000' }}>{enrolledCourses.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses */}
            {enrolledCourses.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-bold !text-black dark:!text-white" style={{ color: isDark ? undefined : '#000000' }}>My Courses</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {enrolledCourses.map(course => (
                    <div key={course._id} className="surface-strong rounded-2xl border border-sky-200/80 p-4 dark:border-slate-700/80">
                      <h3 className="font-semibold !text-black dark:!text-white" style={{ color: isDark ? undefined : '#000000' }}>{course.title}</h3>
                      <p className="mt-1 text-sm !text-black dark:!text-slate-300" style={{ color: isDark ? undefined : '#000000' }}>{course.category}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Edit Button */}
            {!editing && (
              <button
                onClick={() => setEditing(true)}
                className="btn btn-primary btn-md border border-blue-700/20 shadow-sm"
              >
                <Settings size={18} />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
