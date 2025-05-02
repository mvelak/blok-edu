import styled from "styled-components";

const Input = ({ placeholder }) => {
    return (
        <InputBase placeholder={placeholder} />
    )
}


const InputBase = styled.input`
    width: 100%;
    color: honeydew;
    padding: 1rem;
    border-radius: 8px;
    border: 1.5px solid #333;
    background: rgb(30, 30, 30);
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
    transition: border 0.2s, box-shadow 0.2s, background 0.2s;
    margin-bottom: 0.1rem;
    text-align: left;
    max-width: 400px;
`;

export default Input;