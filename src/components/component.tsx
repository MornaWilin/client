import React, { useEffect, useState } from 'react'
import { ThrowStatement } from 'typescript'
import { Container, Bar, Title, Content, BarTitle, Main, Badge, ChannelContent } from '../styled/container'
import logo from '../styled/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../actions/login';
import { RootState } from '../reducers/index';

export const Channel = (props: { name: String, bartitle: String, maintext: String, state: boolean, children?: any, onClick?: React.MouseEventHandler | undefined }) => {
    const [control, setControl] = useState<boolean>(true)
    useEffect(() => {
        console.log('CHANGED', control)


    }, [control])

    let dispatch = useDispatch()

    return (

        <Container onClick={() => props.state == true ? dispatch(logout()) : dispatch(login())} onMouseEnter={() => setControl(false)} onMouseLeave={() => setControl(true)}>
            <Content >
                <Title><img src={logo} alt="" />{props.name}</Title>
            </Content>
            <ChannelContent>
                <Main>{props.maintext}</Main>
                <Badge show={props.state}><img src={'https://www.logocore.com/wp-content/uploads/2018/04/checkmark-svg.svg'} alt="" />CONNECTED</Badge>
            </ChannelContent>
            <Bar control={control} state={props.state}>
                <BarTitle>{props.bartitle}</BarTitle>
            </Bar>
        </Container>

    )
}



