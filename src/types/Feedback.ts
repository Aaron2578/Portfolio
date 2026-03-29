export interface Feedback {
  id: number;
  name: string;
  degree: string;
  course: string;
  rating: number;
  review: string;
  timestamp?: string; // optional if your JSON has timestamps
}