import { Button, ButtonGroup } from "@mui/material";

import styles from "./FormattingMenu.module.scss";

/*
 & Text Alignment - Center, Left, Right
 & sum else?
 & Delete Option

*/

export const FormattingMenu = () => {
	return (
		<div className={styles.formattingMenu}>
			<ButtonGroup
				variant="contained"
				orientation="vertical"
				className={styles.formattingMenu__options}
			>
				<Button variant="contained" />
				<Button variant="contained" />
				<Button variant="contained" />
				<Button variant="contained" />
			</ButtonGroup>
		</div>
	);
};
