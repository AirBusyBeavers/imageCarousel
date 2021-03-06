import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  background: black;
  color: #484848;
  border-bottom: 1px solid;
  height: ${({ width }) => 0.22942187500000003 * width}px;
`;

export default Grid;
