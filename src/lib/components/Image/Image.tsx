import React from 'react';
import { Skeleton, isSkeleton, BaseSkeletonProps } from '../Skeleton';
import { Fit } from '../Fit';
import { useOnScreen } from '../../hooks/useOnScreen';

import { PreviewImage } from './bin/PreviewImage';
import { MainImage } from './bin/MainImage';
import { px, pcnt } from '../../util';

interface BaseProps extends React.HTMLAttributes<HTMLImageElement> {
  src: {
    main: string;
    preview?: string;
  };
  height: number;
  width?: number;
  fluid?: boolean;
  blur?: number;
  fit?: 'fill' | 'cover' | 'contain' | 'scale';
  xpos?: number;
  ypos?: number;
  backgroundColor?: string;
}

interface SkeletonProps extends BaseSkeletonProps {
  height: number;
  width: number;
}

export type Props = BaseProps | SkeletonProps;

const Image = (props: Props): JSX.Element => {
  if (isSkeleton(props)) {
    return <Skeleton {...props} type="box" />;
  }

  const {
    height,
    width,
    fluid,
    src,
    blur,
    backgroundColor,
    fit,
    xpos = 50,
    ypos = 50,
    ...imageProps
  } = props;

  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [isVisible, currentElement] = useOnScreen<HTMLDivElement>();

  const onImageLoad = React.useCallback(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <Fit
      ref={currentElement}
      height={px(height)}
      width={fluid ? '100%' : px(width)}
      position="relative"
      fit={fit}
      align={`${pcnt(xpos)} ${pcnt(ypos)}`}
      background={{ color: backgroundColor || 'none' }}
      opacity={isLoaded ? 1 : 0}
    >
      {(isVisible || isLoaded) && (
        <MainImage {...imageProps} height="100%" width="100%" src={src.main} onLoad={onImageLoad} />
      )}
      {src.preview ? (
        <PreviewImage
          {...imageProps}
          height="100%"
          width="100%"
          opacity={isLoaded ? 0 : 1}
          blur={blur}
          src={src.preview}
        />
      ) : (
        ''
      )}
    </Fit>
  );
};

// Export the component as the default export
export default Image;
