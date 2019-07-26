import React, {Component} from 'react';
import styled from 'styled-components';

const DivBox = styled.div`
	display: flex;
`;

export default class Index extends Component {
	public render() {
		return <DivBox>Some doma</DivBox>;
	}
}
