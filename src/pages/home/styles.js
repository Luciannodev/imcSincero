import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    >button{
    background: #21841F;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 8px;
    width: 112px;
    height: 36px;
    font-family: Concert One;
    font-size: 12px;
    line-height: 9px;
    cursor: pointer;
    }
`
export const Input = styled.div`
    display: flex;
    flex-direction : column;
    
    >span{
        margin: auto;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 25px;
        font-family: Concert One;

    }
    >input{
        width: 162px;
        height: 36px;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 6px;
        text-align: center;
    }
`
export const Title = styled.h1`
    color: white;
    font-family: Cormorant Upright;
    font-size: 50px;
`




