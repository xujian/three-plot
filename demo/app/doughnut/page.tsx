import PlotContainer from '@/components/PlotContainer'

export default function DoughnutPage() {
  return (
    <PlotContainer
      title="Doughnut Chart"
      description="3D doughnut chart with center space for additional information"
    >
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Doughnut chart will be rendered here</p>
      </div>
    </PlotContainer>
  )
} 