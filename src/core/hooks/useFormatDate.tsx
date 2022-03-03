import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface UseFormatDateProps {
  date: string;
}

export const useFormatDate = ({ date }: UseFormatDateProps) => {
  if (date) {
    const dateTransform = new Date(date);
    const newDate = format(dateTransform, "dd 'de' MMMM", { locale: es });
    return { newDate };
  }
  return { newDate: '' };
};
