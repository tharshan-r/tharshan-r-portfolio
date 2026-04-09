import { createContext, useContext, useState, ReactNode } from "react";

interface EngineeringModeContextType {
  engineeringMode: boolean;
  toggleEngineeringMode: () => void;
}

const EngineeringModeContext = createContext<EngineeringModeContextType>({
  engineeringMode: false,
  toggleEngineeringMode: () => {},
});

export const EngineeringModeProvider = ({ children }: { children: ReactNode }) => {
  const [engineeringMode, setEngineeringMode] = useState(false);

  const toggleEngineeringMode = () => setEngineeringMode((prev) => !prev);

  return (
    <EngineeringModeContext.Provider value={{ engineeringMode, toggleEngineeringMode }}>
      {children}
    </EngineeringModeContext.Provider>
  );
};

export const useEngineeringMode = () => useContext(EngineeringModeContext);
