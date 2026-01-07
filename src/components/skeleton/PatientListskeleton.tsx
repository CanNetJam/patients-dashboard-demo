import { Skeleton } from "./Skeleton"

export default function PatientListSkeleton() {
    return (
        <div className="h-full w-full bg-white rounded-xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 sticky top-0 bg-white">
                <label className="text-xl font-medium">Patients</label>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                </div>
            </div>

            <div>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((_, index) => {
                        return (
                            <button
                                key={index}
                                className={`w-full cursor-pointer hover:bg-gray-50 flex gap-4 px-4 p-2 items-center`}
                            >
                                <div className="">
                                    <div
                                        className={`animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 h-12 w-12`}
                                    />
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <div className="grid gap-1">
                                        <span className="font-medium"><Skeleton className="h-6 w-64" /></span>
                                        <span className="flex">
                                            <Skeleton className="h-4 w-12" />,
                                            <Skeleton className="h-4 w-6" />
                                        </span>
                                    </div>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" /></svg>
                                    </span>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}