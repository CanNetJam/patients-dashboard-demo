import { useEffect, useState } from "react"
import type { PatientInfo } from "../constants/patient-types"

export default function usePatientInfo() {
    const [patientsData, setPatientsData] = useState<PatientInfo[]>([])
    const [selectedPatient, setSelectedPatient] = useState<PatientInfo | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)

            const STORAGE_KEY = "patients-cache"
            const cached = localStorage.getItem(STORAGE_KEY)
            if (cached) {
                const data = JSON.parse(cached)
                setPatientsData(data)
                setSelectedPatient(data.find((p: { name: string }) => p.name === "Jessica Taylor"))

                setTimeout(() => setIsLoading(false), 2000)
                return
            }

            try {
                const testUrl = "/example_data.json" // 'https://fedskillstest.coalitiontechnologies.workers.dev'
                const Username = "coalition"
                const Password = "skills-test"
                const basicAuth = 'Basic ' + btoa(`${Username}:${Password}`)

                fetch(testUrl, {
                    method: "GET",
                    headers: {
                        "Authorization": basicAuth
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setPatientsData(data)
                        setSelectedPatient(data.find((patient: PatientInfo) => patient.name === "Jessica Taylor"))
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
                        setTimeout(() => setIsLoading(false), 2000)
                    });
            } catch (err) {
                console.log(err)
            }
        }

        getData()
    }, [])

    return {
        patientsData,
        selectedPatient,
        setSelectedPatient,
        isLoading
    }
}