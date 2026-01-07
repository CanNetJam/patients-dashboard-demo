import { Skeleton } from "./Skeleton"

const temp = {
    name: '',
    gender: "Male",
    age: 0,
    profile_picture: '',
    date_of_birth: Date.now(),
    phone_number: '',
    emergency_contact: '',
    insurance_type: ''
}

export default function PatientProfileSkeleton() {
    return (
        <div className="h-full max-h-[85vh] w-full grid grid-rows-12 gap-4">
            <div className="row-span-9 bg-white rounded-xl flex flex-col justify-between gap-2 p-4">
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="h-32 w-32 flex justify-center">
                        <div
                            className={`animate-pulse rounded-full bg-gray-200 dark:bg-gray-700 h-full w-full`}
                        />
                    </div>
                    <span className="text-center 3xl:text-2xl text-lg font-medium"><Skeleton className="h-6 w-full" /></span>
                </div>

                <div className="w-full">
                    {temp !== undefined &&
                        ["date_of_birth", "gender", "phone_number", "emergency_contact", "insurance_type"].map((key, index) => {
                            return (
                                <div key={index} className='flex gap-4 p-1 items-center'>
                                    <div className="3xl:h-12 h-8 3xl:w-12  w-8 bg-gray-100 rounded-full shrink-0 flex justify-center items-center">
                                        {key == "date_of_birth" && <svg className='h-[65%] w-[65%] fill-current text-gray-600' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>}
                                        {key == "gender" && <svg className='h-[65%] w-[65%] fill-current text-gray-600' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M800-800v240h-80v-103L561-505q19 28 29 59.5t10 65.5q0 92-64 156t-156 64q-92 0-156-64t-64-156q0-92 64-156t156-64q33 0 65 9.5t59 29.5l159-159H560v-80h240ZM380-520q-58 0-99 41t-41 99q0 58 41 99t99 41q58 0 99-41t41-99q0-58-41-99t-99-41Z" /></svg>}
                                        {key == "phone_number" && <svg className='h-[65%] w-[65%] fill-current text-gray-600' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>}
                                        {key == "emergency_contact" && <svg className='h-[65%] w-[65%] fill-current text-gray-600' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>}
                                        {key == "insurance_type" && <svg className='h-[65%] w-[65%] fill-current text-gray-600' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z" /></svg>}
                                    </div>

                                    <div className=" w-full">
                                        <span className="text-gray-500 capitalize">{key.replaceAll('_', ' ')}</span>
                                        <div className="text-gray-600 font-medium">
                                            <span><Skeleton className="h-6 w-full" /></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>

                <div className="w-full flex justify-center">
                    <button className="bg-teal-300 px-6 py-2 rounded-full h-min w-min whitespace-nowrap font-medium">
                        Show All Information
                    </button>
                </div>
            </div>

            <div className="row-span-3 bg-white rounded-xl p-4 flex flex-col gap-2">
                <label className="text-xl font-medium">Lab Results</label>

                <div className="grid overflow-y-auto">
                    {[1,2,3].map((a) => {
                        return (
                            <div key={a} className="flex justify-between items-center p-2 hover:bg-gray-100">
                                <Skeleton className="h-6 w-full" />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}