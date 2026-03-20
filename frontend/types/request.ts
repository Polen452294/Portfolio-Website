export type RequestFormState = {
  name: string;
  contact: string;
  projectType: string;
  description: string;
  budget: string;
};

export const initialRequestForm: RequestFormState = {
  name: "",
  contact: "",
  projectType: "Telegram Bot",
  description: "",
  budget: "",
};

export type RequestStatus = "new" | "in_progress" | "done";

export type RequestItem = {
  id: number;
  name: string;
  contact: string;
  project_type: string;
  description: string;
  budget: string | null;
  status: RequestStatus;
  created_at: string;
};