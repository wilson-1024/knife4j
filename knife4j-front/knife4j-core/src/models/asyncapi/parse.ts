
import { Knife4jInstance } from '../knife4j/Knife4jInstance';
import { Knife4jPathItemObject } from '../knife4j/operation/Knife4jPathItemObject';
import { BaseCommonParser } from '../knife4j/BaseCommonParser';
import { Knife4jParseOptions } from '../knife4j/Knife4jParseOptions';
/**
 * 解析AsyncAPI的规范
 */
export class AsyncAPIParser extends BaseCommonParser {
  parse(data: Record<string, any>, options: Knife4jParseOptions): Knife4jInstance {
    return new Knife4jInstance('', '', '', this, options);
  }
  /**
    * 异步解析Path节点，只有在打开文档展示页的情况下才解析该配置，避免前端解析渲染性能问题
    * @param instance path节点的数据
    * @param options 个性化解析配置选项
   */
  parsePathAsync(operation: Knife4jPathItemObject, instance: Knife4jInstance, options: Knife4jParseOptions): void {
    console.log("异步解析path节点")
  }
}
