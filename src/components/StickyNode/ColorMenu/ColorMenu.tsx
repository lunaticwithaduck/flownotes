import { useCallback } from "react";
import { useReactFlow } from "reactflow";
import { ButtonGroup, Button } from "@mui/material";

import styles from "./ColorMenu.module.scss";

export type Colors = "green" | "yellow" | "blue" | "blue" | "red" | "orange";

interface ColorMenuProps {
	id: string;
}

export const ColorMenu: React.FC<ColorMenuProps> = ({ id }) => {
	const { setNodes } = useReactFlow();

	const changeNodeColor = useCallback(
		(color: Colors) => {
			setNodes(nodes =>
				nodes.map(node => {
					if (node.id === id) {
						node.data = { ...node.data, color: color };
					}

					return node;
				})
			);
		},
		[id]
	);

	return (
		<div className={styles.colorMenu}>
			<ButtonGroup
				variant="contained"
				orientation="vertical"
				className={styles.colorMenu__options}
			>
				<div className={styles[`colorMenu__option--green`]}>
					<Button
						variant="contained"
						onClick={() => changeNodeColor("green")}
					/>
				</div>
				<div className={styles[`colorMenu__option--yellow`]}>
					<Button
						variant="contained"
						onClick={() => changeNodeColor("yellow")}
					/>
				</div>
				<div className={styles[`colorMenu__option--blue`]}>
					<Button
						variant="contained"
						onClick={() => changeNodeColor("blue")}
					/>
				</div>
				<div className={styles[`colorMenu__option--red`]}>
					<Button
						variant="contained"
						onClick={() => changeNodeColor("red")}
					/>
				</div>
				<div className={styles[`colorMenu__option--orange`]}>
					<Button
						variant="contained"
						onClick={() => changeNodeColor("orange")}
					/>
				</div>
			</ButtonGroup>
		</div>
	);
};
