import { formatDistanceToNow } from "date-fns";

const formatRelativeTime = (date) => {
  const text = formatDistanceToNow(
    new Date(date),
    {
      addSuffix: true,
    }
  );

  return text === "less than a minute ago"
    ? "Just now"
    : text;
};

export default formatRelativeTime;