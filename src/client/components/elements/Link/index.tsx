import Link from 'next/link';
import {SingletonRouter, withRouter} from 'next/router';
import React, {Children, cloneElement, FC} from 'react';

interface IProps {
	router: SingletonRouter;
	href: string;
	passHref?: boolean;
	exact?: boolean;
}

/**
 * ActiveLink is HOC function that returns new element with or without active class
 */
const ActiveLink: FC<IProps> = ({router, children, exact, ...props}) => {
	// tslint:disable-next-line:no-any
	const child: any = Children.only(children); // TODO: refactor child type to an interface

	let className = child.props.className || null;

	if (router.asPath) {
		if (exact && router.asPath === props.href) {
			className = `${className !== null ? className : ''} active`.trim();
		} else if (!exact && router.asPath.indexOf(props.href) !== -1) {
			className = `${className !== null ? className : ''} active`.trim();
		}
	}

	return <Link {...props}>{cloneElement(child, {className})}</Link>;
};

export default withRouter(ActiveLink);
