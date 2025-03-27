import styled from 'styled-components';

const StyledButton = styled.button`
  height: 4rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === 'primary' &&
    `
    background-color: ${props.backgroundColor || '#FF8C00'};
    color: ${props.textColor || '#ffffff'};
    border: none;
    
    &:hover {
      opacity: 0.9;
    }
  `}

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background-color: transparent;
    color: ${props.textColor || '#ffffff'};
    border: 2px solid ${props.borderColor || '#ffffff'};
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}
`;

export function Button({ children, variant = 'primary', ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      <div className="button_text w-full h-full flex_item flex-co  relative overflow-hidden">
        <div className="w-full h-full">{children}</div>
        <div className="w-full h-full">{children}</div>
      </div>
    </StyledButton>
  );
}
