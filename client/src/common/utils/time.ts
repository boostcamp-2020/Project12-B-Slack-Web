const untisOfTime = {
  seconds: 1,
  minutes: 60,
  hours: 60 * 60,
  days: 24 * 60 * 60,
  months: ((365 + 365 + 365 + 365 + 366) / 5 / 12) * 24 * 60 * 60,
  years: ((365 + 365 + 365 + 365 + 366) / 5) * 24 * 60 * 60
};

const timeAgo = (date: Date): string => {
  const timeDiff = (new Date().getTime() - date.getTime()) / 1000;

  const minutes = timeDiff / untisOfTime.minutes;
  const hours = timeDiff / untisOfTime.hours;
  const days = timeDiff / untisOfTime.days;
  const months = timeDiff / untisOfTime.months;
  const years = timeDiff / untisOfTime.years;

  if (minutes < 1) return `1 minute ago`;
  if (minutes < 60) return `${Math.round(minutes)} minute ago`;
  if (hours < 24) return `${Math.round(hours)} hours ago`;
  if (days < 31) return `${Math.round(days)} days ago`;
  if (months < 12) return `${Math.round(months)} months ago`;
  return `${Math.round(years)} years ago`;
};

const getTimeConversionValue = (date: Date): string => {
  const time = new Date(date);
  return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

export { timeAgo, getTimeConversionValue };
