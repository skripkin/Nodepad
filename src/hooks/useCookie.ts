export const setCookie = (name: string, value: object, days: number) => {
  if (typeof document !== "undefined") {
    const stringifiedValue = JSON.stringify(value);
    const expires = days
      ? `; expires=${new Date(
          Date.now() + days * 24 * 60 * 60 * 1000
        ).toUTCString()}`
      : "";
    document.cookie = `${name}=${stringifiedValue}${expires}; path=/`;
  }
};

export const getCookie = (name: string) => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(
      new RegExp(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)
    );
    return match ? JSON.parse(match.pop()!) : null;
  }
  return null;
};
