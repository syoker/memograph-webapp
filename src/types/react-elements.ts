import type {
	AnchorHTMLAttributes,
	BlockquoteHTMLAttributes,
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	HTMLAttributes,
	ImgHTMLAttributes,
	LiHTMLAttributes,
	OlHTMLAttributes,
	VideoHTMLAttributes,
} from 'react';

export type ReactLi = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
export type ReactPre = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
export type ReactCode = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export type ReactUList = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
export type ReactOList = DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
export type ReactImage = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
export type ReactVideo = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
export type ReactButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type ReactAnchor = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export type ReactElement = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export type ReactHeading = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
export type ReactParagraph = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
export type ReactBlockquote = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
