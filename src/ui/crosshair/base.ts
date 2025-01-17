import { Path, Group } from '@antv/g';
import { deepMix } from '@antv/util';
import { GUI } from '../../core/gui';
import { Tag } from '../tag';
import { CROSSHAIR_BASE_DEFAULT_STYLE } from './constant';
import type { CrosshairBaseCfg, CrosshairBaseOptions } from './types';
import type { PathCommand, Point } from '../../types';

export abstract class CrosshairBase<T extends CrosshairBaseCfg> extends GUI<Required<T>> {
  public static tag = 'crosshair-base';

  protected static defaultOptions = {
    type: CrosshairBase.tag,
    style: CROSSHAIR_BASE_DEFAULT_STYLE,
  };

  /**
   * 指针位置
   */
  protected pointer!: Point;

  protected shapesGroup!: Group;

  protected tagShape!: Tag;

  protected crosshairShape!: Path;

  /**
   * 获得 pointer 的相对坐标
   */
  protected get localPointer() {
    const [bx, by] = this.getPosition();
    const [x, y] = this.pointer;
    return [x - bx, y - by];
  }

  /**
   * 获得 crosshair 的 path
   */
  protected abstract get crosshairPath(): PathCommand[];

  private get tagCfg() {
    const { text } = this.attributes;
    const { position, ...rest } = text!;
    return rest;
  }

  private get crosshairCfg() {
    const { lineStyle } = this.attributes;
    return {
      ...lineStyle,
      path: this.crosshairPath,
    };
  }

  constructor(options: CrosshairBaseOptions) {
    super(deepMix({}, CrosshairBase.defaultOptions, options));
    this.init();
  }

  public init() {
    this.initShape();
    this.adjustLayout();
  }

  public update(cfg: Partial<CrosshairBaseCfg>) {
    this.attr(deepMix({}, this.attributes, cfg));
    this.tagShape.update(this.tagCfg);
    this.crosshairShape.attr(this.crosshairCfg);
    this.adjustLayout();
  }

  public clear() {}

  public destroy() {}

  /**
   * 设置当前指针的位置
   * 1. 线条类型 调整位置即可
   * 2. circle 和 polygon 需要重新计算 path
   */
  public setPointer(pointer: Point) {
    this.pointer = pointer;
  }

  /**
   * 调整tag
   */
  protected abstract adjustLayout(): void;

  private initShape() {
    this.shapesGroup = new Group({ name: 'crosshairGroup' });
    this.appendChild(this.shapesGroup);
    this.tagShape = new Tag({ name: 'tag', style: this.tagCfg });
    this.shapesGroup.appendChild(this.tagShape);
    this.crosshairShape = new Path({
      name: 'crosshair',
      style: this.crosshairCfg,
    });
    this.shapesGroup.appendChild(this.crosshairShape);
  }
}
