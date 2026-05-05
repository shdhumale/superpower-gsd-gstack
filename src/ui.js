/**
 * @param {Date|number} date - A Date object or epoch milliseconds timestamp
 * @returns {string} Human-readable relative time string
 */
export function formatRelativeTime(date) {
    const diffSeconds = Math.floor((new Date() - date) / 1000);
    if (diffSeconds < 60) {
        return 'just now';
    }
    const diffMinutes = Math.floor(diffSeconds / 60);
    return `${diffMinutes}m ago`;
}

export function createTicketElement(ticket) {
    const el = document.createElement('div');
    if (ticket.status === 'Critical') {
        el.classList.add('pulsing-red');
    }
    return el;
}
