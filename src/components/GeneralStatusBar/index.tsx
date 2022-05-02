import React from 'react';
import { View, StatusBar, StyleSheet, StatusBarStyle } from 'react-native';
import { ViewHelper } from '@components/common'
import colors from '@src/colors';

type StatusBarProps = {
	backgroundColor?: string,
	barStyle?: StatusBarStyle
}

const GeneralStatusBarColor = ({ backgroundColor = colors.transparent, barStyle }: StatusBarProps) => {
	return (
		<View style={[styles.statusBar, { backgroundColor }]}>
			<StatusBar backgroundColor={backgroundColor} translucent barStyle={barStyle || "default"} />
		</View>
	)
};

const styles = StyleSheet.create({
	statusBar: {
		height: ViewHelper(),
	},
});

export default GeneralStatusBarColor;
