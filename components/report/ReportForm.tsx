"use client";
import { useState, useCallback } from "react";

const REPORT_TYPES = [
  "Theft",
  "Fire Outbreak",
  "Medical Emergency",
  "Natural Disaster",
  "Violence",
  "Other",
] as const;

type ReportType = "EMERGENCY" | "NON_EMERGENCY";


interface ReportFormProps {
    onComplete: (data: any) => void;
}


export default function ReportForm({ onComplete }: ReportFormProps) {

    const [formData, setFormData] = useState({
        incidentType: "" as ReportType,
        specificType: "",
        location: "",
        description: "",
        title: "",
    });

    const [image, setImage] = useState<string | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [coordinates, setCoordinates] = useState<{
        latitude: number | null;
        longitude: number | null;
      }>({
        latitude: null,
        longitude: null,
      });
    const [isSubmitting, setIsSubmitting] = useState(false);

}
