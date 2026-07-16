import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import DonationHero from "../components/donate/DonationHero";
import DonationCauses from "../components/donate/DonationCauses";
import TrustSection from "../components/donate/TrustSection";
import ImpactStats from "../components/donate/ImpactStats";
import DonationQuote from "../components/donate/DonationQuote";
import DonationFAQ from "../components/donate/DonationFAQ";
import DonationForm from "../components/donate/DonationForm";
import WhyDonate from "../components/donate/WhyDonate";

import { getPublicSettings } from "../api/settingsApi";

const Donate = () => {
  const [searchParams] = useSearchParams();

  const amount = Number(searchParams.get("amount")) || 501;

  const [selectedAmount, setSelectedAmount] = useState(amount);

  const [settings, setSettings] = useState(null);

  const [loadingSettings, setLoadingSettings] = useState(true);

  const [formData, setFormData] = useState({
    donorName: "",
    email: "",
    phone: "",
    purpose: "",
  });

  useEffect(() => {
  const fetchSettings = async () => {
    try {
      const data = await getPublicSettings();

      setSettings(data);
    } catch (error) {
      console.error("Failed to load public settings:", error);
    } finally {
      setLoadingSettings(false);
    }
  };

  fetchSettings();
}, []);

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#120802]
        via-[#1A120B]
        to-[#120802]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-32
          h-[800px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/10
          blur-[220px]
        "
      />

      <div className="relative z-10">

        {/* Hero */}

        <section className="px-6 pb-10 pt-36">

          <div className="mx-auto max-w-7xl">

            <DonationHero />

          </div>

        </section>

        {/* Main Section */}

        <section className="px-6 pb-24">

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              gap-20
              lg:grid-cols-[1fr_480px]
            "
          >

            {/* LEFT */}

            <div>

              <DonationCauses />

              <ImpactStats />

              <TrustSection />

              <DonationQuote />

              <WhyDonate />

            </div>

            {/* RIGHT */}

            <div className="lg:sticky lg:top-28 lg:self-start">

              <DonationForm
                formData={formData}
                setFormData={setFormData}
                selectedAmount={selectedAmount}
                setSelectedAmount={setSelectedAmount}
                donationSettings={settings?.donation}
                loadingSettings={loadingSettings}
              />

            </div>

          </div>

        </section>

        {/* FAQ */}

        <section className="px-6 pb-28">

          <div className="mx-auto max-w-7xl">

            <DonationFAQ />

          </div>

        </section>

      </div>

    </div>
  );
};

export default Donate;