import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getPublicSettings } from "../api/settingsApi";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);

  const [loading, setLoading] = useState(true);

  const refreshSettings = async () => {
    try {
      const data = await getPublicSettings();

      setSettings(data);
    } catch (error) {
      console.error(
        "Failed to load settings:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loading,
        refreshSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () =>
  useContext(SettingsContext);