import { ButtonGroup, Button } from "@mui/material";

import styles from "./ColorMenu.module.scss";

export const ColorMenu = () => {
	return (
		<div className={styles.colorMenu}>
			<ButtonGroup
				variant="contained"
				orientation="vertical"
				className={styles.colorMenu__options}
			>
				<div className={styles[`colorMenu__option--green`]}>
					<Button variant="contained" />
				</div>
				<div className={styles[`colorMenu__option--yellow`]}>
					<Button variant="contained" />
				</div>
				<div className={styles[`colorMenu__option--blue`]}>
					<Button variant="contained" />
				</div>
				<div className={styles[`colorMenu__option--red`]}>
					<Button variant="contained" />
				</div>
				<div className={styles[`colorMenu__option--orange`]}>
					<Button variant="contained" />
				</div>
			</ButtonGroup>
		</div>
	);
};
