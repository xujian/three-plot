import PlotContainer from '@/components/plot-container'

export default function BarPage() {
  return (
    <PlotContainer
      title="Bar Chart"
      description="3D bar chart for data comparisons and analysis"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Bar chart will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 