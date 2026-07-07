import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createBooking } from "../../api/bookingApi";
import { Loader2 } from "lucide-react";
import BookingInput from "./BookingInput";
import BookingSelect from "./BookingSelect";
import BookingTextarea from "./BookingTextarea";
import BookingSuccess from "./BookingSuccess";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [bookingId, setBookingId] = useState("");

  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  if (success) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [success]);
  const onSubmit = async (data) => {
    try {
      setErrorMessage("");

      setLoading(true);

      const response = await createBooking(data);

      setBookingId(response.data.booking.bookingId);

      reset();

      setSuccess(true);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const kathaTypes = [
    "Shrimad Bhagavat Katha",
    "Ram Katha",
    "Shiv Mahapuran",
    "Devi Bhagavat",
    "Bhajan Sandhya",
    "Spiritual Discourse",
    "Other",
  ];

  if (success) {
    return (
      <section className="bg-[#120700] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <BookingSuccess bookingId={bookingId} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#120700] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="
          rounded-[36px]
          border
          border-yellow-500/20
          bg-[#1A120C]
          p-8
          shadow-[0_0_60px_rgba(234,179,8,0.08)]
          md:p-12
          "
        >
          <h2 className="text-center text-4xl font-bold text-yellow-400">
            Booking Details
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center leading-8 text-gray-400">
            Fill in the information below and our team will contact you shortly
            to confirm your booking.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-14 space-y-12">
            {/* PERSONAL DETAILS */}

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-yellow-400">
                Personal Details
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                <BookingInput
                  label="Full Name"
                  name="fullName"
                  placeholder="Enter your full name"
                  register={register}
                  errors={errors}
                  rules={{
                    required: "Full Name is required",
                  }}
                />

                <BookingInput
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter phone number"
                  register={register}
                  errors={errors}
                  rules={{
                    required: "Phone Number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  }}
                />

                <BookingInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  register={register}
                  errors={errors}
                />

                <BookingInput
                  label="City"
                  name="city"
                  placeholder="Enter city"
                  register={register}
                  errors={errors}
                  rules={{
                    required: "City is required",
                  }}
                />

                <BookingInput
                  label="State"
                  name="state"
                  placeholder="Enter state"
                  register={register}
                  errors={errors}
                  rules={{
                    required: "State is required",
                  }}
                />
              </div>
            </div>

            {/* EVENT DETAILS */}

            <div>
              <h3 className="mb-6 text-2xl font-semibold text-yellow-400">
                Event Details
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                <BookingSelect
                  label="Katha Type"
                  name="kathaType"
                  register={register}
                  errors={errors}
                  options={kathaTypes}
                  rules={{
                    required: "Please select a Katha type",
                  }}
                />

                <BookingInput
                  label="Preferred Date"
                  name="date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  register={register}
                  errors={errors}
                  rules={{
                    required: "Please select a date",
                  }}
                />

                <BookingInput
                  label="Preferred Time"
                  name="time"
                  type="time"
                  register={register}
                  errors={errors}
                />

                <BookingInput
                  label="Expected Audience"
                  name="audience"
                  type="number"
                  rules={{
                    min: {
                      value: 1,
                      message: "Audience must be at least 1",
                    },
                    max: {
                      value: 100000,
                      message: "Please enter a realistic audience size",
                    },
                  }}
                  placeholder="Approximate number of attendees"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="mt-8">
                <BookingTextarea
                  label="Event Address"
                  name="address"
                  placeholder="Enter complete event address"
                  register={register}
                  errors={errors}
                />
              </div>

              <div className="mt-8">
                <BookingTextarea
                  label="Additional Message"
                  name="message"
                  placeholder="Anything you'd like us to know?"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            {/* SUBMIT */}

            {errorMessage && (
              <div
                className="
    rounded-xl
    border
    border-red-500/30
    bg-red-500/10
    p-4
    text-center
    text-red-300
    "
              >
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`
    w-full
    rounded-xl
    bg-gradient-to-r
    from-orange-500
    to-orange-700
    py-4
    text-lg
    font-semibold
    text-white
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-3
    ${
      loading
        ? "cursor-not-allowed opacity-70"
        : "hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98]"
    }
  `}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Submitting...
                </>
              ) : (
                "Submit Booking Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
