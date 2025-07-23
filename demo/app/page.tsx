export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Three-Plot Demo</h1>
        <p className="text-lg text-gray-600 mb-8">
          Interactive 3D charting library built with Three.js. Explore different chart types in the sidebar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Scatter Plot</h3>
            <p className="text-gray-600 mb-4">3D scatter points for data visualization</p>
            <a href="/scatter" className="text-blue-600 hover:underline">View Demo →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Line Plot</h3>
            <p className="text-gray-600 mb-4">3D line charts for trend analysis</p>
            <a href="/line" className="text-blue-600 hover:underline">View Demo →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Bar Chart</h3>
            <p className="text-gray-600 mb-4">3D bar charts for comparisons</p>
            <a href="/bar" className="text-blue-600 hover:underline">View Demo →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Pie Chart</h3>
            <p className="text-gray-600 mb-4">3D pie charts for proportions</p>
            <a href="/pie" className="text-blue-600 hover:underline">View Demo →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Doughnut Chart</h3>
            <p className="text-gray-600 mb-4">3D doughnut charts with center space</p>
            <a href="/doughnut" className="text-blue-600 hover:underline">View Demo →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Radar Chart</h3>
            <p className="text-gray-600 mb-4">3D radar charts for multi-dimensional data</p>
            <a href="/radar" className="text-blue-600 hover:underline">View Demo →</a>
          </div>
        </div>
      </div>
    </div>
  )
} 