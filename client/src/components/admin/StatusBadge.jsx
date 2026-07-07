const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-yellow-500/20 text-yellow-400",
    Approved: "bg-green-500/20 text-green-400",
    Rejected: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-sm
        font-medium
        ${styles[status] || "bg-slate-700 text-white"}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;