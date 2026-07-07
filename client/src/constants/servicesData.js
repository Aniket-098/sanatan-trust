import {
  BookOpen,
  GraduationCap,
  Heart,
  Sparkles,
  CalendarDays,
  Users,
  Building2,
  Globe,
} from "lucide-react";

export const mainServices = [
  {
    id: 1,
    title: "Katha Sessions",
    icon: BookOpen,
    reverse: false,

    description:
      "Immerse yourself in the profound wisdom of sacred texts through regular katha sessions conducted by our Acharyas.",

    points: [
      "Bhagavad Gita discourse",
      "Ramayana Katha",
      "Bhagavata Purana",
      "Shiv Mahapurana",
      "Spiritual Q&A Sessions",
    ],
  },

  {
    id: 2,
    title: "Free Education Programs",
    icon: GraduationCap,
    reverse: true,

    description:
      "Education is the foundation of a prosperous society. We ensure every child receives quality education regardless of financial background.",

    points: [
      "Free tuition classes",
      "Scholarship programs",
      "Book distribution",
      "Career guidance",
    ],
  },

  {
    id: 3,
    title: "Community Welfare",
    icon: Heart,
    reverse: false,

    description:
      "Serving society through healthcare camps, food distribution and humanitarian activities.",

    points: [
      "Medical camps",
      "Food distribution",
      "Senior citizen support",
      "Emergency assistance",
    ],
  },

  {
    id: 4,
    title: "Dharma Propagation",
    icon: Sparkles,
    reverse: true,

    description:
      "Promoting Sanatan Dharma through literature, workshops and cultural events.",

    points: [
      "Spiritual books",
      "Cultural festivals",
      "Youth camps",
      "Workshops",
    ],
  },
];

export const additionalServices = [
  {
    title: "Event Organization",
    icon: CalendarDays,
    description:
      "We organize spiritual gatherings, festivals and community events.",
  },

  {
    title: "Volunteer Programs",
    icon: Users,
    description:
      "Join our volunteers and contribute towards community service.",
  },

  {
    title: "Temple Services",
    icon: Building2,
    description:
      "Temple maintenance and religious ceremonies.",
  },

  {
    title: "Online Resources",
    icon: Globe,
    description:
      "Access kathas, books and educational material online.",
  },
];