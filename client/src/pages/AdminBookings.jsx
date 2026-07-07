import { useEffect, useState } from "react";
import { Loader2, Download } from "lucide-react";
import toast from "react-hot-toast";

import ConfirmationModal from "../components/common/ConfirmationModal";
import BookingDetailsModal from "../components/admin/BookingDetailsModal";
import AdminLayout from "../components/layout/AdminLayout";
import BookingsTable from "../components/admin/BookingsTable";
import {
  getBookings,
  updateBookingStatus,
  deleteBooking,
  exportBookings,
} from "../api/adminBookingApi";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [exportLoading, setExportLoading] = useState(false);

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await getBookings();

        setBookings(data.bookings);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const { data } = await updateBookingStatus(id, status);

      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === data.booking._id ? data.booking : booking,
        ),
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to update booking.");
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm) ||
      booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleDeleteClick = (booking) => {
    setSelectedBooking(booking);

    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedBooking) return;

    try {
      setDeleteLoading(true);

      await deleteBooking(selectedBooking._id);

      setBookings((prev) =>
        prev.filter((booking) => booking._id !== selectedBooking._id),
      );

      setDeleteModalOpen(false);

      setSelectedBooking(null);

      toast.success("Booking deleted successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete booking.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      setExportLoading(true);

      const response = await exportBookings();

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "bookings.xlsx");

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("Excel exported successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to export bookings.");
    } finally {
      setExportLoading(false);
    }
  };

  const exportButton = (
    <button
      onClick={handleExport}
      disabled={exportLoading}
      className="
      flex
      items-center
      gap-2
      rounded-xl
      bg-green-600
      px-5
      py-3
      font-semibold
      text-white
      transition
      hover:bg-green-700
      disabled:opacity-60
    "
    >
      {exportLoading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          Exporting...
        </>
      ) : (
        <>
          <Download size={18} />
          Export Excel
        </>
      )}
    </button>
  );

  return (
    <AdminLayout topbarActions={exportButton}>
      <div className="space-y-8">
        <div className="flex items-center justify-end"></div>

        <div className="mb-6 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Search by name, phone or Booking ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
      flex-1
      rounded-xl
      border
      border-slate-700
      bg-slate-900
      px-5
      py-3
      text-white
      outline-none
      focus:border-amber-500
    "
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="
      rounded-xl
      border
      border-slate-700
      bg-slate-900
      px-5
      py-3
      text-white
      outline-none
      focus:border-amber-500
    "
          >
            <option>All</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-[#111827] p-6">
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="flex items-center gap-3 text-slate-300">
                <Loader2 size={24} className="animate-spin" />
                <span>Loading bookings...</span>
              </div>
            </div>
          ) : (
            <BookingsTable
              bookings={filteredBookings}
              onStatusChange={handleStatusChange}
              onView={setSelectedBooking}
              onDelete={handleDeleteClick}
            />
          )}
        </div>
      </div>
      <BookingDetailsModal
        booking={selectedBooking}
        onClose={() => setSelectedBooking(null)}
      />
      <ConfirmationModal
        open={deleteModalOpen}
        title="Delete Booking"
        message={
          selectedBooking
            ? `Are you sure you want to delete booking "${selectedBooking.bookingId}"? This action cannot be undone.`
            : ""
        }
        confirmText="Delete"
        cancelText="Cancel"
        loading={deleteLoading}
        onCancel={() => {
          setDeleteModalOpen(false);
          setSelectedBooking(null);
        }}
        onConfirm={handleDeleteConfirm}
      />
    </AdminLayout>
  );
};

export default AdminBookings;
