export interface NoteInfo {
  id: string;

  description: string | null;
  title: string;

  created_at: Date;
  updated_at: Date;
}
