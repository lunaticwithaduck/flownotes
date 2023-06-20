import { Node } from "reactflow";
import StickyNode from "../components/StickyNode";

import type { Colors } from "../components/StickyNode/ColorMenu/ColorMenu";

interface StickyNodeData {
	color: Colors;
}

export interface StickyNodes extends Node {
	data: StickyNodeData;
}

export enum NodeTypes {
	StickyNode = "StickyNode",
}

export default {
	StickyNode: StickyNode,
};
