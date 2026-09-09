import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useDoctor } from "../contexts";

function DoctorDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { doctors, loading } = useDoctor();

  const doctor = doctors.find((doctor) => doctor.login.uuid === id);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-xl font-semibold text-teal-600">Loading doctor...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-900">Doctor not found</h1>

        <button
          onClick={() => navigate("/doctors")}
          className="mt-5 rounded-xl bg-teal-500 px-5 py-3 font-semibold text-white transition hover:bg-teal-600"
        >
          Back to Doctors
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          {/* Image */}
          <div className="h-80 overflow-hidden bg-teal-50">
            <img
              src={doctor.picture.large}
              alt={`${doctor.name.first} ${doctor.name.last}`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-500">
              Doctor Profile
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Dr. {doctor.name.first} {doctor.name.last}
            </h1>

            <p className="mt-2 text-lg font-medium text-teal-600">
              {doctor.specialization}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-400">Location</p>

                <p className="mt-1 font-semibold text-slate-800">
                  {doctor.location.city}, {doctor.location.country}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-400">Phone</p>

                <p className="mt-1 font-semibold text-slate-800">
                  {doctor.phone}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-400">Email</p>

                <p className="mt-1 break-all font-semibold text-slate-800">
                  {doctor.email}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-400">Rating</p>

                <p className="mt-1 font-semibold text-amber-500">★ 4.8 / 5</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => navigate("/doctors")}
                className="w-full rounded-xl border border-slate-200 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Back to Doctors
              </button>

              <button
                onClick={() => navigate(`/appointment/${doctor.login.uuid}`)}
                className="w-full rounded-xl bg-teal-500 py-4 font-semibold text-white transition hover:bg-teal-600"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
