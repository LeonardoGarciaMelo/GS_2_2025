export interface Entry {
  id: number;
  date: string;
  stress: number;
  sleep: number;
  productivity: number;
  mood: number;
  tasks: number;
}

export interface EntryFormData {
  stress: number;
  sleep: string;
  productivity: number;
  mood: number;
  tasks: string;
}

export interface StatCardProps {
  value: string | number;
  label: string;
  color: 'blue' | 'red' | 'green' | 'yellow';
}

export interface RatingSelectorProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
}

export interface InsightCardProps {
  insights: string[];
}

export interface HistoryCardProps {
  entry: Entry;
  onDelete: (id: number) => void;
}

export interface AddEntryModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (entry: EntryFormData) => void;
}