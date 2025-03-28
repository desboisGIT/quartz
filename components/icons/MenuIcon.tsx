import Svg, { Path } from 'react-native-svg';

interface SvgComponentProps {
  width: number | string;
  height: number | string;
  color: string;
}

export default function MenuIcon(props: SvgComponentProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 19 14" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1C0 0.447715 0.447715 0 1 0H17.3333C17.8856 0 18.3333 0.447715 18.3333 1C18.3333 1.55228 17.8856 2 17.3333 2H1C0.447715 2 0 1.55228 0 1ZM0 6.83333C0 6.28105 0.447715 5.83333 1 5.83333H17.3333C17.8856 5.83333 18.3333 6.28105 18.3333 6.83333C18.3333 7.38562 17.8856 7.83333 17.3333 7.83333H1C0.447715 7.83333 0 7.38562 0 6.83333ZM0 12.6667C0 12.1144 0.447715 11.6667 1 11.6667H17.3333C17.8856 11.6667 18.3333 12.1144 18.3333 12.6667C18.3333 13.219 17.8856 13.6667 17.3333 13.6667H1C0.447715 13.6667 0 13.219 0 12.6667Z"
        fill={props.color}
      />
    </Svg>
  );
}
