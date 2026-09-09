import { createContext, useContext, useEffect, useState } from "react";

export const DoctorContexts = createContext({
  doctors: [],
  loading: true,
  error: "",
});

export const useDoctor = () => {
  return useContext(DoctorContexts);
};

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=12&seed=doctorapp",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const data = await response.json();

        const specializations = [
          "Cardiologist",
          "Neurologist",
          "Dermatologist",
          "Orthopedic",
        ];

        const doctorsWithSpecialization = data.results.map((doctor, index) => ({
          ...doctor,
          specialization: specializations[index % specializations.length],
        }));

        setDoctors(doctorsWithSpecialization);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <DoctorContexts.Provider
      value={{
        doctors,
        loading,
        error,
      }}
    >
      {children}
    </DoctorContexts.Provider>
  );
};
