import styled from "styled-components";

const Input = ({ id, value, onChange, placeholder, type = "text" }) => {
    return (
        <InputBase
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
};

const InputBase = styled.input`
    width: 100%;
    color: honeydew;
    padding: 1rem;
    border-radius: 8px;
    border: 1.5px solid #333;
    background: rgb(30, 30, 30);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    transition: border 0.2s, box-shadow 0.2s, background 0.2s;
    margin-bottom: 0.1rem;
    max-width: 400px;

    &:focus {
        border-color: #555;
        outline: none;
        background: rgb(40, 40, 40);
    }
`;

export default Input;
