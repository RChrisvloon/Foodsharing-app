import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
	return (
		<main>
			<Header />
			<p>🔥 Let&apos;s get started! 🔥</p>
			<p>
				<Link href="/about" className=''>About us</Link>
				<Link href="/meals">Meals</Link>
				<Link href="/community">Community</Link>
			</p>
		</main>
	);
}
