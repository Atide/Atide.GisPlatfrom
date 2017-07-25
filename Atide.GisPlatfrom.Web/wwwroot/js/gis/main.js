﻿/**
 * Created by 刘佳佳 on 2017/04/24
 * 整个地图控件及框架初始化类：完成布局初始化、地图控件初始化
 */
define(["dojo/_base/declare", "dojo/on", "dojo/dom", "dojo/_base/lang", "atide/gis/config/system-config", "atide/gis/mapcontrol"],
    function (declare, on, dom, lang, systemConfig, ArcGISMapControl) {
        return declare('atide.gis.main',null, {
            _mapControl: null,      //地图控件
            _menuType: null,
            //构造函数
            constructor: function (param) {                            
                this._mapControl = new ArcGISMapControl({
                    id: "map"
                });
                this.initControl();   
            },
            initControl: function () {
                $("#tree").height($("#map").height() - 60);
                $("#result").height($("#map").height() - 60);
                this.initToolbar();
                this.initTree();
            },
            initToolbar: function () {
                $('.btn-toolbar').on('click',
                    function (event) {
                        switch ($(this).attr("id")) {
                            case 'tool-xzqtree':
                                //$('#floatPane').css('display', 'block'); 
                                //$('#result').parent().css('display', 'block'); 
                                //$('#tree').parent().css('display', 'none'); 
                                dojo.byId('floatPane').style.display = 'block';
                                dojo.byId('resultdiv').style.display = 'block';
                                dojo.byId('treediv').style.display = 'none';
                                //require(['atide/myModule'], function (myModule) { myModule.setText('result', 'hello11111'); });
                                break;
                            case 'tool-result':
                                //$('#floatPane').css('display', 'block');
                                //$('#result').parent().css('display', 'none');
                                //$('#tree').parent().css('display', 'block'); 
                                dojo.byId('floatPane').style.display = 'block';
                                dojo.byId('resultdiv').style.display = 'none';
                                dojo.byId('treediv').style.display = 'block';
                                break;
                        }
                    });
                
                $('.toolbar-icons a').on('click',
                    function (event) {
                        switch ($(this).attr("id")) {
                            case 'menu-bar-chart':
                                //$('#floatPane').css('display', 'block'); 
                                //$('#result').parent().css('display', 'block'); 
                                //$('#tree').parent().css('display', 'none'); 
                                dojo.byId('floatPane').style.display = 'block';
                                dojo.byId('resultdiv').style.display = 'block';
                                dojo.byId('treediv').style.display = 'none';
                                //require(['atide/myModule'], function (myModule) { myModule.setText('result', 'hello11111'); });
                                break;
                            case 'menu-bars':
                                //$('#floatPane').css('display', 'block');
                                //$('#result').parent().css('display', 'none');
                                //$('#tree').parent().css('display', 'block'); 
                                dojo.byId('floatPane').style.display = 'block';
                                dojo.byId('resultdiv').style.display = 'none';
                                dojo.byId('treediv').style.display = 'block';
                                break;
                            case 'menu-window-close-o':
                                dojo.byId('floatPane').style.display = 'none';
                                dojo.byId('resultdiv').style.display = 'none';
                                dojo.byId('treediv').style.display = 'none';
                                break;
                        }
                    }
                );
                $('.tool-common').toolbar({
                    content: '#tool-common',
                    position: 'bottom',
                    //style: 'primary'
                });
            },
            initTree: function () {
                //require([
                //    "dojo/_base/window", "dojo/data/ItemFileReadStore", "dijit/tree/ForestStoreModel","dojo/store/Memory",
                //    "dijit/tree/ObjectStoreModel", "dijit/Tree",
                //    "dojo/domReady!"
                //], function (win, ItemFileReadStore,ForestStoreModel,Memory, ObjectStoreModel, Tree) {
                //    var store = new ItemFileReadStore({
                //        url: "/data/xzq.json"
                //    });
                    //var myStore = new Memory({
                    //    data: store.data,
                    //    getChildren: function (object) {
                    //        return this.query({ parent: object.id });
                    //        }
                    //});

                    //var treeModel = new ObjectStoreModel({
                    //    store: myStore,
                    //    query: { root: true }
                    //});
                //    var treeModel = new ForestStoreModel({
                //        store: store,
                //        query: { "parent": '53' },
                //        rootId: "53",
                //        rootLabel: "云南省",
                //        childrenAttrs: ["children"]
                //    });

                //    new Tree({
                //        model: treeModel
                //    }, "tree");
                //})
                require([
                    "dojo/_base/window", "dojo/store/Memory",
                    "dijit/tree/ObjectStoreModel", "dijit/Tree",
                    "dojo/domReady!"
                ], function (win, Memory, ObjectStoreModel, Tree) {

                    // Create test store, adding the getChildren() method required by ObjectStoreModel
                    var myStore = new Memory({
                        data: [
                            { id: 53, name: '云南省', root: true },
                            { id: 530100, name: '昆明市', parent: 53 },
                            { id: 530300, name: '曲靖市', parent: 53 },
                            { id: 530400, name: '玉溪市', parent: 53 },
                            { id: 530500, name: '保山市', parent: 53 },
                            { id: 530600, name: '昭通市', parent: 53 },
                            { id: 530700, name: '丽江市', parent: 53 },
                            { id: 530800, name: '普洱市', parent: 53 },
                            { id: 530900, name: '临沧市', parent: 53 },
                            { id: 532300, name: '楚雄彝族自治州', parent: 53 },
                            { id: 532500, name: '红河哈尼族彝族自治州', parent: 53 },
                            { id: 532600, name: '文山壮族苗族自治州', parent: 53 },
                            { id: 532800, name: '西双版纳傣族自治州', parent: 53 },
                            { id: 532900, name: '大理白族自治州', parent: 53 },
                            { id: 533100, name: '德宏傣族景颇族自治州', parent: 53 },
                            { id: 533300, name: '怒江傈僳族自治州', parent: 53 },
                            { id: 533400, name: '迪庆藏族自治州', parent: 53 },
                            { id: 530102, name: '五华区', parent: 530100 },
                            { id: 530103, name: '盘龙区', parent: 530100 },
                            { id: 530111, name: '官渡区', parent: 530100 },
                            { id: 530112, name: '西山区', parent: 530100 },
                            { id: 530113, name: '东川区', parent: 530100 },
                            { id: 530114, name: '呈贡区', parent: 530100 },
                            { id: 530122, name: '晋宁县', parent: 530100 },
                            { id: 530124, name: '富民县', parent: 530100 },
                            { id: 530125, name: '宜良县', parent: 530100 },
                            { id: 530126, name: '石林彝族自治县', parent: 530100 },
                            { id: 530127, name: '嵩明县', parent: 530100 },
                            { id: 530128, name: '禄劝彝族苗族自治县', parent: 530100 },
                            { id: 530129, name: '寻甸回族自治县', parent: 530100 },
                            { id: 530181, name: '安宁市', parent: 530100 },
                            { id: 530302, name: '麒麟区', parent: 530300 },
                            { id: 530321, name: '马龙县', parent: 530300 },
                            { id: 530322, name: '陆良县', parent: 530300 },
                            { id: 530323, name: '师宗县', parent: 530300 },
                            { id: 530324, name: '罗平县', parent: 530300 },
                            { id: 530325, name: '富源县', parent: 530300 },
                            { id: 530326, name: '会泽县', parent: 530300 },
                            { id: 530328, name: '沾益县', parent: 530300 },
                            { id: 530381, name: '宣威县', parent: 530300 },
                            { id: 530402, name: '红塔区', parent: 530400 },
                            { id: 530421, name: '江川县', parent: 530400 },
                            { id: 530422, name: '澄江县', parent: 530400 },
                            { id: 530423, name: '通海县', parent: 530400 },
                            { id: 530404, name: '华宁县', parent: 530400 },
                            { id: 530425, name: '易门县', parent: 530400 },
                            { id: 530406, name: '峨山彝族自治县', parent: 530400 },
                            { id: 530427, name: '新平彝族傣族自治县', parent: 530400 },
                            { id: 530428, name: '元江哈尼族彝族傣族自治县', parent: 530400 },
                            { id: 530502, name: '隆阳区', parent: 530500 },
                            { id: 530521, name: '施甸县', parent: 530500 },
                            { id: 530522, name: '腾冲县', parent: 530500 },
                            { id: 530523, name: '龙陵县', parent: 530500 },
                            { id: 530524, name: '昌宁县', parent: 530500 },
                            { id: 530602, name: '昭阳区', parent: 530600 },
                            { id: 530621, name: '鲁甸县', parent: 530600 },
                            { id: 530622, name: '巧家县', parent: 530600 },
                            { id: 530623, name: '盐津县', parent: 530600 },
                            { id: 530624, name: '大关县', parent: 530600 },
                            { id: 530625, name: '永善县', parent: 530600 },
                            { id: 530626, name: '绥江县', parent: 530600 },
                            { id: 530627, name: '镇雄县', parent: 530600 },
                            { id: 530628, name: '彝良县', parent: 530600 },
                            { id: 530629, name: '威信县', parent: 530600 },
                            { id: 530630, name: '水富县', parent: 530600 },
                            { id: 530702, name: '古城区', parent: 530700 },
                            { id: 530721, name: '玉龙纳西族自治县', parent: 530700 },
                            { id: 530722, name: '永胜县', parent: 530700 },
                            { id: 530723, name: '华坪县', parent: 530700 },
                            { id: 530724, name: '宁蒗彝族自治县', parent: 530700 },
                            { id: 530802, name: '思茅区', parent: 530800 },
                            { id: 530821, name: '宁洱哈尼族彝族县', parent: 530800 },
                            { id: 530822, name: '墨江哈尼族自治县', parent: 530800 },
                            { id: 530823, name: '景东彝族自治县', parent: 530800 },
                            { id: 530824, name: '景谷傣族彝族自治县', parent: 530800 },
                            { id: 530825, name: '镇沅彝族哈尼族拉祜族自治县', parent: 530800 },
                            { id: 530826, name: '江城哈尼族彝族自治县', parent: 530800 },
                            { id: 530827, name: '孟连傣族拉祜族佤族自治县', parent: 530800 },
                            { id: 530828, name: '澜沧拉祜族自治县', parent: 530800 },
                            { id: 530829, name: '西盟佤族自治县', parent: 530800 },
                            { id: 530902, name: '临翔区', parent: 530900 },
                            { id: 530921, name: '凤庆县', parent: 530900 },
                            { id: 530922, name: '云县', parent: 530900 },
                            { id: 530923, name: '永德县', parent: 530900 },
                            { id: 530924, name: '镇康县', parent: 530900 },
                            { id: 530925, name: '双江拉祜族佤族布朗族傣族自治县', parent: 530900 },
                            { id: 530926, name: '耿马傣族佤族自治县', parent: 530900 },
                            { id: 530927, name: '沧源佤族自治县', parent: 530900 },
                            { id: 532301, name: '楚雄市', parent: 532300 },
                            { id: 532322, name: '双柏县', parent: 532300 },
                            { id: 532323, name: '牟定县', parent: 532300 },
                            { id: 532324, name: '南华县', parent: 532300 },
                            { id: 532325, name: '姚安县', parent: 532300 },
                            { id: 532326, name: '大姚县', parent: 532300 },
                            { id: 532327, name: '永仁县', parent: 532300 },
                            { id: 532328, name: '元谋县', parent: 532300 },
                            { id: 532329, name: '武定县', parent: 532300 },
                            { id: 532331, name: '禄丰县', parent: 532300 },
                            { id: 532501, name: '个旧市', parent: 532500 },
                            { id: 532502, name: '开远市', parent: 532500 },
                            { id: 532503, name: '蒙自县', parent: 532500 },
                            { id: 532504, name: '弥勒市', parent: 532500 },
                            { id: 532523, name: '屏边苗族自治县', parent: 532500 },
                            { id: 532524, name: '建水县', parent: 532500 },
                            { id: 532525, name: '石屏县', parent: 532500 },
                            { id: 532527, name: '泸西县', parent: 532500 },
                            { id: 532528, name: '元阳县', parent: 532500 },
                            { id: 532529, name: '红河县', parent: 532500 },
                            { id: 532530, name: '金平苗族瑶族傣族自治县', parent: 532500 },
                            { id: 532531, name: '绿春县', parent: 532500 },
                            { id: 532532, name: '河口瑶族自治县', parent: 532500 },
                            { id: 532601, name: '文山市', parent: 532600 },
                            { id: 532622, name: '砚山县', parent: 532600 },
                            { id: 532623, name: '西畴县', parent: 532600 },
                            { id: 532624, name: '麻栗坡县', parent: 532600 },
                            { id: 532625, name: '马关县', parent: 532600 },
                            { id: 532626, name: '丘北县', parent: 532600 },
                            { id: 532627, name: '广南县', parent: 532600 },
                            { id: 532628, name: '富宁县', parent: 532600 },
                            { id: 532801, name: '景洪市', parent: 532800 },
                            { id: 532822, name: '勐海县', parent: 532800 },
                            { id: 532823, name: '勐腊县', parent: 532800 },
                            { id: 532901, name: '大理市', parent: 532900 },
                            { id: 532922, name: '漾濞彝族自治县', parent: 532900 },
                            { id: 532923, name: '祥云县', parent: 532900 },
                            { id: 532924, name: '宾川县', parent: 532900 },
                            { id: 532925, name: '弥渡县', parent: 532900 },
                            { id: 532926, name: '南涧彝族自治县', parent: 532900 },
                            { id: 532927, name: '巍山彝族回族自治县', parent: 532900 },
                            { id: 532928, name: '永平县', parent: 532900 },
                            { id: 532929, name: '云龙县', parent: 532900 },
                            { id: 532930, name: '洱源县', parent: 532900 },
                            { id: 532931, name: '剑川县', parent: 532900 },
                            { id: 532932, name: '鹤庆县', parent: 532900 },
                            { id: 533102, name: '瑞丽市', parent: 533100 },
                            { id: 533103, name: '芒市', parent: 533100 },
                            { id: 533122, name: '梁河县', parent: 533100 },
                            { id: 533123, name: '盈江县', parent: 533100 },
                            { id: 533124, name: '陇川县', parent: 533100 },
                            { id: 533321, name: '泸水县', parent: 533300 },
                            { id: 533323, name: '福贡县', parent: 533300 },
                            { id: 533324, name: '贡山独龙族怒族自治县', parent: 533300 },
                            { id: 533325, name: '兰坪白族普米族自治县', parent: 533300 },
                            { id: 533421, name: '香格里拉县', parent: 533400 },
                            { id: 533422, name: '德钦县', parent: 533400 },
                            { id: 533423, name: '维西傈僳族自治县', parent: 533400 },
                        ],
                        getChildren: function (object) {
                            return this.query({ parent: object.id });
                        }
                    });

                    // Create the model
                    var myModel = new ObjectStoreModel({
                        store: myStore,
                        query: { root: true }
                    });

                    // Create the Tree, specifying an onClick method
                    (new Tree({
                        model: myModel,
                        onClick: function (item) {
                            // Get the URL from the item, and navigate to it
                            alert(item.name);
                        }
                    })).placeAt("tree").startup();
                });
            },

        //初始化菜单栏
        //initMenu: function () {
        //    var that = this;
        //    require(["atide/gis/tool/xml"], function (xmlConfig) {
        //        var config = new xmlConfig({ path: baseUrl + "data/config/Menu.xml", root: "Menu" });
        //        config.search({ "isvalid": "1" }, function (items, request) {
        //            for (var i = 0; i < items.length; i++) {
        //                var item = items[i];
        //                var title = config._store.getValue(item, "title");
        //                var id = config._store.getValue(item, "id");
        //                var image = config._store.getValue(item, "image");
        //                var style = config._store.getValue(item, "style");

        //                //var li = document.createElement("li");
        //                //li.id = id;
        //                //li.oclick = function () { that.menuChange(para); };
        //                //li.innerHTML = "<a><img src=\"" + image + "\" /><br />" + title + "</a>";
        //                var li = "<li id=\"" + id + "\" style=\"" + style + "\"><a><img src=\"" + image + "\" /><br />" + title + "</a></li>";
        //                $("#systemMenu").append(li);
        //                //document.getElementById(id).onclick = function () { that.menuChange(para); };
        //                $('#' + id).click(function () {
        //                    that._menuType = this.id;
        //                    //if (g_Main._middleLayout.state.east.isHidden) {
        //                        that.menuChange(this.id);
        //                    //}
        //                    //else {
        //                    //    g_Main._middleLayout.hide('east');
        //                    //}
                            
        //                });
        //            }
        //        });
        //    });
        //},

        //菜单栏点击响应函数
        //menuChange: function (menuType) {

            
        //},

    });

});

