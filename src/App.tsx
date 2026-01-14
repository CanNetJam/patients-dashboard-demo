import TopNav from './components/navigation/TopNav'
import PatientList from './components/patient/PatientList'
import PatientDiagnostics from './components/patient/PatientDiagnostics'
import PatientProfile from './components/patient/PatientProfile'
import usePatientInfo from './hooks/usePatientInfo'
import { useEffect } from 'react'

function App() {
    const { patientsData, selectedPatient, setSelectedPatient, isLoading } = usePatientInfo();

    useEffect(() => {
        const Shown = "message_shown"
        const cached = localStorage.getItem(Shown)
        if (cached) {
            return
        } else {
            alert(`This is a demo application for a patient's dashboard. It features dynamic data, charts, loading state, caching, and error handling. Moreover, it is not mobile responsive by choice since dashboards are usually used on desktops and tablets. All data presented is fictional and for demonstration purposes only.`);
            localStorage.setItem(Shown, "true")
        }
    }, [])

    return (
        <div className='h-auto min-h-screen w-full p-4 flex flex-col gap-6 bg-gray-100'>
            <TopNav />

            <div className='h-full grid grid-cols-4 gap-2 xl:gap-6'>
                <div>
                    <PatientList patientsData={patientsData} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} isLoading={isLoading} />
                </div>
                <div className='col-span-2'>
                    <PatientDiagnostics selectedPatient={selectedPatient} isLoading={isLoading} />
                </div>
                <div>
                    <PatientProfile selectedPatient={selectedPatient} isLoading={isLoading} />
                </div>
            </div>
        </div>
    )
}

export default App
