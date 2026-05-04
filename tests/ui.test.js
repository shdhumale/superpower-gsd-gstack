import { formatRelativeTime, createTicketElement } from '../src/ui.js';

describe('UI Functions', () => {
    describe('formatRelativeTime()', () => {
        it('returns "just now" for dates within 60 seconds', () => {
            const now = new Date();
            const thirtySecondsAgo = new Date(now.getTime() - 30 * 1000);
            expect(formatRelativeTime(thirtySecondsAgo)).toBe('just now');
        });

        it('returns minutes for periods under an hour', () => {
            const now = new Date();
            const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
            expect(formatRelativeTime(fiveMinutesAgo)).toBe('5m ago');
        });
    });

    describe('createTicketElement()', () => {
        it('adds the pulsing-red class to Critical tickets', () => {
            const ticket = {
                id: 'TKT-123',
                title: 'Server Down',
                status: 'Critical',
                createdAt: new Date()
            };
            const el = createTicketElement(ticket);
            expect(el.classList.contains('pulsing-red')).toBe(true);
        });

        it('does NOT add pulsing-red to Normal tickets', () => {
             const ticket = {
                id: 'TKT-124',
                title: 'Update Logo',
                status: 'Normal',
                createdAt: new Date()
            };
            const el = createTicketElement(ticket);
            expect(el.classList.contains('pulsing-red')).toBe(false);
        });
    });
});
