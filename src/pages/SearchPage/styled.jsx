import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
`


export const Left = styled.div`
    background: #F2F2F2; 
    width: 40vw;
    height: 100vh;
`

export const Right = styled.div`
    background: #3B3B3B;
    color: #ffffff; 
    width: 60vw;
    height: 100vh;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
   
`

export const subRight1 = styled.div`

    width: 90%;
    height: 30%;
    display: flex; 
    margin: 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
   
    & span{
        margin: 15px;
    }
`


export const subRight = styled.div`

    width: 90%;
    height: 70%;
    display: flex; 
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    & img{
        width: 50%;
        height: 70%;
    }

    & h1{
        margin: 0;
    }
`