import styled from 'styled-components';

export const FormsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: normal;
        font-size: 16px;
        letter-spacing: -0.4px;
        text-align: center;
        color: #000;
        font-weight: 500;
        margin: 13px 0;
    }

    img {
        width: 104px;
        height: 58px;
        margin: 68px 128px 16px;
        object-fit: contain;
    }

    a {
        font-size: 16px;
        letter-spacing: -0.4px;
        text-align: center;
        font-weight: 500;
        margin: 13px 0;

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

`

export const FormButton = styled.button`
        border: none;
        width: 100%;
        height: 42px;
        border-radius: 2px;
        background-color:#e8222e;
        font-size: 16px;
        letter-spacing: -0.4px;
        text-align: center;
        cursor: pointer;
        margin: 8px 0;
        font-weight: 500;

        :hover {
            opacity: 0.9;
        }

`

