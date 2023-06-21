import { Route, BrowserRouter, Routes } from "react-router-dom";
import Auth0ProviderWithRedirectCallback, { ProtectedRoute } from "./components/Auth0ProviderWithRedirectCallback";
import routes from "./constants/routes";

import Board from "./features/Board";

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
						path={routes.home}
						element={<ProtectedRoute component={Board} />}
					/>
				</Routes>
			</Auth0ProviderWithRedirectCallback>
		</BrowserRouter>
	);
};

export default App;
