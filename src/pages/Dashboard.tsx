
import img1 from '../assets/minator-logo.png';

const Dashboard = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      

      <main className="w-full p-4 ml-16 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col items-start justify-between gap-4 mb-8 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#191B37]">Dashboard</h1>
            <p className="text-gray-500">{currentDate}</p>
          </div>
          <div className="w-full text-left sm:w-auto sm:text-right">
            <p className="text-sm text-gray-500">Last Month</p>
            <p className="text-xl font-bold text-green-600 sm:text-2xl">218,740.00 LKR</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">TOTAL MEMBERS</p>
            <p className="text-xl font-bold sm:text-2xl">012</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">TOTAL TRAINERS</p>
            <p className="text-xl font-bold sm:text-2xl">564</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">ACTIVE CLASSES</p>
            <p className="text-xl font-bold sm:text-2xl">021</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Logo Card */}
          <div className="lg:flex-1">
            <div className="bg-[#191B37] p-4 rounded-xl flex flex-col items-center justify-center aspect-[16/9]">
              <div className="w-24 max-w-xs sm:w-28">
                <img
                  src={img1}
                  alt="Minator Logo"
                  className="w-full mb-2"
                />
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 lg:w-48">
            <button className="w-full bg-white text-[#191B37] px-4 py-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-sm font-medium">
              ADD PLANS
            </button>
            <button className="w-full bg-white text-[#191B37] px-4 py-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-sm font-medium">
              ADD CLASSES
            </button>
            <button className="w-full bg-white text-[#191B37] px-4 py-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-sm font-medium">
              ADD TRAINERS
            </button>
            <button className="w-full bg-white text-[#191B37] px-4 py-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow text-sm font-medium">
              ADD MEMBERS
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;