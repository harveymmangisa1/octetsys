
export interface FlyerState {
  step: number;
  image: {
    file: File | null;
    preview: string | null;
    isUploading: boolean;
  };
  quote: {
    type: 'predefined' | 'custom';
    text: string;
    author: string;
    selectedIndex?: number;
  };
  theme: {
    name: string;
    gradient: string;
  };
  isGenerating: boolean;
}

export interface Quote {
  text: string;
  author: string;
}

export interface GradientTheme {
  name: string;
  gradient: string; // Tailwind gradient class
  preview: string; // CSS gradient for preview
}
