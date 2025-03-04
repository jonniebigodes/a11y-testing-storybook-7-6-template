export type ThemeType = "light" | "dark" | "purple" | "pink" | "eighties";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}
