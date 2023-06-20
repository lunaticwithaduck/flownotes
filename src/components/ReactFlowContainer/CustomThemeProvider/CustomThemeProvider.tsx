import { ThemeProvider, createTheme } from "@mui/material";

export const CustomThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const theme = createTheme({});

	return (
		<>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</>
	);
};
