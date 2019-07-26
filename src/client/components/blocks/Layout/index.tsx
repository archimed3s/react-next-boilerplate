import React, {FC} from 'react';
import GlobalStyles from '../../../common/styles/global';
import Header from '../Header';

const Layout: FC = ({children}) => {
	return (
		<>
			<GlobalStyles />
			<Header />
			{children}
		</>
	);
};

export default Layout;
