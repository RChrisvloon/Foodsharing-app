import Link from 'next/link';

const MealsPage = () => {
	return (
		<main>
			<h1>Meals Page</h1>
			<p>
				<Link href="meals/share">Share a meal</Link>
			</p>
		</main>
	);
};

export default MealsPage;
