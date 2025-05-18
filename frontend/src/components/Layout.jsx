import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (

    <div className="min-h-screen flex flex-col">


      {/* Optional Header */}
      <header className="bg-white shadow-sm">
        
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">Hackathon</Link>
          {/* Add navigation links here if needed */}
        </div>
      </header>
      <main className="flex-grow" role="main">
        <Outlet />
      </main>
      <footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Hackathon. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}