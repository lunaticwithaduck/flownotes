import { Button, ButtonGroup } from "@mui/material";
import { ZoomIn, ZoomOut, ZoomOutMap, AddBox, LightMode, DarkMode } from "@mui/icons-material";
import { Node, Panel, useReactFlow } from "reactflow";
import { useCallback } from "react";
import { NodeTypes } from "../../../types/nodeTypes";
import { v4 as uuid } from "uuid";

import styles from "./CustomControls.module.scss";

interface CustomControlsProps {
	isDarkMode: boolean;
	setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CustomControls: React.FC<CustomControlsProps> = ({ isDarkMode, setDarkMode }) => {
	const { zoomIn, zoomOut, fitView, setNodes, getNodes } = useReactFlow();

	const onZoomInClick = () => zoomIn();
	const onZoomOutClick = () => zoomOut();

	const onTransform = useCallback(() => {
		fitView({ maxZoom: 1 });
	}, [fitView]);

	const onAddNode = useCallback(() => {
		const newNodeID = uuid();
		const newNode: Node = { id: newNodeID, type: NodeTypes.StickyNode, position: { x: 0, y: 400 }, data: { color: "green" } };

		setNodes([...getNodes(), newNode]);
	}, []);

	return (
		<>
			<Panel
				position="bottom-right"
				className={styles.customControls}
			>
				<ButtonGroup variant={isDarkMode ? "contained" : "outlined"}>
					<Button onClick={() => setDarkMode(!isDarkMode)}>{isDarkMode ? <LightMode /> : <DarkMode />}</Button>
					<Button onClick={onZoomOutClick}>
						<ZoomOut />
					</Button>
					<Button onClick={onZoomInClick}>
						<ZoomIn />
					</Button>
					<Button onClick={onTransform}>
						<ZoomOutMap />
					</Button>
					<Button onClick={onAddNode}>
						<AddBox />
					</Button>
				</ButtonGroup>
			</Panel>
		</>
	);
};
