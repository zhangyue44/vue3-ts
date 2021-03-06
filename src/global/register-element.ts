import { App } from "vue";
import "element-plus/lib/theme-chalk/base.css";
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
} from "element-plus";

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
];

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
