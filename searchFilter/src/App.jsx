import { useCallback, useState } from "react";
import "./App.css";

function App() {

  const users = ["Yash", "Satiyo", "Raju", "Karnyo", "Vishlo"]
  const [search, setSearch] = useState("");
  const filterUsers = useCallback(() => {
    return users.filter((users) => 
      users.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  return (
    <>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            User Search
          </h1>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              placeholder="Search user..."
              className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 rounded-lg font-semibold"
            onClick={() => setSearch("")}
            >
              Clear
            </button>
          </div>
          <h2 className="text-xl font-semibold text-white mb-3">Users</h2>
          <div className="space-y-2">


            {filterUsers().length > 0 ? (
            filterUsers().map((user) => (
              <div key={user} className="bg-gray-700 text-white px-4 py-3 rounded-lg mt-1">
                {user}
              </div>
            ))
          ) : (
              <p className="text-red-600 text-center">User not Found</p>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
