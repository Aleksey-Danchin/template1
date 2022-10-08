import { FC, useMemo } from "react";

type CurtainProps = {
	children?: any;
	show?: any;
	hide?: any;
};

const Curtain: FC<CurtainProps> = ({ show, hide, children }) => {
	const mode = useMemo(() => {
		if (show !== undefined) {
			return Boolean(show);
		}

		if (hide !== undefined) {
			return !Boolean(hide);
		}

		return true;
	}, [hide, show]);

	if (mode) {
		return <>{children}</>;
	}

	return null;
};

export default Curtain;
