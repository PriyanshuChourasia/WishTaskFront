export const formatDateTimeLocalIST = (timestamp: number): string => {
    
  const date = String(timestamp).length > 10 ?  new Date(timestamp) : new Date(timestamp * 1000);

  const formatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const get = (type: string) => parts.find(p => p.type === type)?.value || '00';

  const year = get('year');
  const month = get('month');
  const day = get('day');
  const hour = get('hour');
  const minute = get('minute');

  return `${year}-${month}-${day}T${hour}:${minute}`;
};
