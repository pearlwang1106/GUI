import { Cursor } from '@antv/g';
import type { MarkerCfg } from '../marker';
import type { DisplayObjectConfig, MixAttrs, TextProps, RectProps } from '../../types';

export type IMarkerCfg = Omit<MarkerCfg, 'symbol'>;

export type ButtonCfg = {
  x?: number;
  y?: number;
  /**
   * 按钮类型
   */
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * 按钮宽度
   */
  width?: number;
  /**
   * 按钮高度
   */
  height?: number;
  /**
   * 按钮形状
   */
  shape?: 'circle' | 'round';
  /**
   * 按钮禁用
   */
  disabled?: boolean;
  /**
   * 省略超长文本
   */
  ellipsis?: boolean;
  /**
   * 文本与按钮边缘的间距
   */
  padding?: number;
  /**
   * 按钮文本
   */
  text?: string;
  marker?: MarkerCfg['symbol'];
  /**
   * marker 位置
   */
  markerAlign?: 'left' | 'right';
  /**
   * marker 与文本 间距
   */
  markerSpacing?: number;
  /**
   * 点击回调函数
   */
  onClick?: Function;
  /**
   * 自定义文本样式
   */
  textStyle?: MixAttrs<Partial<TextProps>>;
  /**
   * 自定义按钮样式
   */
  buttonStyle?: MixAttrs<Partial<RectProps>>;
  /**
   *
   */
  markerStyle?: MixAttrs<IMarkerCfg>;
  /**
   * 指针
   */
  cursor?: Cursor;
};

export type ButtonOptions = DisplayObjectConfig<ButtonCfg>;
