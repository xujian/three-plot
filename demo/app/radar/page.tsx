import PlotContainer from '@/components/PlotContainer'

export default function RadarPage() {
  return (
    <PlotContainer
      title="Radar Chart"
      description="3D radar chart for multi-dimensional data visualization"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Radar chart will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 