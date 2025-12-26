import type { PatientInfo } from "../../constants/patient-types";

export default function PatientList({
    patientsData,
    selectedPatient,
    setSelectedPatient
}: {
    patientsData: PatientInfo[];
    selectedPatient: PatientInfo | undefined;
    setSelectedPatient: React.Dispatch<React.SetStateAction<PatientInfo | undefined>>;
}) {
    return (
        <div className="h-full w-full bg-white rounded-xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 sticky top-0 bg-white">
                <label className="text-2xl font-medium">Patients</label>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                </div>
            </div>

            <div>
                {
                    patientsData?.map((patient, index) => {
                        return (
                            <button 
                            key={index} 
                            className={`w-full cursor-pointer hover:bg-gray-50 flex gap-4 px-4 p-2 items-center ${selectedPatient?.name==patient.name ? 'bg-green-100' : ''}`}
                            onClick={()=>setSelectedPatient(patient)}
                            >
                                <div className="h-12 w-12">
                                    <img src={patient.profile_picture} alt={`${patient.name}'s picture`}/>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <div className="grid">
                                        <span className="font-medium">{patient.name}</span>
                                        <span className="text-gray-500 text-left">
                                            {patient.gender},
                                            {patient.age}
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