import PlotContainer from '@/components/PlotContainer'

export default function ScatterPage() {
  return (
    <PlotContainer
      title="Scatter Plot"
      description="3D scatter plot visualization with interactive controls"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Scatter plot will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 