import { MaterialIconButton } from '~/components/shared';

import Link from 'next/link';
import * as BrandIcons from './brand-icons';

function MatchIcon({ url }: { url: string }) {
	const matches = url.match(
		/^(?:(?<scheme>[A-Za-z][A-Za-z0-9+.-]*):(?:\/\/)?)?(?<userinfo>[^#/?]+(?::[^#/?]+)?@)?(?<host>(?:[A-Za-z0-9-]+)(?:\.[A-Za-z0-9-]+)*)(?<port>:[0-9]+)?(?<path>\/[^?#]*)?(?<query>\?[^#]+)?(?<fragment>#.+)?/,
	);
	const host = matches ? matches[3] : '';

	switch (true) {
		case host.includes('telegram'):
			return <BrandIcons.Telegram />;
		case host.includes('t.me'):
			return <BrandIcons.Telegram />;
		case host.includes('twitter'):
			return <BrandIcons.Twitter />;
		case host.includes('patreon'):
			return <BrandIcons.Patreon />;
		case host.includes('instagram'):
			return <BrandIcons.Instagram />;
		case host.includes('discord'):
			return <BrandIcons.Discord />;
		case host.includes('facebook'):
			return <BrandIcons.Facebook />;
		case host.includes('fb'):
			return <BrandIcons.Facebook />;
		case host.includes('youtube'):
			return <BrandIcons.YouTube />;
		case host.includes('youtu.be'):
			return <BrandIcons.YouTube />;
		case host.includes('vimeo'):
			return <BrandIcons.Vimeo />;
		case host.includes('whatsapp'):
			return <BrandIcons.WhatsApp />;
		case host.includes('pinterest'):
			return <BrandIcons.Pinterest />;
		case host.includes('pixiv'):
			return <BrandIcons.Pixiv />;
		case host.includes('booth'):
			return <BrandIcons.Booth />;
		default:
			return <BrandIcons.Default />;
	}
}

export default function StyledIcon({ type, url }: { type: 'icon' | 'button'; url: string }) {
	if (type === 'icon') {
		return <MatchIcon url={url} />;
	}

	if (type === 'button') {
		return (
			<MaterialIconButton>
				<Link href={url} target="_blank" rel="noopener noreferrer">
					<MatchIcon url={url} />
				</Link>
			</MaterialIconButton>
		);
	}

	return null;
}
