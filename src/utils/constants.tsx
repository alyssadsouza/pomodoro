export const sessionCount = 4;

export const sessionLengths = [25 * 60, 45 * 60, 60 * 60];

const sessionToBreak: { [key: string]: number } = {
  "25": 5 * 60,
  "45": 10 * 60,
  "60": 15 * 60,
};

export function getBreakLength(sessionLength: number) {
  return sessionToBreak[sessionLength.toString()] || sessionToBreak["25"];
}

export function displayTime(seconds: number) {
    return new Date(seconds * 1000).toISOString().substring(14, 19);
}