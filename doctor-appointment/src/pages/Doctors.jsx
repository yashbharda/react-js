import { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { useDoctor } from "../contexts";

function Doctors() {
  const { doctors, loading, error } = useDoctor();

  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    const fullName = `${doctor.name.first} ${doctor.name.last}`;

    const matchesSearch = fullName.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialization =
      specialization === "All" || doctor.specialization === specialization;

    return matchesSearch && matchesSpecialization;
  });

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-xl font-semibold text-teal-600">
          Loading doctors...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-500">
            Our Specialists
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Find the right doctor
          </h1>

          <p className="mt-3 max-w-xl text-slate-500">
            Browse our experienced doctors and choose the specialist that best
            fits your healthcare needs.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-500 md:flex-1"
          />

          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-teal-500"
          >
            <option value="All">All Specializations</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Orthopedic">Orthopedic</option>
          </select>
        </div>

        {/* Doctors */}
        {filteredDoctors.length === 0 ? (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-slate-800">
              No doctors found
            </h2>

            <p className="mt-2 text-slate-500">
              Try another search or specialization.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.login.uuid} doctor={doctor} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Doctors;
