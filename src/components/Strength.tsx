import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Strength: React.FC = () => {
    const performanceData = [{
        name: "2020",
        value: 12000
    }, {
        name: "2021",
        value: 15000
    }, {
        name: "2022",
        value: 18000
    }, {
        name: "2023",
        value: 20000
    }, {
        name: "2024",
        value: 22000
    }, {
        name: "2025",
        value: 25000
    }];

    const strengthFeatures = [{
        icon: "fa-industry",
        title: "强大的生产能力",
        description: "年产能10万台，年产值2亿元人民币，拥有上百台先进的生产设备和多条高效产线"
    }, {
        icon: "fa-users",
        title: "专业的技术团队",
        description: "20+专业的技术团队，200+员工，SOP标准化生产，严格的品质管控"
    }, {
        icon: "fa-globe-asia",
        title: "完善的销售网络",
        description: "旗下设立6个控股子公司及生产工厂，经销代理商遍布全国，产品远销海外"
    }, {
        icon: "fa-certificate",
        title: "权威认证保障",
        description: "通过ISO9001质量体系认证，产品通过国际CE、CMA、CNAS、ILAC-MRA、德国TUV等认证"
    }];

    return (
        <section id="strength" className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">公司实力</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>
                {}
                <></>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {strengthFeatures.map((feature, index) => <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1
                        }}
                        viewport={{
                            once: true
                        }}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 rounded-full p-3">
                                <i className={`fa-solid ${feature.icon} text-xl text-blue-600`}></i>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    </motion.div>)}
                </div>
                {}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8
                    }}
                    viewport={{
                        once: true
                    }}
                    className="mt-16 bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">公司布局</h3>
                     <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">以深圳总部为核心，设立了华南区惠州实力工厂，华东区昆山、无锡生产工厂、合肥分公司、上海分公司，华中区长沙分公司。</p>
                    <div className="mb-8 flex justify-center">
                        <img
                            src="https://lf-code-agent.coze.cn/obj/x-ai-cn/289445266946/attachment/公司分布_20260312164242.png"
                            alt="公司分布地图"
                            className="max-w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[{
                            name: "深圳总部",
                            location: "广东深圳"
                        }, {
                            name: "惠州工厂",
                            location: "广东惠州"
                        }, {
                            name: "昆山工厂",
                            location: "江苏昆山"
                        }, {
                            name: "无锡工厂",
                            location: "江苏无锡"
                        }, {
                            name: "合肥分公司",
                            location: "安徽合肥"
                        }, {
                            name: "长沙分公司",
                            location: "湖南长沙"
                        }].map((branch, index) => <></>)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Strength;