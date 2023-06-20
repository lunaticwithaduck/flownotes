import { useRef, useCallback, useState, memo, useEffect } from "react";
import { TextField } from "@mui/material";
import { Handle, Position } from "reactflow";
import ColorMenu from "./ColorMenu";

import clsx from "clsx";
import styles from "./StickyNode.module.scss";

type FontSize = "larger" | "large" | "big" | "normal";

const fontSizes: Array<FontSize> = ["larger", "large", "big", "normal"];

// TODO: Refactor
const StickyNode = () => {
	const [shouldCenterText, setCenterText] = useState(true);
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
		let indexOfFontSize = fontSizes.indexOf(fontSize);
		const isAtMaxScrollHeight = textfieldRef.current && textfieldRef.current?.scrollHeight >= 210;
		const isBelowMedianScrollHeight = textfieldRef.current && textfieldRef.current?.scrollHeight <= 80;

		const isNotLastFontSize = indexOfFontSize < fontSizes.length - 1;
		const isNotFirstFontSize = indexOfFontSize !== 0;

		if (isAtMaxScrollHeight && isNotLastFontSize) {
			indexOfFontSize++;
		}

		if (isBelowMedianScrollHeight && isNotFirstFontSize) {
			indexOfFontSize--;
		}

		setFontSize(fontSizes[indexOfFontSize]);
	}, [textfieldRef.current?.scrollHeight]);

	useEffect(() => {
		const isAtMaxScrollWidth = textfieldRef.current && textfieldRef.current?.value.length >= 17;

		setCenterText(!isAtMaxScrollWidth);
	}, [textfieldRef.current?.value.length]);

	return (
		<>
			<div
				className={styles.stickyNode}
				onClick={onNodeClick}
				onBlur={onNodeBlur}
			>
				<Handle
					type="target"
					position={Position.Top}
					className={styles.stickyNode__handle}
				/>
				{true && <ColorMenu />}
				<div className={clsx(shouldCenterText ? styles[`stickyNode__inputContainer--centered`] : styles.stickyNode__inputContainer, styles[`stickyNode__inputContainer--${fontSize}`])}>
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
