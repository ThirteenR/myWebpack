import Stack from "./Stack";
class NodeStack extends Stack{
      constructor(target){
          super();
          this.target = target;
          this.observer = new MutationObserver(function (p1,p2) {
              console.log(p1,p2);
          });
          this.observer.observe(this.target,{
              'childList': true, //该元素的子元素新增或者删除
              'subtree': true, //该元素的所有子元素新增或者删除
              'attributes' : true, //监听属性变化
              'characterData' : true, // 监听text或者comment变化
              'attributeOldValue' : true, //属性原始值
              'characterDataOldValue' : true
          });
      }
}
export default NodeStack;