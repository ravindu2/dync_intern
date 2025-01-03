
import { Search, Edit, Eye, Trash2 } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  type: string;
  email: string;
}

const DEMO_DATA: Member[] = Array(8).fill(null).map((_, index) => ({
  id: index + 1,
  name: 'JOHN DOE',
  type: 'MEMBER',
  email: 'johndoe@example.com'
}));

const MemberList = () => {
  return (
    <div className="p-6 w-full max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-[#191B37]">Members</h1>
        <div className="font-semibold text-green-500">
          Total Members: {564}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <input 
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#B7BBFF]"
        />
        <Search className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
      </div>

      {/* Members List */}
      <div className="space-y-3">
        {DEMO_DATA.map((member) => (
          <div 
            key={member.id}
            className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm"
          >
            {/* Member Info */}
            <div className="grid flex-1 grid-cols-3 gap-4">
              <div className="text-sm font-medium text-[#191B37]">{member.name}</div>
              <div className="text-sm text-gray-500">{member.type}</div>
              <div className="text-sm text-gray-500">{member.email}</div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-lg text-green-500 hover:bg-green-50 transition-colors">
                <Edit size={16} />
              </button>
              <button className="p-1.5 rounded-lg text-purple-500 hover:bg-purple-50 transition-colors">
                <Eye size={16} />
              </button>
              <button className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;