import { z } from 'zod';

export const schema = z.object({
	name: z.string().min(1),
	email: z.string().email()
});

export type Message = {
	type: 'success' | 'error';
	text: string;
};