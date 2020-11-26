import styled, {css} from 'styled-components'

const Button = styled.button `
    background: transparent;
    border-radius: 3px;
    border: 2px solid #112244;
    color: #112244;
    margin: 0 1em;
    padding: 0.25em 1em;

    ${props => props.primary && css `
        background: #112244;
        color: #FFFDD0;
    `}
`;

export default Button