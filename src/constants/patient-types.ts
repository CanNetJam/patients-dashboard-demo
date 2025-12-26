export interface PatientInfo {
    name: string;
    gender: "Male" | "Female" | "Other";
    age: number;
    profile_picture: string;
    date_of_birth: Date;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
    diagnosis_history: DiagnosticsHistory[];
    diagnostic_list: DiagnosticLists[];
    lab_results: string[];
}

export interface DiagnosticsHistory {
    month: string;
    year: number;
    blood_pressure: BloodPressureProps;
    heart_rate: CommonProps;
    respiratory_rate: CommonProps;
    temperature: CommonProps;
}

interface BloodPressureProps {
    systolic: CommonProps;
    diastolic: CommonProps;
}

interface CommonProps {
    value: number;
    levels: string;
}

interface DiagnosticLists {
    name: string;
    description: string;
    status: string;
}

export interface DisplayData {
    icon: string;
    bg: string;
    label: string;
    value: string;
    description: string;
}