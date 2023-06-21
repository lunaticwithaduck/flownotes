import { useNavigate } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";

export const ProtectedRoute = ({ component, ...args }: { component: React.FC<unknown> }) => {
	const Component = withAuthenticationRequired(component, args);
	return <Component />;
};

export const Auth0ProviderWithRedirectCallback: React.FC<PropsWithChildren<any>> = ({ children, ...props }) => {
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
