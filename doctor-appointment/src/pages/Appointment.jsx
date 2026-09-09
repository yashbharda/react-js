import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDoctor } from "../contexts";
import { CircleCheck } from "lucide-react";
import { useAppointment } from "../contexts";

function Appointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { doctors, loading } = useDoctor();
  const { addAppointment } = useAppointment();

  const doctor = doctors.find((doctor) => doctor.login.uuid === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      id: Date.now(),
      doctorId: doctor.login.uuid,
      doctorName: `${doctor.name.first} ${doctor.name.last}`,
      specialization: doctor.specialization,
      patientName: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
    };
    addAppointment(appointment);
    setSubmitted(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-xl font-semibold text-teal-600">Loading...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-900">Doctor not found</h1>

        <button
          onClick={() => navigate("/doctors")}
          className="mt-5 rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white"
        >
          Back to Doctors
        </button>
      </div>
    );
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl">
            <CircleCheck className="h-9 w-9 text-teal-500" />
          </div>
          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Appointment Confirmed!
          </h1>

          <p>
            Your Appointment with Dr. {doctor.name.first}{" "}
            {doctor.name.last} has been booked.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-left">
            <p>
              <span className="font-semibold">Date:</span> {formData.date}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Time:</span> {formData.time}
            </p>

            <button
              onClick={() => navigate("/doctors")}
              className="mt-6 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-white hover:bg-teal-600"
            >
              Back to Doctors
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-500">
            Book Appointment
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Schedule your appointment
          </h1>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <img
            src={doctor.picture.large}
            alt={`${doctor.name.first} ${doctor.name.last}`}
            className="h-64 w-full rounded-2xl object-cover"
          />
          <h2 className="mt-5 text-xl font-bold text-slate-900">
            Dr. {doctor.name.first} {doctor.name.last}
          </h2>
          <p className="mt-1 text-teal-600">{doctor.specialization}</p>
          <p className="mt-3 text-sm text-slate-500">
            {doctor.location.city}, {doctor.location.country}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-lg lg:col-span-2"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Appointment Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-teal-500"
              />
            </div>
            {/* Time */}
            <div className="mt-5">
              <label className="mb-3 block text-sm font-semibold text-slate-700">
                Select Time
              </label>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map(
                  (time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          time,
                        }))
                      }
                      className={`rounded-xl border py-3 text-sm font-semibold transition ${formData.time === time ? "border-teal-500 bg-teal-500 text-white" : "border-slate-200 text-slate-600 hover:border-teal-500"}`}
                    >
                      {time}
                    </button>
                  ),
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-teal-600"
            >
              Confirm Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Appointment;
