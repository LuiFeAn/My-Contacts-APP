import styled from "styled-components";

export const Container = styled.header`

    margin-top: 74px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const InputSearchContainer = styled.div`

    margin-top:40px;
    width: 100%;

    input{
        width:100%;
        background: white;
        border:none;
        border-radius: 25px;
        height: 50px;
        filter: drop-shadow(0px 4px 10px rggba(0,0,0.04));
        outline: none;
        padding: 0 16px;

        &::placeholder{
            color:#BCBCBC;
        }
    }

`;