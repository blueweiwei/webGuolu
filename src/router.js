const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/result',
        meta: {
            title: '结果'
        },
        component: (resolve) => require(['./views/result.vue'], resolve)
    }
];
export default routers;