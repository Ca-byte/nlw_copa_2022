import { Button as ButtonNativeBase } from 'native-base'

interface ButtonProps {
    title: string;
}

export function Button(props: ButtonProps){
	return(
		<ButtonNativeBase>
			{props.title}
		</ButtonNativeBase>

	)
}