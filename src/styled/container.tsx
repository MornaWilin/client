import styled from 'styled-components'
import * as React from 'react';

const colorSwitch = (state: any, control: boolean) => {
    switch (state) {
        case true:
            return control ? '#2195F3' : 'light-blue'
        case false:
            return control ? 'grey' : 'black'
        default:
            return state
    }
}

export const Container = styled.div`
@media (max-width: 768px) {
    height: 132px;
  }
  @media (min-width: 768px) {
    height: 232px;
  }
    width: 232px;
    
    min-width: 232px;
    min-height: 132px;
    margin: 0 auto;
    border-radius: 24px;
    background-color: white;
    font-family: "Josefin Sans", sans-serif;  
    transition: width 2s, height 2s, background-color 2s, transform 2s;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`

export const Title = styled.span`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-family: Montserrat, sans-serif;
    line-height: 1.334;
    font-weight: bold;
    padding: 0 17px;
    top:10px;
    img{
        max-width: 20px;
        padding-right: 10px;
    }
`

export const Bar = styled(Container) <{ control: boolean, state: any }>` 
    & { control } {
        @media (max-width: 768px) {
            display: none;
          }
        position: relative;
        min-width: 232px;
        min-height: 232px;
        top: -170px;
        z-index: -1;
        background-color: blue;
        background-color: ${p => { return colorSwitch(p.state, p.control) }};
        transform: translateY(${p => { return p.control ? '10px' : '20px' }});
        transition-duration: 0.2s;
`
export const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-gap: 8px;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(3, 1fr);
`

export const Content = styled.div`
heigh: 100%;
width: 100%;
    display: flex;
    align-items: center;
  justify-content: flex-start;
`

export const BarTitle = styled.div`
    
    position: relative;
    display: flex;
    Color: white;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-family: Montserrat, sans-serif;
    line-height: 1.334;
    font-weight: thin;
    padding: 0 17px;
    top:200px;
`
export const ChannelContent = styled.span`

width: 100%;
    display: flex;
    align-items: stretch;
  justify-content: space-around;
  flex-direction: column;
`


export const Main = styled.span`
@media (max-width: 768px) {
    height: 25px;
  }
  @media (min-width: 768px) {
    height: 90px;
  }
    
    position: relative;
    font-size: 1rem;
    font-family: Montserrat, sans-serif;
    line-height: 1.334;
    font-weight: thin;
    padding: 20px 17px;
    top:10px;
    img{
        max-width: 20px;
        padding-right: 10px;
    }
`

export const Badge = styled.span<{ show: boolean }>`
    display: flex;
    color: #2195F3;
    visibility: ${p => { return p.show ? 'visible' : 'hidden' }};
    position: relative;
    align-self: flex-start;
    justify-content: center;
    font-size: 0.8rem;
    font-family: Montserrat, sans-serif;
    line-height: 1.334;
    font-weight: bold;
    
    padding: 10px 17px;
    img{
        align-self: flex-start;
        max-width: 15px;
        padding-right: 7px;
        padding-left: 7px;
    }
`