import SidebarItem from './SidebarItem';
import { Plus, Users, UserPlus, Power } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col items-center w-16 h-screen py-4 bg-white">
      {/* Logo */}
      <div className="mb-8">
        <img src="/minator-logo.png" alt="Minator" className="w-8 h-8" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col flex-1 gap-3">
        <SidebarItem icon={<Plus className="w-5 h-5" />} isActive={false} />
        <SidebarItem icon={<Plus className="w-5 h-5" />} isActive={false} />
        <SidebarItem icon={<Users className="w-5 h-5" />} isActive={false} />
        <SidebarItem icon={<UserPlus className="w-5 h-5" />} isActive={false} />
      </div>

      {/* User Profile and Logout */}
      <div className="flex flex-col gap-3">
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <img 
            src="/api/placeholder/32/32" 
            alt="Profile" 
            className="object-cover w-full h-full"
          />
        </div>
        <SidebarItem icon={<Power className="w-5 h-5" />} isActive={false} />
      </div>
    </div>
  );
};

export default Sidebar;