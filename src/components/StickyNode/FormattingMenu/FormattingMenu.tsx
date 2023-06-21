import React, { useCallback, memo } from "react";
import { useReactFlow } from "reactflow";
import { Button, ButtonGroup } from "@mui/material";
import { FormatAlignCenter, FormatAlignLeft, FormatAlignRight, Delete } from "@mui/icons-material";

import styles from "./FormattingMenu.module.scss";
import { TextAlignment } from "../StickyNode";

interface FormattingMenuProps {
	id: string;
	setTextAlignment: React.Dispatch<React.SetStateAction<TextAlignment>>;
}

export const FormattingMenu: React.FC<FormattingMenuProps> = memo(({ id, setTextAlignment }) => {
	const { setNodes } = useReactFlow();

	const onDeleteClick = useCallback(() => {
		setNodes(nodes => nodes.filter(node => node.id !== id));
	}, [id]);

	return (
		<div className={styles.formattingMenu}>
			<ButtonGroup
				variant="contained"
				orientation="vertical"
				className={styles.formattingMenu__options}
			>
				<Button
					variant="text"
					onClick={() => setTextAlignment("left")}
				>
					<FormatAlignLeft />
				</Button>
				<Button
					variant="text"
					onClick={() => setTextAlignment("center")}
				>
					<FormatAlignCenter />
				</Button>
				<Button
					variant="text"
					onClick={() => setTextAlignment("right")}
				>
					<FormatAlignRight />
				</Button>
				<Button
					variant="text"
					onClick={onDeleteClick}
				>
					<Delete />
				</Button>
			</ButtonGroup>
		</div>
	);
});
