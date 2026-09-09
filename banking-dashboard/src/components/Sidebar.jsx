import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Accounts", path: "/accounts" },
    { name: "Transactions", path: "/transactions" },
    { name: "Transfer", path: "/transfer" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <aside className="min-h-screen w-64 bg-blue-900 p-5 text-white">
      <h2 className="mb-8 text-2xl font-bold text-orange-400">🏦 MyBank</h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-blue-100 hover:bg-blue-800"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
