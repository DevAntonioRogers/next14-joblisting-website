export interface jobType {
  id: string;
  name: string;
  img: string | null
  author: string;
  salary: number | null
  location: string;
  description: string;
  employmentType: string | null
  createdAt: Date
}