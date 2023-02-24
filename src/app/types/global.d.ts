declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;