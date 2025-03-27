import Svg, { Path } from 'react-native-svg';

interface SvgComponentProps {
  width: number | string;
  height: number | string;
  color: string;
}

export default function TodoIcon(props: SvgComponentProps) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 31 31" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5 5.375C9.90812 5.375 5.375 9.90812 5.375 15.5C5.375 21.0919 9.90812 25.625 15.5 25.625C21.0919 25.625 25.625 21.0919 25.625 15.5C25.625 9.90812 21.0919 5.375 15.5 5.375ZM2.375 15.5C2.375 8.25126 8.25126 2.375 15.5 2.375C22.7487 2.375 28.625 8.25126 28.625 15.5C28.625 22.7487 22.7487 28.625 15.5 28.625C8.25126 28.625 2.375 22.7487 2.375 15.5ZM20.4357 11.856C21.0214 12.4418 21.0214 13.3915 20.4357 13.9773L15.269 19.144C14.6832 19.7298 13.7335 19.7298 13.1477 19.144L10.5643 16.5607C9.97855 15.9749 9.97855 15.0251 10.5643 14.4393C11.1501 13.8536 12.0999 13.8536 12.6857 14.4393L14.2083 15.962L18.3143 11.856C18.9001 11.2702 19.8499 11.2702 20.4357 11.856Z"
        fill={props.color}
      />
    </Svg>
  );
}
