import { Button, ButtonGroup } from "@mui/material";
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight, Delete } from "@mui/icons-material";

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
				<Button variant="text">
					<FormatAlignCenter />
				</Button>
				<Button variant="text">
					<FormatAlignLeft />
				</Button>
				<Button variant="text">
					<FormatAlignRight />
				</Button>
				<Button variant="text">
					<Delete />
				</Button>
			</ButtonGroup>
		</div>
	);
};
