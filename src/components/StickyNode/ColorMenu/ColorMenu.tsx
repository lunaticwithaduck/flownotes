import { useCallback, memo } from "react";
import { useReactFlow } from "reactflow";
import { ButtonGroup, Button, Tooltip } from "@mui/material";

import styles from "./ColorMenu.module.scss";

export type Colors = "green" | "yellow" | "blue" | "blue" | "red" | "orange";

interface ColorMenuProps {
	id: string;
}

export const ColorMenu: React.FC<ColorMenuProps> = memo(({ id }) => {
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
				orientation="horizontal"
				className={styles.colorMenu__options}
			>
				<div className={styles[`colorMenu__option--green`]}>
					<Tooltip
						title="green"
						placement="top"
						arrow
						followCursor
					>
						<Button
							variant="contained"
							onClick={() => changeNodeColor("green")}
						/>
					</Tooltip>
				</div>
				<div className={styles[`colorMenu__option--yellow`]}>
					<Tooltip
						title="yellow"
						placement="top"
						arrow
						followCursor
					>
						<Button
							variant="contained"
							onClick={() => changeNodeColor("yellow")}
						/>
					</Tooltip>
				</div>
				<div className={styles[`colorMenu__option--blue`]}>
					<Tooltip
						title="blue"
						placement="top"
						arrow
						followCursor
					>
						<Button
							variant="contained"
							onClick={() => changeNodeColor("blue")}
						/>
					</Tooltip>
				</div>
				<div className={styles[`colorMenu__option--red`]}>
					<Tooltip
						title="red"
						placement="top"
						arrow
						followCursor
					>
						<Button
							variant="contained"
							onClick={() => changeNodeColor("red")}
						/>
					</Tooltip>
				</div>
				<div className={styles[`colorMenu__option--orange`]}>
					<Tooltip
						title="orange"
						placement="top"
						arrow
						followCursor
					>
						<Button
							variant="contained"
							onClick={() => changeNodeColor("orange")}
						/>
					</Tooltip>
				</div>
			</ButtonGroup>
		</div>
	);
});
