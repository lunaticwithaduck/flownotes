import { Route, BrowserRouter, Routes } from "react-router-dom";
import Auth0ProviderWithRedirectCallback, { ProtectedRoute } from "./components/Auth0ProviderWithRedirectCallback";
import routes from "./constants/routes";

import Flow from "./features/Flow";
import Dashboard from "./components/Dashboard";

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
						path={routes.DASHBOARD}
						element={<ProtectedRoute component={Dashboard} />}
					/>
					<Route
						path={routes.BOARD}
						element={<ProtectedRoute component={Flow} />}
					/>
					<Route
						path={routes.HOME}
						element={<ProtectedRoute component={Flow} />}
					/>
				</Routes>
			</Auth0ProviderWithRedirectCallback>
		</BrowserRouter>
	);
};

export default App;
