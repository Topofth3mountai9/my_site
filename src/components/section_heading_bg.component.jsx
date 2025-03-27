import styled from 'styled-components';

function Section_heading_bg({ heading, other_class }) {
  return (
    <SectionHeader className={`${other_class} text_center`}>
      {heading}
    </SectionHeader>
  );
}

const SectionHeader = styled.h2`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  text-align: center;
  /* font-family: 'Caveat', cursive; */
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  font-size: ${({ theme }) => theme.typography.heading.biggest};
  color: ${({ theme }) => theme.colors.grey.g};
  opacity: 0.5;
  line-height: 1.1;
  z-index: 0;
`;

export default Section_heading_bg;
