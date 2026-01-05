
export const truncateText = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const generateId = () => Math.random().toString(36).substr(2, 9);
