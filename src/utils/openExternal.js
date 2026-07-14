// window.open returns null when a popup blocker intercepts it — this happens silently
// on mobile Safari by default. Falls back to telling the user instead of doing nothing.
export const openExternal = (url) => {
  const win = window.open(url, '_blank');
  if (!win) {
    alert('Your browser blocked this pop-up. Please allow pop-ups for this site, or copy this link:\n\n' + url);
  }
  return win;
};
