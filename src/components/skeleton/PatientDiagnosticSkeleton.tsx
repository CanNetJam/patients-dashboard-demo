import { Skeleton } from "./Skeleton"

export default function PatientDiagnosticSkeleton() {
    return (
        <div className="h-full max-h-[85vh] w-full grid grid-rows-12 gap-4">
            <div className="row-span-8 h-full w-full bg-white rounded-xl p-4 grid gap-3">
                <div className="flex justify-between items-center">
                    <label className="row-span-1 text-xl font-medium">Diagnostic History</label>

                    <div className="flex gap-2">
                        <input type="radio" id="2022" name="table_year" value="2022" />
                        <label htmlFor="2022">2022</label>

                        <input type="radio" id="2023" name="table_year" value="2023" />
                        <label htmlFor="2023">2023</label>

                        <input type="radio" id="2024" name="table_year" value="2024" />
                        <label htmlFor="2024">2024</label>
                    </div>
                </div>

                <div className=" bg-purple-50 rounded-xl h-full grid xl:grid-cols-12 xl:gap-4">
                    <div className="xl:col-span-9 h-full w-full">
                        <Skeleton className="h-full w-full" />
                    </div>

                    <div className="xl:col-span-3 flex flex-row xl:flex-col gap-2">
                        <div className="grid gap-1 px-4 py-3 border-gray-300 border-r xl:border-r-0 xl:border-b">
                            <div className="h-min w-full flex gap-1 items-center">
                                <span className="font-medium text-base text-pink-500 ">Systolic</span>
                            </div>

                            <span className="font-medium text-xl"><Skeleton className="h-6 w-full" /></span>
                            <span className="text-sm"><Skeleton className="h-6 w-full" /></span>
                        </div>

                        <div className="flex flex-col gap-1 px-4 py-3">
                            <div className="h-min w-full flex gap-1 items-center">
                                <span className="text-violet-500 font-medium text-base">Diastolic</span>
                            </div>

                            <span className="font-medium text-xl"><Skeleton className="h-6 w-full" /></span>
                            <span className="text-sm"><Skeleton className="h-6 w-full" /></span>
                        </div>
                    </div>
                </div>

                <div className="row-span-4 grid grid-cols-3 gap-4 items-stretch">
                    {[1, 2, 3]?.map((a) => {
                        return (
                            <div key={a} className={`rounded-xl flex flex-col justify-between`}>
                                <Skeleton className="h-full w-full" />
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
                            {[1,2,3].map((_, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="py-4 pl-4 border-b border-b-gray-100 px-2"><Skeleton className="h-8 w-full" /></td>
                                        <td className="py-4 border-b border-b-gray-100 px-2"><Skeleton className="h-8 w-full" /></td>
                                        <td className="py-4 pr-4 border-b border-b-gray-100 px-2"><Skeleton className="h-8 w-full" /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}