import PlotContainer from '@/components/plot-container'

export default function LinePage() {
  return (
    <PlotContainer
      title="Line Plot"
      description="3D line chart for trend analysis and data visualization"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Line plot will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 