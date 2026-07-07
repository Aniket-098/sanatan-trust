import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Download, Loader2 } from "lucide-react";

import AdminLayout from "../layout/AdminLayout";
import ConfirmationModal from "../common/ConfirmationModal";
import {
  getDonations,
  deleteDonation,
  exportDonations,
} from "../../api/adminDonationApi";
import DonationDetailsModal from "./DonationDetailsModal";
import DonationTable from "./DonationTable";

const DonationsManagement = () => {
  const [donations, setDonations] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [selectedDonation, setSelectedDonation] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [donationToDelete, setDonationToDelete] = useState(null);

  const [exportLoading, setExportLoading] = useState(false);

  const fetchDonations = async () => {
    try {
      const { data } = await getDonations();

      setDonations(data.donations);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load donations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleDeleteClick = (donation) => {
    setDonationToDelete(donation);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedDonation) return;

    try {
      setDeleteLoading(true);

      await deleteDonation(donationToDelete._id);

      setDonations((prev) =>
        prev.filter((d) => d._id !== selectedDonation._id),
      );

      toast.success("Donation deleted successfully.");

      setDeleteModalOpen(false);

      setSelectedDonation(null);
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete donation.");
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      setExportLoading(true);

      const response = await exportDonations();

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;

      link.setAttribute("download", "donations.xlsx");

      document.body.appendChild(link);

      link.click();

      link.remove();

      toast.success("Excel exported successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Export failed.");
    } finally {
      setExportLoading(false);
    }
  };

  const filteredDonations = donations.filter((donation) => {
    const search = searchTerm.toLowerCase();

    return (
      donation.donorName.toLowerCase().includes(search) ||
      donation.phone.includes(search) ||
      donation.razorpayPaymentId.toLowerCase().includes(search)
    );
  });

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
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by donor, phone or Payment ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
      w-full
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
        </div>
        <div
          className="
          rounded-2xl
          border
          border-slate-700
          bg-[#111827]
          p-6
        "
        >
          {loading ? (
            <div className="flex h-72 items-center justify-center">
              <div className="flex items-center gap-3 text-slate-300">
                <Loader2 size={24} className="animate-spin" />
                <span>Loading donations...</span>
              </div>
            </div>
          ) : (
            <DonationTable
              donations={filteredDonations}
              onView={setSelectedDonation}
              onDelete={handleDeleteClick}
            />
          )}
        </div>
      </div>

      <ConfirmationModal
        open={deleteModalOpen}
        title="Delete Donation"
        message={
          selectedDonation
            ? `Are you sure you want to delete the donation made by "${selectedDonation.donorName}"? This action cannot be undone.`
            : ""
        }
        confirmText="Delete"
        cancelText="Cancel"
        loading={deleteLoading}
        onCancel={() => {
          setDeleteModalOpen(false);
          setSelectedDonation(null);
        }}
        onConfirm={handleDeleteConfirm}
      />

      <DonationDetailsModal
        donation={selectedDonation}
        onClose={() => setSelectedDonation(null)}
      />
    </AdminLayout>
  );
};

export default DonationsManagement;
