import { Line } from "react-chartjs-2";
import "chart.js/auto"

const LineChart = ({
    chartData,
    label
}: {
    chartData: any,
    label: string
}) => {
    return <Line
        data={chartData}
        options={{
            plugins: {
                title: {
                    display: true,
                    text: label,
                    font: {
                        size: 18
                    }
                },
            },
            responsive: true,
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                    },
                    grid: {
                        display: true
                    }
                }
            }
        }}
        className="h-full w-full"
    />
}

export default LineChart