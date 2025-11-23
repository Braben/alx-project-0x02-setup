export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  sizes?: "small" | "medium" | "large";
  shapes?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full";
  className: string;
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
