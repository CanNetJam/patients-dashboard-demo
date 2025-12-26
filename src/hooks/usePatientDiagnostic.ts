import { useEffect, useState } from "react";
import type { DiagnosticsHistory, DisplayData, PatientInfo } from "../constants/patient-types";
import lungs from '../assets/respiratory rate.svg'
import temperature from '../assets/temperature.svg'
import heartRate from '../assets/HeartBPM.svg'

export function usePatientDiagnostic(selectedPatient: PatientInfo | undefined) {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [diastolicData, setDiastolicData] = useState<number[]>([])
    const [systolicData, setSystolicData] = useState<number[]>([])
    const [displayData, setDisplayData] = useState<DisplayData[]>([])
    const [graphYear, setGraphYear] = useState<2022 | 2023 | 2024>(2023)
    const [lastDisplayData, setLastDisplayData] = useState<DiagnosticsHistory | undefined>(undefined)

    useEffect(() => {
        if (selectedPatient !== undefined) {
            const tempA = selectedPatient?.diagnosis_history?.filter((his) => his.year == graphYear).map((his) => his.blood_pressure?.diastolic?.value)
            const tempB = selectedPatient?.diagnosis_history?.filter((his) => his.year == graphYear).map((his) => his.blood_pressure?.systolic?.value)
            const lastData = selectedPatient?.diagnosis_history?.filter((his) => his.year == graphYear)[0]

            setDiastolicData(tempA)
            setSystolicData(tempB)
            if (lastData !== undefined) {
                setLastDisplayData(lastData)
                setDisplayData([
                    {
                        icon: lungs,
                        bg: 'bg-blue-100',
                        label: "Respiratory Rate",
                        value: lastData.respiratory_rate.value + " bpm",
                        description: lastData.respiratory_rate.levels
                    },
                    {
                        icon: temperature,
                        bg: 'bg-red-100',
                        label: "Temperature",
                        value: lastData.temperature.value + " F",
                        description: lastData.temperature.levels
                    },
                    {
                        icon: heartRate,
                        bg: 'bg-pink-100',
                        label: "Heart Rate",
                        value: lastData.heart_rate.value + " bpm",
                        description: lastData.heart_rate.levels
                    }
                ])
            }
        }
    }, [selectedPatient, graphYear])

    return {
        labels,
        diastolicData,
        systolicData,
        displayData,
        graphYear,
        setGraphYear,
        lastDisplayData
    }
}