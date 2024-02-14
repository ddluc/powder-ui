declare module '*.ttf';

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
