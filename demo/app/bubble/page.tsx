import PlotContainer from '@/components/plot-container'

export default function BubblePage() {
  return (
    <PlotContainer
      title="Bubble Chart"
      description="3D bubble chart for multi-dimensional data with size encoding"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Bubble chart will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 