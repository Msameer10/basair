import type { Metadata } from "next";
import { ScholarsReferencePage } from "../../../components/beyondQuran/ScholarsReferencePage";

export const metadata: Metadata = {
  title: "Scholars of Islam: A Selective Intellectual Chronology",
  description:
    "A searchable reference index of formative, Sunni, Twelver, Ismaili, and Zaydi scholars across Islamic intellectual history.",
};

export default function ScholarsOfIslamPage() {
  return <ScholarsReferencePage />;
}
