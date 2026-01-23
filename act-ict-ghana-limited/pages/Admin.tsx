import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { Plus, Trash2, Save, LayoutDashboard, FileText, Briefcase, Settings } from 'lucide-react';

const Admin: React.FC = () => {
  const { projects, addProject, deleteProject } = useContent();
  const [activeTab, setActiveTab] = useState<'projects' | 'settings'>('projects');

  // Form State for new project
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: 'Engineering',
    image: 'https://picsum.photos/800/600?random=99'
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      id: Date.now().toString(),
      ...newProject
    });
    setNewProject({ ...newProject, title: '', description: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:block">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">CMS Admin</h2>
        </div>
        <nav className="p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition ${activeTab === 'projects' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Briefcase size={18} />
            <span>Projects</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition ${activeTab === 'settings' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto h-[calc(100vh-80px)]">
        {activeTab === 'projects' && (
          <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Projects</h1>
            
            {/* Add Project Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-bold mb-4">Add New Project</h3>
              <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Project Title" 
                  required
                  value={newProject.title}
                  onChange={e => setNewProject({...newProject, title: e.target.value})}
                  className="px-4 py-2 border rounded"
                />
                <select 
                  value={newProject.category}
                  onChange={e => setNewProject({...newProject, category: e.target.value})}
                  className="px-4 py-2 border rounded"
                >
                  <option>Engineering</option>
                  <option>Communications</option>
                  <option>Security</option>
                  <option>Infrastructure</option>
                </select>
                <textarea 
                  placeholder="Description" 
                  required
                  value={newProject.description}
                  onChange={e => setNewProject({...newProject, description: e.target.value})}
                  className="px-4 py-2 border rounded md:col-span-2"
                />
                <button type="submit" className="md:col-span-2 bg-green-600 text-white px-4 py-2 rounded font-bold flex items-center justify-center gap-2 hover:bg-green-700">
                  <Plus size={18} /> Add Project
                </button>
              </form>
            </div>

            {/* List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-4 text-sm font-bold text-gray-600">Image</th>
                    <th className="p-4 text-sm font-bold text-gray-600">Title</th>
                    <th className="p-4 text-sm font-bold text-gray-600">Category</th>
                    <th className="p-4 text-sm font-bold text-gray-600 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(p => (
                    <tr key={p.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="p-4">
                        <img src={p.image} alt="" className="w-12 h-12 object-cover rounded" />
                      </td>
                      <td className="p-4 font-medium text-gray-900">{p.title}</td>
                      <td className="p-4 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-200 rounded text-xs">{p.category}</span>
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => deleteProject(p.id)} className="text-red-500 hover:text-red-700 p-2">
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Site Settings</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
               <p className="text-gray-500">Global site configuration (Colors, SEO, Contact Info) would go here in a real production environment.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
