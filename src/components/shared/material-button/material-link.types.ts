import type { LinkProps } from 'next/link';
import type { ReactAnchor } from '~/types/shared';

export type MaterialLink = LinkProps & { [K in keyof Omit<ReactAnchor, 'href' | 'ref'>]: ReactAnchor[K] } & {
	disabled?: boolean;
	variant: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
};
