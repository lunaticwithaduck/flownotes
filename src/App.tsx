import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import routes from "./constants/routes";

import Board from "./features/Board";

const ProtectedRoute = ({ component, ...args }: { component: React.FC<unknown> }) => {
	const Component = withAuthenticationRequired(component, args);
	return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }: any) => {
	const navigate = useNavigate();
	const onRedirectCallback = (appState: any) => {
		navigate((appState && appState.returnTo) || window.location.pathname);
	};
	return (
		<Auth0Provider
			onRedirectCallback={onRedirectCallback}
			{...props}
		>
			{children}
		</Auth0Provider>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<Auth0ProviderWithRedirectCallback
				domain={import.meta.env.VITE_AUTH0_DOMAIN}
				clientId={import.meta.env.VITE_CLIENT_ID}
				authorizationParams={{
					redirect_uri: window.location.origin,
				}}
			>
				<Routes>
					<Route
						path={routes.dashboard}
						element={<ProtectedRoute component={Board} />}
					/>
					<Route
						path="/"
						element={<ProtectedRoute component={Board} />}
					/>
				</Routes>
			</Auth0ProviderWithRedirectCallback>
		</BrowserRouter>
	);
};

export default App;
