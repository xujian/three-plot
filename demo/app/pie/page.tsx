import PlotContainer from '@/components/PlotContainer'

export default function PiePage() {
  return (
    <PlotContainer
      title="Pie Chart"
      description="3D pie chart for proportional data visualization"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Pie chart will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 