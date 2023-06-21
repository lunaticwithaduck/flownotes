import { useRef, useCallback, useState, memo, useEffect } from "react";
import { TextField } from "@mui/material";
import { Handle, Position } from "reactflow";
import ColorMenu from "./ColorMenu";

import clsx from "clsx";
import styles from "./StickyNode.module.scss";
import { StickyNode as StickyNodeType } from "../../types/nodeTypes";
import FormattingMenu from "./FormattingMenu";

type FontSize = "larger" | "large";

const fontSizes: Array<FontSize> = ["larger", "large"];

// TODO: Refactor
const StickyNode: React.FC<StickyNodeType> = ({ id, data, selected }) => {
	const [fontSize, setFontSize] = useState<FontSize>("larger");
	const [textfieldValue, setTextfieldValue] = useState("");
	const textfieldRef = useRef<HTMLTextAreaElement>();

	const onNodeClick = () => textfieldRef.current?.focus();
	const onNodeBlur = () => textfieldRef.current?.blur();

	const onTextfieldChange = useCallback(() => {
		const scrollHeight = textfieldRef.current?.scrollHeight;

		if (scrollHeight && scrollHeight >= 240) return;

		setTextfieldValue(textfieldRef.current?.value as string);
	}, [textfieldRef]);

	useEffect(() => {
		// ! This really needs to be remade ;/
		let indexOfFontSize = fontSizes.indexOf(fontSize);
		const isAtMaxScrollHeight = textfieldRef.current && textfieldRef.current?.scrollHeight >= 210;
		const isBelowMedianScrollHeight = textfieldRef.current && textfieldRef.current?.value.length <= 80;

		const isNotLastFontSize = indexOfFontSize < fontSizes.length - 1;
		const isNotFirstFontSize = indexOfFontSize !== 0;

		if (isAtMaxScrollHeight && isNotLastFontSize) {
			indexOfFontSize++;
			return setFontSize(fontSizes[indexOfFontSize]);
		}

		if (isBelowMedianScrollHeight && isNotFirstFontSize) {
			indexOfFontSize--;
			return setFontSize(fontSizes[indexOfFontSize]);
		}
	}, [textfieldRef.current?.scrollHeight]);

	return (
		<>
			<div
				className={clsx(styles.stickyNode, styles[`stickyNode--${data.color}`])}
				onClick={onNodeClick}
				onBlur={onNodeBlur}
			>
				<Handle
					type="target"
					position={Position.Top}
					className={styles.stickyNode__handle}
				/>

				{selected && <ColorMenu id={id} />}
				{selected && <FormattingMenu id={id} />}

				<div className={clsx(styles.stickyNode__inputContainer, styles[`stickyNode__inputContainer--${fontSize}`])}>
					<TextField
						id="standard-basic"
						variant="standard"
						fullWidth={true}
						multiline={true}
						maxRows={10}
						inputRef={textfieldRef}
						value={textfieldValue}
						onChange={onTextfieldChange}
						InputProps={{ disableUnderline: true }}
					/>
				</div>

				<Handle
					type="source"
					position={Position.Bottom}
					className={styles.stickyNode__handle}
				/>
			</div>
		</>
	);
};

export default memo(StickyNode);
