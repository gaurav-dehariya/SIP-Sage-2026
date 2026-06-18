function createHospital(hospitalName) {

    // Private Data
    let patients = [];

    // Add Patient
    function addPatient(id, name, disease) {
        patients.push({
            id,
            name,
            disease
        });

        console.log(`${name} admitted.`);
    }

    // Remove Patient
    function removePatient(id) {
        patients = patients.filter(
            patient => patient.id !== id
        );

        console.log(`Patient ${id} discharged.`);
    }

    // Search Patient
    function searchPatient(id) {

        const patient = patients.find(
            patient => patient.id === id
        );

        if (patient) {
            console.log(patient);
        } else {
            console.log("Patient not found");
        }
    }

    // View Patients
    function viewPatients() {

        console.log(`\n${hospitalName} Patient List`);

        patients.forEach(patient => {
            console.log(
                `ID:${patient.id} Name:${patient.name} Disease:${patient.disease}`
            );
        });
    }

    // Count Patients
    function totalPatients() {
        console.log(
            `Total Patients: ${patients.length}`
        );
    }

    return {
        addPatient,
        removePatient,
        searchPatient,
        viewPatients,
        totalPatients
    };
}


const hospital = createHospital("Apollo");

hospital.addPatient(101, "Rahul", "Fever");
hospital.addPatient(102, "Priya", "Diabetes");
hospital.addPatient(103, "Amit", "Asthma");
hospital.addPatient(104, "Gaurav", "Fever")

hospital.viewPatients();

hospital.searchPatient(102);

hospital.totalPatients();

hospital.removePatient(101);

hospital.viewPatients();

hospital.totalPatients();