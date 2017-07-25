/**
 * Created by 刘佳佳 on 2017/04/24
 * 系统相关配置
 */
define(["dojo/_base/declare"], function (declare) {
    var servicesHost = "172.17.204.200:6080";   //200 GIS服务器地址
    return {
        baseMapConfig: {//地图底图配置
            mapChangeKeepExtent: true,//地图切换后是否保留原有位置
            mapsNum: 2,
            maps: [
                {
                    id:'basemap_electronic',
                    mapUrl: "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/TaxParcel/AssessorsBasemap/MapServer",//"http://" + servicesHost + "/arcgis/rest/services/YNGXPT_2016B/MapServer",//"http://" + servicesHost + "/arcgis/rest/services/YNGXPT_2016B/MapServer",
                    label: "云南电子地图",
                    image: "/Content/MapsDisplaySys/Images/BaseMap/electricBase.png",
                    initExtent: {
                        wkid: "4326",
                        xmin: 93.97237224580051,
                        ymin: 20.694045400965813,
                        xmax: 109.57257985825726,
                        ymax: 29.661197705674677
                    }
                },
                {
                    id: 'basemap_image',
                    mapUrl: "http://" + servicesHost + "/arcgis/rest/services/ynRaster/ImageServer",//http://172.17.204.200:6080/arcgis/rest/services/ynRaster/ImageServer
                    label: "云南影像地图",
                    image: "/Content/MapsDisplaySys/Images/BaseMap/imageBase.png",
                },
                {
                    id: 'basemap_seasail',
                    mapUrl: "http://" + servicesHost + "/arcgis/rest/services/InlandENC_YNGIS/MapServer",
                    label: "电子航道地图",
                    image: "/Content/MapsDisplaySys/Images/BaseMap/electricBase.png",
                }
            ]
        },
        urlConfig: {//地图服务配置
            //几何服务地址
            geometryService: "http://" + servicesHost + "/arcgis/rest/services/Utilities/Geometry/GeometryServer",//http://172.17.204.200:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer
            //打印服务地址
            printService: "http://" + servicesHost + "/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task",
            //
            RoadNetService: "http://" + servicesHost + "/arcgis/rest/services/PlanningRoad_B/MapServer/0",
            LWlayer: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_LWlayer/MapServer",
            YNGXPT: "http://172.17.204.200:6080/arcgis/rest/services/YNGXPT_2016B/MapServer",
            XZlayer: "http://" + servicesHost + "/arcgis/rest/services/YNGXPT_QXXZ_XZQH/MapServer/0",  //乡镇行政区划
            QXlayer: "http://" + servicesHost + "/arcgis/rest/services/YNGXPT_QXXZ_XZQH/MapServer/1",  //区县行政区划
            YQ_Mlayer: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_IndustrialPark/MapServer/1",  //工业园区面
            YQ_Dlayer: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_IndustrialPark/MapServer/0",  //工业园区点
        },
        backGroundSevice: {
            dltb: "http://172.17.204.200:6080/arcgis/rest/services/YNGHYZT_DLTB/MapServer",
            hjmgq: "http://172.17.204.200:6080/arcgis/rest/services/YNGHYZT_HJMGQ/MapServer",
            gyyq: "http://172.17.204.200:6080/arcgis/rest/services/YNGHYZT_IndustrialParkLayer/MapServer"
        },
        investmentConfig: {//交调指标服务配置
            //交调服务访问接口
            //serviceUrl: "http://172.16.0.29:81/TirsAPI/Query.ashx",//内网
            serviceUrl: "http://42.243.108.41:81/TirsAPI/Query.ashx",//外网
            serviceKey: "FD9SCVJP",
            //交通流量观测站服务
            trafficStationServiceUrl: "http://172.17.204.200:6080/arcgis/rest/services/JD_ZD/MapServer",//"http://" + servicesHost + "/arcgis/rest/services/GLZT/MapServer",
            trafficStationServiceId: 0,
            //交通流量路线服务
            trafficRoadService: "http://172.17.204.200:6080/arcgis/rest/services/JD_LX/MapServer",
            trafficRoadServiceId: 0,
        },
        inputPrompt: {
            city: ['德钦县(DQ 迪庆藏族自治州)', '维西傈僳族自治县(WX 迪庆藏族自治州)', '红河县(HH 红河哈尼族彝族自治州)', '屏边苗族自治县(PB 红河哈尼族彝族自治州)', '元阳县(YY 红河哈尼族彝族自治州)', '澜沧拉祜族自治县(LC 普洱市)', '马关县(MG 文山壮族苗族自治州)', '绿春县(MG 红河哈尼族彝族自治州)', '思茅区(SM 普洱市)', '金平苗族瑶族傣族自治县(JP 红河哈尼族彝族自治州)', '河口瑶族自治县(HK 红河哈尼族彝族自治州)', '西盟佤族自治县(XM 普洱市)', '彝良县(YL 昭通市)', '景洪市(JH 西双版纳傣族自治州)', '孟连傣族拉祜族佤族自治县(ML 普洱市)', '勐海县(MH 西双版纳傣族自治州)', '瑞丽市(RL 德宏傣族景颇族自治州)', '勐腊县(ML 西双版纳傣族自治州)', '江城哈尼族彝族自治县(JC 普洱市)', '宁蒗彝族自治县(NL 丽江市)', '巧家县(QJ 昭通市)', '永胜县(YS 丽江市)', '会泽县(HZ 曲靖市)', '镇雄县(ZX 昭通市)', '洱源县(EY 大理白族自治州)',
                '禄丰县(LF 楚雄彝族自治州)', '盘龙区(PL 昆明市)', '西山区(XS 昆明市)', '建水县(JS 红河哈尼族彝族自治州)', '个旧市(GJ 红河哈尼族彝族自治州)', '安宁市(AN 昆明市)', '景谷傣族彝族自治县(JG 普洱市)', '双江拉祜族佤族布朗族傣族自治县(SJ 临沧市)', '文山市(WS 文山壮族苗族自治州)', '西畴县(XC 文山壮族苗族自治州)', '宁洱哈尼族彝族自治县(NE 普洱市)', '蒙自市(MZ 红河哈尼族彝族自治州)', '麻栗坡县(MLP 文山壮族苗族自治州)', '沧源佤族自治县(CY 临沧市)', '富民县(FM 昆明市)', '五华区(WH 昆明市)', '华宁县(HN 玉溪市)', '玉龙纳西族自治县(YL 丽江市)', '昭阳区(ZY 昭通市)', '鲁甸县(LD 昭通市)', '福贡县(FG 怒江傈僳族自治州)', '古城区(GC 丽江市)', '兰坪白族普米族自治县(LP 怒江傈僳族自治州)', '华坪县(HP 丽江市)', '香格里拉县(XGLL 迪庆藏族自治州)', '宣威市(XW 曲靖市)', '鹤庆县(HQ 大理白族自治州)', '剑川县(JC 大理白族自治州)',
                '东川区(DC 昆明市)', '泸水县(LS 怒江傈僳族自治州)', '永仁县(YR 楚雄彝族自治州)', '大姚县(DY 楚雄彝族自治州)', '云龙县(YL 大理白族自治州)', '禄劝彝族苗族自治县(LQ 昆明市)', '宾川县(BC 大理白族自治州)', '绥江县(SJ 昭通市)', '武定县(WD 楚雄彝族自治州)', '元谋县(YM 楚雄彝族自治州)', '沾益县(ZY 曲靖市)', '大理市(DL 大理白族自治州)', '寻甸回族彝族自治县(XD 昆明市)', '富源县(FY 曲靖市)', '漾濞彝族自治县(YB 大理白族自治州)', '祥云县(XY 大理白族自治州)', '腾冲县(TC 保山市)', '永平县(YP 大理白族自治州)', '水富县(SF 昭通市)', '姚安县(YA 楚雄彝族自治州)', '牟定县(MD 楚雄彝族自治州)', '隆阳区(LY 昭通市)', '马龙县(ML 曲靖市)', '麒麟区(QL 曲靖市)', '巍山彝族回族自治县(WS 大理白族自治州)', '弥渡县(MD 大理白族自治州)', '嵩明县(SM 昆明市)', '罗平县(LP 曲靖市)', '南华县(NH 大理白族自治州)', '永善县(YS 昭通市)',
                '盈江县(YJ 德宏傣族景颇族自治州)', '楚雄市(CX 楚雄彝族自治州)', '陆良县(LL 曲靖市)', '宜良县(YL 昆明市)', '官渡区(GD 昆明市)', '昌宁县(CN 保山市)', '南涧彝族自治县(NJ 大理白族自治州)', '凤庆县(FQ 临沧市)', '师宗县(SZ 曲靖市)', '石林彝族自治县(SL 昆明市)', '盐津县(YJ 昭通市)', '呈贡区(CG 昆明市)', '施甸县(SD 保山市)', '梁河县(LH 德宏傣族景颇族自治州)', '易门县(YM 玉溪市)', '澄江县(CJ 玉溪市)', '双柏县(SB 楚雄彝族自治州)', '龙陵县(LL 保山市)', '景东彝族自治县(JD 普洱市)', '晋宁县(JN 昆明市)', '泸西县(LX 红河哈尼族彝族自治州)', '贡山独龙族怒族自治县(GS 怒江傈僳族自治州)', '云县(YX 临沧市)', '陇川县(LC 德宏傣族景颇族自治州)', '芒市(MS 德宏傣族景颇族自治州)', '弥勒市(ML 红河哈尼族彝族自治州 )', '红塔区(HT 红塔区)', '峨山彝族自治县(ES 玉溪市)', '江川县(JC 玉溪市)', '丘北县(QB 文山壮族苗族自治州)',
                '广南县(GN 文山壮族苗族自治州)', '永德县(YD 临沧市)', '大关县(DG 昭通市)', '新平彝族傣族自治县(XP 玉溪市)', '镇沅彝族哈尼族拉祜族自治县(ZY 普洱市)', '临翔区(LX 临沧市)', '镇康县(ZK 临沧市)', '通海县(TH 玉溪市)', '富宁县(FN 文山壮族苗族自治州)', '石屏县(SP 红河哈尼族彝族自治州)', '耿马傣族佤族自治县(GM 临沧市)', '砚山县(YS 文山壮族苗族自治州)', '墨江哈尼族自治县(MJ 普洱市)', '威信县(WX 昭通市)', '开远市(KY 红河哈尼族彝族自治州)', '元江哈尼族彝族傣族自治县(YJ 玉溪市)',
                '迪庆藏族自治州(DQ 云南省)', '怒江傈僳族自治州(NJ 云南省)', '文山壮族苗族自治州(WS 云南省)', '昆明市(KM 云南省)', '保山市(BS 云南省)', '丽江市(LJ 云南省)', '大理白族自治州(DL 云南省)', '楚雄彝族自治州(CX 云南省)', '临沧市(LC 云南省)', '德宏傣族景颇族自治州(DH 云南省)', '西双版纳傣族自治州(XSBN 云南省)', '普洱市(PE 云南省)', '昭通市(ZT 云南省)', '曲靖市(QJ 云南省)', '红河哈尼族彝族自治州(HH 云南省)', '玉溪市(YX 云南省)',
                '威信至镇雄高速公路', '镇雄至赫章高速公路', '威宁至宣威高速公路', '宣威至曲靖高速公路', '曲靖至师宗高速公路', '师宗至丘北高速公路', '丘北至砚山高速公路', '砚山至文山高速公路', '文山至天保高速公路', '水富至麻柳湾高速公路', '麻柳湾至昭通高速公路', '昭通至会泽高速公路', '会泽至待补高速公路', '待补至功山高速公路', '功山至嵩明高速公路', '嵩明至昆明高速公路', '嵩明至宜良高速公路', '宜良至石林高速公路', '石林至锁龙寺高速公路', '锁龙寺至蒙自段', '蒙自至新街段', '新街至河口段', '永仁至武定段', '武定至昆明段', '富民至晋宁', '昆明至玉溪', '玉溪至元江段', '元江至磨黑段',
                '墨江至江城（勐康）高速公路', '隔界河至德钦段', '德钦至香格里拉段', '香格里拉至丽江段', '丽江至大理', '大理至南涧', '南涧至景东高速公路', '景东至镇沅高速公路', '振太至景谷高速公路', '景谷至宁洱高速公路', '思茅至小勐养段', '小勐养至磨憨段', '保山至泸水段', '云县至保山段', '临沧至云县段', '临翔至双江高速公路', '双江至勐海高速公路', '勐海至打洛', '镇雄至毕节高速公路', '镇雄至昭通高速公路', '昭通至金阳段', '泸沽湖至香格里拉段', '普立至宣威段', '沾益至会泽高速公路', '会泽至巧家高速公路', '川滇界至华坪段', '华坪至丽江段', '丽江至剑川', '剑川至兰坪高速公路', '兰坪至云龙高速公路', '云龙至泸水高速公路', '泸水至片马高速公路', '富源至曲靖段', '曲靖至沾益', '沾益至寻甸高速公路', '武定至倘甸至寻甸高速公路', '武定至禄丰（勤丰）', '禄丰（勤丰）至牟定', '牟定至姚安', '姚安至大理',
                '大理至保山段', '保山至龙陵段', '小田坝至腾冲段', '腾冲至猴桥段', '江底至召夸段', '召夸至陆良段', '陆良至石林段', '石林至昆明段', '昆明至安宁段', '安宁至楚雄段', '楚雄至大理段', '祥云至龙陵高速公路', '龙陵至瑞丽段', '罗村口至富宁段', '富宁至砚山段', '砚山至文山段', '文山至蒙自段', '蒙自至鸡街段', '鸡街至石屏段', '石屏至红龙厂段', '红龙厂至临翔段', '临沧至清水河高速公路', '泸水至界头高速公路', '界头至腾冲高速公路 ‘腾冲至陇川高速公路', '陇川至瑞丽高速公路', '芒市至孟连高速公路', '孟连至惠民', '惠民至勐海', '勐海至景洪', '景洪至勐醒', '勐醒至元阳高速公路', '元阳至蔓耗高速公路', '蔓耗至河口', '河口至马关高速公路', '马关至兴街高速公路', '兴街至富宁高速公路', '镇康至清水河高速公路', '西北', '西南', '东南', '曲靖至陆良（召夸）段', '陆良至泸西高速公路', '泸西至弥勒高速公路',
                '弥勒至峨山段', '峨山至楚雄段', '楚雄至牟定高速公路', '牟定至禄丰', '禄丰至武定', '武定至倘甸至寻甸高速公路', '寻甸至沾益高速公路', '沾益至曲靖', '串丝至新市高速公路', '永善至大关悦乐高速公路', '彝良至宜宾高速公路', '威信至珙县高速公路', '富源至兴义高速公路', '罗平至八大河高速公路', '西林至广南高速公路', '广南至那洒高速公路', '那洒至西畴高速公路', '功山至东川高速公路', '东川至格勒高速公路', '格勒至巧家高速公路', '呈贡至石林高速公里', '石林至泸西高速公路', '泸西至富宁高速公路', '富宁至那坡高速公路', '砚山至平远街段', '平远街至锁龙寺段', '平远街至文山高速公路', '文山至马关高速公路', '梁河至芒市高速公路', '蒙自至屏边高速公路', '曲靖至嵩明', '昆明至嵩明', '三宝至清水高速公路', '清水至呈贡（新昆嵩）', '呈贡至澄江', '澄江至江川高速公路', '江川至通海高速公路', '通海至建水高速公路',
                '建水至元阳高速公路', '皎平渡至禄劝高速公路', '昆明至禄丰', '禄丰至易门高速公路', '永仁至大姚高速公路', '大姚至姚安高速公路', '姚安至牟定', '牟定至双柏', '双柏至元江高速公路', '元江至元阳高速公路', '元阳至蔓耗高速公路', '蛮耗至金平（金水河）高速公路', '上关至鹤庆高速公路', '丽江机场高速公里', '泸沽湖至永胜高速公路', '永胜至宾川高速公路', '宾川至南涧高速公路', '南涧至云县', '大开门至新平高速公路', '新平至嘎洒高速公路', '嘎洒至镇沅高速公路', '普洱至江城高速公路', '磨黑至思茅段', '普洱至澜沧高速公路', '澜沧至孟连至勐阿高速公路', '勐腊至勐满高速公路', '大理至宾川高速公路', '宾川至攀枝花高速公路', '大理至漾濞至云龙高速公路', '大理至祥云', '云龙至永平高速公路', '永平至保山', '保山至施甸高速公路', '施甸至永德高速公路', '永德至耿马(勐简)', '保山至龙陵段', '龙陵至瑞丽段', '镇康至清水河高速公路',
                '峨山至石屏至红河高速', '香格里拉至维西高速公路', '维西至兰坪高速公路', '兰坪至云龙高速公路', '云龙至永平高速公路', '永平至保山', '保山至施甸高速公路', '施甸至永德高速公路', '高峣至海口高速', '晋宁至红塔区高速', '玉溪至江川高速', '昆明东连接线', '昆明南连接线', '昆明长水机场高速', '长水机场北高速', '保山市东绕城高速', '曲靖绕城高速', '楚雄至广通高速', '羊街至鸡街高速']



        },
        indicatiorsConfig: {//指标统计配置http://172.17.204.200:6080/arcgis/rest/services/YNGHYZT_Indicators2/MapServer
            opacity: 0.7,
            catalog: [
                { name: "GDP(绝对值)", value: "GDP" },
                { name: "GDP(相对值)", value: "GDPindex" },
                { name: "财政指数", value: "Revenue" },
                { name: "固定资产", value: "fixedAsset" },
                { name: "工业增加值", value: "Industrial" },
                { name: "国内游客人次", value: "LocalTouri" },
                { name: "海外游客人次", value: "ForeignTou" },
                { name: "城市化率", value: "Urbanizati" },
                { name: "建成区面积", value: "BuiltUpAre" }],
            xzq: ["昆明市", "丽江市", "临沧市", "红河州", "昭通市", "玉溪市", "迪庆州", "西双版纳州", "德宏州", "文山州", "大理州", "曲靖市", "楚雄州", "普洱市", "保山市", "怒江州", '全省'],
            startYear: 1995,    //开始年份
            endYear: 2016,      //结束年份
            qureyUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer/1",
            IndicatiorsUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",
            GDPAbsoluteUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//GDP绝对值
            GDPAbsoluteField: "GDP",
            GDPAbsoluteLayerId: 1,
            GDPAbsoluteVisual: [
                { min: 5.435800, max: 108.079600, color: 'rgba(56, 168, 0, 255)' },
                { min: 108.079601, max: 239.673300, color: 'rgba(90, 186, 0, 255)' },
                { min: 239.673301, max: 440.966200, color: 'rgba(131, 207, 0, 255)' },
                { min: 440.966201, max: 730.081300, color: 'rgba(176, 224, 0, 255)' },
                { min: 730.081301, max: 1127.090000, color: 'rgba(228, 245, 0, 255)' },
                { min: 1127.090001, max: 1644.230000, color: 'rgba(255, 225, 0, 255)' },
                { min: 1644.230001, max: 2509.580000, color: 'rgba(255, 170, 0, 255)' },
                { min: 2509.580001, max: 4741.310000, color: 'rgba(255, 115, 0, 255)' },
                { min: 4741.310001, max: 8993.120000, color: 'rgba(255, 55, 0, 255)' },
                { min: 8993.120001, max: 14869.950000, color: 'rgba(255, 0, 0, 255)' }
            ],
            GDPRelativeUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//GDP相对数
            GDPRelativeField: "GDPindex",
            GDPRelativeLayerId: 4,
            GDPRelativeVisual: [
                { min: -0.078000, max: -0.074000, color: 'rgba(56, 168, 0, 255)' },
                { min: -0.001000, max: 0.050000, color: 'rgba(90, 186, 0, 255)' },
                { min: 0.053000, max: 0.077000, color: 'rgba(131, 207, 0, 255)' },
                { min: 0.078000, max: 0.092000, color: 'rgba(176, 224, 0, 255)' },
                { min: 0.093000, max: 0.109000, color: 'rgba(228, 245, 0, 255)' },
                { min: 0.110000, max: 0.125000, color: 'rgba(255, 225, 0, 255)' },
                { min: 0.126000, max: 0.142000, color: 'rgba(255, 170, 0, 255)' },
                { min: 0.145000, max: 0.168000, color: 'rgba(255, 115, 0, 255)' },
                { min: 0.180000, max: 0.239000, color: 'rgba(255, 55, 0, 255)' },
                { min: 0.356000, max: 0.479000, color: 'rgba(255, 0, 0, 255)' }
            ],
            FiscalRevenueUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//财政指数
            FiscalRevenueField: "Revenue",
            FiscalRevenueLayerId: 7,
            FiscalRevenueVisual: [
                { min: 0.480000, max: 9.910000, color: 'rgba(56, 168, 0, 255)' },
                { min: 9.910001, max: 23.290000, color: 'rgba(90, 186, 0, 255)' },
                { min: 23.290001, max: 42.840000, color: 'rgba(131, 207, 0, 255)' },
                { min: 42.840001, max: 84.480000, color: 'rgba(176, 224, 0, 255)' },
                { min: 84.480001, max: 150.420000, color: 'rgba(228, 245, 0, 255)' },
                { min: 150.420001, max: 263.360000, color: 'rgba(255, 225, 0, 255)' },
                { min: 263.360001, max: 450.750000, color: 'rgba(255, 170, 0, 255)' },
                { min: 450.750001, max: 698.260000, color: 'rgba(255, 115, 0, 255)' },
                { min: 698.260001, max: 1338.150000, color: 'rgba(255, 55, 0, 255)' },
                { min: 1338.150001, max: 1812.260000, color: 'rgba(255, 0, 0, 255)' }
            ],
            FixedAssetsUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//固定资产
            FixedAssetsField: "fixedAsset",
            FixedAssetsLayerId: 10,
            FixedAssetsVisual: [
                { min: 1.188600, max: 89.141600, color: 'rgba(56, 168, 0, 255)' },
                { min: 89.141601, max: 222.630000, color: 'rgba(90, 186, 0, 255)' },
                { min: 222.630001, max: 393.710000, color: 'rgba(131, 207, 0, 255)' },
                { min: 393.710001, max: 641.910000, color: 'rgba(176, 224, 0, 255)' },
                { min: 641.910001, max: 1053.160000, color: 'rgba(228, 245, 0, 255)' },
                { min: 1053.160001, max: 1794.000000, color: 'rgba(255, 225, 0, 255)' },
                { min: 1794.000001, max: 3138.170000, color: 'rgba(255, 170, 0, 255)' },
                { min: 3138.170001, max: 5528.710000, color: 'rgba(255, 115, 0, 255)' },
                { min: 5528.710001, max: 9621.830000, color: 'rgba(255, 55, 0, 255)' },
                { min: 9621.830001, max: 15662.490000, color: 'rgba(255, 0, 0, 255)' }
            ],
            IndustryValueAddUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//工业增加值
            IndustryValueAddField: "Industrial",
            IndustryValueAddLayerId: 13,
            IndustryValueAddVisual: [
                { min: 0.000000, max: 2.000000, color: 'rgba(56, 168, 0, 255)' },
                { min: 2.000001, max: 11.832800, color: 'rgba(90, 186, 0, 255)' },
                { min: 11.832801, max: 20.590000, color: 'rgba(131, 207, 0, 255)' },
                { min: 20.590001, max: 33.840000, color: 'rgba(176, 224, 0, 255)' },
                { min: 33.840001, max: 48.984600, color: 'rgba(228, 245, 0, 255)' },
                { min: 48.984601, max: 74.053100, color: 'rgba(255, 225, 0, 255)' },
                { min: 74.053101, max: 106.320000, color: 'rgba(255, 170, 0, 255)' },
                { min: 106.320001, max: 146.820000, color: 'rgba(255, 115, 0, 255)' },
                { min: 146.820001, max: 195.430000, color: 'rgba(255, 55, 0, 255)' },
                { min: 195.430001, max: 277.580000, color: 'rgba(255, 0, 0, 255)' }
            ],
            TouristLocalAmountUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//云南省各州市国内游客人次
            TouristLocalAmountField: "LocalTouri",
            TouristLocalAmountLayerId: 16,
            TouristLocalAmountVisual: [
                { min: 0.000, max: 119.600, color: 'rgba(56, 168, 0, 255)' },
                { min: 119.610, max: 405.080, color: 'rgba(90, 186, 0, 255)' },
                { min: 421.110, max: 642.080, color: 'rgba(131, 207, 0, 255)' },
                { min: 686.050, max: 876.370, color: 'rgba(176, 224, 0, 255)' },
                { min: 921.640, max: 1200.430, color: 'rgba(228, 245, 0, 255)' },
                { min: 1264.150, max: 1659.470, color: 'rgba(255, 225, 0, 255)' },
                { min: 1736.350, max: 2309.570, color: 'rgba(255, 170, 0, 255)' },
                { min: 2556.120, max: 4002.100, color: 'rgba(255, 115, 0, 255)' },
                { min: 4600.000, max: 6861.000, color: 'rgba(255, 55, 0, 255)' },
                { min: 7721.000, max: 12022.850, color: 'rgba(255, 0, 0, 255)' }
            ],
            TouristForeignAmountUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//云南省各州市海外游客人次
            TouristForeignAmountField: "ForeignTou",
            TouristForeignAmountLayerId: 19,
            TouristForeignAmountVisual: [
                { max: 0, color: 'rgba(56, 168, 0, 255)' },
                { min: 0.000001, max: 7.810000, color: 'rgba(90, 186, 0, 255)' },
                { min: 7.810001, max: 15.490000, color: 'rgba(131, 207, 0, 255)' },
                { min: 15.490001, max: 26.444200, color: 'rgba(176, 224, 0, 255))' },
                { min: 26.444201, max: 42.666500, color: 'rgba(228, 245, 0, 255)' },
                { min: 42.666501, max: 62.800000, color: 'rgba(255, 225, 0, 255)' },
                { min: 62.800001, max: 88.940000, color: 'rgba(255, 170, 0, 255)' },
                { min: 88.940001, max: 181.000000, color: 'rgba(255, 115, 0, 255)' },
                { min: 181.000001, max: 395.380000, color: 'rgba(255, 55, 0, 255)' },
                { min: 395.380001, max: 570.080000, color: 'rgba(255, 0, 0, 255)' }
            ],
            UrbanizationRateUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//云南省城市化率
            UrbanizationRateField: "Urbanizati",
            UrbanizationRateLayerId: 22,
            UrbanizationRateVisual: [
                { min: 9.073901, max: 17.194216, color: 'rgba(56, 168, 0, 255)' },
                { min: 17.194217, max: 22.007147, color: 'rgba(90, 186, 0, 255)' },
                { min: 22.007148, max: 25.577265, color: 'rgba(131, 207, 0, 255)' },
                { min: 25.577266, max: 28.496959, color: 'rgba(176, 224, 0, 255)' },
                { min: 28.496960, max: 32.000000, color: 'rgba(228, 245, 0, 255)' },
                { min: 32.000001, max: 36.000000, color: 'rgba(255, 225, 0, 255)' },
                { min: 36.000001, max: 40.660000, color: 'rgba(255, 170, 0, 255)' },
                { min: 40.660001, max: 45.958184, color: 'rgba(255, 115, 0, 255)' },
                { min: 45.958185, max: 54.938657, color: 'rgba(255, 55, 0, 255)' },
                { min: 54.938658, max: 71.050000, color: 'rgba(255, 0, 0, 255)' }
            ],
            BuiltupAreaUrl: "http://" + servicesHost + "/arcgis/rest/services/YNGHYZT_Indicators2/MapServer",//云南省州市建成区面积
            BuiltupAreaField: "BuiltUpAre",
            BuiltupAreaLayerId: 25,
            BuiltupAreaVisual: [
                { min: 0, max: 4.000000, color: 'rgba(56, 168, 0, 255)' },
                { min: 4.000001, max: 24.000000, color: 'rgba(90, 186, 0, 255)' },
                { min: 24.000001, max: 43.950000, color: 'rgba(131, 207, 0, 255)' },
                { min: 43.950001, max: 65.860000, color: 'rgba(176, 224, 0, 255)' },
                { min: 65.860001, max: 91.360000, color: 'rgba(228, 245, 0, 255)' },
                { min: 91.360001, max: 125.000000, color: 'rgba(255, 225, 0, 255)' },
                { min: 125.000001, max: 176.920000, color: 'rgba(255, 170, 0, 255)' },
                { min: 176.920001, max: 300.090000, color: 'rgba(255, 115, 0, 255)' },
                { min: 300.090001, max: 530.920000, color: 'rgba(255, 55, 0, 255)' },
                { min: 530.920001, max: 1772.030000, color: 'rgba(255, 0, 0, 255)' }
            ]
        },


    }

})