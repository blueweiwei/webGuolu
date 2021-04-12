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
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
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
                    <div class="layout-logo"></div>
                </Menu>
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                </Breadcrumb>
                <Drawer
                    title="添加数据"
                    v-model="value3"
                    width="640"
                    :mask-closable="false"
                    :styles="styles"
                >
                    <Form :model="formData" style="padding:0 20px">
                        <h4>基本参数-表1</h4>
                        <br>
                        <div class="">
                        <label>煤气成分(%)</label>
                        <Row :gutter="16" >
                            <Col span="4" >
                                <FormItem label="CO"  label-position="top">
                                    <Input v-model="formData['0'].C7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="CO2"  label-position="top">
                                    <Input v-model="formData['0'].D7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="H2"  label-position="top">
                                    <Input v-model="formData['0'].E7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="CH4"  label-position="top">
                                    <Input v-model="formData['0'].F7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="O2"  label-position="top">
                                    <Input v-model="formData['0'].G7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="N2"  label-position="top">
                                    <Input v-model="formData['0'].H7" />
                                </FormItem>
                            </Col>
                        </Row>
                        <label>烟气成分(%)</label>
                        <Row :gutter="16" >
                            <Col span="4" >
                                <FormItem label="CO"  label-position="top">
                                    <Input v-model="formData['0'].E13" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="CO2"  label-position="top">
                                    <Input v-model="formData['0'].D13" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="H2"  label-position="top">
                                    <Input v-model="formData['0'].F13" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="CH4"  label-position="top">
                                    <Input v-model="formData['0'].H13" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="O2"  label-position="top">
                                    <Input v-model="formData['0'].C13" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="N2"  label-position="top">
                                    <Input v-model="formData['0'].G13" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row :gutter="16">
                            <Col span="12">
                                <FormItem label="干煤气含水量"  label-position="top">
                                    <Input v-model="formData['0'].C3" />
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem label="干空气含水量"  label-position="top">
                                    <Input v-model="formData['0'].C10" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>

                        <h4>各理想气体不同温度下的平均定压比热容-表2</h4>
                        <br>
                        <div class='' >
                        <label>温度</label>
                        <Row :gutter="16" >
                            <Col span="8" >
                                <FormItem label="tm"  label-position="top">
                                    <Input v-model="formData['1'].C5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="ty2"  label-position="top">
                                    <Input v-model="formData['1'].C6" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="常温 te"  label-position="top">
                                    <Input v-model="formData['1'].C7" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                        <h4>空气在不同温度下的平均定压比热-表3</h4>
                        <br>
                        <div class='' >
                        <label>温度</label>
                        <Row :gutter="16" >
                            <Col span="6" >
                                <FormItem label="环境温度 te"  label-position="top">
                                    <Input v-model="formData['2'].C5" />
                                </FormItem>
                            </Col>
                            <Col span="6" >
                                <FormItem label="助燃空气 tk"  label-position="top">
                                    <Input v-model="formData['2'].C6" />
                                </FormItem>
                            </Col>
                            <Col span="6" >
                                <FormItem label="冷风 tf1"  label-position="top">
                                    <Input v-model="formData['2'].C7" />
                                </FormItem>
                            </Col>
                            <Col span="6" >
                                <FormItem label="热风 tf2"  label-position="top">
                                    <Input v-model="formData['2'].C8" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                        <h4>热风炉燃烧期参数-表4</h4>
                        <br>
                        <div class='' >
                        <label>煤气</label>
                        <Row :gutter="16" >
                            <Col span="8" >
                                <FormItem label="压力 kPa"  label-position="top">
                                    <Input v-model="formData['3'].B5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="流量 Vm(m3/h)"  label-position="top">
                                    <Input v-model="formData['3'].C5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="温度 tm(℃)"  label-position="top">
                                    <Input v-model="formData['3'].D5" />
                                </FormItem>
                            </Col>
                        </Row>
                        <label>助燃空气</label>
                        <Row :gutter="16" >
                            <Col span="8" >
                                <FormItem label="压力 kPa"  label-position="top">
                                    <Input v-model="formData['3'].G5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="流量 Vk(m3/h)"  label-position="top">
                                    <Input v-model="formData['3'].H5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="温度 tk(℃)"  label-position="top">
                                    <Input v-model="formData['3'].I5" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                        					
                        <h4>热风炉送风期参数-表5</h4>
                        <br>
                        <div class='' >
                        <label></label>
                        <Row :gutter="16" >
                            <Col span="8" >
                                <FormItem label="冷风-压力 kPa"  label-position="top">
                                    <Input v-model="formData['4'].B5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="冷风-流量 Vf1(m3/min)"  label-position="top">
                                    <Input v-model="formData['4'].C5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="冷风-温度 tf1(℃)"  label-position="top">
                                    <Input v-model="formData['4'].D5" />
                                </FormItem>
                            </Col>
                        </Row>
                        <label></label>
                        <Row :gutter="16" >
                            <Col span="8" >
                                <FormItem label="热风-压力 kPa"  label-position="top">
                                    <Input v-model="formData['4'].E5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="热风-温度 tf2(℃)"  label-position="top">
                                    <Input v-model="formData['4'].F5" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="烟气-温度 ty2(℃)"  label-position="top">
                                    <Input v-model="formData['4'].G5" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>

                        
                        <h4>热风炉炉体温度数据-表6</h4>
                        <br>
                        <div class='' >
                        <Row :gutter="16" >
                            <Col span="16" >
                                <FormItem label="环境温度 tm(℃)"  label-position="top">
                                    <Input v-model="formData['5'].G4" />
                                </FormItem>
                            </Col>
                        </Row>
                        <label>散热表面积A(m2)</label>
                        <Row :gutter="16" >
                            <Col span="4" >
                                <FormItem label="A4g"  label-position="top">
                                    <Input v-model="formData['5'].D4" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A4ly"  label-position="top">
                                    <Input v-model="formData['5'].D5" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A4ld"  label-position="top">
                                    <Input v-model="formData['5'].D6" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A5"  label-position="top">
                                    <Input v-model="formData['5'].D7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A6"  label-position="top">
                                    <Input v-model="formData['5'].D8" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A7"  label-position="top">
                                    <Input v-model="formData['5'].D9" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A8"  label-position="top">
                                    <Input v-model="formData['5'].D10" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A9"  label-position="top">
                                    <Input v-model="formData['5'].D11" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="A10"  label-position="top">
                                    <Input v-model="formData['5'].D12" />
                                </FormItem>
                            </Col>
                        </Row>
                        <label>平均温度ti(℃)</label>
                        <Row :gutter="16" >
                            <Col span="4" >
                                <FormItem label="t4g"  label-position="top">
                                    <Input v-model="formData['5'].F4" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t4ly"  label-position="top">
                                    <Input v-model="formData['5'].F5" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t4ld"  label-position="top">
                                    <Input v-model="formData['5'].F6" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t5"  label-position="top">
                                    <Input v-model="formData['5'].F7" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t6"  label-position="top">
                                    <Input v-model="formData['5'].F8" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t7"  label-position="top">
                                    <Input v-model="formData['5'].F9" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t8"  label-position="top">
                                    <Input v-model="formData['5'].F10" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t9"  label-position="top">
                                    <Input v-model="formData['5'].F11" />
                                </FormItem>
                            </Col>
                            <Col span="4" >
                                <FormItem label="t10"  label-position="top">
                                    <Input v-model="formData['5'].F12" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                        
                        <h4>热风炉外形尺寸-表7</h4>
                        <br>
                        <div class='' >
                        <Row :gutter="16" >
                            <Col span="12" >
                                <FormItem label="直径 D(m)"  label-position="top">
                                    <Input v-model="formData['6'].C4" />
                                </FormItem>
                            </Col>
                            <Col span="12" >
                                <FormItem label="高度 H(m)"  label-position="top">
                                    <Input v-model="formData['6'].D4" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>

                        <h4>热风炉工况-表8</h4>
                        <br>
                        <div class='' >
                        <Row :gutter="16" >
                            <Col span="8" >
                                <FormItem label="燃烧时间 τr"  label-position="top">
                                    <Input v-model="formData['7'].C4" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="燃烧时间 τr"  label-position="top">
                                    <Input v-model="formData['7'].D4" />
                                </FormItem>
                            </Col>
                            <Col span="8" >
                                <FormItem label="燃烧时间 τr"  label-position="top">
                                    <Input v-model="formData['7'].E4" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                        
                        <h4>热收入项目-表9</h4>
                        <br>
                        <div class='' >
                        <Row :gutter="16" >
                            <Col span="12" >
                                <FormItem label="热风炉风量综合校正系数 Bf"  label-position="top">
                                    <Input v-model="formData['8'].F6" />
                                </FormItem>
                            </Col>
                            <Col span="12" >
                                <FormItem label="漏风系数 lf"  label-position="top">
                                    <Input v-model="formData['8'].F7" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                        
                        <h4>热支出项目-表10</h4>
                        <br>
                        <div class='' >
                        <Row :gutter="16" >
                            <Col span="12" >
                                <FormItem label="测定周期内冷却水的平均量Gs(kg/h)"  label-position="top">
                                    <Input v-model="formData['9'].K3" />
                                </FormItem>
                            </Col>
                            <Col span="6" >
                                <FormItem label="进水温度ts1(℃)"  label-position="top">
                                    <Input v-model="formData['9'].K4" />
                                </FormItem>
                            </Col>
                            <Col span="6" >
                                <FormItem label="出水温度ts2(℃)"  label-position="top">
                                    <Input v-model="formData['9'].K5" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row :gutter="16" >
                            <Col span="12" >
                                <FormItem label="冷水 ts1下 均定压比热 Cs1(KJ/(kg·℃))"  label-position="top">
                                    <Input v-model="formData['9'].K6" />
                                </FormItem>
                            </Col>
                            <Col span="12" >
                                <FormItem label="冷水 ts2下 均定压比热 Cs2(KJ/(kg·℃))"  label-position="top">
                                    <Input v-model="formData['9'].K7" />
                                </FormItem>
                            </Col>
                        </Row>
                        <Row :gutter="16" >
                            <Col span="12" >
                                <FormItem label="干煤气的机械水含量 gmj(g·m-3)"  label-position="top">
                                    <Input v-model="formData['9'].K8" />
                                </FormItem>
                            </Col>
                            <Col span="12" >
                                <FormItem label="水蒸气在0-ty2℃间的平均定压比热容 Cq"  label-position="top">
                                    <Input v-model="formData['9'].K9" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>

                        <h4>热风炉主要技术经济指标-表12</h4>
                        <br>
                        <div class='' >
                        <Row :gutter="16" >
                            <Col span="24" >
                                <FormItem label="最高拱顶温度 tg max"  label-position="top">
                                    <Input v-model="formData['11'].F5" />
                                </FormItem>
                            </Col>
                        </Row>
                        </div>
                    </Form>
                    <div class="demo-drawer-footer">
                        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                        <Button type="primary" @click="value3 = false;up(formData)">Submit</Button>
                    </div>
                </Drawer>
                <Card>
                    <div style="min-height: 400px;text-align:center;margin:auto">
                        <!-- <Button @click="value3 = true" type="primary">Create</Button> -->
                        <div><br><br><br></div>
                        <Button style="height:80px;width:160px" @click="value3 = true"  type="primary">手动输入</Button>
                        <div style="width:200px;height:80%;margin:20px auto">
                        <Upload
                            multiple
                            type="drag"
                            action="https://github.com/blueweiwei">
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>Click or drag files here to upload</p>
                            </div>
                        </Upload>
                        </div>
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
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    "0": {"C3": 24.5, "C7": 21.33, "D7": 13.44, "E7": 23.48, "F7": 8.48, "G7": 0.51, "H7": 32.76, "C10": 24.5, "C13": 4.26, "D13": 15.51, "E13": 0.006, "F13": 0.0, "G13": 80.22, "H13": 0}, 
                    "1": {"C5": 127, "C6": 253, "C7": 34}, 
                    "2": {"C5": 34, "C6": 206, "C7": 235, "C8": 1166}, 
                    "3": {"B5": 15, "C5": 93896, "D5": 127, "G5": 11, "H5": 47042, "I5": 206}, 
                    "4": {"B5": 412, "C5": 4988, "D5": 235, "E5": 406, "F5": 1166, "G5": 253}, 
                    "5": {"D4": 500, "D5": 1008, "D6": 224, "D7": 100, "D8": 150, "D9": 12, "D10": 0, "D11": 0, "D12": 0, "F4": 104, "F5": 87, "F6": 97, "F7": 143, "F8": 138, "F9": 146, "F10": 0, "F11": 0, "F12": 0, "G4": 34}, 
                    "6": {"C4": 11.2, "D4": 47.5}, 
                    "7": {"C4": 2.13, "D4": 1.2, "E4": 3}, 
                    "8": {"F6": 1, "F7": 0}, 
                    "9": {"K3": 221000, "K4": 29, "K5": 33, "K6": 1, "K7": 1.1, "K8": 5, "K9": 1}, 
                    "11": {"F5": 1100}, "12": {}}
                    }
        },
        methods: {
            up(data) {
                let Base64 = require('js-base64').Base64
                var content=Base64.encode(JSON.stringify(data))
                console.log(content)
                this.$router.push({
                    path:'/result',
                    query:{
                        data:content
                    }
                })

                // var url='https://79e7a44883eb44e38c99304a6b3b1d79.apig.cn-south-1.huaweicloudapis.com/doData'
                // var urls='https://1128475295712208.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/get_train_yupiao/caiyun1/'
                // this.$axios({
                //     method:"get",
                //     url:url,
                //     headers:{'Content-Type':'application/json'}
                // }).then(res=>console.log(res))
            }
        }
    }
</script>
