import React from "react";
import * as Icons from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
const SocialIcon = ({ name, link }) => {
	const Icon = Icons[name];
	return (
		<>
			<IconButton href={link} title={name}>
				<Icon />
			</IconButton>
		</>
	);
};

export default SocialIcon;
