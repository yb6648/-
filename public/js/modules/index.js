layui.define(['tree'], function (exports) {
    // var lay = layui;
    //树形菜单layui.tree
    layui.tree({
        elem: '#demo',
        nodes: dir
    })

    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});

