import React from 'react';

import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import FormLogin from './Components/FormLogin';

const Login = () => {
	return (
		<React.Fragment>
			<NavBar positionAppBar="fixed" />
			<FormLogin />
			<Footer />
		</React.Fragment>
	);
};

export default Login;
