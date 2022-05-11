import styled from "styled-components"

type Props = {
    primary?: boolean
}

export const Container = styled.button<Props>`
   border: 1px solid transparent;
   padding: 5px 10px;
   border-radius: 3px;
   color: white;
   background-color: ${p => p.primary ? 'var(--app-secondary-color)' : 'var(--app-gray)'};
   margin-right: 1rem;
`
