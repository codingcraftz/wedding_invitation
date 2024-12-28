import { WEDDING_DATE, WEDDING_TIME } from "./constants";

export const formatWeddingDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // 요일 계산
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weekday = weekdays[date.getDay()];

  return {
    numericDate: `${year}${month}${day}`,
    fullDate: `${year}.${month}.${day} ${weekday}`,
  };
};

export const formatWeddingTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours > 12 ? hours - 12 : hours;
  return `${String(formattedHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${ampm}`;
};

export const { numericDate, fullDate } = formatWeddingDate(WEDDING_DATE);
export const formattedTime = formatWeddingTime(WEDDING_TIME);
