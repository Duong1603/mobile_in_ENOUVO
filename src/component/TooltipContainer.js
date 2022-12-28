import {View} from 'react-native';

export default function TooltipContainer({children, x, y, contentRef}) {
  return (
    <View
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}>
      <View ref={contentRef} className="tooltip">
        {children}
      </View>
    </View>
  );
}
