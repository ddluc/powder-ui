import React from 'react';
import { ElevationLevel } from '../../types';
import { Card } from '../Card';
import { Header, Content, Dropdown } from './bin';

import ArrowIcon from './bin/assets/arrow.svg';

export interface Props {
  title: React.ReactNode;
  id?: string;
  controlled?: boolean;
  open?: boolean;
  elevation?: ElevationLevel;
  children?: React.ReactNode;
  onClick?: (id: string) => void;
}

const Accordion = (props: Props): JSX.Element => {
  const { id, title, open, controlled, children, elevation, onClick } = props;

  const contentRef = React.useRef<HTMLDivElement>(null); // Ref for the content div
  const [height, setHeight] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleHeaderClick = () => {
    if (controlled) {
      onClick(id);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const shouldRenderContent = () => (controlled ? open : isOpen);

  React.useEffect(() => {
    if (shouldRenderContent() && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    }
  }, [shouldRenderContent]);

  return (
    <Card elevation={elevation} padding={['0px', '0px', '0px', '0px']}>
      <Header onClick={handleHeaderClick}>
        <strong>{title}</strong>
        <Dropdown open={shouldRenderContent()}>
          <ArrowIcon height="16px" width="16px" />
        </Dropdown>
      </Header>
      <Content ref={contentRef} open={shouldRenderContent()} maxHeight={height}>
        {children}
      </Content>
    </Card>
  );
};

export default Accordion;
