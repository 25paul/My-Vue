import Vue from 'vue'
import {
  Button,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Form,
  FormItem,
  Input,
  DatePicker,
  Select,
  Option,
  MessageBox,
  Message
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import '../styles/element-theme/index.css';

Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Select);
Vue.use(Option);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
