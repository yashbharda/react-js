import React from "react";
import { useAppointment } from "../contexts";

function Appointments() {
  const { appointments, cancelAppointment } = useAppointment();
  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-500">
            {" "}
            My Appointments
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Your appointments
          </h1>
          <p className="mt-3 text-slate-500">
            Manage your upcoming doctor appointments.
          </p>
        </div>
        {appointments.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              No appointments yet
            </h2>
            <p className="mt-2 text-slate-500">
              Book an appointment with a doctor to see it here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Dr. {appointment.doctorName}
                    </h2>
                    <p className="mt-1 text-teal-600">
                      {appointment.specialization}
                    </p>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600">
                    Confirmed
                  </span>
                </div>
                <div className="mt-6 space-y-3 rounded-2xl bg-slate-50 p-4">
                  <p>
                    <span className="font-semibold">Patient:</span>{" "}
                    {appointment.patientName}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {appointment.date}
                  </p>
                  <p>
                    <span className="font-semibold">Time:</span>{" "}
                    {appointment.time}
                  </p>
                </div>
                <button
                  onClick={() => cancelAppointment(appointment.id)}
                  className="mt-5 w-full rounded-xl border border-red-200 py-3 font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Cancel Appointment
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Appointments;
