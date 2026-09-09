import { NavLink } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-60 overflow-hidden bg-teal-50">
        <img
          src={doctor.picture.large}
          alt={`${doctor.name.first} ${doctor.name.last}`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-slate-900">
          Dr. {doctor.name.first} {doctor.name.last}
        </h2>

        <p className="mt-1 text-sm text-teal-600">{doctor.specialization}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-slate-500">{doctor.location.city}</span>

          <span className="rounded-lg bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-500">
            ★ 4.8
          </span>
        </div>

        <NavLink
          to={`/doctors/${doctor.login.uuid}`}
          state={{ doctor }}
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-teal-600"
        >
          View Profile
        </NavLink>
      </div>
    </div>
  );
}

export default DoctorCard;
