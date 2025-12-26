import TopNav from './components/navigation/TopNav'
import PatientList from './components/patient/PatientList'
import PatientDiagnostics from './components/patient/PatientDiagnostics'
import PatientProfile from './components/patient/PatientProfile'
import usePatientInfo from './hooks/usePatientInfo'

function App() {
    const { patientsData, selectedPatient, setSelectedPatient } = usePatientInfo();

    return (
        <div className='h-auto min-h-screen w-full p-4 flex flex-col gap-6 bg-gray-100'>
            <TopNav />

            <div className='h-full grid grid-cols-4 gap-6'>
                <div>
                    <PatientList patientsData={patientsData} selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient}/>
                </div>
                <div className='col-span-2'>
                    <PatientDiagnostics selectedPatient={selectedPatient}/>
                </div>
                <div>
                    <PatientProfile selectedPatient={selectedPatient}/>
                </div>
            </div>
        </div>
    )
}

export default App
