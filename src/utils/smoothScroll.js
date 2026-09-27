/**
 * Custom ultra-smooth easeInOutCubic scrolling utility.
 * @param {string} elementId - ID of target section element without '#'
 * @param {number} duration - Scroll duration in ms (default 1100ms for luxurious slow motion)
 */
export function smoothScrollToId(elementId, duration = 1100) {
  const targetElement = document.getElementById(elementId);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 85;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // EaseInOutCubic easing curve: slow start, smooth middle, gentle landing
    const ease =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
