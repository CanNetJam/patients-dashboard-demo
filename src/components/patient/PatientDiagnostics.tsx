import type { PatientInfo } from "../../constants/patient-types";
import LineChart from "../chart/LineChart";
import { usePatientDiagnostic } from "../../hooks/usePatientDiagnostic";
import PatientDiagnosticSkeleton from "../skeleton/PatientDiagnosticSkeleton";

export default function PatientDiagnostics({
    selectedPatient,
    isLoading
}: {
    selectedPatient: PatientInfo | undefined;
    isLoading: boolean;
}) {
    const {
        labels,
        diastolicData,
        systolicData,
        displayData,
        graphYear,
        setGraphYear,
        lastDisplayData
    } = usePatientDiagnostic(selectedPatient);

    return (
        <>
            {isLoading === false ?
                <div className="h-full max-h-[85vh] w-full grid grid-rows-12 gap-4">
                    <div className="row-span-8 h-full w-full bg-white rounded-xl p-4 grid gap-3">
                        <div className="flex justify-between items-center">
                            <label className="row-span-1 text-xl font-medium">Diagnostic History</label>

                            <div className="flex gap-2">
                                <input onChange={() => setGraphYear(2022)} checked={graphYear === 2022} type="radio" id="2022" name="table_year" value="2022" />
                                <label htmlFor="2022">2022</label>

                                <input onChange={() => setGraphYear(2023)} checked={graphYear === 2023} type="radio" id="2023" name="table_year" value="2023" />
                                <label htmlFor="2023">2023</label>

                                <input onChange={() => setGraphYear(2024)} checked={graphYear === 2024} type="radio" id="2024" name="table_year" value="2024" />
                                <label htmlFor="2024">2024</label>
                            </div>
                        </div>

                        <div className=" bg-purple-50 rounded-xl h-full grid xl:grid-cols-12 xl:gap-4">
                            <div className="xl:col-span-9 h-auto xl:max-h-[275px] w-full">
                                <LineChart
                                    chartData={{
                                        labels,
                                        datasets: [
                                            {
                                                label: 'Diastolic',
                                                data: diastolicData,
                                                borderColor: '#7E6CAB',
                                                backgroundColor: '#8C6FE6',
                                                tension: 0.4
                                            },
                                            {
                                                label: 'Systolic',
                                                data: systolicData,
                                                borderColor: '#C26EB4',
                                                backgroundColor: '#E66FD2',
                                                tension: 0.4
                                            }
                                        ],
                                    }}
                                    label={"Blood Pressure"}
                                />
                            </div>

                            <div className="xl:col-span-3 flex flex-row xl:flex-col gap-2">
                                <div className="grid gap-1 px-4 py-3 border-gray-300 border-r xl:border-r-0 xl:border-b">
                                    <div className="h-min w-full flex gap-1 items-center">
                                        <span className="font-medium text-base text-pink-500 ">Systolic</span>
                                    </div>

                                    <span className="font-medium text-xl">{lastDisplayData?.blood_pressure?.systolic?.value}</span>
                                    <span className="text-sm">{lastDisplayData?.blood_pressure?.systolic?.levels}</span>
                                </div>

                                <div className="flex flex-col gap-1 px-4 py-3">
                                    <div className="h-min w-full flex gap-1 items-center">
                                        <span className="text-violet-500 font-medium text-base">Diastolic</span>
                                    </div>

                                    <span className="font-medium text-xl">{lastDisplayData?.blood_pressure?.diastolic?.value}</span>
                                    <span className="text-sm">{lastDisplayData?.blood_pressure?.diastolic?.levels}</span>
                                </div>
                            </div>
                        </div>

                        <div className="row-span-4 grid grid-cols-3 gap-4 items-stretch">
                            {displayData?.map((a, index) => {
                                return (
                                    <div key={index} className={`${a.bg} rounded-xl p-3 flex flex-col justify-between`}>
                                        <div className="flex gap-1 xl:grid xl:gap-0">
                                            <div className="h-10 xl:h-14 w-10 xl:w-14">
                                                <img className="h-full w-full object-cover" src={a.icon} alt={a.description} />
                                            </div>

                                            <div className="grid">
                                                <label className="font-medium text-sm">{a.label}</label>
                                                <span className="font-bold text-xl leading-5">{a.value}</span>
                                            </div>
                                        </div>

                                        <span className="text-sm">{a.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="row-span-4 h-full bg-white rounded-xl p-4 flex flex-col gap-2">
                        <label className="text-xl font-medium">Diagnostic List</label>

                        <div className="w-full overflow-y-auto flex-1 relative">
                            <table className="h-full w-full">
                                <thead className="sticky top-0">
                                    <tr className="font-medium">
                                        <td className="py-3 pl-4 rounded-l-full bg-gray-100 px-2">Problem/Diagnosis</td>
                                        <td className="py-3 bg-gray-100 px-2">Description</td>
                                        <td className="py-3 pr-4 rounded-r-full bg-gray-100 px-2">Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedPatient?.diagnostic_list.map((diagnosis, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="py-4 pl-4 border-b border-b-gray-100 px-2">{diagnosis.name}</td>
                                                <td className="py-4 border-b border-b-gray-100 px-2">{diagnosis.description}</td>
                                                <td className="py-4 pr-4 border-b border-b-gray-100 px-2">{diagnosis.status}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                :
                <PatientDiagnosticSkeleton />
            }
        </>
    )
}