import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonWithTooltip from './component/ButtonWithTooltip';

const ExampleLayoutEffect = () => {
  return (
    <View>
      <ButtonWithTooltip
        tooltipContent={
          <View>
            hi frient
            <br />
            This is why it's displayed below instead!
          </View>
        }>
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{height: 50}} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}>
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <div style={{height: 50}} />
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}>
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </View>
  );
};

export default ExampleLayoutEffect;

const styles = StyleSheet.create({});
