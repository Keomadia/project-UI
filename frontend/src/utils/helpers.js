export const capitalizeKey = (key) => {
    const formattedKey = key === "lvl" ? "Level" : key === "matNo" ? "Reg No." : key;
    return formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);
  };



export const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};


export const formatDate = (date, options) => {
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const getCurrentTime = () => {
  const date = new Date();
  return date.toTimeString().split(' ')[0]; // Returns time in HH:MM:SS format
};

export const getFriendlyDate = (date) => {
  return formatDate(date, { year: 'numeric', month: 'long', day: 'numeric' });
};

export const getDateDifference = (date1, date2) => {
  const diffTime = Math.abs(new Date(date2) - new Date(date1));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Returns difference in days
};


export const getPersonRole = () => {
  const hour = new Date().getHours();
  return hour % 2 === 0 ? "student" : "lecturer";
};
