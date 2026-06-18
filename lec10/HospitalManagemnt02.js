function createHospital(hospitalName) {

    let patients = [];
    let doctors = [];
    let appointments = [];

    // Add Doctor
    function addDoctor(
        id,
        name,
        specialization,
        experience,
        slots
    ) {
        doctors.push({
            id,
            name,
            specialization,
            experience,
            available: true,
            slots
        });

        console.log(`Dr. ${name} added.`);
    }

    // Add Patient
    function addPatient(id, name, age, disease) {
        patients.push({
            id,
            name,
            age,
            disease
        });

        console.log(`${name} registered.`);
    }

    // View Doctors
    function viewDoctors() {

        doctors.forEach(doc => {
            console.log(`
Doctor ID : ${doc.id}
Name      : Dr. ${doc.name}
Speciality: ${doc.specialization}
Experience: ${doc.experience} Years
Available : ${doc.available}
Slots     : ${doc.slots.join(", ")}
-----------------------------------
`);
        });
    }

    // Check Doctor Availability
    function checkDoctorAvailability(doctorId) {

        const doctor = doctors.find(
            d => d.id === doctorId
        );

        if (!doctor) {
            console.log("Doctor not found");
            return;
        }

        console.log(
            `Dr. ${doctor.name} is ${
                doctor.available
                    ? "Available"
                    : "Not Available"
            }`
        );
    }

    // Book Appointment
    function bookAppointment(
        patientId,
        doctorId,
        slot
    ) {

        const patient = patients.find(
            p => p.id === patientId
        );

        const doctor = doctors.find(
            d => d.id === doctorId
        );

        if (!patient) {
            console.log("Patient not found");
            return;
        }

        if (!doctor) {
            console.log("Doctor not found");
            return;
        }

        if (!doctor.available) {
            console.log("Doctor not available");
            return;
        }

        if (!doctor.slots.includes(slot)) {
            console.log("Slot unavailable");
            return;
        }

        appointments.push({
            patientName: patient.name,
            doctorName: doctor.name,
            slot
        });

        // Remove booked slot
        doctor.slots = doctor.slots.filter(
            s => s !== slot
        );

        console.log(`
Appointment Confirmed
Patient : ${patient.name}
Doctor  : Dr. ${doctor.name}
Slot    : ${slot}
`);
    }

    // View Appointments
    function viewAppointments() {

        console.log("\nAppointments");

        appointments.forEach((a, index) => {
            console.log(
                `${index + 1}.
Patient: ${a.patientName}
Doctor : Dr. ${a.doctorName}
Slot   : ${a.slot}
`
            );
        });
    }

    return {
        addDoctor,
        addPatient,
        viewDoctors,
        checkDoctorAvailability,
        bookAppointment,
        viewAppointments
    };
}

const hospital = createHospital("Apollo");

hospital.addDoctor(
    1,
    "Sharma",
    "Cardiologist",
    15,
    [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM"
    ]
);

hospital.addDoctor(
    2,
    "Verma",
    "Neurologist",
    12,
    [
        "02:00 PM",
        "03:00 PM",
        "04:00 PM"
    ]
);

hospital.addPatient(
    101,
    "Gaurav",
    25,
    "Chest Pain"
);

hospital.addPatient(
    102,
    "Rahul",
    25,
    "Chest Pain"
);

hospital.addPatient(
    103,
    "Ram",
    25,
    "Fever"
);

hospital.viewDoctors();

hospital.bookAppointment(
    101,
    1,
    "10:00 AM"
);

hospital.viewAppointments();

hospital.viewDoctors();