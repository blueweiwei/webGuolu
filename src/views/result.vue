<style scoped>
.borders{
    /* border:2px dotted #5b6270; */
    border-radius:5px;
    padding: 10px;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
.layout-logo{
    width: 100px;
    color:aqua;
    /* background-color: #5b6270; */
    border-radius: 3px;
    text-align: center;
    position: relative;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <!-- <div class="logo">
                        <Icon type="md-arrow-back" />首页
                        </div> -->
                        <router-link to="/">
                            <img src="../images/logo1.png" alt="">
                        </router-link>
                    </div>
                    
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                </Breadcrumb>
                <Card>
                    <div style="max-width:1200px;">
                    
                    <Row :gutter="16" >
                        <h4>基本参数-表1</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                            <!-- Default panel contents -->
                            <!-- <div class="panel-heading">Panel heading</div> -->

                            <!-- Table -->
                            <table class="table">
                                <tr>
                                    <th colspan="3">（一）基础参数</th>
                                </tr>
                                <tr>
                                    <td>干煤气含水量 gm</td>
                                    <td>{{getData['0'].C3}}</td>
                                    <td>g/m3</td>
                                </tr>
                                <tr>
                                    <td>湿煤气水分含量 H2Os</td>
                                    <td>{{getData['0'].C4}}</td>
                                    <td>%</td>
                                </tr>
                            </table>
                            <table class="table">
                                <tr>
                                    <th colspan="8">煤气成分</th>
                                </tr>
                                <tr>
                                    <td>煤气中各成分 </td>
                                    <td>CO</td>
                                    <td>CO2</td>
                                    <td>H2</td>
                                    <td>CH4</td>
                                    <td>O2</td>
                                    <td>N2</td>
                                    <td>单位</td>
                                </tr>
                                <tr>
                                    <td>干煤气成分 Zg </td>
                                    <td>{{getData['0'].C7}}</td>
                                    <td>{{getData['0'].D7}}</td>
                                    <td>{{getData['0'].E7}}</td>
                                    <td>{{getData['0'].F7}}</td>
                                    <td>{{getData['0'].G7}}</td>
                                    <td>{{getData['0'].H7}}</td>
                                    <td>%</td>
                                </tr>
                                <tr>
                                    <td>湿煤气成分 Zs </td>
                                    <td>{{getData['0'].C8}}</td>
                                    <td>{{getData['0'].D8}}</td>
                                    <td>{{getData['0'].E8}}</td>
                                    <td>{{getData['0'].F8}}</td>
                                    <td>{{getData['0'].G8}}</td>
                                    <td>{{getData['0'].H8}}</td>
                                    <td>%</td>
                                </tr>
                            </table>
                            <table class="table">
                                <tr>
                                    <td>燃料的低发热量 QDW</td>
                                    <td>{{getData['0'].C9}}</td>
                                    <td>KJ/m3</td>
                                </tr>
                                <tr>
                                    <td>干空气含水量 gk</td>
                                    <td>{{getData['0'].C10}}</td>
                                    <td>g/m3</td>
                                </tr>
                            </table>
                            <table class="table">
                                <tr>
                                    <th colspan="8">烟气成分</th>
                                </tr>
                                <tr>
                                    <td>烟气中各成分 </td>
                                    <td>O2</td>
                                    <td>CO2</td>
                                    <td>CO</td>
                                    <td>H2</td>
                                    <td>N2</td>
                                    <td>CH4</td>
                                    <td>单位</td>
                                </tr>
                                <tr>
                                    <td>干烟气成分 Zg' </td>
                                    <td>{{getData['0'].C13}}</td>
                                    <td>{{getData['0'].D13}}</td>
                                    <td>{{getData['0'].E13}}</td>
                                    <td>{{getData['0'].F13}}</td>
                                    <td>{{getData['0'].G13}}</td>
                                    <td>{{getData['0'].H13}}</td>
                                    <td>%</td>
                                </tr>
                                <tr>
                                    <td>湿烟气成分 Zs </td>
                                    <td>{{getData['0'].C14}}</td>
                                    <td>{{getData['0'].D14}}</td>
                                    <td>{{getData['0'].E14}}</td>
                                    <td>{{getData['0'].F14}}</td>
                                    <td>{{getData['0'].G14}}</td>
                                    <td>{{getData['0'].H14}}</td>
                                    <td>%</td>
                                </tr>
                            </table>
                            <table class="table">
                                <tr>
                                    <td>空气系数 α</td>
                                    <td>{{getData['0'].C15}}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>理论干空气量 L0g</td>
                                    <td>{{getData['0'].C16}}</td>
                                    <td>m3/m3</td>
                                </tr>
                                <tr>
                                    <td>理论烟气生成量 V0</td>
                                    <td>{{getData['0'].C17}}</td>
                                    <td>m3/m3</td>
                                </tr>
                                <tr>
                                    <td>实际烟气生成量 Vns</td>
                                    <td>{{getData['0'].C18}}</td>
                                    <td>m3/m3</td>
                                </tr>
                                <tr>
                                    <td>烟气不完全燃烧时烟气的修正系数 b</td>
                                    <td>α<1时</td>
                                    <td>{{getData['0'].D19}}</td>
                                </tr>
                                <tr>
                                    <td>湿烟气中水分含量 H2Osˊ</td>
                                    <td>{{getData['0'].C20}}</td>
                                    <td>%</td>
                                </tr>
                            </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>各理想气体不同温度下的平均定压比热容-表2</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                            <!-- Default panel contents -->
                            <!-- <div class="panel-heading">Panel heading</div> -->

                            <!-- Table -->
                            <table class="table">
                                <tr>
                                    <th colspan="8">各理想气体不同温度下的平均定压比热容</th>
                                </tr>
                                <tr>
                                    <td>气体平均定压比热(KJ/m3·℃)</td>
                                    <td>温度（℃）</td>
                                    <td>CO</td>
                                    <td>CO2</td>
                                    <td>H2</td>
                                    <td>H2</td>
                                </tr>
                                <tr>
                                    <td>tm</td>
                                    <td>{{getData['1'].C5}}</td>
                                    <td>{{getData['1'].D5}}</td>
                                    <td>{{getData['1'].E5}}</td>
                                    <td>{{getData['1'].F5}}</td>
                                    <td>{{getData['1'].G5}}</td>
                                </tr>
                                <tr>
                                    <td>ty2</td>
                                    <td>{{getData['1'].C6}}</td>
                                    <td>{{getData['1'].D6}}</td>
                                    <td>{{getData['1'].E6}}</td>
                                    <td>{{getData['1'].F6}}</td>
                                    <td>{{getData['1'].G6}}</td>
                                </tr>
                                <tr>
                                    <td>常温 te</td>
                                    <td>{{getData['1'].C7}}</td>
                                    <td>{{getData['1'].D7}}</td>
                                    <td>{{getData['1'].E7}}</td>
                                    <td>{{getData['1'].F7}}</td>
                                    <td>{{getData['1'].G7}}</td>
                                </tr>
                                <tr>
                                    <td>煤气在0～tm的平均定压比热 Cm</td>
                                    <td colspan="6">{{getData['1'].C8}}</td>
                                    <td>KJ/m3·℃</td>
                                </tr>
                                <tr>
                                    <td>煤气在0～te的平均定压比热 Cme</td>
                                    <td colspan="6">{{getData['1'].C9}}</td>
                                    <td>KJ/m3·℃</td>
                                </tr>
                                <tr>
                                    <td>烟气在0～ty2的平均定压比热 Cy2</td>
                                    <td colspan="6">{{getData['1'].C10}}</td>
                                    <td>KJ/m3·℃</td>
                                </tr>
                                <tr>
                                    <td>烟气在0～te的平均定压比热 Cy2e</td>
                                    <td colspan="6">{{getData['1'].C11}}</td>
                                    <td>KJ/m3·℃</td>
                                </tr>
                            </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>空气在不同温度下的平均定压比热-表3</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                <tr>
                                    <th colspan="4">空气在不同温度下的平均定压比热</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>温度(℃)</td>
                                    <td></td>
                                    <td>比热容(KJ/m3·℃)</td>
                                </tr>
                                <tr>
                                    <td>环境温度 te</td>
                                    <td>{{getData['2'].C5}}</td>
                                    <td>环境温度 Ce</td>
                                    <td>{{getData['2'].E5}}</td>
                                </tr>
                                <tr>
                                    <td>助燃空气 tk</td>
                                    <td>{{getData['2'].C6}}</td>
                                    <td>助燃空气 Ck</td>
                                    <td>{{getData['2'].E6}}</td>
                                </tr>
                                <tr>
                                    <td>冷风 tf1</td>
                                    <td>{{getData['2'].C7}}</td>
                                    <td>冷风 Cf1</td>
                                    <td>{{getData['2'].E7}}</td>
                                </tr>
                                <tr>
                                    <td>热风 tf2</td>
                                    <td>{{getData['2'].C8}}</td>
                                    <td>热风 Cf2</td>
                                    <td>{{getData['2'].E8}}</td>
                                </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热风炉燃烧期参数-表4</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                <tr>
                                    <th colspan="8">热风炉燃烧期参数</th>
                                </tr>
                                <tr>
                                    <th colspan="5">煤气</th>
                                    <th colspan="3">助燃空气</th>
                                </tr>
                                <tr>
                                    <td>压力 kPa</td>
                                    <td>流量 Vm(m3/h)</td>
                                    <td>温度 tm(℃)</td>
                                    <td>Cm(KJ/m3·℃)</td>
                                    <td>Ce(KJ/m3·℃)</td>
                                    <td>压力 kPa</td>
                                    <td>流量 Vk(m3/h)</td>
                                    <td>温度 tk(℃)</td>
                                </tr>
                                <tr>
                                    <td>{{getData['3'].B5}}</td>
                                    <td>{{getData['3'].C5}}</td>
                                    <td>{{getData['3'].D5}}</td>
                                    <td>{{getData['3'].E5}}</td>
                                    <td>{{getData['3'].F5}}</td>
                                    <td>{{getData['3'].G5}}</td>
                                    <td>{{getData['3'].H5}}</td>
                                    <td>{{getData['3'].I5}}</td>
                                </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热风炉送风期参数-表5</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                <tr>
                                    <th colspan="6">热风炉送风期参数</th>
                                </tr>
                                <tr>
                                    <th colspan="3">冷风</th>
                                    <th colspan="2">热风</th>
                                    <th colspan="1">烟气</th>
                                </tr>
                                <tr>
                                    <td>压力 kPa</td>
                                    <td>流量 Vf1(m3/h)</td>
                                    <td>温度 tf1(℃)</td>
                                    <td>压力 kPa</td>
                                    <td>温度 tf2(℃)</td>
                                    <td>温度 ty2(℃)</td>
                                </tr>
                                <tr>
                                    <td>{{getData['4'].B5}}</td>
                                    <td>{{getData['4'].C5}}</td>
                                    <td>{{getData['4'].D5}}</td>
                                    <td>{{getData['4'].E5}}</td>
                                    <td>{{getData['4'].F5}}</td>
                                    <td>{{getData['4'].G5}}</td>
                                    <td>{{getData['4'].H5}}</td>
                                    <td>{{getData['4'].I5}}</td>
                                </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热风炉炉体温度数据-表6</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                <tr>
                                    <th colspan="9">热风炉炉体温度数据</th>
                                </tr>
                                <tr>
                                    <th>部位</th>
                                    <th colspan="2">散热表面积A(m2)</th>
                                    <th colspan="2">平均温度ti(℃)</th>
                                    <th>环境温度 tm(℃)</th>
                                    <th>传热系数 K(KJ/m2·s·℃)</th>
                                    <th colspan="2">热流密度 qi(KJ/m2·s)</th>
                                </tr>
                                <tr>
                                    <td>拱顶 4g</td>
                                    <td>A4g</td>
                                    <td>{{getData['5'].D4}}</td>
                                    <td>t4g</td>
                                    <td>{{getData['5'].F4}}</td>
                                    <td rowspan="9">34</td>
                                    <td>{{getData['5'].H4}}</td>
                                    <td>q4g</td>
                                    <td>{{getData['5'].G4}}</td>
                                </tr>
                                <tr>
                                    <td>炉腰 4ly</td>
                                    <td>A4ly</td>
                                    <td>{{getData['5'].D5}}</td>
                                    <td>t4ly</td>
                                    <td>{{getData['5'].F5}}</td>
                                    <td>{{getData['5'].H5}}</td>
                                    <td>q4ly</td>
                                    <td>{{getData['5'].G5}}</td>
                                </tr>
                                <tr>
                                    <td>炉底 4ld</td>
                                    <td>A4ld</td>
                                    <td>{{getData['5'].D6}}</td>
                                    <td>t4ld</td>
                                    <td>{{getData['5'].F6}}</td>
                                    <td>{{getData['5'].H6}}</td>
                                    <td>q4ld</td>
                                    <td>{{getData['5'].G6}}</td>
                                </tr>
                                <tr>
                                    <td>冷风管道 5</td>
                                    <td>A5</td>
                                    <td>{{getData['5'].D7}}</td>
                                    <td>t5</td>
                                    <td>{{getData['5'].F7}}</td>
                                    <td>{{getData['5'].H7}}</td>
                                    <td>q5</td>
                                    <td>{{getData['5'].G7}}</td>
                                </tr>
                                <tr>
                                    <td>热风管道 6</td>
                                    <td>A6</td>
                                    <td>{{getData['5'].D8}}</td>
                                    <td>t6</td>
                                    <td>{{getData['5'].F8}}</td>
                                    
                                    <td>{{getData['5'].H8}}</td>
                                    <td>q6</td>
                                    <td>{{getData['5'].G8}}</td>
                                </tr>
                                <tr>
                                    <td>烟道 7</td>
                                    <td>A7</td>
                                    <td>{{getData['5'].D9}}</td>
                                    <td>t7</td>
                                    <td>{{getData['5'].F9}}</td>
                                    
                                    <td>{{getData['5'].H9}}</td>
                                    <td>q7</td>
                                    <td>{{getData['5'].G9}}</td>
                                </tr>
                                <tr>
                                    <td>预热装置 8</td>
                                    <td>A8</td>
                                    <td>{{getData['5'].D10}}</td>
                                    <td>t8</td>
                                    <td>{{getData['5'].F10}}</td>
                                    
                                    <td>{{getData['5'].H10}}</td>
                                    <td>q8</td>
                                    <td>{{getData['5'].G10}}</td>
                                </tr>
                                <tr>
                                    <td>预热煤气管道 9</td>
                                    <td>A9</td>
                                    <td>{{getData['5'].D11}}</td>
                                    <td>t9</td>
                                    <td>{{getData['5'].F11}}</td>
                                    
                                    <td>{{getData['5'].H11}}</td>
                                    <td>q9</td>
                                    <td>{{getData['5'].G11}}</td>
                                </tr>
                                <tr>
                                    <td>预热助燃空气管道 10</td>
                                    <td>A10</td>
                                    <td>{{getData['5'].D12}}</td>
                                    <td>t10</td>
                                    <td>{{getData['5'].F12}}</td>
                                    
                                    <td>{{getData['5'].H12}}</td>
                                    <td>q10</td>
                                    <td>{{getData['5'].G12}}</td>
                                </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热风炉外形尺寸-表7</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                <tr>
                                    <th colspan="3">热风炉外形尺寸</th>
                                </tr>
                                <tr>
                                    <td>形状</td>
                                    <td>直径 D(m)</td>
                                    <td>高度 H(m)</td>
                                </tr>
                                <tr>
                                    <td>圆柱</td>
                                    <td>{{getData['6'].C4}}</td>
                                    <td>{{getData['6'].D4}}</td>
                                </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热风炉工况-表8</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                    <tr>
                                        <th colspan="5">热风炉工况</th>
                                    </tr>
                                    <tr>
                                        <td>送风制度</td>
                                        <td>燃烧时间 τr</td>
                                        <td>送风时间 τf</td>
                                        <td>周期 τ</td>
                                        <td>单位</td>
                                    </tr>
                                    <tr>
                                        <td>两烧一送</td>
                                        <td>{{getData['7'].C4}}</td>
                                        <td>{{getData['7'].D4}}</td>
                                        <td>{{getData['7'].E4}}</td>
                                        <td>h</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热收入项目-表9</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                    <tr>
                                        <th colspan="5">（二）热收入项目</th>
                                    </tr>
                                    <tr>
                                        <td>Q1(KJ/m3)</td>
                                        <td>燃烧化学热量</td>
                                        <td>{{getData['8'].D6}}</td>
                                        <td>热风炉风量综合校正系数 Bf</td>
                                        <td>{{getData['8'].F6}}</td>
                                    </tr>
                                    <tr>
                                        <td>Q2(KJ/m3)</td>
                                        <td>燃料的物理热量</td>
                                        <td>{{getData['8'].D7}}</td>
                                        <td>漏风系数 lf</td>
                                        <td>{{getData['8'].F7}}</td>
                                    </tr>
                                    <tr>
                                        <td>Q3(KJ/m3)</td>
                                        <td>助燃空气的物理热量</td>
                                        <td>{{getData['8'].D8}}</td>
                                        <td>实际热风流量 Vf(m3/h)</td>
                                        <td>{{getData['8'].F8}}</td>
                                    </tr>
                                    <tr>
                                        <td>Q4(KJ/m3)</td>
                                        <td>冷风带入的热量</td>
                                        <td>{{getData['8'].D9}}</td>
                                        <td> 煤气单耗 B</td>
                                        <td>{{getData['8'].F9}}</td>
                                    </tr>
                                    <tr>
                                        <td>∑Q(KJ/m3)</td>
                                        <td>收入热量总和</td>
                                        <td>{{getData['8'].D10}}</td>
                                        <td>理论湿空气量 L0s(m3/m3)</td>
                                        <td>{{getData['8'].F10}}</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热支出项目-表10</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                    <tr>
                                        <th colspan="6">（三）热支出项目</th>
                                    </tr>
                                    <tr>
                                        <td>Q1ˊ</td>
                                        <td>热风带出的热量</td>
                                        <td>{{getData['9'].D4}}</td>
                                        <td>KJ/m3</td>
                                        <td>炉容积 VL(m3)</td>
                                        <td>{{getData['9'].G4}}</td>
                                    </tr>
                                    <tr>
                                        <td>Q2ˊ</td>
                                        <td>烟气带出的物理热量</td>
                                        <td>{{getData['9'].D5}}</td>
                                        <td>KJ/m3</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Q3ˊ</td>
                                        <td>化学不完全燃烧损失的热量</td>
                                        <td>{{getData['9'].D6}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q4ˊ</td>
                                        <td>炉体表面散热量</td>
                                        <td>{{getData['9'].D7}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q5ˊ</td>
                                        <td>冷风管道表面散热量</td>
                                        <td>{{getData['9'].D8}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q6ˊ</td>
                                        <td>热风管道表面散热量</td>
                                        <td>{{getData['9'].D9}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q7ˊ</td>
                                        <td>烟道表面散热量</td>
                                        <td>{{getData['9'].D10}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q8ˊ</td>
                                        <td>冷却水吸收的热量</td>
                                        <td>{{getData['9'].D11}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q9ˊ</td>
                                        <td>煤气机械水吸热量</td>
                                        <td>{{getData['9'].D12}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q10ˊ</td>
                                        <td>预热装置的表面散热量</td>
                                        <td>{{getData['9'].D13}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q11ˊ</td>
                                        <td>预热煤气管道的表面散热量</td>
                                        <td>{{getData['9'].D14}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q12ˊ</td>
                                        <td>预热助燃空气管道的表面散热量</td>
                                        <td>{{getData['9'].D15}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>Q13ˊ</td>
                                        <td>热风炉泄压带出的热量</td>
                                        <td>{{getData['9'].D16}}</td>
                                        <td>KJ/m3</td>
                                    </tr><tr>
                                        <td>△Q</td>
                                        <td>热平衡差值 △Q</td>
                                        <td>{{getData['9'].D17}}</td>
                                        <td>KJ/m3</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热风炉主要技术经济指标-表12</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                    <tr>
                                        <th colspan="5">热风炉主要技术经济指标</th>
                                    </tr>
                                    <tr>
                                        <td>序号</td>
                                        <td>指标</td>
                                        <td>符号</td>
                                        <td>单位</td>
                                        <td>数值</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>热风温度</td>
                                        <td>tf2</td>
                                        <td>℃</td>
                                        <td>{{getData['11'].F4}}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>最高拱顶温度</td>
                                        <td>tg max</td>
                                        <td>℃</td>
                                        <td>{{getData['11'].F5}}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>平均排烟温度</td>
                                        <td>ty2</td>
                                        <td>℃</td>
                                        <td>{{getData['11'].F6}}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>平均煤气流量</td>
                                        <td>Vm</td>
                                        <td>m3•h-1</td>
                                        <td>{{getData['11'].F7}}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>风流量</td>
                                        <td>Vf</td>
                                        <td>m3•h-1</td>
                                        <td>{{getData['11'].F8}}</td>
                                    </tr>
                                    <tr>
                                        <td6</td>
                                        <td>煤气燃烧的化学热量</td>
                                        <td>Q1</td>
                                        <td>KJ•m-3</td>
                                        <td>{{getData['11'].F9}}</td>
                                    </tr>

                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <h4>热诊断及热风炉效率-表13</h4>
                        <Col span="23" style='border:2px dotted #A9A9A9;border-radius:10px;margin: 0 10px'>
                            <div class="panel panel-default">
                                <table class="table">
                                    <tr>
                                        <th colspan="3">（四）热诊断</th>
                                    </tr>
                                    <tr>
                                        <td>相对误差 δ(±5%)</td>
                                        <td>{{getData['12'].C3}}</td>
                                    </tr>
                                    <tr>
                                        <th colspan="3">（五）热风炉效率</th>
                                    </tr>
                                    <tr>
                                        <td>本体热效率 η1</td>
                                        <td>{{getData['12'].C5}}</td>
                                        <td>%</td>
                                    </tr>
                                    <tr>
                                        <td>系统热效率 η2</td>
                                        <td>{{getData['12'].C6}}</td>
                                        <td>%</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                    <Spin style="height:600px" size="large" fix v-if="spinShow"></Spin>
                </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2021 &copy; blueweiwei</Footer>
        </Layout>
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value3: false,
                spinShow: true,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static',
                    
                },
                getData:{
                    0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{},11:{},12:{}
                }
            }
        },created(){
            this.getParams()
        },
        methods: {
            up() {
                this.$Message.info('This is a info tip');
            },
            getParams(){
                var routerParam=this.$route.query.data
                console.log(routerParam)
                var urls='https://79e7a44883eb44e38c99304a6b3b1d79.apig.cn-south-1.huaweicloudapis.com/doData'

                this.$axios({
                    method:"post",
                    url: 'http://add.705705.xyz/tags/forvue.php',
                    params:{
                        data:routerParam
                    }
                }).then(res=>{
                    console.log(res)
                    console.log(this.getData)
                    this.getData=JSON.parse(res.data)
                    console.log(this.getData['12'].C3)
                    this.spinShow=false
                })
             }
        }
    }
</script>
