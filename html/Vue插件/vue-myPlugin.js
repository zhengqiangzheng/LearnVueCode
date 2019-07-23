// (function (window) {
// //     const MyPlugin = {};
// //     MyPlugin.install=function (Vue, options) {
// //         //全局方法
// //         Vue.myGlobalMethod=function () {
// //             console.log('vue 函数对象-myGlobalMethod');
// //         }
// //         //全局资源
// //         Vue.directive('my-directive', function (el, binding) {
// //             el.textContent = binding.value.toUpperCase();
// //
// //         });
// //         //添加实例方法
// //         Vue.prototype.$myMethod=function () {
// //             console.log('实例方法');
// //         }
// //         //向外暴露
// //         window.MyPlugin = MyPlugin;
// //
// //     }
// // })(window)
(function (window) {
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('Vue函数对象的myGlobalMethod()')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive',function (el, binding) {
            el.textContent = 'my-directive----'+binding.value
        })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            console.log('vm $myMethod()')
        }
    }
    window.MyPlugin = MyPlugin
})(window)
