import {NavLink} from "react-router-dom"

function Home() {
  return (
    <section className="min-h-[calc(100vh-90px)] bg-slate-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-medium text-teal-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            Trusted healthcare, made simple
          </div>

          <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            Your health deserves
            <span className="block text-teal-500">better care.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
            Find trusted doctors, book appointments easily, and manage your
            healthcare journey — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink to="/doctors" className="rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-teal-500/20 transition hover:-translate-y-1 hover:bg-teal-600">
              Find a Doctor →
            </NavLink>

            <button className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-teal-200 hover:text-teal-600">
              How it works
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">500+</h3>
              <p className="text-sm text-slate-500">Doctors</p>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">10k+</h3>
              <p className="text-sm text-slate-500">Patients</p>
            </div>

            <div className="h-10 w-px bg-slate-200"></div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">4.9/5</h3>
              <p className="text-sm text-slate-500">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          {/* Main Card */}
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] bg-teal-500 p-8 shadow-2xl shadow-teal-500/20">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10"></div>

            <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10"></div>

            <div className="relative">
              <p className="text-sm font-medium text-teal-100">TODAY'S CARE</p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                Find the right doctor
              </h2>

              <p className="mt-3 text-sm leading-6 text-teal-50">
                Connect with experienced specialists and get the care you need.
              </p>

              {/* Doctor Card */}
              <div className="mt-8 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl">
                    🩺
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Dr. Sarah Wilson
                    </h3>

                    <p className="text-sm text-slate-500">Cardiologist</p>

                    <div className="mt-1 flex items-center gap-1 text-sm text-amber-500">
                      ★★★★★
                      <span className="text-slate-400">4.9</span>
                    </div>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 -left-2 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-500">
                ✓
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Appointment Confirmed
                </p>

                <p className="text-xs text-slate-400">Your health matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
