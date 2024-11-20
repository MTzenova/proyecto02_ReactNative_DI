import{Text, type TextProps} from "react-native";
import { GlobalStyles } from "../theme/GlobalStyles";
import { Children } from "react";

interface Props extends TextProps{}



export const MyText = ({children}:Props) => {
    return(
        <Text>
            {children}
        </Text>
    )
} 