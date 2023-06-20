import { useMemo } from "react";
import { Background, BackgroundVariant, MiniMap, ReactFlow, useNodesState } from "reactflow";
import nodeTypes, { NodeTypes, StickyNodes } from "../../types/nodeTypes";

import "reactflow/dist/style.css";
import CustomControls from "./CustomControls";
import CustomThemeProvider from "./CustomThemeProvider";

const initialNodes: StickyNodes[] = [{ id: "1", position: { x: 0, y: 0 }, data: { color: "green" }, type: NodeTypes.StickyNode }];

export const ReactFlowContainer = () => {
	const [nodes, _, onNodesChange] = useNodesState(initialNodes);

	const memoizedNodeTypes = useMemo(() => nodeTypes, []);

	return (
		<>
			<CustomThemeProvider>
				<div style={{ width: "100vw", height: "100vh" }}>
					<ReactFlow
						nodes={nodes}
						nodeTypes={memoizedNodeTypes}
						onNodesChange={onNodesChange}
						fitView={true}
						fitViewOptions={{ maxZoom: 1, minZoom: 1 }}
					>
						<CustomControls />
						<Background
							variant={"dots" as BackgroundVariant}
							gap={12}
							size={1}
						/>
						<MiniMap style={{ bottom: "50px" }} />
					</ReactFlow>
				</div>
			</CustomThemeProvider>
		</>
	);
};
