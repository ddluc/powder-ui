/**
 * Typeguard to determine if props are skeleton props
 */

export interface BaseSkeletonProps {
  skeleton?: boolean;
}

export interface BoxProps extends BaseSkeletonProps {
  type?: 'box';
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
  width?: number;
  height?: number;
  fluid?: boolean;
  margin?: [number, number, number, number];
  primaryColor?: string;
  secondaryColor?: string;
}

export interface CircleProps extends BaseSkeletonProps {
  type?: 'circle';
  animation?: 'wave' | 'pulse' | 'shimmer' | 'none';
  size?: number;
  margin?: [number, number, number, number];
  primaryColor?: string;
  secondaryColor?: string;
}

export const isSkeleton = (props: any): props is BaseSkeletonProps =>
  'skeleton' in props && props.skeleton;

export const isBoxProps = (props: any): props is BoxProps => props.type === 'box';

export const isCircleProps = (props: any): props is CircleProps => props.type === 'circle';
