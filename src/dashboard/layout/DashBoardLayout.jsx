import { useState } from 'react';
import Header from '../navigation/topNav';
import Sidebar from '../navigation/sideBar';

const DefaultLayout = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden h-[100vh] bg-amber-500">
      <div className='sticky top-0'>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="flex overflow-hidden  bg-white rounded-t-[3%] w-full h-full">
          <div className="h-full">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
          <main className='bg-blue-400 w-full'>
              {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
