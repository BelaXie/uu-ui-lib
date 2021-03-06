import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import { h } from "vue"
import Markdown from './components/Markdown.vue'
import Install from './markdowns/Install.md'
import Intro from './markdowns/Intro.md'
import GetStarted from './markdowns/GetStarted.md'

const history = createWebHashHistory()
const md = content => h(Markdown, { content, key: content })
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", redirect: "/doc/intro" },
                { path: "intro", component: md(Intro) },
                { path: "install", component: md(Install) },
                { path: "get-started", component: md(GetStarted) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ]
        }
    ]
})
