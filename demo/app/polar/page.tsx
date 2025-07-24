import PlotContainer from '@/components/plot-container'

export default function PolarPage() {
  return (
    <PlotContainer
      title="Polar Chart"
      description="3D polar chart for circular data visualization"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Polar chart will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 