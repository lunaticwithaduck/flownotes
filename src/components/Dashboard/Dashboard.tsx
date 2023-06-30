import { Button, Container, Stack, Typography } from "@mui/material";

import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
	const items = [
		{ title: "A board", author: "Author" },
		{ title: "A board", author: "Author" },
		{ title: "A board", author: "Author" },
	];

	return (
		<Container
			maxWidth={false}
			className={styles.container}
		>
			{items.length === 0 ? (
				<div className={styles.container__empty}>
					<Typography variant="h4">There aren't any boards you have created yet.</Typography>
					<Button variant="contained">Create one</Button>
				</div>
			) : (
				<Stack spacing={4}>
					{items.map((item, index) => {
						return (
							<div key={index}>
								<Typography variant="h5">{item.title}</Typography>
								{item.author}
							</div>
						);
					})}
				</Stack>
			)}
		</Container>
	);
};
