
// This file is deprecated - use sonner toast instead
export const useToast = () => {
  console.warn('useToast is deprecated, use sonner toast instead');
  return {
    toast: () => {},
    dismiss: () => {}
  };
};

export const toast = () => {
  console.warn('toast is deprecated, use sonner toast instead');
};
