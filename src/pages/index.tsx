import * as React from 'react';
import type { NextPage } from 'next';
import {
	ContactPanel,
	HeroPanel,
	MyWorkPanel,
	PageTransition,
} from '@components';

const Home: NextPage = () => {
	return (
		<PageTransition>
			<HeroPanel />
			<MyWorkPanel />
			<ContactPanel />
		</PageTransition>
	);
};

export default Home;
