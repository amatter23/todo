import toast from 'react-hot-toast';

export const useToast = () => {
  const showToast = {
    success: message => {
      toast.success(message);
    },
    error: message => {
      toast.error(message);
    },
    loading: message => {
      return toast.loading(message);
    },
    dismiss: toastId => {
      toast.dismiss(toastId);
    },
  };

  return showToast;
};