import { createContext, useContext, useState } from "react";

export const AppointmentContexts = createContext({
  appointments: [],
  addAppointment: () => {},
  cancelAppointment: () => {},
});

export const useAppointment = () => {
  return useContext(AppointmentContexts);
};

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [...prev, appointment]);
  };

  const cancelAppointment = (id) => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id),
    );
  };

  return (
    <AppointmentContexts.Provider
      value={{
        appointments,
        addAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppointmentContexts.Provider>
  );
};
