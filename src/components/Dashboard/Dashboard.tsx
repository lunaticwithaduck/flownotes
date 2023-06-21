import { Container, Stack } from "@mui/material";

import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
	const items = [1];

	return (
		<Container
			maxWidth="md"
			className={styles.container}
		>
			{items.length === 0 ? (
				<div></div>
			) : (
				<Stack spacing={4}>
					<div>3</div>
					<div>4</div>
				</Stack>
			)}
		</Container>
	);
};
