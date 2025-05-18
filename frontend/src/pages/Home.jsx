import { useState, useEffect } from 'react';
import { checkBackendStatus } from '../services/api';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [backendStatus, setBackendStatus] = useState(null);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  // Get the current hostname and port from the browser
  const currentUrl = window.location.origin;

  useEffect(() => {
    setIsVisible(true);
    const fetchBackendStatus = async () => {
      try {
        const data = await checkBackendStatus();
        setBackendStatus(data);
      } catch (err) {
        setError('Failed to connect to backend');
      }
    };
    fetchBackendStatus();
  }, []);

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50"}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Backend Status */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Backend Status</h2>
            {backendStatus ? (
              <div className="bg-green-50 p-4 rounded-md">
                <h3 className="font-medium text-green-800 mb-2">Backend is Running! 🚀</h3>
                <div className="space-y-2">
                  <p className="text-green-700">Message: {backendStatus.message}</p>
                  <p className="text-green-700">App Name: {backendStatus.app_name}</p>
                  <p className="text-green-700">Version: {backendStatus.version}</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-50 p-4 rounded-md">
                <h3 className="font-medium text-red-800 mb-2">Backend Connection Error</h3>
                <p className="text-red-700">{error}</p>
              </div>
            ) : (
              <div className="bg-yellow-50 p-4 rounded-md">
                <h3 className="font-medium text-yellow-800 mb-2">Checking Backend Status...</h3>
                <p className="text-yellow-700">Please wait while we connect to the backend.</p>
              </div>
            )}
          </div>

          {/* Success Message */}
          <div className="p-6 border-b border-gray-100 bg-green-50">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Frontend Setup Successful! 🎉</h2>
            <p className="text-gray-600">
              If you're seeing this page, your GUVI Hackathon FSD Setup frontend is up and running correctly.
            </p>
          </div>

          {/* Get Started Section */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="mb-2 text-gray-800">Run your frontend development server:</p>
                <div className="bg-gray-800 text-gray-100 p-2 rounded-md overflow-x-auto">
                  
                  <code>make run-local</code>
                </div>
              </div>
              
              <p className="text-gray-600">
                Your frontend will be available at <code className="bg-gray-100 px-1 py-0.5 rounded">{currentUrl}</code>
              </p>
            </div>
          </div>

          {/* Where to Code Section */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Where to Code</h2>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 mb-2">Frontend Structure</h3>
              <p className="text-gray-600 text-sm mb-2">Add new pages in:</p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded block">frontend/src/pages/</code>
              <p className="text-gray-600 text-sm mt-2 mb-2">Add components in:</p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded block">frontend/src/components/</code>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md text-gray-800 mt-4">
              <p>Try adding a new page or component to see how everything works together. The changes will automatically refresh in your browser!</p>
            </div>
          </div>
          
          {/* Deploy Section */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ready to Deploy?</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="mb-2 text-gray-800">Deploy your frontend to Netlify:</p>
              <div className="bg-gray-800 text-gray-100 p-2 rounded-md overflow-x-auto">
                <code>make deploy</code>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                This will build your project and guide you through the deployment process.
              </p>
            </div>
          </div>
          
          {/* Resources Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">React Docs</h3>
                <p className="text-xs text-gray-600">Frontend framework</p>
              </a>
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" className="block p-3 bg-teal-50 rounded-md hover:bg-teal-100 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Tailwind CSS</h3>
                <p className="text-xs text-gray-600">Styling utilities</p>
              </a>
              <a href="https://docs.netlify.com" target="_blank" rel="noopener noreferrer" className="block p-3 bg-emerald-50 rounded-md hover:bg-emerald-100 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Netlify Docs</h3>
                <p className="text-xs text-gray-600">Frontend hosting</p>
              </a>
              <a href="https://hackathon.guvi.in?hackathon-id=asdasd-asd-asd-sadsad" target="_blank" rel="noopener noreferrer" className="block p-3 bg-amber-50 rounded-md hover:bg-amber-100 transition-colors">
                <h3 className="font-medium text-gray-900 mb-1">Hackathon Portal</h3>
                <p className="text-xs text-gray-600">GUVI Hackathon</p>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Message */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-700">Frontend is Ready! 🚀</p>
          <p className="text-gray-500 mt-2">Start building your amazing frontend application!</p>
        </div>
      </div>
      <button
        className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}