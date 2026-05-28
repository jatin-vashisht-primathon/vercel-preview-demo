import type { Metadata } from "next";
import PreWorkoutFaqsClient from "./PreWorkoutFaqsClient";

export const metadata: Metadata = {
  title: "Pre-Workout FAQs Guide: Benefits, Usage & Dosage",
  description:
    "Frequently Asked Questions About Pre-Workout — choosing the right supplement, timing, performance benefits, ingredients, safety, and Dynamite Pre-Workout specifics.",
};

export default function PreWorkoutFaqsPage() {
  return <PreWorkoutFaqsClient />;
}
