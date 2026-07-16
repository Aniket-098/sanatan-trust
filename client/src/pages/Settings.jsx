import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import {
  Settings2,
  Building2,
  HeartHandshake,
  Phone,
  Globe2,
} from "lucide-react";

import AdminLayout from "../components/layout/AdminLayout";
import { getSettings, updateSettings } from "../api/settingsApi";
import { getToken } from "../components/utils/auth";
import SettingCard from "../components/admin/SettingCard";
import SettingsDrawer from "../components/admin/SettingsDrawer";
import SettingsInput from "../components/admin/SettingsInput";
import SettingsTextarea from "../components/admin/SettingsTextarea";
import ImageUploader from "../components/admin/ImageUploader";

const Settings = () => {
  const [activeSection, setActiveSection] = useState(null);

  const [settings, setSettings] = useState({
    general: {
      trustName: "",
      address: "",
    },

    contact: {
      email: "",
      phone: "",
    },

    donation: {
      upiId: "",
      qrCode: "",
      razorpayEnabled: true,
      upiEnabled: true,
    },

    social: {
      facebook: "",
      instagram: "",
      youtube: "",
    },
  });

  const updateSection = (section, field, value) => {
    setSettings((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],

        [field]: value,
      },
    }));
  };

  const token = getToken();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings(token);

        setSettings({
          general: data.general,
          contact: data.contact,
          donation: data.donation,
          social: data.social,
        });
      } catch (error) {
        console.error(error);

        toast.error("Failed to load settings.");
      }
    };

    fetchSettings();
  }, [token]);

  const getDrawerTitle = () => {
    switch (activeSection) {
      case "general":
        return "General Information";

      case "contact":
        return "Contact Information";

      case "donation":
        return "Donation Settings";

      case "social":
        return "Social Media";

      default:
        return "Settings";
    }
  };

  const handleSave = async () => {
    if (!activeSection) return;

    try {
      await updateSettings(settings, token);

      toast.success("Settings updated successfully.");

      setActiveSection(null);
    } catch (error) {
      console.error(error);

      toast.error("Failed to update settings.");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}

        <div
          className="
            rounded-3xl
            border
            border-slate-700
            bg-gradient-to-r
            from-[#111827]
            to-[#1E293B]
            p-8
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-amber-500/10
              "
            >
              <Settings2 size={34} className="text-amber-400" />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white">Settings</h1>

              <p className="mt-2 text-slate-400">
                Manage your trust information and website settings.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-6 lg:grid-cols-2">
          <SettingCard
            icon={Building2}
            title="General Information"
            description="Trust name, address and basic details."
            onClick={() => setActiveSection("general")}
          />

          <SettingCard
            icon={HeartHandshake}
            title="Donation Settings"
            description="UPI ID, QR Code and payment methods."
            onClick={() => setActiveSection("donation")}
          />

          <SettingCard
            icon={Phone}
            title="Contact Information"
            description="Phone numbers and email addresses."
            onClick={() => setActiveSection("contact")}
          />

          <SettingCard
            icon={Globe2}
            title="Social Media"
            description="Facebook, Instagram and YouTube links."
            onClick={() => setActiveSection("social")}
          />
        </div>
      </div>

      {/* Drawer */}

      <SettingsDrawer
        open={activeSection !== null}
        title={getDrawerTitle()}
        description="Update your website information."
        onClose={() => setActiveSection(null)}
        onSave={handleSave}
      >
        {/* General */}

        {activeSection === "general" && (
          <div className="space-y-6">
            <SettingsInput
              label="Trust Name"
              placeholder="Sanatan Trust"
              value={settings.general?.trustName || ""}
              onChange={(e) =>
                updateSection("general", "trustName", e.target.value)
              }
            />

            <SettingsTextarea
              label="Address"
              placeholder="Enter trust address"
              value={settings.general?.address || ""}
              onChange={(e) =>
                updateSection("general", "address", e.target.value)
              }
            />
          </div>
        )}

        {/* Contact */}

        {activeSection === "contact" && (
          <div className="space-y-6">
            <SettingsInput
              label="Email Address"
              placeholder="contact@sanatantrust.org"
              type="email"
              value={settings.contact?.email || ""}
              onChange={(e) =>
                updateSection("contact", "email", e.target.value)
              }
            />

            <SettingsInput
              label="Phone Number"
              placeholder="+91 9876543210"
              value={settings.contact?.phone || ""}
              onChange={(e) =>
                updateSection("contact", "phone", e.target.value)
              }
            />
          </div>
        )}

        {/* Donation */}

        {activeSection === "donation" && (
          <div className="space-y-6">
            <SettingsInput
              label="UPI ID"
              placeholder="trust@oksbi"
              value={settings.donation?.upiId || ""}
              onChange={(e) =>
                updateSection("donation", "upiId", e.target.value)
              }
            />

            <ImageUploader
              label="QR Code"
              value={settings.donation?.qrCode || ""}
              onUpload={(url) => updateSection("donation", "qrCode", url)}
            />

            <label className="flex items-center justify-between rounded-2xl border border-slate-700 bg-[#111827] p-5">
              <div>
                <h3 className="font-semibold text-white">Enable Razorpay</h3>

                <p className="text-sm text-slate-400">
                  Allow users to pay using Razorpay.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.donation?.razorpayEnabled ?? true}
                onChange={(e) =>
                  updateSection("donation", "razorpayEnabled", e.target.checked)
                }
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between rounded-2xl border border-slate-700 bg-[#111827] p-5">
              <div>
                <h3 className="font-semibold text-white">Enable UPI QR</h3>

                <p className="text-sm text-slate-400">
                  Display the QR code payment option.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.donation?.upiEnabled ?? true}
                onChange={(e) =>
                  updateSection("donation", "upiEnabled", e.target.checked)
                }
                className="h-5 w-5"
              />
            </label>
          </div>
        )}

        {/* Social */}

        {activeSection === "social" && (
          <div className="space-y-6">
            <SettingsInput
              label="Facebook"
              placeholder="https://facebook.com/..."
              value={settings.social?.facebook || ""}
              onChange={(e) =>
                updateSection("social", "facebook", e.target.value)
              }
            />

            <SettingsInput
              label="Instagram"
              placeholder="https://instagram.com/..."
              value={settings.social.instagram || ""}
              onChange={(e) =>
                updateSection("social", "instagram", e.target.value)
              }
            />

            <SettingsInput
              label="YouTube"
              placeholder="https://youtube.com/..."
              value={settings.social.youtube || ""}
              onChange={(e) =>
                updateSection("social", "youtube", e.target.value)
              }
            />
          </div>
        )}
      </SettingsDrawer>
    </AdminLayout>
  );
};

export default Settings;
