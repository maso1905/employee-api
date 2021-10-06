import styled from "styled-components";

export const DetailContainer = styled.div`
    justify-content: center;
    align-items: center;
    height: auto;
    margin: 0 auto; 
    width: 100%;
    padding: 1%; 
    max-width: 600px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin-top: 5%; 
    padding: 2%;
`;

export const Image = styled.img`
    margin: 0 auto;
    max-width: 200px;
    width: 100%;
    border-radius: 50% 50%;
    align-items: center;
`;

export const Name = styled.h2`
    font-weight: 900;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    margin-top: 5%; 
    margin-bottom: 10%;
    text-shadow: 
        -10px 10px var(--darkerAccentColor),
        -20px 20px var(--darkerBody),
        -30px 30px #2c808e;
`;

/* Employee Form styles */
export const Form = styled.form`
    align-items: center;
    width: 100%;
    margin: 0 auto;
    margin-top: 5%; 
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
`;

export const FormItemWrapper = styled.div`
    width: 100%;   
    align-items : center;
    display: flex;
`;

export const Label = styled.label`
    font-size: 19px;
    text-align: left;
    display: block;
    width: 20%;
    font-weight: 800;
    letter-spacing: 2px;
    text-shadow: 
    1px 1px 1px var(--darkerBody),
    2px 2px 1px var(--darkerBody),
    3px 3px 1px var(--darkerBody);
`;

export const Input = styled.input`
    outline: 0;
    width: 80%;
    align-items: flex-end;
    border-radius: 16px;
    border: none;
    margin-bottom: 2%;
    font-size: 14px;
    text-align: center;
    height: 32px;
    background: var(--fontColor);
`;