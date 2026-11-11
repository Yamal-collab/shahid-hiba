export function getEventDateInfo(event) {
  if (!event?.dateTime) return null;
  const instant = new Date(event.dateTime);
  if (!Number.isFinite(instant.getTime())) return null;

  const offset = event.dateTime.match(/([+-])(\d\d):(\d\d)$/);
  const localDate = offset
    ? new Date(instant.getTime() + (offset[1] === '-' ? -1 : 1) * (Number(offset[2]) * 60 + Number(offset[3])) * 60_000)
    : instant;

  return {
    instant,
    localDate,
    format: (options) => new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', ...options }).format(localDate),
  };
}

export function formatEventDateLine(event) {
  const dateInfo = getEventDateInfo(event);
  if (!dateInfo) return '';
  return `${dateInfo.format({ weekday: 'long' })} · ${dateInfo.format({ day: 'numeric', month: 'long', year: 'numeric' })}`;
}
