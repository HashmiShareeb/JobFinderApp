export interface Job {
  id: number;
  company_name: string;
  logo: string | null;
  title: string;
  type: string;
  location: string;
  date: string;
  description: string;
  isBookmarked: boolean;
}
