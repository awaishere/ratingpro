import React from 'react';
import { View, StatusBar, StyleSheet, StatusBarStyle } from 'react-native';
import { ViewHelper } from '@components/common'

type StatusBarProps = {
	backgroundColor: string,
	barStyle?: StatusBarStyle
}

const GeneralStatusBarColor = ({ backgroundColor, barStyle }: StatusBarProps) => {
	return (
		<View style={[styles.statusBar, { backgroundColor }]}>
			<StatusBar backgroundColor={backgroundColor} barStyle={barStyle || "default"} />
		</View>
	)
};

const styles = StyleSheet.create({
	statusBar: {
		height: ViewHelper(),
	},
});

export default GeneralStatusBarColor;
